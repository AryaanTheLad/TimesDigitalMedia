"use client";

import {
  Camera,
  TrendingUp,
  CircleDollarSign,
  Code,
} from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  badgeClass: string;
  hoverGlow: string;
  hoverBorder: string;
  hoverText: string;
  iconBg: string;
  iconBorder: string;
  leftBorder: string;
}
 
export default function Services() {
  const services: ServiceItem[] = [
    {
      icon: (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c2.4 0 4.13 2.5 5 4 .87-1.5 2.6-4 5-4 2.21 0 4 1.79 4 4s-1.79 4-4 4c-2.4 0-4.13-2.5-5-4-.87 1.5-2.6 4-5 4z" />
        </svg>
      ),
      title: "Meta Advertising",
      description:
        "Meta ad campaigns engineered to scale reach, generate qualified leads, and maximize ROI across Facebook and Instagram.",
      badge: "PERFORMANCE ADS",
      badgeClass: "bg-blue-50 border-blue-200/60 text-blue-700",
      hoverGlow: "radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.12) 0%, transparent 65%)",
      hoverBorder: "hover:border-blue-400 hover:shadow-blue-500/10",
      hoverText: "group-hover:text-blue-600",
      iconBg: "rgba(37, 99, 235, 0.06)",
      iconBorder: "rgba(37, 99, 235, 0.12)",
      leftBorder: "border-l-4 border-l-blue-600",
    },
    {
      icon: <Camera className="w-5 h-5 text-rose-500" />,
      title: "Content Marketing",
      description:
        "Premium and diverse branded content designed to build leads, engagement, and brand presence. Tailored to your needs.",
      badge: "CONTENT CREATION",
      badgeClass: "bg-rose-50 border-rose-200/60 text-rose-700",
      hoverGlow: "radial-gradient(circle at 80% 20%, rgba(244, 63, 94, 0.12) 0%, transparent 65%)",
      hoverBorder: "hover:border-rose-400 hover:shadow-rose-500/10",
      hoverText: "group-hover:text-rose-600",
      iconBg: "rgba(244, 63, 94, 0.06)",
      iconBorder: "rgba(244, 63, 94, 0.12)",
      leftBorder: "border-l-4 border-l-rose-500",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
      title: "Full Marketing Campaigns",
      description:
        "Marketing campaigns combining paid ads, content creation, audience targeting, and growth strategies for maximum impact.",
      badge: "FULL-SCALE PACKAGE",
      badgeClass: "bg-emerald-50 border-emerald-200/60 text-emerald-700",
      hoverGlow: "radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 65%)",
      hoverBorder: "hover:border-emerald-400 hover:shadow-emerald-500/10",
      hoverText: "group-hover:text-emerald-600",
      iconBg: "rgba(16, 185, 129, 0.06)",
      iconBorder: "rgba(16, 185, 129, 0.12)",
      leftBorder: "border-l-4 border-l-emerald-500",
    },
    {
      icon: <CircleDollarSign className="w-5 h-5 text-amber-500" />,
      title: "Paid Advertisements",
      description:
        "Strategic paid advertising solutions across digital platforms to boost visibility, traffic, conversions, and customer acquisition.",
      badge: "PAID MEDIA",
      badgeClass: "bg-amber-50 border-amber-200/60 text-amber-700",
      hoverGlow: "radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.12) 0%, transparent 65%)",
      hoverBorder: "hover:border-amber-400 hover:shadow-amber-500/10",
      hoverText: "group-hover:text-amber-650",
      iconBg: "rgba(245, 158, 11, 0.06)",
      iconBorder: "rgba(245, 158, 11, 0.12)",
      leftBorder: "border-l-4 border-l-amber-500",
    },
    {
      icon: <Code className="w-5 h-5 text-purple-500" />,
      title: "Web Development & Design",
      description:
        "Modern, highly-responsive websites tailored to branding, crafted for seamless user experience, and converting landing page.",
      badge: "DEVELOPMENT",
      badgeClass: "bg-purple-50 border-purple-200/60 text-purple-700",
      hoverGlow: "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 65%)",
      hoverBorder: "hover:border-purple-400 hover:shadow-purple-500/10",
      hoverText: "group-hover:text-purple-650",
      iconBg: "rgba(168, 85, 247, 0.06)",
      iconBorder: "rgba(168, 85, 247, 0.12)",
      leftBorder: "border-l-4 border-l-purple-500",
    },
  ];

  // Grid layout helper to center the bottom 2 cards symmetrically on desktop
  const getColSpanClass = (index: number) => {
    if (index < 3) {
      return "md:col-span-1 lg:col-span-2";
    }
    if (index === 3) {
      return "md:col-span-1 lg:col-span-2 lg:col-start-2 md:col-start-auto";
    }
    return "md:col-span-2 lg:col-span-2";
  };
 
  return (
    <section id="services" className="relative py-20 overflow-hidden bg-white">
      {/* Soft background grid pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="text-[11px] font-bold text-[#E8000E] uppercase tracking-widest bg-red-50 border border-red-200/60 px-3 py-1 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 max-w-2xl leading-tight tracking-tight">
            Customized Advertising and <br />
             Digital Media Solutions
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 max-w-xl leading-relaxed font-bold">
            Align your brand with Pakistan’s premier online digital agency. We deploy precision creative solutions, strategic paid advertising, and high-performance Web engineering to maximize reach and results.
          </p>
        </div>
 
        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl border border-zinc-300 p-6 md:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 bg-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(232,0,14,0.06)] ${getColSpanClass(index)} ${service.leftBorder} ${service.hoverBorder}`}
            >
              {/* Hover radial glowing backdrop */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{
                  background: service.hoverGlow,
                }}
              />
 
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border"
                      style={{
                        background: service.iconBg,
                        borderColor: service.iconBorder,
                      }}
                    >
                      {service.icon}
                    </div>
 
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${service.badgeClass}`}>
                      {service.badge}
                    </span>
                  </div>
 
                  <h3 className={`text-xl font-black text-zinc-950 mb-2.5 tracking-tight transition-colors duration-300 ${service.hoverText}`}>
                    {service.title}
                  </h3>
 
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-bold">
                    {service.description}
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
