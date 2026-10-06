# 07: Site architecture & internal linking

## Final structure

```
/                                   Home (brand + performance marketing agency Lahore)
├─ /services                        Hub (ItemList schema)
│  ├─ /services/meta-ads
│  ├─ /services/google-ads
│  ├─ /services/youtube-ads
│  ├─ /services/performance-marketing-lead-generation
│  ├─ /services/content-creation
│  ├─ /services/social-media-management
│  ├─ /services/web-development
│  └─ /services/seo
├─ /pricing                         PKR packages, comparison, OfferCatalog
├─ /free-growth-audit               Audit landing page → /free-growth-audit/thank-you (noindex)
├─ /media-network                   Advertise on Times of Islamabad + TDM network → /media-network/thank-you (noindex)
├─ /portfolio                       Case studies hub (URL kept; /case-studies 308s here)
│  └─ /portfolio/[id]               8 case studies (challenge → approach → results)
├─ /industries
│  ├─ /industries/education
│  ├─ /industries/real-estate
│  ├─ /industries/ecommerce
│  └─ /industries/artists-entertainment
├─ /blog                            Grouped by category (Meta Ads / Google & YouTube / Strategy)
│  ├─ /blog/[slug]                  6 pillar guides
│  └─ /blog/author/tdm-editorial-team
├─ /about                           Entity description, same-group relationship, facts block
├─ /faq
├─ /contact → /contact/success (noindex)
├─ /privacy, /terms
├─ /llms.txt, /robots.txt, /sitemap.xml
└─ 404
```

**Why `/portfolio` and not `/case-studies`:** the portfolio URLs were already live and indexed. Renaming them would trade existing signals for a cosmetic change. `/case-studies` and `/case-studies/:slug` permanently redirect to `/portfolio`, and the visible label is "Case Studies".

**Why no category or city pages yet:** with 6 articles, separate category pages would be thin, so categories are anchored sections on `/blog` (`/blog#meta-ads`). Add `/blog/category/[slug]` once a category has 6+ posts. City pages wait for city-specific proof (doc 06).

## Hub-and-spoke linking (implemented)

| From | Links to | Module |
|---|---|---|
| Home | Every service (services list), case studies (client cards), Ibadat case study, media network (WhyTimes), pricing, FAQ, audit | Inline + CTA |
| Service page | Related case studies, related industries, related guides, pricing, audit | `RelatedCaseStudies`, industry chips, `RelatedArticles`, price block, `CtaBand` |
| Case study | Services used | "Services used" chips in the results panel |
| Industry page | Case studies, services, guides | Related modules |
| Article | Services (related services), related articles (same category or service), pricing/audit in body | `RelatedServices`, `RelatedArticles`, `CtaBand` |
| Pricing | Every service (comparison table), media network, cost guide | Table rows + links |
| Footer (all pages) | All 8 services + company pages + legal | Footer nav |
| Nav (all pages) | Services, Pricing, Case Studies, Media Network, Blog, About, Contact, Audit | Main nav |

Anchor text is descriptive ("Meta Ads service details", "how much Facebook ads cost in Pakistan", "advertise on the media network"); there are no "click here" links.

**Orphans:** none. Every sitemap URL is linked from the nav, the footer or a hub (verified by crawl). Thank-you pages are reached only through form submission, by design.

## Breadcrumbs

Visible on every inner page (`Breadcrumbs` component) and mirrored as BreadcrumbList schema.

## Adding content later

- **New service:** add an entry to `src/data/services.ts`. The page, sitemap, footer, pricing table, schema and `llms.txt` update automatically. Set `includedIn` to match the packages.
- **New case study:** add to `src/data/caseStudies.ts`, then reference its `id` from the relevant services and industries.
- **New article:** add metadata to `src/content/blog/meta.ts`, the body to `src/content/blog/articles/<slug>.tsx`, and register it in `src/content/blog/index.ts`.
