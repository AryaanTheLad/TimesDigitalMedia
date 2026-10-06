"use client";

import { whatsappHref } from "@/data/site";
import { trackWhatsAppClick } from "@/lib/analytics";

/** WhatsApp click-to-chat link with tracking. Usable from server components. */
export default function WhatsAppLink({
  location,
  text,
  className,
  children,
}: {
  location: string;
  text?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={whatsappHref(text)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(location)}
      className={className}
    >
      {children}
    </a>
  );
}
