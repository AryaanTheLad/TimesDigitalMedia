"use client";

import { motion } from "framer-motion";

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

const caseStudies = [
  {
    client: "Zameen.com",
    heroNumber: "[X]",
    sublabel: "investor leads/month, [Y]% qualified",
  },
  {
    client: "Stitch",
    heroNumber: "[X]x",
    sublabel: "ROAS on [Y] ad spend over the campaign window",
  },
] as const;

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
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
            CLIENT RESULTS
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4"
          >
            Results That Speak in Numbers
          </motion.h2>
        </motion.div>

        {/* Case-Study Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.client}
              variants={itemVariants}
              className="rounded-[32px] bg-white border border-stone-200 p-8 shadow-sm hover:border-[#E8000E]/20 hover:shadow-[0_20px_40px_rgba(232,0,14,0.02)] transition-all duration-300 flex flex-col gap-4"
            >
              {/* Client label */}
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400">
                {study.client}
              </span>

              {/* Hero number */}
              <p className="text-5xl sm:text-6xl font-black text-[#E8000E] leading-none">
                {study.heroNumber}
              </p>

              {/* Sublabel */}
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium">
                {study.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="rounded-[32px] bg-[#09090b] border border-zinc-800 p-8 sm:p-12"
          >
            <div className="max-w-3xl mx-auto flex flex-col gap-6">
              {/* Decorative quote mark */}
              <span
                className="text-6xl text-[#E8000E] font-serif leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote>
                <p className="text-lg sm:text-xl font-medium italic text-zinc-300 leading-relaxed">
                  [Insert client testimonial here - 2-3 sentences about results
                  achieved.]
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold text-white">
                    [Client Name]
                  </span>
                  <span className="text-xs text-zinc-400">
                    [Title, Company]
                  </span>
                </div>

                {/* Logo placeholder */}
                <div className="rounded-lg border border-zinc-700 px-4 py-2 text-xs text-zinc-500 w-fit">
                  [Company Logo Placeholder]
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
