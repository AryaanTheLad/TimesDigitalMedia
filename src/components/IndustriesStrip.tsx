import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/data/industries";
import { getCaseStudy } from "@/data/caseStudies";

/** Homepage links into the /industries pages, each backed by real client work. */
export default function IndustriesStrip() {
  return (
    <section id="industries" className="relative py-10 md:py-16 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-10 flex flex-col items-start max-w-3xl">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-500">05 / Industries</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4">
            Built for how your customers buy
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => {
            const clients = industry.caseStudies.map((id) => getCaseStudy(id)?.name).filter(Boolean);
            return (
              <li key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group h-full rounded-[28px] border border-stone-200 bg-white p-7 shadow-sm flex flex-col gap-3 hover:border-[#E8000E]/30 transition-colors"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-lg font-black font-display tracking-tight text-[#09090b] group-hover:text-[#E8000E] transition-colors">
                      {industry.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 mt-1 shrink-0 text-stone-400 group-hover:text-[#E8000E] transition-colors" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-[#57534E] leading-relaxed font-body font-medium">{industry.challenges[0]}.</span>
                  {clients.length > 0 && (
                    <span className="mt-auto pt-3 border-t border-stone-100 text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">
                      {clients.join(" · ")}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
