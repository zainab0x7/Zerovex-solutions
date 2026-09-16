"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { MessageSquare, Eye, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Direct updates, honest timelines, and straightforward advice throughout every project stage.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "No hidden costs, no unexpected delays. Clear milestones and total clarity from start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Support",
    description: "Continuous assistance, speed optimization, security monitoring, and technical growth partnership.",
  },
];

export default function TrustSectionGoals() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom space-y-12">
        <SectionHeading
          eyebrow="TRUST & RELIABILITY"
          title="Built Around Your Goals"
          subtitle="We focus on building practical commercial value and long-term client trust."
          centered
        />

        {/* Statement Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-6 sm:p-8 bg-zinc-50 border-l-4 border-l-[#E31B2B] border border-zinc-200 text-center shadow-sm"
        >
          <p className="text-base sm:text-lg text-zinc-900 font-medium leading-relaxed font-heading">
            "We focus on understanding the business behind every project—not just building another website."
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="corp-card p-8 space-y-4 bg-zinc-50 border border-zinc-200 hover:border-[#E31B2B]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded bg-red-50 border border-red-200 text-[#E31B2B] flex items-center justify-center group-hover:bg-[#E31B2B] group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
