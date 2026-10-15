import Link from "next/link";
import { ArrowUpRight, Crosshair, Clapperboard, Filter } from "lucide-react";
import { getService } from "@/data/services";

/**
 * Homepage services, grouped by the job they do in the funnel instead of a
 * flat list of eight. Service names and links come from src/data/services.ts.
 */
const PILLARS = [
  {
    icon: Crosshair,
    title: "Acquire",
    lead: "Paid campaigns that find buyers and bring them in.",
    services: ["meta-ads", "google-ads", "youtube-ads"],
  },
  {
    icon: Clapperboard,
    title: "Create",
    lead: "Ad creative and reels made to be tested, not just posted.",
    services: ["content-creation", "social-media-management"],
  },
  {
    icon: Filter,
    title: "Convert",
    lead: "Landing pages, tracking and lead flows that turn clicks into enquiries.",
    services: ["performance-marketing-lead-generation", "web-development", "seo"],
  },
] as const;

export default function ServicePillars() {
  return (
    <section id="services" className="relative py-10 md:py-16 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-10 md:mb-12 flex flex-col items-start max-w-3xl">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-500">03 / What we do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4">
            One team for the whole funnel
          </h2>
          <p className="mt-5 text-sm sm:text-base text-[#57534E] font-medium font-body leading-relaxed">
            Ads, the creative that runs in them, and the pages and tracking behind them. When one team owns all three,
            nobody can blame the other for a bad cost per lead.
          </p>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <li key={pillar.title} className="rounded-[32px] bg-white border border-stone-200 p-8 shadow-sm flex flex-col gap-5">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#E8000E]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-black font-display tracking-tight text-[#09090b]">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-[#57534E] leading-relaxed font-body font-medium">{pillar.lead}</p>
                </div>
                <ul className="mt-auto border-t border-stone-200">
                  {pillar.services.map((slug) => {
                    const service = getService(slug);
                    if (!service) return null;
                    return (
                      <li key={slug} className="border-b border-stone-200">
                        <Link
                          href={`/services/${slug}`}
                          className="group flex items-center justify-between gap-3 py-3 min-h-[44px] text-sm font-bold text-[#09090b] hover:text-[#E8000E] transition-colors"
                        >
                          {service.shortName}
                          <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#E8000E] transition-colors" aria-hidden="true" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-sm text-[#57534E] font-medium">
          <Link href="/services" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4 hover:text-[#E8000E]">
            See all services
          </Link>{" "}
          with what&apos;s included, process and pricing for each.
        </p>
      </div>
    </section>
  );
}
