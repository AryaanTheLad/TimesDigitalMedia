/**
 * Marks missing owner-supplied content ([[TODO: ...]] / [[REVIEW]]).
 * Visible as a highlighted note in development so reviewers can find it;
 * renders nothing in production so placeholders never reach visitors.
 */
export default function Placeholder({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <span className="inline-block my-1 px-2 py-1 rounded-md border border-dashed border-amber-400 bg-amber-50 text-amber-800 text-[11px] font-mono font-bold">
      {children}
    </span>
  );
}
