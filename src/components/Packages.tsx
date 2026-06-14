"use client";

import { Check, Globe, Video, TrendingUp, Search, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";

export default function Packages() {

  return (
    <section id="packages" className="relative py-8 md:py-12 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-12 flex flex-col items-center text-center gap-4">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
            07 / PRICING & RETAINERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-2">
            Growth Packages
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-xl mt-2">
            Transparent, result-driven, and high-impact digital visibility campaigns designed to scale your brand to new audiences.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-stretch">
          
          {/* ────────────────── PACKAGE 1: Starter & Maintenance ────────────────── */}
          <div className="relative rounded-[32px] bg-white border border-stone-200 p-8 flex flex-col justify-between shadow-sm overflow-hidden group">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-400">
                    Foundation
                  </span>
                </div>

                <h3 className="text-2xl font-black font-display text-[#09090b] mt-4 tracking-tight">
                  Starter & Maintenance
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium mt-3">
                  Onboarding, brand setup & ongoing management, establishing a solid, modern digital footprint. Add ons priced separately.
                </p>

                {/* Price block */}
                <div className="mt-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black font-body text-[#E8000E] leading-none">$333</span>
                    <span className="text-[#57534E] text-[10px] font-mono font-bold uppercase tracking-wider">/ month</span>
                  </div>
                </div>

                <div className="w-full border-t border-stone-200/80 my-8" />

                {/* Included features */}
                <div className="flex flex-col gap-4">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-stone-400 uppercase block">
                    Base Package Includes:
                  </span>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Website maintenance & uptime management",
                      "Social media account management (FB + IG + X)",
                      "Profile & branding optimization (bio, covers, highlights)",
                      "Monthly comprehensive performance report",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#09090b] font-medium leading-relaxed">
                        <Check className="w-4 h-4 text-[#E8000E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Paid Add-ons Grid Container */}
              <div className="mt-10 p-5 rounded-2xl bg-[#09090b] text-white border border-zinc-800 flex flex-col gap-4">
                <span className="text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                  + Available Retainer Add-ons:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: "Per Impression", desc: "CPM-boosted ad posts" },
                    { title: "Promoted Post", desc: "Single sponsored ad" },
                    { title: "Permanent Post", desc: "Always-on network ad" },
                    { title: "Extra Content", desc: "Custom posts / reels" }
                  ].map((addon, i) => (
                    <div key={i} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-left">
                      <span className="block text-[10px] font-bold text-white leading-tight">{addon.title}</span>
                      <span className="block text-[8px] font-medium text-zinc-400 mt-1 leading-tight">{addon.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors"
            >
              Choose Starter
            </Link>
          </div>


          {/* ────────────────── PACKAGE 2: Growth Engine (Highlighted) ────────────────── */}
          <div className="relative rounded-[32px] bg-white border-2 border-[#E8000E] p-8 flex flex-col justify-between shadow-md overflow-hidden group">
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#E8000E]">
                    Most Popular
                  </span>
                </div>

                <h3 className="text-2xl font-black font-display text-[#E8000E] mt-4 tracking-tight">
                  Growth Engine
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium mt-3">
                  Website development, on-page SEO, Meta Ads campaign management & lead generation under one roof.
                </p>

                {/* Price block */}
                <div className="mt-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black font-body text-[#E8000E] leading-none">$999</span>
                    <span className="text-[#57534E] text-[10px] font-mono font-bold uppercase tracking-wider">/ month</span>
                  </div>
                </div>

                <div className="w-full border-t border-stone-200/80 my-8" />

                {/* Included features */}
                <div className="flex flex-col gap-4">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-stone-400 uppercase block">
                    Everything Included:
                  </span>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Website development",
                      "Complete on-page SEO — rank high in Google",
                      "highly-designed social posts (FB + IG + X)",
                      "3-4 custom short-form reels / month",
                      "Cross-published on handles AND our 1M+ network",
                      "Full Meta Ads management (FB + IG) — ad spend included",
                      "Precision geographic & demographic audience targeting",
                      "Complete lead generation setup",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#09090b] font-medium leading-relaxed">
                        <Check className="w-4 h-4 text-[#E8000E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Network Leverage Banner */}
              <div className="mt-10 p-5 rounded-2xl bg-emerald-50 border border-emerald-100/60 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-black text-emerald-800 uppercase tracking-wide">Network Leverage Included:</span>
                  <p className="text-[9px] text-emerald-700 font-semibold mt-1 leading-relaxed">
                    Weekly posts published directly across our premium **1 Million+ follower network** for exponential organic brand visibility.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors shadow-sm"
            >
              Get Growth Engine
            </Link>
          </div>


          {/* ────────────────── PACKAGE 3: Custom Package (Enterprise) ────────────────── */}
          <div className="relative rounded-[32px] bg-white border border-stone-200 p-8 flex flex-col justify-between shadow-sm overflow-hidden group">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-400">
                    Tailor Made
                  </span>
                </div>

                <h3 className="text-2xl font-black font-display text-[#09090b] mt-4 tracking-tight">
                  Custom Package
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium mt-3">
                  Built entirely around your brand's unique goals, timeline, and budget. You select the advertising services; we construct the custom strategy.
                </p>

                {/* Price block */}
                <div className="mt-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black font-body text-[#E8000E] leading-none">Custom Terms</span>
                  </div>
                  <span className="block text-[10px] text-stone-400 font-semibold uppercase tracking-wider mt-2">
                    Scoped after discovery consultation
                  </span>
                </div>

                <div className="w-full border-t border-stone-200/80 my-8" />

                {/* Narrative box */}
                <div className="p-5 rounded-2xl bg-[#09090b] text-white text-[11px] leading-relaxed font-medium font-body border border-stone-900 mb-8">
                  Every enterprise is different. This tailor-made package is designed for clients who have specific digital requirements, aggressive growth goals, or need bespoke visibility solutions.
                </div>

                {/* Feature pick & choose list */}
                <div className="flex flex-col gap-4">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-stone-400 uppercase block">
                    Bespoke Solutions Available:
                  </span>
                  <ul className="flex flex-col gap-5">
                    {[
                      { icon: Globe, label: "Web development & design", desc: "Custom web applications, portals & student dashboards" },
                      { icon: TrendingUp, label: "Paid advertising (Meta, Google, YouTube)", desc: "Performance marketing scaling any budget or goal" },
                      { icon: Video, label: "Premium content production & reels", desc: "Bespoke high-volume content & professional editing" },
                      { icon: Search, label: "SEO & organic Search Dominance", desc: "National, regional, or competitive keyword positioning" },
                      { icon: ShieldCheck, label: "Full multi-channel campaign management", desc: "End-to-end creative concepting, execution & analytics" },
                      { icon: Mail, label: "Bespoke high-exposure network coverage", desc: "Negotiable frequency and format on our 1M+ platforms" },
                    ].map((sol, i) => {
                      const Icon = sol.icon;
                      return (
                        <li key={i} className="flex items-start gap-3 text-xs leading-normal">
                          <div className="p-1 rounded bg-zinc-100 text-[#E8000E] shrink-0 mt-0.5">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-extrabold text-[#09090b] block leading-tight">{sol.label}</span>
                            <span className="text-[10px] text-[#57534E] font-medium mt-0.5 block leading-tight">{sol.desc}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors"
            >
              Inquire Custom
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
