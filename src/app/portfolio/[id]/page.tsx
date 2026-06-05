import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioCaseStudy from "@/components/PortfolioCaseStudy";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [
    { id: "zameen" },
    { id: "stitch" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const capitalized = id === "zameen" ? "Zameen.com" : "Stitch";
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
      <main className="flex-1 w-full bg-white pt-20">
        <PortfolioCaseStudy clientId={id} />
      </main>

      {/* Sitemap Footer */}
      <Footer />
    </>
  );
}
