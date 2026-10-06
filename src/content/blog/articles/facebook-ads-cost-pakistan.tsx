import Link from "next/link";
import { Answer, Cite, Review, type Source } from "@/components/ArticleParts";

export const sources: Source[] = [
  { id: 1, title: "About ad auctions", publisher: "Meta Business Help Center", url: "https://www.facebook.com/business/help/430291176997542", date: "2026-10-06" },
  { id: 2, title: "About the learning phase", publisher: "Meta Business Help Center", url: "https://www.facebook.com/business/help/112167992830700", date: "2026-10-06" },
  { id: 3, title: "Digital 2026: Pakistan", publisher: "DataReportal", url: "https://datareportal.com/reports/digital-2026-pakistan", date: "2026-10-06", note: "Figures refer to late 2025." },
  { id: 4, title: "Meta Ads Manager screenshots from TDM-managed campaigns", publisher: "Times Digital Media", url: "https://timesdigitalmedia.co/#proof", date: "2026-03-05", note: "Client names hidden. One account, specific dates; not an industry benchmark." },
];

export default function Article() {
  return (
    <>
      <Answer>
        There&apos;s no fixed price for Facebook or Instagram ads in Pakistan. Meta sells ad space in an auction, so what you pay
        depends on your audience, objective, creative and timing. You choose the budget and can start small. In campaigns we
        manage, we&apos;ve seen a reach CPM of Rs 16.39 and purchase campaigns at Rs 215–488 per sale. Treat those as examples,
        not benchmarks.
      </Answer>

      <p>
        &quot;How much do Facebook ads cost?&quot; is the first question most business owners ask us, and the honest answer is that
        Meta doesn&apos;t publish a rate card. This guide explains what actually sets the price, shows real numbers from campaigns we
        run, and gives you a way to work out a starting budget in rupees.
      </p>

      <h2 id="how-pricing-works">How Facebook ad pricing works</h2>
      <p>
        Every time someone opens Facebook or Instagram, Meta runs an auction to decide which ad to show. The winner isn&apos;t simply
        the highest bidder. Meta calculates a &quot;total value&quot; for each ad from three things: the advertiser&apos;s bid, an
        estimate of how likely this person is to take the action the advertiser wants, and the ad&apos;s quality.<Cite n={1} /> A
        relevant, well-made ad can win an auction against a bigger bid.
      </p>
      <p>You pay in one of a few ways depending on how you set the campaign up:</p>
      <ul>
        <li><strong>CPM</strong>: cost per 1,000 impressions. Most campaigns are charged this way.</li>
        <li><strong>CPC</strong>: cost per link click.</li>
        <li><strong>Cost per result</strong>: what you end up paying per lead, message or purchase. This is the number that matters for your business.</li>
      </ul>

      <h2 id="what-affects-cost">What makes Facebook ads cheaper or more expensive in Pakistan</h2>
      <h3>1. Your campaign objective</h3>
      <p>
        Asking Meta for reach is cheaper per impression than asking for purchases, because Meta shows purchase-optimised ads to the
        smaller group of people most likely to buy. Compare costs per result, not just CPM.
      </p>
      <h3>2. Who you target</h3>
      <p>
        Pakistan&apos;s Facebook ad audience is large but uneven. DataReportal puts Facebook&apos;s ad reach in Pakistan at 52.9 million
        people in late 2025 and Instagram&apos;s at 22.4 million, with Facebook&apos;s adult ad audience about 79% male.<Cite n={3} />{" "}
        Narrow audiences, especially women or high-income segments in one city, compete for fewer people and usually cost more per
        impression.
      </p>
      <Review note="Confirm seasonality pattern from TDM accounts">
        <h3>3. Season and competition</h3>
        <p>
          Costs rise when many advertisers chase the same people at once. In Pakistan that typically means Ramadan and Eid, Azadi
          (August) and end-of-season sales, and university admissions windows. Plan launches and budgets around these periods.
        </p>
      </Review>
      <h3>4. Creative and offer</h3>
      <p>
        Because ad quality and expected engagement feed into the auction,<Cite n={1} /> a clear offer and a strong first three seconds
        of video lower your costs. Tired creative that people scroll past does the opposite.
      </p>
      <h3>5. Tracking</h3>
      <p>
        If the Meta Pixel and Conversions API aren&apos;t recording your leads or sales properly, Meta optimises toward the wrong people
        and cost per result climbs. Fixing tracking is often the cheapest way to cut costs.
      </p>

      <h2 id="real-numbers">Real numbers from campaigns we manage</h2>
      <p>These come from Meta Ads Manager screenshots published on our homepage.<Cite n={4} /></p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Campaign</th><th>Spend</th><th>Result</th><th>Cost</th></tr>
          </thead>
          <tbody>
            <tr><td>Reach (awareness)</td><td>Not shown</td><td>30,277 people reached, 34,277 impressions</td><td>Rs 16.39 CPM</td></tr>
            <tr><td>Website purchases, 2–5 March 2026</td><td>Rs 30,719.61</td><td>63 purchases, Rs 288,607 in sales (9.39x ROAS)</td><td>≈ Rs 488 per purchase</td></tr>
            <tr><td>Single ad set, purchases</td><td>Rs 17,837.22</td><td>Rs 157,650 in sales (8.84x ROAS)</td><td>Rs 214.91 per purchase</td></tr>
          </tbody>
        </table>
      </div>
      <Review note="Add industry/product context for these campaigns if the client agrees">
        <p>
          These are one set of accounts over specific dates, not averages for Pakistan. A Lahore restaurant, a Karachi fashion brand
          and a university admissions campaign will all see very different costs. The only reliable benchmark is your own test data.
        </p>
      </Review>

      <h2 id="set-a-budget">How to set a starting budget</h2>
      <p>Work backwards from the result you need, not forwards from a number that feels comfortable.</p>
      <ol>
        <li><strong>Decide the result.</strong> Leads, WhatsApp conversations or purchases.</li>
        <li><strong>Estimate a cost per result.</strong> Use past campaigns if you have them; otherwise run a short test.</li>
        <li>
          <strong>Give Meta enough data to learn.</strong> Meta says an ad set needs around 50 optimisation events in 7 days to
          leave the learning phase.<Cite n={2} /> If you expect leads to cost Rs 400 each, one ad set needs roughly 50 × Rs 400 =
          Rs 20,000 a week to learn properly (a worked example, not a quote).
        </li>
        <li>
          <strong>Can&apos;t afford that?</strong> Use fewer ad sets, a broader audience, or optimise for an earlier step (like
          landing-page views) until volume builds. Meta recommends the same fixes for &quot;learning limited&quot; ad sets.<Cite n={2} />
        </li>
      </ol>

      <h2 id="budget-vs-fee">Ad budget vs agency fee</h2>
      <p>
        Keep these separate. Your ad budget is what Meta charges. An agency&apos;s fee is what you pay for strategy, creative and
        management. At Times Digital Media, packages start at Rs 30,000 a month and ad spend is billed directly to your own Meta
        account. See <Link href="/pricing">our pricing</Link>, or read{" "}
        <Link href="/blog/pay-for-meta-and-google-ads-from-pakistan">how to pay for Meta ads from Pakistan</Link>.
      </p>

      <h2 id="faq">Quick answers</h2>
      <h3>Is boosting a post cheaper than Ads Manager?</h3>
      <p>
        Boosting can look cheaper because it usually optimises for engagement, but likes rarely turn into sales. For leads or
        purchases, Ads Manager gives you the objectives and tracking you need.
      </p>
      <h3>Can I pay in rupees?</h3>
      <p>
        Your ad account has a currency you choose when you create it. How you pay is covered in our{" "}
        <Link href="/blog/pay-for-meta-and-google-ads-from-pakistan">payment guide</Link>.
      </p>
      <h3>How quickly will I know if it&apos;s working?</h3>
      <p>
        Give a new ad set about a week to get through the learning phase<Cite n={2} /> before judging it, unless costs are clearly
        far off target.
      </p>
    </>
  );
}
