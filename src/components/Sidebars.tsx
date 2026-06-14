"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { DEBUG_TOGGLES } from "../app/debug-toggles";

interface SectionItem {
  id: string;
  label: string;
}

export default function Sidebars() {
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const sections: SectionItem[] = [
    { id: "hero", label: "Home" },
    { id: "metrics", label: "Metrics" },
    { id: "services", label: "Services" },
    { id: "showcase", label: "Spotlight" },
    { id: "clients", label: "Clients" },
    { id: "proof", label: "Proof" },
    { id: "packages", label: "Packages" },
  ];

  useEffect(() => {
    if (DEBUG_TOGGLES.disableIntersectionObservers) {
      return;
    }
    const observerOptions = {
      // Shrink intersection area to a 10% strip in the center of the screen
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all our sections
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    // Fallback: update on scroll at the very top of the page
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveSection("hero");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = id === "hero" ? 0 : 80;
    const targetPosition = el.getBoundingClientRect().top + window.scrollY - offset;
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.scrollTo(targetPosition);
    } else {
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Left Sidebar — Section indicator index */}
      {isHomepage && (
        <div 
          className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 select-none"
          aria-label="Section Navigation"
        >
          <div className="w-px h-16 bg-zinc-200" />
          <div className="flex flex-col gap-5 items-center">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group relative flex items-center justify-center w-6 h-6 focus:outline-none cursor-pointer"
                  title={`Scroll to ${section.label}`}
                >
                  {/* Active hover text label */}
                  <span className="absolute left-8 px-2 py-1 rounded bg-white border border-zinc-200 text-[9px] font-bold text-zinc-900 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                    {section.label}
                  </span>

                  {/* Dot */}
                  <motion.div
                    className="rounded-full w-1.5 h-1.5"
                    animate={{
                      scale: isActive ? 1.5 : 1,
                      backgroundColor: isActive ? "#E8000E" : "rgba(9,9,11,0.2)",
                      boxShadow: isActive ? "0 0 12px rgba(232,0,14,0.4)" : "none"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </button>
              );
            })}
          </div>
          <div className="w-px h-16 bg-zinc-200" />
        </div>
      )}

      {/* Right Sidebar — Vertical outline brand banner */}
      <div 
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center select-none"
        style={{
          writingMode: "vertical-rl",
        }}
      >
        <div className="flex items-center gap-4 uppercase tracking-[0.3em] font-mono text-[9px] font-bold text-zinc-500">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          <span className="text-zinc-700">Times Digital Media</span>
        </div>
      </div>
    </>
  );
}
