"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution } from "@/lib/analytics";
import { TRACKING } from "@/data/tracking";

/** Stores UTM/click IDs for form payloads and sends Meta PageView on client-side navigation. */
export default function AttributionCapture() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    captureAttribution();
  }, []);

  useEffect(() => {
    // The base Pixel snippet already tracks the initial page load.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (TRACKING.metaPixelId) window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
