import Link from "next/link";
import type { Crumb } from "@/lib/schema";

/** Visible breadcrumb trail. Pair with breadcrumbNode() for BreadcrumbList schema. */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-[#09090b]">{c.name}</span>
              ) : (
                <>
                  <Link href={c.path} className="hover:text-[#E8000E] transition-colors">{c.name}</Link>
                  <span aria-hidden="true" className="text-stone-300">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
