"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Clients() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const brandLogos = [
    { 
      name: "WWF Pakistan", 
      path: "/logo_wwf.jpg",
      role: "Digital Advocacy",
      desc: "Scaled digital awareness and engagement campaigns for conservation initiatives."
    },
    { 
      name: "Zameen.com", 
      path: "/logo_zameen.jpg",
      role: "Lead Acquisition",
      desc: "Deployed premium campaigns scaling real estate investor lead capture."
    },
    { 
      name: "Ibadat University", 
      path: "/logo_ibadat.jpg",
      role: "Student Acquisition",
      desc: "Targeted admissions marketing driving record-breaking enrollment drives.",
      imgClass: "scale-[2.0]" // Compensate for large white margins in the source logo file
    },
    { 
      name: "CIMS School of Law", 
      path: "/logo_cims.jpg",
      role: "Institutional Positioning",
      desc: "Local awareness and lead capture systems for legal studies admissions."
    },
    { 
      name: "Stitch", 
      path: "/logo_stitch.jpg",
      role: "DTC E-Commerce",
      desc: "Targeted digital clearance sales and cultural campaigns driving conversions."
    },
    { 
      name: "Star Shah", 
      path: "/logo_starshah.jpg",
      role: "Music Artist Campaign",
      desc: "Structured multi-stage organic social campaigns for single launches."
    },
  ];

  return (
    <section id="clients" className="relative py-8 md:py-12 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Section eyebrow */}
        <div className="mb-8 flex flex-col items-start">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
            05 / Partnerships
          </span>
          <h2 className="text-xl md:text-2xl font-black font-display tracking-tight text-[#09090b] mt-3">
            Trusted by Strategic Partners
          </h2>
        </div>

        {/* ─── Client Cards Grid with Slide-Down Reveal ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {brandLogos.map((logo, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative group min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]"
            >
              {/* Main Card (Always Visible) */}
              <div className="absolute inset-0 bg-white rounded-3xl border border-zinc-200 flex items-center justify-center p-6 z-20 transition-all duration-300 group-hover:border-red-500/25 group-hover:shadow-md">
                <div className="h-24 flex items-center justify-center shrink-0">
                  <Image
                    src={logo.path}
                    alt={logo.name}
                    width={130}
                    height={56}
                    className={`max-w-[130px] max-h-14 object-contain transition-all duration-300 ${hoveredIdx === idx ? "grayscale-0 opacity-100" : "grayscale opacity-60"} ${logo.imgClass || ""}`}
                  />
                </div>
              </div>

              {/* Revealable Dropdown Panel */}
              <motion.div
                initial={{ opacity: 0, y: -15, scaleY: 0.9 }}
                animate={{ 
                  opacity: hoveredIdx === idx ? 1 : 0,
                  y: hoveredIdx === idx ? 0 : -15,
                  scaleY: hoveredIdx === idx ? 1 : 0.9
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ originY: 0 }}
                className="absolute top-[88%] left-[2px] right-[2px] bg-white border-x border-b border-zinc-200 rounded-b-3xl shadow-[0_15px_30px_rgba(0,0,0,0.06)] z-10 p-5 pt-8 flex flex-col items-center text-center pointer-events-none"
              >
                <span className="text-[9px] font-mono font-bold text-[#E8000E] uppercase tracking-wider mb-1.5 block">
                  {logo.role}
                </span>
                <p className="text-[10px] text-[#57534E] leading-relaxed font-body font-medium max-w-[150px]">
                  {logo.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ─── View Portfolio CTA ─── */}
        <div className="mt-12 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors shadow-sm"
            >
              View Portfolio
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
