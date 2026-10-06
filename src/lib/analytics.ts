/**
 * Client-side event tracking. One call fans out to:
 *  - GA4 + Google Ads via gtag (loaded in the root layout)
 *  - Meta Pixel via fbq (only if NEXT_PUBLIC_META_PIXEL_ID is set)
 *  - Meta Conversions API via /api/meta-capi for lead events (only if
 *    META_CAPI_TOKEN is set server-side), deduplicated with event_id.
 *
 * Event names follow GA4 recommended events where one exists
 * (generate_lead) and are otherwise snake_case custom events.
 */

import { TRACKING } from "@/data/tracking";

type Params = Record<string, string | number | boolean | undefined>;

type GtagFn = (...args: unknown[]) => void;
type FbqFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    fbq?: FbqFn;
    dataLayer?: unknown[];
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const isBrowser = () => typeof window !== "undefined";

export function track(event: string, params: Params = {}) {
  if (!isBrowser()) return;
  window.gtag?.("event", event, params);
}

const newEventId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

/* ── Attribution (UTM + click IDs), captured once per session ─────────── */

const ATTRIBUTION_KEY = "tdm_attribution";
const ATTRIBUTION_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;

export type Attribution = Partial<Record<(typeof ATTRIBUTION_PARAMS)[number] | "landing_page" | "referrer", string>>;

export function captureAttribution() {
  if (!isBrowser()) return;
  try {
    const url = new URL(window.location.href);
    const fromUrl: Attribution = {};
    ATTRIBUTION_PARAMS.forEach((k) => {
      const v = url.searchParams.get(k);
      if (v) fromUrl[k] = v.slice(0, 200);
    });
    const existing = sessionStorage.getItem(ATTRIBUTION_KEY);
    // A new campaign click overrides; otherwise keep first touch for the session.
    if (!existing || Object.keys(fromUrl).length > 0) {
      const data: Attribution = {
        ...fromUrl,
        landing_page: url.pathname,
        referrer: document.referrer ? new URL(document.referrer).hostname : "direct",
      };
      sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
    }
  } catch {
    /* storage unavailable (private mode) — attribution is best-effort */
  }
}

export function getAttribution(): Attribution {
  if (!isBrowser()) return {};
  try {
    return JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || "{}");
  } catch {
    return {};
  }
}

/* ── Conversion helpers ──────────────────────────────────────────────── */

interface LeadInput {
  form: "audit" | "contact" | "media_network";
  email?: string;
  phone?: string;
  value?: number;
  extra?: Params;
}

/** Fires on successful form submission (also called from thank-you pages). */
export function trackLead({ form, email, phone, value, extra = {} }: LeadInput) {
  if (!isBrowser()) return;
  const eventId = newEventId();
  track("generate_lead", { form, currency: "PKR", value: value ?? 1, ...extra });

  if (TRACKING.googleAdsLeadLabel) {
    window.gtag?.("event", "conversion", {
      send_to: `${TRACKING.googleAdsId}/${TRACKING.googleAdsLeadLabel}`,
      value: value ?? 1,
      currency: "PKR",
      transaction_id: eventId,
    });
  }

  window.fbq?.("track", "Lead", { content_name: form }, { eventID: eventId });

  // Server-side duplicate for Meta CAPI; the route no-ops if not configured.
  if (TRACKING.metaPixelId) {
    fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        event_name: "Lead",
        event_id: eventId,
        event_source_url: window.location.href,
        email,
        phone,
        custom_data: { content_name: form },
      }),
    }).catch(() => {});
  }
}

/** Phone clicks keep the existing Google Ads "click to call" conversion. */
export function handlePhoneClick(e: React.MouseEvent<HTMLAnchorElement>, location: string, tel: string) {
  track("phone_click", { location });
  window.fbq?.("track", "Contact", { method: "phone" });
  if (window.gtag_report_conversion) {
    e.preventDefault();
    window.gtag_report_conversion(`tel:${tel}`);
  }
}

export function trackWhatsAppClick(location: string) {
  track("whatsapp_click", { location });
  window.fbq?.("track", "Contact", { method: "whatsapp" });
}

export function trackEmailClick(location: string) {
  track("email_click", { location });
}

export function trackCta(cta: string, location: string) {
  track("cta_click", { cta, location });
}

export function trackPackageCta(packageId: string, location: string) {
  track("package_cta_click", { package_id: packageId, location });
  window.fbq?.("trackCustom", "PackageInterest", { package_id: packageId });
}

export function trackAuditStep(step: number, stepName: string, action: "view" | "complete") {
  track(action === "view" ? "audit_step_view" : "audit_step_complete", { step, step_name: stepName });
}
