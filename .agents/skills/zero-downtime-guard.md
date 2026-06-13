---
name: zero-downtime-guard
description: Enforces strict safety protocols, visual regression checks, and non-destructive editing for live business websites.
---

### Goal
To ensure that any UI overhauls or SEO optimizations do not result in breaking changes, layout shifts, or broken routing.

### Instructions
1. Before modifying any component, copy the existing logic into a temporary backup comment block at the bottom of the file.
2. After implementing a change, utilize the Antigravity browser tool to autonomously render the page at three viewports: Mobile (390px), Tablet (768px), and Desktop (1440px).
3. Generate an `Implementation Plan` artifact detailing exactly which files will be altered before writing the final code.

### Constraints
- Do not delete existing routing files or change URL slugs, as this will result in dead links and SEO penalties.
- Do not push code without passing the browser rendering check.