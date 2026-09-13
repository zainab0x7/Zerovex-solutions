"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { MessageSquareQuote, ShieldCheck } from "lucide-react";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialSectionProps {
  testimonials?: Testimonial[];
}

export default function TestimonialSection({ testimonials = [] }: TestimonialSectionProps) {
  return (
    <section className="py-20 bg-black border-y border-zinc-800">
      <div className="container-custom space-y-12">
        <SectionHeading
          eyebrow="CLIENT FEEDBACK & SOCIAL PROOF"
          title="What Our Clients Say"
          subtitle="Real outcomes and experiences from businesses partnering with ZeroVex."
          centered
        />

        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="corp-card p-8 bg-black border border-zinc-800 space-y-4 border-l-4 border-l-[#E31B2B]"
              >
                <p className="text-base text-zinc-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {t.author}
                    </h4>
                    <span className="text-xs text-zinc-400 font-mono">
                      {t.role}, {t.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Elegant Placeholder State */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto corp-card p-10 bg-black border border-zinc-800 text-center space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-red-950/40 text-[#E31B2B] flex items-center justify-center mx-auto border border-red-900/50">
              <MessageSquareQuote className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold text-white font-heading">
              Client Testimonials
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-md mx-auto italic font-medium">
              "Client testimonials will be featured here as projects are completed."
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
              <ShieldCheck className="h-4 w-4 text-[#E31B2B]" />
              <span>Authentic Client Reviews System Ready</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
