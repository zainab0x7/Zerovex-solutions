"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Lightbulb, Palette, Cpu, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Ideas",
    description: "Transforming practical business concepts into structured, high-value digital products.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Crafting clean, intuitive, and modern visual identities that elevate brand prestige.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Engineering scalable, high-performance software systems built on modern frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Delivering sustainable digital solutions designed to help businesses scale effectively.",
  },
];

export default function FounderStoryPillars() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom space-y-12">
        <SectionHeading
          eyebrow="WHY ZEROVEX?"
          title="Bridging Design, Technology & Strategy"
        />

        {/* Founder Story Text */}
        <div className="max-w-4xl space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg font-normal">
          <p className="border-l-4 border-[#E31B2B] pl-6 py-1 text-gray-900 font-medium text-lg sm:text-xl">
            "ZeroVex Solutions was built around a simple idea: businesses should not have to choose between good technology, strong design and practical digital solutions."
          </p>
          <p className="text-gray-600">
            We bring development, design and digital strategy together to help businesses turn ideas into meaningful digital experiences.
          </p>
        </div>

        {/* 4 Visual Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="corp-card p-6 sm:p-8 space-y-4 hover:border-[#E31B2B]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded bg-red-50 border border-red-100 text-[#E31B2B] flex items-center justify-center group-hover:bg-[#E31B2B] group-hover:text-white group-hover:border-[#E31B2B] transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider block">
                    PILLAR 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
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
