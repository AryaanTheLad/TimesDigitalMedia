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
import CommitmentFAQ from "@/components/CommitmentFAQ";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { graph, webPageNode } from "@/lib/schema";
import { HOME_FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";
import { NETWORK_STATS } from "@/data/stats";
import { PACKAGES } from "@/data/pricing";

const TITLE = `Performance Marketing Agency in Lahore | ${SITE.name}`;
const DESCRIPTION = `Meta, Google & YouTube ads, lead generation and reels from a Lahore agency, plus reach on our own ${NETWORK_STATS.followers.display} follower media network. From ${PACKAGES[0].priceLabel}/month.`;

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/", absoluteTitle: true });

export default function Home() {
  return (
    <>
      <JsonLd data={graph(webPageNode("/", TITLE, DESCRIPTION))} />
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

        {/* Commitment & FAQ (answers server-rendered for crawlers) */}
        <CommitmentFAQ
          faqs={HOME_FAQS}
          footer={
            <p className="mt-8 text-sm text-[#57534E] font-medium">
              More answers on pricing, the media network and how we work:{" "}
              <Link href="/faq" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4 hover:text-[#E8000E]">
                read the full FAQ
              </Link>
              .
            </p>
          }
        />
      </main>

      {/* Premium Light Sitemap Footer */}
      <Footer />
    </>
  );
}
