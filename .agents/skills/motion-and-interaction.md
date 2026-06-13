---
name: motion-and-interaction
description: Use when implementing animations, scroll effects, hover interactions, page transitions, or number count-ups in web projects (Next.js/React). Defines smooth-scroll setup with Lenis, scroll-reveal patterns with Framer Motion or GSAP ScrollTrigger, standard easing/timing values, magnetic hover effects, and mandatory prefers-reduced-motion handling. Keywords: animation, scroll, motion, transition, hover, Lenis, Framer Motion, GSAP.
---

# Motion & Interaction Standards

## When to use this skill
- Adding scroll-triggered reveal animations
- Implementing smooth scrolling
- Adding hover/interaction effects on buttons or links
- Animating numbers/counters
- Adding page transitions

## Core principle
"Premium" motion is restrained and purposeful, not flashy. Every animation
should clarify hierarchy or guide attention - never decorate for its own sake.
Avoid bounce/elastic easing, spinning elements, or more than one moving
element drawing attention at once.

## Standard values
- Reveal animations: opacity 0->1 + translateY(16-24px)->0
- Duration: 400-700ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1) (ease-out, "premium" feel) - do NOT
  use spring/bounce easings for entrance animations
- Stagger: 50-100ms between sibling elements in a group (e.g. list items,
  grid cells)
- Trigger point: animate when element is ~20% into viewport
  (IntersectionObserver rootMargin: "0px 0px -20% 0px" or GSAP
  ScrollTrigger start: "top 80%")

## Smooth scroll (Lenis)
Install:
  npm install lenis

Provider:

  "use client";
  import { useEffect } from "react";
  import Lenis from "lenis";

  export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      return () => lenis.destroy();
    }, []);
    return <>{children}</>;
  }

Wrap the root layout's children in this provider. Skip initialization entirely
if window.matchMedia("(prefers-reduced-motion: reduce)").matches is true.

## Scroll reveals (Framer Motion)

  import { motion } from "framer-motion";

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={reveal}
  >
    {content}
  </motion.div>

For groups of items, wrap in a parent with variants containing
staggerChildren: 0.08 and apply reveal to each child.

## Count-up numbers
Use a small custom hook with IntersectionObserver + requestAnimationFrame,
or a lightweight library (e.g. react-countup). Trigger once, when ~30%
visible. Duration ~1.2-1.8s, ease-out. Never loop or re-trigger on re-scroll.

## Magnetic hover (primary CTAs, desktop only)
On mousemove within a bounded area around the button, translate the button
slightly toward the cursor (max ~8-12px offset), spring back on mouseleave.
Disable on touch devices (@media (hover: hover)).

## Mandatory: reduced motion
Every animation implementation MUST check
prefers-reduced-motion: reduce and either skip the animation (render final
state immediately) or reduce it to a simple opacity fade with no movement.
This applies to Lenis, Framer Motion variants, count-ups, and hover effects.

## Page transitions
If implementing route transitions, keep them simple: fade + slight scale
(0.98->1) over 300-400ms. Avoid full-screen wipe/curtain transitions unless
specifically requested - they add perceived load time.
