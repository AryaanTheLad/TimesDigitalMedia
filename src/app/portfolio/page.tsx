import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Creative Portfolio | Times Digital Media",
  description: "Explore our advertising campaigns and case studies for leading Pakistani and global brands, including Zameen.com and Stitch.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Structural Container */}
      <main className="flex-1 w-full bg-transparent pt-20">
        <Portfolio />
      </main>

      {/* Sitemap Footer */}
      <Footer />
    </>
  );
}
