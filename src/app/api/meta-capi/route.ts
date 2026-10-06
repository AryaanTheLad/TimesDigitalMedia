import { createHash } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Meta Conversions API relay for lead events.
 * Inactive (204) unless NEXT_PUBLIC_META_PIXEL_ID and META_CAPI_TOKEN are set.
 * Email/phone are SHA-256 hashed here before leaving the server, as Meta
 * requires. event_id matches the browser Pixel event for deduplication.
 */

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const TOKEN = process.env.META_CAPI_TOKEN;
const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v23.0";
const TEST_CODE = process.env.META_CAPI_TEST_EVENT_CODE;

const ALLOWED_EVENTS = new Set(["Lead", "Contact"]);

const sha256 = (v: string) => createHash("sha256").update(v).digest("hex");
const normEmail = (v?: string) => (v ? v.trim().toLowerCase() : "");
// Meta expects digits only, including country code.
const normPhone = (v?: string) => {
  if (!v) return "";
  let d = v.replace(/\D/g, "");
  if (d.startsWith("0") && d.length === 11) d = `92${d.slice(1)}`; // 03xx → 923xx
  return d;
};

export async function POST(req: NextRequest) {
  if (!PIXEL_ID || !TOKEN) return new NextResponse(null, { status: 204 });

  let body: {
    event_name?: string;
    event_id?: string;
    event_source_url?: string;
    email?: string;
    phone?: string;
    custom_data?: Record<string, string>;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  if (!body.event_name || !ALLOWED_EVENTS.has(body.event_name) || !body.event_id) {
    return NextResponse.json({ error: "invalid event" }, { status: 400 });
  }

  const email = normEmail(body.email);
  const phone = normPhone(body.phone);
  const userData: Record<string, unknown> = {
    client_ip_address: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
    client_user_agent: req.headers.get("user-agent") ?? undefined,
    fbp: req.cookies.get("_fbp")?.value,
    fbc: req.cookies.get("_fbc")?.value,
  };
  if (email) userData.em = [sha256(email)];
  if (phone) userData.ph = [sha256(phone)];

  const payload = {
    data: [
      {
        event_name: body.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.event_id,
        action_source: "website",
        event_source_url: body.event_source_url,
        user_data: userData,
        custom_data: body.custom_data,
      },
    ],
    ...(TEST_CODE ? { test_event_code: TEST_CODE } : {}),
  };

  try {
    const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[meta-capi]", res.status, await res.text());
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[meta-capi] network error", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
