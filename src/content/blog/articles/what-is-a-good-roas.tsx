import Link from "next/link";
import { Answer, Cite, Review, type Source } from "@/components/ArticleParts";

export const sources: Source[] = [
  { id: 1, title: "Set up Target ROAS bidding", publisher: "Google Ads Help", url: "https://support.google.com/google-ads/answer/6309035", date: "2026-10-06" },
  { id: 2, title: "Meta Ads Manager screenshots from TDM-managed campaigns", publisher: "Times Digital Media", url: "https://timesdigitalmedia.co/#proof", date: "2026-03-05", note: "Client names hidden. Specific campaigns and dates; not a benchmark." },
];

const MARGINS = [20, 30, 40, 50, 60];

export default function Article() {
  return (
    <>
      <Answer>
        A good ROAS is any ROAS above your break-even point, and that depends on your profit margin. Break-even ROAS = 1 ÷ your
        gross margin. At a 40% margin you break even at 2.5x (Rs 2.50 back for every Rs 1 of ads); at 25% you need 4x. There&apos;s no
        universal &quot;good&quot; number, so work out yours before judging any campaign.
      </Answer>

      <h2 id="definition">What ROAS means</h2>
      <p>
        ROAS (return on ad spend) is the revenue your ads produce divided by what you spent on them. Google describes it as the
        conversion value you get for each unit of currency spent: Rs 5 of sales for every Rs 1 of ads is a ROAS of 5x, or
        500%.<Cite n={1} />
      </p>
      <p><strong>ROAS = revenue from ads ÷ ad spend</strong></p>

      <h2 id="break-even">Work out your break-even ROAS</h2>
      <p>
        ROAS counts revenue, not profit. If your products cost 60% of their price to make and deliver, only 40% of every sale is
        left to pay for ads. So you need at least Rs 2.50 of sales for each Rs 1 of ad spend just to break even.
      </p>
      <p><strong>Break-even ROAS = 1 ÷ gross margin</strong></p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Gross margin (after product, delivery and payment costs)</th><th>Break-even ROAS</th></tr>
          </thead>
          <tbody>
            {MARGINS.map((m) => (
              <tr key={m}>
                <td>{m}%</td>
                <td>{(100 / m).toFixed(2).replace(/\.00$/, "")}x</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Anything above break-even is profit before your other costs. To include an agency fee or salaries, add them to ad spend:
        <strong> total ROAS = revenue ÷ (ad spend + management costs)</strong>.
      </p>

      <h3>Worked example</h3>
      <p>
        A clothing store with a 45% margin spends Rs 100,000 on Meta ads and records Rs 400,000 in sales. ROAS is 4x. Break-even is
        1 ÷ 0.45 ≈ 2.2x, so the campaign is profitable. Gross profit is Rs 180,000 (45% of sales), which leaves Rs 80,000 after ad
        spend. If a Rs 70,000 monthly management fee is included, the true ROAS is 400,000 ÷ 170,000 ≈ 2.35x, still just above
        break-even.
      </p>

      <h2 id="lead-gen">If you sell through leads, not checkout</h2>
      <p>
        Real estate, education and service businesses rarely see revenue inside the ad platform. Use cost per lead instead, and work
        out the most you can afford to pay:
      </p>
      <p><strong>Maximum cost per lead = profit per customer × lead-to-customer rate</strong></p>
      <p>
        If one new student is worth Rs 150,000 in profit and 1 in 40 inquiries enrols (2.5%), you can afford up to Rs 3,750 per
        inquiry and still break even. Track which leads convert so you can judge campaigns on <em>qualified</em> leads.
      </p>

      <h2 id="caveats">Why platform ROAS can mislead</h2>
      <ul>
        <li><strong>Attribution windows.</strong> Platforms credit sales that happen days after a click or view, and two platforms can both claim the same sale.</li>
        <li><strong>Broken tracking.</strong> Duplicate or missing purchase events inflate or hide results. Check the platform against your store or bank records.</li>
        <li><strong>Returns and cancellations.</strong> Cash-on-delivery refusals and returns aren&apos;t subtracted automatically.</li>
        <li><strong>Short windows.</strong> A great four-day ROAS can fade as you scale. Judge over weeks, not days.</li>
      </ul>

      <h2 id="our-numbers">What we&apos;ve seen</h2>
      <Review note="Add product/margin context if the client agrees">
        <p>
          On purchase campaigns we manage, Meta Ads Manager has reported a 9.39x ROAS (63 website purchases, Rs 288,607 in sales from
          Rs 30,720 of spend over 2–5 March 2026), 8.84x on a single ad set, and 9.15x on a campaign with 977 purchases.<Cite n={2} />{" "}
          These are platform-reported figures for specific campaigns and dates. They show what&apos;s possible with the right offer and
          tracking, not what every business should expect.
        </p>
      </Review>

      <p>
        Want us to work out your break-even ROAS and check whether your tracking is telling the truth? Start with a{" "}
        <Link href="/free-growth-audit">free growth audit</Link>, or see our{" "}
        <Link href="/services/performance-marketing-lead-generation">performance marketing service</Link>.
      </p>
    </>
  );
}
