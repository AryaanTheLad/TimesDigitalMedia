import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCaseStudy } from "@/data/caseStudies";

/**
 * Homepage spotlight: one case study told as problem → test → result.
 * Afsana is used because it is the only case study with full, client-named
 * Ads Manager figures. All numbers come from its caseStudies.ts entry.
 */

// Ad-set test from the Afsana proof shots (cost per WhatsApp conversation).
const AUDIENCE_TEST = [
  { label: "Advantage+", cost: 177.99, chats: 23, note: "Winner" },
  { label: "Detailed targeting", cost: 232.82, chats: 18, note: "Kept" },
  { label: "Broad", cost: 371.8, chats: 3, note: "Switched off" },
];
const MAX_COST = Math.max(...AUDIENCE_TEST.map((a) => a.cost));

export default function FeaturedCaseStudy() {
  const study = getCaseStudy("afsana");
  if (!study) return null;
  const ads = (study.videos ?? []).slice(0, 3);

  return (
    <section id="featured-case-study" className="relative py-10 md:py-16 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Story + numbers */}
          <div className="lg:col-span-6 flex flex-col items-start gap-5">
            <span className="text-[9px] font-mono tracking-widest uppercase text-stone-500">
              02 / Featured case study · {study.category}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05]">
              44 WhatsApp bookings in 30 days for {study.name}
            </h2>

            <dl className="flex flex-col gap-4 text-sm sm:text-base text-[#57534E] font-body font-medium leading-relaxed max-w-xl">
              <div>
                <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#09090b]">The problem</dt>
                <dd className="mt-1">{study.challenge}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#09090b]">What we did</dt>
                <dd className="mt-1">
                  Built the brand and price cards, edited one ad reel per nail set, and ran them as Meta conversation
                  campaigns that open a WhatsApp chat. Caption, price and audience variants were tested against each other.
                </dd>
              </div>
            </dl>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 w-full pt-5 border-t border-stone-200/60">
              {study.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[9px] font-mono tracking-widest uppercase text-stone-500">{stat.label}</dt>
                  <dd className="mt-1.5 text-2xl sm:text-3xl font-black font-body text-[#09090b] leading-none">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href={`/portfolio/${study.id}`}
              className="mt-2 inline-flex items-center gap-2 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors"
            >
              Read the full case study <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* The test + the ads */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <figure className="rounded-[32px] border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <figcaption className="flex items-baseline justify-between gap-4 mb-6">
                <span className="text-base font-black tracking-tight text-[#09090b]">Same ads, three audiences</span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-500">Cost per chat</span>
              </figcaption>
              <ul className="flex flex-col gap-4">
                {AUDIENCE_TEST.map((a, i) => (
                  <li key={a.label}>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-[#09090b]">
                        {a.label} <span className="text-stone-500 font-medium">· {a.chats} chats · {a.note}</span>
                      </span>
                      <span className="text-[#09090b]">Rs {a.cost.toFixed(2)}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-stone-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${i === 0 ? "bg-[#E8000E]" : "bg-stone-400"}`}
                        style={{ width: `${(a.cost / MAX_COST) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-[#57534E] font-medium leading-relaxed">
                Budget moved to the cheapest audience and the broad set was switched off. That is the job: test, read the
                numbers, move the money.
              </p>
            </figure>

            {ads.length > 0 && (
              <div>
                <p className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-500 mb-3">Ads that ran</p>
                <ul className="grid grid-cols-3 gap-3 sm:gap-4">
                  {ads.map((ad) => (
                    <li key={ad.src} className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-stone-200 bg-stone-100">
                      <Image src={ad.poster} alt={`Ad reel: ${ad.title}`} fill sizes="(max-width: 1024px) 30vw, 15vw" className="object-cover" unoptimized />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
