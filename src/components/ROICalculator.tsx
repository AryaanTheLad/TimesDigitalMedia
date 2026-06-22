"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/** Benchmark cost-per-lead in PKR - edit this value to match your vertical */
const BENCHMARK_CPL = 500;

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

function formatPKR(value: number): string {
  return `PKR ${value.toLocaleString("en-PK")}`;
}

export default function ROICalculator() {
  const [monthlyBudget, setMonthlyBudget] = useState(50000);
  const [customerValue, setCustomerValue] = useState(25000);
  const [closeRate, setCloseRate] = useState(10);

  // Computed results
  const estimatedLeads = Math.round(monthlyBudget / BENCHMARK_CPL);
  const estimatedCustomers = Math.round(estimatedLeads * (closeRate / 100));
  const projectedRevenue = estimatedCustomers * customerValue;

  const results = [
    {
      value: estimatedLeads.toLocaleString("en-PK"),
      label: "Estimated Leads/mo",
    },
    {
      value: estimatedCustomers.toLocaleString("en-PK"),
      label: "Estimated New Customers/mo",
    },
    {
      value: formatPKR(projectedRevenue),
      label: "Projected New Revenue/mo",
    },
  ];

  return (
    <section
      id="calculator"
      className="relative py-8 md:py-12 bg-transparent border-t border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.span
            variants={itemVariants}
            className="text-[9px] font-mono tracking-widest uppercase text-stone-400"
          >
            ROI CALCULATOR
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4"
          >
            See What Your Ad Budget Could Return
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-2xl mx-auto mt-4"
          >
            Adjust the sliders to estimate your potential results based on
            industry benchmarks.
          </motion.p>
        </motion.div>

        {/* Sliders Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
        >
          {/* Monthly Ad Budget */}
          <motion.div
            variants={itemVariants}
            className="rounded-[32px] bg-white border border-stone-200 p-6 shadow-sm"
          >
            <label className="block text-xs font-mono tracking-wider uppercase text-stone-400 mb-4">
              Monthly Ad Budget
            </label>
            <p className="text-2xl sm:text-3xl font-black font-display text-[#09090b] mb-4">
              {formatPKR(monthlyBudget)}
            </p>
            <input
              type="range"
              min={10000}
              max={500000}
              step={5000}
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-stone-200 accent-[#E8000E]"
              aria-label="Monthly ad budget in PKR"
            />
            <div className="flex justify-between mt-2 text-[10px] font-mono text-stone-400">
              <span>PKR 10,000</span>
              <span>PKR 500,000</span>
            </div>
          </motion.div>

          {/* Avg. Customer Value */}
          <motion.div
            variants={itemVariants}
            className="rounded-[32px] bg-white border border-stone-200 p-6 shadow-sm"
          >
            <label className="block text-xs font-mono tracking-wider uppercase text-stone-400 mb-4">
              Avg. Customer Value
            </label>
            <p className="text-2xl sm:text-3xl font-black font-display text-[#09090b] mb-4">
              {formatPKR(customerValue)}
            </p>
            <input
              type="range"
              min={1000}
              max={200000}
              step={1000}
              value={customerValue}
              onChange={(e) => setCustomerValue(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-stone-200 accent-[#E8000E]"
              aria-label="Average customer value in PKR"
            />
            <div className="flex justify-between mt-2 text-[10px] font-mono text-stone-400">
              <span>PKR 1,000</span>
              <span>PKR 200,000</span>
            </div>
          </motion.div>

          {/* Current Close Rate */}
          <motion.div
            variants={itemVariants}
            className="rounded-[32px] bg-white border border-stone-200 p-6 shadow-sm"
          >
            <label className="block text-xs font-mono tracking-wider uppercase text-stone-400 mb-4">
              Current Close Rate
            </label>
            <p className="text-2xl sm:text-3xl font-black font-display text-[#09090b] mb-4">
              {closeRate}%
            </p>
            <input
              type="range"
              min={1}
              max={50}
              step={1}
              value={closeRate}
              onChange={(e) => setCloseRate(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-stone-200 accent-[#E8000E]"
              aria-label="Current close rate percentage"
            />
            <div className="flex justify-between mt-2 text-[10px] font-mono text-stone-400">
              <span>1%</span>
              <span>50%</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Results Strip */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[32px] bg-[#09090b] border border-zinc-800 p-8 mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {results.map((result, i) => (
              <motion.div key={i} variants={itemVariants}>
                <p className="text-3xl sm:text-4xl font-black text-[#E8000E]">
                  {result.value}
                </p>
                <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-2">
                  {result.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center"
        >
          <a
            href="#audit"
            className="inline-block px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors shadow-sm"
          >
            Get My Free Growth Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
