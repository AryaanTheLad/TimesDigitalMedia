import Link from "next/link";
import { CheckCircle, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppLink from "@/components/WhatsAppLink";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Media Network Inquiry Received",
  description: "Thanks for your media network inquiry.",
  path: "/media-network/thank-you",
  noindex: true,
});

export default function NetworkThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-24">
        <section className="min-h-[70vh] flex items-center justify-center py-16 px-6">
          <div className="max-w-xl w-full rounded-[32px] bg-white border border-stone-200 p-8 sm:p-12 shadow-sm text-center flex flex-col items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-emerald-500" aria-hidden="true" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b]">Thanks, we&apos;ve got your inquiry.</h1>
            <p className="text-sm sm:text-base text-[#57534E] font-medium leading-relaxed max-w-md">
              We&apos;ll come back to you with formats, dates and pricing. For anything urgent, message us on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppLink
                location="network_thank_you"
                text="Hi, I just sent a media network inquiry."
                className="px-6 py-4 rounded-xl text-sm font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp us
              </WhatsAppLink>
              <Link href="/" className="px-6 py-4 rounded-xl text-sm font-bold text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors">
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
