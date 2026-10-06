import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { SITE } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Times Digital Media collects, uses and protects information submitted through timesdigitalmedia.co, including forms, analytics and advertising tags.",
  path: "/privacy",
});

const ul = "list-disc pl-6 flex flex-col gap-2";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      updated="6 October 2026"
      intro={
        <>
          <p>
            This policy explains what information Times Digital Media (&quot;TDM&quot;, &quot;we&quot;) collects when you use{" "}
            {SITE.url.replace("https://", "")}, why we collect it, and the choices you have. TDM is a performance marketing agency based in
            Lahore, Pakistan. Questions: <a href={`mailto:${SITE.email}`} className="font-bold underline">{SITE.email}</a>.
          </p>
        </>
      }
    >
      <LegalSection title="Information you give us">
        <p>When you fill in a form on this site we receive what you enter:</p>
        <ul className={ul}>
          <li><strong>Free growth audit:</strong> website or Instagram handle, what you sell, whether you run ads, budget range, goal, name, email and (optionally) WhatsApp number.</li>
          <li><strong>Contact form:</strong> name, email, phone (optional), ad spend, challenges, message and any package you selected.</li>
          <li><strong>Media network inquiry:</strong> name, email, phone (optional), company, website, formats, dates, budget and message.</li>
        </ul>
        <p>If you contact us by WhatsApp, phone or email, we receive the details and messages you send.</p>
      </LegalSection>

      <LegalSection title="Information collected automatically">
        <ul className={ul}>
          <li><strong>Analytics:</strong> Google Analytics 4 and Vercel Web Analytics record pages viewed, device and browser type, approximate location and how you arrived at the site.</li>
          <li><strong>Advertising measurement:</strong> Google Ads tags record conversions such as calls and form submissions. If enabled, the Meta Pixel and Meta Conversions API record page views and leads; for leads, your email and phone are hashed (one-way encrypted) before being sent to Meta.</li>
          <li><strong>Campaign source:</strong> if you arrive from an ad or link with tracking parameters (for example utm_source, gclid or fbclid), we store them in your browser for that session and attach them to any form you submit, so we know which campaign brought you.</li>
          <li><strong>Server logs:</strong> our hosting provider, Vercel, processes technical data such as IP address and request times to deliver and secure the site.</li>
          <li><strong>Embedded videos:</strong> when you play an Instagram or YouTube video on a case-study page, that platform may set its own cookies.</li>
        </ul>
      </LegalSection>

      <LegalSection title="How we use information">
        <ul className={ul}>
          <li>To reply to you and prepare the audit, proposal or quote you asked for.</li>
          <li>To provide our services if you become a client.</li>
          <li>To measure which marketing brings inquiries and to improve our own advertising.</li>
          <li>To keep the site secure and working.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection title="Who we share it with">
        <p>We use these service providers, who process data on our behalf or under their own terms:</p>
        <ul className={ul}>
          <li><strong>Formspree</strong>: receives form submissions and emails them to us.</li>
          <li><strong>Google</strong>: Analytics and Ads measurement.</li>
          <li><strong>Meta</strong>: Pixel and Conversions API, when enabled.</li>
          <li><strong>Vercel</strong>: website hosting and privacy-friendly analytics.</li>
        </ul>
        <p>We may also disclose information if required by law.</p>
      </LegalSection>

      <LegalSection title="Cookies and your choices">
        <p>
          Google and Meta tags use cookies or similar technologies. For visitors in the European Economic Area, the UK and Switzerland,
          advertising and analytics storage is off by default. You can block or delete cookies in your browser settings, opt out of
          Google Analytics with Google&apos;s browser add-on, and manage ad personalisation in your Google and Meta account settings.
        </p>
      </LegalSection>

      <LegalSection title="Client campaign data">
        <p>
          When we manage advertising for a client, we work inside the client&apos;s own ad accounts with the access they grant. That data
          remains the client&apos;s and is handled under the platforms&apos; terms and our agreement with the client.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep inquiry details for as long as needed to respond and follow up, and client records for as long as the business
          relationship and our legal obligations require. Analytics data is kept according to the retention settings of each tool.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          You can ask us what information we hold about you, ask us to correct or delete it, or ask us to stop contacting you. Email{" "}
          <a href={`mailto:${SITE.email}`} className="font-bold underline">{SITE.email}</a> and we&apos;ll respond within a reasonable time.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>This site is for businesses and is not directed at children under 18. We don&apos;t knowingly collect their information.</p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We&apos;ll post any changes on this page and update the date above. See also our <Link href="/terms" className="font-bold underline">Terms of Service</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
