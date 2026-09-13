"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const possibilities = [
  { label: "Web", sub: "High-Performance Sites & Apps" },
  { label: "Software", sub: "Custom Enterprise Solutions" },
  { label: "Design", sub: "Brand & UI/UX Excellence" },
  { label: "Automation", sub: "Intelligent Workflow Systems" },
  { label: "Security", sub: "Coming Soon • Infrastructure Guard" },
  { label: "SaaS", sub: "Coming Soon • Scalable Cloud Ecosystem" },
];

export default function WowTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform logo scale and breakdown into digital nodes
  const logoScale = useTransform(scrollYProgress, [0, 0.4], [0.7, 1.2]);
  const nodeOpacity = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);
  const nodesSpread = useTransform(scrollYProgress, [0.3, 0.7], [0, 100]);
  const textY = useTransform(scrollYProgress, [0.35, 0.75], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);

  return (
    <section
      id="wow-transition"
      ref={containerRef}
      className="relative min-h-[140vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white"
    >
      {/* Background Interactive Nodes Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Glow Center */}
      <motion.div
        style={{ opacity: nodeOpacity }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-red-600/20 blur-[150px]"
      />

      <div className="container-custom relative z-10 text-center space-y-16">
        {/* Animated Zerovex Core / Node Transformation Visual */}
        <div className="relative mx-auto flex items-center justify-center h-48 w-48 sm:h-64 sm:w-64">
          {/* Transforming Logo Mark */}
          <motion.div
            style={{ scale: logoScale }}
            className="relative z-10 flex items-center justify-center h-28 w-28 sm:h-36 sm:w-36 rounded-3xl bg-black border border-red-500/40 p-4 shadow-[0_0_50px_rgba(239,68,68,0.4)] backdrop-blur-xl"
          >
            <Image
              src="/logogency.png"
              alt="Zerovex Solutions Icon"
              width={140}
              height={140}
              className="h-auto w-full object-contain filter drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]"
            />
          </motion.div>

          {/* Radiating Interconnected Digital Nodes */}
          <motion.div
            style={{ opacity: nodeOpacity }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            {/* Node lines */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <motion.div
                key={angle}
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
                className="absolute origin-center"
              >
                <motion.div
                  style={{
                    width: nodesSpread,
                  }}
                  className="h-[1px] bg-gradient-to-r from-red-500/80 to-transparent"
                />
                <motion.div
                  style={{
                    x: nodesSpread,
                  }}
                  className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Revealed Statement */}
        <motion.div style={{ y: textY, opacity: textOpacity }} className="space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/30 px-4 py-1.5 text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
            ECOSYSTEM REVEAL
          </div>

          <h2 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[1.05]">
            ONE COMPANY. <br />
            <span className="text-gradient-red">MULTIPLE DIGITAL POSSIBILITIES.</span>
          </h2>
        </motion.div>

        {/* Sub-capabilities Grid */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 pt-8"
        >
          {possibilities.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:bg-black/90 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] hover:-translate-y-1.5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-red-500 font-bold">0{index + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 group-hover:animate-ping" />
              </div>
              <div className="text-2xl font-black text-white group-hover:text-red-400 transition-colors">
                {item.label}.
              </div>
              <div className="text-[11px] font-mono text-white/50 mt-1 leading-tight">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
