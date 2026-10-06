import Link from "next/link";
import { Answer, Cite, Review, type Source } from "@/components/ArticleParts";

export const sources: Source[] = [
  { id: 1, title: "Digital 2026: Pakistan", publisher: "DataReportal", url: "https://datareportal.com/reports/digital-2026-pakistan", date: "2026-10-06", note: "Platform ad-reach figures refer to late 2025." },
  { id: 2, title: "About ad auctions", publisher: "Meta Business Help Center", url: "https://www.facebook.com/business/help/430291176997542", date: "2026-10-06" },
  { id: 3, title: "YouTube & partners ad formats", publisher: "Display & Video 360 Help (Google)", url: "https://support.google.com/displayvideo/answer/6274216", date: "2026-10-06" },
  { id: 4, title: "Set up Target ROAS bidding", publisher: "Google Ads Help", url: "https://support.google.com/google-ads/answer/6309035", date: "2026-10-06" },
];

export default function Article() {
  return (
    <>
      <Answer>
        Use Google Ads when people already search for what you sell: it captures existing demand. Use Meta Ads (Facebook and
        Instagram) to reach people who fit your customer profile before they search: it creates demand. Most growing businesses
        need both, with Meta building interest and Google catching people when they&apos;re ready to act.
      </Answer>

      <p>
        Picking between Meta and Google isn&apos;t really about which platform is &quot;better&quot;. They do different jobs. This
        comparison explains the difference in plain terms and shows which to start with for common Pakistani businesses.
      </p>

      <h2 id="difference">The core difference: intent vs interest</h2>
      <p>
        On <strong>Google Search</strong>, someone types &quot;university admissions Lahore&quot; or &quot;AC repair DHA&quot;. They have
        told you what they want. Your ad appears at the moment of intent.
      </p>
      <p>
        On <strong>Facebook and Instagram</strong>, nobody is searching. Meta shows your ad to people its system predicts are likely to
        take your chosen action, based on how they behave.<Cite n={2} /> You interrupt their scrolling with something worth stopping
        for, which is why creative matters so much on Meta.
      </p>

      <h2 id="table">Meta Ads vs Google Ads at a glance</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th></th><th>Meta Ads (Facebook &amp; Instagram)</th><th>Google Ads (Search, YouTube, Performance Max)</th></tr>
          </thead>
          <tbody>
            <tr><td>Best at</td><td>Creating demand; reaching people before they search</td><td>Capturing demand from people already searching</td></tr>
            <tr><td>Targeting</td><td>Interests, demographics, behaviour, lookalikes, retargeting</td><td>Keywords and search intent; audiences and placements on YouTube</td></tr>
            <tr><td>What wins</td><td>Strong creative and a clear offer</td><td>Relevant keywords, ads and landing pages</td></tr>
            <tr><td>Formats</td><td>Images, carousels, Reels, Stories, instant forms, WhatsApp click-to-chat</td><td>Text ads, Shopping, YouTube video (skippable, 6-second bumpers, Shorts)<Cite n={3} /></td></tr>
            <tr><td>Reach in Pakistan (late 2025)</td><td>Facebook 52.9M, Instagram 22.4M ad reach<Cite n={1} /></td><td>YouTube 54.3M ad reach<Cite n={1} /></td></tr>
            <tr><td>Typical role</td><td>Top and middle of the funnel, retargeting</td><td>Bottom of the funnel; YouTube for awareness</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="which-first">Which should you start with?</h2>
      <Review note="Confirm these recommendations reflect TDM's experience by industry">
        <h3>Start with Google Ads if…</h3>
        <ul>
          <li>people already search for your service (repairs, clinics, legal, B2B services, study-abroad consultants);</li>
          <li>you sell to a local area and want calls; or</li>
          <li>your customers compare options before buying.</li>
        </ul>
        <h3>Start with Meta Ads if…</h3>
        <ul>
          <li>your product is visual or impulse-friendly (fashion, food, beauty, events);</li>
          <li>you&apos;re launching something new that nobody searches for yet;</li>
          <li>you need volume of leads for a sales team (real estate, admissions); or</li>
          <li>your customers prefer WhatsApp over forms.</li>
        </ul>
        <h3>Use both when…</h3>
        <p>
          You have the budget to run each properly. A common pattern is Meta and YouTube to build interest, Google Search to capture
          people who then search for your brand, and Meta retargeting for everyone who visited but didn&apos;t convert.
        </p>
      </Review>

      <h2 id="measuring">Measuring them fairly</h2>
      <p>
        Each platform reports its own results and takes credit generously. Compare them on the same outcome, such as cost per{" "}
        <em>qualified</em> lead or revenue per rupee spent, using your own CRM or sales records alongside the platform numbers. Google
        defines ROAS as conversion value per unit spent (Rs 5 of sales per Rs 1 of ads is a 500% ROAS),<Cite n={4} /> and the same
        maths works for Meta. Our guide to <Link href="/blog/what-is-a-good-roas">what a good ROAS is</Link> shows how to find your
        break-even point.
      </p>

      <h2 id="budget">Splitting a budget</h2>
      <p>
        If you can only afford one platform done well, choose one. Two half-funded campaigns usually learn slowly and underperform.
        Once one channel is profitable, add the second and compare results over the same period. Ad spend on both platforms is
        separate from any agency fee. See <Link href="/blog/facebook-ads-cost-pakistan">how much Facebook ads cost</Link> and our{" "}
        <Link href="/pricing">PKR pricing</Link>.
      </p>

      <p>
        Not sure where to start? The <Link href="/free-growth-audit">free growth audit</Link> recommends a channel and starting budget
        for your business. Or read more about our <Link href="/services/meta-ads">Meta Ads</Link>,{" "}
        <Link href="/services/google-ads">Google Ads</Link> and <Link href="/services/youtube-ads">YouTube Ads</Link> services.
      </p>
    </>
  );
}
