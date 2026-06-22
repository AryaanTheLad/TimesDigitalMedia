"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal the CTA after scrolling 400px (past the hero)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-0 right-0 z-40 px-6 flex justify-center md:hidden pointer-events-none"
        >
          <a
            href="#audit"
            className="pointer-events-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-black bg-white border border-white/20 shadow-[0_12px_24px_-8px_rgba(255,255,255,0.4)] active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4 text-red-600 fill-red-600/10" />
            Get My Free Growth Audit
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
