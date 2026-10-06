"use client";

import Link from "next/link";
import { Check, Globe, Video, TrendingUp, Search, ShieldCheck, Mail } from "lucide-react";
import {
  PACKAGES,
  PRICING_NOTES,
  ADD_ONS,
  GROWTH_NETWORK_NOTE,
  type PricingPackage,
} from "@/data/pricing";
import { trackPackageCta } from "@/lib/analytics";

const CUSTOM_ICONS = [Globe, TrendingUp, Video, Search, ShieldCheck, Mail];
const CUSTOM_DESCS = [
  "Custom web applications, portals and landing pages",
  "Performance marketing for any budget or goal",
  "High-volume content and professional editing",
  "National, regional or competitive keyword positioning",
  "End-to-end concepting, execution and analytics",
  "Negotiable frequency and format on our network",
];

function AdSpendNote({ tone = "default" }: { tone?: "default" | "highlight" }) {
  return (
    <p className={`text-[10px] font-medium leading-relaxed mt-3 max-w-xs ${tone === "highlight" ? "text-[#57534E]" : "text-stone-500"}`}>
      <span className="font-bold text-[#09090b]">Ad spend not included.</span> Your ad budget is billed directly to your own Meta/Google account. You always own and see your data.
    </p>
  );
}

function CTA({ pkg, variant }: { pkg: PricingPackage; variant: "solid" | "outline" }) {
  return (
    <Link
      href={pkg.cta.href}
      onClick={() => trackPackageCta(pkg.id, "packages")}
      className={
        variant === "solid"
          ? "mt-8 w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors shadow-sm block"
          : "mt-8 w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors block"
      }
    >
      {pkg.cta.label}
    </Link>
  );
}

interface PackagesProps {
  /** On /pricing the page owns the H1, so the section heading drops to H2 (default) and the eyebrow changes. */
  eyebrow?: string;
  intro?: string;
  /** Hide the "compare packages" link when already on /pricing. */
  showCompareLink?: boolean;
}

