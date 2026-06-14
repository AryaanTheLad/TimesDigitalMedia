"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Sparkles, Flame, Eye, Video, Film, Share2 } from "lucide-react";

export default function ContentCreation() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      number: "01",
      title: "Hook Development & Scripting",
      description: "We analyze high-retention frameworks to script powerful hooks in the first 3 seconds, ensuring viewers stop scrolling."
    },
    {
      icon: <Video className="w-5 h-5 text-blue-400" />,
      number: "02",
      title: "Cinematic High-Res Production",
      description: "Our teams coordinate scripting, direct shots, and record top-tier visuals that fit native social feeds perfectly."
    },
    {
      icon: <Film className="w-5 h-5 text-cyan-400" />,
      number: "03",
      title: "Retention-Engine Editing",
      description: "We use sound design, seamless jumps, color grading, and dynamic on-screen text to optimize watch time and virality."
    },
    {
      icon: <Share2 className="w-5 h-5 text-purple-400" />,
      number: "04",
      title: "Viral Execution & Ad Deployment",
      description: "We test creatives natively and scale successful short-forms via social channels or targeted paid spark ads."
    }
  ];

  return (
    <section id="showcase" className="relative py-32 bg-[#050507] overflow-hidden">
      {/* Background decoration grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Responsive Grid */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20 w-fit">
              Short-Form Engine
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-satin leading-tight">
              Viral Short-Form Content Produced From Scratch.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed font-medium">
              Amateur videos get scrolled past. Times Digital Media engineers high-retention vertical reels, TikToks, and ad creatives that keep audiences glued to the screen from the first frame to the last.
            </p>

            {/* Steps Timeline */}
            <div className="mt-8 flex flex-col gap-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-600/10 group-hover:border-indigo-500/30 transition-all">
                    {step.icon}
                  </div>
                  <div className="flex flex-col gap-1 border-b border-white/5 pb-4 w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold font-mono text-zinc-500">{step.number}</span>
                      <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Mobile Visual Showcase Mockup */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full">
            {/* Ambient Background Glow */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

            {/* Dual Phone Showcase Layout */}
            <div className="relative flex items-center gap-6 max-w-md w-full justify-center">
              
              {/* Phone Mockup 1 (Primary - Viral Metrics Overlay) */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[240px] aspect-[9/19] rounded-[36px] bg-[#0A0A0C] border-[6px] border-zinc-800 p-2 shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Dynamic Screen Mockup Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/40 to-transparent z-10" />

                {/* Simulated Reel Aesthetic Background */}
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="block text-3xl mb-2">🎬</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Simulated High-Retention Footage</span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="w-full flex items-center justify-between px-4 py-1 z-20">
                  <span className="text-[9px] text-white/80 font-medium">9:41</span>
                  <div className="w-16 h-3 rounded-full bg-black/60 backdrop-blur-md border border-white/5" />
                </div>

                {/* Simulated Video Play Trigger overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all shadow-lg"
                  >
                    <Play className="w-4.5 h-4.5 fill-white text-white translate-x-0.5" />
                  </motion.div>
                </div>

                {/* Video Info Overlay */}
                <div className="w-full z-20 flex flex-col gap-2 p-3 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-indigo-500" />
                    <span className="text-[10px] font-bold text-white">@timesdigital</span>
                  </div>
                  <p className="text-[9px] text-zinc-300 font-semibold line-clamp-2">
                    How we scaled a bootstrapped SaaS brand from $10k to $150k monthly recurring revenue using short-form spark networks... #marketing #scaling
                  </p>
                  
                  {/* Views pills */}
                  <div className="inline-flex items-center gap-1 bg-black/50 border border-white/10 backdrop-blur px-2 py-0.5 rounded-lg w-fit mt-1">
                    <Eye className="w-2.5 h-2.5 text-indigo-400" />
                    <span className="text-[8px] font-extrabold text-white">1.8M VIEWS</span>
                  </div>
                </div>
              </motion.div>

              {/* Phone Mockup 2 (Secondary Shifted - Metric Cards) */}
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 30, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:flex w-[200px] aspect-[9/19] rounded-[36px] bg-[#0A0A0C] border-[6px] border-zinc-800 p-2 shadow-2xl relative overflow-hidden flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                {/* Simulated Grid Background inside Second phone */}
                <div className="absolute inset-0 bg-zinc-950 flex flex-col p-4 pt-12 gap-4">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Analytics Dashboard</span>
                  
                  {/* Metric 1 */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
                    <span className="text-[8px] text-zinc-500 font-semibold uppercase">Organic Reach</span>
                    <span className="text-sm font-bold text-white">+482%</span>
                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-indigo-500 rounded-full" />
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
                    <span className="text-[8px] text-zinc-500 font-semibold uppercase">Acquisition Cost</span>
                    <span className="text-sm font-bold text-emerald-400">-34.8% CPC</span>
                    <span className="text-[7px] text-zinc-400">Target audience efficiency reached</span>
                  </div>
                  
                  {/* Metric 3 */}
                  <div className="p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex flex-col gap-1">
                    <span className="text-[8px] text-indigo-400 font-bold uppercase flex items-center gap-1">
                      <Flame className="w-2.5 h-2.5 fill-indigo-500" />
                      Viral Spike Alert
                    </span>
                    <span className="text-xs text-white font-medium">Campaign hit over 50,000 shares in under 12 hours.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
