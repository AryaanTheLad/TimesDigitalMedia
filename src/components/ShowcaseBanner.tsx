"use client";

import { motion } from "framer-motion";
import { Megaphone, Eye, Target, Calendar, Users } from "lucide-react";

export default function ShowcaseBanner() {
  return (
    <section id="showcase" className="relative py-16 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <span className="text-[11px] font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 flex items-center gap-1.5">
            <Megaphone className="w-3 h-3 text-purple-500" />
            Live Campaign Spotlight
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 leading-tight tracking-tight">
            Ibadat International University <br />
            Admissions Campaign
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 max-w-2xl leading-relaxed font-bold">
            A showcase of our advertising solutions for IIU. We deployed targeted banner placements, driving massive admissions scaling for the Spring 2026 academic drive.
          </p>
        </div>

        {/* Premium Banner Dashboard Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-3xl overflow-hidden border border-zinc-300 shadow-2xl bg-zinc-50 p-4 md:p-6"
        >
          {/* Header dots of browser bar */}
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] text-zinc-550 font-mono font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-550 animate-ping" />
              ACTIVE SPRING DRIVE
            </span>
          </div>

          {/* Actual Admissions Banner Image */}
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-zinc-300 shadow-lg bg-zinc-200 group">
            <img
              src="/ibadat_admissions.png"
              alt="Ibadat International University Admissions Spring 2026 Campaign"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Live Campaign Analytics overlay bar at the bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-2xl mx-auto">
            
            {/* Metric 1: Target Group */}
            <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm border-l-4 border-l-blue-500 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-2 text-zinc-500">
                <span className="text-[10px] font-bold uppercase tracking-wider">Target Group</span>
                <Users className="w-4 h-4 text-blue-500" />
              </div>
              <div className="mt-2">
                <span className="text-xl font-black text-zinc-900 block leading-none">18–35</span>
                <span className="text-[9px] text-zinc-400 font-bold block mt-1">Academic Segment</span>
              </div>
            </div>

            {/* Metric 2: Campaign Window */}
            <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm border-l-4 border-l-red-500 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-2 text-zinc-500">
                <span className="text-[10px] font-bold uppercase tracking-wider">Campaign Window</span>
                <Calendar className="w-4 h-4 text-red-500" />
              </div>
              <div className="mt-2">
                <span className="text-xl font-black text-zinc-900 block leading-none">Spring '26</span>
                <span className="text-[9px] text-zinc-400 font-bold block mt-1">Active Admissions</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
