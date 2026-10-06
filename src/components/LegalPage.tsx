import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import Placeholder from "./Placeholder";

/** Shared layout for the privacy policy and terms. */
export default function LegalPage({
  title,
  path,
  updated,
  intro,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6 md:px-12">
          <Breadcrumbs crumbs={[{ name: "Home", path: "/" }, { name: title, path }]} />
          <header className="border-b border-zinc-200 pb-8 mb-10 mt-8">
            <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">{title}</h1>
            <p className="text-zinc-500 font-bold text-xs mt-3 uppercase tracking-wider">Last updated: {updated}</p>
            <Placeholder>[[REVIEW: plain-language rewrite to match how the site actually works. Have a lawyer review before relying on it.]]</Placeholder>
          </header>
          <div className="legal-prose text-zinc-800 leading-relaxed font-medium text-sm md:text-base flex flex-col gap-8">
            <div className="flex flex-col gap-4">{intro}</div>
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">{title}</h2>
      {children}
    </section>
  );
}
