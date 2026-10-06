/**
 * Network audience statistics — the ONLY place these numbers live.
 * Every component, page, schema block and llms.txt reads from here so the
 * figures can never drift out of sync again.
 *
 * Source: Meta platform insights for the Times of Islamabad and Times Digital
 * Media Facebook and Instagram accounts (not a third-party audit).
 */

export const STATS_SOURCE = {
  label: "Verified from platform insights",
  long: "Figures are taken from Meta platform insights for the Facebook and Instagram accounts in the TDM media network (Times of Islamabad and Times Digital Media). They are not a third-party audit.",
} as const;

export interface NetworkStat {
  /** Numeric part, used by the animated counter. */
  value: number;
  suffix: string;
  /** Pre-formatted string for plain-text use (meta descriptions, schema, llms.txt). */
  display: string;
  label: string;
  detail: string;
  /** Optional compact or spelled-out form for headlines and badges. */
  short?: string;
}

export const NETWORK_STATS = {
  followers: {
    value: 1,
    suffix: "M+",
    display: "1M+",
    label: "Network followers",
    detail: "Across Facebook and Instagram (Times of Islamabad + Times Digital Media).",
  },
  dailyImpressions: {
    value: 1,
    suffix: "M+",
    display: "1M+",
    short: "1 Million",
    label: "Daily impressions",
    detail: "Average daily impressions across the network's Facebook and Instagram accounts.",
  },
  monthlyReach: {
    value: 30,
    suffix: "M+",
    display: "30M+",
    label: "Monthly reach",
    detail: "Average accounts reached per month across the network.",
  },
  views28d: {
    value: 40,
    suffix: "M+",
    display: "40M+",
    label: "Views per 28 days",
    detail: "Content views across the network in a 28-day insights window.",
  },
  ageCore: {
    value: 70,
    suffix: "%",
    display: "70%",
    label: "Aged 18–35",
    detail: "Share of the network audience aged 18 to 35.",
  },
  genderSplit: {
    value: 80,
    suffix: "%",
    display: "80% male / 20% female",
    short: "80% M / 20% F",
    label: "Gender split",
    detail: "80% male, 20% female across the network audience.",
  },
  topCities: {
    value: 48,
    suffix: "%+",
    display: "48%+",
    label: "Karachi + Lahore",
    detail: "Karachi and Lahore together account for 48%+ of network reach.",
  },
} as const satisfies Record<string, NetworkStat>;

/** One-sentence summary used in meta descriptions, llms.txt and the facts block. */
export const NETWORK_SUMMARY = `${NETWORK_STATS.followers.display} followers, ${NETWORK_STATS.monthlyReach.display} monthly reach and ${NETWORK_STATS.views28d.display} views every 28 days across Facebook and Instagram`;

/**
 * Platform-insights screenshots shown in the proof section, with a text
 * equivalent of what each one shows. Filenames were previously swapped
 * (the "age_gender" file showed traffic sources); they are now named for
 * what they contain.
 */
export interface InsightScreenshot {
  title: string;
  badge: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** Plain-text key numbers, rendered as a list so they're readable without the image. */
  keyNumbers: string[];
}

export const INSIGHT_SCREENSHOTS: InsightScreenshot[] = [
  {
    title: "How people find the content",
    badge: "Traffic sources",
    src: "/insights_traffic_sources.jpg",
    width: 1024,
    height: 746,
    alt: "Meta insights chart titled 'How people find your content': Feed 69%, Reels 26%, Unavailable 3%, Other 2%.",
    caption:
      "Where network viewers discover posts. Feed placements drive most views, with Reels the second-largest source.",
    keyNumbers: ["Feed: 69.0%", "Reels: 26.0%", "Unavailable: 3.0%", "Other: 2.0%"],
  },
  {
    title: "Top cities",
    badge: "National reach",
    src: "/insights_top_cities.jpg",
    width: 1024,
    height: 766,
    alt: "Meta insights 'Top locations' by city: Karachi 24.7%, Lahore 23.4%, Islamabad 9.8%, Other 42.2%.",
    caption: `Karachi and Lahore together make up ${NETWORK_STATS.topCities.display} of reach, with Islamabad third.`,
    keyNumbers: ["Karachi: 24.7%", "Lahore: 23.4%", "Islamabad: 9.8%", "Other: 42.2%"],
  },
  {
    title: "Age & gender snapshot",
    badge: "Single page · May 1–28",
    src: "/insights_age_gender_snapshot.jpg",
    width: 1024,
    height: 860,
    alt: "Meta insights 'Age and gender' for one network page, May 1 to May 28: 25–34 is 52.5%, 35–44 is 28.9%, 45–54 is 8.6%, Other 10.0%.",
    // Owner decision: keep the network-wide 80/20 headline stat; this
    // screenshot is one page for one month, so it is labelled as a snapshot.
    caption:
      "A one-page, one-month snapshot (May 1–28). Within it, 25–34 is the largest age group at 52.5%, followed by 35–44 at 28.9%. Network-wide figures above combine every page and account.",
    keyNumbers: ["25–34: 52.5%", "35–44: 28.9%", "45–54: 8.6%", "Other: 10.0%"],
  },
  {
    title: "Views in 28 days",
    badge: "Engagement",
    src: "/insights_views_28d.jpg",
    width: 1024,
    height: 865,
    alt: "Meta insights panel for the last 28 days (Dec 13 to Jan 5) reading 'you had 40M views', up 87% on the previous 28 days, with a daily views line chart.",
    caption: `${NETWORK_STATS.views28d.display} views in a single 28-day insights window, up 87% on the previous period.`,
    keyNumbers: ["40M views in 28 days", "+87% vs previous 28 days"],
  },
];

