"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Lightbulb, MessageCircle, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

/* ── Types ─────────────────────────────────────────────────────── */
interface FormData {
  website: string;
  business: string;
  runningAds: string;
  budget: string;
  goal: string;
  name: string;
  email: string;
  whatsapp: string;
}

type SubmitResult = "high" | "low" | null;

/* ─────────────────────────────────────────────────────────────────
 *  CONFIGURATION - set these two URLs to receive audit submissions
 * ───────────────────────────────────────────────────────────────── */

/**
 * Formspree endpoint - sends you an email for every submission.
 * Create a new form at https://formspree.io and paste the URL here.
 * Example: "https://formspree.io/f/xABcdEfG"
 */
const FORMSPREE_URL = "https://formspree.io/f/xgojeddr";

/**
 * Google Sheets Apps Script web-app URL - logs every submission to a spreadsheet.
 * See AUDIT_FORM_SETUP.md for the one-time setup instructions.
 * Example: "https://script.google.com/macros/s/AKfyc.../exec"
 * Set to "" to disable Google Sheets logging.
 */
const GOOGLE_SHEET_URL = "";

/* ───────────────────────────────────────────────────────────────── */

const TOTAL_STEPS = 6;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ── Animation helpers ─────────────────────────────────────────── */
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.3, ease },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

/* ── Selectable option button ──────────────────────────────────── */
function OptionButton({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`
        rounded-xl border p-4 text-sm font-bold text-center transition-colors cursor-pointer
        ${
          selected
            ? "border-[#E8000E] bg-red-50 text-[#E8000E]"
            : "border-stone-200 text-[#09090b] hover:border-[#E8000E]"
        }
      `}
    >
      {label}
    </button>
  );
}

