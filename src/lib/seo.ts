import type { Metadata } from "next";
import { SITE, SITE_URL } from "@/data/site";

interface PageSEO {
  /** Page title WITHOUT the brand suffix; the suffix is added here. Keep ≤ ~45 chars. */
  title: string;
  description: string;
  /** Path starting with "/" — becomes the canonical URL. */
  path: string;
  /** Use the title exactly as given (homepage). */
  absoluteTitle?: boolean;
  /** Override the generated OG image (defaults to the route's opengraph-image). */
  image?: { url: string; width: number; height: number; alt: string };
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

export const fullTitle = (title: string) => `${title} | ${SITE.name}`;

/**
 * Builds consistent metadata so <title>, og:title and twitter:title always
 * match, and every page gets its own canonical, OG url and description.
 */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noindex,
}: PageSEO): Metadata {
  const resolvedTitle = absoluteTitle ? title : fullTitle(title);
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: { absolute: resolvedTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: SITE.name,
      locale: "en_PK",
      type,
      ...(image ? { images: [image] } : {}),
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      ...(image ? { images: [image.url] } : {}),
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);
