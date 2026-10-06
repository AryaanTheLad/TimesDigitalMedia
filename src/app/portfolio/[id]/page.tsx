import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioCaseStudy from "@/components/PortfolioCaseStudy";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const c = getCaseStudy(id);
  if (!c) return {};
  return buildMetadata({
    title: `${c.name} Case Study: ${c.subtitle}`,
    description: c.description.length > 158 ? `${c.description.slice(0, 155).trimEnd()}…` : c.description,
    path: `/portfolio/${c.id}`,
  });
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id } = await params;
  const c = getCaseStudy(id);
  if (!c) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/portfolio" },
    { name: c.name, path: `/portfolio/${c.id}` },
  ];

  return (
    <>
      <JsonLd data={graph(webPageNode(`/portfolio/${c.id}`, `${c.name} case study`, c.description), breadcrumbNode(crumbs))} />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-6">
          <Breadcrumbs crumbs={crumbs} />
        </div>
        <PortfolioCaseStudy clientId={id} />
      </main>
      <Footer />
    </>
  );
}
