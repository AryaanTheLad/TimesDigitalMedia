"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Globe } from "lucide-react";
import Link from "next/link";

export default function Hero() {
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-transparent"
    >
      {/* Technical Background Vector Assets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large Concentric Circles Outline */}
        <svg className="absolute left-[-15%] top-[10%] w-[600px] h-[600px] text-zinc-900/[0.03] stroke-[1] stroke-current" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="30" strokeDasharray="2 2" />
          {/* Axis lines */}
          <line x1="100" y1="5" x2="100" y2="195" />
          <line x1="5" y1="100" x2="195" y2="100" />
        </svg>

        {/* Crosshair top-right */}
        <svg className="absolute right-[10%] top-[15%] w-8 h-8 text-[#E8000E]/20 stroke-current" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="0" x2="10" y2="20" strokeWidth="1" />
          <line x1="0" y1="10" x2="20" y2="10" strokeWidth="1" />
          <circle cx="10" cy="10" r="4" fill="none" strokeWidth="1" />
        </svg>

        {/* Fine crosshair bottom-left */}
        <svg className="absolute left-[8%] bottom-[12%] w-6 h-6 text-zinc-400/30 stroke-current" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="2" x2="10" y2="18" strokeWidth="1" strokeDasharray="1 1" />
          <line x1="2" y1="10" x2="18" y2="10" strokeWidth="1" strokeDasharray="1 1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* ─── Left Column: Headline & Action Controls ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start text-left gap-6"
        >
          {/* Tagline Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E8000E]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8000E] animate-pulse" />
            <span>Digital Brand Acceleration</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-body tracking-tight text-[#09090b] leading-[1.1]">
              Digital Brand <br />
              Acceleration
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-body tracking-tight text-[#E8000E] leading-[1.1] underline decoration-[#E8000E] decoration-4 underline-offset-8 mt-2">
              1 Million Daily <br />
              Impressions
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-[#57534E] max-w-xl leading-relaxed font-body font-medium mt-2"
          >
            Times Digital Media agency presents a powerful and lucrative advertising platform for brands, corporations, institutes and businesses to effectively showcase their products and services to a vast, youthful audience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-between gap-4 px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#09090b] hover:bg-stone-850 transition-colors shadow-sm min-w-[240px]"
              >
                <span>Explore Advertising Solutions</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </motion.div>


          </motion.div>
        </motion.div>

        {/* ─── Right Column: Performance Dashboard Mockup ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.2 }}
          className="lg:col-span-6 relative w-full flex items-center justify-center"
        >
          {/* Premium Matte-Black/Dark Dashboard Card */}
          <div className="relative w-full rounded-[32px] bg-[#09090b] p-6 sm:p-8 shadow-2xl border border-zinc-800 flex flex-col gap-6 overflow-hidden">
            {/* Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.015] via-transparent to-transparent pointer-events-none rounded-[32px]" />

            {/* Dashboard header dots */}
            <div className="flex items-center gap-4 border-b border-zinc-900 pb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[9px] text-zinc-400 font-mono font-bold tracking-widest uppercase">
                Performance Dashboard
              </span>
            </div>

            {/* Stats row (Dark cohesive theme) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Monthly Impressions Card */}
              <div className="relative p-5 sm:p-6 rounded-[24px] bg-zinc-900/60 border border-zinc-800/80 shadow-sm flex flex-col justify-between overflow-hidden aspect-[4/3] sm:aspect-auto">
                <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#E8000E]" />
                <div className="flex items-start justify-between w-full">
                  <span className="text-[9px] sm:text-[10px] text-zinc-400 font-bold uppercase tracking-wider leading-none">Impressions</span>
                  <Users className="w-4 h-4 text-[#E8000E] shrink-0" />
                </div>
                <div className="flex flex-col mt-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-serif lining-nums font-bold tracking-tight text-white leading-none">30M+</span>
                  <span className="block text-[9px] sm:text-[10px] text-zinc-400 font-medium tracking-tight mt-2">
                    Avg Monthly Reach
                  </span>
                </div>
              </div>

              {/* Premium Audience Card */}
              <div className="relative p-5 sm:p-6 rounded-[24px] bg-zinc-900/60 border border-zinc-800/80 shadow-sm flex flex-col justify-between overflow-hidden aspect-[4/3] sm:aspect-auto">
                <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#E8000E]" />
                <div className="flex items-start justify-between w-full">
                  <span className="text-[9px] sm:text-[10px] text-zinc-400 font-bold uppercase tracking-wider leading-none">Demographics</span>
                  <TrendingUp className="w-4 h-4 text-[#E8000E] shrink-0" />
                </div>
                <div className="flex flex-col mt-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-serif lining-nums font-bold tracking-tight text-white leading-none">70%</span>
                  <span className="block text-[9px] sm:text-[10px] text-zinc-400 font-medium tracking-tight mt-2">
                    Ages 18–35 Segment
                  </span>
                </div>
              </div>
            </div>

            {/* Impressions Stream Chart Widget */}
            <div className="relative w-full h-24 overflow-hidden border border-zinc-900 rounded-xl bg-zinc-900/30 p-4 shadow-inner flex flex-col justify-between">
              <div className="text-[8px] text-zinc-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Impressions Stream
              </div>
              <div className="absolute inset-0 pt-8 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chart-glow-hero" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 20 C 15 25, 20 8, 35 15 C 50 22, 55 5, 70 12 C 85 18, 90 8, 100 12 L100 30 L0 30 Z"
                    fill="url(#chart-glow-hero)"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, ease: "easeInOut", delay: 0.8 }}
                    d="M0 20 C 15 25, 20 8, 35 15 C 50 22, 55 5, 70 12 C 85 18, 90 8, 100 12"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom Section indicator */}
            <div className="flex items-center justify-center gap-1.5 text-[8px] font-mono text-zinc-400 font-bold uppercase tracking-widest w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Audience Depth
            </div>
          </div>

          {/* Floating badge top-right (Targeting Split) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 px-4 py-2.5 rounded-xl bg-[#09090b] border border-zinc-800 shadow-2xl flex items-center gap-3 z-20"
          >
            <div className="p-1.5 rounded-lg bg-zinc-900 text-[#E8000E]">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[8px] text-zinc-400 font-extrabold uppercase tracking-widest">
                Targeting Split
              </span>
              <span className="text-xs font-black text-white block mt-0.5">80% M / 20% F</span>
            </div>
          </motion.div>

          {/* Floating badge bottom-left (Audience Depth) */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl bg-[#09090b] border border-zinc-800 shadow-2xl flex items-center gap-3 z-20"
          >
            <div className="p-1.5 rounded-lg bg-zinc-900 text-[#E8000E]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[8px] text-zinc-400 font-extrabold uppercase tracking-widest">
                Audience Depth
              </span>
              <span className="text-xs font-black text-white block mt-0.5">Local & International</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Editorial Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[8px] font-mono tracking-widest uppercase text-stone-400">Scroll</span>
        <div className="w-[1px] h-12 bg-stone-300 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-4 bg-[#E8000E]"
          />
        </div>
      </div>
    </section>
  );
}
