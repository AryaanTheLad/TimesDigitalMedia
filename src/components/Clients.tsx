"use client";

import { Trophy } from "lucide-react";

interface ClientItem {
  name: string;
  category: string;
  description: string;
  themeColor: string;
  borderTheme: string;
  bgTheme: string;
  hoverGlow: string;
  badgeClass: string;
  logoPath: string;
  logoPadding?: string;
  logoScale?: string;
  logoBg?: string;
}

export default function Clients() {
  const clients: ClientItem[] = [
    {
      name: "WWF Pakistan",
      category: "Global Conservation Brand",
      description:
        "Designed high-impact public awareness campaigns and targeted nature conservation advocacy across national digital channels, driving viral social reach and public engagement.",
      themeColor: "text-zinc-900",
      borderTheme: "border-l-4 border-l-zinc-900 hover:border-zinc-800",
      bgTheme: "bg-zinc-50/10",
      hoverGlow: "radial-gradient(circle at center, rgba(9, 9, 11, 0.06) 0%, transparent 70%)",
      badgeClass: "bg-zinc-100 border-zinc-200 text-zinc-800",
      logoPath: "/logo_wwf.jpg",
    },
    {
      name: "Zameen.com",
      category: "Pakistan's Property Portal",
      description:
        "Deployed premium advertisements poster and sponsored editorial releases, establishing strong digital visibility to capture prime commercial and residential developer leads.",
      themeColor: "text-emerald-600",
      borderTheme: "border-l-4 border-l-emerald-600 hover:border-emerald-500",
      bgTheme: "bg-emerald-50/10",
      hoverGlow: "radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
      logoPath: "/logo_zameen.jpg",
    },
    {
      name: "Ibadat International University",
      category: "Higher Education Partner",
      description:
        "Delivered a premium digital admissions acquisition campaign across nationwide hubs, driving massive student brand scaling, campaign impressions, and enrollment capture.",
      themeColor: "text-purple-600",
      borderTheme: "border-l-4 border-l-purple-600 hover:border-purple-500",
      bgTheme: "bg-purple-50/10",
      hoverGlow: "radial-gradient(circle at center, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-purple-50 border-purple-200 text-purple-700",
      logoPath: "/logo_ibadat.jpg",
      logoPadding: "p-0.5",
      logoScale: "scale-[1.45]",
    },
    /* {
      name: "Mohkam Furnishers",
      category: "Luxury Furniture & DTC",
      description:
        "Scaled catalog lead generation, digital campaign ROI, and showroom visibility. Implemented targeted social advertising campaigns capturing high-net-worth professionals.",
      themeColor: "text-amber-600",
      borderTheme: "border-l-4 border-l-amber-600 hover:border-amber-500",
      bgTheme: "bg-amber-50/10",
      hoverGlow: "radial-gradient(circle at center, rgba(245, 158, 11, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-amber-50 border-amber-200 text-amber-700",
      logoPath: "/logo_mohkam.jpg",
    }, */
    {
      name: "CIMS School of Law",
      category: "Higher Education",
      description:
        "Engineered strategic digital campaign setups, amplifying enrollment capture and public branding. Optimized ad reach and messaging targeted at prospective legal studies candidates.",
      themeColor: "text-blue-900",
      borderTheme: "border-l-4 border-l-blue-900 hover:border-blue-800",
      bgTheme: "bg-blue-50/10",
      hoverGlow: "radial-gradient(circle at center, rgba(30, 58, 138, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-blue-50 border-blue-200 text-blue-800",
      logoPath: "/logo_cims.jpg",
      logoPadding: "p-0.5",
    },
    {
      name: "Stitch",
      category: "Clothing Brand",
      description:
        "Generated leads and customers for Stitch through paid meta advertisements. ADs were posted across all social media platforms to increase visibility.",
      themeColor: "text-indigo-650",
      borderTheme: "border-l-4 border-l-indigo-650 hover:border-indigo-500",
      bgTheme: "bg-indigo-50/10",
      hoverGlow: "radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
      badgeClass: "bg-indigo-50 border-indigo-200 text-indigo-700",
      logoPath: "/logo_stitch.jpg",
      logoPadding: "p-0",
      logoBg: "bg-black border-black",
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
    <section id="clients" className="relative py-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-60 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="text-[11px] font-bold text-red-650 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200/60 flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-red-500" />
            Trusted By Strategic Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 leading-tight tracking-tight">
            Highlighting Our Main Clients
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 max-w-xl leading-relaxed font-bold">
            We operate campaigns and deliver high-impact digital solutions for Pakistan’s leading corporations, institutions, and global organizations.
          </p>
        </div>

        {/* Bento Grid layout representing Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl border border-zinc-300 p-6 md:p-8 flex flex-col justify-between overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(232,0,14,0.05)] ${getColSpanClass(index)} ${client.borderTheme}`}
            >
              {/* Brand custom radial hover glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{
                  background: client.hoverGlow,
                }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  
                  {/* Top card block: Logo image and Category badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`w-16 h-16 ${client.logoPadding || 'p-1.5'} ${client.logoBg || 'bg-white border-zinc-200'} border rounded-2xl flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-sm`}>
                      <img 
                        src={client.logoPath} 
                        alt={`${client.name} Logo`} 
                        className={`w-full h-full ${client.logoScale || ''} object-contain transition-transform duration-500`}
                      />
                    </div>
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${client.badgeClass} shrink-0`}>
                      {client.category}
                    </span>
                  </div>

                  {/* Brand name */}
                  <div className="mb-4">
                    <h3 className="text-xl font-black text-zinc-950 tracking-tight leading-snug">
                      {client.name}
                    </h3>
                  </div>

                  {/* Highlight paragraph */}
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-bold">
                    {client.description}
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
