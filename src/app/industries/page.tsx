import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { INDUSTRIES } from "@/data/industries";
import { getCaseStudy } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

const TITLE = "Industries: Education, Real Estate, E-commerce & Music";
const DESCRIPTION =
  "Marketing for the industries we have real client work in: university admissions, real estate lead generation, e-commerce and artist promotion in Pakistan.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/industries" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={graph(webPageNode("/industries", TITLE, DESCRIPTION, "CollectionPage"), breadcrumbNode(crumbs))} />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader
          crumbs={crumbs}
          eyebrow="Industries"
          title="Industries we know from real campaigns."
          lead="We only list industries where we've done client work you can see. Each page covers what makes marketing in that sector hard, how we approach it, and the case studies behind it."
        />
        <section className="py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {INDUSTRIES.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="group block h-full rounded-[32px] border border-stone-200 bg-white p-8 hover:border-[#E8000E]/30 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] group-hover:text-[#E8000E] transition-colors">{ind.name}</h2>
                      <ArrowUpRight className="w-5 h-5 text-stone-500 group-hover:text-[#E8000E] shrink-0" aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-sm text-[#57534E] font-medium leading-relaxed">{ind.intro}</p>
                    <p className="mt-5 text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">
                      Clients: {ind.caseStudies.map((id) => getCaseStudy(id)?.name).filter(Boolean).join(", ")}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <CtaBand location="industries_hub" />
      </main>
      <Footer />
    </>
  );
}
