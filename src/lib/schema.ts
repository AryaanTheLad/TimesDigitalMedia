/**
 * JSON-LD builders. Every value here must match content visible on the page
 * it's emitted on. Facts come from src/data so schema can't drift from copy.
 *
 * Type choices (see docs/audit/06-structured-data.md):
 * - ProfessionalService (a LocalBusiness/Organization subtype) is the single
 *   entity node for TDM, @id = /#organization, referenced everywhere else.
 * - Address is city + country only (service-area business, no street address).
 * - Service + Offer on service pages; OfferCatalog on /pricing.
 * - FAQPage where FAQs are visible (Google limits FAQ rich results, but the
 *   markup still helps machine understanding).
 * - BlogPosting for articles; Organization author until named authors are supplied.
 * - VideoObject is NOT used for portfolio reels: upload dates and durations
 *   aren't known, and Google requires uploadDate.
 */

import { ENTITY, SITE, SITE_URL, TDM_SAME_AS } from "@/data/site";
import { PACKAGES } from "@/data/pricing";
import type { Service } from "@/data/services";
import { SERVICES } from "@/data/services";
import type { FAQ } from "@/data/faqs";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLdNode = Record<string, unknown>;

export function organizationNode(): JsonLdNode {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${SITE.logo}`,
      width: 1024,
      height: 444,
    },
    image: `${SITE_URL}${SITE.logo}`,
    description: ENTITY.description,
    slogan: "More qualified leads in 30 days.",
    email: SITE.email,
    telephone: SITE.phone.e164,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    areaServed: [
      { "@type": "Country", name: SITE.areaServed.country },
      ...SITE.areaServed.primary.map((city) => ({ "@type": "City", name: city })),
    ],
    priceRange: "Rs 30,000–70,000 per month",
    currenciesAccepted: "PKR",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SITE.phone.e164,
        email: SITE.email,
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
    ],
    knowsAbout: [
      "Meta Ads",
      "Facebook advertising",
      "Instagram advertising",
      "Google Ads",
      "YouTube advertising",
      "Performance marketing",
      "Lead generation",
      "Short-form video",
      "Social media management",
      "Search engine optimisation",
    ],
    sameAs: TDM_SAME_AS,
  };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-PK",
  };
}

export function webPageNode(path: string, name: string, description: string, type = "WebPage"): JsonLdNode {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-PK",
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbNode(crumbs: Crumb[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? SITE_URL : `${SITE_URL}${c.path}`,
    })),
  };
}

export function faqNode(faqs: Pick<FAQ, "q" | "a">[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Packages as Offers. Ad spend exclusion stated in each description. */
export function offerCatalogNode(): JsonLdNode {
  return {
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/pricing#catalog`,
    name: "Times Digital Media packages",
    itemListElement: PACKAGES.filter((p) => p.price !== null).map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: `${p.summary} Ad spend not included.`,
      url: `${SITE_URL}/pricing#${p.id}`,
      priceCurrency: "PKR",
      price: p.price,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.price,
        priceCurrency: "PKR",
        unitText: "MONTH",
        valueAddedTaxIncluded: true,
      },
      seller: { "@id": ORG_ID },
    })),
  };
}

export function serviceNode(service: Service): JsonLdNode {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.name,
    serviceType: service.shortName,
    description: service.answer,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: [{ "@type": "Country", name: "Pakistan" }],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PKR",
      lowPrice: 30000,
      highPrice: 70000,
      offerCount: 2,
      url: `${SITE_URL}/pricing`,
    },
  };
}

export function servicesListNode(): JsonLdNode {
  return {
    "@type": "ItemList",
    name: "Services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/services/${s.slug}`,
      name: s.shortName,
    })),
  };
}

export interface ArticleSchemaInput {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
}

export function articleNode(a: ArticleSchemaInput): JsonLdNode {
  const url = `${SITE_URL}/blog/${a.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: a.title,
    description: a.description,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    image: a.image,
    inLanguage: "en-PK",
    // [[TODO: switch to a Person author (name, url, sameAs) once founder/author bios are supplied]]
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

/** Wrap nodes in a single @graph document. */
export const graph = (...nodes: JsonLdNode[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
