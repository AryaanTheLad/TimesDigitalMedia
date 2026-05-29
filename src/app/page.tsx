import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ShowcaseBanner from "@/components/ShowcaseBanner";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import SocialProof from "@/components/SocialProof";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Main Structural Container */}
      <main className="flex-1 w-full flex flex-col relative z-10">
        {/* Hero Banner Section */}
        <Hero />
        <div className="w-full border-t border-zinc-200" />

        {/* Oversized Animated Metrics Banner */}
        <Stats />
        <div className="w-full border-t border-zinc-200" />

        {/* Bento Grid Solutions / Services */}
        <Services />
        <div className="w-full border-t border-zinc-200" />

        {/* Live Campaign Showcase Spotlight */}
        <ShowcaseBanner />
        <div className="w-full border-t border-zinc-200" />

        {/* Client Logomark Marquees */}
        <Clients />
        <div className="w-full border-t border-zinc-200" />

        {/* Dynamic SVG Charts & Case Studies */}
        <SocialProof />
        <div className="w-full border-t border-zinc-200" />

        {/* Pricing Retainers & Growth Packages */}
        <Packages />
      </main>

      {/* Premium Light Sitemap Footer */}
      <Footer />
    </>
  );
}
