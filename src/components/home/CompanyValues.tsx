"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Lightbulb, Award, ShieldCheck, Palette, Lock, TrendingUp } from "lucide-react";

const valuesList = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging modern frameworks, artificial intelligence, and smart automation to solve business challenges.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Adhering to strict engineering standards, clean code principles, and meticulous design precision.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Operating with total transparency, honest expectations, and clear communication in every project.",
  },
  {
    icon: Palette,
    title: "Creativity",
    description: "Crafting distinctive, high-impact visual design systems that build prestige and commercial distinction.",
  },
  {
    icon: Lock,
    title: "Reliability",
    description: "Engineering secure, dependable digital infrastructure designed for continuous uptime and stability.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Focusing every strategy, design, and line of code on expanding our clients' market reach and success.",
  },
];

export default function CompanyValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom space-y-12">
        <SectionHeading
          eyebrow="OUR VALUES"
          title="Principles That Define Our Work"
          subtitle="Core values guiding our decision-making, technical execution, and client relationships."
          centered
        />

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesList.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="corp-card p-6 sm:p-8 space-y-4 hover:border-[#E31B2B]/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-[#E31B2B] flex items-center justify-center group-hover:bg-[#E31B2B] group-hover:text-white transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-heading">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
