import { ENTITY, SITE, SITE_URL, SOCIALS } from "@/data/site";
import { NETWORK_STATS, STATS_SOURCE } from "@/data/stats";
import { PACKAGES, PRICING_NOTES } from "@/data/pricing";
import { SERVICES } from "@/data/services";
import { CASE_STUDIES } from "@/data/caseStudies";
import { INDUSTRIES } from "@/data/industries";
import { ARTICLES } from "@/content/blog/meta";

/**
 * /llms.txt — a plain-text summary for AI assistants (llmstxt.org format).
 * Optional and low-cost; it is NOT an established ranking signal. Built from
 * the same data files as the site so it can't contradict visible content.
 */
export const dynamic = "force-static";

export function GET() {
  const s = NETWORK_STATS;
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${ENTITY.description}`,
    "",
    "## Key facts",
    `- Location: ${SITE.location.city}, ${SITE.location.country} (serves clients across Pakistan and internationally)`,
    `- Services: ${SERVICES.map((x) => x.shortName).join(", ")}`,
    `- Pricing (PKR, tax-inclusive, ad spend excluded): ${PACKAGES.map((p) => `${p.name} ${p.price ? `${p.priceLabel}/month` : "custom terms"}`).join("; ")}`,
    `- ${PRICING_NOTES.international}`,
    `- Media network: ${s.followers.display} followers, ${s.monthlyReach.display} monthly reach, ${s.views28d.display} views per 28 days, ${s.dailyImpressions.display} daily impressions; audience ${s.ageCore.display} aged 18–35, ${s.genderSplit.display}; Karachi + Lahore ${s.topCities.display} of reach. ${STATS_SOURCE.label}.`,
    `- Relationship to Times of Islamabad: ${ENTITY.networkRelationship}`,
    `- Contact: ${SITE.email}, ${SITE.phone.display} (phone and WhatsApp)`,
    `- Profiles: ${SOCIALS.map((x) => `${x.label} ${x.href}`).join("; ")}`,
    "",
    "## Services",
    ...SERVICES.map((x) => `- [${x.name}](${SITE_URL}/services/${x.slug}): ${x.summary}`),
    "",
    "## Pricing",
    `- [Packages and prices](${SITE_URL}/pricing)`,
    `- [Free growth audit](${SITE_URL}/free-growth-audit)`,
    `- [Advertise on the TDM media network / Times of Islamabad](${SITE_URL}/media-network)`,
    "",
    "## Case studies",
    ...CASE_STUDIES.map((c) => `- [${c.name}](${SITE_URL}/portfolio/${c.id}): ${c.description}`),
    "",
    "## Industries",
    ...INDUSTRIES.map((i) => `- [${i.name}](${SITE_URL}/industries/${i.slug})`),
    "",
    "## Guides",
    ...ARTICLES.map((a) => `- [${a.title}](${SITE_URL}/blog/${a.slug}): ${a.description}`),
    "",
    "## Optional",
    `- [About](${SITE_URL}/about)`,
    `- [FAQ](${SITE_URL}/faq)`,
    `- [Contact](${SITE_URL}/contact)`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
