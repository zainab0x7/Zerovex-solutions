"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What services does ZeroVex provide?",
    a: "ZeroVex Solutions provides custom web development, modern website engineering, graphic design and brand identity, digital marketing and growth strategy, e-commerce store building, and ongoing website maintenance & support.",
  },
  {
    q: "Do you build custom websites?",
    a: "Yes. Every website and web application we engineer is tailored to your business goals, target audience, and brand requirements using modern, fast, and scalable technologies like Next.js, React, and TypeScript.",
  },
  {
    q: "Can you work with startups and small businesses?",
    a: "Absolutely. We work with ambitious startups, growing small businesses, and established enterprises alike, delivering high-impact solutions structured around your budget and expansion timeline.",
  },
  {
    q: "Do you provide website maintenance?",
    a: "Yes. We offer continuous website maintenance, security monitoring, regular data backups, performance tuning, and technical support so your digital platform remains secure and fast 24/7.",
  },
  {
    q: "Can you create complete branding and digital presence?",
    a: "Yes. We provide complete visual identity systems—including logo design, brand architecture, social media graphics, UI design, and cohesive marketing assets to project maximum authority.",
  },
  {
    q: "How can I start a project?",
    a: "Starting a project is simple. Reach out through our Contact page or WhatsApp (+92 341 2270393) to share your requirements. Our team will review your goals and schedule a initial discovery call.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container-custom space-y-12 max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Common Questions About Working With ZeroVex"
          subtitle="Clear answers to help you make informed decisions about your digital project."
          centered
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className="corp-card bg-white border border-gray-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-gray-900 font-heading text-base sm:text-lg hover:text-[#E31B2B] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#E31B2B] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
