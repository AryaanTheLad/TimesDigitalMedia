"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_PROOF } from "@/data/stats";
import WhatsAppLink from "@/components/WhatsAppLink";
import { trackCta } from "@/lib/analytics";

export default function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.scrollTo(targetPosition);
    } else {
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
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
          className="lg:col-span-7 flex flex-col items-start text-left gap-6"
        >
          {/* Tagline Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E8000E]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8000E] animate-pulse" />
            <span>Performance Marketing Agency · Lahore, Pakistan</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[56px] font-black font-body tracking-tight text-[#09090b] leading-[1.08]"
          >
            Marketing you can measure. <span className="block text-[#E8000E] text-balance">Growth you can see in 30 days.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#57534E] max-w-lg leading-relaxed font-body font-medium"
          >
            We run your Meta, Google and YouTube ads and report what every lead, booking and sale costs. You keep your ad account and see every rupee.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-2"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="#audit"
                onClick={(e) => { trackCta("free_growth_audit", "hero"); handleSmoothScroll(e); }}
                className="flex items-center justify-between gap-4 px-6 py-4 rounded-xl text-sm font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors shadow-sm"
              >
                <span>Get My Free Growth Audit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </motion.div>
            <WhatsAppLink
              location="hero"
              className="text-sm font-bold text-[#09090b] underline decoration-stone-300 underline-offset-4 hover:decoration-[#E8000E] transition-colors min-h-[44px] inline-flex items-center"
            >
              or message us on WhatsApp
            </WhatsAppLink>
          </motion.div>

          {/* Micro-trust line */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-stone-500 font-medium font-body"
          >
            Trusted by WWF Pakistan, Zameen.com, Ibadat University &amp; more.
          </motion.p>
        </motion.div>

        {/* ─── Right Column: one client result (figures in HERO_PROOF) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.2 }}
          className="lg:col-span-5 w-full"
        >
          <div className="w-full max-w-lg lg:ml-auto rounded-[32px] bg-[#09090b] p-8 sm:p-10 shadow-2xl border border-zinc-800 flex flex-col gap-8">
            <span className="text-[10px] text-zinc-500 font-mono font-bold tracking-widest uppercase">
              Client result · {HERO_PROOF.roas.title}
            </span>

            <div>
              <span className="block text-6xl sm:text-7xl font-serif lining-nums font-bold tracking-tight text-white leading-none">{HERO_PROOF.roas.roas}</span>
              <span className="mt-3 block text-sm text-zinc-400 font-medium">return on ad spend</span>
            </div>

            <div className="flex flex-col gap-4">
              {[HERO_PROOF.roas.spend, HERO_PROOF.roas.revenue].map((bar, i) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-zinc-400">{bar.label}</span>
                    <span className="text-white">{bar.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(bar.amount / HERO_PROOF.roas.revenue.amount) * 100}%` }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 + i * 0.2 }}
                      className={`h-full rounded-full ${i === 0 ? "bg-zinc-500" : "bg-[#E8000E]"}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-zinc-800 flex items-end justify-between gap-4">
              <div>
                <span className="block text-[10px] text-zinc-500 font-mono font-bold tracking-widest uppercase">{HERO_PROOF.bookings.title}</span>
                <span className="mt-2 block text-sm text-zinc-400 font-medium">{HERO_PROOF.bookings.label}</span>
              </div>
              <div className="text-right shrink-0">
                <span className="block text-4xl font-serif lining-nums font-bold text-white leading-none">{HERO_PROOF.bookings.value}</span>
                <span className="mt-2 block text-xs text-zinc-400 font-bold">{HERO_PROOF.bookings.note}</span>
              </div>
            </div>

            <a
              href="#proof"
              onClick={(e) => { trackCta("see_client_results", "hero"); handleSmoothScroll(e); }}
              className="pt-6 border-t border-zinc-800 flex items-center justify-between gap-4 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
            >
              <span>From Meta Ads Manager. See more client results</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Editorial Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[8px] font-mono tracking-widest uppercase text-stone-500">Scroll</span>
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
