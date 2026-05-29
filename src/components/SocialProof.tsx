"use client";

import { useEffect, useRef, useState } from "react";
import { BarChart3 } from "lucide-react";

interface DemographicItem {
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  imagePath: string;
  accentBorder: string;
  hoverGlow: string;
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const demographics: DemographicItem[] = [
    {
      title: "Audience Depth",
      badge: "Demographics",
      badgeClass: "bg-blue-50 border-blue-200 text-blue-700",
      description:
        "Connect with a highly influential and decision-making profile, dominated by the active 25–44 age bracket and a robust 80%+ male audience split.",
      imagePath: "/demographics_countries.jpg",
      accentBorder: "border-l-4 border-l-blue-600",
      hoverGlow: "radial-gradient(circle at center, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
    },
    {
      title: "Urban Hub Density",
      badge: "National Penetration",
      badgeClass: "bg-purple-50 border-purple-200 text-purple-700",
      description:
        "Massive national audience saturation within Pakistan's primary commercial centers, led by Karachi and Lahore, representing over 48% of total reach.",
      imagePath: "/demographics_cities.jpg",
      accentBorder: "border-l-4 border-l-purple-600",
      hoverGlow: "radial-gradient(circle at center, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
    },
    {
      title: "Content Distribution",
      badge: "Media Placement",
      badgeClass: "bg-red-50 border-red-200 text-red-700",
      description:
        "Knowing the audience. Deep-dive analytics that reveal exactly how and where people are finding your brand.",
      imagePath: "/demographics_age_gender.jpg",
      accentBorder: "border-l-4 border-l-[#E8000E]",
      hoverGlow: "radial-gradient(circle at center, rgba(232, 0, 14, 0.08) 0%, transparent 70%)",
    },
    {
      title: "Reach & Views",
      badge: "Engagement Surge",
      badgeClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
      description:
        "Exceptional audience visibility and content scaling, delivering a massive 40 Million+ views over 28 days.",
      imagePath: "/demographics_views.jpg",
      accentBorder: "border-l-4 border-l-emerald-600",
      hoverGlow: "radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
    },
  ];

  return (
    <section id="proof" className="relative py-20 bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-60 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title / Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="text-[11px] font-bold text-[#E8000E] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200/60 flex items-center gap-1.5 animate-pulse">
            <BarChart3 className="w-3.5 h-3.5 text-red-500" />
            Proof of Scale
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 max-w-2xl leading-tight tracking-tight">
            Audience Demographics and Reach Profile
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 max-w-xl leading-relaxed font-bold">
            Real-time, audited traffic and reader profile metrics showing the high-impact depth and diversity of our digital reach.
          </p>
        </div>

        {/* Demographics 4-Card 2x2 Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {demographics.map((item, index) => (
            <div
              key={index}
              style={{
                transitionDelay: isVisible ? "0ms" : `${index * 150}ms`,
              }}
              className={`group relative rounded-3xl border border-zinc-300 p-8 flex flex-col justify-between overflow-hidden bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0 shadow-sm" : "opacity-0 translate-y-8 pointer-events-none"
              } hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(232,0,14,0.05)] ${item.accentBorder}`}
            >
              {/* Soft custom brand hover glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{
                  background: item.hoverGlow,
                }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div>
                  
                  {/* Card top bar */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight leading-snug group-hover:text-[#E8000E] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* High-Legibility Screenshot Slot */}
                  <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 mb-6 group-hover:scale-[1.01] transition-transform duration-500 flex items-center justify-center p-4 shadow-inner">
                    <img
                      src={item.imagePath}
                      alt={item.title}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>

                  {/* Narrative paragraph description */}
                  <p className="text-sm text-zinc-700 leading-relaxed font-semibold">
                    {item.description}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
