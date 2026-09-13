"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Cloud, Rocket, CheckCircle, ArrowDown } from "lucide-react";

const roadmapNodes = [
  {
    phase: "01",
    year: "2026",
    title: "DIGITAL & WEB SOLUTIONS",
    status: "ACTIVE DEVELOPMENT",
    isCurrent: true,
    desc: "Delivering bespoke high-performance websites, corporate platforms, e-commerce architectures, and creative visual identities.",
  },
  {
    phase: "02",
    year: "2026 - 2027",
    title: "SOFTWARE ECOSYSTEM",
    status: "ACTIVE DEVELOPMENT",
    isCurrent: true,
    desc: "Building custom enterprise software, management systems, APIs, and scalable backend infrastructure for businesses.",
  },
  {
    phase: "03",
    year: "2027",
    title: "BUSINESS AUTOMATION",
    status: "EXPANDING CAPABILITY",
    isCurrent: true,
    desc: "Streamlining complex operations through automated digital workflows, system integration, and workflow optimization.",
  },
  {
    phase: "04",
    year: "COMING SOON",
    title: "CYBERSECURITY DIVISION",
    status: "FUTURE DIVISION",
    isFuture: true,
    desc: "A dedicated security division focused on protecting digital assets, cloud infrastructure, applications, and enterprise data.",
  },
  {
    phase: "05",
    year: "COMING SOON",
    title: "SAAS PLATFORM",
    status: "FUTURE DIVISION",
    isFuture: true,
    desc: "Proprietary cloud products designed to offer scalable, accessible software solutions to growing businesses globally.",
  },
  {
    phase: "06",
    year: "VISION TARGET",
    title: "GLOBAL TECHNOLOGY ECOSYSTEM",
    status: "LONG-TERM GOAL",
    isFuture: true,
    desc: "Establishing Zerovex Solutions as an internationally recognized technology enterprise crafting digital infrastructure.",
  },
];

export default function FutureVision() {
  return (
    <section className="relative bg-zinc-950 py-28 text-white border-t border-white/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[180px]" />

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
            STRATEGIC ROADMAP
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.05]"
          >
            TODAY WE BUILD SOLUTIONS. <br />
            <span className="text-gradient-red">TOMORROW WE BUILD TECHNOLOGY.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/60 font-light"
          >
            Our evolution from a digital agency into a global technology ecosystem.
          </motion.p>
        </div>

        {/* Visual Roadmap Timeline */}
        <div className="relative max-w-4xl mx-auto pt-6">
          {/* Vertical Connecting Cable */}
          <div className="absolute left-6 md:left-1/2 top-10 bottom-10 w-0.5 -translate-x-1/2 bg-gradient-to-b from-red-500 via-red-600/40 to-white/10" />

          <div className="space-y-12 relative">
            {roadmapNodes.map((node, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={node.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse text-left md:text-right" : "text-left"
                  }`}
                >
                  {/* Central Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-500 bg-black shadow-[0_0_20px_rgba(239,68,68,0.8)]">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        node.isCurrent ? "bg-red-500 animate-pulse" : "bg-white/40"
                      }`}
                    />
                  </div>

                  {/* Content Box */}
                  <div className="ml-14 md:ml-0 md:w-1/2 px-0 md:px-8">
                    <div
                      className={`group relative rounded-3xl border p-6 backdrop-blur-xl transition-all duration-300 ${
                        node.isFuture
                          ? "border-red-500/30 bg-zinc-950/80 shadow-[0_0_30px_rgba(239,68,68,0.1)]"
                          : "border-white/15 bg-black/80 hover:border-red-500/50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-red-500">
                          {node.year}
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase border ${
                            node.isFuture
                              ? "bg-red-500/20 text-red-400 border-red-500/40"
                              : "bg-white/10 text-white/80 border-white/20"
                          }`}
                        >
                          {node.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-black uppercase text-white tracking-tight mb-2">
                        {node.title}
                      </h3>

                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        {node.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Vision Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl border border-red-500/40 bg-zinc-950 p-8 sm:p-12 text-center backdrop-blur-2xl shadow-[0_0_60px_rgba(239,68,68,0.2)] space-y-4"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-red-400 uppercase">
            <Rocket className="h-4 w-4" /> OUR AMBITION & VISION
          </div>

          <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
            &ldquo;To build Zerovex Solutions into a globally recognized technology company creating products, platforms and digital infrastructure for businesses around the world.&rdquo;
          </p>

          <span className="block font-mono text-xs text-white/40 uppercase tracking-widest pt-2">
            Zerovex Leadership Statement
          </span>
        </motion.div>
      </div>
    </section>
  );
}
