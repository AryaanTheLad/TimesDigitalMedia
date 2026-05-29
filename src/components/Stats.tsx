"use client";

import { useEffect, useRef, useState } from "react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  isStatic?: boolean;
}

function Counter({ value, suffix = "", duration = 2.0 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            
            // Premium cubic out ease function (fast start, slow end)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * value);
            
            setDisplayValue(currentVal);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };
          
          window.requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className="font-mono">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

function StatCard({ value, suffix, label, description, isStatic }: StatItemProps) {
  return (
    <div
      className="relative rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-zinc-300 overflow-hidden group min-h-[360px] transition-all duration-300 bg-white border-l-4 border-l-[#E8000E] hover:border-red-500 hover:border-l-4 hover:border-l-[#E8000E] hover:shadow-[0_20px_40px_rgba(232,0,14,0.06)] hover:-translate-y-1"
    >
      {/* Dynamic hover-glow background orb */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, rgba(232, 0, 14, 0.08) 0%, rgba(232, 0, 14, 0) 70%)",
        }}
      />
      {/* Subtle ambient glow always visible */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(232, 0, 14, 0.03) 0%, rgba(232, 0, 14, 0) 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        <div>
          {/* 1. Large, Bold Highlighted Title at the Top */}
          <h3 className="text-xl sm:text-2xl font-black text-zinc-950 leading-tight tracking-tight mb-4 group-hover:text-[#E8000E] transition-colors duration-300">
            {label}
          </h3>
          
          {/* 2. Massive animated counter in the center */}
          <div className="text-5xl sm:text-6xl font-black tracking-tight text-zinc-900 font-mono">
            {isStatic ? (
              <span>
                {value}
                {suffix}
              </span>
            ) : (
              <Counter value={value} suffix={suffix} />
            )}
          </div>
        </div>

        {/* 3. Narrative description at the bottom */}
        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-bold mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Stats() {
  const statsData: StatItemProps[] = [
    {
      value: 1,
      suffix: "M+",
      label: "Avg Daily Impressions",
      description:
        "High-frequency, high-impact visibility delivering over 1 Million daily impressions to showcase your AD to an active, direct, and dynamic audience.",
      isStatic: true,
    },
    {
      value: 30,
      suffix: "M+",
      label: "Monthly Impressions",
      description:
        "Massive monthly digital footprint and audience engagement across our pages, delivering extensive brand exposure.",
    },
    {
      value: 2,
      suffix: "M+",
      label: "Total Platform Followers",
      description:
        "Active, loyal, and engaged community of over 2 Million+ followers built organically across our official Facebook, Instagram, and X pages.",
    },
    {
      value: 70,
      suffix: "%",
      label: "18–35 Demographic",
      description:
        "Youthful audience known for strong purchasing power and high online engagement. Tailored for precision targeting (80% M / 20% F).",
    },
  ];

  return (
    <section id="metrics" className="relative py-16 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-60 z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
