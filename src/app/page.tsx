import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import ServicePillars from "@/components/ServicePillars";
import HowWeWork from "@/components/HowWeWork";
import IndustriesStrip from "@/components/IndustriesStrip";
import Clients from "@/components/Clients";
import WhyTimes from "@/components/WhyTimes";
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
import { PACKAGES } from "@/data/pricing";

const TITLE = `Performance Marketing Agency in Lahore | ${SITE.name}`;
const DESCRIPTION = `Lahore performance marketing agency running Meta, Google & YouTube ads judged on cost per lead and ROAS, with real Ads Manager results. From ${PACKAGES[0].priceLabel}/month.`;

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/", absoluteTitle: true });

export default function Home() {
  return (
    <>
      <JsonLd data={graph(webPageNode("/", TITLE, DESCRIPTION))} />
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Main Structural Container */}
      <main className="flex-1 w-full flex flex-col relative z-10">
        {/* Results first: the order follows what a performance buyer needs to see */}
        <Hero />
        <div className="w-full border-t border-zinc-200" />

        {/* 01: Ads Manager proof (id="proof", cited by blog articles) */}
        <SocialProof />
        <div className="w-full border-t border-zinc-200" />

        {/* 02: One case study told end to end */}
        <FeaturedCaseStudy />
        <div className="w-full border-t border-zinc-200" />

        {/* 03: Services grouped by funnel stage */}
        <ServicePillars />
        <div className="w-full border-t border-zinc-200" />

        {/* 04: First 30 days and the metrics we report */}
        <HowWeWork />
        <div className="w-full border-t border-zinc-200" />

        {/* 05: Industry pages */}
        <IndustriesStrip />
        <div className="w-full border-t border-zinc-200" />

        {/* 06: Client list */}
        <Clients />
        <div className="w-full border-t border-zinc-200" />

        {/* 07: Media network as the add-on advantage */}
        <WhyTimes />
        <div className="w-full border-t border-zinc-200" />

        {/* 08: Pricing */}
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
