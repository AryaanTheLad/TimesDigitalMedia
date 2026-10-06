import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { FAQList } from "@/components/CommitmentFAQ";
import { FAQS } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema";

const TITLE = "FAQ: Pricing, Ad Spend & Results";
const DESCRIPTION =
  "Answers about Times Digital Media: what we do, pricing in PKR, ad spend, results timelines, international clients and advertising on Times of Islamabad.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/faq" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={graph(webPageNode("/faq", TITLE, DESCRIPTION), breadcrumbNode(crumbs), faqNode(FAQS))} />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader
          crumbs={crumbs}
          eyebrow="FAQ"
          title="Questions we get asked most."
          lead="Short, direct answers about who we are, what we charge, how ad spend works and what to expect. Can't find yours? Message us on WhatsApp."
        />
        <section className="py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <nav aria-label="Questions on this page" className="mb-10">
              <ul className="flex flex-col gap-1.5 text-sm">
                {FAQS.map((f) => (
                  <li key={f.id}>
                    <a href={`#${f.id}`} className="font-medium text-[#57534E] hover:text-[#E8000E] underline-offset-4 hover:underline">{f.q}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <FAQList faqs={FAQS} group="faq-page" />
            <p className="mt-8 text-sm text-[#57534E] font-medium">
              More detail: <Link href="/pricing" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">pricing</Link>,{" "}
              <Link href="/media-network" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">the media network</Link> and{" "}
              <Link href="/blog" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">our guides</Link>.
            </p>
          </div>
        </section>
        <CtaBand location="faq" />
      </main>
      <Footer />
    </>
  );
}
