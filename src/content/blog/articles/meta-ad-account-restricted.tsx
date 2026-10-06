import Link from "next/link";
import { Answer, Cite, Review, type Source } from "@/components/ArticleParts";

export const sources: Source[] = [
  { id: 1, title: "Request a review if you are restricted from advertising on Meta platforms", publisher: "Meta Business Help Center", url: "https://www.facebook.com/business/help/530209463124901", date: "2026-10-06" },
  { id: 2, title: "Advertising Standards", publisher: "Meta Transparency Center", url: "https://transparency.meta.com/policies/ad-standards/", date: "2026-10-06" },
  { id: 3, title: "How to troubleshoot a rejected ad", publisher: "Meta Business Help Center", url: "https://www.facebook.com/business/help/1210227555661027", date: "2026-10-06" },
];

export default function Article() {
  return (
    <>
      <Answer>
        Meta restricts ad accounts when its systems believe advertising policies have been broken or an account looks risky, for
        example after repeated ad rejections, payment problems, or links to accounts Meta has already restricted. Open Account
        Quality, read the stated reason, fix the cause, then request a review. Don&apos;t open new accounts to get around it.
      </Answer>

      <p>
        A restricted ad account is one of the most stressful things that can happen mid-campaign: ads stop, and the message from Meta
        is often vague. The good news is that many restrictions can be reviewed. Here&apos;s how to work out what happened and what to do.
      </p>

      <h2 id="why">Why Meta restricts ad accounts</h2>
      <p>Meta&apos;s help centre says restrictions can follow when a business or person:<Cite n={1} /></p>
      <ul>
        <li>severely or repeatedly violates Meta&apos;s advertising policies or Community Standards;</li>
        <li>tries to evade Meta&apos;s review process or enforcement;</li>
        <li>uses inauthentic profiles to create business assets or run ads; or</li>
        <li>manages assets connected to other abusive assets, or behaves like assets Meta has already taken down.</li>
      </ul>
      <Review note="Confirm these are the patterns TDM sees most with Pakistani advertisers">
        <p>In practice, the triggers we see most often are:</p>
        <ul>
          <li><strong>A run of rejected ads</strong>, often from health, finance or &quot;before and after&quot; claims;</li>
          <li><strong>Payment failures</strong>, such as a card declining several times in a row;</li>
          <li><strong>A new account spending fast</strong> straight after creation;</li>
          <li><strong>Unusual logins</strong> or admins being added and removed frequently; and</li>
          <li><strong>Political or social-issue ads</strong> run without the required authorisation.<Cite n={2} /></li>
        </ul>
      </Review>

      <h2 id="fix">How to fix a restricted ad account, step by step</h2>
      <ol>
        <li><strong>Find the exact restriction.</strong> Go to Account Quality in Meta Business Suite. Note which asset is restricted (the ad account, your personal profile, a Page or the whole business portfolio) and the reason shown.</li>
        <li><strong>Fix the cause first.</strong> Pay any outstanding balance, edit or delete ads that break policy, and secure any accounts with unusual logins. Meta&apos;s guide to rejected ads explains how to see which policy an ad broke.<Cite n={3} /></li>
        <li><strong>Request a review.</strong> If you believe the restriction is a mistake, request a review from Account Quality. Meta says it usually completes reviews in about 48 hours, though some take longer, and it notifies you by email.<Cite n={1} /></li>
        <li><strong>Complete any verification.</strong> Meta may ask for identity confirmation. Use real, matching details.</li>
        <li><strong>Wait for the decision.</strong> If the review finds the activity acceptable, Meta reinstates the account.<Cite n={1} /></li>
      </ol>
      <p>
        <strong>Don&apos;t</strong> create new ad accounts or Business Managers to keep advertising while restricted. Evading
        enforcement is itself a reason Meta gives for restrictions,<Cite n={1} /> and it can spread the problem to every asset you
        manage.
      </p>

      <h2 id="prevent">How to avoid restrictions</h2>
      <ul>
        <li>Turn on two-factor authentication for every admin, and remove people who no longer need access.</li>
        <li>Use a reliable payment method with a backup, so charges don&apos;t fail. See our <Link href="/blog/pay-for-meta-and-google-ads-from-pakistan">payment guide</Link>.</li>
        <li>Read Meta&apos;s Advertising Standards before writing ads for regulated categories.<Cite n={2} /></li>
        <li>Avoid exaggerated claims, &quot;before and after&quot; images and personal-attribute targeting language (&quot;Are you overweight?&quot;).</li>
        <li>On a brand-new ad account, increase spend gradually rather than starting at your full budget.</li>
        <li>Keep ownership clean: your business should own its ad accounts and Pages, with agencies added as partners.</li>
      </ul>

      <h2 id="agency">When to get help</h2>
      <p>
        If your account is restricted and the reason isn&apos;t clear, a second pair of eyes helps. As part of our{" "}
        <Link href="/services/meta-ads">Meta Ads management</Link>, we review account structure, policies and billing so restrictions
        are less likely, and help you respond if one happens. Start with a <Link href="/free-growth-audit">free growth audit</Link>.
      </p>
    </>
  );
}
