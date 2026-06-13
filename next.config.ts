import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats — Vercel will auto-negotiate avif → webp → jpeg
    formats: ["image/avif", "image/webp"],
    // All images are local (public/), no remote patterns needed
    remotePatterns: [],
    // Cap quality at 80 — visually indistinguishable from 85-90, reduces transformation cost
    qualities: [80],
  },

  async headers() {
    return [
      {
        // Long-lived cache for all static assets in /_next/static (JS, CSS, fonts)
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
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
};

export default nextConfig;
