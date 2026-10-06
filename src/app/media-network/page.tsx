import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Placeholder from "@/components/Placeholder";
import MediaNetworkForm from "@/components/MediaNetworkForm";
import { FAQList } from "@/components/CommitmentFAQ";
import { ENTITY, NETWORK_PROPERTIES, SOCIALS } from "@/data/site";
import { NETWORK_STATS, STATS_SOURCE, INSIGHT_SCREENSHOTS } from "@/data/stats";
import { PRICING_NOTES } from "@/data/pricing";
import { FAQS } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema";

const TITLE = "Advertise on Times of Islamabad & the TDM Media Network";
const DESCRIPTION = `Sponsored posts and placements on Times of Islamabad and the TDM network: ${NETWORK_STATS.followers.display} followers, ${NETWORK_STATS.monthlyReach.display} monthly reach. Rates on inquiry.`;

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/media-network", absoluteTitle: true });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Media Network", path: "/media-network" },
];

const NETWORK_FAQS = FAQS.filter((f) => ["media-network", "advertise-toi", "tdm-vs-toi"].includes(f.id));

const s = NETWORK_STATS;
const AUDIENCE = [
  { value: s.followers.display, label: "Followers", detail: s.followers.detail },
  { value: s.monthlyReach.display, label: "Monthly reach", detail: s.monthlyReach.detail },
  { value: s.views28d.display, label: "Views / 28 days", detail: s.views28d.detail },
  { value: s.dailyImpressions.display, label: "Daily impressions", detail: s.dailyImpressions.detail },
  { value: s.ageCore.display, label: "Aged 18–35", detail: s.ageCore.detail },
  { value: s.topCities.display, label: "Karachi + Lahore", detail: s.topCities.detail },
];

// [[REVIEW]] Confirm the formats sold on the network and how sponsored posts are labelled.
const FORMATS = [
  { title: "Sponsored social posts", desc: "Your announcement, offer or launch published on the network's Facebook and Instagram accounts." },
  { title: "Reels and video posts", desc: "Short-form video produced by our content team or supplied by you, posted to the network." },
  { title: "News portal placements", desc: "Brand placement on the Times of Islamabad news portal." },
  { title: "Combined with paid ads", desc: "Network posts alongside Meta, Google or YouTube campaigns we manage for you." },
];

const STEPS = [
  { title: "Send an inquiry", desc: "Tell us what you're promoting, when, and who you want to reach." },
  { title: "Get a proposal", desc: "We reply with suitable formats, dates and pricing." },
  { title: "Approve the creative", desc: "You sign off the post or placement before anything goes live." },
  { title: "Go live and report", desc: "We publish on the agreed dates and share the results." },
];

