/**
 * Package pricing and contents — the ONLY place prices live.
 * Edit a price or inclusion here and it updates the homepage, /pricing,
 * FAQ answers, schema Offers and llms.txt together.
 *
 * Owner decisions (Oct 2026): PKR only, tax-inclusive, ad spend always
 * excluded, add-ons and network advertising priced on request, no minimum
 * term or setup fee stated, international pricing on request.
 */

import { NETWORK_STATS } from "./stats";

export const CURRENCY = "PKR";

export const formatPKR = (amount: number) => `Rs ${amount.toLocaleString("en-PK")}`;

export interface PricingPackage {
  id: "starter" | "growth" | "custom";
  name: string;
  eyebrow: string;
  /** Monthly management fee in PKR; null = custom terms. */
  price: number | null;
  priceLabel: string;
  period: string;
  summary: string;
  includesLabel: string;
  includes: string[];
  /** Short note on what the client provides / what's excluded. */
  note?: string;
  cta: { label: string; href: string };
  highlighted?: boolean;
}

export const AD_SPEND_NOTE =
  "Ad spend is not included. Your ad budget is billed directly to your own Meta or Google account, so you own the account and see every rupee.";

/** Owner decision (Oct 2026): published prices are starting points, not final. */
export const FLEXIBLE_PRICING_NOTE =
  "Prices shown are starting points, not final. Every package can be adjusted and customised to your requirements.";

export const PRICING_NOTES = {
  flexible: FLEXIBLE_PRICING_NOTE,
  taxInclusive: "All prices are in Pakistani rupees and include taxes.",
  adSpend: AD_SPEND_NOTE,
  addOns: "Add-ons such as promoted posts and extra content are priced on request.",
  payment: "We accept all common payment methods.",
  international: "Outside Pakistan? International pricing is available on request.",
  network:
    "Sponsored posts and placements on the TDM media network are available on inquiry. There is no public rate card.",
} as const;

export const PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter & Maintenance",
    eyebrow: "Foundation",
    price: 30000,
    priceLabel: formatPKR(30000),
    period: "per month",
    summary:
      "Onboarding, brand setup and ongoing management. We run your Meta, Google and YouTube Ads and lead generation, and manage your social accounts; you provide the creatives and posts.",
    includesLabel: "Package includes",
    includes: [
      "Meta Ads, Google Ads and YouTube Ads management",
      "Lead generation campaigns",
      "Social media account management (Facebook, Instagram, X)",
      "Profile and branding optimisation (bio, covers, highlights)",
      "Monthly performance report",
    ],
    note: "You supply creatives and posts. Add-ons priced on request.",
    cta: { label: "Choose Starter", href: "/contact?package=starter" },
  },
  {
    id: "growth",
    name: "Growth Campaign",
    eyebrow: "Most popular",
    price: 70000,
    priceLabel: formatPKR(70000),
    period: "per month · management fee",
    summary:
      "Every service under one roof: website development, SEO, content, social media, Meta, Google and YouTube Ads, and lead generation, plus distribution on our media network.",
    includesLabel: "Everything included",
    includes: [
      "Website development",
      "On-page SEO",
      "Designed social posts (Facebook, Instagram, X)",
      "Content creation",
      `Cross-posted on your handles and our ${NETWORK_STATS.followers.display}-follower network`,
      "Full Meta, Google and YouTube Ads management",
      "Geographic and demographic audience targeting",
      "Complete lead generation setup",
    ],
    cta: { label: "Get Growth Campaign", href: "/contact?package=growth" },
    highlighted: true,
  },
  {
    id: "custom",
    name: "Custom Package",
    eyebrow: "Tailor made",
    price: null,
    priceLabel: "Custom terms",
    period: "Scoped after a discovery consultation",
    summary:
      "Built around your goals, timeline and budget. You choose the services; we build the strategy.",
    includesLabel: "Choose from",
    includes: [
      "Web development and design",
      "Paid advertising on Meta, Google and YouTube",
      "Content production and reels",
      "SEO for national, regional or competitive keywords",
      "Full multi-channel campaign management",
      "Bespoke coverage on the TDM media network",
    ],
    cta: { label: "Inquire about Custom", href: "/contact?package=custom" },
  },
];

/** Growth package's network-leverage callout. */
export const GROWTH_NETWORK_NOTE = `Weekly posts published across our ${NETWORK_STATS.followers.display}-follower media network for extra organic visibility.`;

export const ADD_ONS = [
  { title: "Promoted post", desc: "A single sponsored post" },
  { title: "Extra content", desc: "Additional posts or reels" },
];

/** Plain-language answer reused by FAQ, /pricing and llms.txt (AEO). */
export const PRICING_ANSWER = `Times Digital Media's packages start at ${formatPKR(30000)} per month (Starter & Maintenance) and ${formatPKR(70000)} per month (Growth Campaign), with larger needs scoped as a custom package. These are starting prices, not final: every package can be adjusted to your requirements. Prices are in PKR and tax-inclusive. Ad spend is not included: your ad budget is billed directly to your own Meta or Google account.`;
