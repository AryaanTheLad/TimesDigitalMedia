"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adSpend, setAdSpend] = useState("< $5,000 / mo");
  const [hurdles, setHurdles] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Booking Mock State
  const [selectedDate, setSelectedDate] = useState<string | null>("May 29, 2026");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const dates = [
    { day: "Thu", date: "28", label: "May 28, 2026" },
    { day: "Fri", date: "29", label: "May 29, 2026" },
    { day: "Mon", date: "01", label: "Jun 01, 2026" },
    { day: "Tue", date: "02", label: "Jun 02, 2026" },
  ];

  const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleBookingConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    setBookingConfirmed(true);
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
            Book an immediate growth call with our team or send us a campaign inquiry below.
          </p>
        </div>

        {/* Contact/Booking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Scheduler Mock (Calendly) */}
          <div className="lg:col-span-6 rounded-3xl p-6 md:p-8 border border-zinc-200/80 bg-zinc-50 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-red-500/[0.02] rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 border-b border-zinc-200 pb-4 mb-6">
                <CalendarIcon className="w-5 h-5 text-red-600" />
                <div>
                  <span className="block text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
                    CALENDLY SYNC ACTIVE
                  </span>
                  <span className="text-sm font-bold text-zinc-900">Request a Free Ad Account Audit Session</span>
                </div>
              </div>

              {!bookingConfirmed ? (
                <div className="flex flex-col gap-6">
                  <p className="text-xs text-zinc-500 font-medium">
                    Select a date and preferred time slot to schedule a direct video consultation with our performance leads. We will live-audit your current Meta/TikTok ad accounts.
                  </p>

                  {/* Date Selectors */}
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">
                      1. Select a Date
                    </span>
                    <div className="grid grid-cols-4 gap-3">
                      {dates.map((dateObj) => (
                        <button
                          key={dateObj.label}
                          onClick={() => {
                            setSelectedDate(dateObj.label);
                            setSelectedTime(null);
                          }}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                            selectedDate === dateObj.label
                              ? "bg-red-50 border-red-500 text-red-700 font-bold"
                              : "bg-white border-zinc-200 text-zinc-500 hover:border-zinc-300"
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">
                            {dateObj.day}
                          </span>
                          <span className="text-base font-extrabold mt-1">{dateObj.date}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2"
                    >
                      <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">
                        2. Select Time (EST)
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all text-xs font-semibold ${
                              selectedTime === time
                                ? "bg-red-50 border-red-500 text-red-700 font-bold"
                                : "bg-white border-zinc-200 text-zinc-500 hover:border-zinc-300"
                            }`}
                          >
                            <Clock className="w-3.5 h-3.5" />
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 gap-4"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-500 stroke-[1.5px]" />
                  <h3 className="text-xl font-bold text-zinc-900 mt-2">Audit Session Reserved!</h3>
                  <div className="p-4 rounded-xl bg-white border border-zinc-200 text-left max-w-sm w-full shadow-sm">
                    <span className="block text-[10px] text-zinc-450 font-bold uppercase tracking-wider mb-1">
                      Meeting Details
                    </span>
                    <span className="block text-sm font-bold text-zinc-900">
                      30-Min Live Ad Audit
                    </span>
                    <span className="block text-xs text-zinc-500 mt-1 font-medium">
                      📅 {selectedDate}
                    </span>
                    <span className="block text-xs text-zinc-500 mt-0.5 font-medium">
                      ⏰ {selectedTime} (Eastern Standard Time)
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setSelectedTime(null);
                    }}
                    className="text-xs text-red-600 hover:text-red-700 font-bold transition-colors mt-2"
                  >
                    Reschedule or choose another session
                  </button>
                </motion.div>
              )}
            </div>

            {/* Confirm Action Button */}
            {!bookingConfirmed && (
              <button
                disabled={!selectedDate || !selectedTime}
                onClick={handleBookingConfirm}
                className={`w-full py-4 mt-8 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  selectedDate && selectedTime
                    ? "bg-zinc-900 text-white hover:bg-zinc-800 cursor-pointer shadow-lg"
                    : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
                }`}
              >
                Confirm consultation booking
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-6 rounded-3xl p-6 md:p-8 border border-zinc-200/80 bg-zinc-50 flex flex-col justify-between relative overflow-hidden shadow-xl">
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

              {!isSubmitted ? (
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
                    <label htmlFor="adSpend" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      What is your current monthly ad spend?
                    </label>
                    <select
                      id="adSpend"
                      value={adSpend}
                      onChange={(e) => setAdSpend(e.target.value)}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium shadow-sm"
                    >
                      <option value="< $5,000 / mo">&lt; $5,000 / mo</option>
                      <option value="$5,000 - $20,000 / mo">$5,000 - $20,000 / mo</option>
                      <option value="$20,000 - $50,000 / mo">$20,000 - $50,000 / mo</option>
                      <option value="$50,000+ / mo">$50,000+ / mo</option>
                    </select>
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

                  <Magnetic className="w-full">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full py-4 mt-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/10 cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Routing Inquiry..." : "Submit Campaign Request"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Magnetic>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-16 gap-4"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-500 stroke-[1.5px]" />
                  <h3 className="text-xl font-bold text-zinc-900 mt-2">Request Received</h3>
                  <p className="text-xs text-zinc-500 max-w-xs leading-relaxed font-medium">
                    Thank you, {name}. Your inquiry was routed successfully. An acquisition strategist will reach out to your work email ({email}) in under 4 hours with customized options.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setEmail("");
                      setHurdles("");
                      setMessage("");
                    }}
                    className="text-xs text-red-600 hover:text-red-700 font-bold transition-colors mt-2"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              )}
            </div>

            {/* Verification assurance label */}
            <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center justify-between text-[9px] text-zinc-400 font-bold uppercase tracking-wider">
              <span>Secure Server Encryption</span>
              <span>Average Response: 3.8 Hrs</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
