import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import Placeholder from "@/components/Placeholder";
import { SITE } from "@/data/site";
import { AD_SPEND_NOTE, PRICING_NOTES } from "@/data/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms for using timesdigitalmedia.co and for Times Digital Media's marketing services, pricing, ad spend and media network placements.",
  path: "/terms",
});

const ul = "list-disc pl-6 flex flex-col gap-2";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      updated="6 October 2026"
      intro={
        <>
          <p>
            These terms cover your use of {SITE.url.replace("https://", "")} and the basis on which Times Digital Media (&quot;TDM&quot;,
            &quot;we&quot;), a performance marketing agency based in Lahore, Pakistan, provides its services. By using this website you agree to them.
          </p>
          <Placeholder>[[TODO: confirm TDM&apos;s registered legal entity name and registration details, if any, and add them here]]</Placeholder>
        </>
      }
    >
      <LegalSection title="1. Using this website">
        <p>
          You may browse and share this website for lawful purposes. Articles and guides are general information, not legal, tax or
          financial advice. Platform rules, prices and taxes change, so check current details before acting on them.
        </p>
      </LegalSection>

      <LegalSection title="2. Our services and pricing">
        <ul className={ul}>
          <li>The scope of any engagement is set out in the proposal or agreement we send you, which takes priority over this website.</li>
          <li>Package prices on our <Link href="/pricing" className="font-bold underline">pricing page</Link> are monthly management fees in PKR. They are starting prices, not final, and are adjusted to each client&apos;s requirements in your proposal. {PRICING_NOTES.taxInclusive}</li>
          <li>{AD_SPEND_NOTE}</li>
          <li>{PRICING_NOTES.addOns} {PRICING_NOTES.international}</li>
          <li>We may update published prices; changes don&apos;t affect an agreement already in place for its current term.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Results">
        <p>
          We work toward the goals we agree with you, including our commitment to more qualified leads within 30 days. Advertising
          results also depend on things outside our control, such as platform auctions and policies, your offer and pricing, your
          follow-up, and market conditions, so we don&apos;t promise any specific number of leads, sales or return on ad spend.
        </p>
      </LegalSection>

      <LegalSection title="4. Ad accounts and platform policies">
        <ul className={ul}>
          <li>Campaigns run in ad accounts you own. You can remove our access at any time.</li>
          <li>You are responsible for paying Meta, Google and other platforms for ad spend, and for keeping a working payment method on file.</li>
          <li>All ads must follow the platforms&apos; advertising policies. Platforms can reject ads or restrict accounts independently of us; we&apos;ll help you respond, but we can&apos;t control their decisions.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Materials you provide">
        <p>
          You keep ownership of the logos, images, videos, copy and other materials you give us. You give us permission to use and
          adapt them to deliver your campaigns, and you confirm you have the rights to do so and that they don&apos;t break any law.
        </p>
      </LegalSection>

      <LegalSection title="6. Case studies">
        <p>
          With a client&apos;s agreement, we may show their name, logo, creative and results as examples of our work. Tell us if you&apos;d
          prefer we didn&apos;t.
        </p>
      </LegalSection>

      <LegalSection title="7. Media network placements">
        <p>
          Sponsored posts and placements on the TDM media network are subject to availability and to the network&apos;s content
          standards. We may decline or ask for changes to content that is misleading, unlawful or unsuitable for the audience.
        </p>
      </LegalSection>

      <LegalSection title="8. Our content">
        <p>
          The design, text and code of this website belong to Times Digital Media. Client names, logos and creative belong to their
          owners. Don&apos;t copy or republish our content for commercial use without permission.
        </p>
      </LegalSection>

      <LegalSection title="9. Liability">
        <p>
          We provide this website as it is and can&apos;t promise it will always be available or error-free. To the extent the law allows,
          we aren&apos;t liable for indirect or consequential losses arising from use of this website. Liability for services is set out
          in your agreement with us.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing law">
        <p>These terms are governed by the laws of Pakistan.</p>
        <Placeholder>[[REVIEW: confirm governing law and jurisdiction (e.g. courts of Lahore)]]</Placeholder>
      </LegalSection>

      <LegalSection title="11. Changes and contact">
        <p>
          We may update these terms and will change the date above when we do. Questions:{" "}
          <a href={`mailto:${SITE.email}`} className="font-bold underline">{SITE.email}</a>. See also our{" "}
          <Link href="/privacy" className="font-bold underline">Privacy Policy</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
