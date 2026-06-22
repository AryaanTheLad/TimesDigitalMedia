import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyTimes from "@/components/WhyTimes";
import Stats from "@/components/Stats";
import ShowcaseBanner from "@/components/ShowcaseBanner";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import SocialProof from "@/components/SocialProof";
import Packages from "@/components/Packages";
import AuditForm from "@/components/AuditForm";
import GuaranteeFAQ from "@/components/GuaranteeFAQ";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Times Digital Media | Digital Marketing Agency",
  description: "Google Ads, Meta Ads & Social Media Marketing Agency in Pakistan. Get more leads and sales in 30 days. Free strategy call, talk to our team today.",
};

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

        {/* Why Times - Owned Network Moat (CRO Change 4) */}
        <WhyTimes />
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
        <div className="w-full border-t border-zinc-200" />

        {/* Audit Intake Form (CRO Change 7) */}
        <AuditForm />
        <div className="w-full border-t border-zinc-200" />

        {/* Guarantee & FAQ (CRO Change 9) */}
        <GuaranteeFAQ />
      </main>

      {/* Premium Light Sitemap Footer */}
      <Footer />
    </>
  );
}
