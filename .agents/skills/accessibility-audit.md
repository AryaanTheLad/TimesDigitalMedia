---
name: accessibility-audit
description: Use when creating or reviewing UI components, pages, or design systems. Applies WCAG AA standards for color contrast, semantic HTML, focus states, alt text, and ARIA attributes. Keywords: accessibility, a11y, WCAG, contrast, focus state, alt text, screen reader.
---

# Accessibility Audit Standards

## When to use this skill
- Creating new UI components or pages
- Introducing new color combinations (text on backgrounds)
- Adding interactive elements (buttons, links, forms, accordions, modals)

## Color contrast (WCAG AA)
- Normal body text: contrast ratio >= 4.5:1 against its background
- Large text (>=24px or >=18.5px bold, e.g. headlines): >= 3:1
- When introducing a new brand palette (e.g. cream background + near-black
  text + red accent), verify each text/background combination meets these
  ratios - don't assume a "premium" muted palette automatically passes.
  Common failure: light grey text on the cream background for secondary
  copy - check this specifically.

## Semantic HTML
- Use <button> for actions, <a> for navigation - never a styled <div>
  with an onClick handler.
- Use proper heading hierarchy (h1 -> h2 -> h3, no skipped levels) and
  only one h1 per page.
- Use <nav>, <header>, <main>, <footer>, <section> landmarks
  appropriately rather than generic <div>s for page structure.

## Focus states
- Every interactive element must have a visible focus state
  (focus-visible: in Tailwind) - do not remove default focus outlines
  without replacing them with an equally visible custom style.
- Focus order should follow visual/reading order. Test by tabbing through
  the page.

## Images & icons
- All <img>/next/image elements need meaningful alt text describing
  content/purpose - empty alt="" only for purely decorative images.
- Icon-only buttons (e.g. a hamburger menu, social icons) need an
  aria-label describing their function.

## Motion
- Respect prefers-reduced-motion (cross-reference the
  motion-and-interaction skill) - this is also an accessibility requirement,
  not just a design preference.

## Forms (contact pages)
- Every input has an associated <label> (visible or sr-only, not just a
  placeholder).
- Error/validation messages are associated with their field via
  aria-describedby and announced to screen readers.
