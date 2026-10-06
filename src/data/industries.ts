/**
 * Industry pages — only industries with real TDM client work behind them.
 * Add an industry here only when there's a case study to support it
 * (no doorway pages).
 *
 * [[REVIEW]] "What we've learned" bullets are written from the case studies
 * on this site; owner to confirm or replace with first-hand detail.
 */

export interface Industry {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  intro: string;
  challenges: string[];
  approach: string[];
  caseStudies: string[];
  services: string[];
  articles: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "education",
    name: "Education & Admissions",
    h1: "Admissions marketing for universities, schools and education consultants",
    metaTitle: "University Admissions Marketing in Pakistan | Education Ads",
    metaDescription:
      "Admissions campaigns for universities, law schools and study-abroad consultants in Pakistan, built around intake deadlines. Meta, YouTube, Search and reels.",
    primaryKeyword: "university admissions marketing pakistan",
    intro:
      "Education marketing runs on deadlines. An intake opens, inquiries need to arrive while applications are still open, and every week of delay costs students. TDM has run admissions and student-acquisition work for Ibadat International University, CIMS School of Law and Flight Education Consultants.",
    challenges: [
      "Short admissions windows, so campaigns need to deliver quickly",
      "Parents and students both influence the decision",
      "Many inquiries are low-intent unless forms qualify them",
      "Trust matters: students want proof of outcomes (visas, placements, campus life)",
    ],
    approach: [
      "Plan campaigns backward from the intake deadline",
      "Use Meta and YouTube to reach 18–35 prospects, and Search to capture students already looking",
      "Answer real questions in reels (requirements, costs, visas) to build trust before the inquiry",
      "Qualify leads by programme and intake so admissions teams call the right people first",
    ],
    caseStudies: ["ibadat", "flight"],
    services: ["meta-ads", "youtube-ads", "google-ads", "content-creation"],
    articles: ["meta-ads-vs-google-ads"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    h1: "Real estate lead generation in Pakistan",
    metaTitle: "Real Estate Lead Generation in Pakistan | Property Ads",
    metaDescription:
      "Property launch, expo and open-house campaigns that generate buyer and investor leads in Pakistan. Meta Ads, lead forms and media-network amplification.",
    primaryKeyword: "real estate lead generation pakistan",
    intro:
      "Property buyers research for weeks before they call. Real estate campaigns have to create awareness for a project, then capture the buyers and investors who are serious. TDM has run campaigns for Zameen.com covering property expos, project launches and open houses.",
    challenges: [
      "High-value decisions with long research cycles",
      "Lead forms attract browsers unless they ask the right questions",
      "Launches and expos are date-bound, so reach has to build fast",
    ],
    approach: [
      "Use launch and event creatives to build reach quickly in target cities",
      "Capture leads with forms that ask about budget, location and timeline",
      "Retarget engaged viewers with project details and open-house invitations",
      "Amplify major launches across the TDM media network",
    ],
    caseStudies: ["zameen"],
    services: ["meta-ads", "performance-marketing-lead-generation"],
    articles: ["facebook-ads-cost-pakistan", "what-is-a-good-roas"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce & Retail",
    h1: "E-commerce marketing for Pakistani online stores",
    metaTitle: "E-commerce Marketing Agency Pakistan | Meta Ads for Online Stores",
    metaDescription:
      "Sale, launch and always-on campaigns for Pakistani online stores. Purchase tracking, ROAS reporting and creative built for Facebook and Instagram.",
    primaryKeyword: "ecommerce marketing pakistan",
    intro:
      "For an online store, the only numbers that matter are orders and the return on ad spend behind them. TDM has run sale and collection campaigns for clothing brand Stitch, and the Meta Ads Manager results on our homepage show purchase campaigns at 8.8x–9.4x ROAS.",
    challenges: [
      "Sale periods (Azadi, Eid, end of season) are crowded and expensive",
      "Purchase tracking often breaks, so ROAS can't be trusted",
      "Creative fatigue sets in quickly on Instagram",
    ],
    approach: [
      "Fix Pixel and Conversions API purchase tracking before scaling spend",
      "Plan sale campaigns ahead with retargeting audiences ready",
      "Rotate creative regularly and move budget to the best ROAS",
    ],
    caseStudies: ["stitch"],
    services: ["meta-ads", "google-ads", "social-media-management"],
    articles: ["what-is-a-good-roas", "facebook-ads-cost-pakistan"],
  },
  {
    slug: "artists-entertainment",
    name: "Artists & Entertainment",
    h1: "Music and artist promotion in Pakistan",
    metaTitle: "Music & Artist Promotion in Pakistan | Reels Campaigns",
    metaDescription:
      "Release campaigns for Pakistani musicians: multi-week Reels series with behind-the-scenes, location performances, Q&A and promo edits.",
    primaryKeyword: "music promotion pakistan",
    intro:
      "A single launch post rarely carries a release. Artists need a story people can follow for weeks. TDM has produced release campaigns for Star Shah ('Haule Haule', 1.2M+ views) and Marshall Ahmad ('Lutteya').",
    challenges: [
      "One post isn't enough to build momentum for a release",
      "Audiences respond to the artist's story, not just the track",
      "Content needs to be produced fast and in volume",
    ],
    approach: [
      "Plan a multi-week Reels series around the release date",
      "Mix behind-the-scenes, Q&A, location performances and promo edits",
      "Tie content to the artist's personal story and hometown",
    ],
    caseStudies: ["starshah", "marshall"],
    services: ["content-creation", "social-media-management"],
    articles: [],
  },
];

export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);
