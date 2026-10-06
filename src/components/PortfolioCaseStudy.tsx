"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Layers, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getCaseStudy } from "@/data/caseStudies";
import { getService } from "@/data/services";
import { trackCta } from "@/lib/analytics";

function ReelImage({ src, alt, className, fallbackSrc }: { src: string; alt: string; className?: string; fallbackSrc: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 22vw"
      className={className}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      unoptimized
    />
  );
}

interface PortfolioCaseStudyProps {
  clientId: string;
}

export default function PortfolioCaseStudy({ clientId }: PortfolioCaseStudyProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeReelId, setActiveReelId] = useState<string | null>(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<"all" | "bts" | "qa" | "singing" | "promo">("all");

  const client = getCaseStudy(clientId);

  if (!client) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-xl font-bold text-zinc-800">Campaign Not Found</h2>
        <Link prefetch={false} href="/portfolio" className="text-red-650 font-bold underline mt-2 block">
          Back to Portfolio
        </Link>
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
        <Link
          prefetch={false}
          href="/portfolio"
          className="group flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg border ${client.badgeClass}`}>
          {client.category}
        </span>
      </div>

      {/* Showcase Header Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 ${client.logoPadding || 'p-1'} ${client.logoBg || 'bg-white border-zinc-200'} border rounded-xl flex items-center justify-center overflow-hidden shadow-sm shrink-0`}>
              <Image
                src={client.logoPath}
                alt={`${client.name} Logo`}
                width={56}
                height={56}
                className={`w-full h-full ${client.logoObject || 'object-contain'}`}
                priority
                unoptimized
              />
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

      {/* Challenge → Approach → Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E8000E] mb-3">The challenge</h2>
          <p className="text-sm text-zinc-700 leading-relaxed font-medium">{client.challenge}</p>
        </section>
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E8000E] mb-3">Our approach</h2>
          <ul className="flex flex-col gap-2.5 text-sm text-zinc-700 leading-relaxed font-medium list-disc pl-4 marker:text-[#E8000E]">
            {client.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-zinc-900 bg-[#09090b] text-white p-6 sm:p-8">
          {client.results.length > 0 ? (
            <>
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 mb-3">Results</h2>
              <ul className="flex flex-col gap-2.5 text-sm leading-relaxed font-bold">
                {client.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </>
          ) : (
            // No confirmed outcome figures yet: show what was delivered, counted from the work on this page.
            <>
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 mb-3">What we delivered</h2>
              <ul className="flex flex-col gap-2.5 text-sm leading-relaxed font-bold">
                {client.reels && client.reels.length > 0 && (
                  <li>
                    {client.reels.length} campaign {client.reels.length === 1 ? "video" : "reels and videos"}
                  </li>
                )}
                {client.creatives && client.creatives.length > 0 && (
                  <li>
                    {client.creatives.length} campaign {client.creatives.length === 1 ? "creative" : "creatives"}
                  </li>
                )}
                <li>
                  {client.services.length} {client.services.length === 1 ? "service" : "services"} working together
                </li>
              </ul>
            </>
          )}
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-2">Services used</span>
            <ul className="flex flex-wrap gap-2">
              {client.services.map((slug) => {
                const svc = getService(slug);
                return svc ? (
                  <li key={slug}>
                    <Link href={`/services/${slug}`} className="inline-flex px-2.5 py-1 rounded-lg border border-zinc-700 text-[11px] font-bold hover:border-white transition-colors">
                      {svc.shortName}
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </section>
      </div>

      {/* Campaign Reels Showcase Section */}
      {client.reels && client.reels.length > 0 && (
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-black text-zinc-950 uppercase tracking-wider">
              Campaign Video Showcase
            </h2>
          </div>

          {/* Category Filter Tabs */}
          {(() => {
            const filterConfig = [
              { key: "all",    label: "All Reels",        icon: "◈" },
              { key: "promo",  label: "Promo Releases",   icon: "▶" },
              { key: "bts",    label: "Behind The Scenes",icon: "◎" },
              { key: "singing",label: "Live Singing",     icon: "♪" },
              { key: "qa",     label: "Q&A Sessions",     icon: "?" },
            ] as const;
            
            // Only show category filter tabs if there are actually reels in different categories
            if (client.reels!.length <= 1) return null;

            return (
              <div className="relative mb-2">
                {/* Scrollable pill strip */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                  {filterConfig.map(({ key, label, icon }) => {
                    const count = key === "all"
                      ? client.reels!.length
                      : client.reels!.filter(r => r.category === key).length;
                    const isActive = activeFilter === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveFilter(key)}
                        className={`
                          relative flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl
                          text-xs font-bold tracking-wide border transition-all duration-300 ease-out
                          ${isActive
                            ? "bg-[#E8000E] text-white border-[#E8000E] shadow-[0_4px_16px_rgba(232,0,14,0.35)] scale-[1.04]"
                            : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400 hover:text-zinc-800 hover:bg-zinc-50 hover:scale-[1.02]"
                          }
                        `}
                      >
                        {/* Icon */}
                        <span className={`text-[11px] font-black ${isActive ? "text-white" : "text-zinc-400"}`}>
                          {icon}
                        </span>
                        {/* Label */}
                        <span className="uppercase tracking-wider whitespace-nowrap">{label}</span>
                        {/* Count badge */}
                        <span className={`
                          inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-md text-[10px] font-black
                          ${isActive
                            ? "bg-white/25 text-white"
                            : "bg-zinc-100 text-zinc-500"
                          }
                        `}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {/* Hairline separator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
              </div>
            );
          })()}

          {/* Reels Mock Card Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {client.reels
              .filter((reel) => activeFilter === "all" || reel.category === activeFilter)
              .map((reel) => (
                <button
                  type="button"
                  key={reel.id}
                  aria-label={`Play video: ${reel.title}`}
                  onClick={() => {
                    setActiveReelId(reel.id);
                    setIframeLoading(true);
                  }}
                  className={`group relative text-left w-full ${reel.platform === 'youtube' ? 'aspect-video col-span-2 sm:col-span-2 md:col-span-2' : 'aspect-[9/16]'} rounded-3xl overflow-hidden bg-black border border-zinc-200 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5`}
                >
                  {/* Reel Thumbnail Backdrop */}
                  <ReelImage
                    src={reel.platform === "youtube" ? `https://img.youtube.com/vi/${reel.id}/0.jpg` : `/thumbnails/${client.id}/${reel.id}.jpg`}
                    alt={reel.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackSrc={client.logoPath}
                  />
                  {/* Dark Red-to-Black Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-[#E8000E]/10 opacity-90 group-hover:opacity-100 transition-opacity" />

                  {/* Pulsing Play Button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-650 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Reel details at the bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-1.5 z-10 text-white">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-lg border border-white/10 w-fit">
                      {reel.platform === "youtube" 
                        ? "YouTube Campaign" 
                        : reel.category === "bts"
                        ? "BTS"
                        : reel.category === "qa"
                        ? "Q&A Session"
                        : reel.category === "singing"
                        ? "Live Singing"
                        : "Promo Teaser"}
                    </span>
                    <span className="block text-xs sm:text-sm font-bold leading-snug line-clamp-2">
                      {reel.title}
                    </span>
                  </div>

                  {/* Platform Logo overlay top right */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
                    {reel.platform === "youtube" ? (
                      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    ) : (
                      <svg
                        className="w-3.5 h-3.5 fill-white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Campaign Creative Assets Showcase Section */}
      {client.creatives && client.creatives.length > 0 && (
        <div className="space-y-8">
          {client.reels && client.reels.length > 0 ? (
            <div className="flex items-center gap-3 mb-6 pt-12 border-t border-zinc-200">
              <Layers className="w-5 h-5 text-red-500" />
              <h2 className="text-lg font-black text-zinc-950 uppercase tracking-wider">
                Creative Campaign Assets
              </h2>
            </div>
          ) : (
            <div className="flex items-center gap-3 mb-8">
              <Layers className="w-5 h-5 text-red-500" />
              <h2 className="text-lg font-black text-zinc-950 uppercase tracking-wider">
                Campaign Assets
              </h2>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-3xl border border-zinc-200 shadow-xl max-w-6xl mx-auto">
            {client.creatives.map((creative, index) => (
              <button
                type="button"
                key={index}
                aria-label={`Enlarge: ${creative.alt}`}
                onClick={() => setLightboxImage(creative.src)}
                className={`group relative block w-full text-left overflow-hidden bg-black cursor-zoom-in h-64 sm:h-80 md:h-[350px] ${creative.spanClass || "md:col-span-1"}`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={creative.src}
                    alt={creative.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    quality={80}
                    unoptimized
                  />
                  {/* Dark Full overlay with campaign name centered on hover */}
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <span className="text-white text-xs sm:text-sm font-extrabold tracking-tight leading-relaxed max-w-xs">
                      {creative.alt}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Call To Action Block */}
      <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-zinc-300 bg-zinc-50/50 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto text-center md:text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight mb-2">
            Want a campaign like this?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-650 max-w-md font-bold leading-relaxed">
            Tell us about your business and we&apos;ll send a free audit of where your next leads should come from.
          </p>
        </div>
        <Link
          href="/free-growth-audit"
          onClick={() => trackCta("free_growth_audit", `case_study_${client.id}`)}
          className="relative z-10 shrink-0 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#E8000E] border border-red-700 hover:bg-red-700 transition-all hover:scale-103 shadow-md hover:shadow-red-650/20"
        >
          Get My Free Growth Audit
        </Link>
      </div>

      {/* =========================================================================
         Lightbox Zoom Modal (Images)
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
              className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-lg font-bold transition-all shadow-md"
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
                alt={client.creatives?.find((cr) => cr.src === lightboxImage)?.alt ?? `${client.name} campaign creative`}
                className="w-auto h-auto max-w-full max-h-[82vh] object-contain bg-zinc-900"
                loading="eager"
              />
              <div className="p-4 bg-zinc-900 border-t border-white/10 text-center">
                <p className="text-xs font-bold text-white/80">
                  {client.creatives?.find((cr) => cr.src === lightboxImage)?.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
         Reels Lightbox Modal (Instagram Embeds)
         ========================================================================= */}
      <AnimatePresence>
        {activeReelId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveReelId(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setActiveReelId(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-lg font-bold transition-all shadow-md z-50"
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            {(() => {
              const activeReel = client.reels?.find((r) => r.id === activeReelId);
              const isYouTube = activeReel?.platform === "youtube";
              const embedUrl = isYouTube 
                ? `https://www.youtube.com/embed/${activeReelId}?autoplay=1` 
                : `https://www.instagram.com/reel/${activeReelId}/embed/`;
              const externalUrl = isYouTube
                ? `https://www.youtube.com/watch?v=${activeReelId}`
                : `https://www.instagram.com/reel/${activeReelId}/`;

              return (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-full ${
                    isYouTube ? "max-w-[800px] aspect-video" : "max-w-[380px] aspect-[9/16]"
                  } rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950 flex flex-col justify-center items-center`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {iframeLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-zinc-950">
                      <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <iframe
                    title={activeReel?.title ?? `${client.name} campaign video`}
                    src={embedUrl}
                    className="w-full h-full border-0 rounded-2xl bg-zinc-950"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    onLoad={() => setIframeLoading(false)}
                  />
                  
                  <div className="absolute bottom-4 right-4 z-20">
                    <a
                      href={externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-black/80 text-white rounded-xl text-[10px] font-black uppercase tracking-wider border border-white/10 transition-colors"
                    >
                      <span>{isYouTube ? "Open YouTube" : "Open Instagram"}</span>
                      <span>↗</span>
                    </a>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
