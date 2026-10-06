import type { ComponentType } from "react";
import type { Source } from "@/components/ArticleParts";
import * as facebookAdsCost from "./articles/facebook-ads-cost-pakistan";
import * as payForAds from "./articles/pay-for-meta-and-google-ads-from-pakistan";
import * as restricted from "./articles/meta-ad-account-restricted";
import * as metaVsGoogle from "./articles/meta-ads-vs-google-ads";
import * as goodRoas from "./articles/what-is-a-good-roas";
import * as chooseAgency from "./articles/how-to-choose-a-digital-marketing-agency-pakistan";

export interface ArticleBody {
  default: ComponentType;
  sources: Source[];
}

/** Article bodies keyed by slug. Metadata lives in ./meta.ts. */
export const ARTICLE_BODIES: Record<string, ArticleBody> = {
  "facebook-ads-cost-pakistan": facebookAdsCost,
  "pay-for-meta-and-google-ads-from-pakistan": payForAds,
  "meta-ad-account-restricted": restricted,
  "meta-ads-vs-google-ads": metaVsGoogle,
  "what-is-a-good-roas": goodRoas,
  "how-to-choose-a-digital-marketing-agency-pakistan": chooseAgency,
};

export { ARTICLES, CATEGORIES, getArticleMeta } from "./meta";
export const AUTHOR = {
  slug: "tdm-editorial-team",
  name: "Times Digital Media Editorial Team",
  // [[TODO: replace with named authors (founder/strategists) once bios are supplied]]
  bio: "Guides written by the Times Digital Media team, the strategists and media buyers who run Meta, Google and YouTube campaigns for our clients in Pakistan.",
};
