/**
 * Tracking IDs. Existing GA4 / Google Ads IDs are kept as defaults so
 * nothing breaks; everything new is opt-in through environment variables
 * (set them in Vercel → Project → Settings → Environment Variables).
 */
export const TRACKING = {
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "G-5J5THQ1C3E",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18207064634",
  /** Existing "click to call" conversion action. */
  googleAdsCallLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL || "JfykCMrn_bccELqE5-lD",
  /** [[TODO: create a "Lead form submit" conversion action in Google Ads and set this label]] */
  googleAdsLeadLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL || "",
  /** [[TODO: set Meta Pixel ID to enable Pixel + Conversions API]] */
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  /** Search Console / Bing Webmaster verification tokens (HTML meta tag method). */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  bingSiteVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  /** Optional booking link (Cal.com / Calendly) shown on the audit thank-you page. */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
} as const;
