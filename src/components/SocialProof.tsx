"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DemographicItem {
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  imagePath: string;
}

export default function SocialProof() {
  const demographics: DemographicItem[] = [
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
        "Connect with a highly influential profile, dominated by the active 25–44 age bracket and a robust 80%+ male audience split.",
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
    <section id="proof" className="relative py-8 md:py-12 bg-transparent border-t border-stone-100">


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
        <div className="mb-8 md:mb-10 flex flex-col items-start">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
            06 / Audited Statistics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4">
            Audience Demographics & <br />
            Reach Profile
          </h2>
        </div>

        {/* Demographics Grid */}
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
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeClass}`}>
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
                  <div className="flex-1 w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={item.imagePath}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      className="object-contain rounded-lg"
                      quality={80}
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
    </section>
  );
}
