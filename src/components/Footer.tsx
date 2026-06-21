"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith("http")) return; // ignore external links
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.scrollTo(targetPosition);
    } else {
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollTop = () => {
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion("tel:+923298223036");
    } else {
      window.location.href = "tel:+923298223036";
    }
  };

  const footerLinks = {
    agency: [
      { label: "Who We Are", href: "/about", targetId: "" },
      { label: "Reach & Demographics", href: "/#proof", targetId: "proof" },
      { label: "Growth Packages", href: "/#packages", targetId: "packages" },
      { label: "Creative Portfolio", href: "/portfolio", targetId: "" },
      { label: "News Portal", href: "https://www.timesofislamabad.com", targetId: "https://www.timesofislamabad.com" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy", targetId: "" },
      { label: "Terms of Service", href: "/terms", targetId: "" },
    ]
  };

  return (
    <footer className="w-full flex flex-col">
      
      {/* ─── Closing CTA Section ─── */}
      <div className="bg-[#09090b] text-white py-8 md:py-12 relative overflow-hidden">
        {/* Soft background grid lines */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-6">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
            Let's Collaborate
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-display tracking-tight leading-[1.05] max-w-4xl">
            Let's build your <br />
            next campaign.
          </h2>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="mt-6 inline-flex"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#09090b] bg-white hover:bg-stone-100 transition-colors shadow-sm"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ─── Simplified Footer Links ─── */}
      <div className="bg-[#09090b] border-t border-zinc-800 pt-8 pb-4 md:pt-12 md:pb-6 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Main sitemap layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-8 border-b border-zinc-800 items-start">
            
            {/* Left Brand Area */}
            <div className="lg:col-span-5 flex flex-col gap-6 items-start">
              <Link prefetch={false} href="/" className="text-lg font-black font-display tracking-tight text-white">
                TIMES <span className="text-[#E8000E]">DIGITAL MEDIA</span>
              </Link>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-body font-medium leading-relaxed">
                Pakistan’s premier digital media agency presents a powerful and lucrative advertising platform for brands, corporations, institutes and businesses seeking high impact digital visibility and meaningful audience engagement.
              </p>
            </div>

            {/* Right Sitemap links */}
            <div className="lg:col-span-7 flex flex-col items-start lg:items-end w-full gap-4">
              <div className="flex flex-col items-center w-full lg:w-fit lg:self-end gap-3.5">
                {/* Row 1: Who We Are, Creative Portfolio, Reach & Demographics */}
                <ul className="flex flex-wrap gap-x-12 gap-y-3 justify-center items-center">
                  {footerLinks.agency.slice(0, 3).map((link) => (
                    <li key={link.label}>
                      {!link.targetId ? (
                        <Link
                          href={link.href}
                          className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#E8000E] transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target={link.targetId.startsWith("http") ? "_blank" : undefined}
                          rel={link.targetId.startsWith("http") ? "noopener noreferrer" : undefined}
                          onClick={(e) => !link.targetId.startsWith("http") && handleScrollToSection(e, link.targetId)}
                          className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#E8000E] transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Row 2: Growth Packages, News Portal (Centered relative to Row 1) */}
                <ul className="flex flex-wrap gap-x-12 gap-y-3 justify-center items-center">
                  {footerLinks.agency.slice(3).map((link) => (
                    <li key={link.label}>
                      {!link.targetId ? (
                        <Link
                          href={link.href}
                          className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#E8000E] transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target={link.targetId.startsWith("http") ? "_blank" : undefined}
                          rel={link.targetId.startsWith("http") ? "noopener noreferrer" : undefined}
                          onClick={(e) => !link.targetId.startsWith("http") && handleScrollToSection(e, link.targetId)}
                          className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#E8000E] transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center w-full lg:w-fit lg:self-end gap-3.5 mt-2">
                {/* Direct Contacts */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-xs font-mono font-bold text-zinc-400">
                  <a 
                    href="mailto:thetimesdigitalmedia@gmail.com" 
                    className="flex items-center gap-2 hover:text-[#E8000E] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#E8000E]" />
                    <span>thetimesdigitalmedia@gmail.com</span>
                  </a>
                  <a 
                    href="tel:+923298223036" 
                    onClick={handlePhoneClick}
                    className="flex items-center gap-2 hover:text-[#E8000E] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E8000E]" />
                    <span>+92 329 8223036</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-5">
                  <a 
                    href="https://www.facebook.com/timesofislamabadurdu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#E8000E] transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/timesdigitalmedia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#E8000E] transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/TimesofIslambad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#E8000E] transition-all duration-300 hover:scale-110"
                    aria-label="X (formerly Twitter)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
              <span>&copy; {currentYear} TIMES DIGITAL MEDIA. ALL RIGHTS RESERVED.</span>
              <div className="flex gap-4">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-white text-zinc-300 hover:text-white transition-all duration-300 group cursor-pointer"
            >
              Back To Top
              <ArrowUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
