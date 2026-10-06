# Times Digital Media: website audit, SEO/GEO/AEO strategy and implementation

Audit date: 6 October 2026 · Site: https://timesdigitalmedia.co · Stack: Next.js 16.2 (App Router, Turbopack), React 19, Tailwind 4, Framer Motion, Lenis, deployed on Vercel.

## Documents

| # | Document | What's in it |
|---|---|---|
| 01 | [Site, UX & conversion audit](01-site-ux-audit.md) | Page-by-page findings (before), with status after this work |
| 02 | [Technical SEO audit](02-technical-seo.md) | Metadata, crawlability, schema, images, speed, headers |
| 03 | [Local SEO](03-local-seo.md) | Google Business Profile (service-area), NAP, reviews |
| 04 | [Measurement & tracking](04-measurement.md) | Event map, what's live, what needs IDs, setup steps |
| 05 | [Competitor & SERP analysis](05-competitors-serp.md) | Who ranks, how they position, gaps TDM can fill |
| 06 | [Keyword map](06-keyword-map.md) | Clusters → intent → one owning page |
| 07 | [Architecture & internal linking](07-architecture-linking.md) | Final site structure, hub-and-spoke model, redirects |
| 08 | [Content plan](08-content-plan.md) | 26 prioritised topics with outlines; 6 pillars written |
| 09 | [GEO, AEO, E-E-A-T & structured data](09-geo-aeo-eeat-schema.md) | Entity definition, crawler policy, schema choices |
| 10 | [Final A–Z audit, placeholders & next steps](10-final-audit.md) | What's fixed, what needs you, every placeholder |

## Executive summary

**Where the site started.** The site looked premium but search engines and AI systems could barely understand it. There was one indexable page about services (the homepage), five service descriptions of which four were missing from the HTML, and FAQ answers that only existed after a click. Titles duplicated the brand ("… | Times Digital Media | Times Digital Media") on every inner page, and every page shared the homepage's social title. A street address and GPS coordinates were published in schema and on the About page. Stats contradicted each other (1M+ vs 2M+ followers, "audited" figures that weren't audited), prices were in USD, the audit form showed "success" even when the submission failed, and a raw "[Calendar Embed: paste iframe here]" placeholder was visible to high-budget leads.

**What's been done (12 commits on `main`, not pushed).**

- One source of truth for every fact: `src/data/` holds site/entity facts, network stats, PKR pricing, services, case studies, industries and FAQs. Change a number once and it updates copy, schema and `llms.txt`.
- Confirmed decisions applied: PKR pricing (Rs 30,000 / Rs 70,000, tax-inclusive, ad spend excluded on every package), 1M+ followers everywhere, "verified from platform insights" instead of "audited", accurate age caption, no "guarantee" wording, no street address, Lahore service-area schema.
- 40 indexable URLs (up from 15): 8 service pages + hub, pricing, free-growth-audit landing page, media network page, 4 industry pages + hub, FAQ, blog + 6 pillar guides + author page, plus the existing case studies, rebuilt with challenge → approach → results.
- Crawlability: all services, FAQ answers and client details are in the server HTML; client logos render once instead of twice; breadcrumbs and related-content modules on every inner page.
- Structured data: ProfessionalService (city-level address + areaServed), WebSite, WebPage, BreadcrumbList, Service + AggregateOffer, OfferCatalog (PKR), FAQPage, BlogPosting, ItemList.
- GEO: canonical entity description reused everywhere, explicit TDM ↔ Times of Islamabad relationship, citable facts block, deliberate AI-crawler policy, `/llms.txt`.
- Measurement: audit-funnel step events, lead events, WhatsApp/phone/email/CTA/package clicks, UTM + click-ID attribution on every form, Consent Mode v2 defaults, thank-you pages, opt-in Meta Pixel + Conversions API.
- Performance and safety: portfolio images cut from ~37 MB to ~3.2 MB, security headers, click-to-call no longer breaks when gtag is blocked, forms show a real error with WhatsApp/email fallback instead of fake success.

**What needs you.** See [10-final-audit.md](10-final-audit.md): environment variables (Meta Pixel, Google Ads lead label, Search Console/Bing tokens), Google Business Profile, case-study results and client consent, a legal review, and a short list of claims that need your approval.
