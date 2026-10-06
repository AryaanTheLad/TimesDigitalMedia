/**
 * Services — one entry per indexable service page (/services/[slug]).
 * Drives the homepage services list, the /services hub, each service page,
 * Service schema, nav/footer links and the sitemap.
 *
 * Keyword ownership: each page owns exactly one primary keyword cluster
 * (see docs/audit/04-keyword-map.md). Don't target another page's keyword.
 *
 * [[REVIEW]] Process steps and deliverables describe how TDM works. Owner to
 * confirm they match day-to-day practice before launch.
 */

export type IllustrationKey = "meta" | "search" | "campaign" | "bars" | "code" | "video" | "social" | "seo";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Short label for nav, footer and homepage list. */
  shortName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  /** One-sentence summary for cards and the homepage list. */
  summary: string;
  /** 40–60 word answer-first definition (AEO). */
  answer: string;
  whoFor: string[];
  deliverables: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  faqs: ServiceFAQ[];
  caseStudies: string[];
  articles: string[];
  industries: string[];
  illustration: IllustrationKey;
  /** Which packages include this service (must match src/data/pricing.ts contents). */
  includedIn: ("starter" | "growth" | "custom")[];
  /** Optional note on how the package covers it (e.g. "maintenance only"). */
  packageNote?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "meta-ads",
    name: "Meta Ads Management (Facebook & Instagram)",
    shortName: "Meta Ads",
    h1: "Meta Ads management for Facebook and Instagram",
    metaTitle: "Meta Ads Agency in Pakistan | Facebook & Instagram Ads",
    metaDescription:
      "Facebook and Instagram ad campaigns built for leads and sales. Lahore-based Meta Ads management from Rs 30,000/month, with ad spend billed to your own account.",
    primaryKeyword: "meta ads agency pakistan",
    summary:
      "Facebook and Instagram campaigns built to generate qualified leads and sales, optimised against real conversion data.",
    answer:
      "Meta Ads management means planning, launching and optimising your Facebook and Instagram ad campaigns. TDM sets up tracking, builds audiences, writes and tests creative, and adjusts budgets toward the ads that produce leads or sales. You keep ownership of your ad account and pay Meta directly for ad spend.",
    whoFor: [
      "Businesses that sell to consumers in Pakistan and want leads or online sales from Facebook and Instagram",
      "E-commerce brands that need purchase tracking and ROAS reporting they can trust",
      "Education, real estate and service businesses that rely on inquiry forms, calls or WhatsApp",
      "Teams that have been boosting posts and want a structured Ads Manager setup instead",
    ],
    deliverables: [
      { title: "Account and tracking setup", desc: "Business Manager access, Meta Pixel and Conversions API events, and conversion goals that match what you actually sell." },
      { title: "Audience strategy", desc: "Geographic, demographic and interest targeting, retargeting of site visitors and engagers, and lookalikes once there's data to build them from." },
      { title: "Creative testing", desc: "Ad copy and formats tested side by side so budget moves to the versions that convert." },
      { title: "Lead capture", desc: "Instant forms, WhatsApp click-to-chat or landing pages, depending on how your sales team follows up." },
      { title: "Monthly reporting", desc: "Spend, results, cost per result and what we're changing next, in plain language." },
    ],
    process: [
      { title: "Audit", desc: "Review your current account, tracking and offer. Free through the growth audit." },
      { title: "Set up", desc: "Fix tracking, structure campaigns around one clear objective each, and agree the numbers we'll judge success by." },
      { title: "Launch and learn", desc: "Run controlled tests on audiences and creative while Meta's delivery system gathers data." },
      { title: "Optimise and scale", desc: "Shift budget to what's working, cut what isn't, and refresh creative before performance fades." },
    ],
    faqs: [
      { q: "How much should I spend on Meta ads in Pakistan?", a: "It depends on your goal and margins. Small tests can start at a few thousand rupees a day, but a campaign needs enough budget to produce regular results so Meta's system can learn. We'll recommend a starting budget after the free audit. Ad spend is paid directly to Meta and is separate from our fee." },
      { q: "Do I keep my ad account?", a: "Yes. Campaigns run in your own Meta ad account and your budget is billed to your own payment method. We work through partner access, so you can remove it at any time." },
      { q: "Is boosting a post the same as running Meta ads?", a: "No. Boosting is a simplified option with limited objectives and targeting. Ads Manager gives full control over objectives, placements, audiences, tracking and testing, which is what we use." },
    ],
    caseStudies: ["stitch", "zameen", "ibadat"],
    articles: ["facebook-ads-cost-pakistan", "meta-ad-account-restricted", "pay-for-meta-and-google-ads-from-pakistan"],
    industries: ["ecommerce", "real-estate", "education"],
    illustration: "meta",
    includedIn: ["starter", "growth", "custom"],
  },
  {
    slug: "google-ads",
    name: "Google Ads Management (Search & Performance Max)",
    shortName: "Google Ads",
    h1: "Google Ads management that captures people already searching",
    metaTitle: "Google Ads Agency in Pakistan | PPC Management Lahore",
    metaDescription:
      "Search, Performance Max and display campaigns managed from Lahore. Reach people searching for what you sell, with conversion tracking and monthly reporting.",
    primaryKeyword: "google ads agency pakistan",
    summary:
      "Search and Performance Max campaigns that put you in front of people already searching for what you sell.",
    answer:
      "Google Ads management is the setup and ongoing optimisation of paid campaigns on Google Search, Performance Max, Display and YouTube. TDM researches the searches your buyers make, builds campaigns and ads around them, tracks conversions such as calls and form fills, and refines bids, keywords and budgets each week.",
    whoFor: [
      "Businesses whose customers search on Google before they buy or call",
      "Service businesses in Lahore, Karachi and Islamabad that want local, high-intent inquiries",
      "Education providers running admissions intakes with fixed deadlines",
      "E-commerce stores that want Shopping and Performance Max alongside Meta",
    ],
    deliverables: [
      { title: "Keyword and intent research", desc: "The searches worth paying for, grouped by intent, plus negative keywords to stop wasted clicks." },
      { title: "Campaign build", desc: "Search and Performance Max campaigns with ads, assets and extensions written for your offer." },
      { title: "Conversion tracking", desc: "Google tag, GA4 and call/form conversions so bidding optimises toward real inquiries." },
      { title: "Bid and budget management", desc: "Weekly search-term reviews, bid strategy choices and budget shifts between campaigns." },
      { title: "Monthly reporting", desc: "Clicks, conversions, cost per conversion and next steps." },
    ],
    process: [
      { title: "Audit", desc: "Review search demand, competitors and any existing account." },
      { title: "Build", desc: "Structure campaigns by intent, set up tracking and write ads." },
      { title: "Refine", desc: "Add negatives, adjust bids and test ad copy as search-term data arrives." },
      { title: "Scale", desc: "Expand into new keywords, locations or Performance Max once core campaigns are profitable." },
    ],
    faqs: [
      { q: "Is Google Ads or Meta Ads better for my business?", a: "Google Ads captures people already searching for what you sell; Meta Ads creates demand among people who match your customer profile. Many businesses use both. See our Meta Ads vs Google Ads guide for a fuller comparison." },
      { q: "How is Google ad spend paid?", a: "Your ad budget is billed by Google to your own account and payment method. Our management fee is separate." },
      { q: "Do you run YouTube ads too?", a: "Yes. YouTube campaigns run through Google Ads; see our YouTube Ads service." },
    ],
    caseStudies: ["ibadat"],
    articles: ["meta-ads-vs-google-ads", "pay-for-meta-and-google-ads-from-pakistan", "what-is-a-good-roas"],
    industries: ["education", "ecommerce"],
    illustration: "search",
    includedIn: ["starter", "custom"],
  },
  {
    slug: "youtube-ads",
    name: "YouTube Ads",
    shortName: "YouTube Ads",
    h1: "YouTube advertising for awareness and admissions-scale reach",
    metaTitle: "YouTube Ads Agency in Pakistan | YouTube Advertising",
    metaDescription:
      "Skippable, bumper and Shorts ads on YouTube, planned and managed by a Lahore agency. Reach Pakistani viewers at scale and retarget them on Search and Meta.",
    primaryKeyword: "youtube ads agency pakistan",
    summary:
      "Skippable, bumper and Shorts ads that build awareness at scale, then feed retargeting on Search and Meta.",
    answer:
      "YouTube advertising places video ads before, during or between YouTube videos and in Shorts, bought through Google Ads. TDM chooses the right format (skippable in-stream, 6-second bumpers or in-feed), targets audiences by demographics, interests and intent, and connects viewers to follow-up campaigns on Search and Meta.",
    whoFor: [
      "Brands launching a product, campaign or admissions intake that needs wide reach quickly",
      "Businesses that already have video content or can produce short edits",
      "Advertisers who want to retarget video viewers on Google Search and Meta",
    ],
    deliverables: [
      { title: "Format and audience plan", desc: "Which YouTube formats to use for your goal and who should see them." },
      { title: "Video edits", desc: "Cut-downs of your footage into 6-second bumpers and 15–30 second ads, via our content team." },
      { title: "Campaign management", desc: "Video reach, views or action campaigns in Google Ads, with frequency and placement controls." },
      { title: "Viewer retargeting", desc: "Audiences of people who watched, used for follow-up ads on Search and Meta." },
    ],
    process: [
      { title: "Plan", desc: "Agree the goal (reach, views or conversions) and the audience." },
      { title: "Produce", desc: "Edit or shoot videos sized for each format." },
      { title: "Run", desc: "Launch, watch view rates and cost per view, and swap out weak creative." },
      { title: "Connect", desc: "Retarget engaged viewers with lead or sales campaigns." },
    ],
    faqs: [
      { q: "What YouTube ad formats are there?", a: "The main ones are skippable in-stream ads (viewers can skip after 5 seconds), non-skippable in-stream ads, 6-second bumper ads, in-feed video ads and Shorts ads. The right mix depends on whether you want reach, views or actions." },
      { q: "Can you make the video for us?", a: "Yes. Our content team can edit existing footage or produce short videos and reels." },
    ],
    caseStudies: ["ibadat"],
    articles: ["meta-ads-vs-google-ads"],
    industries: ["education"],
    illustration: "video",
    includedIn: ["custom"],
  },
  {
    slug: "performance-marketing-lead-generation",
    name: "Performance Marketing & Lead Generation",
    shortName: "Lead Generation",
    h1: "Performance marketing and lead generation, measured to the lead",
    metaTitle: "Lead Generation & Performance Marketing Agency Pakistan",
    metaDescription:
      "Full-funnel paid campaigns across Meta, Google and YouTube, built around one number: qualified leads. Tracking, landing pages and follow-up included.",
    primaryKeyword: "performance marketing agency pakistan",
    summary:
      "Full-funnel campaigns across Meta, Google and YouTube, combined with landing pages and tracking, and judged on qualified leads.",
    answer:
      "Performance marketing is advertising you judge by measurable results such as leads, sales or cost per acquisition rather than impressions. TDM combines Meta, Google and YouTube campaigns with landing pages, lead forms and conversion tracking, then shifts budget toward the channels producing the most qualified leads for the money.",
    whoFor: [
      "Businesses that need a steady flow of inquiries, not just visibility",
      "Real estate, education, healthcare and B2B services with a sales team that follows up",
      "Companies that have tried one channel and want a joined-up plan",
    ],
    deliverables: [
      { title: "Funnel plan", desc: "How people will find you, what they'll see next and where they convert." },
      { title: "Landing pages and forms", desc: "Fast pages with one clear action, or native lead forms where they work better." },
      { title: "Multi-channel campaigns", desc: "Meta, Google and YouTube campaigns working off the same tracking." },
      { title: "Lead quality loop", desc: "Feedback from your sales team on which leads were good, fed back into targeting." },
      { title: "Cost-per-lead reporting", desc: "One view of spend and leads across channels." },
    ],
    process: [
      { title: "Diagnose", desc: "Find where leads are being lost today." },
      { title: "Build the funnel", desc: "Tracking, landing pages, forms and campaigns." },
      { title: "Qualify", desc: "Add questions or steps that filter out low-intent inquiries." },
      { title: "Scale", desc: "Increase spend on the channels with the best cost per qualified lead." },
    ],
    faqs: [
      { q: "How fast will I see leads?", a: "Campaigns usually start producing inquiries within the first few weeks, then improve as data builds up. Our commitment is more qualified leads within 30 days. It is a commitment we work toward, not a promise of a specific number of leads." },
      { q: "What counts as a qualified lead?", a: "We agree that with you at the start, for example a lead in your service area with a stated budget or timeline, and we report against that definition." },
    ],
    caseStudies: ["zameen", "ibadat", "flight"],
    articles: ["what-is-a-good-roas", "meta-ads-vs-google-ads", "how-to-choose-a-digital-marketing-agency-pakistan"],
    industries: ["real-estate", "education"],
    illustration: "campaign",
    includedIn: ["growth", "custom"],
  },
  {
    slug: "content-creation",
    name: "Content Creation, Reels & Short-Form Video",
    shortName: "Content & Reels",
    h1: "Content creation and reels that people actually watch",
    metaTitle: "Content Creation Agency Lahore | Reels & Short-Form Video",
    metaDescription:
      "Instagram Reels, short-form video and social content produced in Lahore. Behind-the-scenes, Q&A, location shoots and promo edits, built for feeds and ads.",
    primaryKeyword: "content creation agency lahore",
    summary:
      "Reels, short-form video and social content: behind-the-scenes, Q&A, location shoots and promo edits made for feeds and ads.",
    answer:
      "Content creation covers planning, shooting and editing the posts, reels and short videos your brand publishes and advertises with. TDM produces Instagram Reels and short-form video series such as behind-the-scenes, Q&A, location performances and promo edits, sized for feeds, Stories and paid placements.",
    whoFor: [
      "Musicians and artists promoting a release",
      "Studios, consultants and service brands that need a regular reel schedule",
      "Advertisers who need fresh ad creative every few weeks",
    ],
    deliverables: [
      { title: "Content plan", desc: "Series formats and a posting calendar built around your launch or goal." },
      { title: "Shoots and edits", desc: "On-location or studio shoots and fast-paced edits for Reels and Shorts." },
      { title: "Ad-ready cuts", desc: "Versions sized and trimmed for paid placements." },
      { title: "Publishing", desc: "Posting on your handles, with cross-posting on the TDM network where it fits." },
    ],
    process: [
      { title: "Concept", desc: "Agree the story and the series formats." },
      { title: "Shoot", desc: "Plan and capture footage efficiently." },
      { title: "Edit", desc: "Cut for retention in the first seconds." },
      { title: "Publish and learn", desc: "Post, watch what holds attention, and make more of it." },
    ],
    faqs: [
      { q: "Do you shoot outside Lahore?", a: "Yes. Past shoots include locations around Okara for an artist campaign. Travel is scoped per project." },
      { q: "Can content be used in ads?", a: "Yes. We deliver ad-ready cuts so the same footage works organically and in paid campaigns." },
    ],
    caseStudies: ["starshah", "marshall", "asmatariq", "flight"],
    articles: [],
    industries: ["artists-entertainment"],
    illustration: "video",
    includedIn: ["growth", "custom"],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    shortName: "Social Media",
    h1: "Social media management for Facebook, Instagram and X",
    metaTitle: "Social Media Marketing Agency Lahore | SMM Packages",
    metaDescription:
      "Social media management in Lahore: designed posts, profile optimisation, publishing and monthly reports. Packages in PKR from Rs 30,000/month.",
    primaryKeyword: "social media marketing agency lahore",
    summary:
      "Designed posts, profile optimisation, publishing and community upkeep for Facebook, Instagram and X.",
    answer:
      "Social media management is the ongoing running of your brand's social accounts: planning and designing posts, publishing on schedule, optimising profiles, and reporting what's working. TDM manages Facebook, Instagram and X for businesses in Pakistan, with packages from Rs 30,000 per month and paid promotion available alongside.",
    whoFor: [
      "Businesses that need consistent, on-brand posting without hiring in-house",
      "Restaurants, retailers and local brands launching menus, offers or new outlets",
      "Brands that want organic posting and paid ads handled by one team",
    ],
    deliverables: [
      { title: "Profile optimisation", desc: "Bio, covers, highlights and contact buttons set up properly." },
      { title: "Designed posts", desc: "Posters, banners and carousels in your brand style." },
      { title: "Publishing", desc: "Scheduled posting across Facebook, Instagram and X." },
      { title: "Monthly report", desc: "Reach, engagement and follower trends, with next month's plan." },
    ],
    process: [
      { title: "Onboard", desc: "Brand assets, tone and access." },
      { title: "Plan", desc: "Monthly calendar of posts and campaigns." },
      { title: "Publish", desc: "Design, approve and post." },
      { title: "Review", desc: "Report results and adjust." },
    ],
    faqs: [
      { q: "How much does social media management cost in Pakistan?", a: "TDM's Starter & Maintenance package is Rs 30,000 per month and the Growth Campaign is Rs 70,000 per month, both tax-inclusive. Ad spend is separate and billed to your own account." },
      { q: "Do you create the posts or do I?", a: "On Starter you provide creatives and we manage the accounts. On Growth our team creates the content." },
    ],
    caseStudies: ["zorobroast", "asmatariq"],
    articles: ["how-to-choose-a-digital-marketing-agency-pakistan"],
    industries: [],
    illustration: "social",
    includedIn: ["starter", "growth", "custom"],
  },
  {
    slug: "web-development",
    name: "Web Development & Design",
    shortName: "Web Development",
    h1: "Web development and landing pages built to convert",
    metaTitle: "Web Development Company Lahore | Websites & Landing Pages",
    metaDescription:
      "Fast, mobile-first websites and landing pages built in Lahore for businesses that advertise. Conversion tracking, forms and on-page SEO set up from day one.",
    primaryKeyword: "web development company lahore",
    summary:
      "Fast, mobile-first websites and landing pages with forms, tracking and on-page SEO built in from day one.",
    answer:
      "Web development is designing and building your website or landing pages. TDM builds fast, mobile-first sites for businesses that advertise, with clear calls to action, lead forms, WhatsApp buttons, conversion tracking and on-page SEO set up before launch, so paid traffic has somewhere worth landing.",
    whoFor: [
      "Businesses whose current site is slow, outdated or hard to update",
      "Advertisers who need dedicated landing pages for campaigns",
      "New brands that need a credible site quickly",
    ],
    deliverables: [
      { title: "Design and build", desc: "Responsive pages in your brand style." },
      { title: "Lead capture", desc: "Forms, WhatsApp and call buttons wired to your inbox or CRM." },
      { title: "Tracking", desc: "GA4, Google Ads and Meta Pixel events for every conversion." },
      { title: "On-page SEO", desc: "Titles, descriptions, headings, schema and a sitemap." },
      { title: "Maintenance", desc: "Uptime management and updates, included in the Starter package." },
    ],
    process: [
      { title: "Scope", desc: "Pages, content and integrations." },
      { title: "Design", desc: "Layouts reviewed with you." },
      { title: "Build", desc: "Develop, connect forms and tracking." },
      { title: "Launch", desc: "Test on mobile and desktop, then go live." },
    ],
    faqs: [
      { q: "Is web development included in your packages?", a: "Website development is included in the Growth Campaign. Starter includes maintenance of an existing site. Larger builds are scoped as a custom package." },
    ],
    caseStudies: [],
    articles: [],
    industries: [],
    illustration: "code",
    includedIn: ["starter", "growth", "custom"],
    packageNote: "Starter covers maintenance of an existing site; Growth includes website development.",
  },
  {
    slug: "seo",
    name: "SEO Services",
    shortName: "SEO",
    h1: "SEO services: on-page fixes that help you rank and convert",
    metaTitle: "SEO Services in Lahore | On-Page SEO for Pakistani Businesses",
    metaDescription:
      "On-page SEO from a Lahore agency: technical fixes, titles, content structure, schema and local signals so Google understands what you offer and where.",
    primaryKeyword: "seo services lahore",
    summary:
      "On-page and technical SEO so Google understands what you offer, where you serve and why you're worth ranking.",
    answer:
      "SEO (search engine optimisation) improves how your website appears in unpaid Google results. TDM focuses on on-page and technical SEO: fixing crawl and speed issues, writing titles and descriptions, structuring content around what people search, adding schema markup, and strengthening local signals for Pakistani cities.",
    whoFor: [
      "Businesses with a website that gets little search traffic",
      "Advertisers who want to lower long-term reliance on paid clicks",
      "Local service businesses that want to appear for city-specific searches",
    ],
    deliverables: [
      { title: "Technical audit", desc: "Indexing, speed, mobile usability and crawl errors." },
      { title: "On-page optimisation", desc: "Titles, descriptions, headings and internal links." },
      { title: "Content structure", desc: "Pages mapped to the searches your customers make." },
      { title: "Schema markup", desc: "Structured data for your business, services and FAQs." },
    ],
    process: [
      { title: "Audit", desc: "Find what's stopping pages from ranking." },
      { title: "Fix", desc: "Resolve technical and on-page issues." },
      { title: "Expand", desc: "Add or improve pages for target searches." },
      { title: "Measure", desc: "Track impressions, clicks and rankings in Search Console." },
    ],
    faqs: [
      { q: "How long does SEO take?", a: "Technical fixes can show up within weeks once Google recrawls the site, but ranking gains for competitive searches usually take several months." },
      { q: "Is SEO included in your packages?", a: "On-page SEO is included in the Growth Campaign. Wider SEO work is available as a custom package." },
    ],
    caseStudies: [],
    articles: ["how-to-choose-a-digital-marketing-agency-pakistan"],
    industries: [],
    illustration: "seo",
    includedIn: ["growth", "custom"],
    packageNote: "Growth includes on-page SEO; wider SEO work is scoped as a custom package.",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

/** Core paid-media services shown first in navigation. */
export const CORE_SERVICE_SLUGS = [
  "meta-ads",
  "google-ads",
  "youtube-ads",
  "performance-marketing-lead-generation",
  "content-creation",
];
