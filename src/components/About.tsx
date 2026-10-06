import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, BarChart, HardDrive, Mail, Phone, MapPin } from "lucide-react";
import PhoneLink from "./PhoneLink";
import { ENTITY, SITE, SOCIALS, NETWORK_PROPERTIES } from "@/data/site";
import { NETWORK_STATS, STATS_SOURCE } from "@/data/stats";
import { PACKAGES, PRICING_NOTES } from "@/data/pricing";
import { SERVICES } from "@/data/services";
import { CLIENT_LOGOS } from "@/data/caseStudies";

const VALUES = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-red-600" aria-hidden="true" />,
    title: "Credibility & Authority",
    description:
      "Put your business in front of an audience that already follows a recognised Pakistani news brand, and build credibility and recall alongside your paid campaigns. We've worked with clients including WWF Pakistan, Zameen.com and Ibadat International University.",
  },
  {
    icon: <BarChart className="w-5 h-5 text-red-600" aria-hidden="true" />,
    title: "Influential Audience Profiles",
    // [[REVIEW]] Audience description carried over from the previous site. Platform
    // insights confirm age/gender/city figures but not professions; confirm or soften.
    description:
      "Connect directly with a premium audience segment, including educated youth, professionals, policymakers, business leaders, and financial elites.",
  },
  {
    icon: <HardDrive className="w-5 h-5 text-red-600" aria-hidden="true" />,
    title: "Precision Campaign Delivery",
    description:
      "Customised digital advertising, sponsored content, placements and targeted social media amplification, run by one team.",
  },
];

export default function About() {
  const s = NETWORK_STATS;
  const facts: { label: string; value: React.ReactNode }[] = [
    { label: "Name", value: `${SITE.name} (${SITE.shortName})` },
    { label: "What we are", value: "Performance marketing agency" },
    { label: "Based in", value: `${SITE.location.city}, ${SITE.location.country}` },
    { label: "Markets", value: "Clients across Pakistan (including Lahore, Karachi, Islamabad) and abroad" },
    { label: "Services", value: SERVICES.map((x) => x.shortName).join(", ") },
    {
      label: "Pricing",
      value: `${PACKAGES.filter((p) => p.price).map((p) => `${p.name} from ${p.priceLabel}/month`).join("; ")}; custom packages on request. Starting prices, adjustable to requirements. Tax-inclusive, ad spend excluded.`,
    },
    { label: "International", value: PRICING_NOTES.international },
    {
      label: "Media network",
      value: `Times of Islamabad news portal + Facebook and Instagram accounts of Times of Islamabad and TDM: ${s.followers.display} followers, ${s.monthlyReach.display} monthly reach (${STATS_SOURCE.label.toLowerCase()}).`,
    },
    { label: "Selected clients", value: CLIENT_LOGOS.map((c) => c.name).join(", ") },
    {
      label: "Contact",
      value: (
        <>
          <a href={`mailto:${SITE.email}`} className="underline hover:text-[#E8000E]">{SITE.email}</a> · {SITE.phone.display} (phone and WhatsApp)
        </>
      ),
    },
  ];

  return (
    <div className="relative bg-white">
      {/* Who we are */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight tracking-tight">
              Paid ads plus an audience we own.
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">{ENTITY.differentiator}</p>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">
              We run campaigns for brands, institutions and businesses reaching audiences across Pakistan&apos;s main commercial
              hubs (Islamabad, Rawalpindi, Karachi, Lahore, Quetta and Peshawar) and in international markets.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-zinc-300 transition-all duration-300 border-l-4 border-l-[#E8000E] hover:border-red-500 hover:border-l-4 hover:border-l-[#E8000E] hover:shadow-[0_20px_40px_rgba(232,0,14,0.06)] hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-300">
                  {value.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold text-zinc-900 group-hover:text-[#E8000E] transition-colors">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship with Times of Islamabad */}
      <section className="py-10 md:py-14 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#09090b]">TDM and Times of Islamabad</h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4 text-sm sm:text-base text-zinc-700 font-medium leading-relaxed">
            <p>{ENTITY.networkRelationship}</p>
            <p>
              The network includes the{" "}
              <a href={NETWORK_PROPERTIES.newsPortal.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">
                Times of Islamabad news portal
              </a>{" "}
              and its social accounts, plus TDM&apos;s own profiles. Advertisers can buy placements on it directly:{" "}
              <Link href="/media-network" className="font-bold text-[#09090b] underline decoration-[#E8000E] underline-offset-4">advertise on the media network</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Facts block (GEO: concise, citable facts) */}
      <section id="facts" className="py-10 md:py-14 border-t border-stone-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#09090b]">Times Digital Media at a glance</h2>
            <p className="mt-3 text-sm text-zinc-600 font-medium">{ENTITY.oneLiner}</p>
          </div>
          <dl className="lg:col-span-8 border-t border-stone-200">
            {facts.map((f) => (
              <div key={f.label} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 py-3.5 border-b border-stone-200">
                <dt className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500">{f.label}</dt>
                <dd className="sm:col-span-2 text-sm text-[#09090b] font-medium leading-relaxed">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Location, contact, logo */}
      <section className="py-10 md:py-14 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-4 overflow-hidden min-h-[130px]">
            <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#E8000E]" />
            <div className="p-3 rounded-xl bg-red-50 text-[#E8000E] border border-red-200/60 shrink-0">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="block text-[10px] font-black text-[#E8000E] uppercase tracking-widest mb-2">Based in</span>
              <p className="text-sm text-zinc-800 font-extrabold">Lahore, Pakistan</p>
              <p className="text-xs text-zinc-600 font-medium">Serving clients across Pakistan and abroad</p>
            </div>
          </div>

          <div className="relative p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-4 overflow-hidden min-h-[130px]">
            <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#E8000E]" />
            <div className="p-3 rounded-xl bg-red-50 text-[#E8000E] border border-red-200/60 shrink-0">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="block text-[10px] font-black text-[#E8000E] uppercase tracking-widest mb-2">Get in touch</span>
              <a href={`mailto:${SITE.email}`} className="text-xs sm:text-sm text-zinc-800 font-extrabold hover:text-[#E8000E] break-all">
                {SITE.email}
              </a>
              <PhoneLink location="about" className="mt-1 inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-800 font-extrabold hover:text-[#E8000E]">
                <Phone className="w-3.5 h-3.5" aria-hidden="true" /> {SITE.phone.display}
              </PhoneLink>
            </div>
          </div>

          <div className="relative p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-col items-center justify-center gap-3 overflow-hidden min-h-[130px]">
            <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-[#E8000E]" />
            <Image src="/logo.png" alt="Times Digital Media logo" width={200} height={87} className="max-w-full max-h-[60px] object-contain" unoptimized />
            <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">
              {SOCIALS.map((x) => (
                <li key={x.href}>
                  <a href={x.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8000E]">
                    {x.handle} {x.owner === "network" && "(network)"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
