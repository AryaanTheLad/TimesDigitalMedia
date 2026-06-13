---
name: bespoke-frontend-design
description: Use when building, redesigning, or adding new sections, pages, or components to marketing, agency, or brand websites. Enforces a bespoke design system (typography, color, layout, spacing) and explicitly bans generic AI-template patterns such as gradient glow orbs, glassmorphic stat cards, all-caps pill badges, and repeated icon-in-circle card grids. Keywords: landing page, hero section, redesign, design system, branding, agency website.
---

# Bespoke Frontend Design Standards

## When to use this skill
- Designing or redesigning any marketing page, landing page, hero section, or content block
- Adding a new section to an existing site
- Reviewing existing UI for "generic template" patterns

## Core principle
Every section should have its own layout logic suited to its content. Do not
reuse the same "icon + heading + paragraph in a bordered card, repeated in a
3-column grid" pattern for multiple unrelated sections (services, clients,
features, stats, etc.). If two sections on the same page look structurally
identical, that's a signal to redesign one of them.

## Design tokens (Times Digital Media)
- Brand red: #E8000E — use sparingly, as an accent (CTAs, key numerals,
  underlines, small details). Never as a full-section background unless
  intentionally bold/high-contrast.
- Near-black: #09090b — primary text on light backgrounds, or background for
  intentionally dark sections.
- Warm off-white/cream: ~#F6F4EF — primary background, replaces pure white.
- 2-3 supporting greys for secondary text / dividers (e.g. #6B6B6B, #A8A8A8).
- Typography: ONE display typeface for headlines (large, oversized, clamp()
  responsive sizing, tight line-height 1.0-1.1) + ONE body sans for paragraphs/UI.
  Do not use more than these two families. Load both via next/font.
- Spacing: use a consistent scale (e.g. 4/8/12/16/24/32/48/64/96/128px) - no
  arbitrary one-off values.

## Banned patterns - never produce these unless explicitly requested
1. Radial-gradient "glow orb" / blurred particle backgrounds behind heroes or sections.
2. Glassmorphic cards (backdrop-blur + translucent background + neon border)
   used as stat widgets or "dashboard" mockups.
3. All-caps colored pill/badge labels placed above every section heading
   (e.g. "PERFORMANCE ADS"). If a label is needed, use small-caps quiet text
   or a numbered marker ("01 / Services") with no background fill.
4. Identical icon-in-circle + heading + paragraph cards repeated for 3+
   unrelated content types (services AND clients AND testimonials all using
   the same card).
5. Default shadcn/ui component styling left unmodified for marketing pages -
   shadcn primitives are fine as a base, but color, spacing, type, and
   border-radius tokens must be overridden to match the brand system above.
6. Drop shadows on every card/element by default. Use shadow sparingly and
   only where it communicates real elevation (e.g. a sticky nav).

## Layout decision guide
- Hero: oversized headline (display type) + short subhead + one CTA.
  Background = texture/grain, real photography/video, or a minimal custom
  graphic. Never a fake dashboard or glow effect.
- Stats/metrics: large numerals with count-up animation, thin dividers
  or whitespace - not bordered cards.
- Services/features: alternating asymmetric layout (image one side, text
  + index number other side, alternating left/right) OR hover/tap-reveal list.
- Logos/clients: horizontal marquee (grayscale -> color on hover), separate
  from any "selected work" case-study tiles.
- Pricing/packages: comparison layout with clear hierarchy; emphasize one
  tier with a subtle border or elevation, not a glow.
- Closing CTA: large display-type statement + single CTA before the footer.

## Process
1. Before writing code, state which layout pattern (from the decision guide)
   you're applying to the section and why.
2. After implementing, check the section against the "Banned patterns" list
   above explicitly before considering the task done.
