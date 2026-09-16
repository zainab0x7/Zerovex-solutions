"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  {
    number: "01",
    title: "Business-First Thinking",
    description: "We start with commercial goals and user requirements, ensuring technology directly serves your growth.",
  },
  {
    number: "02",
    title: "Custom Solutions Instead of One-Size-Fits-All",
    description: "Every product, website, and visual system is custom-built for your specific business requirements.",
  },
  {
    number: "03",
    title: "Design + Development Under One Roof",
    description: "Seamless alignment between visual design and software engineering eliminates communication gaps.",
  },
  {
    number: "04",
    title: "Long-Term Support",
    description: "We build lasting partnerships, offering ongoing maintenance, security updates, and performance tuning.",
  },
  {
    number: "05",
    title: "Modern & Scalable Technology",
    description: "Using cutting-edge tech stacks and clean architecture designed to scale smoothly as your business expands.",
  },
];

export default function WhyChooseUsPoints() {
  return (
    <section className="py-24 bg-white border-y border-zinc-200">
      <div className="container-custom space-y-12">
        <SectionHeading
          eyebrow="OUR DIFFERENCE"
          title="Why Businesses Choose ZeroVex"
          subtitle="A practical, reliable approach focused on real commercial results."
        />

        {/* 5 Points Grid with Numerical Markers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <motion.div
              key={pt.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="corp-card p-8 bg-zinc-50 border border-zinc-200 space-y-4 hover:border-[#E31B2B]/60 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="w-12 h-[3px] bg-[#E31B2B]" />

              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold font-mono text-[#E31B2B]">
                  {pt.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  MARKER
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 font-heading leading-snug">
                {pt.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {pt.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
