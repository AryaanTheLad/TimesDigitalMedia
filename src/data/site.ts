/**
 * Single source of truth for Times Digital Media's identity, contact details
 * and the canonical entity description reused across the site, schema,
 * llms.txt and external profiles.
 *
 * Edit facts HERE, never inline in components.
 */

export const SITE_URL = "https://timesdigitalmedia.co";

export const SITE = {
  name: "Times Digital Media",
  shortName: "TDM",
  url: SITE_URL,
  /** Kept as the public contact address by owner decision (no domain email planned). */
  email: "thetimesdigitalmedia@gmail.com",
  phone: {
    e164: "+923298223036",
    display: "+92 329 8223036",
  },
  whatsapp: {
    number: "923298223036",
    url: "https://wa.me/923298223036",
    prefill: "Hi, I'd like to talk about growing my business with Times Digital Media.",
  },
  /**
   * Service-area business: city + country only. Never add a street address,
   * postcode or coordinates (owner decision).
   */
  location: {
    city: "Lahore",
    region: "Punjab",
    country: "Pakistan",
    countryCode: "PK",
  },
  /** Markets served. International clients are served with separate pricing. */
  areaServed: {
    primary: ["Lahore", "Karachi", "Islamabad", "Rawalpindi"],
    country: "Pakistan",
    international: true,
  },
  logo: "/logo.png",
} as const;

/**
 * Canonical entity description (GEO). Reuse this wording verbatim on the
 * About page, footer, schema, llms.txt, Google Business Profile and
 * directory listings so search engines and AI systems see one consistent
 * definition.
 */
export const ENTITY = {
  oneLiner:
    "Times Digital Media (TDM) is a performance marketing agency based in Lahore, Pakistan.",
  description:
    "Times Digital Media (TDM) is a performance marketing agency based in Lahore, Pakistan. TDM plans and manages Meta (Facebook and Instagram), Google and YouTube ad campaigns, lead generation and short-form content for businesses in Pakistan and abroad. Alongside paid ads, TDM can amplify client brands across its owned media network, which includes the Times of Islamabad news portal and the Facebook and Instagram accounts of Times of Islamabad and Times Digital Media.",
  /** Explicit relationship statement so AI systems don't merge the two brands. */
  networkRelationship:
    "Times Digital Media and Times of Islamabad are part of the same group. TDM is the group's marketing agency; Times of Islamabad is its news publisher. Times of Islamabad's news portal and its Facebook and Instagram accounts are part of the media network TDM uses to amplify client brands. Editorial news coverage is produced by Times of Islamabad, not by TDM.",
  /**
   * Disambiguation: searches for "Times Digital Media Lahore" also surface
   * Media Times Limited (publisher of Daily Times). [[REVIEW]] confirm TDM has
   * no connection before publishing this line on external profiles.
   */
  disambiguation:
    "Times Digital Media is not the same company as Media Times Limited, the Lahore-based publisher of Daily Times.",
  differentiator:
    "Most agencies only buy attention on Meta and Google. TDM does that too, then adds distribution on a media network it owns.",
} as const;

export type SocialOwner = "tdm" | "network";

export interface SocialProfile {
  platform: "facebook" | "instagram" | "x";
  label: string;
  href: string;
  /** "tdm" = Times Digital Media's own profile; "network" = part of the TDM media network. */
  owner: SocialOwner;
  handle: string;
}

/**
 * Social profiles (owner-confirmed, Oct 2026).
 * Note: TDM's own Facebook page lives at /timesofislamabadurdu despite the
 * slug; Times of Islamabad's Facebook page is /TimesofIslamabad.
 */
export const SOCIALS: SocialProfile[] = [
  {
    platform: "facebook",
    label: "Times Digital Media on Facebook",
    href: "https://www.facebook.com/timesofislamabadurdu",
    owner: "tdm",
    handle: "Times Digital Media",
  },
  {
    platform: "instagram",
    label: "Times Digital Media on Instagram",
    href: "https://www.instagram.com/timesdigitalmedia/",
    owner: "tdm",
    handle: "@timesdigitalmedia",
  },
  {
    platform: "facebook",
    label: "Times of Islamabad on Facebook (TDM media network)",
    href: "https://www.facebook.com/TimesofIslamabad",
    owner: "network",
    handle: "Times of Islamabad",
  },
  {
    platform: "x",
    label: "Times of Islamabad on X (TDM media network)",
    href: "https://x.com/TimesofIslambad",
    owner: "network",
    handle: "@TimesofIslambad",
  },
];

/** Times of Islamabad properties that make up the network (not TDM's own profiles). */
export const NETWORK_PROPERTIES = {
  newsPortal: { name: "Times of Islamabad", url: "https://timesofislamabad.com" },
  instagram: "https://www.instagram.com/timesofislamabad/",
  facebook: "https://www.facebook.com/TimesofIslamabad",
} as const;

/**
 * Profiles that belong to TDM itself and therefore go in Organization.sameAs.
 * [[TODO: add TDM's LinkedIn and Google Business Profile URL once they exist]]
 */
export const TDM_SAME_AS: string[] = SOCIALS.filter((s) => s.owner === "tdm").map((s) => s.href);

export const whatsappHref = (text: string = SITE.whatsapp.prefill) =>
  `${SITE.whatsapp.url}?text=${encodeURIComponent(text)}`;
