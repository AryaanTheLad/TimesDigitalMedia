"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  index: string;
  illustration: React.ReactNode;
}

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  const services: ServiceItem[] = [
    {
      index: "01",
      title: "Meta Advertising",
      description:
        "Meta ad campaigns engineered to scale reach, generate qualified leads, and maximize ROI across Facebook and Instagram.",
      illustration: (
        <svg className="w-full h-full text-[#E8000E]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-20" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" className="opacity-10" />
          {/* Connected nodes */}
          <line x1="100" y1="50" x2="60" y2="120" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="50" x2="140" y2="120" stroke="currentColor" strokeWidth="1.5" />
          <line x1="60" y1="120" x2="140" y2="120" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="50" x2="100" y2="100" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="60" y1="120" x2="100" y2="100" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="140" y1="120" x2="100" y2="100" stroke="#ffffff" strokeWidth="1.5" />
          
          <circle cx="100" cy="50" r="8" fill="#E8000E" />
          <circle cx="60" cy="120" r="8" fill="#E8000E" />
          <circle cx="140" cy="120" r="8" fill="#E8000E" />
          <circle cx="100" cy="100" r="12" fill="#ffffff" />
          <circle cx="100" cy="100" r="6" fill="#09090b" />
        </svg>
      ),
    },
    {
      index: "02",
      title: "Google & YouTube Ads",
      description:
        "Promote your brand on Google Search results, Google Workspaces, YouTube, and partner networks. Launch targeted campaigns generating high-quality leads and awareness.",
      illustration: (
        <svg className="w-full h-full text-[#E8000E]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Search bar & Chart mockup */}
          <rect x="30" y="40" width="140" height="28" rx="6" stroke="#ffffff" strokeWidth="2" />
          <circle cx="48" cy="54" r="4" fill="#E8000E" />
          <line x1="62" y1="54" x2="110" y2="54" stroke="#ffffff" strokeWidth="2" />
          
          {/* Video Play Symbol / Youtube style */}
          <rect x="40" y="88" width="120" height="72" rx="12" stroke="currentColor" strokeWidth="2" />
          <polygon points="90,112 120,124 90,136" fill="#ffffff" />
          <circle cx="140" cy="108" r="5" fill="#E8000E" />
        </svg>
      ),
    },
    {
      index: "03",
      title: "Full Marketing Campaigns",
      description:
        "Marketing campaigns combining paid ads, content creation, audience targeting, and growth strategies for maximum impact.",
      illustration: (
        <svg className="w-full h-full text-[#E8000E]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Radial growth circles */}
          <circle cx="100" cy="100" r="70" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="20" fill="#E8000E" />
          
          {/* Target pointer lines */}
          <line x1="100" y1="15" x2="100" y2="185" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
          <line x1="15" y1="100" x2="185" y2="100" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
          
          <path d="M140 60 L100 100 L160 100" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="140" cy="60" r="6" fill="#E8000E" />
        </svg>
      ),
    },
    {
      index: "04",
      title: "Paid Advertisements",
      description:
        "Strategic paid advertising solutions across digital platforms to boost visibility, traffic, conversions, and customer acquisition.",
      illustration: (
        <svg className="w-full h-full text-[#E8000E]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Trend grid lines */}
          <line x1="30" y1="160" x2="170" y2="160" stroke="#ffffff" strokeWidth="2" />
          <line x1="30" y1="40" x2="30" y2="160" stroke="#ffffff" strokeWidth="2" />
          
          {/* Rising Bar Charts */}
          <rect x="48" y="120" width="16" height="40" fill="#ffffff" opacity="0.4" />
          <rect x="76" y="95" width="16" height="65" fill="#ffffff" opacity="0.7" />
          <rect x="104" y="70" width="16" height="90" fill="currentColor" />
          <rect x="132" y="40" width="16" height="120" fill="#E8000E" />
          
          {/* Line overlay */}
          <path d="M56 115 L84 90 L112 65 L140 35" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="140" cy="35" r="6" fill="#ffffff" />
        </svg>
      ),
    },
    {
      index: "05",
      title: "Web Development & Design",
      description:
        "Modern, highly-responsive websites tailored to branding, crafted for seamless user experience, and converting landing page.",
      illustration: (
        <svg className="w-full h-full text-[#E8000E]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Code Window */}
          <rect x="30" y="40" width="140" height="110" rx="10" stroke="#ffffff" strokeWidth="2" />
          <line x1="30" y1="68" x2="170" y2="68" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="46" cy="54" r="3" fill="#E8000E" />
          <circle cx="58" cy="54" r="3" fill="#ffffff" />
          <circle cx="70" cy="54" r="3" fill="#ffffff" className="opacity-40" />
          
          {/* Code brackets */}
          <path d="M65 95 L50 105 L65 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M135 95 L150 105 L135 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="108" y1="92" x2="92" y2="118" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-8 md:py-12 overflow-hidden bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header section with clean, descriptive text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-10 md:mb-12">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
              03 / Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4">
              Premium Digital & <br />
              Advertising Solutions
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-xl">
              Align your brand with Pakistan’s premier online digital agency. We deploy precision creative solutions, strategic paid advertising, and high-performance Web engineering to maximize reach and results.
            </p>
          </div>
        </div>

        {/* Dynamic Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Services List */}
          <div className="lg:col-span-7 flex flex-col w-full border-t border-stone-200">
            {services.map((service, index) => {
              const isOpen = activeIdx === index;
              return (
                <div key={index} className="border-b border-stone-200 w-full">
                  {/* Row Trigger */}
                  <button
                    onClick={() => setActiveIdx(index)}
                    onMouseEnter={() => setActiveIdx(index)}
                    className="w-full text-left py-7 flex items-center justify-between gap-6 cursor-pointer focus:outline-none min-h-[44px]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-xs font-mono text-stone-400 font-bold tracking-wider">
                        {service.index}
                      </span>
                      <span className={`text-xl sm:text-2xl md:text-3xl font-black font-display tracking-tight transition-colors duration-300 ${isOpen ? "text-[#E8000E]" : "text-[#09090b]"}`}>
                        {service.title}
                      </span>
                    </div>

                    <div className="shrink-0 text-[#09090b] hover:text-[#E8000E] transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Mobile details (Accordion layout) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden block lg:hidden"
                      >
                        <div className="pb-8 pl-4 sm:pl-12 pr-4 flex flex-col gap-4">
                          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-body font-medium">
                            {service.description}
                          </p>
                          {/* Inline Mobile Illustration */}
                          <div className="w-full aspect-[16/9] max-w-sm rounded-2xl bg-[#09090b] text-white border border-zinc-800 p-6 flex items-center justify-center">
                            {service.illustration}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side: Desktop Preview Panel */}
          <div className="hidden lg:block lg:col-span-5 self-center">
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-zinc-800 bg-[#09090b] text-white p-12 flex items-center justify-center shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 0.92, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full flex flex-col items-center justify-center gap-4"
                >
                  {/* SVG Illustration Container */}
                  <div className="w-32 h-32 flex items-center justify-center">
                    {services[activeIdx].illustration}
                  </div>

                  {/* Description Box below the illustration */}
                  <p className="text-xs sm:text-sm text-zinc-400 text-center leading-relaxed font-body font-medium max-w-sm mt-0">
                    {services[activeIdx].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
