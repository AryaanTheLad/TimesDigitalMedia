import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { SERVICES } from "@/data/services";
import { NETWORK_STATS } from "@/data/stats";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, servicesListNode, webPageNode } from "@/lib/schema";

const TITLE = "Digital Marketing Services in Lahore & Pakistan";
const DESCRIPTION =
  "Meta Ads, Google Ads, YouTube Ads, lead generation, reels, social media, web development and SEO from Times Digital Media, a Lahore performance marketing agency.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/services" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={graph(webPageNode("/services", TITLE, DESCRIPTION, "CollectionPage"), breadcrumbNode(crumbs), servicesListNode())} />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader
          crumbs={crumbs}
          eyebrow="Services"
          title="Paid ads, content and the systems behind them."
          lead={`Times Digital Media runs Meta, Google and YouTube advertising, lead generation and short-form content for businesses in Pakistan and abroad, then amplifies results across our own media network of ${NETWORK_STATS.followers.display} followers. Pick a service below or start with a free audit.`}
        />

        <section className="py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ol className="border-t border-stone-200">
              {SERVICES.map((s, i) => (
                <li key={s.slug} className="border-b border-stone-200">
                  <Link href={`/services/${s.slug}`} className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-7 items-baseline">
                    <span className="md:col-span-1 text-xs font-mono font-bold text-stone-500">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="md:col-span-4 text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] group-hover:text-[#E8000E] transition-colors">
                      {s.shortName}
                    </h2>
                    <p className="md:col-span-6 text-sm text-[#57534E] font-medium leading-relaxed">{s.summary}</p>
                    <ArrowUpRight className="hidden md:block md:col-span-1 w-5 h-5 justify-self-end text-stone-500 group-hover:text-[#E8000E] transition-colors" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CtaBand location="services_hub" />
      </main>
      <Footer />
    </>
  );
}
