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
          <div className="flex flex-col items-center justify-center gap-3.5 mt-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-extrabold text-zinc-700">
              <a href="mailto:thetimesdigitalmedia@gmail.com" className="hover:text-red-600 transition-colors duration-300">
                thetimesdigitalmedia@gmail.com
              </a>
              <span className="hidden sm:inline text-zinc-300 font-normal">|</span>
              <a href="tel:+923164461707" className="hover:text-red-600 transition-colors duration-300">
                +92 316 4461707
              </a>
            </div>
            
            <a 
              href="https://wa.me/923164461707?text=Hey%2C%20I%20am%20interested%20in%20your%20digital%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437 0 9.862-4.386 9.866-9.775.002-2.61-1.01-5.064-2.85-6.908-1.838-1.844-4.283-2.86-6.885-2.86-5.445 0-9.871 4.387-9.875 9.776-.002 1.83.473 3.619 1.378 5.187L1.936 21.08l4.711-1.926zm12.48-5.382c-.343-.172-2.03-1.002-2.343-1.117-.312-.114-.541-.172-.77.172-.228.344-.886 1.117-1.085 1.346-.2.228-.399.257-.742.086-1.579-.79-2.735-1.378-3.82-3.238-.286-.492.286-.457.82-1.52.091-.183.046-.343-.023-.486-.068-.143-.541-1.3-.741-1.782-.195-.47-.393-.406-.54-.414-.14-.007-.301-.008-.461-.008-.16 0-.422.06-.643.301-.22.24-.843.83-.843 2.022 0 1.191.867 2.339.988 2.502.121.163 1.706 2.605 4.133 3.651.577.249 1.028.397 1.379.508.58.185 1.108.159 1.525.097.465-.069 1.432-.585 1.633-1.15.201-.564.201-1.05.14-1.15-.06-.1-.22-.16-.563-.332z" />
              </svg>
              <span>Chat on WhatsApp</span>
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
