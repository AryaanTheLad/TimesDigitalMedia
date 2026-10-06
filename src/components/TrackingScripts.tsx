import Script from "next/script";
import { TRACKING } from "@/data/tracking";
import AttributionCapture from "./AttributionCapture";

/**
 * Consent Mode v2: ad/analytics storage defaults to "denied" for visitors in
 * the EEA, UK and Switzerland (where consent is legally required) and
 * "granted" elsewhere. Without a consent banner, EEA visitors stay in
 * cookieless mode. [[REVIEW]] add a consent banner if EU/UK traffic grows.
 */
const CONSENT_REGIONS = [
  "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","LV","LI","LT","LU",
  "MT","NL","NO","PL","PT","RO","SK","SI","ES","SE","GB","CH",
];

export default function TrackingScripts() {
  const { ga4Id, googleAdsId, googleAdsCallLabel, metaPixelId } = TRACKING;

  return (
    <>
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied',
            region: ${JSON.stringify(CONSENT_REGIONS)}
          });
          gtag('consent', 'default', {
            ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted'
          });
          gtag('js', new Date());
          gtag('config', '${googleAdsId}');
          gtag('config', '${ga4Id}');

          // Google Ads "click to call" conversion. Dials even if gtag.js is
          // blocked: the fallback timer fires when the callback never does.
          window.gtag_report_conversion = function (url) {
            var done = false;
            var go = function () { if (done) return; done = true; if (typeof url !== 'undefined') { window.location = url; } };
            setTimeout(go, 1000);
            gtag('event', 'conversion', {
              send_to: '${googleAdsId}/${googleAdsCallLabel}',
              value: 1.0,
              currency: 'PKR',
              event_callback: go
            });
            return false;
          };
        `}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />

      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      <AttributionCapture />
    </>
  );
}
