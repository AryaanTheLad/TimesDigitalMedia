"use client";

import { SITE } from "@/data/site";
import { handlePhoneClick } from "@/lib/analytics";

/** tel: link that fires the phone_click event and the Google Ads call conversion. */
export default function PhoneLink({ location, className, children }: { location: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={`tel:${SITE.phone.e164}`} onClick={(e) => handlePhoneClick(e, location, SITE.phone.e164)} className={className}>
      {children}
    </a>
  );
}
