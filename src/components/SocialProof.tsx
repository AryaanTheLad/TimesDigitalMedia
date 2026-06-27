"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MetricCardItem {
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  imagePath: string;
  aspectClass?: string; // custom styling helper for asymmetric grid heights
  accentColor?: string; // "emerald" | "red" | "zinc"
  themeColor?: {
    bg: string;
    border: string;
    text: string;
    glow: string;
    badgeBg: string;
    badgeBorder: string;
  };
  heroStats?: {
    label: string;
    value: string;
    badge: string;
  }[];
}

function MetricCard({ item, index, itemVariants }: { item: MetricCardItem; index: number; itemVariants: any }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColor = item.themeColor?.glow || "rgba(232,0,14,0.03)";
  const borderHoverClass = item.themeColor?.border || "hover:border-[#E8000E]/20";
  const bgHoverClass = item.themeColor?.bg || "hover:bg-red-50/10";

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative rounded-[32px] border border-stone-200 p-8 flex flex-col justify-between overflow-hidden bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out ${borderHoverClass} ${bgHoverClass}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Glow Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[32px] opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full justify-between gap-6 w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 w-full">
          <h3 className="text-xl sm:text-2xl font-black font-display text-[#09090b] tracking-tight">
            {item.title}
          </h3>
          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${item.badgeClass}`}>
            {item.badge}
          </span>
        </div>

        {/* Screenshot Container Card */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-50/50 flex flex-col shadow-sm transition-colors duration-300 group-hover:border-stone-300/80">
          {/* Mock Window Top Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-200/60 bg-stone-100/40 backdrop-blur-sm">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#ff5f56]/80" />
              <div className="w-2 h-2 rounded-full bg-[#ffbd2e]/80" />
              <div className="w-2 h-2 rounded-full bg-[#27c93f]/80" />
            </div>
            <div className="px-3 py-0.5 rounded-md bg-stone-200/40 text-[9px] text-stone-500/80 font-mono flex items-center gap-1 select-none max-w-[180px] truncate">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              {item.accentColor === "emerald" ? "shopify.com/analytics" : "adsmanager.facebook.com"}
            </div>
            <div className="w-6" />
          </div>
          
          {/* Screenshot Content */}
          <div className={`relative w-full ${item.aspectClass || 'h-[200px]'} bg-[#FAF8F5]/80 p-3 flex items-center justify-center`}>
            <div className="relative w-full h-full rounded-lg overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.02]">
              <Image
                src={item.imagePath}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 95vw, 30vw"
                className="object-contain p-1"
                quality={95}
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function HeroMetricCard({ item, itemVariants }: { item: MetricCardItem; itemVariants: any }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColor = item.themeColor?.glow || "rgba(232,0,14,0.03)";
  const borderHoverClass = item.themeColor?.border || "hover:border-red-500/20";
  const bgHoverClass = item.themeColor?.bg || "hover:bg-red-50/10";

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative rounded-[32px] border border-stone-200 p-8 lg:p-10 flex flex-col justify-between overflow-hidden bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out ${borderHoverClass} ${bgHoverClass}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Glow Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[32px] opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(500px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        {/* Left Side: Text and Statistics */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${item.badgeClass}`}>
                {item.badge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8000E] animate-pulse" />
              <span className="text-[8px] font-mono text-stone-400 uppercase tracking-widest font-bold">Verified Account</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-[#09090b] tracking-tight mb-4 leading-none">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium">
              {item.description}
            </p>
          </div>

          {/* Stats Sub-Grid */}
          {item.heroStats && (
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-100">
              {item.heroStats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-400">{stat.label}</p>
                  <p className="text-xl sm:text-2xl font-black text-[#09090b] font-display mt-1">{stat.value}</p>
                  <span className={`inline-flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded-md mt-1 ${
                    item.accentColor === "emerald" 
                      ? "text-emerald-600 bg-emerald-50" 
                      : item.accentColor === "red"
                      ? "text-[#E8000E] bg-red-50"
                      : "text-stone-600 bg-stone-50"
                  }`}>
                    {stat.badge}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Browser Mockup */}
        <div className="lg:col-span-6">
          <div className="relative w-full overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-50/50 flex flex-col shadow-sm transition-colors duration-300 group-hover:border-stone-300/80">
            {/* Mock Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-200/60 bg-stone-100/40 backdrop-blur-sm">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]/80" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-2 h-2 rounded-full bg-[#27c93f]/80" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-stone-200/40 text-[9px] text-stone-500/80 font-mono flex items-center gap-1 select-none max-w-[180px] truncate">
                <span className="w-1 h-1 rounded-full bg-[#E8000E] animate-pulse" />
                adsmanager.facebook.com
              </div>
              <div className="w-6" />
            </div>
            
            {/* Screenshot Content */}
            <div className="relative w-full h-[200px] sm:h-[240px] bg-[#FAF8F5]/80 p-3 flex items-center justify-center">
              <div className="relative w-full h-full rounded-lg overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 95vw, 45vw"
                  className="object-contain p-1"
                  quality={95}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  const demographics: MetricCardItem[] = [
    {
      title: "Audience Depth",
      badge: "Demographics",
      badgeClass: "bg-stone-100 border-stone-200 text-stone-800",
      description:
        "Knowing the audience. Audited, deep-dive channel analytics that reveal exactly how and where people are finding your brand.",
      imagePath: "/demographics_age_gender.jpg",
    },
    {
      title: "Urban Hub Density",
      badge: "National Reach",
      badgeClass: "bg-stone-100 border-stone-200 text-stone-800",
      description:
        "Massive audience saturation within Pakistan's primary commercial centers, led by Karachi and Lahore, representing over 48% of total reach.",
      imagePath: "/demographics_cities.jpg",
    },
    {
      title: "Content Distribution",
      badge: "Media Channels",
      badgeClass: "bg-stone-100 border-stone-200 text-stone-800",
      description:
        "Connect with a highly influential profile, dominated by the active 25-44 age bracket and a robust 80%+ male audience split.",
      imagePath: "/demographics_countries.jpg",
    },
    {
      title: "Reach & Views",
      badge: "Engagement Surge",
      badgeClass: "bg-stone-100 border-stone-200 text-stone-800",
      description:
        "Exceptional audience visibility and content scaling, delivering a massive 40 Million+ views over 28 days.",
      imagePath: "/demographics_views.jpg",
    },
  ];

  const adsMetrics: MetricCardItem[] = [
    {
      title: "Consolidated Purchase ROAS",
      badge: "Meta Ads Manager",
      badgeClass: "bg-red-50 border-red-200 text-[#E8000E]",
      description:
        "Campaign summary showing 63 website purchases generating Rs 288,607.26 in conversion value from Rs 30,719.61 spent, scaling at 9.39x ROAS.",
      imagePath: "/media__1782593048389.jpg",
      aspectClass: "h-[200px] sm:h-[240px]",
      accentColor: "red",
      themeColor: {
        bg: "hover:bg-red-50/10",
        border: "hover:border-[#E8000E]/20",
        text: "text-[#E8000E]",
        glow: "rgba(232,0,14,0.03)",
        badgeBg: "bg-red-50 border-red-100",
        badgeBorder: "border-red-200/50",
      },
      heroStats: [
        { label: "Conversion Value", value: "Rs 288.6K", badge: "9.39x ROAS" },
        { label: "Amount Spent", value: "Rs 30.7K", badge: "Budget" },
        { label: "Purchases", value: "63 Sales", badge: "Website" },
      ],
    },
    {
      title: "Optimized Purchase Stream ROAS",
      badge: "Meta Ads Manager",
      badgeClass: "bg-red-50 border-red-200 text-[#E8000E]",
      description:
        "Individual ad set scale verification highlighting Rs 157,650.20 generated on Rs 17,837.22 ad spend at a consistent 8.84x ROAS.",
      imagePath: "/media__1782592495176.jpg",
      aspectClass: "h-[120px] sm:h-[140px]",
      accentColor: "red",
      themeColor: {
        bg: "hover:bg-red-50/10",
        border: "hover:border-[#E8000E]/20",
        text: "text-[#E8000E]",
        glow: "rgba(232,0,14,0.03)",
        badgeBg: "bg-red-50 border-red-100",
        badgeBorder: "border-red-200/50",
      },
    },
    {
      title: "High-Volume Customer Acquisition",
      badge: "Conversion Audit",
      badgeClass: "bg-red-50 border-red-200 text-[#E8000E]",
      description:
        "Scaling optimization validating 977 website purchases achieved at a highly efficient 9.15x campaign ROAS.",
      imagePath: "/media__1782592500159.jpg",
      aspectClass: "h-[120px] sm:h-[140px]",
      accentColor: "red",
      themeColor: {
        bg: "hover:bg-red-50/10",
        border: "hover:border-[#E8000E]/20",
        text: "text-[#E8000E]",
        glow: "rgba(232,0,14,0.03)",
        badgeBg: "bg-red-50 border-red-100",
        badgeBorder: "border-red-200/50",
      },
    },
    {
      title: "CPM & Impressions Efficiency",
      badge: "Performance Audit",
      badgeClass: "bg-[#09090b]/5 border-zinc-200 text-[#09090b]",
      description:
        "Reach metrics demonstrating optimal cost structure: 34K impressions and 30K reach delivered at an extremely low CPM of Rs 16.39.",
      imagePath: "/media__1782593054445.png",
      aspectClass: "h-[120px] sm:h-[140px]",
      accentColor: "zinc",
      themeColor: {
        bg: "hover:bg-stone-50/10",
        border: "hover:border-stone-500/20",
        text: "text-stone-700",
        glow: "rgba(120,113,108,0.03)",
        badgeBg: "bg-stone-50 border-stone-200",
        badgeBorder: "border-stone-200/50",
      },
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
    <section id="proof" className="relative py-8 md:py-16 bg-transparent border-t border-stone-100">
      {/* Decorative concentric outline circle */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[350px] h-[350px] pointer-events-none z-0">
        <svg className="w-full h-full text-zinc-900/[0.02] stroke-[1] stroke-current" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="25" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section eyebrow */}
        <div className="mb-12 flex flex-col items-start">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
            06 / Audited Statistics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4">
            Audience Demographics & <br />
            Reach Profile
          </h2>
        </div>

        {/* ── SUBSECTION 1: OUR SOCIAL METRICS ── */}
        <div className="mb-16">
          <div className="flex flex-col gap-2 mb-8">
            <span className="inline-block self-start text-[9px] font-mono font-bold tracking-wider uppercase text-stone-400 border border-stone-200 rounded-full px-3 py-1">
              Our Social Metrics
            </span>
            <p className="text-xs text-[#57534E] font-medium font-body leading-relaxed max-w-xl">
              Audited channel analytics showing the distribution, geographic density, and reach of our primary media network handles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {demographics.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-[32px] border border-stone-200 p-8 flex flex-col justify-between overflow-hidden bg-white shadow-sm hover:border-[#E8000E]/20 hover:shadow-[0_20px_40px_rgba(232,0,14,0.02)] transition-all duration-300"
              >
                <div className="relative z-10 flex flex-col h-full justify-between gap-6 w-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 w-full">
                    <h3 className="text-xl sm:text-2xl font-black font-display text-[#09090b]">
                      {item.title}
                    </h3>
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Screenshot Container Card */}
                  <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-stone-200/60 bg-[#F6F4EF]/30 flex flex-col shadow-inner">
                    {/* Mock Window Top Bar */}
                    <div className="flex items-center gap-1.5 px-4 py-2 border-b border-stone-200/40 bg-stone-100/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                    </div>
                    {/* Screenshot Content */}
                    <div className="flex-1 w-full h-full flex items-center justify-center p-4 relative">
                      <Image
                        src={item.imagePath}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 90vw, 45vw"
                        className="object-contain rounded-lg p-2"
                        quality={85}
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="relative my-24 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-stone-200/70" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#ffffff] px-6 font-mono text-[9px] tracking-widest text-stone-400 font-bold">
              Marketing Performance
            </span>
          </div>
        </div>

        {/* ── SUBSECTION 2: META ADS & GROWTH METRICS ── */}
        <div>
          <div className="flex flex-col gap-2 mb-12">
            <span className="inline-block self-start text-[9px] font-mono font-bold tracking-wider uppercase text-stone-400 border border-stone-200 rounded-full px-3 py-1">
              Meta Ads & Growth Metrics
            </span>
            <p className="text-xs text-[#57534E] font-medium font-body leading-relaxed max-w-xl">
              Verified ad set efficiency parameters, conversion returns, and sales dashboards showing exact proof of return on scale.
            </p>
          </div>

          {/* Symmetrical Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Hero Meta Ads Card (Spans all columns on md and lg) */}
            <div className="md:col-span-3">
              <HeroMetricCard item={adsMetrics[0]} itemVariants={itemVariants} />
            </div>

            {/* Symmetrical 3-Column secondary cards below it */}
            {adsMetrics.slice(1).map((item, index) => (
              <div key={index} className="md:col-span-1">
                <MetricCard item={item} index={index + 1} itemVariants={itemVariants} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
