"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import { SITE, whatsappHref } from "@/data/site";
import { getAttribution, trackLead, trackWhatsAppClick } from "@/lib/analytics";

/** Same Formspree inbox as the contact form; the subject line separates the two. */
const FORMSPREE_URL = "https://formspree.io/f/xgobwwyj";

const FORMATS = ["Sponsored social post", "Reel / video post", "News portal placement", "Not sure yet"];
const BUDGETS = ["Under Rs 100k", "Rs 100k–300k", "Rs 300k–1M", "Rs 1M+", "Prefer not to say"];

const inputClass =
  "w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium";
const labelClass = "text-[11px] font-bold text-zinc-500 uppercase tracking-wider";

export default function MediaNetworkForm() {
  const router = useRouter();
  const [formats, setFormats] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const toggleFormat = (f: string) => setFormats((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    if (!name || !email) return;

    setIsSubmitting(true);
    setError(false);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Media network inquiry from ${name}`,
          inquiry_type: "Media network advertising",
          name,
          email,
          phone: String(fd.get("phone") || "").trim() || "Not provided",
          company: String(fd.get("company") || "").trim(),
          website: String(fd.get("website") || "").trim(),
          formats: formats.join(", ") || "Not specified",
          dates: String(fd.get("dates") || "").trim() || "Not specified",
          budget: String(fd.get("budget") || "") || "Not specified",
          message: String(fd.get("message") || "").trim(),
          ...getAttribution(),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackLead({ form: "media_network", email, phone: String(fd.get("phone") || "") || undefined, extra: { formats: formats.join("|") } });
      router.push("/media-network/thank-you");
    } catch (err) {
      console.error("[MediaNetworkForm]", err);
      setError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl p-6 md:p-8 border border-zinc-200/80 bg-zinc-50 flex flex-col gap-5" aria-labelledby="network-form-title">
      <div>
        <h2 id="network-form-title" className="text-xl font-black tracking-tight text-[#09090b]">Media network inquiry</h2>
        <p className="mt-1 text-sm text-[#57534E] font-medium">Tell us what you want to promote. We&apos;ll reply with formats, dates and pricing.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mn-name" className={labelClass}>Your name</label>
          <input id="mn-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mn-email" className={labelClass}>Email</label>
          <input id="mn-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mn-phone" className={labelClass}>Phone / WhatsApp (optional)</label>
          <input id="mn-phone" name="phone" type="tel" autoComplete="tel" placeholder="+92..." className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mn-company" className={labelClass}>Company or brand</label>
          <input id="mn-company" name="company" autoComplete="organization" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mn-website" className={labelClass}>Website or Instagram (optional)</label>
        <input id="mn-website" name="website" placeholder="yoursite.com or @handle" className={inputClass} />
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className={`${labelClass} mb-2`}>Formats you&apos;re interested in</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {FORMATS.map((f) => (
            <label key={f} className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-bold cursor-pointer transition-colors min-h-[44px] ${formats.includes(f) ? "border-[#E8000E] bg-red-50 text-[#E8000E]" : "border-stone-200 bg-white text-[#09090b] hover:border-[#E8000E]"}`}>
              <input type="checkbox" className="accent-[#E8000E] w-4 h-4" checked={formats.includes(f)} onChange={() => toggleFormat(f)} />
              {f}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mn-dates" className={labelClass}>Preferred dates (optional)</label>
          <input id="mn-dates" name="dates" placeholder="e.g. 1–15 November" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mn-budget" className={labelClass}>Budget (optional)</label>
          <select id="mn-budget" name="budget" defaultValue="" className={inputClass}>
            <option value="">Select a range</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mn-message" className={labelClass}>What do you want to promote?</label>
        <textarea id="mn-message" name="message" rows={3} required className={`${inputClass} resize-none`} placeholder="Product, launch, event or announcement, and who you want to reach" />
      </div>

      {error && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 font-medium">
          Sorry, that didn&apos;t send. Please try again, or{" "}
          <a href={whatsappHref("Hi, I'd like to advertise on the TDM media network.")} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("network_form_error")} className="font-bold underline">
            message us on WhatsApp
          </a>{" "}
          or email <a href={`mailto:${SITE.email}`} className="font-bold underline">{SITE.email}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 bg-[#09090b] hover:bg-[#E8000E] text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Send inquiry <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
