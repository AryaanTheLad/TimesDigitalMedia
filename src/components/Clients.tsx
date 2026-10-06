"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/data/caseStudies";

/**
 * One card per client (previously each client was rendered twice: a mobile
 * card and a desktop card). Each client's text now appears in the DOM once;
 * on large screens the details reveal on hover/focus via CSS.
 */
export default function Clients() {
  return (
    <section id="clients" className="relative py-8 md:py-12 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">

        {/* Section eyebrow */}
        <div className="mb-8 flex flex-col items-start">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
            05 / Clients
          </span>
          <h2 className="text-xl md:text-2xl font-black font-display tracking-tight text-[#09090b] mt-3">
            Brands we&apos;ve worked with
          </h2>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 relative">
          {CLIENT_LOGOS.map((logo) => {
            const card = (
              <>
                {/* Logo + name */}
                <div className="relative z-20 bg-white rounded-3xl border border-zinc-200 flex flex-col items-center justify-center p-6 lg:min-h-[200px] transition-all duration-300 group-hover:border-red-500/25 group-hover:shadow-md group-focus-within:border-red-500/25">
                  <div className="h-16 lg:h-20 flex items-center justify-center shrink-0">
                    <Image
                      src={logo.path}
                      alt={`${logo.name} logo`}
                      width={130}
                      height={56}
                      unoptimized
                      className={`max-w-[120px] lg:max-w-[130px] max-h-12 lg:max-h-14 object-contain grayscale opacity-80 lg:opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus-within:grayscale-0 group-focus-within:opacity-100 ${logo.imgClass || ""}`}
                    />
                  </div>
                  <span className="mt-3 text-xs font-bold text-stone-700 tracking-tight text-center transition-colors duration-300 group-hover:text-[#09090b]">
                    {logo.name}
                  </span>

                  {/* Details: rendered once. Inline on mobile/tablet; hover/focus dropdown on desktop. */}
                  <span className="mt-3 flex flex-col items-center text-center lg:mt-0 lg:absolute lg:top-[88%] lg:left-[2px] lg:right-[2px] lg:-z-10 lg:bg-white lg:border-x lg:border-b lg:border-zinc-200 lg:rounded-b-3xl lg:shadow-[0_15px_30px_rgba(0,0,0,0.06)] lg:p-5 lg:pt-8 lg:pointer-events-none lg:opacity-0 lg:-translate-y-3 lg:transition-all lg:duration-300 lg:ease-[cubic-bezier(0.16,1,0.3,1)] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-focus-within:opacity-100 lg:group-focus-within:translate-y-0">
                    <span className="text-[9px] font-mono font-bold text-[#E8000E] uppercase tracking-wider mb-1 lg:mb-1.5">{logo.role}</span>
                    <span className="text-[11px] lg:text-[10px] text-[#57534E] leading-relaxed font-body font-medium max-w-[200px] lg:max-w-[150px]">{logo.desc}</span>
                  </span>
                </div>
              </>
            );

            return (
              <li
                key={logo.name}
                className="relative group w-full sm:w-[calc(50%-12px)] lg:w-[calc(16.666%-20px)] hover:z-30 focus-within:z-30"
              >
                {logo.caseStudy ? (
                  <Link href={`/portfolio/${logo.caseStudy}`} className="block rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8000E]/40">
                    {card}
                    <span className="sr-only">: view case study</span>
                  </Link>
                ) : (
                  <div>{card}</div>
                )}
              </li>
            );
          })}
        </ul>

        {/* ─── View Portfolio CTA ─── */}
        <div className="mt-12 flex justify-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors shadow-sm"
            >
              View case studies
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
