"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Layers, Maximize2 } from "lucide-react";

interface CreativeAsset {
  src: string;
  alt: string;
  spanClass?: string;
}

interface PortfolioClient {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  themeColor: string;
  borderTheme: string;
  hoverGlow: string;
  badgeClass: string;
  logoPath: string;
  stats: { label: string; value: string }[];
  creatives: CreativeAsset[];
}

interface PortfolioCaseStudyProps {
  clientId: string;
}

export default function PortfolioCaseStudy({ clientId }: PortfolioCaseStudyProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const clients: PortfolioClient[] = [
    {
      id: "zameen",
      name: "Zameen.com",
      subtitle: "Digital Property Campaigns",
      description:
        "Engineered strategic paid advertising placements and sponsored lead pipelines to scale nationwide buyer acquisition. Deployed viral real estate launch assets, driving qualified developer leads and high-impact event footprints.",
      category: "Real Estate Portal",
      themeColor: "text-emerald-600",
      borderTheme: "border-l-4 border-l-emerald-600 hover:border-emerald-500",
      hoverGlow: "radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
      logoPath: "/logo_zameen.jpg",
      stats: [
        { label: "Reach & Views", value: "40 Million+" },
        { label: "Target Profile", value: "Developers & Buyers" },
        { label: "Core Channels", value: "Meta Ads & Web Portal" },
        { label: "Campaign Focus", value: "Property Expo & Launches" },
      ],
      creatives: [
        {
          src: "/portfolio_zameen_1.jpg",
          alt: "Zameen.com Digital Platform Banner",
          spanClass: "md:col-span-2",
        },
        {
          src: "/portfolio_zameen_2.jpg",
          alt: "Land Star Property Expo 2024 Campaign",
          spanClass: "md:col-span-1",
        },
        {
          src: "/portfolio_zameen_3.jpg",
          alt: "Top 5 Projects with Best Rental Returns",
          spanClass: "md:col-span-1",
        },
        {
          src: "/portfolio_zameen_4.jpg",
          alt: "Zameen ARX Tallest Marvel",
          spanClass: "md:col-span-1",
        },
        {
          src: "/portfolio_zameen_5.jpg",
          alt: "Grand Open House DHA Phase 1",
          spanClass: "md:col-span-1",
        },
      ],
    },
    {
      id: "stitch",
      name: "Stitch",
      subtitle: "Clothing & Retail E-Commerce",
      description:
        "Scaled DTC lead capture, online sales volume, and retail visibility. Built targeted digital clearance ads and cultural campaigns capturing high-converting fashion consumers across social networks.",
      category: "Clothing Brand",
      themeColor: "text-indigo-650",
      borderTheme: "border-l-4 border-l-indigo-650 hover:border-indigo-500",
      hoverGlow: "radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-indigo-50 border-indigo-200 text-indigo-700",
      logoPath: "/logo_stitch.jpg",
      stats: [
        { label: "Clearance Scaling", value: "Flat 30% / 50% Off" },
        { label: "Target Segment", value: "DTC Apparel Shoppers" },
        { label: "Core Channels", value: "Paid Meta & Social Stories" },
        { label: "Campaign Focus", value: "Azadi Sale & Season Clearance" },
      ],
      creatives: [
        {
          src: "/portfolio_stitch_1.jpg",
          alt: "Stitch Azadi Sale - Flat 30% Off Campaign",
          spanClass: "md:col-span-1",
        },
        {
          src: "/portfolio_stitch_2.jpg",
          alt: "Stitch End of Season Sale Campaign",
          spanClass: "md:col-span-1",
        },
        {
          src: "/portfolio_stitch_3.jpg",
          alt: "Stitch The Digital Garden Cambric Edition",
          spanClass: "md:col-span-1",
        },
      ],
    },
  ];

  const client = clients.find((c) => c.id === clientId);

  if (!client) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-xl font-bold text-zinc-800">Campaign Not Found</h2>
        <a href="/portfolio" className="text-red-650 font-bold underline mt-2 block">
          Back to Portfolio
        </a>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-6xl mx-auto px-6 md:px-12 py-16 bg-white"
    >
      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-200">
        <a
          href="/portfolio"
          className="group flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </a>
        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${client.badgeClass}`}>
          {client.category}
        </span>
      </div>

      {/* Showcase Header Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 p-1 bg-white border border-zinc-200 rounded-xl flex items-center justify-center overflow-hidden shadow-sm shrink-0">
              <img src={client.logoPath} alt={`${client.name} Logo`} className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                {client.name}
              </h1>
              <p className="text-red-650 font-extrabold text-xs sm:text-sm tracking-wide">
                {client.subtitle}
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-bold mt-2 max-w-3xl">
            {client.description}
          </p>
        </div>

        {/* Stats List */}
        <div className="lg:col-span-4 w-full grid grid-cols-2 gap-4">
          {client.stats.map((stat, index) => (
            <div key={index} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col gap-1 border-l-4 border-l-red-650">
              <span className="text-[9px] text-zinc-400 font-extrabold uppercase tracking-wider">{stat.label}</span>
              <span className="text-sm font-black text-zinc-900 leading-snug">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section Title */}
      <div className="flex items-center gap-3 mb-8">
        <Layers className="w-5 h-5 text-red-500" />
        <h2 className="text-lg font-black text-zinc-950 uppercase tracking-wider">
          Campaign Assets
        </h2>
      </div>

      {/* Creative Grid Showcase Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-3xl border border-zinc-200 shadow-xl max-w-6xl mx-auto">
        {client.creatives.map((creative, index) => (
          <div
            key={index}
            onClick={() => setLightboxImage(creative.src)}
            className={`group relative overflow-hidden bg-black cursor-zoom-in h-64 sm:h-80 md:h-[350px] ${creative.spanClass || "md:col-span-1"}`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={creative.src}
                alt={creative.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Full overlay with campaign name centered on hover */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <span className="text-white text-xs sm:text-sm font-extrabold tracking-tight leading-relaxed max-w-xs">
                  {creative.alt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call To Action Block */}
      <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-zinc-300 bg-zinc-50/50 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto text-center md:text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight mb-2">
            Ready to achieve similar results?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-650 max-w-md font-bold leading-relaxed">
            Let's collaborate to build highly optimized paid campaigns, creative designs, and scale your brand reach today.
          </p>
        </div>
        <a
          href="/contact"
          className="relative z-10 shrink-0 px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#E8000E] border border-red-700 hover:bg-red-700 transition-all hover:scale-103 shadow-md hover:shadow-red-650/20"
        >
          Book A Strategy Call
        </a>
      </div>

      {/* =========================================================================
         Lightbox Zoom Modal
         ========================================================================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-lg font-bold transition-all shadow-md"
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Enlarged Portfolio Creative"
                className="w-auto h-auto max-w-full max-h-[82vh] object-contain bg-zinc-900"
              />
              <div className="p-4 bg-zinc-900 border-t border-white/10 text-center">
                <p className="text-xs font-bold text-white/80">
                  {client.creatives.find((cr) => cr.src === lightboxImage)?.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
