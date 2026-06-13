---
name: nextjs-app-router-conventions
description: Use when working in Next.js App Router projects - structuring routes, components, layouts, metadata, fonts, and images, and deciding server vs client component boundaries. Keywords: Next.js, App Router, server component, client component, layout, metadata, next/font, next/image.
---

# Next.js App Router Conventions

## When to use this skill
- Creating new pages, layouts, or components in a Next.js (App Router) project
- Deciding whether a component should be a Server or Client Component
- Adding fonts, images, or SEO metadata

## Project structure

  app/
    layout.tsx          # root layout: providers, fonts, global metadata
    page.tsx            # homepage
    (routes)/
      about/page.tsx
      portfolio/page.tsx
      contact/page.tsx
  components/
    ui/                  # low-level primitives (buttons, inputs)
    sections/            # page sections (Hero, Services, Packages, etc.)
    layout/              # Header, Footer, Nav
  lib/                   # utilities, constants, data
  public/                # static assets

- One section = one component file under components/sections/. Pages
  compose sections, they don't contain large inline JSX blocks.
- Shared content/data (e.g. services list, client list, package details)
  lives in lib/data.ts as typed constants - not hardcoded inline in
  multiple components.

## Server vs Client Components
- Default to Server Components. Only add "use client" when a component:
  - Uses state/hooks (useState, useEffect, useRef)
  - Uses browser-only APIs (IntersectionObserver, window, Lenis, Framer Motion)
  - Handles interaction (onClick, onChange, hover effects)
- Keep "use client" boundaries as small/deep as possible - e.g. a section
  can be a Server Component that renders a small Client Component for just
  the animated/interactive part, rather than marking the whole section client.

## Fonts
Always load fonts via next/font/google or next/font/local in the root
layout, expose as CSS variables, and reference via Tailwind config:

  import { Fraunces, Inter } from "next/font/google";
  const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
  const body = Inter({ subsets: ["latin"], variable: "--font-body" });
  // apply `${display.variable} ${body.variable}` to <html> or <body>

Never use @import for Google Fonts or link tags in <head>.

## Images
- Always use next/image, never raw <img>, for any image in public/ or
  from a configured remote source.
- Provide explicit width/height or use fill with a sized parent
  (position: relative container).
- Use priority only on the hero/above-the-fold image; lazy-load everything else.

## Metadata / SEO
- Define metadata via the metadata export (or generateMetadata for
  dynamic routes) in each page/layout - never via manual <head> tags.
- Preserve existing title, description, and Open Graph/Twitter card values
  unless explicitly asked to change them.

## Styling
- Tailwind config should define the brand design tokens (colors, font
  families, spacing scale) as theme extensions - components reference token
  names (bg-cream, text-brand-red, font-display), not raw hex values
  or arbitrary Tailwind values.
