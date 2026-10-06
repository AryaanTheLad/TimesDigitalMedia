import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { CASE_STUDIES } from "@/data/caseStudies";
import { ARTICLES } from "@/content/blog/meta";

/**
 * Generated from the data files so new services, case studies and articles
 * are included automatically. Thank-you pages (noindex) are excluded.
 * lastModified uses a fixed content date rather than new Date() so the
 * sitemap doesn't claim every page changed on every deploy.
 */
const CONTENT_UPDATED = "2026-10-06";

type Entry = MetadataRoute.Sitemap[number];
const entry = (path: string, priority: number, changeFrequency: Entry["changeFrequency"], lastModified = CONTENT_UPDATED): Entry => ({
  url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
  lastModified,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1.0, "weekly"),
    entry("/services", 0.9, "monthly"),
    ...SERVICES.map((s) => entry(`/services/${s.slug}`, 0.9, "monthly")),
    entry("/pricing", 0.9, "monthly"),
    entry("/free-growth-audit", 0.8, "monthly"),
    entry("/media-network", 0.8, "monthly"),
    entry("/portfolio", 0.8, "monthly"),
    ...CASE_STUDIES.map((c) => entry(`/portfolio/${c.id}`, 0.7, "monthly")),
    entry("/industries", 0.7, "monthly"),
    ...INDUSTRIES.map((i) => entry(`/industries/${i.slug}`, 0.7, "monthly")),
    entry("/blog", 0.7, "weekly"),
    ...ARTICLES.map((a) => entry(`/blog/${a.slug}`, 0.7, "monthly", a.dateModified)),
    entry("/blog/author/tdm-editorial-team", 0.3, "monthly"),
    entry("/about", 0.6, "monthly"),
    entry("/faq", 0.6, "monthly"),
    entry("/contact", 0.6, "yearly"),
    entry("/privacy", 0.2, "yearly"),
    entry("/terms", 0.2, "yearly"),
  ];
}
