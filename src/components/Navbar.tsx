"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackCta } from "@/lib/analytics";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/portfolio" },
  { label: "Media Network", href: "/media-network" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <motion.nav
        aria-label="Main"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-white/80 backdrop-blur-xl border-b border-zinc-200/80 shadow-sm"
            : "py-5 bg-white/90 backdrop-blur-xl border-b border-zinc-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            prefetch={false}
            aria-label="Times Digital Media home"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                const lenis = (window as unknown as { lenis?: { scrollTo: (y: number) => void } }).lenis;
                if (lenis) lenis.scrollTo(0);
                else window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 group shrink-0"
          >
            <span className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black tracking-tighter text-zinc-950 flex items-center gap-1.5">
              TIMES <span className="text-[#E8000E]">DIGITAL MEDIA</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative text-sm font-semibold transition-colors duration-300 py-1 px-1 group ${isActive(link.href) ? "text-black" : "text-zinc-600 hover:text-black"}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-red-500 transition-all duration-300 ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
            <Link
              href="/free-growth-audit"
              onClick={() => trackCta("free_growth_audit", "navbar")}
              className="ml-1 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors whitespace-nowrap"
            >
              Free Audit <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex lg:hidden p-2.5 rounded-full text-zinc-600 hover:text-black hover:bg-black/5 transition-all min-w-[44px] min-h-[44px] items-center justify-center"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[70px] z-40 lg:hidden bg-white/95 backdrop-blur-2xl border-t border-black/5 px-8 py-10 flex flex-col justify-between overflow-y-auto"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.4 }}
                  key={link.href}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    prefetch={false}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="text-2xl font-bold text-zinc-800 hover:text-black flex items-center justify-between group py-2"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-500" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              href="/free-growth-audit"
              onClick={() => {
                trackCta("free_growth_audit", "mobile_menu");
                setIsMobileMenuOpen(false);
              }}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors"
            >
              Get My Free Growth Audit <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
