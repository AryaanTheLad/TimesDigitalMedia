"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Layers, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CreativeAsset {
  src: string;
  alt: string;
  spanClass?: string;
}

interface ReelItem {
  id: string;
  title: string;
  category: "bts" | "qa" | "singing" | "promo";
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
  logoPadding?: string;
  logoBg?: string;
  logoObject?: string;
  stats: { label: string; value: string }[];
  creatives?: CreativeAsset[];
  reels?: ReelItem[];
}

interface PortfolioCaseStudyProps {
  clientId: string;
}

export default function PortfolioCaseStudy({ clientId }: PortfolioCaseStudyProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeReelId, setActiveReelId] = useState<string | null>(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<"all" | "bts" | "qa" | "singing" | "promo">("all");

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
        "Scaled DTC lead capture, online sales volume, and retail visibility. Deployed targeted digital clearance ads and cultural campaigns capturing high-converting fashion consumers across social networks.",
      category: "Clothing Brand",
      themeColor: "text-indigo-650",
      borderTheme: "border-l-4 border-l-indigo-650 hover:border-indigo-500",
      hoverGlow: "radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-indigo-50 border-indigo-200 text-indigo-700",
      logoPath: "/logo_stitch.jpg",
      logoPadding: "p-0",
      logoBg: "bg-black border-black",
      logoObject: "object-cover",
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
    {
      id: "starshah",
      name: "Star Shah",
      subtitle: "Viral Music Campaign & Video PR",
      description:
        "Orchestrated a highly successful Instagram Reels and video marketing campaign to promote the new track 'Haule Haule'. Deployed bts sequences, location singing performances, and interactive Q&A sessions, scaling artist reach.",
      category: "Music Artist",
      themeColor: "text-red-650",
      borderTheme: "border-l-4 border-l-[#E8000E] hover:border-red-500",
      hoverGlow: "radial-gradient(circle at center, rgba(232, 0, 14, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-red-50 border-red-200 text-red-700",
      logoPath: "/logo_starshah.jpg",
      logoPadding: "p-0",
      logoBg: "bg-black border-black",
      logoObject: "object-cover",
      stats: [
        { label: "Total Views", value: "1.2 Million+" },
        { label: "Target Profile", value: "Music Listeners & Youth" },
        { label: "Core Channels", value: "Instagram Reels" },
        { label: "Engagement Style", value: "BTS, Q&A, Singing" },
      ],
      reels: [
        { id: "DPEKqAwCDzE", title: "Haule Haule - Hometown Session", category: "promo" },
        { id: "DOe77RxiBta", title: "Struggle and Hustle", category: "singing" },
        { id: "DOYZIQdDKOd", title: "Live Acoustic Session", category: "singing" },
        { id: "DOV0SOEiIy4", title: "Artist Q&A - Part 1: Inspiration Behind Haule Haule", category: "qa" },
        { id: "DOQPT4FDDVs", title: "Artist Q&A - Part 2: Composition & Lyrics", category: "qa" },
        { id: "DONnhE5jKLu", title: "Artist Q&A - Part 3: Fan Questions & Answers", category: "qa" },
        { id: "DOLizrvivzn", title: "Singing Live - HomeTown Fans and Family", category: "singing" },
        { id: "DOGXKS_DKwu", title: "Slow and Steady Wins The Race", category: "promo" },
        { id: "DOD5V8eDIWA", title: "Haule Haule - Chai Wala", category: "singing" },
        { id: "DN-xPNeDEG7", title: "Imprinted into Okara's legacy", category: "promo" },
        { id: "DN8O1OWjIvS", title: "Location Singing - Okara Railway Station", category: "singing" },
        { id: "DN5frrmDMdY", title: "Location Singing - Suburbs of Okara", category: "singing" },
        { id: "DN28DoKWIbv", title: "Location Singing - Fields of Okara", category: "singing" },
        { id: "DN0UMy12HDE", title: "Singing In The City That Made You", category: "singing" },
        { id: "DNiv0X7sI40", title: "About Your Journey", category: "promo" },
        { id: "DNaPgqGsATP", title: "BTS - Styling and Getting Ready", category: "bts" },
        { id: "DNXdfNEMiwb", title: "BTS - Setting The Shot", category: "bts" },
        { id: "DNSehiQMUje", title: "Reaction to Haule Haule", category: "promo" },
        { id: "DNP5UxmMbnd", title: "Before / After", category: "promo" },
        { id: "DNKi8RUsWXJ", title: "BTS - Camera vs You", category: "bts" },
        { id: "DNIBU1cMttB", title: "Haule Haule - People Who Made It Possible.", category: "bts" },
        { id: "DNGbKDusDeU", title: "BTS - Creating The Music Video", category: "bts" },
      ],
    },
    {
      id: "marshall",
      name: "Marshall Ahmad",
      subtitle: "'Lutteya' Single Launch Campaign",
      description:
        "Orchestrated a highly successful Instagram Reels and video marketing campaign to promote Marshall Ahmad's hit single 'Lutteya'. Deployed stylish transformation edits, transition sequences, and streetwear aesthetics, generating organic virality and stream growth.",
      category: "Music Artist",
      themeColor: "text-red-650",
      borderTheme: "border-l-4 border-l-[#E8000E] hover:border-red-500",
      hoverGlow: "radial-gradient(circle at center, rgba(232, 0, 14, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-red-50 border-red-200 text-red-700",
      logoPath: "/logo_marshall.jpg",
      logoPadding: "p-0",
      logoBg: "bg-black border-black",
      logoObject: "object-cover",
      stats: [
        { label: "Single Promoted", value: "Lutteya" },
        { label: "Target Audience", value: "Music Fans & Youth" },
        { label: "Core Channels", value: "Instagram Reels" },
        { label: "Engagement Style", value: "Transitions, Modern Music" },
      ],
      reels: [
        { id: "DNIuVOcsmOH", title: "Lutteya - Official Transition Promo Reel", category: "promo" },
        { id: "DOJQXTLkqHO", title: "BTS - Styling & Outfits for Lutteya Music Video", category: "bts" },
      ],
    },
    {
      id: "asmatariq",
      name: "Asma Tariq Studio",
      subtitle: "Creative Space & Studio Booking Promo",
      description:
        "Designed and executed a structured Instagram Reels campaign to promote a premium rental studio space. Highlighted the studio's versatile layouts, natural lighting, and styling corners, driving bookings for brand shoots, video productions, and creative activities.",
      category: "Creative Space",
      themeColor: "text-red-650",
      borderTheme: "border-l-4 border-l-[#E8000E] hover:border-red-500",
      hoverGlow: "radial-gradient(circle at center, rgba(232, 0, 14, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-red-50 border-red-200 text-red-700",
      logoPath: "/logo_asmatariq.png",
      logoPadding: "p-0",
      logoBg: "bg-black border-black",
      logoObject: "object-contain",
      stats: [
        { label: "Primary Service", value: "Creative Space Rental" },
        { label: "Target Audience", value: "Brands & Creators" },
        { label: "Core Channels", value: "Instagram Reels" },
        { label: "Booking Drivers", value: "Aesthetic Layouts, Gear" },
      ],
      reels: [
        { id: "DRU3Y7zjAJf", title: "Studio Space Showcase - Sunlight & Aesthetic Backdrops", category: "promo" },
        { id: "DRhfljAjGB-", title: "BTS - Behind the scenes of a catalog shoot in action", category: "bts" },
        { id: "DRryuxiDG5H", title: "Studio Walkthrough - Layout options for events & activities", category: "promo" },
        { id: "DSDHJPtjLKQ", title: "Q&A - How to book the studio for private brand activities", category: "qa" },
        { id: "DSfVt1QjGwp", title: "Studio Showcase - Tour Of The Studio", category: "promo" },
        { id: "DTFyzSTDFxO", title: "Event Promo - Booking the studio for workshops", category: "promo" },
        { id: "DTQQSSGjJH_", title: "Q&A - What's In My Bag?", category: "qa" },
        { id: "DTVK-UiDIlc", title: "Studio Showcase - What the best Studio in Lahore Gets You", category: "promo" },
        { id: "DTdWoRGjOsW", title: "Last Minute Bookigns - What's Possible?", category: "promo" },
        { id: "DTiX3vMjIA3", title: "Client Review - Host your next event or activity here", category: "qa" },
        { id: "DTlRYjwjMHL", title: "Busting Studio Myths", category: "qa" },
        { id: "DTnMrZCDPBo", title: "What's In My Bag ft. Lujain", category: "promo" },
        { id: "DT25rMsDPfz", title: "What Do You Get When You Book The Studio?", category: "qa" },
        { id: "DUqfaU3jDzK", title: "Reality Show.", category: "promo" },
      ],
    },
  ];

  const client = clients.find((c) => c.id === clientId);

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

      {/* Section Title */}
      <div className="flex items-center gap-3 mb-8">
        <Layers className="w-5 h-5 text-red-500" />
        <h2 className="text-lg font-black text-zinc-950 uppercase tracking-wider">
          {client.reels ? "Campaign Reels Showcase" : "Campaign Assets"}
        </h2>
      </div>

      {/* Dynamic Gallery: Reels Showcase vs. Creative Images Grid */}
      {client.reels ? (
        <div className="space-y-8">
          {/* Category Filter Tabs */}
          {(() => {
            const filterConfig = [
              { key: "all",    label: "All Reels",        icon: "◈" },
              { key: "promo",  label: "Promo Releases",   icon: "▶" },
              { key: "bts",    label: "Behind The Scenes",icon: "◎" },
              { key: "singing",label: "Live Singing",     icon: "♪" },
              { key: "qa",     label: "Q&A Sessions",     icon: "?" },
            ] as const;
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
                <div
                  key={reel.id}
                  onClick={() => {
                    setActiveReelId(reel.id);
                    setIframeLoading(true);
                  }}
                  className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-zinc-200 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Reel Thumbnail Backdrop */}
                  <Image
                    src={`/thumbnails/${client.id}/${reel.id}.jpg`}
                    alt={reel.title}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 22vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
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
                      {reel.category === "bts"
                        ? "BTS"
                        : reel.category === "qa"
                        ? "Q&A Session"
                        : reel.category === "singing"
                        ? "Live Singing"
                        : "Promo Teaser"}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2">
                      {reel.title}
                    </h3>
                  </div>

                  {/* Instagram Logo overlay top right */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
                    <svg
                      className="w-3.5 h-3.5 fill-white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        /* Creative Grid Showcase Layout for images */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-3xl border border-zinc-200 shadow-xl max-w-6xl mx-auto">
          {client.creatives?.map((creative, index) => (
            <div
              key={index}
              onClick={() => setLightboxImage(creative.src)}
              className={`group relative overflow-hidden bg-black cursor-zoom-in h-64 sm:h-80 md:h-[350px] ${creative.spanClass || "md:col-span-1"}`}
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
            </div>
          ))}
        </div>
      )}

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
        <Link
          href="/contact"
          className="relative z-10 shrink-0 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#E8000E] border border-red-700 hover:bg-red-700 transition-all hover:scale-103 shadow-md hover:shadow-red-650/20"
        >
          Book A Strategy Call
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
                alt="Enlarged Portfolio Creative"
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

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[380px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950 flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {iframeLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-zinc-950">
                  <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <iframe
                src={`https://www.instagram.com/reel/${activeReelId}/embed/`}
                className="w-full h-full border-0 rounded-2xl bg-zinc-950"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                onLoad={() => setIframeLoading(false)}
              />
              
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href={`https://www.instagram.com/reel/${activeReelId}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-black/80 text-white rounded-xl text-[10px] font-black uppercase tracking-wider border border-white/10 transition-colors"
                >
                  <span>Open Instagram</span>
                  <span>↗</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
