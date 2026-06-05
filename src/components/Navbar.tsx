"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about", targetId: "" },
  { label: "Services", href: "/#services", targetId: "services" },
  { label: "Portfolio", href: "/portfolio", targetId: "" },
  { label: "Metrics", href: "/#proof", targetId: "proof" },
  { label: "Packages", href: "/#packages", targetId: "packages" },
  { label: "Contact Us", href: "/contact", targetId: "" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-white/80 backdrop-blur-xl border-b border-zinc-200/80 shadow-sm"
            : "py-5 bg-white/90 backdrop-blur-xl border-b border-zinc-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 group"
          >
            <span className="text-3xl sm:text-4xl font-black tracking-tighter text-zinc-950 flex items-center gap-1.5">
              TIMES <span className="text-[#E8000E]">DIGITAL MEDIA</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.targetId)}
                className="relative text-sm font-semibold text-zinc-600 hover:text-black transition-colors duration-300 py-1 px-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden p-2 rounded-full text-zinc-500 hover:text-black hover:bg-black/5 transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[70px] z-40 md:hidden bg-white/95 backdrop-blur-2xl border-t border-black/5 px-8 py-12 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleScrollToSection(e, link.targetId);
                  }}
                  className="text-2xl font-bold text-zinc-800 hover:text-black flex items-center justify-between group"
                >
                  {link.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-500">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