export default function MediaNetworkPage() {
  const networkProfiles = [
    { name: "Times of Islamabad news portal", href: NETWORK_PROPERTIES.newsPortal.url, owner: "Times of Islamabad" },
    { name: "Times of Islamabad on Facebook", href: NETWORK_PROPERTIES.facebook, owner: "Times of Islamabad" },
    { name: "Times of Islamabad on Instagram", href: NETWORK_PROPERTIES.instagram, owner: "Times of Islamabad" },
    ...SOCIALS.filter((x) => x.owner === "tdm").map((x) => ({ name: x.label, href: x.href, owner: "Times Digital Media" })),
  ];

  return (
    <>
      <JsonLd data={graph(webPageNode("/media-network", TITLE, DESCRIPTION), breadcrumbNode(crumbs), faqNode(NETWORK_FAQS))} />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader
          crumbs={crumbs}
          eyebrow="Advertise with us"
          title={<>Advertise on Times of Islamabad and the <span className="text-[#E8000E]">TDM media network.</span></>}
          lead={`The TDM media network is the Times of Islamabad news portal plus the Facebook and Instagram accounts of Times of Islamabad and Times Digital Media: ${NETWORK_STATS.followers.display} followers and ${NETWORK_STATS.monthlyReach.display} people reached each month. Sponsored posts and placements are sold through Times Digital Media on inquiry. There is no public rate card.`}
        />

        {/* Audience */}
        <section className="py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">Who you&apos;ll reach</h2>
            <dl className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {AUDIENCE.map((a) => (
                <div key={a.label}>
                  <dt className="text-xs font-mono font-bold uppercase tracking-wider text-[#09090b]">{a.label}</dt>
                  <dd className="mt-2">
                    <span className="block text-5xl sm:text-6xl font-serif lining-nums font-bold text-[#E8000E] leading-none">{a.value}</span>
                    <span className="mt-3 block text-xs sm:text-sm text-[#57534E] font-medium leading-relaxed">{a.detail}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-xs text-stone-500 font-medium max-w-3xl">
              <strong className="text-stone-600">{STATS_SOURCE.label}.</strong> {STATS_SOURCE.long} Gender split: {NETWORK_STATS.genderSplit.display}.{" "}
              <Link href="/#proof" className="font-bold underline">See the insights screenshots</Link>.
            </p>
            <ul className="sr-only">
              {INSIGHT_SCREENSHOTS.map((shot) => (
                <li key={shot.src}>{shot.title}: {shot.keyNumbers.join(", ")}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Properties + relationship */}
        <section className="py-10 md:py-14 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">What&apos;s in the network</h2>
              <p className="mt-4 text-sm text-[#57534E] font-medium leading-relaxed">{ENTITY.networkRelationship}</p>
            </div>
            <ul className="lg:col-span-7 border-t border-stone-200">
              {networkProfiles.map((p) => (
                <li key={p.href} className="border-b border-stone-200">
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-4 min-h-[44px]">
                    <span>
                      <span className="block text-base font-black tracking-tight text-[#09090b] group-hover:text-[#E8000E] transition-colors">{p.name}</span>
                      <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">Operated by {p.owner}</span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-[#E8000E]" aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li className="py-3"><Placeholder>[[TODO: add TDM&apos;s own Facebook page URL to src/data/site.ts]]</Placeholder></li>
            </ul>
          </div>
        </section>

        {/* Formats + process */}
        <section className="py-10 md:py-14 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">Formats</h2>
              <dl className="mt-6 flex flex-col gap-5">
                {FORMATS.map((f) => (
                  <div key={f.title} className="border-t border-stone-200 pt-4">
                    <dt className="text-base font-black tracking-tight text-[#09090b]">{f.title}</dt>
                    <dd className="mt-1 text-sm text-[#57534E] font-medium leading-relaxed">{f.desc}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-[#57534E] font-medium">{PRICING_NOTES.network}</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">How it works</h2>
              <ol className="mt-6 flex flex-col gap-5">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="text-3xl font-serif lining-nums font-bold text-[#E8000E] leading-none w-8 shrink-0">{i + 1}</span>
                    <span>
                      <span className="block text-base font-black tracking-tight text-[#09090b]">{step.title}</span>
                      <span className="mt-1 block text-sm text-[#57534E] font-medium leading-relaxed">{step.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Inquiry */}
        <section id="inquiry" className="py-10 md:py-14 border-t border-stone-100 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">Want to run ads as well?</h2>
              <p className="mt-4 text-sm text-[#57534E] font-medium leading-relaxed">
                Network placements work well alongside paid campaigns. Our <Link href="/pricing#growth" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">Growth Campaign</Link> includes weekly posts on the network together with Meta Ads management, or see all <Link href="/services" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">services</Link>.
              </p>
            </div>
            <div className="lg:col-span-7">
              <MediaNetworkForm />
            </div>
          </div>
        </section>

        <section className="py-10 md:py-12 border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] mb-6">Media network questions</h2>
            <FAQList faqs={NETWORK_FAQS} group="network-faq" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
