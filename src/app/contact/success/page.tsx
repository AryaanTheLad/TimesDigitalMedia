"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-white pt-20">
        <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
          {/* 
            ========================================================================
            GOOGLE ADS CONVERSION TRACKING PIXEL PLACEHOLDER
            ========================================================================
            To activate Google Ads conversion tracking on this confirmation landing:
            1. Uncomment the script elements below.
            2. Replace 'AW-CONVERSION_ID/CONVERSION_LABEL' with your real marketing credentials.
            
            <!-- Global site tag (gtag.js) - Google Ads: AW-18207064634 -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18207064634"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18207064634');
            </script>
            
            <script>
              gtag('event', 'conversion', {
                  'send_to': 'AW-18207064634/YOUR_CONVERSION_LABEL',
                  'value': 1.0,
                  'currency': 'USD'
              });
            </script>
            ========================================================================
          */}

          {/* Decorative background grids & glow rings */}
          <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-500/[0.03] rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-xl w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-8 md:p-10 border border-zinc-200 bg-zinc-50/90 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center relative"
            >
              {/* Red horizontal highlight ribbon */}
              <div className="absolute top-0 left-10 right-10 h-[3px] bg-[#E8000E] rounded-b-full" />

              {/* Icon indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
                className="w-16 h-16 rounded-2xl bg-red-50 text-[#E8000E] border border-red-200/60 flex items-center justify-center mb-6 shadow-md shadow-red-200/40 animate-pulse"
              >
                <CheckCircle className="w-8 h-8 stroke-[1.5px]" />
              </motion.div>

              <span className="text-[10px] font-black text-[#E8000E] uppercase tracking-widest leading-none mb-3">
                Inquiry Received
              </span>

              <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 mb-4 leading-tight tracking-tight">
                Thank you!
              </h1>

              <p className="text-xs sm:text-sm text-zinc-500 font-medium mb-8 max-w-sm leading-relaxed">
                We've received your request and will contact you shortly to discuss your brand scaling goals.
              </p>

              {/* Exit option */}
              <a
                href="/"
                className="w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Back to homepage
              </a>

              {/* Quick Direct Contacts */}
              <div className="mt-8 pt-6 border-t border-zinc-200 w-full flex flex-col gap-2.5 items-center justify-center text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                <span className="text-[#E8000E] flex items-center justify-center font-bold uppercase tracking-wider">
                  Need immediate assistance?
                </span>
                <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1.5 items-center justify-center">
                  <a href="mailto:thetimesdigitalmedia@gmail.com" className="hover:text-zinc-700 transition-colors">
                    thetimesdigitalmedia@gmail.com
                  </a>
                  <span className="hidden sm:inline text-zinc-300">|</span>
                  <a href="tel:+923164461707" className="hover:text-zinc-700 transition-colors">
                    +92 316 4461707
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
