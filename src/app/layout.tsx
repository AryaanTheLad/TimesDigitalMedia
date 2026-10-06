import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Sidebars from "@/components/Sidebars";
import LenisScroll from "@/components/LenisScroll";
import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";
import { DEBUG_TOGGLES } from "./debug-toggles";
import TrackingScripts from "@/components/TrackingScripts";
import JsonLd from "@/components/JsonLd";
import { graph, organizationNode, websiteNode } from "@/lib/schema";
import { SITE, SITE_URL } from "@/data/site";
import { TRACKING } from "@/data/tracking";
import { NETWORK_STATS } from "@/data/stats";
import { PACKAGES } from "@/data/pricing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const HOME_TITLE = `Performance Marketing Agency in Lahore | ${SITE.name}`;
const HOME_DESCRIPTION = `Meta, Google & YouTube ads, lead generation and reels from a Lahore agency, plus reach on our own ${NETWORK_STATS.followers.display} follower media network. From ${PACKAGES[0].priceLabel}/month.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    ...(TRACKING.googleSiteVerification ? { google: TRACKING.googleSiteVerification } : {}),
    ...(TRACKING.bingSiteVerification ? { other: { "msvalidate.01": TRACKING.bingSiteVerification } } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PK"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#ffffff] text-[#09090b] overflow-x-hidden antialiased select-none md:select-auto">
        {/* Site-wide entity schema; page-level nodes are added per route */}
        <JsonLd data={graph(organizationNode(), websiteNode())} />

        {DEBUG_TOGGLES.disableCSSAnimations && (
          <style dangerouslySetInnerHTML={{__html: `
            *, *::before, *::after {
              animation: none !important;
              transition: none !important;
            }
          `}} />
        )}
        {DEBUG_TOGGLES.disableBlurEffects && (
          <style dangerouslySetInnerHTML={{__html: `
            *, *::before, *::after {
              filter: none !important;
              backdrop-filter: none !important;
              -webkit-backdrop-filter: none !important;
            }
          `}} />
        )}

        <MotionConfig reducedMotion={DEBUG_TOGGLES.disableFramerMotion ? "always" : "user"}>
          {/* Fluid custom trailing cursor */}
          <CustomCursor />

          {/* Lenis Smooth Scrolling wrapper */}
          <LenisScroll />

          {/* Structural navigational sidebars */}
          <Sidebars />

          {/*
            Global ambient background orbs.
            - position: fixed so they stay behind all content regardless of scroll
            - NO overflow-hidden here; that was the root cause of black clipping flashes
            - pointer-events: none so they never interfere with interaction
          */}
          <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-0"
          >
            <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[65%] rounded-full bg-glow-orb animate-float" style={{ background: "radial-gradient(circle at center, rgba(232, 0, 14, 0.18) 0%, transparent 70%)" }} />
            <div className="absolute top-[35%] right-[-12%] w-[48%] h-[58%] rounded-full bg-glow-orb animate-float-delayed" style={{ background: "radial-gradient(circle at center, rgba(244, 63, 94, 0.12) 0%, transparent 70%)" }} />
            <div className="absolute bottom-[-10%] left-[25%] w-[50%] h-[50%] rounded-full bg-glow-orb animate-float" style={{ background: "radial-gradient(circle at center, rgba(153, 27, 27, 0.08) 0%, transparent 70%)", animationDelay: "-8s" }} />
          </div>

          <div className="relative z-10 w-full flex flex-col flex-1">
            {children}
            <Analytics />
            <TrackingScripts />
          </div>
        </MotionConfig>
      </body>
    </html>
  );
}
