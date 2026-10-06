# 09: GEO, AEO, E-E-A-T & structured data

## GEO: making TDM easy for AI systems to understand and cite

### Canonical entity description (use verbatim everywhere)

> Times Digital Media (TDM) is a performance marketing agency based in Lahore, Pakistan. TDM plans and manages Meta (Facebook and Instagram), Google and YouTube ad campaigns, lead generation and short-form content for businesses in Pakistan and abroad. Alongside paid ads, TDM can amplify client brands across its owned media network, which includes the Times of Islamabad news portal and the Facebook and Instagram accounts of Times of Islamabad and Times Digital Media.

Source of truth: `ENTITY.description` in `src/data/site.ts`. It's used by the About page lead, the footer, the "What does TDM do?" FAQ, Organization schema and `llms.txt`. Paste the same text into the Google Business Profile, Clutch/GoodFirms/DesignRush, the Instagram bio link page and the Facebook page "About".

### Network relationship (prevents AI merging the two brands)

> Times Digital Media and Times of Islamabad are part of the same group. TDM is the group's marketing agency; Times of Islamabad is its news publisher. Times of Islamabad's news portal and its Facebook and Instagram accounts are part of the media network TDM uses to amplify client brands. Editorial news coverage is produced by Times of Islamabad, not by TDM.

Owner confirmed (Oct 2026): same group. The optional disambiguation line *"Times Digital Media is not the same company as Media Times Limited, the Lahore-based publisher of Daily Times."* is **not** published on the site. Searches for "Times Digital Media Lahore" currently return Media Times Limited, so consider using that line on directory profiles.

### Citable facts

The "Times Digital Media at a glance" block on `/about#facts` gives name, type, location, markets, services, PKR pricing, international pricing, network stats (attributed to platform insights), selected clients and contact, all as a definition list generated from the data files.

### Statistics

All network figures come from `src/data/stats.ts`, attributed as "Verified from platform insights" with a one-line explanation. Third-party figures in articles are cited and dated (DataReportal, Meta and Google help centres, KPMG).

### Profiles and naming

`sameAs` lists only TDM's own profiles: the TDM Facebook page (facebook.com/timesofislamabadurdu, TDM's page despite the slug) and the TDM Instagram. Times of Islamabad profiles (facebook.com/TimesofIslamabad, Instagram, X) are labelled as network properties in the footer and on `/media-network`, not claimed as TDM's identity. Add LinkedIn and the GBP URL to `SOCIALS` / `TDM_SAME_AS` when they exist.

**Recommendation:** TDM's Facebook page uses the username `timesofislamabadurdu`, which tells people and machines it belongs to Times of Islamabad. If Facebook allows it, change the page username to something like `timesdigitalmedia`, then update the URL in `src/data/site.ts`. Until then, the page's name and About text should use the canonical entity description so the slug is the only mismatch.

The name is always "Times Digital Media", with "TDM" as the abbreviation.

### Crawler access: decision = allow

`robots.txt` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Claude-SearchBot, Claude-User, Google-Extended, Applebot-Extended, Bingbot and CCBot. Rationale: TDM benefits from being cited, and there's no proprietary content to protect. If you later want to opt out of *training* but stay citable, disallow GPTBot, Google-Extended, ClaudeBot and CCBot and keep the search/user agents allowed (the comment in `src/app/robots.ts` explains how).

### llms.txt

Served at `/llms.txt` and generated from the data files. It's cheap and harmless, but **not** an established ranking or citation standard; don't expect measurable impact from it alone.

### Server rendering

All key content (services, FAQs, pricing, case studies, articles, facts) is in the initial HTML. The only client-only details are the selected-package notice on `/contact` and hover states.

## AEO: answer-first content

Every service page opens with a 40–60 word definition (`service.answer`). Every guide opens with a "Short answer" box. The FAQ (`/faq`, homepage subset) answers:

