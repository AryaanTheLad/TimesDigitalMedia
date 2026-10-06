import Link from "next/link";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppLink from "@/components/WhatsAppLink";
import { buildMetadata } from "@/lib/seo";
import { TRACKING } from "@/data/tracking";

/**
 * Thank-you page for the audit funnel. The lead conversion fires in the form
 * on a confirmed submission (not here), so reloading this page never
 * double-counts. Use this URL as a destination-based backup goal if needed.
 */
export const metadata = buildMetadata({
  title: "Audit Request Received",
  description: "Thanks for requesting a free growth audit from Times Digital Media.",
  path: "/free-growth-audit/thank-you",
  noindex: true,
});

export default async function AuditThankYouPage({ searchParams }: { searchParams: Promise<{ tier?: string }> }) {
  const { tier } = await searchParams;
  const priority = tier === "priority";

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <section className="min-h-[70vh] flex items-center justify-center py-16 px-6">
          <div className="max-w-xl w-full rounded-[32px] bg-white border border-stone-200 p-8 sm:p-12 shadow-sm text-center flex flex-col items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-emerald-500" aria-hidden="true" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] leading-tight">
              {priority ? "We'll send your audit within 24 hours." : "Thanks! We've received your details."}
            </h1>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-md">
              {priority
                ? "A growth strategist will review your answers and prepare a personalised audit. Want to move faster? Book a call or message us now."
                : "Our team will review your answers and get back to you shortly. In the meantime, feel free to message us or look through our packages."}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              {priority && TRACKING.bookingUrl && (
                <a
                  href={TRACKING.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#E8000E] hover:bg-red-700 transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              <WhatsAppLink
                location="audit_thank_you"
                text="Hi, I just requested a free growth audit."
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors shadow-sm text-center inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Message us on WhatsApp</span>
              </WhatsAppLink>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors text-center"
              >
                View packages
              </Link>
            </div>
            <p className="text-xs text-stone-500">
              While you wait: <Link href="/blog/meta-ads-vs-google-ads" className="font-bold underline">Meta Ads vs Google Ads</Link> ·{" "}
              <Link href="/portfolio" className="font-bold underline">Case studies</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
