/**
 * Client work — single source for /portfolio, /portfolio/[id], the homepage
 * client list, industry pages and service-page "related work" modules.
 *
 * Rules (owner decisions, Oct 2026):
 * - Only publish figures the owner has confirmed. Confirmed: Star Shah
 *   1.2M+ views, Flight 98% visa approvals. (Zameen's 40M+ figure removed
 *   at the owner's request.)
 * - `results` may be qualitative ("what the campaign accomplished"),
 *   drawn from the brief and work shown; never invent numbers. Zameen and
 *   Stitch use qualitative results at the owner's request.
 * - Removed as unverified: Ibadat "highest enrollments"/"record-breaking",
 *   Zoro Broast "1.5M+ reach".
 * - Missing results are left as [[TODO]] placeholders (hidden in production).
 */

export interface CreativeAsset {
  src: string;
  alt: string;
  spanClass?: string;
  /** "contain" shows a portrait or poster asset whole instead of cropping it. */
  fit?: "cover" | "contain";
}

/** An Ads Manager screenshot published as proof on a case study. */
export interface ProofShot {
  src: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  caption: string;
  keyNumbers: string[];
}

/** A video we produced and host ourselves (not an Instagram or YouTube embed). */
export interface VideoItem {
  /** File in /public/videos/<client>/. */
  src: string;
  /** Poster frame in /public/thumbnails/<client>/. */
  poster: string;
  title: string;
  category: "bts" | "qa" | "singing" | "promo";
  /** Shown under the title, e.g. "Caption variant B". */
  note?: string;
}

export interface ReelItem {
  id: string;
  title: string;
  category: "bts" | "qa" | "singing" | "promo";
  platform?: "youtube" | "instagram";
}

export interface CaseStudy {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  industry: "real-estate" | "ecommerce" | "artists-entertainment" | "education" | "food" | "creative-space" | "beauty";
  services: string[];
  challenge: string;
  approach: string[];
  /** Confirmed outcomes only. Leave empty and add a TODO if none are confirmed. */
  results: string[];
  resultsTodo?: string;
  stats: { label: string; value: string }[];
  logoPath: string;
  logoPadding?: string;
  logoBg?: string;
  logoObject?: string;
  themeColor: string;
  borderTheme: string;
  hoverGlow: string;
  badgeClass: string;
  creatives?: CreativeAsset[];
  reels?: ReelItem[];
  /** Self-hosted campaign videos (ad creatives we edited and run as ads). */
  videos?: VideoItem[];
  /** Ads Manager screenshots. Publish only with the client's consent. */
  proofShots?: ProofShot[];
  /** Reporting window the proof shots cover, e.g. "6 Sep – 5 Oct 2026". */
  proofPeriod?: string;
}

