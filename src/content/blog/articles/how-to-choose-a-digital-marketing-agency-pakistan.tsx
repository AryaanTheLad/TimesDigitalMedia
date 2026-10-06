import Link from "next/link";
import { Answer, Review, type Source } from "@/components/ArticleParts";

export const sources: Source[] = [];

const QUESTIONS = [
  "Will the ads run in ad accounts that I own?",
  "Is your fee written separately from ad spend?",
  "Who will manage my account day to day, and how experienced are they?",
  "Can I see real campaign screenshots or case studies from businesses like mine?",
  "What will you report on each month, and how will we define a qualified lead?",
  "How do you set up tracking (Pixel, Conversions API, Google tags)?",
  "Who owns the creatives, landing pages and data if we stop working together?",
  "What notice period applies if I want to leave?",
  "How quickly do you reply, and on which channel (WhatsApp, email, calls)?",
  "What would you do in the first 30 days?",
];

export default function Article() {
  return (
    <>
      <Answer>
        Choose an agency that runs your ads in accounts you own, separates its fee from ad spend in writing, shows real campaign
        evidence, reports on leads or sales rather than likes, and names who will manage your account. Compare that against a
        freelancer or an in-house hire on cost, range of skills and continuity before you sign.
      </Answer>

      <p>
        Pakistan has hundreds of digital marketing agencies and thousands of freelancers, and pitches can sound identical. This guide
        gives you a way to compare them on what actually affects your results and your risk.
      </p>

      <h2 id="options">Agency vs freelancer vs in-house</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th></th><th>Agency</th><th>Freelancer</th><th>In-house hire</th></tr>
          </thead>
          <tbody>
            <tr><td>Skills covered</td><td>Several (ads, creative, web, tracking)</td><td>Usually one or two</td><td>Depends on the hire</td></tr>
            <tr><td>Cost</td><td>Monthly fee, published or quoted</td><td>Often lowest</td><td>Salary, tools and management time</td></tr>
            <tr><td>Continuity</td><td>Team covers absences</td><td>Depends on one person</td><td>Risk if the person leaves</td></tr>
            <tr><td>Speed to start</td><td>Days</td><td>Days</td><td>Weeks to hire</td></tr>
            <tr><td>Best for</td><td>Businesses that need several skills at once</td><td>A single, well-defined task</td><td>Large, steady ongoing volume</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="checks">Five things to check before you sign</h2>
      <h3>1. You own the accounts</h3>
      <p>
        Your Meta Business portfolio, ad accounts, Pages, Google Ads account and analytics should belong to your business, with the
        agency added as a partner. If an agency runs ads from its own account, you lose your data and history when you leave.
      </p>
      <h3>2. Fee and ad spend are separate</h3>
      <p>
        Ask for the management fee and the ad budget as two separate lines. Ideally ad spend is billed by Meta or Google directly to
        your card, so you can see every rupee.
      </p>
      <h3>3. Real evidence</h3>
      <p>
        Ask for Ads Manager or Google Ads screenshots, or case studies with a clear brief, approach and result. Logos alone don&apos;t
        tell you what the agency actually did.
      </p>
      <h3>4. Reporting on outcomes</h3>
      <p>
        Likes and reach are useful, but you should be able to see leads, cost per lead, sales or ROAS each month. Agree what counts
        as a <em>qualified</em> lead up front. Our guide to <Link href="/blog/what-is-a-good-roas">ROAS and break-even maths</Link>{" "}
        helps here.
      </p>
      <h3>5. A named person</h3>
      <p>Know who is running your campaigns day to day, not just who sold you the package.</p>

      <h2 id="questions">Ten questions to ask on the first call</h2>
      <ol>
        {QUESTIONS.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ol>

      <h2 id="red-flags">Red flags</h2>
      <ul>
        <li>Promises of an exact number of leads, sales or followers before they&apos;ve seen your account.</li>
        <li>Refusing to give you admin access, or running ads from their own ad account.</li>
        <li>Ad spend bundled into one fee with no breakdown.</li>
        <li>Selling followers or engagement.</li>
        <li>No written scope of work.</li>
      </ul>

      <h2 id="pricing">What should it cost?</h2>
      <p>
        Pricing varies widely across Pakistan, from small freelancer retainers to large agency contracts, so compare what&apos;s
        included rather than headline prices. We publish ours: Times Digital Media&apos;s packages start at Rs 30,000 a month and the
        Growth Campaign starts at Rs 70,000 a month, tax-inclusive, with ad spend billed to your own account. Both are starting
        prices that we adjust to each client&apos;s requirements. See{" "}
        <Link href="/pricing">full pricing</Link>.
      </p>

      <Review note="Owner to confirm this description of how TDM differs">
        <h2 id="tdm">Where Times Digital Media fits</h2>
        <p>
          We&apos;re a Lahore-based <Link href="/services/performance-marketing-lead-generation">performance marketing agency</Link>.
          Campaigns run in your accounts, our fees are published in PKR, and alongside paid ads we can distribute your brand on our own
          media network. If that sounds right, start with a <Link href="/free-growth-audit">free growth audit</Link>; if it doesn&apos;t,
          the checklist above still applies to whoever you choose.
        </p>
      </Review>
    </>
  );
}
