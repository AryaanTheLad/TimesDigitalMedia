import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getCaseStudy } from "@/data/caseStudies";
import { getArticleMeta } from "@/content/blog/meta";
import { getService } from "@/data/services";

/** Related case studies (hub-and-spoke internal linking). */
export function RelatedCaseStudies({ ids, heading = "Related work" }: { ids: string[]; heading?: string }) {
  const items = ids.map(getCaseStudy).filter((c): c is NonNullable<typeof c> => Boolean(c));
  if (items.length === 0) return null;
  return (
    <section className="py-10 md:py-12 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] mb-6">{heading}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <li key={c.id}>
              <Link href={`/portfolio/${c.id}`} className="group flex items-start gap-4 rounded-3xl border border-stone-200 bg-white p-6 hover:border-[#E8000E]/30 transition-colors h-full">
                <span className={`relative w-14 h-14 shrink-0 rounded-xl overflow-hidden border ${c.logoBg ?? "bg-white border-zinc-200"}`}>
                  <Image src={c.logoPath} alt="" fill sizes="56px" className={c.logoObject ?? "object-contain"} unoptimized />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#E8000E]">{c.category}</span>
                  <span className="text-base font-black tracking-tight text-[#09090b] group-hover:text-[#E8000E] transition-colors">{c.name}</span>
                  <span className="text-xs text-[#57534E] font-medium leading-relaxed">{c.subtitle}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 ml-auto shrink-0 text-stone-500 group-hover:text-[#E8000E]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Related guides from the blog. */
export function RelatedArticles({ slugs, heading = "Guides" }: { slugs: string[]; heading?: string }) {
  const items = slugs.map(getArticleMeta).filter((a): a is NonNullable<typeof a> => Boolean(a));
  if (items.length === 0) return null;
  return (
    <section className="py-10 md:py-12 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] mb-6">{heading}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          {items.map((a) => (
            <li key={a.slug} className="border-t-2 border-[#09090b] pt-4">
              <Link href={`/blog/${a.slug}`} className="group block">
                <span className="text-base font-black tracking-tight text-[#09090b] group-hover:text-[#E8000E] transition-colors leading-snug">{a.title}</span>
                <span className="mt-2 block text-xs text-[#57534E] font-medium leading-relaxed">{a.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Related services as compact links. */
export function RelatedServices({ slugs, heading = "Related services" }: { slugs: string[]; heading?: string }) {
  const items = slugs.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
  if (items.length === 0) return null;
  return (
    <section className="py-10 md:py-12 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] mb-6">{heading}</h2>
        <ul className="flex flex-wrap gap-3">
          {items.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-stone-300 text-sm font-bold text-[#09090b] hover:bg-[#09090b] hover:text-white transition-colors">
                {s.shortName} <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
