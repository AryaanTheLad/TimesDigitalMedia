"use client";

import { ShieldCheck, BarChart, HardDrive } from "lucide-react";

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
              <span className="text-[11px] font-bold text-[#E8000E] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200/60 w-fit">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight tracking-tight">
                We Showcase Your ADS to a Vast and Influential Global + Local Audience.
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-bold">
                Times Digital Media is a digtial marketing agency. We present a powerful and lucrative advertising platform for brands, corporations, institutes and businesses seeking high-impact digital visibility and meaningful audience engagement.
              </p>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-bold">
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
 
        </div>
      </div>
    </section>
  );
}
