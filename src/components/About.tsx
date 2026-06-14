"use client";

import { ShieldCheck, BarChart, HardDrive, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      title: "Credibility & Authority",
      description: "Align your business with a highly trusted, authoritative digital media agency to build immediate brand credibility and enhance market recall. Collaborated with renowned clients."
    },
    {
      icon: <BarChart className="w-5 h-5 text-red-600" />,
      title: "Influential Audience Profiles",
      description: "Connect directly with a premium audience segment, including educated youth, professionals, policymakers, business leaders, and financial elites."
    },
    {
      icon: <HardDrive className="w-5 h-5 text-red-600" />,
      title: "Precision Campaign Delivery",
      description: "Deploy customized digital advertising solutions, sponsored editorial content, prime banner placements, and targeted social media amplification."
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-60 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-12">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: Bold Statement */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-[11px] font-bold text-[#E8000E] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-lg border border-red-200/60 w-fit">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight tracking-tight">
                We Showcase Your Ads to a Vast and Influential Global + Local Audience.
              </h2>
              <p className="text-sm sm:text-base text-zinc-750 leading-relaxed font-bold">
                Times Digital Media is a digtial marketing agency. We present a powerful and lucrative advertising platform for brands, corporations, institutes and businesses seeking high-impact digital visibility and meaningful audience engagement.
              </p>
              <p className="text-sm sm:text-base text-zinc-750 leading-relaxed font-bold">
                We have a strong reputation for credibility, relevance, and timely reporting, we enable advertisers to effectively showcase products to a vast viewership across Pakistan's key commercial hubs, Islamabad, Rawalpindi, Karachi, Lahore, Quetta, Peshawar and key international markets, offering brands both local depth and global exposure.
              </p>
            </div>
 
            {/* Right Block: Capabilities Values List */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-zinc-300 transition-all duration-300 border-l-4 border-l-[#E8000E] hover:border-red-500 hover:border-l-4 hover:border-l-[#E8000E] hover:shadow-[0_20px_40px_rgba(232,0,14,0.06)] hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-300">
                    {value.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold text-zinc-900 group-hover:text-[#E8000E] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-bold">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Symmetrical Address, Contacts & Logo Horizontal Row (Full Width) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
            
            {/* 1. Headquarters Address Block */}
            <div className="relative p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-4 shadow-sm overflow-hidden group min-h-[130px]">
              {/* Red Left Accent Border */}
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#E8000E]" />
              <div className="p-3 rounded-xl bg-red-50 text-[#E8000E] border border-red-200/60 shrink-0 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="block text-[10px] font-black text-[#E8000E] uppercase tracking-widest leading-none mb-2">
                  Office Address
                </span>
                <p className="text-xs sm:text-sm text-zinc-800 font-extrabold leading-normal">
                  House no. 183, Street 5, Sector-V, <br />
                  DHA Phase 8, Lahore, Pakistan
                </p>
              </div>
            </div>

            {/* 2. Contact Details Block */}
            <div className="relative p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-4 shadow-sm overflow-hidden group min-h-[130px]">
              {/* Red Left Accent Border */}
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#E8000E]" />
              <div className="p-3 rounded-xl bg-red-50 text-[#E8000E] border border-red-200/60 shrink-0 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col justify-center text-left w-full overflow-hidden">
                <span className="block text-[10px] font-black text-[#E8000E] uppercase tracking-widest leading-none mb-2">
                  Get In Touch
                </span>
                <a 
                  href="mailto:thetimesdigitalmedia@gmail.com" 
                  className="block text-xs sm:text-sm text-zinc-800 font-extrabold leading-normal hover:text-[#E8000E] transition-colors duration-300"
                  title="thetimesdigitalmedia@gmail.com"
                >
                  thetimesdigitalmedia@gmail.com
                </a>
                <a 
                  href="tel:+923164461707" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                      (window as any).gtag_report_conversion("tel:+923164461707");
                    } else {
                      window.location.href = "tel:+923164461707";
                    }
                  }}
                  className="block text-xs sm:text-sm text-zinc-800 font-extrabold leading-normal hover:text-[#E8000E] transition-colors duration-300 mt-1"
                >
                  +92 316 4461707
                </a>
              </div>
            </div>

            {/* 3. Brand Logo Block (Symmetrical to other Blocks) */}
            <div className="relative p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center shadow-sm overflow-hidden group min-h-[130px]">
              {/* Red Left Accent Border */}
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#E8000E]" />
              <div className="w-full h-full flex items-center justify-center p-2">
                <Image
                  src="/logo.png"
                  alt="Times Digital Media Logo"
                  width={200}
                  height={60}
                  className="max-w-full max-h-[60px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
 
        </div>
      </div>
    </section>
  );
}