const RED_THEME = {
  themeColor: "text-red-650",
  borderTheme: "border-l-4 border-l-[#E8000E] hover:border-red-500",
  hoverGlow: "radial-gradient(circle at center, rgba(232, 0, 14, 0.08) 0%, transparent 70%)",
  badgeClass: "bg-red-50 border-red-200 text-red-700",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "zameen",
    name: "Zameen.com",
    subtitle: "Digital Property Campaigns",
    description:
      "Paid placements and sponsored lead campaigns for Pakistan's property portal, including launch assets for projects, expos and open houses aimed at buyers and investors.",
    category: "Real Estate Portal",
    industry: "real-estate",
    services: ["meta-ads", "performance-marketing-lead-generation"],
    challenge:
      "Promote property expos, project launches and open houses to buyers and investors across Pakistan, and turn that attention into qualified developer leads.",
    approach: [
      "Ran paid Meta placements for each launch and event, targeted by city and buyer profile.",
      "Produced launch creatives for expos, top-project roundups and open houses.",
      "Amplified selected campaigns across the TDM media network.",
    ],
    results: [
      "Built awareness for property launches, expos and open houses in target cities",
      "Generated developer and buyer leads through sponsored lead campaigns",
    ],
    stats: [
      { label: "Coverage", value: "Nationwide" },
      { label: "Target Profile", value: "Developers & Buyers" },
      { label: "Core Channels", value: "Meta Ads & Web Portal" },
      { label: "Campaign Focus", value: "Property Expo & Launches" },
    ],
    logoPath: "/logo_zameen.jpg",
    themeColor: "text-emerald-600",
    borderTheme: "border-l-4 border-l-emerald-600 hover:border-emerald-500",
    hoverGlow: "radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
    badgeClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
    creatives: [
      { src: "/portfolio_zameen_1.jpg", alt: "Zameen.com digital platform campaign banner", spanClass: "md:col-span-2" },
      { src: "/portfolio_zameen_2.jpg", alt: "Land Star Property Expo 2024 campaign creative for Zameen.com", spanClass: "md:col-span-1" },
      { src: "/portfolio_zameen_3.jpg", alt: "Zameen.com 'Top 5 projects with best rental returns' social creative", spanClass: "md:col-span-1" },
      { src: "/portfolio_zameen_4.jpg", alt: "Zameen ARX 'tallest marvel' project launch creative", spanClass: "md:col-span-1" },
      { src: "/portfolio_zameen_5.jpg", alt: "Grand Open House DHA Phase 1 campaign creative for Zameen.com", spanClass: "md:col-span-1" },
    ],
  },
  {
    id: "stitch",
    name: "Stitch",
    subtitle: "Clothing & Retail E-Commerce",
    description:
      "Seasonal sale and collection campaigns for a clothing brand, aimed at online shoppers on Facebook and Instagram.",
    category: "Clothing Brand",
    industry: "ecommerce",
    services: ["meta-ads", "social-media-management"],
    challenge: "Drive online sales and store visibility around key sale moments and new collection drops.",
    approach: [
      "Built paid Meta campaigns around the Azadi sale and end-of-season clearance.",
      "Designed sale and collection creatives for feeds and Stories.",
      "Targeted fashion shoppers by demographic and interest, with retargeting of site visitors.",
    ],
    results: [
      "Kept the brand in front of online shoppers through the Azadi and end-of-season sales",
      "Gave each sale and collection drop a consistent look across feeds and Stories",
    ],
    resultsTodo: "[[TODO: optional: add Stitch figures (sales, ROAS or CPA) if the client agrees]]",
    stats: [
      { label: "Sale Campaigns", value: "Flat 30% / 50% Off" },
      { label: "Target Segment", value: "Online Apparel Shoppers" },
      { label: "Core Channels", value: "Paid Meta & Social Stories" },
      { label: "Campaign Focus", value: "Azadi Sale & Season Clearance" },
    ],
    logoPath: "/logo_stitch.jpg",
    logoPadding: "p-0",
    logoBg: "bg-black border-black",
    logoObject: "object-cover",
    themeColor: "text-indigo-650",
    borderTheme: "border-l-4 border-l-indigo-650 hover:border-indigo-500",
    hoverGlow: "radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
    badgeClass: "bg-indigo-50 border-indigo-200 text-indigo-700",
    creatives: [
      { src: "/portfolio_stitch_1.jpg", alt: "Stitch Azadi Sale flat 30% off campaign creative", spanClass: "md:col-span-1" },
      { src: "/portfolio_stitch_2.jpg", alt: "Stitch end of season sale campaign creative", spanClass: "md:col-span-1" },
      { src: "/portfolio_stitch_3.jpg", alt: "Stitch 'The Digital Garden' cambric edition collection creative", spanClass: "md:col-span-1" },
    ],
  },
  {
    id: "starshah",
    name: "Star Shah",
    subtitle: "Music Release Campaign & Video PR",
    description:
      "An Instagram Reels campaign for the track 'Haule Haule': behind-the-scenes, location singing, artist Q&A and promo edits.",
    category: "Music Artist",
    industry: "artists-entertainment",
    services: ["content-creation", "social-media-management"],
    challenge: "Build attention for a new single, 'Haule Haule', and grow the artist's reach with listeners.",
    approach: [
      "Planned a multi-week Reels series instead of a single launch post.",
      "Shot location performances around Okara (railway station, fields, suburbs) tied to the artist's hometown story.",
      "Mixed formats: behind-the-scenes, a three-part Q&A, live acoustic sessions and promo edits.",
    ],
    results: ["1.2M+ total views across the Reels campaign"],
    stats: [
      { label: "Total Views", value: "1.2 Million+" },
      { label: "Target Profile", value: "Music Listeners & Youth" },
      { label: "Core Channels", value: "Instagram Reels" },
      { label: "Engagement Style", value: "BTS, Q&A, Singing" },
    ],
    logoPath: "/logo_starshah.jpg",
    logoPadding: "p-0",
    logoBg: "bg-black border-black",
    logoObject: "object-cover",
    ...RED_THEME,
    reels: [
      { id: "DPEKqAwCDzE", title: "Haule Haule - Hometown Session", category: "promo" },
      { id: "DOe77RxiBta", title: "Struggle and Hustle", category: "singing" },
      { id: "DOYZIQdDKOd", title: "Live Acoustic Session", category: "singing" },
      { id: "DOV0SOEiIy4", title: "Artist Q&A - Part 1: Inspiration Behind Haule Haule", category: "qa" },
      { id: "DOQPT4FDDVs", title: "Artist Q&A - Part 2: Composition & Lyrics", category: "qa" },
      { id: "DONnhE5jKLu", title: "Artist Q&A - Part 3: Fan Questions & Answers", category: "qa" },
      { id: "DOLizrvivzn", title: "Singing Live - HomeTown Fans and Family", category: "singing" },
      { id: "DOGXKS_DKwu", title: "Slow and Steady Wins The Race", category: "promo" },
      { id: "DOD5V8eDIWA", title: "Haule Haule - Chai Wala", category: "singing" },
      { id: "DN-xPNeDEG7", title: "Imprinted into Okara's legacy", category: "promo" },
      { id: "DN8O1OWjIvS", title: "Location Singing - Okara Railway Station", category: "singing" },
      { id: "DN5frrmDMdY", title: "Location Singing - Suburbs of Okara", category: "singing" },
      { id: "DN28DoKWIbv", title: "Location Singing - Fields of Okara", category: "singing" },
      { id: "DN0UMy12HDE", title: "Singing In The City That Made You", category: "singing" },
      { id: "DNiv0X7sI40", title: "About Your Journey", category: "promo" },
      { id: "DNaPgqGsATP", title: "BTS - Styling and Getting Ready", category: "bts" },
      { id: "DNXdfNEMiwb", title: "BTS - Setting The Shot", category: "bts" },
      { id: "DNSehiQMUje", title: "Reaction to Haule Haule", category: "promo" },
      { id: "DNP5UxmMbnd", title: "Before / After", category: "promo" },
      { id: "DNKi8RUsWXJ", title: "BTS - Camera vs You", category: "bts" },
      { id: "DNIBU1cMttB", title: "Haule Haule - People Who Made It Possible.", category: "bts" },
      { id: "DNGbKDusDeU", title: "BTS - Creating The Music Video", category: "bts" },
    ],
  },
  {
    id: "marshall",
    name: "Marshall Ahmad",
    subtitle: "'Lutteya' Single Launch Campaign",
    description:
      "Instagram Reels for the single 'Lutteya': transformation edits, transitions and behind-the-scenes styling content.",
    category: "Music Artist",
    industry: "artists-entertainment",
    services: ["content-creation"],
    challenge: "Promote the single 'Lutteya' to music fans on Instagram.",
    approach: [
      "Created a transition-led promo reel built around the track.",
      "Added behind-the-scenes styling content from the music video shoot.",
    ],
    results: [],
    resultsTodo: "[[TODO: confirm Marshall Ahmad campaign results (views, streams) and permission to publish]]",
    stats: [
      { label: "Single Promoted", value: "Lutteya" },
      { label: "Target Audience", value: "Music Fans & Youth" },
      { label: "Core Channels", value: "Instagram Reels" },
      { label: "Engagement Style", value: "Transitions, Modern Music" },
    ],
    logoPath: "/logo_marshall.jpg",
    logoPadding: "p-0",
    logoBg: "bg-black border-black",
    logoObject: "object-cover",
    ...RED_THEME,
    reels: [
      { id: "DNIuVOcsmOH", title: "Lutteya - Official Transition Promo Reel", category: "promo" },
      { id: "DOJQXTLkqHO", title: "BTS - Styling & Outfits for Lutteya Music Video", category: "bts" },
    ],
  },
  {
    id: "asmatariq",
    name: "Asma Tariq Studio",
    subtitle: "Creative Space & Studio Booking Promo",
    description:
      "A Reels series promoting a rental studio in Lahore: layouts, natural light and styling corners, aimed at brands and creators booking shoots and events.",
    category: "Creative Space",
    industry: "creative-space",
    services: ["content-creation", "social-media-management"],
    challenge: "Show brands and creators what the studio offers and turn that into bookings for shoots, productions and events.",
    approach: [
      "Produced studio walkthroughs and showcase reels highlighting light and layouts.",
      "Answered booking questions through Q&A and myth-busting reels.",
      "Captured behind-the-scenes footage from real shoots in the space.",
    ],
    results: [],
    resultsTodo: "[[TODO: confirm Asma Tariq Studio results (bookings, inquiries, views)]]",
    stats: [
      { label: "Primary Service", value: "Creative Space Rental" },
      { label: "Target Audience", value: "Brands & Creators" },
      { label: "Core Channels", value: "Instagram Reels" },
      { label: "Booking Drivers", value: "Aesthetic Layouts, Gear" },
    ],
    logoPath: "/logo_asmatariq.png",
    logoPadding: "p-0",
    logoBg: "bg-black border-black",
    logoObject: "object-contain",
    ...RED_THEME,
    reels: [
      { id: "DRU3Y7zjAJf", title: "Studio Space Showcase - Sunlight & Aesthetic Backdrops", category: "promo" },
      { id: "DRhfljAjGB-", title: "BTS - Behind the scenes of a catalog shoot in action", category: "bts" },
      { id: "DRryuxiDG5H", title: "Studio Walkthrough - Layout options for events & activities", category: "promo" },
      { id: "DSDHJPtjLKQ", title: "Q&A - How to book the studio for private brand activities", category: "qa" },
      { id: "DSfVt1QjGwp", title: "Studio Showcase - Tour Of The Studio", category: "promo" },
      { id: "DTFyzSTDFxO", title: "Event Promo - Booking the studio for workshops", category: "promo" },
      { id: "DTQQSSGjJH_", title: "Q&A - What's In My Bag?", category: "qa" },
      { id: "DTVK-UiDIlc", title: "Studio Showcase - What the Best Studio in Lahore Gets You", category: "promo" },
      { id: "DTdWoRGjOsW", title: "Last Minute Bookings - What's Possible?", category: "promo" },
      { id: "DTiX3vMjIA3", title: "Client Review - Host your next event or activity here", category: "qa" },
      { id: "DTlRYjwjMHL", title: "Busting Studio Myths", category: "qa" },
      { id: "DTnMrZCDPBo", title: "What's In My Bag ft. Lujain", category: "promo" },
      { id: "DT25rMsDPfz", title: "What Do You Get When You Book The Studio?", category: "qa" },
      { id: "DUqfaU3jDzK", title: "Reality Show.", category: "promo" },
    ],
  },
  {
    id: "ibadat",
    name: "Ibadat International University",
    subtitle: "Student Acquisition & Admissions Drive",
    description:
      "Search and social campaigns for the university's Spring 2026 admissions intake, targeting prospective students aged 18–35.",
    category: "Higher Education",
    industry: "education",
    services: ["meta-ads", "youtube-ads", "google-ads", "performance-marketing-lead-generation"],
    challenge: "Generate admission inquiries for the Spring 2026 intake within a fixed admissions window.",
    approach: [
      "Ran Meta and YouTube campaigns aimed at prospective students aged 18–35.",
      "Used search campaigns to capture students already looking for programmes.",
      "Produced an 'Admissions Open Spring 2026' creative set and a YouTube promo.",
    ],
    results: [],
    resultsTodo: "[[TODO: confirm Ibadat admissions results (inquiries, cost per lead, enrolments) and permission to publish]]",
    stats: [
      { label: "Target Group", value: "18-35 Student Intake" },
      { label: "Campaign Focus", value: "Spring '26 Drive" },
      { label: "Core Channels", value: "Meta Ads & YouTube" },
      { label: "Campaign Type", value: "Admissions Drive" },
    ],
    logoPath: "/logo_ibadat.jpg",
    logoPadding: "p-0",
    logoBg: "bg-white border-zinc-200",
    logoObject: "object-contain",
    ...RED_THEME,
    creatives: [
      { src: "/ibadat_admissions.jpg", alt: "Ibadat International University 'Admissions Open Spring 2026' campaign banner", spanClass: "md:col-span-3" },
    ],
    reels: [{ id: "x69SOCng1wc", title: "Admissions Spring 2026 Drive Promo", category: "promo", platform: "youtube" }],
  },
  {
    id: "flight",
    name: "Flight Education Consultants",
    subtitle: "Global Student Placement & Visas",
    description:
      "A Reels and social campaign for a study-abroad consultancy: success stories, country guides and Q&A on visas for the UK, Canada, Australia and Europe.",
    category: "Education Consultant",
    industry: "education",
    services: ["content-creation", "social-media-management", "meta-ads"],
    challenge: "Build trust with students and parents considering study abroad, and generate consultation inquiries.",
    approach: [
      "Produced country guides (UK, Australia, Canada, USA, Germany, Sweden) answering common questions.",
      "Turned visa approvals into success-story reels.",
      "Ran recurring Q&A reels on IELTS, gap years, blocked accounts and post-study work visas.",
    ],
    results: ["Campaign content highlighted the consultancy's 98% visa approval rate"],
    stats: [
      { label: "Visa Success", value: "98% Approvals" },
      { label: "Destinations", value: "UK, CAN, AUS, EU" },
      { label: "Core Channels", value: "Instagram Reels" },
      { label: "Placement Reach", value: "Worldwide Placements" },
    ],
    logoPath: "/logo_flight.jpg",
    logoPadding: "p-0",
    logoBg: "bg-white border-zinc-200",
    logoObject: "object-contain",
    ...RED_THEME,
    reels: [
      { id: "DRzkGOajB61", title: "Study in the UK - Requirements & Application Process", category: "promo" },
      { id: "DR92zLBjFuD", title: "Student Visa Approval Success Story", category: "bts" },
      { id: "DSxjZlDjIP2", title: "Why Choose Flight Education Consultants?", category: "promo" },
      { id: "DSzjbp1jNRO", title: "Study in Australia - Intake Queries", category: "qa" },
      { id: "DS2WLYfDCtw", title: "Canada Student Visa Updates 2026", category: "promo" },
      { id: "DS5KtyIjH32", title: "Behind the Scenes at Flight Education Office", category: "bts" },
      { id: "DS-JxFuDLkU", title: "Student Q&A: IELTS & English Requirements", category: "qa" },
      { id: "DTIhzGMDBhZ", title: "Scholarship Opportunities in Europe", category: "promo" },
      { id: "DTS080CDPdo", title: "Success Story - Visa Approved in 10 Days", category: "bts" },
      { id: "DTX-h2VDHlZ", title: "Q&A: Cost of Living in Australia & UK", category: "qa" },
      { id: "DTsk9O-DFbR", title: "Study in USA - Step-by-Step Guide", category: "promo" },
      { id: "DTvLIgrjE0o", title: "Behind the scenes with our visa consultants", category: "bts" },
      { id: "DT8BsPODMFA", title: "Q&A: Academic Gap Acceptance Rules", category: "qa" },
      { id: "DUBLV3CjGCZ", title: "Study in Sweden & Germany - Free Education?", category: "promo" },
      { id: "DUV4deHDBLT", title: "Student Review - Flight Education Experience", category: "bts" },
      { id: "DUgHbrYjMPy", title: "Q&A: Blocked Account for Germany", category: "qa" },
      { id: "DUtK9QQjJIn", title: "How to Apply for UK Dependents Visa", category: "promo" },
      { id: "DU-69DRDc06", title: "Behind the scenes of our Pre-departure Seminar", category: "bts" },
      { id: "DVOcLT7jEzV", title: "Q&A: Post Study Work Visa Options", category: "qa" },
      { id: "DVTksHnjoJX", title: "Flight Education Consultants Promotional Tour", category: "promo" },
    ],
  },
  {
    id: "afsana",
    name: "Nail Art by Afsana",
    subtitle: "Nail Studio Branding & Booking Ads",
    description:
      "A full brand and content build for a Lahore nail, lash and brow studio: logo and profile identity, Instagram highlight covers, a price and booking story set, and edited ad reels running as Meta conversation campaigns that send bookings straight to WhatsApp.",
    category: "Beauty & Nail Studio",
    industry: "beauty",
    services: ["content-creation", "social-media-management", "meta-ads"],
    challenge:
      "Turn a home-based nail studio in Lahore into a bookable brand: one consistent look across the Instagram profile, clear published prices, and ads that produce real appointment conversations instead of passive likes.",
    approach: [
      "Built the brand identity: oxblood and blush palette, logo lockups and a pinned 1x3 profile grid banner.",
      "Designed a highlight cover set (Book Now, Services, Portfolio, Lash & Brow, Reviews) and a six-card price and booking story set in Pakistani rupees.",
      "Edited vertical ad reels per nail set (copper ombre coffin, red chrome swirl, mauve holo stiletto, glitter ombre, wedding season), each cut to a caption sequence ending on a booking prompt.",
      "Ran the reels as Meta conversation campaigns to WhatsApp, testing caption and price variants of the same footage against each other.",
    ],
    results: [
      "44 WhatsApp booking conversations in 30 days at Rs 213.63 each, from Rs 9,399.76 of ad spend",
      "Meta marked the booking campaign high performing: 39,543 impressions and 23,997 people reached",
      "Advantage+ audience beat manual targeting, bringing conversations down to Rs 177.99 each",
      "Awareness campaigns ran alongside at Rs 0.06 per video view and Rs 0.10 per post engagement",
    ],
    stats: [
      { label: "Conversations", value: "44 in 30 Days" },
      { label: "Cost / Conversation", value: "Rs 213.63" },
      { label: "People Reached", value: "23,997" },
      { label: "Best Ad Set", value: "Rs 177.99 / Chat" },
    ],
    logoPath: "/logo_afsana.jpg",
    logoPadding: "p-0",
    logoBg: "bg-[#7B1F38] border-[#7B1F38]",
    logoObject: "object-cover",
    themeColor: "text-[#7B1F38]",
    borderTheme: "border-l-4 border-l-[#7B1F38] hover:border-[#A33050]",
    hoverGlow: "radial-gradient(circle at center, rgba(123, 31, 56, 0.08) 0%, transparent 70%)",
    badgeClass: "bg-rose-50 border-rose-200 text-[#7B1F38]",
    creatives: [
      { src: "/portfolio_afsana_hero.jpg", alt: "Nail Art by Afsana pinned 1x3 Instagram profile grid banner", spanClass: "md:col-span-3" },
      { src: "/portfolio_afsana_poster.jpg", alt: "'Forbidden fruit' red nail art campaign poster for Nail Art by Afsana", spanClass: "md:col-span-1", fit: "contain" },
      { src: "/portfolio_afsana_beforeafter.jpg", alt: "Before and after creative showing a nail set redone in red gel by Afsana", spanClass: "md:col-span-1", fit: "contain" },
      { src: "/portfolio_afsana_booking.jpg", alt: "'Send the service and the date' booking story card for Nail Art by Afsana", spanClass: "md:col-span-1", fit: "contain" },
      { src: "/portfolio_afsana_highlights.jpg", alt: "Instagram highlight cover set for Nail Art by Afsana: Book Now, Services, Portfolio, Lash & Brow and Reviews", spanClass: "md:col-span-3" },
      { src: "/portfolio_afsana_pricecards.jpg", alt: "Six-card Instagram story price set for Nail Art by Afsana covering nails, lashes, brows and booking, priced in Pakistani rupees", spanClass: "md:col-span-3" },
    ],
    proofPeriod: "Last 30 days: 6 September – 5 October 2026",
    proofShots: [
      {
        src: "/proof_afsana_campaigns.jpg",
        width: 1750,
        height: 344,
        title: "The booking campaign, marked high performing",
        alt: "Meta Ads Manager campaign table for the Nail Art by Afsana ad account: the booking campaign shows 44 messaging conversations at Rs213.63 per conversation on Rs9,399.76 spent, labelled high performing.",
        caption:
          "The WhatsApp booking campaign produced 44 messaging conversations at Rs 213.63 each. Meta labelled it high performing. The two awareness campaigns above it ran on much smaller budgets.",
        keyNumbers: ["44 messaging conversations", "Rs 213.63 per conversation", "Rs 9,399.76 spent"],
      },
      {
        src: "/proof_afsana_adsets.jpg",
        width: 1700,
        height: 240,
        title: "Three audiences tested against each other",
        alt: "Meta Ads Manager ad set table: Detailed Ad Set 18 conversations at Rs232.82, ADV+ Ad Set 23 conversations at Rs177.99, Broad Ad Set 3 conversations at Rs371.80.",
        caption:
          "The same creatives ran against three audiences. Advantage+ won at Rs 177.99 per conversation, detailed targeting followed at Rs 232.82, and the broad set was switched off at Rs 371.80.",
        keyNumbers: ["Advantage+: 23 chats at Rs 177.99", "Detailed: 18 chats at Rs 232.82", "Broad: 3 chats at Rs 371.80"],
      },
      {
        src: "/proof_afsana_reach.jpg",
        width: 1690,
        height: 344,
        title: "Reach and delivery cost",
        alt: "Meta Ads Manager campaign table showing impressions, reach, CPM, CTR and CPC: the booking campaign has 39,543 impressions, 23,997 reach, Rs237.71 CPM, 0.92% CTR and Rs25.75 CPC.",
        caption:
          "The booking campaign reached 23,997 people with 39,543 impressions at a Rs 237.71 CPM, with a 0.92% link click-through rate and Rs 25.75 per link click.",
        keyNumbers: ["39,543 impressions", "23,997 reached", "CPM Rs 237.71", "CTR 0.92%"],
      },
      {
        src: "/proof_afsana_ads.jpg",
        width: 1750,
        height: 500,
        title: "Which creatives produced the chats",
        alt: "Meta Ads Manager ad table for the booking ad set: Creative Image 1 with 11 messaging conversations at Rs196.02, Creative Video 3 with 7 at Rs171.12, Wedding Bow with 3 at Rs45.16.",
        caption:
          "Ad-level results inside the winning ad set. One static set carried the volume at 11 conversations, the reels added 7 more, and the wedding-season cut produced the cheapest chats of the month.",
        keyNumbers: ["Creative Image 1: 11 chats", "Creative Video 3: 7 chats at Rs 171.12", "Wedding Bow: Rs 45.16 per chat"],
      },
      {
        src: "/proof_afsana_videoviews.jpg",
        width: 1680,
        height: 300,
        title: "Reels views at Rs 0.06 each",
        alt: "Meta Ads Manager ad table for the video views campaign: Aqua 8,884 two-second views at Rs0.06, Pomegranate 5,437 at Rs0.06, Creative 2 3,518 at Rs0.08.",
        caption:
          "The awareness campaign bought two-second video views at Rs 0.06 to Rs 0.08, with the strongest reel reaching 16,962 people on Rs 494.45 of spend.",
        keyNumbers: ["17,839 video views in total", "Rs 0.06 per view", "Rs 1,117.01 spent"],
      },
      {
        src: "/proof_afsana_engagement.jpg",
        width: 1680,
        height: 300,
        title: "Post engagement at Rs 0.10",
        alt: "Meta Ads Manager ad table for the post engagement campaign: Aqua 5,409 post engagements at Rs0.09, Creative 2 2,929 at Rs0.12, Pomegranate 2,658 at Rs0.09.",
        caption:
          "A parallel engagement campaign kept the profile active between booking pushes, buying 10,996 post engagements at Rs 0.09 to Rs 0.12 each.",
        keyNumbers: ["10,996 post engagements", "Rs 0.10 per engagement", "Rs 1,105.87 spent"],
      },
    ],
    videos: [
      { src: "/videos/afsana/wedding-season.mp4", poster: "/thumbnails/afsana/wedding-season.jpg", title: "Wedding season set - 'Sort your wedding season look'", category: "promo" },
      { src: "/videos/afsana/glitter-ombre-water.mp4", poster: "/thumbnails/afsana/glitter-ombre-water.jpg", title: "Glitter ombre set - water drop edit", category: "promo" },
      { src: "/videos/afsana/mauve-holo-stiletto.mp4", poster: "/thumbnails/afsana/mauve-holo-stiletto.jpg", title: "Mauve holographic stiletto extensions", category: "promo" },
      { src: "/videos/afsana/red-chrome-swirl-v1.mp4", poster: "/thumbnails/afsana/red-chrome-swirl-v1.jpg", title: "Red chrome swirl almond set", category: "promo", note: "Caption variant A - service led" },
      { src: "/videos/afsana/red-chrome-swirl-v2.mp4", poster: "/thumbnails/afsana/red-chrome-swirl-v2.jpg", title: "Red chrome swirl almond set", category: "promo", note: "Caption variant B - price led" },
      { src: "/videos/afsana/copper-ombre-coffin-v1.mp4", poster: "/thumbnails/afsana/copper-ombre-coffin-v1.jpg", title: "Copper ombre coffin set", category: "promo", note: "Caption variant A - look led" },
      { src: "/videos/afsana/copper-ombre-coffin-v2.mp4", poster: "/thumbnails/afsana/copper-ombre-coffin-v2.jpg", title: "Copper ombre coffin set", category: "promo", note: "Caption variant B - price led" },
      { src: "/videos/afsana/copper-ombre-coffin-v3.mp4", poster: "/thumbnails/afsana/copper-ombre-coffin-v3.jpg", title: "Copper ombre coffin set", category: "promo", note: "Caption variant C - brand led" },
    ],
  },
  {
    id: "zorobroast",
    name: "Zoro Broast",
    subtitle: "Fast Food Branding & Menu Launch",
    description:
      "Launch and menu campaigns for a fast-food outlet in Faisal Town, Vehari: social posters, promotional banners and deal creatives.",
    category: "Fast Food Brand",
    industry: "food",
    services: ["social-media-management", "content-creation"],
    challenge: "Launch the outlet's menu and promote deals to drive local orders and footfall.",
    approach: [
      "Designed a menu-launch poster set for pizza, burgers and fried chicken.",
      "Built a run of BOGO and deal creatives for feeds and banners.",
      "Kept a consistent red/yellow brand look across every asset.",
    ],
    results: [],
    resultsTodo: "[[TODO: confirm Zoro Broast results (orders, footfall, reach) before publishing any figure]]",
    stats: [
      { label: "Outlet", value: "Faisal Town, Vehari" },
      { label: "Target Audience", value: "Fast Food Lovers" },
      { label: "Core Channels", value: "Social Media Design" },
      { label: "Campaign Focus", value: "Menu Launch & Branding" },
    ],
    logoPath: "/logo_zorobroast.jpg",
    logoPadding: "p-0",
    logoBg: "bg-white border-zinc-200",
    logoObject: "object-contain",
    ...RED_THEME,
    creatives: [
      { src: "/portfolio_zorobroast_1.jpg", alt: "Zoro Broast cheese loaded pizza campaign poster", spanClass: "md:col-span-1" },
      { src: "/portfolio_zorobroast_2.jpg", alt: "Zoro Broast extreme crunch fried chicken poster", spanClass: "md:col-span-1" },
      { src: "/portfolio_zorobroast_4.jpg", alt: "Zoro Broast hot and delicious Arabian burger poster", spanClass: "md:col-span-1" },
      { src: "/portfolio_zorobroast_3.jpg", alt: "Zoro Broast wide digital banner design", spanClass: "md:col-span-3" },
      { src: "/portfolio_zorobroast_5.jpg", alt: "Zoro Broast 'best pizza in town' yellow and black banner", spanClass: "md:col-span-1" },
      { src: "/portfolio_zorobroast_6.jpg", alt: "Zoro Broast buy one large pizza get small pizza and drink free poster", spanClass: "md:col-span-1" },
      { src: "/portfolio_zorobroast_9.jpg", alt: "Zoro Broast 'one slice won't be enough' red pizza poster", spanClass: "md:col-span-1" },
      { src: "/portfolio_zorobroast_7.jpg", alt: "Zoro Broast 'get the big one' red and gold BOGO pizza design", spanClass: "md:col-span-3" },
      { src: "/portfolio_zorobroast_8.jpg", alt: "Zoro Broast order one get one free pizza deal banner at Rs 1,999", spanClass: "md:col-span-3" },
      { src: "/portfolio_zorobroast_10.jpg", alt: "Zoro Broast 'har slice mein Zoro' BOGO pizza vertical poster", spanClass: "md:col-span-1" },
      { src: "/portfolio_zorobroast_11.jpg", alt: "Zoro Broast 'one pizza wasn't enough' BOGO banner", spanClass: "md:col-span-1" },
      { src: "/portfolio_zorobroast_13.jpg", alt: "Zoro Broast 'best pizza in town' red BOGO design", spanClass: "md:col-span-1" },
      { src: "/portfolio_zorobroast_12.jpg", alt: "Zoro Broast 'big on flavour, bigger on value' horizontal pizza banner", spanClass: "md:col-span-3" },
    ],
  },
];

