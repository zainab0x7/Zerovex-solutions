"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Lightbulb, FileText, Palette, Code2, Rocket, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  { step: "01", name: "Idea", icon: Lightbulb, desc: "Defining your vision and business goals." },
  { step: "02", name: "Planning", icon: FileText, desc: "Mapping features, architecture, and milestones." },
  { step: "03", name: "Design", icon: Palette, desc: "Crafting modern UI/UX and brand aesthetics." },
  { step: "04", name: "Development", icon: Code2, desc: "Engineering high-performance software." },
  { step: "05", name: "Launch", icon: Rocket, desc: "Deployment, testing, and going live." },
  { step: "06", name: "Growth", icon: TrendingUp, desc: "Continuous support, scaling, and marketing." },
];

export default function BusinessJourneyTimeline() {
  return (
    <section className="py-24 bg-gray-900 text-white border-y border-gray-800">
      <div className="container-custom space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            eyebrow="OUR WORK PROCESS"
            title="How We Turn Ideas Into Reality"
            centered
          />
          <p className="text-xl font-bold font-mono text-[#E31B2B] tracking-tight">
            "Your idea is only the beginning."
          </p>
        </div>

        {/* Visual Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === steps.length - 1;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-zinc-950 border border-zinc-800 p-6 space-y-4 group hover:border-[#E31B2B] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-extrabold text-[#E31B2B]">
                      {item.step}
                    </span>
                    <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:bg-[#E31B2B] transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold font-heading text-white">
                    {item.name}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {!isLast && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
