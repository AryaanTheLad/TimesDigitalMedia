"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
  const router = useRouter();

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Optional Phone state
  const [adSpend, setAdSpend] = useState("");
  const [hurdles, setHurdles] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xgobwwyj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "Not Provided",
          adSpend: adSpend || "Not Provided",
          hurdles,
          message: message || "No details provided",
        }),
      });

      if (response.ok) {
        // Redirect to success page
        const query = new URLSearchParams({
          type: "inquiry",
          name: name,
          email: email,
          phone: phone || "",
          adSpend: adSpend,
          hurdles: hurdles,
          message: message,
        });
        router.push(`/contact/success?${query.toString()}`);
      } else {
        alert("Something went wrong. Please email us at thetimesdigitalmedia@gmail.com directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try emailing us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-white">
      <div className="absolute inset-0 bg-dot-pattern opacity-60 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest bg-red-55 px-3 py-1 rounded-full border border-red-200/60">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 max-w-2xl leading-tight tracking-tight">
            Ready to Scale Your Brand? Let's Talk.
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 max-w-xl leading-relaxed font-medium">
            Send us a campaign inquiry below, or reach out directly to scale your brand.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-xs sm:text-sm font-extrabold text-zinc-700">
            <a href="mailto:thetimesdigitalmedia@gmail.com" className="hover:text-red-600 transition-colors duration-300">
              thetimesdigitalmedia@gmail.com
            </a>
            <span className="hidden sm:inline text-zinc-300 font-normal">|</span>
            <a href="tel:+923164461707" className="hover:text-red-600 transition-colors duration-300">
              +92 316 4461707
            </a>
          </div>
        </div>

        {/* Contact Form Centered */}
        <div className="max-w-2xl mx-auto w-full">
          <div className="rounded-3xl p-6 md:p-8 border border-zinc-200/80 bg-zinc-50 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-red-500/[0.02] rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 border-b border-zinc-200 pb-4 mb-6">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div>
                  <span className="block text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
                    INQUIRY SYSTEM SECURE
                  </span>
                  <span className="text-sm font-bold text-zinc-900">Send a Direct Inquiry</span>
                </div>
              </div>
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter name"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 300 1234567"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="adSpend" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    What is your current monthly ad spend?
                  </label>
                  <div className="relative w-full">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-extrabold text-zinc-400 select-none">
                      $
                    </span>
                    <input
                      required
                      type="text"
                      id="adSpend"
                      value={adSpend}
                      onChange={(e) => setAdSpend(e.target.value)}
                      placeholder="e.g. 10,000 / mo"
                      className="w-full bg-white border border-zinc-200 rounded-xl pl-8 pr-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="hurdles" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    What are your primary scaling hurdles?
                  </label>
                  <input
                    required
                    type="text"
                    id="hurdles"
                    value={hurdles}
                    onChange={(e) => setHurdles(e.target.value)}
                    placeholder="e.g. creative exhaustion, tracking bugs, poor ROAS"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    Campaign Details & Target Goals
                  </label>
                  <textarea
                    rows={3}
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your brand, product average order value, and scaling targets..."
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium resize-none shadow-sm"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-4 mt-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/10 cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-sans"
                >
                  {isSubmitting ? "Routing Inquiry..." : "Submit Campaign Request"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Verification assurance label */}
            <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center text-[9px] text-zinc-400 font-bold uppercase tracking-wider">
              <span>Secure Server Encryption</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
