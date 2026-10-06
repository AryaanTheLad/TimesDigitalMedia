import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { RelatedArticles, RelatedCaseStudies, RelatedServices } from "@/components/RelatedWork";
import { INDUSTRIES, getIndustry } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return buildMetadata({ title: ind.metaTitle, description: ind.metaDescription, path: `/industries/${ind.slug}`, absoluteTitle: true });
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const path = `/industries/${ind.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: ind.name, path },
  ];

  return (
    <>
      <JsonLd data={graph(webPageNode(path, ind.metaTitle, ind.metaDescription), breadcrumbNode(crumbs))} />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader crumbs={crumbs} eyebrow={ind.name} title={ind.h1} lead={ind.intro} />

        <section className="py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">What makes it hard</h2>
              <ul className="mt-6 flex flex-col gap-4 border-l-2 border-[#E8000E] pl-6">
                {ind.challenges.map((c) => (
                  <li key={c} className="text-sm sm:text-base text-[#09090b] font-medium leading-relaxed">{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">How we approach it</h2>
              <ol className="mt-6 flex flex-col gap-4">
                {ind.approach.map((a, i) => (
                  <li key={a} className="flex gap-4">
                    <span className="text-2xl font-serif lining-nums font-bold text-[#E8000E] leading-none w-6 shrink-0">{i + 1}</span>
                    <span className="text-sm sm:text-base text-[#57534E] font-medium leading-relaxed">{a}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <RelatedCaseStudies ids={ind.caseStudies} heading={`${ind.name} case studies`} />
        <RelatedServices slugs={ind.services} heading="Services we use" />
        <RelatedArticles slugs={ind.articles} />
        <CtaBand location={`industry_${ind.slug}`} />
      </main>
      <Footer />
    </>
  );
}