| Question | Where |
|---|---|
| What does Times Digital Media do? | `/faq`, `/about` |
| Where is TDM based? | `/faq`, `/about#facts` |
| How much does TDM charge? (Rs 30,000 / Rs 70,000, tax-inclusive, ad spend separate) | Home FAQ, `/faq`, `/pricing` lead |
| Is ad spend included? | Home FAQ, `/faq`, `/pricing` FAQ, every package card |
| Do you work outside Pakistan? (yes, international pricing on request) | Home FAQ, `/faq`, `/pricing` FAQ |
| What is the TDM media network / how to advertise on Times of Islamabad? | `/faq`, `/media-network` |
| How fast will I see results? | Home FAQ, `/faq`, lead-gen service FAQ |
| What if the campaign doesn't work? (existing answer kept: a commitment, no refund implied) | Home FAQ, `/faq` |
| How much do Facebook / Google / YouTube ads cost in Pakistan? | Guide #1; #7 and #8 planned |
| Meta Ads or Google Ads? | `/faq`, guide #4 |
| What should I look for in an agency? | `/faq`, guide #6 |

## E-E-A-T

| Signal | Status |
|---|---|
| About page and company story | ✅ entity, same-group relationship, facts block (team and founder-story sections removed at owner's request) |
| Founder/team bios and photos | Not used (owner decision). Named article authors remain an optional E-E-A-T upgrade |
| Case studies with method | ✅ challenge → approach → results. 🟡 results figures needed for 5 clients |
| Testimonials | ⛔ none on the site. Collect with written permission; don't paraphrase or invent |
| Certifications | None claimed. Add "Meta Business Partner" / "Google Partner" badges only if TDM actually holds them |
| Article bylines and editorial note | ✅ "Times Digital Media Editorial Team" byline, author page with editorial standards, editorial note on every article. 🟡 switch to named authors |
| Legal pages | ✅ rewritten to match reality. 🟡 legal review |
| Consistency | ✅ all claims come from data files; 🟡 GBP and directories to be aligned (doc 03) |

## Structured data: types used and why

| Type | Where | Why |
|---|---|---|
| `ProfessionalService` (`@id /#organization`) | Every page (layout) | One entity node for TDM. ProfessionalService is a LocalBusiness/Organization subtype, so it carries both org and service-business properties. Address is **city + region + country only**; `areaServed` lists Pakistan and the main cities; `sameAs` lists only TDM-owned profiles. The old node had a street address, postcode and GPS coordinates; all removed |
| `WebSite` | Every page | Site entity, publisher → org |
| `WebPage` / `AboutPage` / `ContactPage` / `CollectionPage` / `ProfilePage` | Per page | Ties each page to the site and org |
| `BreadcrumbList` | Every inner page | Matches the visible breadcrumbs |
| `Service` + `AggregateOffer` (PKR) | Service pages | Price range derived from which packages include the service; omitted when only Custom covers it (YouTube) |
| `OfferCatalog` + `Offer` + `UnitPriceSpecification` (PKR, monthly, VAT included) | `/pricing` | Machine-readable package prices; descriptions state ad spend is not included |
| `FAQPage` | Home, `/faq`, service pages, `/pricing`, `/media-network`, `/free-growth-audit` | Google shows FAQ rich results only for limited (government/health) sites now, but the markup still helps machines parse Q&A. Only emitted where the Q&A is visible |
| `BlogPosting` | Articles | Headline, dates, image (OG card), publisher. Author is the Organization until named authors exist ([[TODO]] switch to `Person`) |
| `Blog`, `ItemList` | `/blog`, `/services`, `/portfolio` | Collection structure |
| `VideoObject` | **Not used** | Portfolio reels lack upload dates and durations, which Google requires. Add per video if you can supply `uploadDate`, `duration` and `thumbnailUrl` |
| `Review` / `AggregateRating` | **Not used** | No on-site reviews yet; never mark up third-party reviews |

Validate after deploy with Google's Rich Results Test and validator.schema.org. Every JSON-LD block on the site parsed as valid JSON in the automated check.
