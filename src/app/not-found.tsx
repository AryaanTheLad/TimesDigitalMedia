import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Times Digital Media" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-transparent pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E8000E]">Error 404</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05]">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-5 text-base text-[#57534E] font-medium leading-relaxed max-w-xl">
            The link may be old or mistyped. Here are the places most people are looking for:
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/" className="inline-flex justify-center px-6 py-4 rounded-xl text-sm font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors">
              Homepage
            </Link>
            <Link href="/free-growth-audit" className="inline-flex justify-center px-6 py-4 rounded-xl text-sm font-bold text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors">
              Free growth audit
            </Link>
            <Link href="/pricing" className="inline-flex justify-center px-6 py-4 rounded-xl text-sm font-bold text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors">
              Pricing
            </Link>
          </div>
          <h2 className="mt-12 text-lg font-black tracking-tight text-[#09090b]">Services</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm font-bold text-[#57534E] hover:text-[#E8000E] underline-offset-4 hover:underline">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
