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
  metadataBase: new URL("https://timesdigitalmedia.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Times Digital Media | Premium Creative Digital Marketing Agency",
    template: "%s | Times Digital Media"
  },
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
    "Times Digital Media Agency",
    "Lahore Marketing Agency"
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
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Times Digital Media logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Times Digital Media | Premium Digital Marketing",
    description:
      "Scaling high-growth brands via creative digital marketing, paid acquisitions, and viral editing.",
    images: ["/logo.png"]
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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18207064634"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18207064634');
            `,
          }}
        />
        {/* Event snippet for Click to call conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-18207064634/JfykCMrn_bccELqE5-lD',
                    'value': 1.0,
                    'currency': 'PKR',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#ffffff] text-[#09090b] overflow-x-hidden antialiased select-none md:select-auto">
        {/* JSON-LD Structured Data / Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://timesdigitalmedia.com/#organization",
                  "name": "Times Digital Media",
                  "url": "https://timesdigitalmedia.com",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://timesdigitalmedia.com/#logo",
                    "url": "https://timesdigitalmedia.com/logo.png",
                    "caption": "Times Digital Media Logo"
                  },
                  "image": {
                    "@id": "https://timesdigitalmedia.com/#logo"
                  },
                  "sameAs": [
                    "https://www.facebook.com/timesofislamabadurdu",
                    "https://www.instagram.com/timesofislamabad/",
                    "https://x.com/TimesofIslambad"
                  ]
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://timesdigitalmedia.com/#service",
                  "name": "Times Digital Media",
                  "url": "https://timesdigitalmedia.com",
                  "logo": "https://timesdigitalmedia.com/logo.png",
                  "image": "https://timesdigitalmedia.com/logo.png",
                  "description": "Times Digital Media is a premium creative digital marketing agency helping brands scale globally through paid advertising, content creation, and web development.",
                  "telephone": "+923164461707",
                  "email": "thetimesdigitalmedia@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "House no. 183, Street 5, Sector-V, DHA Phase 8",
                    "addressLocality": "Lahore",
                    "addressRegion": "Punjab",
                    "postalCode": "54000",
                    "addressCountry": "PK"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 31.4697,
                    "longitude": 74.4518
                  },
                  "priceRange": "$$$",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                      ],
                      "opens": "09:00",
                      "closes": "18:00"
                    }
                  ]
                }
              ]
            })
          }}
        />

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
