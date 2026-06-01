import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Sidebars from "@/components/Sidebars";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Times Digital Media | Premium Creative Digital Marketing Agency",
  description:
    "Times Digital Media helps high-end brands scale globally through paid social advertising (Meta, TikTok, Google Ads), viral short-form content, expert video production, influencer networking, and complete marketing campaign management.",
  keywords: [
    "Digital Marketing Agency",
    "Creative Marketing Agency",
    "Paid Ads Specialist",
    "Meta Ads Agency",
    "TikTok Marketing",
    "Short Form Content Reels",
    "Viral Marketing",
    "Brand Strategy Consultant",
    "Times Digital Media",
  ],
  authors: [{ name: "Times Digital Media Team" }],
  openGraph: {
    title: "Times Digital Media | Premium Creative Digital Marketing Agency",
    description:
      "Scale your brand through creative paid ads, viral reels, and high-performance influencer campaigns. Reach millions of prospective clients.",
    url: "https://timesdigitalmedia.com",
    siteName: "Times Digital Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Times Digital Media | Premium Digital Marketing",
    description:
      "Scaling high-growth brands via creative digital marketing, paid acquisitions, and viral editing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#ffffff] text-[#09090b] overflow-x-hidden antialiased select-none md:select-auto">
        {/* Fluid custom trailing cursor */}
        <CustomCursor />

        {/* Structural navigational sidebars */}
        <Sidebars />

        {/*
          Global ambient background orbs.
          – position: fixed so they stay behind all content regardless of scroll
          – NO overflow-hidden here; that was the root cause of black clipping flashes
          – pointer-events: none so they never interfere with interaction
        */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0"
        >
          <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[65%] rounded-full bg-red-600/10 bg-glow-orb animate-float" />
          <div className="absolute top-[35%] right-[-12%] w-[48%] h-[58%] rounded-full bg-rose-600/8 bg-glow-orb animate-float-delayed" />
          <div className="absolute bottom-[-10%] left-[25%] w-[50%] h-[50%] rounded-full bg-red-800/5 bg-glow-orb animate-float" style={{ animationDelay: "-8s" }} />
        </div>

        <div className="relative z-10 w-full flex flex-col flex-1">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
