import Link from "next/link";
import { Answer, Cite, Review, type Source } from "@/components/ArticleParts";

export const sources: Source[] = [
  { id: 1, title: "Accepted payment options for Meta ads", publisher: "Meta Business Help Center", url: "https://www.facebook.com/business/help/212763688755026", date: "2026-10-06" },
  { id: 2, title: "About payment methods for Google Ads", publisher: "Google Ads Help", url: "https://support.google.com/google-ads/answer/2375433", date: "2026-10-06" },
  { id: 3, title: "Section 236Y: advance tax on international card payments", publisher: "TaxBuddy Umair (secondary summary)", url: "https://www.taxbuddyumair.com/articles/advance-tax-on-foreign-card-payments-section-236y/", date: "2026-10-06", note: "Secondary source. Confirm current rates with your bank or a tax adviser." },
  { id: 4, title: "Pakistan: tax and customs measures in Finance Act 2026", publisher: "KPMG", url: "https://kpmg.com/us/en/taxnewsflash/news/2026/07/pakistan-tax-customs-measures-finance-act-2026.html", date: "2026-07-01" },
];

export default function Article() {
  return (
    <>
      <Answer>
        For Pakistan, Meta accepts credit cards and co-branded debit cards (Visa, Mastercard, American Express), plus PayPal in
        supported currencies. Google Ads shows the options available for your billing country inside your account. Most failed
        payments happen because the card isn&apos;t enabled for international online transactions, so call your bank first.
      </Answer>

      <p>
        Payment problems stop more Pakistani ad campaigns than bad creative does. A declined card pauses your ads, and repeated
        failures can lead to spending limits on the account. Here&apos;s how to set billing up properly the first time.
      </p>

      <h2 id="meta">Paying for Meta (Facebook and Instagram) ads</h2>
      <p>
        Meta&apos;s help centre lists, for Pakistan, credit cards or co-branded debit cards from American Express, Mastercard and Visa,
        and PayPal in one of Meta&apos;s accepted currencies.<Cite n={1} /> There is no local bank-transfer option listed for Pakistan.
      </p>
      <h3>Set-up checklist</h3>
      <ol>
        <li>Ask your bank to enable <strong>international e-commerce transactions</strong> on the card, and check the monthly limit.</li>
        <li>Create the ad account with the right <strong>currency and time zone</strong>. These are chosen when the account is created, so get them right before spending.</li>
        <li>In Meta Business Suite, open <strong>Billing and payments</strong> and add the card as the payment method.</li>
        <li>Keep the card&apos;s available balance above your expected billing amount. Meta charges when you reach your billing threshold or on your billing date.</li>
        <li>Add a <strong>backup payment method</strong> so a single decline doesn&apos;t stop delivery.</li>
      </ol>

      <h2 id="google">Paying for Google and YouTube ads</h2>
      <p>
        Google Ads payment options depend on your billing country and currency, and sometimes on whether you use automatic, manual or
        monthly invoicing. Google points advertisers to the payment options listed in their own account for the exact choices
        available.<Cite n={2} /> YouTube ads are paid through the same Google Ads account.
      </p>

      <h2 id="declined">Why Pakistani cards get declined (and what to do)</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Cause</th><th>Fix</th></tr>
          </thead>
          <tbody>
            <tr><td>International online payments disabled</td><td>Enable them in your banking app or by calling the bank.</td></tr>
            <tr><td>Card limit too low</td><td>Raise the limit, or lower the billing threshold and daily budgets.</td></tr>
            <tr><td>Not enough balance on a debit card</td><td>Keep a buffer above your expected weekly spend.</td></tr>
            <tr><td>Bank fraud checks on a new merchant</td><td>Approve the first charge with your bank, then retry the payment.</td></tr>
          </tbody>
        </table>
      </div>
      <Review note="Confirm TDM's guidance on virtual cards">
        <p>
          Some advertisers use virtual USD cards from fintech providers. If you do, read the provider&apos;s fees and terms, keep the
          card in your own or your company&apos;s name, and avoid switching payment methods frequently on a new ad account.
        </p>
      </Review>

      <h2 id="taxes">Taxes that may appear on your statement</h2>
      <Review note="Tax detail from secondary sources; verify before publishing">
        <p>
          When you pay a foreign platform with a Pakistani card, your bank may deduct <strong>advance income tax under section 236Y</strong>{" "}
          of the Income Tax Ordinance. A summary of the Finance Act 2026 reports rates of 0.5% for active taxpayers (filers) and 1%
          for non-filers, down from 5% and 10%, and notes the deduction can be adjusted against your annual tax return.<Cite n={3} />{" "}
          Provincial sales tax on advertising services may also apply depending on your registration.
        </p>
        <p>
          Don&apos;t confuse these with the 5% withholding tax introduced by the Finance Act 2026 on income that content creators earn
          from platforms such as YouTube and Facebook. That applies to creators&apos; earnings, not to businesses buying ads.<Cite n={4} />
        </p>
        <p>
          <strong>This isn&apos;t tax advice.</strong> Rates change with each budget, so confirm what applies to you with your bank or tax
          adviser.
        </p>
      </Review>

      <h2 id="ownership">Who should pay: you or your agency?</h2>
      <p>
        We recommend that the ad account and payment method are yours. You keep control, the spend history stays with your business,
        and you can see every rupee. That&apos;s how Times Digital Media works: our management fee is separate, and ad spend is billed
        directly to your own Meta or Google account (see <Link href="/pricing">pricing</Link>).
      </p>
      <p>
        Next: <Link href="/blog/facebook-ads-cost-pakistan">how much Facebook ads cost in Pakistan</Link>, or what to do if your{" "}
        <Link href="/blog/meta-ad-account-restricted">Meta ad account gets restricted</Link>.
      </p>
    </>
  );
}
