"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Maximize2,
  Eye,
  Search,
  Gauge,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const trustPillars = [
  {
    title: "RESPONSIVE",
    icon: Smartphone,
    desc: "Seamless visual layouts optimized across mobile, tablet, desktop, and ultra-wide displays.",
  },
  {
    title: "FAST",
    icon: Zap,
    desc: "Optimized asset loading, modern image formats, and minimal JavaScript overhead for instant load times.",
  },
  {
    title: "SCALABLE",
    icon: Maximize2,
    desc: "Decoupled component architecture designed to expand cleanly as client traffic and data grow.",
  },
  {
    title: "ACCESSIBLE",
    icon: Eye,
    desc: "Semantic HTML structures, proper color contrast ratios, and full ARIA keyboard navigation compliance.",
  },
  {
    title: "SEO-FRIENDLY",
    icon: Search,
    desc: "Clean metadata hierarchies, canonical indexing structures, and rich search engine previews.",
  },
  {
    title: "PERFORMANCE-FOCUSED",
    icon: Gauge,
    desc: "GPU-accelerated animations and clean code routines tailored for top Core Web Vitals scores.",
  },
  {
    title: "SECURITY-CONSCIOUS",
    icon: ShieldCheck,
    desc: "Input sanitization, SSL standards, and strict privacy protocols to safeguard digital operations.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative bg-black py-28 text-white border-t border-white/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="container-custom relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-red-500 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            ENGINEERING STANDARDS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.05]"
          >
            BUILT FOR PEOPLE. <br />
            <span className="text-gradient-red">DESIGNED FOR BUSINESS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/60 font-light"
          >
            We adhere strictly to modern web and software engineering standards without relying on inflated claims.
          </motion.p>
        </div>

        {/* Trust Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 border border-red-500/30 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-black uppercase text-white tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-white/40">
                  <CheckCircle2 className="h-3.5 w-3.5 text-red-500" />
                  <span>Standard Specification</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
