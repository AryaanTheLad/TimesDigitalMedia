"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ShowcaseBanner() {
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
    <section id="showcase" className="relative py-8 md:py-12 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column: Narrative & Inline Stats */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-start gap-4">
            <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
              04 / Campaign Spotlight
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05]">
              Ibadat International University
            </h2>
 
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-md">
              A bespoke showcase of our student acquisition engine. We deployed targeted placements across high-intent networks, driving record-breaking admissions scaling for the Spring 2026 academic drive.
            </p>
 
            {/* Inline Editorial Stats (No cards, just clean whitespace and typography) */}
            <div className="grid grid-cols-2 gap-6 w-full mt-5 pt-5 border-t border-stone-200/60">
              <div>
                <span className="block text-[8px] font-mono tracking-widest uppercase text-stone-400 mb-2">
                  Target Group
                </span>
                <span className="text-3xl sm:text-4xl font-black font-body text-[#E8000E] block leading-none">
                  18–35
                </span>
                <span className="block text-[10px] text-[#57534E] font-bold uppercase tracking-wider mt-2">
                  Academic Segment
                </span>
              </div>
 
              <div>
                <span className="block text-[8px] font-mono tracking-widest uppercase text-stone-400 mb-2">
                  Campaign Window
                </span>
                <span className="text-3xl sm:text-4xl font-black font-body text-[#09090b] block leading-none">
                  Spring '26
                </span>
                <span className="block text-[10px] text-[#57534E] font-bold uppercase tracking-wider mt-2">
                  Active admissions
                </span>
              </div>
            </div>
          </motion.div>
 
          {/* Right Column: Massive Full-Bleed Image Frame */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[32px] overflow-hidden border border-stone-200/50 bg-stone-50 shadow-sm"
          >
            <Image
              src="/ibadat_admissions.png"
              alt="Ibadat International University Admissions Campaign"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 58vw"
              className="object-cover object-center transition-transform duration-1000 hover:scale-102"
              quality={80}
              unoptimized
            />
            {/* Ambient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
 
      </div>
    </section>
  );
}

