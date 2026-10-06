import Link from "next/link";
import { Check, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Packages from "@/components/Packages";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { FAQList } from "@/components/CommitmentFAQ";
import { PACKAGES, PRICING_ANSWER, PRICING_NOTES, AD_SPEND_NOTE } from "@/data/pricing";
import { SERVICES } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, faqNode, graph, offerCatalogNode, webPageNode } from "@/lib/schema";

const TITLE = "Digital Marketing Packages & Prices in Pakistan (PKR)";
const DESCRIPTION =
  "PKR packages from Rs 30,000/month (Starter) and Rs 70,000/month (Growth), adjustable to your needs. Tax-inclusive; ad spend billed to your own account.";

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/pricing", absoluteTitle: true });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
];

const PRICING_FAQS = [
  { id: "pricing-ad-spend", q: "Is ad spend included in the package price?", a: `No. ${AD_SPEND_NOTE}` },
  { id: "pricing-tax", q: "Do your prices include tax?", a: `Yes. ${PRICING_NOTES.taxInclusive}` },
  { id: "pricing-flexible", q: "Are these prices fixed?", a: `No. ${PRICING_NOTES.flexible} Tell us what you need and we'll quote a package that fits.` },
  { id: "pricing-payment", q: "How can I pay?", a: `${PRICING_NOTES.payment} We'll confirm the details when you sign up.` },
  { id: "pricing-international", q: "Do you work with clients outside Pakistan?", a: `Yes. ${PRICING_NOTES.international} Contact us with your market and goals and we'll send a quote.` },
  { id: "pricing-addons", q: "How much do add-ons and network ads cost?", a: `${PRICING_NOTES.addOns} ${PRICING_NOTES.network}` },
  {
    id: "pricing-which",
    q: "Which package should I choose?",
    a: "Choose Starter if you already have creatives and need your Meta, Google and YouTube ads, lead generation and social accounts managed. Choose Growth Campaign if you want everything in one place, including your website, SEO and content. Choose Custom for high-volume or enterprise needs. Every package can be adjusted to your requirements, and the free growth audit includes a recommendation.",
  },
];

export default function PricingPage() {
  const columns = PACKAGES;
  return (
    <>
      <JsonLd
        data={graph(webPageNode("/pricing", TITLE, DESCRIPTION), breadcrumbNode(crumbs), offerCatalogNode(), faqNode(PRICING_FAQS))}
      />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader crumbs={crumbs} eyebrow="Pricing in PKR" title="Packages and prices, published." lead={PRICING_ANSWER} />

        <Packages eyebrow="Monthly packages" intro="Pick a starting package, or take the free audit and we'll recommend one tailored to you." showCompareLink={false} />

        {/* Comparison: which services each package covers (from src/data/services.ts includedIn) */}
        <section className="py-10 md:py-14 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] mb-6">Compare what&apos;s covered</h2>
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[560px] text-sm border-collapse">
                <caption className="sr-only">Services included in each Times Digital Media package</caption>
                <thead>
                  <tr className="border-b-2 border-[#09090b]">
                    <th scope="col" className="text-left py-3 pr-4 font-mono text-[10px] uppercase tracking-wider text-stone-500">Service</th>
                    {columns.map((p) => (
                      <th key={p.id} scope="col" className="text-left py-3 px-4">
                        <span className="block font-black text-[#09090b]">{p.name}</span>
                        <span className="block text-xs font-bold text-[#E8000E]">{p.price ? `From ${p.priceLabel}/mo` : p.priceLabel}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((s) => (
                    <tr key={s.slug} className="border-b border-stone-200">
                      <th scope="row" className="text-left py-3 pr-4 font-bold text-[#09090b]">
                        <Link href={`/services/${s.slug}`} className="hover:text-[#E8000E]">{s.shortName}</Link>
                      </th>
                      {columns.map((p) => (
                        <td key={p.id} className="py-3 px-4">
                          {s.includedIn.includes(p.id) ? (
                            <Check className="w-4 h-4 text-[#E8000E]" aria-label="Included" />
                          ) : (
                            <Minus className="w-4 h-4 text-stone-300" aria-label="Not included" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-b border-stone-200">
                    <th scope="row" className="text-left py-3 pr-4 font-bold text-[#09090b]">Ad spend</th>
                    {columns.map((p) => (
                      <td key={p.id} className="py-3 px-4 text-xs font-bold text-stone-600">Billed to your own account</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-stone-500 font-medium">
              Website development and on-page SEO are part of Growth; wider SEO is scoped as custom work. {PRICING_NOTES.flexible}
            </p>
          </div>
        </section>

        {/* Not included */}
        <section className="py-10 md:py-14 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-black tracking-tight text-[#09090b]">Ad spend</h2>
              <p className="mt-2 text-sm text-[#57534E] font-medium leading-relaxed">{AD_SPEND_NOTE}</p>
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight text-[#09090b]">Add-ons</h2>
              <p className="mt-2 text-sm text-[#57534E] font-medium leading-relaxed">{PRICING_NOTES.addOns}</p>
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight text-[#09090b]">Media network placements</h2>
              <p className="mt-2 text-sm text-[#57534E] font-medium leading-relaxed">
                {PRICING_NOTES.network} <Link href="/media-network" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">Send an inquiry</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-12 border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] mb-6">Pricing questions</h2>
            <FAQList faqs={PRICING_FAQS} group="pricing-faq" />
            <p className="mt-6 text-sm text-[#57534E] font-medium">
              Budgeting for ads too? Read <Link href="/blog/facebook-ads-cost-pakistan" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">how much Facebook ads cost in Pakistan</Link>.
            </p>
          </div>
        </section>

        <CtaBand location="pricing" title="Not sure which package fits?" text="Take the free growth audit and we'll recommend a package and a starting ad budget." />
      </main>
      <Footer />
    </>
  );
}
