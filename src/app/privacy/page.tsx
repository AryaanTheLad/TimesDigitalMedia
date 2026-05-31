import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Times Digital Media",
  description: "Learn about the data collection, utilization, and privacy principles governing our strategic advertising solutions at Times Digital Media.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          {/* Header Block */}
          <div className="border-b border-zinc-200 pb-8 mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-widest bg-red-50 text-[#E8000E] px-3 py-1.5 rounded-full border border-red-200/60 inline-block mb-4">
              Governance & Security
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-zinc-500 font-bold text-sm mt-3 uppercase tracking-wider">
              Last Updated: May 2026
            </p>
          </div>

          {/* Content Block */}
          <div className="prose prose-zinc max-w-none text-zinc-800 leading-relaxed font-bold text-sm md:text-base flex flex-col gap-8">
            
            <section className="flex flex-col gap-4">
              <p>
                This Privacy Policy governs the collection, use, and disclosure of personal and tracking information when you utilize the services of <span className="text-zinc-950 font-black">Times Digital Media</span>. As a premier creative digital marketing and advertising agency, we are committed to safeguarding the confidentiality and integrity of your data.
              </p>
              <p>
                The information gathered when you interact with the Times Digital Media platform, client systems, or our marketing assets falls into two categories:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>
                  <span className="text-zinc-950 font-black">Personal Information:</span> Information you actively supply when subscribing to our digital reports, ordering media campaigns, completing performance surveys, registering for agency client portals, or initiating strategic inquiries.
                </li>
                <li>
                  <span className="text-zinc-950 font-black">Non-Personal Information:</span> Analytical data gathered through technology, which includes marketing tracking cookies, conversion pixels, and anonymous performance signals collected by us and our third-party advertising network integrations.
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                Why We Collect Data
              </h2>
              <p>
                At <span className="text-zinc-950 font-black">timesdigitalmedia.com</span>, user and campaign data is collected for the following operational reasons:
              </p>
              <ol className="list-decimal pl-6 flex flex-col gap-2">
                <li>To provide highly customized, strategic advertising services unique to individual client brands.</li>
                <li>To continuously monitor, analyze, and optimize campaign delivery, visual performance, and audience reach.</li>
                <li>To engineer and optimize highly targeted ad campaigns on paid social networks, helping client brands maximize conversion rates and return on ad spend (ROI).</li>
                <li>To scale promotional and strategic messages to appropriate high-intent audience demographics, only with proper consent.</li>
              </ol>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                Our Core Principles
              </h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>We make every effort to keep all client and user data strictly confidential through state-of-the-art secure technology and server architecture.</li>
                <li>We deeply respect user privacy and adhere to international standards of data governance.</li>
                <li>We utilize individual tracking and contact details only when we have legitimate business reasons and are legally entitled to do so.</li>
                <li>We remain fully transparent regarding the types of data we collect, why we collect it, and how it is deployed.</li>
                <li>We facilitate global scalability by providing online analytical client portals so you can securely access live performance reports from anywhere in the world.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                How We Use Collected Information
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-black text-zinc-950 mb-1">1. Fulfilling Service Requests</h3>
                  <p className="text-zinc-700">
                    We use the information we gather to facilitate your use of the Times Digital Media platform, execute requested paid campaigns, send analytical campaign newsletters, and enable client access to interactive performance trackers, surveys, and optimization briefs.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-black text-zinc-950 mb-1">2. Customizing Audience Experience</h3>
                  <p className="text-zinc-700">
                    We deploy collected information to target digital advertisements to the users for whom they are most pertinent, enhancing response rates, maximizing client budgets, and ensuring device-optimized premium campaign rendering.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-black text-zinc-950 mb-1">3. Relevant & High-Performance Ads</h3>
                  <p className="text-zinc-700">
                    Demographic and preference inputs allow the paid social campaigns we run (on networks like Meta, TikTok, and Google) to reach the precise segments most likely to be receptive. This improves both the viewer experience and the efficiency of advertising investments. We disclose performance tracking analytics to third parties only in aggregate or completely de-identified formats.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                Social Integration and Children's Data
              </h2>
              <p>
                <span className="text-zinc-950 font-black">Social Logins:</span> If you access the Times Digital Media client portal using credentials from a social networking platform (such as Facebook or LinkedIn), you authorize us to access specific user details (such as name, email address, profile photo, and location) to initialize your secure account. If you remove the portal application from your social account settings, our access to this additional information will cease immediately.
              </p>
              <p>
                <span className="text-zinc-950 font-black">Minor Protection:</span> Times Digital Media does not knowingly collect, store, or target any personal data regarding children under the age of 18.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                Our Use of Cookies
              </h2>
              <p>
                Times Digital Media uses cookies, beacons, and similar tracking files to optimize performance for the following reasons:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>To measure how often users visit our platform and client systems to analyze conversion paths.</li>
                <li>To collect anonymous, high-level behavioral data for general performance indexing.</li>
                <li>To track advertising impressions, clicks, conversions, and client dashboard metrics via secure ad network tokens.</li>
                <li>To coordinate contextual affiliate advertising, allowing us to generate strategic campaign revenue without biasing editorial integrity.</li>
                <li>To support advanced media player functionality for high-fidelity campaign reels and video showcases.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4 border-t border-zinc-200 pt-8 mt-4">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                Contact & Governance Details
              </h2>
              <p>
                For all inquiries regarding data protection, access to the personal data we hold, or queries regarding how we optimize campaign metrics, please contact our Data Protection Manager at:
              </p>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 font-mono text-xs text-zinc-800 self-start">
                <span className="block font-black text-zinc-950">Email:</span> thetimesdigitalmedia@gmail.com
              </div>
              <p>
                <span className="text-zinc-950 font-black">Changes to this Policy:</span> Any updates or alterations to this Privacy Policy will be posted immediately on this page. Significant changes will also be announced via registered client emails to guarantee complete compliance and transparent governance.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
