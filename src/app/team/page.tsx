"use client";

import { motion } from "framer-motion";
import FoundersSection from "@/components/founders/FoundersSection";
import DarkCompanyCTA from "@/components/ui/DarkCompanyCTA";

export default function TeamPage() {
  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-black text-center border-b border-white/10 overflow-hidden">
        <div className="container-custom relative z-10 max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#E31B2B] uppercase font-bold"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E31B2B]" />
            EXECUTIVE LEADERSHIP
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-[1.05] font-heading"
          >
            The People Behind <span className="text-[#E31B2B]">ZeroVex</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Built with ideas, technology and a commitment to meaningful digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Founders Section */}
      <FoundersSection />

      {/* Dark Company CTA */}
      <DarkCompanyCTA />
    </div>
  );
}
