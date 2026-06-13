"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState<"default" | "hover" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring-bound trailing coordinates for the outer ring
  const trailX = useSpring(mouseX, { stiffness: 260, damping: 26, mass: 0.2 });
  const trailY = useSpring(mouseY, { stiffness: 260, damping: 26, mass: 0.2 });

  useEffect(() => {
    // Hide cursor on touch devices or standard mobile viewports
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    let lastTarget: HTMLElement | null = null;
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || target === lastTarget) return;
      lastTarget = target;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      let nextType: "default" | "hover" | "view" = "default";

      if (cursorAttr === "view") {
        nextType = "view";
      } else if (
        target.closest("a, button, input, [role='button'], .clickable-hover")
      ) {
        nextType = "hover";
      }

      setHoverType((prev) => {
        if (prev !== nextType) return nextType;
        return prev;
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. Precise Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-red-600 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{ x: mouseX, y: mouseY, opacity: isVisible ? 1 : 0 }}
      />

      {/* 2. Trailing Outer Ring / Morphing Capsule */}
      <motion.div
        className="fixed top-0 left-0 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-mono font-bold text-red-500 overflow-hidden border"
        style={{
          x: trailX,
          y: trailY,
        }}
        animate={{
          width: hoverType === "view" ? 64 : hoverType === "hover" ? 44 : 20,
          height: hoverType === "view" ? 64 : hoverType === "hover" ? 44 : 20,
          backgroundColor:
            hoverType === "view"
              ? "#E8000E"
              : hoverType === "hover"
              ? "rgba(232, 0, 14, 0.05)"
              : "rgba(232, 0, 14, 0.0)",
          borderColor:
            hoverType === "view"
              ? "#E8000E"
              : hoverType === "hover"
              ? "rgba(232, 0, 14, 0.5)"
              : "rgba(9, 9, 11, 0.18)",
          borderWidth: hoverType === "default" ? "1px" : "1.5px",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 24,
          opacity: { duration: 0.2 },
        }}
      >
        <AnimatePresence>
          {hoverType === "view" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="text-white text-[9px] tracking-widest font-extrabold uppercase whitespace-nowrap"
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
