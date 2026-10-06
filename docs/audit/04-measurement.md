# 04: Measurement & tracking

## Audit (before)

| Tool | Status before |
|---|---|
| GA4 (`G-5J5THQ1C3E`) | Installed via raw `<script>` in `<head>`; page views only |
| Google Ads (`AW-18207064634`) | Installed; one "click to call" conversion. Call buttons cancelled the `tel:` link and only dialled inside the gtag callback, so **if gtag.js was blocked, the call button did nothing** |
| Google Tag Manager | Not installed |
| Meta Pixel / Conversions API | Not installed |
| Search Console / Bing Webmaster | No verification tags in the code (may be verified by DNS; check) |
| Vercel Web Analytics | Installed |
| Form events | None. The audit form fired nothing; the contact form redirected to `/contact/success` with no conversion |
| UTM handling | None. UTMs were lost before form submission |
| Consent | None |

## What's implemented now

All tracking goes through `src/lib/analytics.ts`; IDs live in `src/data/tracking.ts` and are overridable with environment variables.

| Event (GA4 name) | When | Parameters | Also sent to |
|---|---|---|---|
| `audit_step_view` | Each audit step shown | `step`, `step_name` | |
| `audit_step_complete` | Each step answered | `step`, `step_name` | |
| `generate_lead` | Audit, contact or media-network form **confirmed** submitted (Formspree 2xx) | `form`, `currency=PKR`, `value`, `budget`, `goal`, `tier`, … | Google Ads conversion (if lead label set), Meta Pixel `Lead`, Meta CAPI `Lead` (same `event_id` for deduplication) |
| `phone_click` | Any `tel:` link | `location` | Google Ads call conversion (kept, now with a fallback timer), Meta `Contact` |
| `whatsapp_click` | Any WhatsApp link | `location` | Meta `Contact` |
| `email_click` | mailto links | `location` | |
| `cta_click` | Audit CTAs (nav, hero, footer, CTA bands, service headers, case studies) | `cta`, `location` | |
| `package_cta_click` | Package buttons | `package_id`, `location` | Meta custom `PackageInterest` |

- **Attribution:** `utm_source/medium/campaign/term/content`, `gclid`, `fbclid`, landing page and referrer host are stored in `sessionStorage` on arrival and added to every form payload, so they appear in the Formspree email for each lead.
- **Thank-you pages:** `/free-growth-audit/thank-you`, `/media-network/thank-you`, `/contact/success`, all `noindex`. Conversions fire on the confirmed submit, not on page load, so refreshes don't double-count. The URLs can still be used as destination goals.
- **Consent Mode v2:** ad and analytics storage default to `denied` for EEA/UK/CH visitors and `granted` elsewhere. There's no banner, so EEA visitors stay in cookieless mode; add a CMP if EU/UK traffic becomes important.
- **Early events:** if a form mounts before gtag initialises, events are queued on `dataLayer` and replayed (this fixed a dropped step-1 event).

## Owner setup steps

Set these in Vercel → Project → Settings → Environment Variables, then redeploy:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | Turns on the Meta Pixel and CAPI client calls |
| `META_CAPI_TOKEN` (server only) | Conversions API access token (Events Manager → Settings → Generate token) |
| `META_CAPI_TEST_EVENT_CODE` (optional) | Use while testing in Events Manager, then remove |
| `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` | Create a "Submit lead form" conversion action in Google Ads and paste its label |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag token (or verify via DNS instead) |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster token (or import from Search Console) |
| `NEXT_PUBLIC_BOOKING_URL` (optional) | Cal.com/Calendly link shown to priority leads on the audit thank-you page |

Then:

1. **GA4:** Admin → Events → mark `generate_lead` as a **key event**. Build a funnel exploration `audit_step_view` (1 → 6) → `generate_lead`. Register custom dimensions `form`, `location`, `step_name`, `package_id`.
2. **Google Ads:** import the GA4 key event, or use the new lead label. Keep the call conversion. Link GA4 ↔ Ads.
3. **Search Console:** add the domain property, submit `https://timesdigitalmedia.co/sitemap.xml`. **Bing Webmaster Tools:** import from Search Console.
4. **Meta:** Events Manager → verify the domain, test Pixel + CAPI with the test code, and check the deduplication rate.
5. **GTM (optional):** the site works without GTM. Move to GTM only if non-developers need to add tags; then replace `TrackingScripts.tsx` with the GTM snippet and recreate these events as dataLayer triggers.
6. **Formspree:** both forms post to existing endpoints (`xgojeddr` for the audit, `xgobwwyj` for contact and media network; the subject line distinguishes them). Check spam settings so leads aren't filtered.

## Reporting cadence

Weekly: leads by form and source (UTM), audit funnel drop-off by step, WhatsApp vs form vs phone. Monthly: cost per lead by channel for TDM's own ads, Search Console clicks for service and blog pages, branded search impressions (a GEO/brand-awareness proxy).