/* ── Main component ────────────────────────────────────────────── */
export default function AuditForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<SubmitResult>(null);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const [formData, setFormData] = useState<FormData>({
    website: "",
    business: "",
    runningAds: "",
    budget: "",
    goal: "",
    name: "",
    email: "",
    whatsapp: "",
  });

  /* ── Field updater ── */
  const updateField = useCallback(
    <K extends keyof FormData>(field: K, value: FormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const markTouched = useCallback((field: string) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  }, []);

  /* ── Validation per step ── */
  const getStepErrors = useCallback(
    (step: number): Record<string, string> => {
      const errors: Record<string, string> = {};
      switch (step) {
        case 1:
          if (!formData.website.trim()) errors.website = "Please enter your website or Instagram handle.";
          break;
        case 2:
          if (!formData.business.trim()) errors.business = "Please describe what you sell and to whom.";
          break;
        case 3:
          if (!formData.runningAds) errors.runningAds = "Please select an option.";
          break;
        case 4:
          if (!formData.budget) errors.budget = "Please select a budget range.";
          break;
        case 5:
          if (!formData.goal) errors.goal = "Please select a goal.";
          break;
        case 6:
          if (!formData.name.trim()) errors.name = "Name is required.";
          if (!formData.email.trim()) {
            errors.email = "Email is required.";
          } else if (!EMAIL_REGEX.test(formData.email.trim())) {
            errors.email = "Please enter a valid email address.";
          }
          break;
      }
      return errors;
    },
    [formData],
  );

  const isStepValid = useCallback(
    (step: number) => Object.keys(getStepErrors(step)).length === 0,
    [getStepErrors],
  );

  /* ── Navigation ── */
  const goNext = useCallback(() => {
    if (!isStepValid(currentStep)) {
      // Mark all fields for current step as touched to show errors
      if (currentStep === 1) markTouched("website");
      if (currentStep === 2) markTouched("business");
      if (currentStep === 3) markTouched("runningAds");
      if (currentStep === 4) markTouched("budget");
      if (currentStep === 5) markTouched("goal");
      if (currentStep === 6) {
        markTouched("name");
        markTouched("email");
      }
      return;
    }
    if (currentStep < TOTAL_STEPS) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
      setTouchedFields({});
    }
  }, [currentStep, isStepValid, markTouched]);

  const goBack = useCallback(() => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
      setTouchedFields({});
    }
  }, [currentStep]);

  /* ── Submit - sends to Formspree (email) + Google Sheets in parallel ── */
  const handleSubmit = useCallback(async () => {
    // Mark step 6 fields touched
    markTouched("name");
    markTouched("email");
    if (!isStepValid(6)) return;

    setIsSubmitting(true);

    const payload = {
      website: formData.website.trim(),
      business: formData.business.trim(),
      runningAds: formData.runningAds,
      budget: formData.budget,
      goal: formData.goal,
      name: formData.name.trim(),
      email: formData.email.trim(),
      whatsapp: formData.whatsapp.trim() || "Not provided",
      _subject: `New Growth Audit Request from ${formData.name.trim()}`,
    };

    // Fire both endpoints in parallel - one failing won't block the other
    const promises: Promise<void>[] = [];

    // 1. Formspree (email notification)
    if (FORMSPREE_URL && !FORMSPREE_URL.includes("YOUR_FORM_ID")) {
      promises.push(
        fetch(FORMSPREE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((res) => {
            if (!res.ok) console.error("[AuditForm] Formspree error:", res.status);
          })
          .catch((err) => console.error("[AuditForm] Formspree network error:", err)),
      );
    }

    // 2. Google Sheets (spreadsheet logging)
    if (GOOGLE_SHEET_URL) {
      promises.push(
        fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors", // Apps Script requires no-cors from browsers
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
          .then(() => {}) // no-cors gives opaque response, can't check status
          .catch((err) => console.error("[AuditForm] Google Sheets error:", err)),
      );
    }

    if (promises.length === 0) {
      // eslint-disable-next-line no-console
      console.log("[AuditForm] No endpoints configured. Data:", payload);
    }

    await Promise.allSettled(promises);

    // Determine branch
    const highBudgets = ["$500-2k", "$2k-5k", "$5k+"];
    setSubmitResult(highBudgets.includes(formData.budget) ? "high" : "low");
    setIsSubmitting(false);
  }, [formData, isStepValid, markTouched]);

  /* ── Shared input class ── */
  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-stone-200 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#E8000E]/20 focus:border-[#E8000E] transition-colors placeholder:text-stone-400";

  /* ── Error renderer ── */
  const FieldError = ({ field }: { field: string }) => {
    const errors = getStepErrors(currentStep);
    if (!touchedFields[field] || !errors[field]) return null;
    return <p className="text-xs text-red-500 mt-1">{errors[field]}</p>;
  };

  /* ── Progress bar width ── */
  const progressPercent = submitResult ? 100 : ((currentStep) / TOTAL_STEPS) * 100;

  /* ── Auto-advance for selectable option steps ── */
  const selectOption = useCallback(
    (field: keyof FormData, value: string) => {
      updateField(field, value);
      // Auto-advance after a brief pause so the user sees the selection
      setTimeout(() => {
        setDirection(1);
        setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
        setTouchedFields({});
      }, 250);
    },
    [updateField],
  );

  /* ── Step content renderer ── */
  const renderStep = () => {
    switch (currentStep) {
      /* ── Step 1: Website / IG ── */
      case 1:
        return (
          <div className="flex flex-col gap-3">
            <label htmlFor="audit-website" className="text-lg sm:text-xl font-bold font-display text-[#09090b]">
              What&apos;s your website or Instagram?
            </label>
            <input
              id="audit-website"
              type="text"
              value={formData.website}
              onChange={(e) => updateField("website", e.target.value)}
              onBlur={() => markTouched("website")}
              placeholder="e.g. yoursite.com or @handle"
              aria-label="Your website or Instagram handle"
              aria-required="true"
              className={inputClass}
            />
            <FieldError field="website" />
          </div>
        );

      /* ── Step 2: Business description ── */
      case 2:
        return (
          <div className="flex flex-col gap-3">
            <label htmlFor="audit-business" className="text-lg sm:text-xl font-bold font-display text-[#09090b]">
              What do you sell, and to whom?
            </label>
            <textarea
              id="audit-business"
              rows={3}
              value={formData.business}
              onChange={(e) => updateField("business", e.target.value)}
              onBlur={() => markTouched("business")}
              placeholder="e.g. We sell premium athleisure to urban women aged 25-40"
              aria-label="Describe what you sell and your target audience"
              aria-required="true"
              className={`${inputClass} resize-none`}
            />
            <FieldError field="business" />
          </div>
        );

      /* ── Step 3: Running paid ads? ── */
      case 3:
        return (
          <div className="flex flex-col gap-4">
            <p className="text-lg sm:text-xl font-bold font-display text-[#09090b]">
              Are you running paid ads right now?
            </p>
            <div className="grid grid-cols-3 gap-3" role="radiogroup" aria-label="Paid ads status">
              {["Yes", "No", "Stopped"].map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={formData.runningAds === opt}
                  onSelect={() => selectOption("runningAds", opt)}
                />
              ))}
            </div>
            <FieldError field="runningAds" />
          </div>
        );

      /* ── Step 4: Budget ── */
      case 4:
        return (
          <div className="flex flex-col gap-4">
            <p className="text-lg sm:text-xl font-bold font-display text-[#09090b]">
              Monthly marketing budget?
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="radiogroup" aria-label="Monthly budget range">
              {["<$500", "$500-2k", "$2k-5k", "$5k+"].map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={formData.budget === opt}
                  onSelect={() => selectOption("budget", opt)}
                />
              ))}
            </div>
            <FieldError field="budget" />
          </div>
        );

      /* ── Step 5: Goal ── */
      case 5:
        return (
          <div className="flex flex-col gap-4">
            <p className="text-lg sm:text-xl font-bold font-display text-[#09090b]">
              Your #1 goal in 90 days?
            </p>
            <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Primary goal">
              {["More leads", "More sales", "Brand awareness", "Launch"].map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={formData.goal === opt}
                  onSelect={() => selectOption("goal", opt)}
                />
              ))}
            </div>
            <FieldError field="goal" />
          </div>
        );

      /* ── Step 6: Contact info ── */
      case 6:
        return (
          <div className="flex flex-col gap-4">
            <p className="text-lg sm:text-xl font-bold font-display text-[#09090b]">
              Where should we send your audit?
            </p>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-name" className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">
                Name
              </label>
              <input
                id="audit-name"
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                onBlur={() => markTouched("name")}
                placeholder="Your name"
                aria-label="Your name"
                aria-required="true"
                className={inputClass}
              />
              <FieldError field="name" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-email" className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">
                Email
              </label>
              <input
                id="audit-email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                onBlur={() => markTouched("email")}
                placeholder="you@company.com"
                aria-label="Your email address"
                aria-required="true"
                className={inputClass}
              />
              <FieldError field="email" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-whatsapp" className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">
                WhatsApp <span className="text-stone-300">(optional)</span>
              </label>
              <input
                id="audit-whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => updateField("whatsapp", e.target.value)}
                placeholder="+92..."
                aria-label="Your WhatsApp number (optional)"
                aria-required="false"
                className={inputClass}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  /* ── WhatsApp fallback CTA (shared) ── */
  const WhatsAppFallback = () => (
    <a
      href="https://wa.me/923298223036"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors mt-4"
    >
      <MessageCircle className="w-4 h-4" />
      <span>Or message us on WhatsApp</span>
    </a>
  );

  /* ── SUCCESS SCREENS ─────────────────────────────────────────── */
  if (submitResult) {
    return (
      <section id="audit" className="relative py-8 md:py-12 bg-transparent border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            {/* Progress bar - completed */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="h-1 w-full rounded-full bg-stone-200 overflow-hidden">
                <div className="h-full bg-[#E8000E] rounded-full transition-all duration-500 ease-out" style={{ width: "100%" }} />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-[32px] bg-white border border-stone-200 p-8 sm:p-12 shadow-sm text-center flex flex-col items-center gap-6"
            >
              {submitResult === "high" ? (
                /* ── HIGH budget success ── */
                <>
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] leading-tight">
                    We&apos;ll send your audit within 24 hours.
                  </h3>
                  <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-md">
                    One of our growth strategists will review your answers and prepare a personalised audit.
                  </p>

                  {/* Calendar embed placeholder */}
                  <div
                    id="calendar-embed"
                    className="w-full rounded-2xl border-2 border-dashed border-stone-300 p-8 text-center text-sm text-stone-400 min-h-[300px] flex items-center justify-center"
                  >
                    [Calendar Embed - paste Cal.com or Calendly iframe here]
                  </div>

                  <WhatsAppFallback />
                </>
              ) : (
                /* ── LOW budget success ── */
                <>
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#09090b] leading-tight">
                    Thanks! We&apos;ve received your details.
                  </h3>
                  <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-md">
                    Our team will review your answers and get back to you shortly. In the meantime, feel free to reach out or explore our packages.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <a
                      href="https://wa.me/923298223036"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors shadow-sm text-center inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Message us on WhatsApp</span>
                    </a>
                    <Link
                      href="/#packages"
                      className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors text-center"
                    >
                      View Starter Package
                    </Link>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  /* ── FORM ─────────────────────────────────────────────────────── */
  return (
    <section id="audit" className="relative py-8 md:py-12 bg-transparent border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mx-auto flex flex-col items-center text-center gap-4 mb-10 md:mb-12"
        >
          <motion.span variants={itemVariants} className="text-[9px] font-mono tracking-widest uppercase text-stone-400">
            FREE GROWTH AUDIT
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#09090b] leading-[1.05] mt-4">
            Get Your Free Growth Audit
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm sm:text-base text-[#57534E] leading-relaxed font-body font-medium max-w-xl">
            Answer 6 quick questions and we&apos;ll send you a personalised audit within 24 hours.
          </motion.p>
        </motion.div>

        {/* Form card */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-[32px] bg-white border border-stone-200 p-6 sm:p-8 shadow-sm">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="h-1 w-full rounded-full bg-stone-200 overflow-hidden">
                <motion.div
                  className="h-full bg-[#E8000E] rounded-full"
                  initial={false}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.4, ease }}
                />
              </div>
              <p className="text-xs font-mono text-stone-400 mt-2">
                Step {currentStep} of {TOTAL_STEPS}
              </p>
            </div>

            {/* Animated step content */}
            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
              {/* Back button */}
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-[#09090b] border border-stone-300 hover:bg-[#09090b] hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {/* Next / Submit button */}
              {currentStep < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!isStepValid(currentStep)}
                  className="px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isStepValid(currentStep) || isSubmitting}
                  className="px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#09090b] hover:bg-[#E8000E] transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Get My Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
