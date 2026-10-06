import Breadcrumbs from "./Breadcrumbs";
import type { Crumb } from "@/lib/schema";

interface PageHeaderProps {
  crumbs: Crumb[];
  eyebrow: string;
  title: React.ReactNode;
  /** Answer-first lead paragraph (AEO): keep it to ~40–60 words. */
  lead?: React.ReactNode;
  children?: React.ReactNode;
}

/** Standard inner-page header: breadcrumbs, mono eyebrow, display H1, lead. */
export default function PageHeader({ crumbs, eyebrow, title, lead, children }: PageHeaderProps) {
  return (
    <header className="relative pt-8 pb-10 md:pb-14 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Breadcrumbs crumbs={crumbs} />
        <div className="mt-8 flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E8000E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8000E]" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed font-body font-medium max-w-3xl">
            {lead}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
