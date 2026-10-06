/**
 * Building blocks for blog articles.
 * - <Answer>: the 40–60 word answer-first summary (AEO)
 * - <Review>: wraps passages that rely on TDM's first-hand experience; outlined
 *   in development so the owner can review them, rendered normally in production
 * - <Cite>: numbered link to the article's sources list
 */

export interface Source {
  id: number;
  title: string;
  publisher: string;
  url: string;
  /** Date the source was published or last checked (ISO). */
  date: string;
  note?: string;
}

export function Answer({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose rounded-2xl border-l-4 border-[#E8000E] bg-stone-50 px-5 py-4 text-base sm:text-lg text-[#09090b] font-semibold leading-relaxed">
      <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-[#E8000E] mb-1.5">Short answer</span>
      {children}
    </div>
  );
}

export function Review({ note, children }: { note: string; children: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") return <>{children}</>;
  return (
    <div className="relative rounded-xl outline-2 outline-dashed outline-amber-400 outline-offset-4">
      <span className="absolute -top-3 right-2 bg-amber-50 border border-amber-400 text-amber-800 text-[10px] font-mono font-bold px-2 rounded">
        [[REVIEW]] {note}
      </span>
      {children}
    </div>
  );
}

export function Cite({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#source-${n}`} aria-label={`Source ${n}`}>[{n}]</a>
    </sup>
  );
}

export function SourcesList({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;
  return (
    <section aria-labelledby="sources-heading" className="mt-12 pt-8 border-t border-stone-200">
      <h2 id="sources-heading" className="text-lg font-black tracking-tight text-[#09090b]">Sources</h2>
      <ol className="mt-4 flex flex-col gap-2 text-sm text-[#57534E] list-decimal pl-5">
        {sources.map((s) => (
          <li key={s.id} id={`source-${s.id}`} className="scroll-mt-28">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[#09090b] underline decoration-stone-300 underline-offset-4 hover:text-[#E8000E]">
              {s.title}
            </a>
            , {s.publisher} ({new Date(s.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })})
            {s.note && <span className="block text-xs text-stone-500">{s.note}</span>}
          </li>
        ))}
      </ol>
    </section>
  );
}
