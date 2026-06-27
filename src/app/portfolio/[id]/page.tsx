import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioCaseStudy from "@/components/PortfolioCaseStudy";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { id: "zameen" },
    { id: "stitch" },
    { id: "starshah" },
    { id: "marshall" },
    { id: "asmatariq" },
    { id: "ibadat" },
    { id: "flight" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const capitalized = id === "zameen" ? "Zameen.com" : id === "starshah" ? "Star Shah" : id === "marshall" ? "Marshall Ahmad" : id === "asmatariq" ? "Asma Tariq Studio" : id === "ibadat" ? "Ibadat International University" : id === "flight" ? "Flight Education Consultants" : "Stitch";
  return {
    title: `${capitalized} Campaign Portfolio | Times Digital Media`,
    description: `Case study and creative showcase highlighting our digital advertising campaigns and lead acquisition results for ${capitalized}.`,
    alternates: {
      canonical: `/portfolio/${id}`,
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Case Study Section Container */}
      <main className="flex-1 w-full bg-transparent pt-20">
        <PortfolioCaseStudy clientId={id} />
      </main>

      {/* Sitemap Footer */}
      <Footer />
    </>
  );
}
