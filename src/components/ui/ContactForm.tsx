"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Custom Development",
    projectDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectDetails) {
      toast.error("Please complete all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Thank you! Your inquiry has been sent to ZeroVex Solutions.");
    }, 900);
  };

  return (
    <div className="corp-card p-6 sm:p-10 relative space-y-6 bg-black border border-zinc-800">
      
      {/* WhatsApp Quick Callout */}
      <div className="bg-emerald-950/40 p-4 rounded-lg border border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-emerald-900/60 text-emerald-400">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">Prefer Instant Messaging?</span>
            <span className="text-xs text-zinc-400">Connect with our team directly on WhatsApp</span>
          </div>
        </div>
        <a
          href="https://wa.me/923412270393"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-brand-red text-xs py-2 px-4 shrink-0 bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-950/40 border border-[#E31B2B] text-[#E31B2B] flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-white font-heading">
            Inquiry Submitted Successfully
          </h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            Thank you for contacting ZeroVex Solutions. Our team will review your project details and get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "Custom Development",
                projectDetails: "",
              });
            }}
            className="btn-brand-outline text-xs mt-4"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Your Name <span className="text-[#E31B2B]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#E31B2B] focus:bg-black focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Email Address <span className="text-[#E31B2B]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#E31B2B] focus:bg-black focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#E31B2B] focus:bg-black focus:outline-none transition-colors"
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#E31B2B] focus:bg-black focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="space-y-2">
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Select Required Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 text-sm text-white focus:border-[#E31B2B] focus:bg-black focus:outline-none transition-colors"
            >
              <option value="Custom Development">Custom Development</option>
              <option value="Website Development">Website Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Website Maintenance">Website Maintenance</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Project Details & Scope <span className="text-[#E31B2B]">*</span>
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows={4}
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us about your project requirements, technical goals, or target timelines..."
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#E31B2B] focus:bg-black focus:outline-none transition-colors resize-y"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={loading}
            className="btn-brand-red w-full justify-center py-4 text-xs tracking-widest uppercase font-bold"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending Inquiry...</span>
              </>
            ) : (
              <>
                <span>Send Inquiry</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
