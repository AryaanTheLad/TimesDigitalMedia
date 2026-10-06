import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditForm from "@/components/AuditForm";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { FAQList } from "@/components/CommitmentFAQ";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema";
import { CLIENT_LOGOS } from "@/data/caseStudies";

const TITLE = "Free Growth Audit for Meta & Google Ads";
const DESCRIPTION =
  "Answer six quick questions and get a free, personalised audit of your ads, tracking and offer within 24 hours. No obligation. Lahore-based team.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/free-growth-audit" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Free Growth Audit", path: "/free-growth-audit" },
];

const WHAT_YOU_GET = [
  { title: "Where your leads leak", desc: "A review of your ads, landing page and follow-up to find where interested people drop off." },
  { title: "Tracking check", desc: "Whether your Pixel, Conversions API and Google tags are recording the results that matter." },
  { title: "Channel recommendation", desc: "Whether to start with Meta, Google, YouTube or a mix, and a sensible starting budget." },
  { title: "Next three actions", desc: "A short, prioritised list you can act on with or without us." },
];

// [[REVIEW]] Confirm the audit process described below (no account access needed for the first audit).
const AUDIT_FAQS = [
  { id: "audit-cost", q: "Is the growth audit really free?", a: "Yes. There's no charge and no obligation. We use the audit to show how we'd approach your account; if it's useful, you can talk to us about a package." },
  { id: "audit-time", q: "How long does it take?", a: "The form takes about two minutes. We aim to send your personalised audit within 24 hours." },
  { id: "audit-access", q: "Do you need access to my ad accounts?", a: "Not for the first audit. We work from your website, public pages and your answers. If you'd like a deeper review, we can request read-only access later." },
];

export default function FreeGrowthAuditPage() {
  return (
    <>
      <JsonLd data={graph(webPageNode("/free-growth-audit", TITLE, DESCRIPTION), breadcrumbNode(crumbs), faqNode(AUDIT_FAQS))} />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader
          crumbs={crumbs}
          eyebrow="Free growth audit"
          title={<>Find out where your next leads <span className="text-[#E8000E]">should come from.</span></>}
          lead="Answer six quick questions about your business and ads. Within 24 hours, a strategist sends you a personalised audit: where leads are leaking, whether your tracking works, and which channel to put money into first."
        >
          <p className="mt-4 text-xs text-stone-500 font-medium">
            Trusted by {CLIENT_LOGOS.slice(0, 3).map((c) => c.name).join(", ")} and more.
          </p>
        </PageHeader>

        <AuditForm />

        <section className="py-10 md:py-14 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">What you get</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black font-display tracking-tight text-[#09090b] leading-[1.05]">
                A short, specific audit. Not a sales deck.
              </h2>
              <p className="mt-4 text-sm text-[#57534E] font-medium leading-relaxed">
                Want to see how we work first? Browse our <Link href="/portfolio" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">case studies</Link> or compare <Link href="/pricing" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">packages and pricing</Link>.
              </p>
            </div>
            <ol className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {WHAT_YOU_GET.map((item, i) => (
                <li key={item.title} className="border-t-2 border-[#09090b] pt-4">
                  <span className="text-xs font-mono font-bold text-[#E8000E]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-lg font-black font-display tracking-tight text-[#09090b]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#57534E] font-medium leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] mb-6">Audit questions</h2>
            <FAQList faqs={AUDIT_FAQS} group="audit-faq" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
