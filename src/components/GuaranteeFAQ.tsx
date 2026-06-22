"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How fast will I see results?",
    answer:
      "Most clients see measurable lead flow within the first 14-21 days of campaign launch. Full optimisation and scaling typically happen by day 30-45 as we accumulate data and refine targeting.",
  },
  {
    question: "Is ad spend included in the fee?",
    answer:
      "Your ad budget is billed directly to YOUR Meta or Google account. You always own your ad accounts, see exactly where every rupee goes, and keep full control of your data. Our fee covers strategy, creative, setup, optimisation, and reporting.",
  },
  {
    question: "What if it doesn't work?",
    answer:
      "We're fully invested in your success. Our team continuously optimises campaigns based on real data, and we maintain transparent reporting so you always know exactly what's happening. We don't rest until your campaigns are performing.",
  },
  {
    question: "Do you work outside Pakistan?",
    answer:
      "Yes. While our core team and media network are based in Pakistan, we manage campaigns for clients across the Middle East, UK, US, and Canada. Paid ads and digital strategy are borderless.",
  },
  {
    question: "What size businesses do you take on?",
    answer:
      "We work with businesses spending as little as $333/month on management (our Starter package) up to large enterprises with custom requirements. If you're serious about growth, we have a package that fits.",
  },
];

export default function GuaranteeFAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="guarantee"
      className="relative py-8 md:py-12 bg-transparent border-t border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Part 1 - Guarantee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="bg-[#E8000E] text-white py-8 sm:py-12 rounded-[32px] text-center px-6 sm:px-12 mb-12 md:mb-16"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight max-w-4xl mx-auto leading-[1.1]">
            More revenue, sales and qualified leads in 30 days.
          </p>
          <p className="text-sm font-medium text-white/80 mt-4">
            That&apos;s our commitment.
          </p>
        </motion.div>

        {/* Part 2 - FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            variants={itemVariants}
            className="text-[9px] font-mono tracking-widest uppercase text-stone-400"
          >
            FAQ
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4 mb-10 md:mb-12"
          >
            Common Questions
          </motion.h2>

          <motion.div variants={itemVariants} className="border-t border-stone-200">
            {faqs.map((faq, index) => {
              const isOpen = activeIdx === index;
              return (
                <div key={index} className="border-b border-stone-200">
                  <button
                    onClick={() =>
                      setActiveIdx(isOpen ? null : index)
                    }
                    className="w-full text-left py-6 sm:py-7 flex items-center justify-between gap-6 cursor-pointer focus:outline-none min-h-[44px]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span
                      className={`text-base sm:text-lg md:text-xl font-bold font-display tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-[#E8000E]" : "text-[#09090b]"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div className="shrink-0 text-[#09090b] hover:text-[#E8000E] transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 sm:pb-8 pr-12 text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-3xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
