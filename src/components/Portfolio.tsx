"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES, cardCreatives } from "@/data/caseStudies";

export default function Portfolio() {
  return (
    <section className="relative min-h-[70vh] py-16 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-red-650">
              <span>Case Studies</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 leading-tight tracking-tight">
              Case studies &amp; campaign portfolio
            </h1>
            <p className="text-sm sm:text-base text-zinc-700 max-w-xl leading-relaxed font-bold mt-1">
              Real campaigns for real estate, education, e-commerce, music and food brands in Pakistan: what each client needed, what we did, and the creative we ran.
            </p>
          </div>

          {/* Client Selection Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CASE_STUDIES.map((client) => (
              <Link
                key={client.id}
                href={`/portfolio/${client.id}`}
                className={`group relative rounded-3xl border border-zinc-300 p-8 flex flex-col justify-between overflow-hidden bg-white cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_rgba(232,0,14,0.06)] ${client.borderTheme}`}
              >
                {/* Hover Glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{
                    background: client.hoverGlow,
                  }}
                />

                {/* Logo & Category */}
                <div className="relative z-10 flex items-center justify-between gap-4 mb-8">
                  <div className={`w-16 h-16 ${client.logoPadding || 'p-1.5'} ${client.logoBg || 'bg-white border-zinc-200'} border rounded-2xl flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-sm`}>
                    <Image
                      src={client.logoPath}
                      alt={`${client.name} Logo`}
                      width={64}
                      height={64}
                      className={`w-full h-full ${client.logoObject || 'object-contain'}`}
                      unoptimized
                    />
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg border ${client.badgeClass}`}>
                    {client.category}
                  </span>
                </div>

                {/* Client Content */}
                <div className="relative z-10 mt-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight leading-snug mb-2 group-hover:text-red-650 transition-colors duration-300">
                    {client.name}
                  </h2>
                  <p className="text-zinc-500 font-bold text-xs uppercase tracking-wider mb-4">
                    {client.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium line-clamp-3">
                    {client.description}
                  </p>
                </div>

                {/* Thumbnail Stack Preview */}
                <div className="relative z-10 flex gap-2 mt-8 overflow-hidden rounded-xl border border-zinc-200 p-2 bg-zinc-50/50">
                  {cardCreatives(client).map((creative, index) => (
                    <div key={index} className="relative w-1/3 aspect-[16/10] rounded-lg overflow-hidden border border-zinc-200 bg-zinc-200 animate-reveal-items">
                      <Image
                        src={creative.src}
                        alt={creative.alt}
                        fill
                        sizes="(max-width: 768px) 30vw, 20vw"
                        className={`object-cover group-hover:scale-105 transition-transform duration-500`}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>

                {/* Link Trigger Indicator */}
                <div className="relative z-10 flex items-center gap-1.5 text-xs font-bold text-zinc-500 group-hover:text-red-600 transition-colors mt-6 pt-4 border-t border-zinc-150">
                  <span>Read the case study</span>
                  <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
