/**
 * General FAQs (AEO). Answers lead with a direct 40–60 word answer.
 * Used by the homepage FAQ (subset), /faq (all) and FAQPage schema.
 * Pricing and stats come from their config files so answers never drift.
 */

import { ENTITY, SITE } from "./site";
import { NETWORK_STATS } from "./stats";
import { PRICING_ANSWER, PRICING_NOTES } from "./pricing";

export interface FAQ {
  id: string;
  q: string;
  a: string;
  /** Show on the homepage FAQ block. */
  home?: boolean;
  /** [[REVIEW]] flag for answers that make claims the owner should confirm. */
  review?: string;
}

export const FAQS: FAQ[] = [
  {
    id: "what-does-tdm-do",
    q: "What does Times Digital Media do?",
    a: `${ENTITY.description}`,
  },
  {
    id: "where-based",
    q: "Where is Times Digital Media based?",
    a: `TDM is based in ${SITE.location.city}, ${SITE.location.country}, and works with clients across Pakistan, including Karachi, Islamabad and Rawalpindi, as well as clients abroad. To talk to the team, message us on WhatsApp, call ${SITE.phone.display} or email ${SITE.email}.`,
  },
  {
    id: "how-much",
    q: "How much does Times Digital Media charge?",
    a: `${PRICING_ANSWER} ${PRICING_NOTES.addOns}`,
    home: true,
  },
  {
    id: "ad-spend",
    q: "Is ad spend included in the fee?",
    a: "No. Your ad budget is billed directly to your own Meta or Google account. You own your ad accounts, see exactly where every rupee goes and keep full control of your data. Our fee covers strategy, creative, setup, optimisation and reporting.",
    home: true,
  },
  {
    id: "results-speed",
    q: "How fast will I see results?",
    a: "Most clients see measurable lead flow within the first 14–21 days of campaign launch. Full optimisation and scaling typically happen by day 30–45 as we accumulate data and refine targeting. 'More qualified leads in 30 days' is a commitment we work toward, not a promise of a specific number of leads.",
    home: true,
    review: "[[REVIEW]] '14–21 days' and 'day 30–45' timings carried over from the previous site; confirm they still reflect typical client results.",
  },
  {
    id: "doesnt-work",
    q: "What if it doesn't work?",
    // Existing answer kept: it is already framed as a commitment and makes no refund promise.
    a: "We're fully invested in your success. Our team continuously optimises campaigns based on real data, and we maintain transparent reporting so you always know exactly what's happening. We don't rest until your campaigns are performing.",
    home: true,
  },
  {
    id: "outside-pakistan",
    q: "Do you work with clients outside Pakistan?",
    a: `Yes. While our core team and media network are based in Pakistan, we manage campaigns for clients across the Middle East, UK, US and Canada. Paid ads and digital strategy are borderless. International clients have separate pricing, available on request.`,
    home: true,
    review: "[[REVIEW]] Claim of clients in the Middle East, UK, US and Canada carried over from the previous site; confirm.",
  },
  {
    id: "business-size",
    q: "What size businesses do you take on?",
    a: "We work with businesses starting from our Starter package, which begins at Rs 30,000 per month, up to large organisations with custom requirements. Every package can be adjusted to your requirements, so if you're serious about growth, there's a package that fits.",
  },
  {
    id: "media-network",
    q: "What is the TDM media network?",
    a: `It's the group of channels TDM uses to amplify client brands alongside paid ads: the Times of Islamabad news portal plus the Facebook and Instagram accounts of Times of Islamabad and Times Digital Media. Together they have ${NETWORK_STATS.followers.display} followers and ${NETWORK_STATS.monthlyReach.display} monthly reach (from platform insights).`,
  },
  {
    id: "advertise-toi",
    q: "How can I advertise on Times of Islamabad?",
    a: `Sponsored posts and placements on the Times of Islamabad portal and the network's social accounts are sold through Times Digital Media on inquiry. There's no public rate card: send us your goal, dates and budget through the media network inquiry form and we'll come back with formats and pricing.`,
  },
  {
    id: "tdm-vs-toi",
    q: "Are Times Digital Media and Times of Islamabad the same company?",
    a: ENTITY.networkRelationship,
  },
  {
    id: "contract",
    q: "How do I pay, and what's included in the price?",
    a: `${PRICING_NOTES.taxInclusive} ${PRICING_NOTES.payment} Ad spend is always separate and paid to Meta or Google from your own account.`,
  },
  {
    id: "meta-or-google",
    q: "Should I use Meta Ads or Google Ads?",
    a: "Use Google Ads when people already search for what you sell; use Meta Ads (Facebook and Instagram) to reach people who match your customer profile before they search. Many businesses use both: Meta to create demand, Google to capture it. The free growth audit tells you where to start.",
  },
  {
    id: "choose-agency",
    q: "What should I look for in a marketing agency in Pakistan?",
    a: "Check that campaigns run in ad accounts you own, that pricing and ad spend are separated in writing, that the agency shows real campaign screenshots or case studies, and that reporting is tied to leads or sales rather than likes. Ask who will manage your account day to day.",
  },
];

export const HOME_FAQS = FAQS.filter((f) => f.home);
