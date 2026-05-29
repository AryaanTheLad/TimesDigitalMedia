"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users } from "lucide-react";

export default function Hero() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1.0s: relaxed, elegant, premium motion
    let start: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        html.style.scrollBehavior = originalScrollBehavior;
      }
    };

    requestAnimationFrame(animation);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffffff]/70 to-[#ffffff] pointer-events-none" />

      {/* Hero-specific red radial glow — inline style prevents Tailwind purge issues */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "640px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(232,0,14,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
      >
        {/* ─── Text Content ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left gap-6"
        >
          {/* Tagline Badge */}
          <motion.span
            variants={itemVariants}
            className="text-[11px] font-extrabold uppercase tracking-widest bg-red-50 text-[#E8000E] px-3.5 py-1.5 rounded-full border border-red-200/60"
          >
            Digtial Media Agency
          </motion.span>
 
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-zinc-950"
          >
          <span className="block text-zinc-950 mb-2">High-Impact Digital Visibility{" "}</span>
            <span
              style={{
                color: "#E8000E",
                textShadow: "0 0 24px rgba(232,0,14,0.18)",
              }}
              className="underline decoration-[#E8000E] decoration-[3px] underline-offset-[8px]"
            >
              1 Million Daily Impressions
            </span>
          </motion.h1>
 
          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-zinc-700 max-w-xl font-bold leading-relaxed"
          >
            Times Digital Media agency presents a powerful and lucrative advertising platform for brands, corporations, institutes and businesses to effectively showcase their products and services to a vast, youthful audience.
          </motion.p>
 
          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2"
          >
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              className="relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-all duration-300 shadow-md hover:scale-105 active:scale-95 group w-full"
              style={{ backgroundColor: "#E8000E" }}
            >
              Explore Advertising Solutions
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
 
            <a
              href="#proof"
              onClick={(e) => handleScroll(e, "proof")}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-zinc-700 bg-zinc-100 border border-zinc-200 hover:bg-zinc-200 hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 group w-full"
            >
              Explore Demographics
            </a>
          </motion.div>
        </motion.div>
 
        {/* ─── Dashboard Visual ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="lg:col-span-5 relative w-full flex items-center justify-center"
        >
          {/* Premium High-Contrast Matte-Black Dashboard Card */}
          <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] rounded-2xl bg-zinc-950 p-6 shadow-2xl border border-zinc-800 flex flex-col justify-between overflow-hidden">
            {/* Glossy top-right shimmer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-transparent pointer-events-none rounded-2xl" />

            {/* Dashboard header dots */}
            <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] text-zinc-300 font-mono font-bold tracking-widest uppercase">
                PERFORMANCE DASHBOARD
              </span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="relative p-4 rounded-xl bg-white border border-zinc-300 shadow-sm flex flex-col justify-between aspect-video overflow-hidden">
                {/* Red Left Accent Bar (Perfectly Rounded Corner Alignment) */}
                <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#E8000E]" />
                <div className="flex items-center justify-between pl-1">
                  <span className="text-xs text-zinc-700 font-extrabold">Avg Monthly Impressions</span>
                  <Users className="w-4 h-4 text-red-500" />
                </div>
                <div className="mt-2 pl-1">
                  <span className="text-2xl font-black tracking-tight text-zinc-950">30M+</span>
                  <span className="block text-[10px] text-emerald-600 font-bold mt-1">
                    Avg Monthly Reach
                  </span>
                </div>
              </div>

              <div className="relative p-4 rounded-xl bg-white border border-zinc-300 shadow-sm flex flex-col justify-between aspect-video overflow-hidden">
                {/* Red Left Accent Bar (Perfectly Rounded Corner Alignment) */}
                <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#E8000E]" />
                <div className="flex items-center justify-between pl-1">
                  <span className="text-xs text-zinc-700 font-extrabold">Premium Audience</span>
                  <TrendingUp className="w-4 h-4 text-red-500" />
                </div>
                <div className="mt-2 pl-1">
                  <span className="text-2xl font-black tracking-tight text-zinc-950">70%</span>
                  <span className="block text-[10px] text-red-650 font-bold mt-1">
                    Ages 18–35 Segment
                  </span>
                </div>
              </div>
            </div>

            {/* Mini wave chart */}
            <div className="relative w-full h-24 overflow-hidden border border-zinc-800 rounded-xl bg-zinc-900/40 p-2 shadow-sm">
              <div className="absolute top-2 left-2 text-[10px] text-zinc-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                Impressions Stream
              </div>
              <svg className="w-full h-full pt-6" viewBox="0 0 100 30" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chart-glow-hero" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 20 C 15 28, 20 5, 35 12 C 50 20, 55 2, 70 8 C 85 14, 90 4, 100 8 L100 30 L0 30 Z"
                  fill="url(#chart-glow-hero)"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2, ease: "easeInOut", delay: 0.8 }}
                  d="M0 20 C 15 28, 20 5, 35 12 C 50 20, 55 2, 70 8 C 85 14, 90 4, 100 8"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Footer row */}
            <div className="mt-4 flex items-center justify-center text-[10px] text-zinc-300 font-bold w-full">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Audience Depth
              </span>
            </div>
          </div>
 
          {/* Floating badge top-right */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 px-4 py-2.5 rounded-xl bg-white border border-zinc-300 shadow-md flex items-center gap-2"
          >
            <div className="p-1.5 rounded-lg bg-red-500/10 text-[#E8000E]">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-zinc-400 font-bold uppercase">
                Targeting Split
              </span>
              <span className="text-xs font-black text-zinc-900">80% M / 20% F</span>
            </div>
          </motion.div>
 
          {/* Floating badge bottom-left */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-6 px-4 py-2.5 rounded-xl bg-white border border-zinc-300 shadow-md flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <span className="block text-[10px] text-zinc-400 font-bold uppercase">
                Audience Depth
              </span>
              <span className="text-xs font-black text-zinc-900">Local & International</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
