# 10: Final A–Z audit, placeholders & next steps

## Verification performed (6 October 2026, production build on localhost)

- `next build`: passes, 73 routes, TypeScript clean.
- Crawl: 40 sitemap URLs + 49 unique internal links, **0 non-200** responses; custom 404 returns 404.
- Per-page check across all 40 URLs: exactly one H1, unique titles (≤ 65 chars after fixes), descriptions 70–165 chars, canonical present, all JSON-LD parses, no banned wording ("audited", "guarantee", "premier", "Pakistan's only", USD prices, "2M+", street address) in visible HTML.
- Prerendered HTML contains all 8 service summaries, all FAQ answers and the contact form.
- Layout: no horizontal overflow at 375px or 1440px on 12 key pages; nav doesn't wrap at desktop widths.
- Audit funnel walked through all 6 steps on mobile (not submitted, to avoid sending a test lead to your inbox); `audit_step_view`/`audit_step_complete` events, consent defaults and attribution confirmed in `dataLayer`.
- Response headers: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy` present; `/case-studies` → 308 → `/portfolio`.
- **Not tested:** a live Formspree submission, Meta Pixel/CAPI (no IDs yet), field Core Web Vitals, and the site on Vercel (nothing has been pushed or deployed).

## A–Z status

| Area | Status |
|---|---|
| Accessibility | ✅ contrast, keyboard access, ARIA on menus/accordions, iframe titles. ⛔ `select-none` on mobile body (recommend removing) |
| Analytics & conversions | ✅ events, attribution, thank-you pages, consent defaults. 🟡 needs Pixel ID, CAPI token, Google Ads lead label |
| Brand consistency | ✅ one entity description, one stats file, one pricing file |
| Case studies | ✅ structure. 🟡 results for Stitch, Marshall Ahmad, Asma Tariq, Ibadat, Zoro Broast; client consent for all |
| Claims | ✅ per your decisions. ⛔ items listed under "Needs your approval" |
| Content | ✅ 8 service pages, 4 industry pages, 6 guides. 🟡 [[REVIEW]] blocks |
| Core Web Vitals | 🟡 images fixed; hero fade-in may delay LCP (needs approval to change) |
| Design | ✅ brand preserved. ⛔ Geist fonts load but aren't applied (decision needed) |
| E-E-A-T | 🟡 team, founder story and named authors needed |
| Forms | ✅ real error states, PKR fields, attribution. Endpoints unchanged |
| GBP / local | 🟡 owner action (doc 03) |
| Headers / security | ✅ basics. ⛔ CSP not added (needs a tested allow-list) |
| Images | ✅ compressed. ⚠️ delete the unused `public/media__*` files (one is a client's Shopify sales screenshot) |
| Indexing | ✅ robots, sitemap, canonicals, noindex on thank-you pages. 🟡 submit the sitemap in GSC/Bing |
| Internal linking | ✅ hub-and-spoke, breadcrumbs, no orphans |
| Legal | ✅ rewritten. 🟡 legal review, entity name, governing law |
| Metadata | ✅ consistent titles/OG/Twitter, real OG images, no keywords tag |
| Pricing | ✅ PKR, tax-inclusive, ad spend excluded everywhere, add-ons/network on request, international note |
| Redirects | ✅ host + aliases; all old URLs preserved |
| Schema | ✅ see doc 09 |
| Stats | ✅ central file, 1M+, "verified from platform insights", accurate captions |

## Needs your approval (not changed)

1. **Hero H1**: add a service keyword (doc 01 suggestion).
2. **Hero animation**: render the H1 visible by default for faster LCP.
3. **Fonts**: map Geist in Tailwind's `@theme` (changes the look) or stop loading it.
4. **About value card**: "premium audience segment, including educated youth, professionals, policymakers, business leaders, and financial elites". Platform insights support age, gender and cities, not professions. Keep, soften or remove?
5. **FAQ claims carried over:** "measurable lead flow within 14–21 days … day 30–45", and "clients across the Middle East, UK, US and Canada". Confirm these are still accurate.
6. **"Most popular"** label on the Growth package: confirm it's true (it's an implied claim).
7. **Media network formats** listed on `/media-network` (sponsored social posts, reels, news-portal placements): confirm, and whether sponsored posts are labelled as sponsored.
8. **Disambiguation line** about Media Times Limited (doc 09).
9. **Delete** the unused `public/media__*` screenshots.
10. **Image optimisation**: enable Next/Vercel image optimisation (cost decision).

## Every placeholder

Visible only in `npm run dev` (amber boxes and outlines); `Placeholder` and `Review` render nothing extra in production.

**[[TODO]]: information to supply**

| File | Item |
|---|---|
| `src/data/site.ts` | TDM's own Facebook page, LinkedIn and Google Business Profile URLs (for `sameAs`) |
| `src/app/media-network/page.tsx` | TDM's Facebook page URL (network list) |
| `src/data/tracking.ts` | Google Ads lead conversion label; Meta Pixel ID (via env vars) |
| `src/data/caseStudies.ts` | Results + publishing permission: Stitch, Marshall Ahmad, Asma Tariq Studio, Ibadat International University, Zoro Broast |
| `src/components/About.tsx` | Founder story (2–3 sentences); team names, roles, photos, bios, LinkedIn |
| `src/content/blog/index.ts`, `src/lib/schema.ts`, `src/app/blog/author/[slug]/page.tsx` | Named authors; switch BlogPosting author to Person |
| `src/app/terms/page.tsx` | Registered legal entity name / registration details |

**[[REVIEW]]: content to confirm**

| File | Item |
|---|---|
| `src/data/site.ts` | Disambiguation line vs Media Times Limited |
| `src/data/faqs.ts` | 14–21 day / 30–45 day timings; international client regions; TDM ↔ Times of Islamabad formal relationship |
| `src/data/services.ts` | Process steps and deliverables match how TDM works |
| `src/data/industries.ts` | Industry approach bullets |
| `src/data/stats.ts` | Client consent for the Ads Manager screenshots (names already hidden) |
| `src/components/About.tsx` | Audience-profile claim (approval item 4) |
| `src/app/free-growth-audit/page.tsx` | Audit process description (no account access needed for the first audit) |
| `src/app/media-network/page.tsx` | Formats and sponsored-content labelling |
| `src/components/TrackingScripts.tsx` | Whether to add a consent banner for EU/UK visitors |
| `src/components/LegalPage.tsx`, `src/app/terms/page.tsx` | Legal review; governing law and jurisdiction |
| Blog: `facebook-ads-cost-pakistan.tsx` | Seasonality pattern; industry context for the campaign numbers |
| Blog: `pay-for-meta-and-google-ads-from-pakistan.tsx` | Virtual-card guidance; **tax rates (section 236Y, provincial sales tax) from secondary sources; verify** |
| Blog: `meta-ad-account-restricted.tsx` | Common triggers seen with Pakistani advertisers |
| Blog: `meta-ads-vs-google-ads.tsx` | "Start with" recommendations by industry |
| Blog: `what-is-a-good-roas.tsx` | Context for the 9.39x / 8.84x / 9.15x campaigns |
| Blog: `how-to-choose-a-digital-marketing-agency-pakistan.tsx` | "Where TDM fits" section |

## Owner action checklist

1. Review the branch locally: `npm run dev`, then look for the amber placeholder boxes.
2. Answer the 10 approval items above.
3. Supply the TODO information (team, results, URLs, entity name).
4. Get the privacy policy and terms reviewed.
5. Push and deploy, then set the environment variables in doc 04 and redeploy.
6. Search Console: verify, submit the sitemap, and request indexing for `/pricing`, `/services/*` and `/media-network`. Bing: import from GSC.
7. Create and verify the Google Business Profile (doc 03); add its URL to `TDM_SAME_AS`.
8. List TDM on Clutch, GoodFirms, DesignRush and Sortlist with the canonical description; ask 3–5 clients for reviews.
9. Delete the unused `public/media__*` files.
10. Keep publishing from doc 08 (two per month).

## Known remaining technical issues (pre-existing)

- ESLint: 17 issues in files not otherwise touched (`LenisScroll` calls hooks after an early return, which works only because the toggle is constant; `Stats` setState-in-effect; `any` types in `Hero`/`Sidebars`).
- Unused components: `CaseStudies.tsx` (contains placeholder testimonial copy), `ROICalculator.tsx`, `ContentCreation.tsx`, `MobileCTA.tsx`, `Magnetic.tsx`. Safe to delete, or wire in deliberately.
- `CRO_CHANGES_README.md` describes the old component set and USD budgets; it's superseded by these docs.
