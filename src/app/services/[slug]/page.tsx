import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import TrackedLink from "@/components/TrackedLink";
import { FAQList } from "@/components/CommitmentFAQ";
import { RelatedArticles, RelatedCaseStudies } from "@/components/RelatedWork";
import { SERVICES, getService } from "@/data/services";
import { getIndustry } from "@/data/industries";
import { PACKAGES, AD_SPEND_NOTE, PRICING_NOTES } from "@/data/pricing";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbNode, faqNode, graph, serviceNode, webPageNode } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}`, absoluteTitle: true });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortName, path },
  ];
  const faqs = service.faqs.map((f, i) => ({ id: `${service.slug}-faq-${i + 1}`, q: f.q, a: f.a }));
  const industries = service.industries.map(getIndustry).filter((i): i is NonNullable<typeof i> => Boolean(i));
  const pricedPackages = PACKAGES.filter((p) => p.price !== null && service.includedIn.includes(p.id));

  return (
    <>
      <JsonLd
        data={graph(
          webPageNode(path, service.metaTitle, service.metaDescription),
          breadcrumbNode(crumbs),
          serviceNode(service),
          faqNode(faqs),
        )}
      />
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <PageHeader crumbs={crumbs} eyebrow={`${service.shortName} · Lahore, Pakistan`} title={service.h1} lead={service.answer}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <TrackedLink
              href="/free-growth-audit"
              cta="free_growth_audit"
              location={`service_${service.slug}_header`}
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors"
            >
              Get a free {service.shortName} audit
            </TrackedLink>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors"
            >
              See pricing
            </Link>
          </div>
        </PageHeader>

        {/* Who it's for + what you get */}
        <section className="py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">Who it&apos;s for</h2>
              <ul className="mt-6 flex flex-col gap-4">
                {service.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-[#09090b] font-medium leading-relaxed">
                    <Check className="w-4 h-4 text-[#E8000E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">What you get</h2>
              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {service.deliverables.map((d) => (
                  <div key={d.title} className="border-t border-stone-200 pt-4">
                    <dt className="text-base font-black tracking-tight text-[#09090b]">{d.title}</dt>
                    <dd className="mt-1.5 text-sm text-[#57534E] font-medium leading-relaxed">{d.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-10 md:py-14 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">How we work</h2>
            <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, i) => (
                <li key={step.title}>
                  <span className="text-5xl font-serif lining-nums font-bold text-[#E8000E] leading-none">{i + 1}</span>
                  <h3 className="mt-3 text-base font-black tracking-tight text-[#09090b]">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-[#57534E] font-medium leading-relaxed">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing summary */}
        <section className="py-10 md:py-14 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">What it costs</h2>
              <p className="mt-4 text-sm sm:text-base text-[#57534E] font-medium leading-relaxed max-w-2xl">
                {pricedPackages.length > 0 ? (
                  <>
                    {service.shortName} is included in{" "}
                    {pricedPackages.map((p, i) => (
                      <span key={p.id}>
                        {i > 0 && " and "}
                        <strong className="text-[#09090b]">{p.name}</strong> ({p.priceLabel}/month)
                      </span>
                    ))}
                    , and can also be scoped as a custom package.
                  </>
                ) : (
                  <>{service.shortName} is scoped as a custom package after a discovery consultation.</>
                )}{" "}
                {service.packageNote && `${service.packageNote} `}
                {PRICING_NOTES.taxInclusive} {AD_SPEND_NOTE}
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link href="/pricing" className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors">
                Compare packages
              </Link>
            </div>
          </div>
        </section>

        <RelatedCaseStudies ids={service.caseStudies} heading={`${service.shortName} work`} />

        {industries.length > 0 && (
          <section className="py-10 md:py-12 border-t border-stone-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] mb-6">Industries</h2>
              <ul className="flex flex-wrap gap-3">
                {industries.map((ind) => (
                  <li key={ind.slug}>
                    <Link href={`/industries/${ind.slug}`} className="inline-flex px-4 py-3 rounded-xl border border-stone-300 text-sm font-bold text-[#09090b] hover:bg-[#09090b] hover:text-white transition-colors">
                      {service.shortName} for {ind.name.toLowerCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <RelatedArticles slugs={service.articles} heading={`${service.shortName} guides`} />

        <section className="py-10 md:py-12 border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] mb-6">{service.shortName} questions</h2>
            <FAQList faqs={faqs} group={`${service.slug}-faq`} />
          </div>
        </section>

        <CtaBand location={`service_${service.slug}`} title={`Get a free ${service.shortName} audit.`} />
      </main>
      <Footer />
    </>
  );
}
