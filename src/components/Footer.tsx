"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ENTITY, SITE, SOCIALS, NETWORK_PROPERTIES, whatsappHref } from "@/data/site";
import { SERVICES } from "@/data/services";
import { handlePhoneClick, trackCta, trackEmailClick, trackWhatsAppClick } from "@/lib/analytics";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  instagram: (
    <>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </>
  ),
  x: (
    <>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </>
  ),
};

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Media Network", href: "/media-network" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (y: number) => void } }).lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass = "text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#E8000E] transition-colors duration-300 inline-flex min-h-[32px] items-center";

  return (
    <footer className="w-full flex flex-col">

      {/* ─── Closing CTA Section ─── */}
      <div className="bg-[#09090b] text-white py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-6">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
            Let&apos;s Collaborate
          </span>

          <p className="text-4xl sm:text-5xl md:text-7xl font-black font-display tracking-tight leading-[1.05] max-w-4xl">
            Let&apos;s build your <br />
            next campaign.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="inline-flex"
            >
              <Link
                href="/free-growth-audit"
                onClick={() => trackCta("free_growth_audit", "footer")}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#09090b] bg-white hover:bg-stone-100 transition-colors shadow-sm"
              >
                Get My Free Growth Audit
              </Link>
            </motion.div>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("footer_cta")}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white border border-zinc-700 hover:border-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>

      {/* ─── Footer Links ─── */}
      <div className="bg-[#09090b] border-t border-zinc-800 pt-8 pb-4 md:pt-12 md:pb-6 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-8 border-b border-zinc-800 items-start">

            {/* Brand + entity description */}
            <div className="lg:col-span-5 flex flex-col gap-6 items-start">
              <Link prefetch={false} href="/" className="text-lg font-black font-display tracking-tight text-white">
                TIMES <span className="text-[#E8000E]">DIGITAL MEDIA</span>
              </Link>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-body font-medium leading-relaxed">
                {ENTITY.description}
              </p>

              {/* Direct contacts */}
              <div className="flex flex-col gap-3 text-xs font-mono font-bold text-zinc-400">
                <a
                  href={`mailto:${SITE.email}`}
                  onClick={() => trackEmailClick("footer")}
                  className="flex items-center gap-2 hover:text-[#E8000E] transition-colors min-h-[32px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E8000E]" aria-hidden="true" />
                  <span>{SITE.email}</span>
                </a>
                <a
                  href={`tel:${SITE.phone.e164}`}
                  onClick={(e) => handlePhoneClick(e, "footer", SITE.phone.e164)}
                  className="flex items-center gap-2 hover:text-[#E8000E] transition-colors min-h-[32px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E8000E]" aria-hidden="true" />
                  <span>{SITE.phone.display}</span>
                </a>
                <span className="text-zinc-500">Lahore, Pakistan · serving clients across Pakistan and abroad</span>
              </div>
            </div>

            {/* Services */}
            <nav aria-label="Services" className="lg:col-span-3">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-4">Services</h2>
              <ul className="flex flex-col gap-1">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className={linkClass}>{s.shortName}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Company */}
            <nav aria-label="Company" className="lg:col-span-2">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-4">Company</h2>
              <ul className="flex flex-col gap-1">
                {COMPANY_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social profiles: which are TDM's own and which are part of the network */}
            <div className="lg:col-span-2">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-4">Follow</h2>
              <ul className="flex flex-col gap-3">
                {SOCIALS.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex items-center gap-2.5 text-zinc-300 hover:text-[#E8000E] transition-colors min-h-[32px]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0" aria-hidden="true">
                        {SOCIAL_ICONS[social.platform]}
                      </svg>
                      <span className="flex flex-col leading-tight">
                        <span className="text-xs font-bold">{social.handle}</span>
                        <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-500">
                          {social.owner === "tdm" ? "TDM" : "TDM network"}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={NETWORK_PROPERTIES.newsPortal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col leading-tight text-zinc-300 hover:text-[#E8000E] transition-colors min-h-[32px]"
                  >
                    <span className="text-xs font-bold">{NETWORK_PROPERTIES.newsPortal.name}</span>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-500">News portal · TDM network</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
              <span>&copy; {currentYear} TIMES DIGITAL MEDIA. ALL RIGHTS RESERVED.</span>
              <div className="flex gap-4">
                {LEGAL_LINKS.map((link) => (
                  <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleScrollTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-white text-zinc-300 hover:text-white transition-all duration-300 group cursor-pointer min-h-[44px]"
            >
              Back To Top
              <ArrowUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
