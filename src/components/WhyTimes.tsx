"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Globe } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Performance",
    description:
      "Paid ads on Meta & Google, optimised daily for leads and ROAS.",
  },
  {
    icon: Users,
    title: "Owned Reach",
    description:
      "1M+ followers, 30M+ monthly impressions on our own media channels.",
  },
  {
    icon: Globe,
    title: "Authority",
    description:
      "Brand placement on the Times of Islamabad news portal.",
  },
] as const;

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export default function WhyTimes() {
  return (
    <section
      id="why-times"
      className="relative py-8 md:py-12 bg-transparent border-t border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mb-10 md:mb-14"
        >
          <motion.span
            variants={itemVariants}
            className="text-[9px] font-mono tracking-widest uppercase text-stone-400"
          >
            WHY TIMES
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4"
          >
            Every agency can buy you impressions.
            <br className="hidden sm:block" /> We own them.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium mt-5 max-w-2xl"
          >
            Other agencies rent attention on Meta and Google. We do that too,
            then we amplify your brand across the Times Digital Media network:
            1M+ followers, 30M+ monthly reach, 40M+ views every 28 days, plus
            placement on the Times of Islamabad news portal. Distribution your
            competitors literally cannot buy.
          </motion.p>
        </motion.div>

        {/* Pillar Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="rounded-[32px] bg-white border border-stone-200 p-8 shadow-sm flex flex-col gap-5"
              >
                {/* Icon box */}
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#E8000E]" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-black font-display tracking-tight text-[#09090b]">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