/**
 * Meta Ads Manager screenshots from client campaigns. Client names are hidden
 * unless the client has a published case study and agreed to be named
 * (Nail Art by Afsana). [[REVIEW]] confirm client consent to publish.
 */
export interface AdsProof {
  title: string;
  badge: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  description: string;
  period?: string;
  keyNumbers: { label: string; value: string; note?: string }[];
}

export const ADS_PROOF: AdsProof[] = [
  {
    title: "Website purchases at 9.39x ROAS",
    badge: "Meta Ads Manager",
    src: "/proof_roas_9-39x.jpg",
    width: 877,
    height: 222,
    period: "2–5 March 2026",
    alt: "Meta Ads Manager row for 2 to 5 March 2026: 63 website purchases, purchase ROAS 9.39, purchases conversion value Rs 288,607.26, amount spent Rs 30,719.61.",
    description:
      "63 website purchases worth Rs 288,607.26 in conversion value from Rs 30,719.61 in ad spend over four days, a 9.39x purchase ROAS.",
    keyNumbers: [
      { label: "Conversion value", value: "Rs 288.6K", note: "9.39x ROAS" },
      { label: "Amount spent", value: "Rs 30.7K", note: "Ad budget" },
      { label: "Purchases", value: "63", note: "Website" },
    ],
  },
  {
    title: "44 WhatsApp bookings at Rs 213.63 each",
    badge: "Meta Ads Manager",
    src: "/proof_afsana_campaigns.jpg",
    width: 1750,
    height: 344,
    period: "6 Sep – 5 Oct 2026",
    alt: "Meta Ads Manager campaign table for Nail Art by Afsana: the booking campaign shows 44 messaging conversations at Rs213.63 per conversation on Rs9,399.76 spent, flagged by Meta as high performing.",
    description:
      "A conversation campaign for Lahore nail studio Nail Art by Afsana booked 44 WhatsApp conversations in 30 days at Rs 213.63 each, on Rs 9,399.76 of spend. Meta flagged the campaign as high performing.",
    keyNumbers: [
      { label: "Conversations", value: "44", note: "WhatsApp" },
      { label: "Cost per conversation", value: "Rs 213.63" },
      { label: "Amount spent", value: "Rs 9,399.76" },
    ],
  },
  {
    title: "Advantage+ cut cost per chat to Rs 177.99",
    badge: "Meta Ads Manager",
    src: "/proof_afsana_adsets.jpg",
    width: 1700,
    height: 240,
    period: "6 Sep – 5 Oct 2026",
    alt: "Meta Ads Manager ad set table: Detailed Ad Set 18 conversations at Rs232.82, ADV+ Ad Set 23 conversations at Rs177.99, Broad Ad Set 3 conversations at Rs371.80.",
    description:
      "The same creatives tested against three audiences on the same campaign. Advantage+ won at Rs 177.99 per conversation against Rs 232.82 for detailed targeting, and the broad set was switched off.",
    keyNumbers: [
      { label: "Advantage+", value: "Rs 177.99", note: "23 chats" },
      { label: "Detailed", value: "Rs 232.82", note: "18 chats" },
      { label: "Broad", value: "Rs 371.80", note: "Paused" },
    ],
  },
  {
    title: "Ad set at 8.84x ROAS",
    badge: "Meta Ads Manager",
    src: "/proof_roas_8-84x.jpg",
    width: 1024,
    height: 156,
    alt: "Meta Ads Manager ad set row: cost per purchase Rs 214.91, conversion value Rs 157,650.20, ROAS 8.84, amount spent Rs 17,837.22.",
    description:
      "One ad set returned Rs 157,650.20 in conversion value on Rs 17,837.22 of spend (8.84x ROAS) at Rs 214.91 per purchase.",
    keyNumbers: [
      { label: "Conversion value", value: "Rs 157,650" },
      { label: "Spend", value: "Rs 17,837" },
      { label: "Cost per purchase", value: "Rs 214.91" },
    ],
  },
  {
    title: "977 purchases at 9.15x ROAS",
    badge: "Meta Ads Manager",
    src: "/proof_roas_9-15x.jpg",
    width: 723,
    height: 180,
    alt: "Meta Ads Manager row: 977 website purchases with a purchase ROAS of 9.15.",
    description: "A scaled campaign that recorded 977 website purchases at a 9.15x purchase ROAS.",
    keyNumbers: [
      { label: "Purchases", value: "977" },
      { label: "Purchase ROAS", value: "9.15x" },
    ],
  },
  {
    title: "Reach at Rs 16.39 CPM",
    badge: "Meta Ads Manager",
    src: "/proof_reach_cpm.png",
    width: 1024,
    height: 136,
    alt: "Meta Ads Manager reach campaign row: 30,277 people reached, cost per 1,000 people reached Rs 18.55, 34,277 impressions, CPM Rs 16.39.",
    description:
      "An awareness campaign that reached 30,277 people with 34,277 impressions at a Rs 16.39 CPM (Rs 18.55 per 1,000 people reached).",
    keyNumbers: [
      { label: "Reach", value: "30,277" },
      { label: "Impressions", value: "34,277" },
      { label: "CPM", value: "Rs 16.39" },
    ],
  },
];
