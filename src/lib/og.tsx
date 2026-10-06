import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";
import { NETWORK_STATS } from "@/data/stats";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Branded 1200×630 share card. Matches the site's look: white ground,
 * near-black type, brand red (#E8000E) accents.
 */
export function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px 72px",
          borderLeft: "16px solid #E8000E",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 900, letterSpacing: -1 }}>
          <span style={{ color: "#09090b" }}>TIMES</span>
          <span style={{ color: "#E8000E" }}>DIGITAL MEDIA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: "#E8000E", textTransform: "uppercase", letterSpacing: 3 }}>
            {eyebrow}
          </div>
          <div style={{ display: "flex", fontSize: title.length > 60 ? 56 : 68, fontWeight: 900, color: "#09090b", lineHeight: 1.05, letterSpacing: -2 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, color: "#57534E", fontWeight: 600 }}>
          <span>{footer ?? `Lahore, Pakistan · ${NETWORK_STATS.followers.display} follower media network`}</span>
          <span style={{ color: "#09090b" }}>{SITE.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
