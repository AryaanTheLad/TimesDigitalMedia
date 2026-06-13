---
name: de-botify-ui
description: Refactors generic, AI-generated UI code into a bespoke, highly responsive, and premium aesthetic.
---

### Goal
To eliminate robotic buzzwords and rigid grid structures, replacing them with fluid responsiveness and professional, data-driven copy.

### Instructions
1. Scan the codebase for generic "AI-isms" in the copy (e.g., "Elevate your brand," "Unleash your potential," "Fast-paced digital world"). Replace them with direct, ROI-focused copy tailored to professional clients.
2. Refactor perfectly symmetrical layouts (like standard 3-column service cards) into modern, asymmetrical, or bento-box layouts that appear intentionally human-designed.
3. Implement fluid typography (using `clamp()` or Tailwind arbitrary values) instead of fixed media queries so the text scales flawlessly across all device widths.
4. Add subtle, high-performance micro-interactions (e.g., hover states on service packages, smooth scrolling) to establish a premium feel.

### Constraints
- Do not use standard, unmodified UI library component templates. All components must be customized to fit a unique brand aesthetic.
- Do not ignore touch targets; ensure all interactive elements have a minimum size of 44x44px for strict mobile responsiveness.
- Do not introduce new heavy client-side JavaScript libraries for animations; rely on native CSS transitions where possible.