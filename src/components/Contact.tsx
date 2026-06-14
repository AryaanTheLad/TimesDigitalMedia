"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

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
        // Redirect to success page with a clean URL (no parameters)
        router.push("/contact/success");
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
    <section id="contact" className="relative pt-6 pb-20 lg:pt-8 lg:pb-28 bg-white">
      {/* Editorial Dot Pattern Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Contact details */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-55 px-2 py-0.5 rounded border border-red-200/40">
                GET IN TOUCH
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#09090b] leading-[1.1] mb-6">
              Ready to Scale Your Brand? <span className="text-[#E8000E]">Let's Talk.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-zinc-500 max-w-lg leading-relaxed font-body font-medium mb-8">
              Send us a campaign inquiry, or reach out directly to scale your brand. Our marketing specialists are available to review your targets.
            </p>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-4 w-full max-w-md">
              {/* Email Card */}
              <a 
                href="mailto:thetimesdigitalmedia@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 hover:bg-zinc-100/50 hover:border-zinc-300 transition-all duration-300 group shadow-sm hover:shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[9px] text-zinc-400 font-bold uppercase tracking-wider font-mono">Email Us Directly</span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-800 break-all">thetimesdigitalmedia@gmail.com</span>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href="tel:+923164461707" 
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                    (window as any).gtag_report_conversion("tel:+923164461707");
                  } else {
                    window.location.href = "tel:+923164461707";
                  }
                }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 hover:bg-zinc-100/50 hover:border-zinc-300 transition-all duration-300 group shadow-sm hover:shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[9px] text-zinc-400 font-bold uppercase tracking-wider font-mono">Call Our Team</span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-800">+92 316 4461707</span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/923164461707?text=Hey%2C%20I%20am%20interested%20in%20your%20digital%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-emerald-100 bg-emerald-50/20 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all duration-300 group shadow-sm hover:shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437 0 9.862-4.386 9.866-9.775.002-2.61-1.01-5.064-2.85-6.908-1.838-1.844-4.283-2.86-6.885-2.86-5.445 0-9.871 4.387-9.875 9.776-.002 1.83.473 3.619 1.378 5.187L1.936 21.08l4.711-1.926zm12.48-5.382c-.343-.172-2.03-1.002-2.343-1.117-.312-.114-.541-.172-.77.172-.228.344-.886 1.117-1.085 1.346-.2.228-.399.257-.742.086-1.579-.79-2.735-1.378-3.82-3.238-.286-.492.286-.457.82-1.52.091-.183.046-.343-.023-.486-.068-.143-.541-1.3-.741-1.782-.195-.47-.393-.406-.54-.414-.14-.007-.301-.008-.461-.008-.16 0-.422.06-.643.301-.22.24-.843.83-.843 2.022 0 1.191.867 2.339.988 2.502.121.163 1.706 2.605 4.133 3.651.577.249 1.028.397 1.379.508.58.185 1.108.159 1.525.097.465-.069 1.432-.585 1.633-1.15.201-.564.201-1.05.14-1.15-.06-.1-.22-.16-.563-.332z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[9px] text-emerald-600 font-bold uppercase tracking-wider font-mono">Chat on WhatsApp</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-800">Connect in Real-Time</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7 w-full relative">
            {/* Soft Ambient glow behind the card */}
            <div 
              className="absolute -top-12 -right-12 w-72 h-72 rounded-full pointer-events-none z-0" 
              style={{ background: "radial-gradient(circle at center, rgba(239, 68, 68, 0.08) 0%, transparent 70%)" }} 
            />
            
            <div className="relative z-10 rounded-3xl p-6 md:p-8 border border-zinc-200/80 bg-zinc-50 flex flex-col justify-between overflow-hidden shadow-xl">
              
              {/* Sleek Animated Linear Progress Bar Loader */}
              {isSubmitting && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-100 overflow-hidden z-20">
                  <motion.div 
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-[50%] bg-[#E8000E]"
                  />
                </div>
              )}

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
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Routing Inquiry...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Campaign Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
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
      </div>
    </section>
  );
}
