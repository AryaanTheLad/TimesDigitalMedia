/**
 * Article metadata registry. Bodies live in ./articles/<slug>.tsx.
 * Kept separate so the sitemap, llms.txt and listing pages don't import
 * article bodies.
 */

export type ArticleCategory = "meta-ads" | "google-youtube" | "strategy";

export const CATEGORIES: Record<ArticleCategory, { name: string; description: string }> = {
  "meta-ads": { name: "Meta Ads", description: "Facebook and Instagram advertising: costs, payments, accounts and creative." },
  "google-youtube": { name: "Google & YouTube", description: "Search, Performance Max and YouTube advertising in Pakistan." },
  strategy: { name: "Strategy", description: "Budgets, measurement and choosing the right partner." },
};

export interface ArticleMeta {
  slug: string;
  title: string;
  /** ≤ 45 chars when combined with the brand suffix where possible. */
  seoTitle: string;
  description: string;
  category: ArticleCategory;
  primaryKeyword: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  /** Service pages this article supports (internal linking). */
  services: string[];
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "facebook-ads-cost-pakistan",
    title: "How much do Facebook ads cost in Pakistan? (2026)",
    seoTitle: "Facebook Ads Cost in Pakistan (2026)",
    description:
      "What drives Facebook and Instagram ad costs in Pakistan, real Ads Manager numbers from our campaigns, and how to set a starting budget in PKR.",
    category: "meta-ads",
    primaryKeyword: "how much do facebook ads cost in pakistan",
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
    readingMinutes: 8,
    services: ["meta-ads"],
  },
  {
    slug: "pay-for-meta-and-google-ads-from-pakistan",
    title: "How to pay for Meta and Google ads from Pakistan",
    seoTitle: "How to Pay for Meta & Google Ads from Pakistan",
    description:
      "Payment options for Facebook, Instagram and Google ads from Pakistan, why local cards get declined, and the taxes that can appear on your statement.",
    category: "meta-ads",
    primaryKeyword: "how to pay for meta ads from pakistan",
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
    readingMinutes: 7,
    services: ["meta-ads", "google-ads"],
  },
  {
    slug: "meta-ad-account-restricted",
    title: "Meta ad account restricted? Why it happens and how to fix it",
    seoTitle: "Meta Ad Account Restricted: Causes & Fixes",
    description:
      "Why Meta restricts ad accounts, how to request a review in Account Quality, and the habits that keep Pakistani advertisers out of trouble.",
    category: "meta-ads",
    primaryKeyword: "why was my meta ad account restricted",
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
    readingMinutes: 7,
    services: ["meta-ads"],
  },
  {
    slug: "meta-ads-vs-google-ads",
    title: "Meta Ads vs Google Ads: which is better for your business?",
    seoTitle: "Meta Ads vs Google Ads for Pakistani Businesses",
    description:
      "A side-by-side comparison of Meta (Facebook and Instagram) and Google Ads for Pakistani businesses: intent, cost, creative, and when to use both.",
    category: "strategy",
    primaryKeyword: "meta ads vs google ads",
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
    readingMinutes: 8,
    services: ["meta-ads", "google-ads", "youtube-ads"],
  },
  {
    slug: "what-is-a-good-roas",
    title: "What is a good ROAS? Break-even maths for Pakistani advertisers",
    seoTitle: "What Is a Good ROAS? Break-Even ROAS Explained",
    description:
      "How to work out the ROAS your business needs to be profitable, why there's no universal 'good' number, and what our purchase campaigns achieved.",
    category: "strategy",
    primaryKeyword: "what is a good roas",
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
    readingMinutes: 7,
    services: ["meta-ads", "performance-marketing-lead-generation"],
  },
  {
    slug: "how-to-choose-a-digital-marketing-agency-pakistan",
    title: "How to choose a digital marketing agency in Pakistan",
    seoTitle: "How to Choose a Digital Marketing Agency in Pakistan",
    description:
      "Agency vs freelancer vs in-house, the questions to ask before you sign, and the red flags that cost Pakistani businesses money.",
    category: "strategy",
    primaryKeyword: "how to choose a digital marketing agency",
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
    readingMinutes: 8,
    services: ["performance-marketing-lead-generation", "social-media-management"],
  },
];

export const getArticleMeta = (slug: string) => ARTICLES.find((a) => a.slug === slug);
