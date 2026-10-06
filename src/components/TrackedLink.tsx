"use client";

import Link from "next/link";
import { trackCta } from "@/lib/analytics";

/** next/link that records a cta_click event. Lets server components track CTAs. */
export default function TrackedLink({
  cta,
  location,
  ...props
}: React.ComponentProps<typeof Link> & { cta: string; location: string }) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackCta(cta, location);
        props.onClick?.(e);
      }}
    />
  );
}
