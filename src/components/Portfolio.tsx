"use client";

import { motion } from "framer-motion";

import Image from "next/image";

interface CreativeAsset {
  src: string;
  alt: string;
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
  creatives: CreativeAsset[];
}

export default function Portfolio() {
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
      creatives: [
        { src: "/portfolio_zameen_1.jpg", alt: "Zameen.com Digital Platform Banner" },
        { src: "/portfolio_zameen_2.jpg", alt: "Land Star Property Expo 2024 Campaign" },
        { src: "/portfolio_zameen_3.jpg", alt: "Top 5 Projects with Best Rental Returns" },
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
      creatives: [
        { src: "/portfolio_stitch_1.jpg", alt: "Stitch Azadi Sale - Flat 30% Off Campaign" },
        { src: "/portfolio_stitch_2.jpg", alt: "Stitch End of Season Sale Campaign" },
        { src: "/portfolio_stitch_3.jpg", alt: "Stitch The Digital Garden Cambric Edition" },
      ],
    },
    {
      id: "starshah",
      name: "Star Shah",
      subtitle: "Viral Music Campaign & Video PR",
      description:
        "Orchestrated a highly successful Instagram Reels and video marketing campaign to promote the new track 'Haule Haule'. Deployed bts sequences, location singing performances, and interactive QnA sessions, scaling artist reach.",
      category: "Music Artist",
      themeColor: "text-red-650",
      borderTheme: "border-l-4 border-l-[#E8000E] hover:border-red-500",
      hoverGlow: "radial-gradient(circle at center, rgba(232, 0, 14, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-red-50 border-red-200 text-red-700",
      logoPath: "/logo_starshah.jpg",
      logoPadding: "p-0",
      logoBg: "bg-black border-black",
      logoObject: "object-cover",
      creatives: [
        { src: "/logo_starshah.jpg", alt: "Star Shah Artist Profile" },
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
      creatives: [
        { src: "/logo_marshall.jpg", alt: "Marshall Ahmad Profile" },
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
      logoObject: "object-cover",
      creatives: [
        { src: "/logo_asmatariq.png", alt: "Asma Tariq Studio Profile" },
      ],
    },
    {
      id: "ibadat",
      name: "Ibadat International University",
      subtitle: "Student Acquisition & Admissions Drive",
      description:
        "Designed and executed a structured admissions campaign for Ibadat International University. Highlighted natural campus assets, high-impact drive narratives, and student acquisition pipelines, scaling student recruitment during the Spring 2026 admissions window.",
      category: "Higher Education",
      themeColor: "text-red-650",
      borderTheme: "border-l-4 border-l-[#E8000E] hover:border-red-500",
      hoverGlow: "radial-gradient(circle at center, rgba(232, 0, 14, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-red-50 border-red-200 text-red-700",
      logoPath: "/logo_ibadat.jpg",
      logoPadding: "p-0",
      logoBg: "bg-white border-zinc-200",
      logoObject: "object-contain",
      creatives: [
        { src: "/ibadat_admissions.png", alt: "Ibadat International University Admissions Campaign" },
      ],
    },
    {
      id: "flight",
      name: "Flight Education Consultants",
      subtitle: "Global Student Placement & Visas",
      description:
        "Engineered strategic paid placement and social campaigns for Flight Education Consultants. Highlighted success rates, visa approvals, and student placement journeys across key study destinations like UK, Canada, Australia, and Europe.",
      category: "Education Consultant",
      themeColor: "text-red-650",
      borderTheme: "border-l-4 border-l-[#E8000E] hover:border-red-500",
      hoverGlow: "radial-gradient(circle at center, rgba(232, 0, 14, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-red-50 border-red-200 text-red-700",
      logoPath: "/logo_flight.jpg",
      logoPadding: "p-0",
      logoBg: "bg-white border-zinc-200",
      logoObject: "object-contain",
      creatives: [
        { src: "/logo_flight.jpg", alt: "Flight Education Consultants Profile" },
      ],
    },
  ];

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
              <span>Our Campaigns</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 leading-tight tracking-tight">
              Times Creative Portfolio
            </h1>
            <p className="text-sm sm:text-base text-zinc-700 max-w-xl leading-relaxed font-bold mt-1">
              Explore how we design and deploy advertising assets across national channels to scale lead conversion and brand visibility.
            </p>
          </div>

          {/* Client Selection Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clients.map((client) => (
              <a
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
                  {client.creatives.slice(0, 3).map((creative, index) => (
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
                  <span>View Creative Showcase</span>
                  <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
