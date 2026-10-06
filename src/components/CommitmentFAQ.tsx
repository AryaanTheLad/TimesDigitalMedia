import { Plus } from "lucide-react";
import JsonLd from "./JsonLd";
import { faqNode } from "@/lib/schema";
import type { FAQ } from "@/data/faqs";

/**
 * Commitment strip + FAQ accordion.
 * Uses native <details>/<summary>: every answer is in the server-rendered
 * HTML (crawlable, works without JS) and only one opens at a time via the
 * shared `name` attribute.
 */
export function FAQList({ faqs, group = "faq" }: { faqs: Pick<FAQ, "id" | "q" | "a">[]; group?: string }) {
  return (
    <div className="border-t border-stone-200">
      {faqs.map((faq) => (
        <details key={faq.id} id={faq.id} name={group} className="group border-b border-stone-200 scroll-mt-28">
          <summary className="list-none [&::-webkit-details-marker]:hidden w-full text-left py-6 sm:py-7 flex items-center justify-between gap-6 cursor-pointer min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8000E]/40 rounded-lg">
            <h3 className="text-base sm:text-lg md:text-xl font-bold font-display tracking-tight text-[#09090b] group-open:text-[#E8000E] transition-colors duration-300">
              {faq.q}
            </h3>
            <span className="shrink-0 text-[#09090b] transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
              <Plus className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
            </span>
          </summary>
          <p className="pb-6 sm:pb-8 pr-12 text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-3xl">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}

interface CommitmentFAQProps {
  faqs: FAQ[];
  showStrip?: boolean;
  heading?: string;
  /** Emit FAQPage schema (only on pages where these FAQs are the main FAQ block). */
  withSchema?: boolean;
  footer?: React.ReactNode;
}

export default function CommitmentFAQ({ faqs, showStrip = true, heading = "Common Questions", withSchema = true, footer }: CommitmentFAQProps) {
  return (
    <section id="faq" className="relative py-8 md:py-12 bg-transparent border-t border-stone-100">
      {withSchema && <JsonLd data={{ "@context": "https://schema.org", ...faqNode(faqs) }} />}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Commitment strip: worded as a commitment, never as an assurance of results */}
        {showStrip && (
          <div className="bg-[#E8000E] text-white py-8 sm:py-12 rounded-[32px] text-center px-6 sm:px-12 mb-12 md:mb-16">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight max-w-4xl mx-auto leading-[1.1]">
              More revenue, sales and qualified leads in 30 days.
            </p>
            <p className="text-sm font-medium text-white/85 mt-4">
              That&apos;s our commitment.
            </p>
          </div>
        )}

        <span className="text-[9px] font-mono tracking-widest uppercase text-stone-500">FAQ</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4 mb-10 md:mb-12">
          {heading}
        </h2>

        <FAQList faqs={faqs} />
        {footer}
      </div>
    </section>
  );
}
