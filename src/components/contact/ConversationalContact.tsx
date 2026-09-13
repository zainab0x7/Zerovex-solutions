"use client";



import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const projectTypes = [
  "Web Application",
  "Custom AI & LLM",
  "Brand Identity",
  "UI/UX Design",
  "Business Automation",
  "Healthcare Tech",
  "EdTech Platform",
  "Enterprise Software",
];

const budgetRanges = [
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+",
  "To Be Discussed",
];

export default function ConversationalContact() {
  const [selectedType, setSelectedType] = useState<string>("Web Application");
  const [selectedBudget, setSelectedBudget] = useState<string>("$5,000 - $15,000");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-[#0A0A0A] py-28 text-white border-b border-zinc-800/80 overflow-hidden">
      <div className="container-custom relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-red-500 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            BOOK A FREE CONSULTATION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading uppercase tracking-tight leading-[1.08] text-white"
          >
            LET&apos;S ARCHITECT YOUR <br />
            <span className="text-red-500">NEXT DIGITAL BREAKTHROUGH.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-400 font-normal"
          >
            Schedule a free strategic consultation or submit your project details below. Our founders respond within 24 hours.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Interactive Project Configurator */}
          <div className="lg:col-span-7">
            <div className="border border-zinc-800 bg-zinc-950 p-8 sm:p-10 space-y-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center border border-red-900 bg-red-950 text-red-500">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading uppercase text-white">Consultation Request Received</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto font-normal">
                    Thank you for reaching out to Zerovex Solutions. Co-founders Zainab Ayaz &amp; Ahmed Kamal will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 border border-zinc-700 bg-zinc-900 px-6 py-2.5 text-xs font-mono font-bold uppercase text-zinc-300 hover:text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Project Type Selection */}
                  <div className="space-y-4">
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-red-500">
                      01. SELECT PROJECT DOMAIN
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = selectedType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className={`px-3.5 py-2 text-xs font-mono font-bold transition-colors ${
                              isSelected
                                ? "bg-red-600 text-white"
                                : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div className="space-y-4">
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-red-500">
                      02. EXPECTED BUDGET RANGE
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((range) => {
                        const isSelected = selectedBudget === range;
                        return (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setSelectedBudget(range)}
                            className={`px-3.5 py-2 text-xs font-mono font-bold transition-colors ${
                              isSelected
                                ? "bg-red-600 text-white"
                                : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Contact Form Inputs */}
                  <div className="space-y-4">
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-red-500">
                      03. YOUR CONTACT DETAILS &amp; PROJECT BRIEF
                    </label>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-zinc-800 bg-[#080808] px-4 py-3 text-xs font-mono text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Business Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-zinc-800 bg-[#080808] px-4 py-3 text-xs font-mono text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          placeholder="Phone / WhatsApp"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border border-zinc-800 bg-[#080808] px-4 py-3 text-xs font-mono text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="Company / Organization"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full border border-zinc-800 bg-[#080808] px-4 py-3 text-xs font-mono text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your project goals, timelines, or technical requirements *"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border border-zinc-800 bg-[#080808] px-4 py-3 text-xs font-mono text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <MagneticButton>
                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center gap-3 bg-red-600 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-red-700 transition-colors shadow-md"
                    >
                      <span>BOOK FREE CONSULTATION</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-zinc-800 bg-zinc-950 p-8 space-y-6">
              <div className="border-b border-zinc-800 pb-4">
                <span className="text-xs font-mono text-red-500 font-bold uppercase">
                  DIRECT CONTACT ARCHIVE
                </span>
                <h3 className="text-2xl font-bold font-heading uppercase text-white mt-1">
                  GET IN TOUCH DIRECTLY
                </h3>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:zerovexsolutions@gmail.com"
                  className="flex items-center gap-4 group p-4 border border-zinc-800 bg-[#080808] hover:border-zinc-700 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-red-900 bg-red-950 text-red-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase">
                      OFFICIAL EMAIL
                    </span>
                    <span className="text-xs font-mono font-bold text-white group-hover:text-red-500 transition-colors">
                      zerovexsolutions@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923376266137"
                  className="flex items-center gap-4 group p-4 border border-zinc-800 bg-[#080808] hover:border-zinc-700 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-red-900 bg-red-950 text-red-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase">
                      PHONE / WHATSAPP
                    </span>
                    <span className="text-xs font-mono font-bold text-white group-hover:text-red-500 transition-colors">
                      +92 337 6266137
                    </span>
                  </div>
                </a>

                {/* Website */}
                <a
                  href="https://www.zerovexsolutions.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-4 border border-zinc-800 bg-[#080808] hover:border-zinc-700 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-red-900 bg-red-950 text-red-500">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase">
                      OFFICIAL DOMAIN
                    </span>
                    <span className="text-xs font-mono font-bold text-white group-hover:text-red-500 transition-colors">
                      www.zerovexsolutions.site
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-zinc-800 font-mono text-xs text-zinc-400 space-y-1">
                <div>FOUNDERS: Zainab Ayaz &amp; Ahmed Kamal</div>
                <div>Available worldwide for enterprise partnerships.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
