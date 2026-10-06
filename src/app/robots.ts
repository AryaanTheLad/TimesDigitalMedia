import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

/**
 * Deliberate AI-crawler policy: ALLOW. TDM wants to be understood and cited
 * by AI assistants (ChatGPT, Gemini, Perplexity, Copilot, Claude), so their
 * search and training crawlers are explicitly allowed. To opt out of model
 * training only, move "GPTBot", "Google-Extended", "ClaudeBot" and
 * "CCBot" into a disallow rule; keep the *-SearchBot / user agents allowed
 * so the site can still be cited in AI answers.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

// Thank-you pages are NOT blocked here: they carry a noindex meta tag, and
// Google can only see that tag if it's allowed to crawl the page.
const PRIVATE_PATHS = ["/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE_PATHS },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
