# 02: Technical SEO audit

## Host, HTTPS, redirects

| Check | Result |
|---|---|
| `http://timesdigitalmedia.co` | 308 → `https://timesdigitalmedia.co/` (Vercel) ✅ |
| `https://www.timesdigitalmedia.co` | 308 → apex (Vercel) ✅ |
| `http://www.` | Two hops (http→https www→apex). Acceptable; a single hop needs the Vercel domain set to redirect at the HTTP layer |
| Canonical host | Non-www, matching the redirects ✅ |
| Fallback | `next.config.ts` adds a host-based www→apex permanent redirect in case the Vercel setting changes |
| Redirect codes | Next.js/Vercel "permanent" redirects return **308**, which Google treats the same as 301 |
| New aliases | `/case-studies` → `/portfolio`, `/advertise` and `/advertise-with-us` → `/media-network`, `/audit` → `/free-growth-audit`, `/insights` → `/blog` |
| Existing URLs | All preserved (`/portfolio/[id]` kept rather than renamed to `/case-studies/[slug]`) |

## Metadata

| Issue (before) | Fix |
|---|---|
| Inner titles doubled the brand: "About Us \| Times Digital Media \| Times Digital Media" | `buildMetadata()` sets an absolute title per page; the brand suffix is dropped if a title would exceed ~65 characters |
| og:title and twitter:title on every page were the homepage's | Per-page OG/Twitter title, description and URL |
| Home title, og:title and twitter:title were three different strings | One string: "Performance Marketing Agency in Lahore \| Times Digital Media" |
| `<meta name="keywords">` present (and listed TikTok, which isn't a service) | Removed |
| OG image was `logo.png` declared 1200×630 but actually 1024×444 | Generated 1200×630 PNG share cards (site default + one per service, case study and article) |
| Descriptions: some missing intent or location | Rewritten, 70–165 characters, each page unique |
| `lang="en"` | `lang="en-PK"`, `og:locale` `en_PK` |

## Crawling and indexing

- `robots.txt`: allows all; explicit allow group for AI crawlers (see doc 09); disallows `/api/` only. Thank-you pages use `noindex` and are deliberately **not** blocked, so Google can see the noindex.
- `sitemap.xml`: generated from the data files (40 URLs), fixed `lastModified` dates rather than "now on every deploy", thank-you pages excluded.
- **Server-rendered content check** (prerendered HTML): all 8 service summaries ✅, every homepage FAQ answer ✅, client names once in the visible DOM ✅, contact form + H1 ✅ (it was client-only after an earlier `useSearchParams` change; fixed).
- Every indexable page has exactly one H1 (automated check across all 40 URLs).

## Internal links, breadcrumbs, 404

- Automated crawl: 40 sitemap URLs + 49 unique internal links, **0 non-200 responses**.
- Visible breadcrumbs plus BreadcrumbList schema on every inner page.
- The footer CTA previously linked to `#audit`, which was broken on every page except the homepage; it now goes to `/free-growth-audit`.
- Custom 404 (noindex) with routes back into the site.

## Images

| Item | Before | After |
|---|---|---|
| Zoro Broast creatives (13 files) | ~37 MB PNG | ~3.2 MB JPEG (max 1600px) |
| Ibadat banner | 574 KB PNG | 38 KB JPEG |
| Logo | 564 KB | 104 KB (palette PNG) |
| Insight screenshots | Filenames described the wrong content | Renamed for what they show |
| Alt text | Titles like "Audience Depth" on a traffic-source chart | Descriptive alt stating the numbers shown, plus a visible text list of key numbers |

`next/image` is used with `unoptimized` across the site (existing convention, likely to avoid Vercel image-optimisation costs). Now that the source files are small this matters less. Enabling optimisation would add AVIF/WebP and responsive sizes; it's a cost decision for you.

⚠️ Unused files still publicly served: nine `public/media__*.png/jpg` duplicates, including **a Shopify screenshot of a client's gross sales (Rs 3.039M, Feb–Mar 2026)**. No page links to it, but anyone with the URL can open it. Recommend deleting these files.

## Content quality and duplication

- **Cross-domain duplicate:** the old footer and About copy ("Pakistan's premier … advertising platform for brands … seeking … digital visibility") closely matched the Times of Islamabad advertise page. Replaced with TDM's own entity description.
- **Thin content:** the homepage was the only service page. Now there are 8 service pages, each with unique copy.
- **Cannibalisation:** each page owns one keyword cluster (doc 06). The homepage targets the brand + "performance marketing agency Lahore"; services own their service terms; `/pricing` owns the price/package terms.

## Mobile and Core Web Vitals

- No horizontal scroll at 375px or 1440px on any tested page (automated check).
- LCP risk: the hero text starts at `opacity: 0` and fades in with framer-motion, which can delay LCP. Recommendation (hero change, needs approval): render the H1 visible by default and animate only the transform.
- The Vercel Analytics script 404s locally (expected; it only exists on Vercel).
- Not measured here: field CWV (no CrUX access from this environment). Check PageSpeed Insights and Search Console's Core Web Vitals report after deploy.

## Language

All content is English. Pakistani searches for these services are overwhelmingly English or Roman Urdu typed in Latin script; Google already matches Roman Urdu queries to English pages reasonably well. **Recommendation:** no hreflang or Urdu version now. Revisit if Search Console shows meaningful Urdu-script queries, and then build Urdu versions of the pricing and service pages first (with `hreflang="ur-PK"`).

## Lint / build

- `next build`: passes, 73 routes (40 indexable pages plus OG images, API and thank-you routes).
- ESLint: 48 problems at the original commit → 17 now. The remaining 17 are pre-existing, in files not otherwise changed (`LenisScroll` conditional hooks, `Stats` setState-in-effect, `any` in `Hero`/`Sidebars`, etc.).
