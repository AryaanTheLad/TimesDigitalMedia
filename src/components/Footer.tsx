"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith("http")) return; // ignore external links
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();

    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1.0s: relaxed, elegant, premium motion
    let start: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        html.style.scrollBehavior = originalScrollBehavior;
      }
    };

    requestAnimationFrame(animation);
  };

  const handleScrollTop = () => {
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const startPosition = window.scrollY;
    const distance = -startPosition;
    const duration = 1000; // 1.0s: relaxed, elegant, premium motion
    let start: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        html.style.scrollBehavior = originalScrollBehavior;
      }
    };

    requestAnimationFrame(animation);
  };

  const footerLinks = {
    agency: [
      { label: "Who We Are", href: "/#about", targetId: "about" },
      { label: "Reach & Demographics", href: "/#proof", targetId: "proof" },
      { label: "News Portal", href: "https://www.timesofislamabad.com", targetId: "https://www.timesofislamabad.com" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy", targetId: "" },
      { label: "Terms of Service", href: "/terms", targetId: "" },
    ]
  };

  return (
    <footer className="relative bg-zinc-50 border-t border-zinc-200 pt-16 pb-8 overflow-hidden">
      {/* Subtle bottom grid overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-zinc-200 items-start">
          
          {/* Logo & Pitch */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-start">
            <a href="/" className="text-xl font-bold tracking-tight text-zinc-900 flex items-center gap-1 hover:opacity-85 transition-opacity">
              TIMES <span style={{ color: "#E8000E" }} className="font-extrabold">DIGITAL MEDIA</span>
            </a>
            <p className="text-xs sm:text-sm text-zinc-700 max-w-md font-bold leading-relaxed">
              Pakistan’s premier online English news agency presents a powerful and lucrative advertising platform for brands, corporations, and businesses seeking high-impact digital visibility and meaningful audience engagement.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/timesofislamabadurdu"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-[#E8000E] hover:bg-zinc-200/50 transition-all"
                aria-label="Facebook Link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/timesofislamabad/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-[#E8000E] hover:bg-zinc-200/50 transition-all"
                aria-label="Instagram Link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://x.com/TimesofIslambad"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-[#E8000E] hover:bg-zinc-200/50 transition-all"
                aria-label="X Link"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column - Symmetrical, vertically aligned, and horizontally spaced */}
          <div className="lg:col-span-7 flex flex-col items-center w-full">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-center">
              The Agency
            </span>
            <ul className="flex flex-col sm:flex-row flex-wrap gap-x-16 gap-y-3 justify-center items-center w-full mt-14">
              {footerLinks.agency.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.targetId.startsWith("http") ? "_blank" : undefined}
                    rel={link.targetId.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={(e) => !link.targetId.startsWith("http") && handleScrollToSection(e, link.targetId)}
                    className="text-xs sm:text-sm text-zinc-700 font-bold hover:text-[#E8000E] transition-colors duration-300 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-[11px] text-zinc-600 font-bold uppercase tracking-wider">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
            <span>&copy; {currentYear} TIMES DIGITAL MEDIA. ALL RIGHTS RESERVED.</span>
            <div className="flex flex-wrap justify-center gap-4 border-t sm:border-t-0 border-zinc-200 pt-4 sm:pt-0">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-zinc-950 font-bold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 font-bold transition-all duration-300 group"
          >
            Back To Top
            <ArrowUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
