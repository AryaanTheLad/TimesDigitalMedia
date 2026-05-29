"use client";

import { Check, Globe, Video, TrendingUp, Search, ShieldCheck, Mail } from "lucide-react";

export default function Packages() {
  return (
    <section id="packages" className="relative py-24 bg-white overflow-hidden">
      {/* Visual Background Decorators */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-zinc-50/30 to-[#ffffff] pointer-events-none" />

      {/* Red Ambient Glow behind sections */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(232,0,14,0.03) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest bg-red-50 text-[#E8000E] px-3.5 py-1.5 rounded-full border border-red-200/60">
            Our Packages
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-[1.15]">
            Choose Your <span className="text-[#E8000E]">Growth Package</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-bold leading-relaxed">
            Transparent, result-driven, and high-impact digital visibility campaigns designed to scale your brand to new audiences.
          </p>
        </div>

        {/* Packages Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* ────────────────── PACKAGE 1: Starter & Maintenance ────────────────── */}
          <div className="relative rounded-[28px] bg-white border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between pricing-card-transition group overflow-hidden">
            {/* Dynamic hover-glow background orb (Top-Left) */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100"
              style={{
                background: "radial-gradient(circle at center, rgba(232,0,14,0.06) 0%, rgba(232,0,14,0) 70%)",
              }}
            />

            {/* Top Red Stripe Indicator */}
            <div className="absolute top-0 left-6 right-6 h-[4px] bg-zinc-300 rounded-b" />

            <div className="flex-1 flex flex-col justify-between relative z-10">
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                    Foundation
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#E8000E] mt-5 tracking-tight transition-colors duration-300">
                  Starter & Maintenance
                </h3>
                <p className="text-xs text-zinc-500 font-bold leading-relaxed mt-2.5">
                  Onboarding, brand setup & ongoing management, establishing a solid, modern digital footprint. Add ons priced separately.
                </p>

                {/* Price block */}
                <div className="mt-6 pl-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-[44px] font-black tracking-tight text-[#E8000E] font-mono leading-none">$333</span>
                    <span className="text-[#E8000E] text-xs font-black uppercase tracking-wider">/ month</span>
                  </div>
                </div>

                <div className="w-full border-t border-zinc-200/80 my-6" />

                {/* Included features */}
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-extrabold tracking-wider text-zinc-400 uppercase block pl-1">
                    Base Package Includes:
                  </span>
                  <ul className="flex flex-col gap-3 pl-1">
                    {[
                      "Website maintenance & uptime management",
                      "Social media account management (FB + IG + X)",
                      "Profile & branding optimization (bio, covers, highlights)",
                      "Monthly comprehensive performance report",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 font-semibold leading-relaxed">
                        <Check className="w-4 h-4 text-[#E8000E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Paid Add-ons Grid Container */}
              <div className="mt-8 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col gap-3">
                <span className="text-[9px] font-black text-[#E8000E] uppercase tracking-widest pl-0.5">
                  + Available Retainer Add-ons:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: "Per Impression", desc: "CPM-boosted ad posts" },
                    { title: "Promoted Post", desc: "Single sponsored ad" },
                    { title: "Permanent Post", desc: "Always-on network ad" },
                    { title: "Extra Content", desc: "Custom posts / reels" }
                  ].map((addon, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white border border-zinc-200/70 text-left">
                      <span className="block text-[10px] font-black text-zinc-800 leading-none">{addon.title}</span>
                      <span className="block text-[9px] text-zinc-500 font-bold mt-1 leading-none">{addon.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


          {/* ────────────────── PACKAGE 2: Growth Engine ────────────────── */}
          <div className="relative rounded-[28px] bg-white border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between pricing-card-transition group overflow-hidden">
            {/* Dynamic hover-glow background orb (Top-Right) */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100"
              style={{
                background: "radial-gradient(circle at center, rgba(232,0,14,0.06) 0%, rgba(232,0,14,0) 70%)",
              }}
            />

            {/* Top Red Accent Stripe */}
            <div className="absolute top-0 left-6 right-6 h-[4px] bg-[#E8000E] rounded-b" />

            <div className="flex-1 flex flex-col justify-between relative z-10">
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8000E] bg-red-50 border border-red-200/60 px-3 py-1 rounded-full">
                  Growth
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#E8000E] mt-5 tracking-tight transition-colors duration-300">
                  Growth Engine
                </h3>
                <p className="text-xs text-zinc-500 font-bold leading-relaxed mt-2.5">
                  Website development, on-page SEO, Meta Ads campaign management & lead generation under one roof.
                </p>

                {/* Price block */}
                <div className="mt-6 pl-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-[44px] font-black tracking-tight text-[#E8000E] font-mono leading-none">$999</span>
                    <span className="text-[#E8000E] text-xs font-black uppercase tracking-wider">/ month</span>
                  </div>
                </div>

                <div className="w-full border-t border-zinc-200/80 my-6" />

                {/* Included features */}
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-extrabold tracking-wider text-zinc-400 uppercase block pl-1">
                    Everything Included:
                  </span>
                  <ul className="flex flex-col gap-3 pl-1">
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
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 font-semibold leading-relaxed">
                        <Check className="w-4 h-4 text-[#E8000E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Network Leverage Banner */}
              <div className="mt-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <span className="block text-[10px] font-black text-emerald-800 uppercase tracking-wide">Network Leverage Included:</span>
                  <p className="text-[9px] text-emerald-700 font-semibold mt-1 leading-relaxed">
                    Weekly posts published directly across our premium **1 Million+ follower network** for exponential organic brand visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* ────────────────── PACKAGE 3: Custom Package (Enterprise) ────────────────── */}
          <div className="relative rounded-[28px] bg-white border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between pricing-card-transition group overflow-hidden md:col-span-2 lg:col-span-1">
            {/* Dynamic hover-glow background orb (Bottom-Right) */}
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100"
              style={{
                background: "radial-gradient(circle at center, rgba(232,0,14,0.06) 0%, rgba(232,0,14,0) 70%)",
              }}
            />

            {/* Top Red Stripe Indicator */}
            <div className="absolute top-0 left-6 right-6 h-[4px] bg-zinc-300 rounded-b" />

            <div className="flex-1 flex flex-col justify-between relative z-10">
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                    Tailor Made
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#E8000E] mt-5 tracking-tight transition-colors duration-300">
                  Custom Package
                </h3>
                <p className="text-xs text-zinc-500 font-bold leading-relaxed mt-2.5">
                  Built entirely around your brand's unique goals, timeline, and budget. You select the advertising services; we construct the custom strategy.
                </p>

                {/* Price block */}
                <div className="mt-6 pl-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-[34px] font-black tracking-tight text-[#E8000E] leading-none">Custom Terms</span>
                  </div>
                  <span className="block text-[11px] text-zinc-400 font-bold uppercase tracking-wider mt-2.5">
                    Scoped after an in-depth discovery consultation
                  </span>
                </div>

                <div className="w-full border-t border-zinc-200/80 my-6" />

                {/* Narrative box */}
                <div className="p-4 rounded-2xl bg-zinc-900 text-white text-[11px] leading-relaxed font-bold border border-zinc-800 mb-6">
                  Every enterprise is different. This tailor-made package is designed for clients who have specific digital requirements, aggressive growth goals, or need bespoke visibility solutions.
                </div>

                {/* Feature pick & choose list */}
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-extrabold tracking-wider text-zinc-400 uppercase block pl-1">
                    Bespoke Solutions Available:
                  </span>
                  <ul className="flex flex-col gap-3.5 pl-1">
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
                          <div className="p-1 rounded bg-red-50 text-[#E8000E] shrink-0 mt-0.5">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-extrabold text-zinc-900 block leading-tight">{sol.label}</span>
                            <span className="text-[10px] text-zinc-500 font-bold mt-0.5 block leading-tight">{sol.desc}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
