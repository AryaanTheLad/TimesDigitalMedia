import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NETWORK_STATS } from "@/data/stats";

/**
 * The media network as a differentiator on top of paid ads, shown once on the
 * homepage. Full audience data and insights screenshots live on /media-network.
 */
const FACTS = [
  { value: NETWORK_STATS.followers.display, label: "Followers on Facebook & Instagram" },
  { value: NETWORK_STATS.monthlyReach.display, label: "Accounts reached each month" },
  { value: "ToI", label: "Placement on the Times of Islamabad news portal" },
];

export default function WhyTimes() {
  return (
    <section id="why-times" className="relative py-10 md:py-16 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="rounded-[32px] bg-[#09090b] text-white p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-500">07 / The extra advantage</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-[1.05] mt-4">
              Any agency can run your ads. <span className="text-[#E8000E]">We can also launch you to our own audience.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-zinc-400 font-medium leading-relaxed max-w-xl">
              Times Digital Media is part of the same group as Times of Islamabad. Growth Campaign clients get weekly posts
              across our media network on top of their paid campaigns: extra organic reach for launches, offers and
              announcements.
            </p>
            <Link
              href="/media-network"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#E8000E] transition-colors min-h-[44px]"
            >
              How the media network works <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <dl className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FACTS.map((f) => (
              <div key={f.label} className="border-t border-zinc-800 pt-4">
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block text-4xl font-serif lining-nums font-bold text-white leading-none">{f.value}</span>
                  <span className="mt-3 block text-xs text-zinc-400 font-medium leading-relaxed">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
