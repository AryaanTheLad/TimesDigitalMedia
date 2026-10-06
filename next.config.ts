import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  // HSTS is already sent by Vercel (max-age=63072000). includeSubDomains is
  // deliberately not added until every subdomain is confirmed HTTPS.
  // A full Content-Security-Policy is deferred: gtag, the Meta Pixel and the
  // Instagram/YouTube embeds need a tested allow-list first (see audit report).
];

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats — Vercel will auto-negotiate avif → webp → jpeg
    formats: ["image/avif", "image/webp"],
    // All images are local (public/), no remote patterns needed
    remotePatterns: [],
    // Cap quality at 80 — visually indistinguishable from 85-90, reduces transformation cost
    qualities: [80],
  },

  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Long-lived cache for all public image/media assets
        source: "/:path*(png|jpg|jpeg|webp|avif|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Single host. Vercel's domain settings already 308 www → apex; this
      // is a fallback in case that domain setting is ever changed.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.timesdigitalmedia.co" }],
        destination: "https://timesdigitalmedia.co/:path*",
        permanent: true,
      },
      // Friendly aliases for routes named in campaigns and the brief.
      { source: "/case-studies", destination: "/portfolio", permanent: true },
      { source: "/case-studies/:slug", destination: "/portfolio/:slug", permanent: true },
      { source: "/advertise-with-us", destination: "/media-network", permanent: true },
      { source: "/advertise", destination: "/media-network", permanent: true },
      { source: "/audit", destination: "/free-growth-audit", permanent: true },
      { source: "/insights", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