export const getCaseStudy = (id: string) => CASE_STUDIES.find((c) => c.id === id);

/** Card preview images for the portfolio grid. */
export const cardCreatives = (c: CaseStudy): CreativeAsset[] =>
  c.creatives && c.creatives.length > 0
    ? c.creatives.slice(0, 3)
    : [{ src: c.logoPath, alt: `${c.name} profile` }];

/**
 * Client logo wall (homepage). Includes clients without a case-study page.
 * `caseStudy` links the logo to its portfolio page when one exists.
 */
export const CLIENT_LOGOS = [
  { name: "WWF Pakistan", path: "/logo_wwf.jpg", role: "Digital Advocacy", desc: "Digital awareness and engagement campaigns for conservation initiatives." },
  { name: "Zameen.com", path: "/logo_zameen.jpg", role: "Lead Acquisition", desc: "Campaigns for property launches and investor lead capture.", caseStudy: "zameen" },
  { name: "Ibadat University", path: "/logo_ibadat.jpg", role: "Student Acquisition", desc: "Admissions campaigns for the Spring 2026 intake.", imgClass: "scale-[2.0]", caseStudy: "ibadat" },
  { name: "CIMS School of Law", path: "/logo_cims.jpg", role: "Institutional Positioning", desc: "Local awareness and lead capture for legal studies admissions." },
  { name: "Stitch", path: "/logo_stitch.jpg", role: "DTC E-Commerce", desc: "Sale and collection campaigns driving online orders.", caseStudy: "stitch" },
  { name: "Star Shah", path: "/logo_starshah.jpg", role: "Music Artist Campaign", desc: "Multi-week Reels campaign for the single 'Haule Haule'.", caseStudy: "starshah" },
  { name: "Marshall Ahmad", path: "/logo_marshall.jpg", role: "Single Launch Campaign", desc: "Transition reels and behind-the-scenes content for the single 'Lutteya'.", caseStudy: "marshall" },
  { name: "Asma Tariq Studio", path: "/logo_asmatariq.png", role: "Studio Space Campaign", desc: "Reels driving bookings for shoots, productions and creative events.", caseStudy: "asmatariq" },
  { name: "Nail Art by Afsana", path: "/logo_afsana.jpg", role: "Beauty Studio Branding", desc: "Brand identity, price and booking content, and WhatsApp booking ads.", caseStudy: "afsana" },
  { name: "Flight Education Consultants", path: "/logo_flight.jpg", role: "Global Student Placement", desc: "Country guides, success stories and visa Q&A content.", caseStudy: "flight" },
];
