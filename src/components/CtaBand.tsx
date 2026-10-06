import TrackedLink from "./TrackedLink";
import { ArrowRight, MessageCircle } from "lucide-react";
import WhatsAppLink from "./WhatsAppLink";

/** Closing call to action used at the end of inner pages. */
export default function CtaBand({
  title = "Get a free audit of your ads and funnel.",
  text = "Six quick questions. A strategist replies within 24 hours with where your next leads should come from.",
  location,
}: {
  title?: string;
  text?: string;
  location: string;
}) {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-[32px] bg-[#09090b] text-white p-8 sm:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-[1.05]">{title}</h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 font-medium leading-relaxed">{text}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <TrackedLink
              href="/free-growth-audit"
              cta="free_growth_audit"
              location={location}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-[#09090b] bg-white hover:bg-stone-100 transition-colors"
            >
              Get My Free Growth Audit <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </TrackedLink>
            <WhatsAppLink
              location={location}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-white border border-zinc-700 hover:border-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp us
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
