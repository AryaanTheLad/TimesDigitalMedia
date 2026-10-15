/**
 * Homepage "how we work": the first 30 days (matching the 30-day leads
 * commitment) and the numbers we report.
 * [[REVIEW]] Owner to confirm the timeline matches day-to-day practice.
 */
const PHASES = [
  {
    when: "Day 1–3",
    title: "Audit and tracking",
    desc: "Review your account, offer and landing pages. Set up Pixel, Conversions API and conversion goals, and agree the target cost per lead or ROAS we'll be judged on.",
  },
  {
    when: "Day 4–14",
    title: "Launch and test",
    desc: "Launch campaigns with one clear objective each. Test audiences, creative and offers side by side while Meta and Google gather data.",
  },
  {
    when: "Day 15–29",
    title: "Optimise",
    desc: "Move budget to the winners, cut what isn't working, and refresh creative before performance fades.",
  },
  {
    when: "Day 30",
    title: "Review and plan",
    desc: "A plain-language report: what was spent, what it produced, what each lead cost, and the plan for scaling next month.",
  },
];

const METRICS = [
  { label: "Cost per lead", desc: "What each enquiry or form fill costs" },
  { label: "Cost per chat", desc: "For WhatsApp and Messenger campaigns" },
  { label: "Cost per purchase", desc: "For online stores" },
  { label: "ROAS", desc: "Revenue returned for every rupee spent" },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="relative py-10 md:py-16 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-10 md:mb-12 flex flex-col items-start max-w-3xl">
          <span className="text-[9px] font-mono tracking-widest uppercase text-stone-500">04 / How we work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4">
            Your first 30 days
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHASES.map((phase, i) => (
            <li key={phase.title} className="relative rounded-[28px] border border-stone-200 bg-white p-7 shadow-sm flex flex-col gap-3">
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-serif lining-nums font-bold text-[#E8000E] leading-none">{i + 1}</span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-500">{phase.when}</span>
              </div>
              <h3 className="text-lg font-black font-display tracking-tight text-[#09090b]">{phase.title}</h3>
              <p className="text-sm text-[#57534E] leading-relaxed font-body font-medium">{phase.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-[28px] bg-[#09090b] text-white p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight">What we report on</h3>
            <p className="mt-3 text-sm text-zinc-400 font-medium leading-relaxed">
              Numbers tied to money, not likes. Your ad spend is billed to your own account, so you can check every figure yourself.
            </p>
          </div>
          <dl className="lg:col-span-8 grid grid-cols-2 gap-x-6 gap-y-6">
            {METRICS.map((m) => (
              <div key={m.label} className="border-t border-zinc-800 pt-4">
                <dt className="text-base sm:text-lg font-black text-white">{m.label}</dt>
                <dd className="mt-1 text-xs text-zinc-400 font-medium">{m.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
