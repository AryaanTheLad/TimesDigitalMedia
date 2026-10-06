# 03: Local SEO (Lahore service-area business)

TDM has no public address, so it should be set up as a **service-area business (SAB)**: the address stays hidden and service areas are shown instead.

## Google Business Profile: setup checklist (owner action)

1. Create or claim the profile at business.google.com under the business Gmail.
2. **Business name:** `Times Digital Media`, exactly. No keywords added (Google suspends keyword-stuffed names).
3. **Primary category:** *Marketing agency*. Secondary categories: *Internet marketing service*, *Advertising agency*, *Social media agency*, *Website designer*. Only add ones you actually provide.
4. **Address:** enter it for verification, then choose **"No, I deliver goods and services to customers"** / hide address. The profile must not show a street address.
5. **Service areas:** Lahore, Karachi, Islamabad, Rawalpindi (up to 20 areas; keep to cities you genuinely serve).
6. **Phone:** +92 329 8223036 (identical everywhere). **Website:** `https://timesdigitalmedia.co/?utm_source=google&utm_medium=organic&utm_campaign=gbp` (UTM so GBP traffic shows separately in GA4).
7. **Description:** use the canonical entity description from `src/data/site.ts` (`ENTITY.description`). It's 3 sentences and under 750 characters.
8. **Services:** add each of the 8 services with the one-line summaries from `src/data/services.ts`, and prices where fixed (Rs 30,000 / Rs 70,000 packages).
9. **Hours:** set to the hours you actually answer calls and WhatsApp. (The old schema claimed Mon–Fri 09:00–18:00; it was removed because nothing on the site shows hours. Add hours to the site and schema if you want them public.)
10. **Photos:** logo, cover, team at work, campaign creative you have permission to show.
11. **Verification:** video verification is common for SABs; plan for it.
12. After verification, add the GBP URL to `TDM_SAME_AS` in `src/data/site.ts`.

## Name / phone consistency (NAP without the A)

| Field | Canonical value | Where it must match |
|---|---|---|
| Name | Times Digital Media (TDM) | Site, schema, GBP, directories, Instagram bio, Facebook page |
| Phone | +92 329 8223036 | Site (from `SITE.phone`), schema, GBP, directories, WhatsApp Business |
| Email | thetimesdigitalmedia@gmail.com | Site, schema, directories |
| Location | Lahore, Pakistan (city only) | Everywhere; no street address |
| Website | https://timesdigitalmedia.co | Everywhere (apex, https) |

All on-site values now come from `src/data/site.ts`; there are no hard-coded copies left in components.

## Local relevance signals

- "Lahore" appears in the home title, hero eyebrow, footer, entity description, service page eyebrows and the schema `address` / `areaServed`.
- No city doorway pages were created. Karachi and Islamabad are named in `areaServed` and the copy where they're true (reach stats, clients). A city page is only worth building when it has unique substance, such as a case study from that city.

## Reviews (acquisition plan)

1. After each successful month, send clients the GBP review link (Profile → "Ask for reviews") on WhatsApp, with one line asking for an honest review mentioning the service used.
2. Ask happy clients to also review on Clutch or GoodFirms (see doc 05). Directory reviews feed both rankings and AI citations.
3. Reply to every review within a few days, by name, without stuffing keywords.
4. **Don't** offer incentives for reviews, review-gate, or post reviews from staff. All of these break Google's policies.
5. Only show reviews on the site that clients have agreed to have published, and add `Review`/`AggregateRating` schema only for reviews collected on-site (not copied from Google).

## Directories (consistent listings)

Priority: Clutch, GoodFirms, DesignRush, Sortlist (agency directories that rank in Pakistan SERPs), then Bing Places, Apple Business Connect and Facebook page "About" info. Use the canonical description and identical NAP.
