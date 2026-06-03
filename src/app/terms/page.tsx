import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Times Digital Media",
  description: "Review the governing terms of service, intellectual property guidelines, and campaign delivery conditions at Times Digital Media.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          {/* Header Block */}
          <div className="border-b border-zinc-200 pb-8 mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-widest bg-red-50 text-[#E8000E] px-3 py-1.5 rounded-full border border-red-200/60 inline-block mb-4">
              Legal Framework
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
              Terms of Service
            </h1>
            <p className="text-zinc-500 font-bold text-sm mt-3 uppercase tracking-wider">
              Effective Date: May 29, 2026
            </p>
          </div>

          {/* Content Block */}
          <div className="prose prose-zinc max-w-none text-zinc-800 leading-relaxed font-bold text-sm md:text-base flex flex-col gap-8">
            
            <section className="flex flex-col gap-4">
              <p>
                Welcome to <span className="text-zinc-950 font-black">Times Digital Media</span>. By accessing, browsing, or utilizing timesdigitalmedia.com, our client portals, performance dashboards, or integrated campaign tools, you agree to be legally bound by these Terms of Service, which take effect immediately upon your first use. 
              </p>
              <p>
                If you do not agree to be bound by all of the following terms, you are advised not to use, register for, or contribute creative assets to the Times Digital Media platform or our agency networks.
              </p>
              <p>
                Times Digital Media reserves full authority to modify or bring changes to these Terms of Service from time to time. As an active user or strategic partner, you are advised to review these terms regularly to ensure compliance with the latest framework.
              </p>
            </section>

            <section className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                1. Acceptable Use of Our Platform & Portals
              </h2>
              <p>
                As a user or client of Times Digital Media, you are bound to abide by our professional code of ethics. You agree to utilize this site and our related services strictly for legitimate business, creative, and marketing ends.
              </p>
              <p>
                You must take extra care while utilizing our resources to ensure that your actions do not disrupt, overload, or shrink availability for other clients to utilize our dashboards, access active campaigns, or collaborate with our agency teams.
              </p>
              <p className="text-red-700">
                Users are strictly prohibited from:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Harassing, causing distress, or causing inconvenience to any staff member, strategic partner, or fellow user.</li>
                <li>Transmitting obscene, offensive, or defamatory content through any agency channels or active ad creatives.</li>
                <li>Disrupting interactive campaign workspaces, performance logs, or communications going among users through any uncalled attitude or malicious automated scripts.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                2. Intellectual Property Rights
              </h2>
              <p>
                All copyright, trademarks, design rights, patents, source code, visual interfaces, and other intellectual property rights (registered or unregistered) in and on this website, and all content (including all web applications, custom animations, databases, and dashboard layouts) shall remain strictly vested in <span className="text-zinc-950 font-black">Times Digital Media (Pvt) Ltd</span> or its licensors.
              </p>
              <p>
                You shall not copy, reproduce, republish, disassemble, decompile, reverse engineer, download, post, broadcast, transmit, make available to the public, or otherwise utilize the proprietary assets or code of this website in any way except for your own personal, non-commercial use, or as explicitly authorized under a signed corporate campaign contract with us.
              </p>
              <p>
                Any other use of the proprietary content of this website requires the prior, explicit written permission of Times Digital Media.
              </p>
              <p>
                The names, images, and logos identifying Times Digital Media or third parties, and their respective products and marketing services, are subject to the copyright, design rights, and trademarks of Times Digital Media and/or the respective third-party owners. Nothing contained in these terms shall be construed as conferring any license or right to use any intellectual property of Times Digital Media or any other third party.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                3. Creative Submissions & Campaign Deliverables
              </h2>
              <p>
                As a contributor or client submitting creative materials to Times Digital Media—including but not limited to copy, photographs, ad graphics, video reels, or audio files for marketing placements—you grant Times Digital Media a non-exclusive, royalty-free, global license to host, adapt, modify, and run the materials across our digital media channels and ad networks to fulfill your campaign objectives.
              </p>
              <p>
                Copyright in your submitted materials will remain fully with you. This permission is non-exclusive, so you can continue to use your assets in any other way, including allowing others to use them.
              </p>
              <p>
                By submitting materials, you warrant that:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Your submission is your original work, or you hold all necessary copyright licenses to deploy the assets for paid digital advertising.</li>
                <li>Your materials are not defamatory and do not breach any international or local laws.</li>
                <li>You permit Times Digital Media to display, configure, and optimize these materials for the purposes highlighted under your campaign briefs.</li>
              </ul>
              <p>
                Times Digital Media will attribute credit for major client campaigns or case studies where appropriate, unless you request otherwise. We caution our creative partners and clients not to endanger themselves or others, take unnecessary risks, or break any laws in order to generate advertising content.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                4. Times Digital Media Portal Community Rules
              </h2>
              <p>
                Accessing client dashboards or entering our community spaces requires registering a valid corporate account at <span className="text-zinc-950 font-black">timesdigitalmedia.com</span>. All personal information supplied during registration will be handled strictly in accordance with our Privacy Policy.
              </p>
              <p>
                To maintain a secure and professional environment on our dashboards and shared workspaces, all registered partners must strictly observe the following rules:
              </p>
              <ol className="list-decimal pl-6 flex flex-col gap-2">
                <li>Abstain from showing abusive behavior or sharing offensive material.</li>
                <li>Refrain from disseminating unlawful or objectionable content.</li>
                <li>Avoid spamming, multi-posting, or uploading off-topic files.</li>
                <li>Abstain from unauthorized third-party advertising or self-promotion outside specific client scopes.</li>
                <li>Select appropriate, professional user and portal organization names.</li>
                <li>Never misuse the portal complaint, verification, or customer support ticketing systems.</li>
                <li>Contribute only authentic, verified assets and original campaigns.</li>
                <li>Register exclusively with a valid, active business email address.</li>
                <li>Maintain a single, secure login per user to protect sensitive conversion data.</li>
                <li>Avoid pretending to be an authorized country representative or attempting to disrupt our API feeds in any way.</li>
              </ol>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                5. Enforcement & Breach of Protocol
              </h2>
              <p>
                If Times Digital Media determines a breach of these community rules or acceptable use policies has occurred on your part, we will take immediate cognizance and reserves the right to take every step necessary to protect our infrastructure. 
              </p>
              <p>
                We reserve the absolute right to delete any client submissions, suspend campaign trackers, or permanently terminate your portal access without prior notice, explanation, or liability.
              </p>
              <p>
                <span className="text-zinc-950 font-black">Minors (Under 18):</span> Minors must obtain the explicit permission of a parent or guardian before registering with our corporate platforms, client portals, or initiating ad services.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-black text-zinc-950 tracking-tight border-l-4 border-l-[#E8000E] pl-3 py-0.5">
                6. Disclaimers & Limitation of Liability
              </h2>
              <p>
                A major portion of performance comments, click responses, and conversion signals comes from public interactions on social networks. Times Digital Media is not responsible or liable for any public responses, external comments, or conversion behaviors posted by members of the public across client landing pages or our dashboard links.
              </p>
              <p>
                Times Digital Media posts all performance dashboards, creative assets, and conversion feeds as is and as available. While we take pride in ensuring all conversion tracking setups and campaign assets are functional and correct at the time of deployment, no responsibility is accepted for third-party ad network API changes, server omissions, or temporary feed inaccuracies.
              </p>
              <p className="text-red-700">
                Times Digital Media shall not be liable for any of the following losses or damages (whether such losses were foreseen, foreseeable, known, or otherwise):
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Loss of conversion tracking or marketing audience data.</li>
                <li>Loss of client revenue or anticipated campaign profits.</li>
                <li>Loss of prospective business, clients, or DTC sales.</li>
                <li>Loss of opportunity (including third-party ad network suspensions).</li>
                <li>Loss of digital goodwill or injury to corporate reputation.</li>
                <li>Losses suffered by third parties (including sub-contracted influencers).</li>
                <li>Any indirect, consequential, special, or exemplary damages arising from the use of our services or this website, regardless of the form of action.</li>
              </ul>
              <p>
                Times Digital Media does not warrant or guarantee that functions available on this website will be uninterrupted or error-free, that defects will be corrected, or that the servers making timesdigitalmedia.com available are free of viruses or backend bugs.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
