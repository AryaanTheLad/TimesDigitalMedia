# CRO Changes — Configuration & Placeholders

This document lists all configurable values introduced by the CRO optimization changes. Replace these before deploying.

---

## 1. Environment Variable — Form Endpoint

The Audit Intake Form (Change 7) posts lead data to a configurable endpoint.

| Variable | Default | Location |
|---|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | `undefined` (falls back to `console.log`) | `.env.local` or hosting provider env panel |

```bash
# .env.local
NEXT_PUBLIC_FORM_ENDPOINT=https://your-crm-webhook.com/api/leads
```

The form sends a JSON POST body:
```json
{
  "website": "...",
  "business": "...",
  "runningAds": "Yes|No|Stopped",
  "budget": "<$500|$500–2k|$2k–5k|$5k+",
  "goal": "More leads|More sales|Brand awareness|Launch",
  "name": "...",
  "email": "...",
  "whatsapp": "..."
}
```

---

## 2. Calendar Embed (Audit Form Success Screen)

In `src/components/AuditForm.tsx`, the high-budget success screen includes a placeholder div with `id="calendar-embed"`.

To add your Cal.com or Calendly embed, replace the placeholder `<div>` with the iframe embed code from your calendar provider.

---

## 3. ROI Calculator — Benchmark CPL

In `src/components/ROICalculator.tsx`, line 7:

```typescript
const BENCHMARK_CPL = 500; // PKR — edit this value to match your vertical
```

Change this to your actual average cost-per-lead in PKR to make the calculator more accurate.

---

## 4. Case Study Placeholders — Hard Numbers

Replace all `[bracketed]` placeholder values in these files:

### `src/components/ShowcaseBanner.tsx` (Ibadat University)
- `[X]` — number of qualified admission inquiries
- `[Y]` — cost per lead in PKR
- `[Z]` — campaign duration in weeks

### `src/components/CaseStudies.tsx`
**Zameen.com card:**
- `[X]` — investor leads per month
- `[Y]` — percentage qualified

**Stitch card:**
- `[X]` — ROAS multiplier (e.g. "4.2")
- `[Y]` — ad spend amount (e.g. "PKR 500K")

**Testimonial block:**
- `[Insert client testimonial here]` — 2-3 sentence quote
- `[Client Name]` — name
- `[Title, Company]` — job title and company
- `[Company Logo Placeholder]` — replace with an `<Image>` of the client's logo

---

## 5. WhatsApp Number

The WhatsApp fallback button in `AuditForm.tsx` links to `wa.me/923298223036`. Update this if the number changes.

---

## 6. Founder's Growth Checklist

In `AuditForm.tsx`, the low-budget success screen includes a "Download the Founder's Growth Checklist" button with `href="#"`. Replace with a link to the actual PDF/resource when ready.

---

## Files Modified (existing)

| File | Change |
|---|---|
| `src/components/Hero.tsx` | Changes 1 & 2 — New headline, subtitle, CTAs, trust line |
| `src/components/Stats.tsx` | Change 3 — Counter renders final value by default |
| `src/components/ShowcaseBanner.tsx` | Change 5 — Hard-number placeholders |
| `src/components/Packages.tsx` | Changes 2 & 6 — CTAs → #audit, pricing reframe |
| `src/components/Footer.tsx` | Change 2 — CTA → #audit |
| `src/components/MobileCTA.tsx` | Change 2 — CTA → #audit |
| `src/components/PortfolioCaseStudy.tsx` | Change 2 — CTA → /#audit |
| `src/app/page.tsx` | Wiring — all new components imported |

## Files Created (new)

| File | Change |
|---|---|
| `src/components/WhyTimes.tsx` | Change 4 — Owned network moat section |
| `src/components/CaseStudies.tsx` | Change 5 — Case study cards + testimonial |
| `src/components/AuditForm.tsx` | Change 7 — Multi-step audit intake form |
| `src/components/ROICalculator.tsx` | Change 8 — Interactive ROI calculator |
| `src/components/GuaranteeFAQ.tsx` | Change 9 — Guarantee strip + FAQ accordion |
