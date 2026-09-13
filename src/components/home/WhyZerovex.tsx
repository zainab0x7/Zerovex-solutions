"use client";



import { motion } from "framer-motion";
import {
  Brain,
  Award,
  Clock,
  Briefcase,
  Layers,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    num: "01",
    title: "AI-NATIVE ARCHITECTURE",
    icon: Brain,
    desc: "We analyze domain requirements and model constraints before writing a single line of code, ensuring AI integration is seamless and enterprise-grade.",
  },
  {
    num: "02",
    title: "WORLD-CLASS CRAFTSMANSHIP",
    icon: Award,
    desc: "Zero generic templates or brittle hacks. Every line of code, UI layout, and brand asset is engineered to international standards.",
  },
  {
    num: "03",
    title: "PREDICTABLE SLA & DELIVERY",
    icon: Clock,
    desc: "Clear sprint milestones, transparent communication, and dedicated engineering timelines guarantee on-time launches.",
  },
  {
    num: "04",
    title: "COMMERCIAL & ROI FOCUS",
    icon: Briefcase,
    desc: "Technology is a vehicle for commercial scale. We prioritize software features that directly drive conversion and operational value.",
  },
  {
    num: "05",
    title: "ENTERPRISE SCALABILITY",
    icon: Layers,
    desc: "System architectures designed to support high traffic volumes, multi-region deployments, and zero downtime evolution.",
  },
  {
    num: "06",
    title: "DEDICATED PARTNERSHIP",
    icon: HeartHandshake,
    desc: "We operate as your long-term technology division, offering continuous maintenance, security auditing, and feature updates.",
  },
];

export default function WhyZerovex() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 text-white border-b border-zinc-800/80 overflow-hidden">
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
            THE ZEROVEX ADVANTAGE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading uppercase tracking-tight text-white"
          >
            WHY ENTERPRISES CHOOSE <span className="text-red-500">ZEROVEX.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-400 font-normal"
          >
            Six foundational pillars defining our commitment to technical and creative excellence.
          </motion.p>
        </div>

        {/* 6 Reasons Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group border border-zinc-800 bg-zinc-950 p-8 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold text-red-600">
                    {item.num}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center border border-red-900 bg-red-950/60 text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading uppercase text-white tracking-tight mb-2 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