export default function Packages({
  eyebrow = "07 / Pricing & Retainers",
  intro = "Transparent monthly packages in PKR. You see the price before you talk to us.",
  showCompareLink = true,
}: PackagesProps) {
  const [starter, growth, custom] = PACKAGES;

  return (
    <section id="packages" className="relative py-8 md:py-12 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-12 flex flex-col items-center text-center gap-4">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-500">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-2">
            Growth Packages
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-xl mt-2">
            {intro}
          </p>
          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500">
            {PRICING_NOTES.taxInclusive}
          </p>
          <p className="text-sm font-bold text-[#09090b] max-w-xl">
            {PRICING_NOTES.flexible}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-stretch">

          {/* ────────────────── PACKAGE 1: Starter & Maintenance ────────────────── */}
          <div id={starter.id} className="relative rounded-[32px] bg-white border border-stone-200 p-8 flex flex-col justify-between shadow-sm overflow-hidden group scroll-mt-28">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-500">
                    {starter.eyebrow}
                  </span>
                </div>

                <h3 className="text-2xl font-black font-display text-[#09090b] mt-4 tracking-tight">
                  {starter.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium mt-3">
                  {starter.summary} {PRICING_NOTES.addOns}
                </p>

                {/* Price block */}
                <div className="mt-8">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 mb-2">Starting at</span>
                  <div className="flex items-baseline gap-1 flex-wrap">
                    <span className="text-4xl sm:text-5xl font-black font-body text-[#E8000E] leading-none">{starter.priceLabel}</span>
                    <span className="text-[#57534E] text-[10px] font-mono font-bold uppercase tracking-wider">/ month</span>
                  </div>
                  <AdSpendNote />
                </div>

                <div className="w-full border-t border-stone-200/80 my-8" />

                <div className="flex flex-col gap-4">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-stone-500 uppercase block">
                    {starter.includesLabel}:
                  </span>
                  <ul className="flex flex-col gap-4">
                    {starter.includes.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-[#09090b] font-medium leading-relaxed">
                        <Check className="w-4 h-4 text-[#E8000E] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Add-ons (price on request) */}
              <div className="mt-10 p-5 rounded-2xl bg-[#09090b] text-white border border-zinc-800 flex flex-col gap-4">
                <span className="text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                  + Add-ons · price on request
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {ADD_ONS.map((addon) => (
                    <div key={addon.title} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-left">
                      <span className="block text-[10px] font-bold text-white leading-tight">{addon.title}</span>
                      <span className="block text-[9px] font-medium text-zinc-400 mt-1 leading-tight">{addon.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <CTA pkg={starter} variant="outline" />
          </div>


          {/* ────────────────── PACKAGE 2: Growth Campaign (Highlighted) ────────────────── */}
          <div id={growth.id} className="relative rounded-[32px] bg-white border-2 border-[#E8000E] p-8 flex flex-col justify-between shadow-md overflow-hidden group scroll-mt-28">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#E8000E]">
                    {growth.eyebrow}
                  </span>
                </div>

                <h3 className="text-2xl font-black font-display text-[#E8000E] mt-4 tracking-tight">
                  {growth.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium mt-3">
                  {growth.summary}
                </p>

                <div className="mt-8">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 mb-2">Starting at</span>
                  <div className="flex items-baseline gap-1 flex-wrap">
                    <span className="text-4xl sm:text-5xl font-black font-body text-[#E8000E] leading-none">{growth.priceLabel}</span>
                    <span className="text-[#57534E] text-[10px] font-mono font-bold uppercase tracking-wider">/mo management</span>
                  </div>
                  <AdSpendNote tone="highlight" />
                </div>

                <div className="w-full border-t border-stone-200/80 my-8" />

                <div className="flex flex-col gap-4">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-stone-500 uppercase block">
                    {growth.includesLabel}:
                  </span>
                  <ul className="flex flex-col gap-4">
                    {growth.includes.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-[#09090b] font-medium leading-relaxed">
                        <Check className="w-4 h-4 text-[#E8000E] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Network Leverage Banner */}
              <div className="mt-10 p-5 rounded-2xl bg-emerald-50 border border-emerald-100/60 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-[10px] font-black text-emerald-800 uppercase tracking-wide">Network leverage included:</span>
                  <p className="text-[10px] text-emerald-800 font-semibold mt-1 leading-relaxed">
                    {GROWTH_NETWORK_NOTE}
                  </p>
                </div>
              </div>
            </div>

            <CTA pkg={growth} variant="solid" />
          </div>


          {/* ────────────────── PACKAGE 3: Custom Package ────────────────── */}
          <div id={custom.id} className="relative rounded-[32px] bg-white border border-stone-200 p-8 flex flex-col justify-between shadow-sm overflow-hidden group scroll-mt-28">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-500">
                    {custom.eyebrow}
                  </span>
                </div>

                <h3 className="text-2xl font-black font-display text-[#09090b] mt-4 tracking-tight">
                  {custom.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium mt-3">
                  {custom.summary}
                </p>

                <div className="mt-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black font-body text-[#E8000E] leading-none">{custom.priceLabel}</span>
                  </div>
                  <span className="block text-[10px] text-stone-500 font-semibold uppercase tracking-wider mt-2">
                    {custom.period}
                  </span>
                  <AdSpendNote />
                </div>

                <div className="w-full border-t border-stone-200/80 my-8" />

                <div className="p-5 rounded-2xl bg-[#09090b] text-white text-[11px] leading-relaxed font-medium font-body border border-stone-900 mb-8">
                  For organisations with specific requirements, aggressive growth goals or bespoke visibility needs.
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-stone-500 uppercase block">
                    {custom.includesLabel}:
                  </span>
                  <ul className="flex flex-col gap-5">
                    {custom.includes.map((label, i) => {
                      const Icon = CUSTOM_ICONS[i % CUSTOM_ICONS.length];
                      return (
                        <li key={label} className="flex items-start gap-3 text-xs leading-normal">
                          <div className="p-1 rounded bg-zinc-100 text-[#E8000E] shrink-0 mt-0.5" aria-hidden="true">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-extrabold text-[#09090b] block leading-tight">{label}</span>
                            <span className="text-[10px] text-[#57534E] font-medium mt-0.5 block leading-tight">{CUSTOM_DESCS[i]}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <CTA pkg={custom} variant="outline" />
          </div>

        </div>

        {/* Pricing notes */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-xs text-[#57534E] font-medium">
          <span>{PRICING_NOTES.payment}</span>
          <span>
            {PRICING_NOTES.international}{" "}
            <Link href="/contact?package=international" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4 hover:text-[#E8000E]">
              Ask for international pricing
            </Link>
          </span>
          {showCompareLink && (
            <Link href="/pricing" className="font-bold text-[#09090b] underline decoration-stone-300 underline-offset-4 hover:text-[#E8000E]">
              Compare packages in detail
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
