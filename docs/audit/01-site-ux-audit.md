# 01: Site, brand, UX & conversion audit

Status key: ✅ fixed in this work · 🟡 partly fixed / needs owner input · ⛔ open (needs approval or out of scope)

## Five-second clarity

| Question | Before | After |
|---|---|---|
| What does TDM do? | "More qualified leads in 30 days" plus "1 Million Daily Impressions"; the service list was hidden in a hover accordion | Same headline (unchanged, per brief); eyebrow now reads "Performance Marketing Agency · Lahore, Pakistan"; subtitle names Meta, Google and YouTube |
| For whom? | Implicit | Trust line plus industry pages; hero copy unchanged |
| Where? | Not stated above the fold | "Lahore, Pakistan" in the hero eyebrow, footer, schema and every service page header |
| What next? | Two CTAs (audit, results) | Unchanged in the hero; nav now has a persistent "Free Audit" button, and every inner page ends with an audit + WhatsApp CTA band |

⛔ **Hero H1 (needs your approval):** the H1 "More qualified leads in 30 days." carries no service or location keyword. Option: keep the promise and add a keyword line, e.g. *"Meta, Google & YouTube ads that bring more qualified leads in 30 days."* Not changed, because hero overhauls need your sign-off.

## Pages

| Page | Findings (before) | Status |
|---|---|---|
| Home | 4 of 5 service descriptions absent from HTML; FAQ answers JS-only; each client rendered twice; "Audited Statistics" label; card titles didn't match their screenshots (files swapped); age caption ("25–44 bracket") contradicted the 70% 18–35 headline; follower count 1M+ in some places, 2M+ in others, and X included; WhyTimes said "30M+ monthly impressions" (confirmed stat is reach); "Pakistan's only" and "premier" claims; USD prices; Starter had no ad-spend note | ✅ all fixed |
| Audit form | USD budget bands; showed success even if Formspree failed (lost leads); visible "[Calendar Embed]" placeholder on the success screen; no step tracking; no attribution | ✅ PKR bands, real error state with WhatsApp/email fallback, `/free-growth-audit/thank-you` (booking button only if `NEXT_PUBLIC_BOOKING_URL` is set), step view/complete events, UTM/click-ID attribution |
| About | Published street address; copy shared with the Times of Islamabad advertise page; "timely reporting" (news-publisher language); no team, no story; typo "digtial" | ✅ address removed, entity description, relationship section, facts block. 🟡 founder story and team are placeholders for you |
| Contact | No H1; "$" ad-spend field; `alert()` errors; hard-coded contact details | ✅ H1, Rs field, inline errors, package pre-select via `?package=`, tracking |
| Contact success | Indexed and listed in the sitemap; commented-out USD conversion snippet | ✅ noindex, removed from sitemap; lead conversion now fires on the confirmed submit |
| Portfolio | Data duplicated across two components; no challenge/approach/results; "Highest Enrollments", "record-breaking" and "1.5M+ reach" (unverified); 37 MB of PNGs; reel tiles not keyboard-reachable | ✅ single data file, case-study structure, claims handled per your decisions, images compressed, tiles are buttons. 🟡 results for Stitch, Marshall, Asma Tariq, Ibadat and Zoro need figures from you |
| Privacy / Terms | Described a client portal, social logins, affiliate ads and a "(Pvt) Ltd" entity that don't exist; "guarantee" wording | ✅ rewritten to match reality. 🟡 needs legal review and the entity name |
| 404 | Next.js default | ✅ branded 404 with routes to services, pricing and the audit |
| Unlinked routes | None found; `/icon.png` only | n/a |

## Design

The visual identity was preserved: white ground, near-black type, #E8000E accents, mono numbered eyebrows, 32px-radius cards, dark dashboard hero. New pages reuse the same tokens and layouts rather than a template look. Changes made:

- The Services list keeps the hover/accordion pattern, but content now collapses with CSS (`grid-rows`), so it's crawlable, and each row links to its service page.
- The FAQ uses native `<details>`; the look is the same and it works without JavaScript.
- Client cards are a single DOM structure, with hover reveal via CSS (no framer re-render per hover).
- The desktop nav starts at `xl` (1280px) so seven links never wrap; below that the menu button is used.

⛔ **Fonts (needs a decision):** `next/font` loads Geist and Geist Mono, but Tailwind 4 has no `@theme` mapping, so `font-sans`, `font-display` and `font-body` all fall back to the system font. The fonts download on every page for nothing. Either add a mapping in `globals.css` (`@theme { --font-sans: var(--font-geist-sans); --font-mono: var(--font-geist-mono); }`), which changes the typography you see today, or remove the font loading to save bytes. Not changed without your approval.

## Accessibility (WCAG 2.2 AA)

| Issue | Status |
|---|---|
| 9–10px `stone-400` / `zinc-400` text on white (≈2.5:1 contrast) | ✅ raised to `stone-500` / `zinc-500` (≈4.8:1) on light backgrounds |
| FAQ and service buttons lacked `aria-controls`; collapsed content still focusable | ✅ native `<details>`; services use `inert` when collapsed |
| Clickable `<div>`s (reels, creatives) not keyboard-reachable | ✅ converted to `<button>` with labels |
| Mobile menu button had no `aria-expanded`; Escape didn't close the menu | ✅ |
| Iframes without titles | ✅ titled |
| Decorative icons announced | ✅ `aria-hidden` added where touched |
| `select-none` on body (mobile) blocks copying the phone number and email | ⛔ left as-is (design choice); recommend removing |
| Custom cursor and Lenis smooth scroll | Respect `prefers-reduced-motion` already |

## Conversion points

- Primary: the free growth audit (homepage section + `/free-growth-audit`), the persistent nav CTA, and a CTA band on every inner page.
- Secondary: WhatsApp (footer, contact, audit form, thank-you pages), phone (Google Ads call conversion kept), contact form, and the media-network inquiry form.
- Pricing CTAs pass `?package=` so inquiries arrive labelled.

## Security headers

Before: only HSTS (from Vercel). After: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, and `X-Powered-By` removed. A full CSP is deferred (gtag, the Meta Pixel and the Instagram/YouTube embeds need a tested allow-list). `includeSubDomains` was deliberately not added to HSTS.
