"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DEBUG_TOGGLES } from "../app/debug-toggles";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

function Counter({ 
  value, 
  suffix = "", 
  duration = 1.5, 
  animate = true 
}: { 
  value: number; 
  suffix?: string; 
  duration?: number; 
  animate?: boolean; 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Always initialize with the FINAL value so SSR/no-JS/reduced-motion never shows 0
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(!animate);
  const [canAnimate, setCanAnimate] = useState(false);

  // On mount (client only), check if we can animate
  useEffect(() => {
    if (!animate) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasAnimated(true);
      return;
    }

    // Motion is allowed - set to 0 so we can count up
    setCanAnimate(true);
    setDisplayValue(0);
  }, [animate]);

  // Setup intersection observer
  useEffect(() => {
    if (!canAnimate || hasAnimated) return;

    if (DEBUG_TOGGLES.disableIntersectionObservers) {
      setHasAnimated(true);
      setDisplayValue(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, value, canAnimate]);

  // Handle animation loop
  useEffect(() => {
    if (!canAnimate || !hasAnimated) return;

    if (DEBUG_TOGGLES.disableIntersectionObservers) {
      setDisplayValue(value);
      return;
    }

    let rafId: number;
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Cubic out ease (fast start, slow end)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * value);
      
      setDisplayValue(currentVal);
      
      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    
    rafId = window.requestAnimationFrame(step);
    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [hasAnimated, value, duration, canAnimate]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsData: StatItemProps[] = [
    {
      value: 1,
      suffix: "M+",
      label: "Daily Impressions",
      description:
        "High-impact visibility delivering active reach to a dynamic, buying audience daily.",
    },
    {
      value: 30,
      suffix: "M+",
      label: "Monthly Footprint",
      description:
        "Extensive brand exposure and engagement scaling across all digital campaign assets.",
    },
    {
      value: 2,
      suffix: "M+",
      label: "Platform Followers",
      description:
        "An organic, active community nurtured across official Facebook, Instagram, and X channels.",
    },
    {
      value: 70,
      suffix: "%",
      label: "18-35 Core Demographic",
      description:
        "Precision targeted reach focusing on high-purchasing youth segments (80% M / 20% F).",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="metrics" className="relative py-8 md:py-12 overflow-hidden bg-transparent border-t border-stone-200/50">


      {/* Decorative Crosshairs */}
      <div className="absolute right-[5%] bottom-[10%] pointer-events-none z-0">
        <svg className="w-5 h-5 text-zinc-900/[0.04]" viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <line x1="10" y1="2" x2="10" y2="18" strokeWidth="0.8" />
          <line x1="2" y1="10" x2="18" y2="10" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section eyebrow */}
        <div className="mb-8 md:mb-10 flex flex-col items-start">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
            02 / Key Metrics
          </span>
          <h2 className="text-xl md:text-2xl font-black font-display tracking-tight text-[#09090b] mt-3">
            Performance at Scale
          </h2>
        </div>

        {/* Horizontal Editorial Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-y-0"
        >
          {statsData.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`relative flex flex-col items-start px-0 md:px-8 first:pl-0 last:pr-0`}
            >
              {/* Vertical divider on desktop, horizontal on mobile */}
              {index > 0 && (
                <>
                  <div className="hidden md:block absolute left-0 top-4 bottom-4 w-[1px] bg-stone-200" />
                  <div className="block md:hidden w-full h-[1px] bg-stone-200 mb-8" />
                </>
              )}

              {/* Massive Numeral */}
              <div className="text-6xl sm:text-7xl lg:text-8xl font-serif lining-nums font-bold tracking-tight text-[#E8000E] leading-none mb-6">
                <Counter value={stat.value} suffix={stat.suffix} animate={stat.value !== 1} />
              </div>

              {/* Label */}
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-[#09090b] mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium max-w-xs">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

