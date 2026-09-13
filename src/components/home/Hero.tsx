"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  Code2,
  Cpu,
  TrendingUp,
  Layers,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import HeroCanvas from "@/components/ui/HeroCanvas";
import MagneticButton from "@/components/ui/MagneticButton";

const pillars = [
  {
    num: "01",
    title: "TECHNOLOGY",
    desc: "Next.js 15, Custom AI Agents, Cloud SaaS & Type-Safe Microservices",
  },
  {
    num: "02",
    title: "CREATIVITY",
    desc: "Editorial UI/UX, Dynamic Visual Systems & Brand Architecture",
  },
  {
    num: "03",
    title: "BUSINESS IMPACT",
    desc: "Targeted Conversion Optimization, Operational Speed & SLA Support",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-between overflow-hidden bg-[#0A0A0A] text-white pt-28 pb-10 lg:pt-36 lg:pb-12 border-b border-zinc-800/80">
      {/* Dynamic Background Canvas */}
      <HeroCanvas />

      {/* Ambient Crimson Glow Lights */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-red-700/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-12 right-12 h-[450px] w-[450px] rounded-full bg-red-950/25 blur-[150px]" />

      <div className="container-custom relative z-10 my-auto w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Asymmetric Editorial Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Small Eyebrow Tag & Founders Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Primary Eyebrow */}
              <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-950/90 px-3.5 py-1.5 text-[11px] font-mono font-bold tracking-widest text-red-500 uppercase backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                ZEROVEX SOLUTIONS
              </div>

              {/* Founders Attribution */}
              <div className="inline-flex items-center gap-2 border border-zinc-800/80 bg-zinc-950/60 px-3.5 py-1.5 text-[11px] font-mono text-zinc-400 backdrop-blur-md">
                <span>FOUNDERS:</span>
                <strong className="text-zinc-200 font-sans font-medium">Zainab Ayaz</strong>
                <span className="text-zinc-600">&amp;</span>
                <strong className="text-zinc-200 font-sans font-medium">Ahmed Kamal</strong>
              </div>
            </motion.div>

            {/* Large Primary Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-heading tracking-tight leading-[1.02] text-white">
                DIGITAL IDEAS. <br />
                BUILT TO{" "}
                <span className="text-red-500 relative inline-block">
                  MOVE BUSINESS.
                  <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-red-600/20" />
                </span>
              </h1>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
              className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-300 font-normal"
            >
              We design, build and grow digital experiences that turn ambitious ideas into real-world results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-none bg-red-600 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-red-700 shadow-xl shadow-red-950/40 hover:shadow-red-900/60"
                >
                  <span>BOOK A FREE CONSULTATION</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-none border border-zinc-700 bg-zinc-950/80 px-7 py-4 text-xs font-bold uppercase tracking-widest text-zinc-200 transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-500"
                >
                  <span>VIEW OUR WORK</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Three Pillars Summary & Trust Statement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
              className="space-y-4 pt-4 border-t border-zinc-800/80"
            >
              {/* Trust Statement */}
              <div className="flex items-center gap-3 font-mono text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>Web &bull; AI &bull; Design &bull; Digital Growth</span>
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {pillars.map((p) => (
                  <div key={p.num} className="border border-zinc-800/80 bg-zinc-950/50 p-3">
                    <div className="flex items-center justify-between text-[10px] font-mono text-red-500 font-bold">
                      <span>{p.num}</span>
                      <span>{p.title}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug line-clamp-2">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Abstract Premium Technology Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Artistic Composition Container */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">

              {/* Decorative Corner Grid Crosshairs */}
              <div className="absolute -top-3 -left-3 font-mono text-[10px] text-red-500/60 z-20">+</div>
              <div className="absolute -top-3 -right-3 font-mono text-[10px] text-red-500/60 z-20">+</div>
              <div className="absolute -bottom-3 -left-3 font-mono text-[10px] text-red-500/60 z-20">+</div>
              <div className="absolute -bottom-3 -right-3 font-mono text-[10px] text-red-500/60 z-20">+</div>

              {/* Main Tech Window Box */}
              <div className="relative border border-zinc-800 bg-[#0C0C0C] p-5 sm:p-6 shadow-2xl overflow-hidden">

                {/* Subtle Grid Background Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
                    backgroundSize: `16px 16px`,
                  }}
                />

                {/* Header Telemetry Bar */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="ml-2 font-mono text-[11px] text-zinc-400 uppercase tracking-widest">
                      ZEROVEX // DIGITAL ARCHITECTURE
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-red-500 font-mono text-[10px] font-bold border border-red-950 bg-red-950/40 px-2 py-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                    <span>SYSTEM ONLINE</span>
                  </div>
                </div>

                {/* Layer 1: Floating AI Agent Code Fragment */}
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 mb-4 border border-zinc-800 bg-zinc-950/90 p-3.5 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-red-500" />
                      <span className="font-mono text-xs font-bold text-white">
                        AI &bull; ENGINE CORE
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-red-400 border border-red-900/60 bg-red-950/80 px-2 py-0.5 font-bold">
                      LATENCY &lt;12ms
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-zinc-300 bg-[#080808] p-2.5 border border-zinc-800/80 space-y-1">
                    <div className="text-zinc-400">
                      <span className="text-red-500">const</span> agent = <span className="text-white font-bold">new</span> ZerovexAIAgent({`{`}
                    </div>
                    <div className="pl-4 text-zinc-400">
                      mode: <span className="text-red-400">&quot;autonomous_growth&quot;</span>,
                    </div>
                    <div className="pl-4 text-zinc-400">
                      precision: <span className="text-emerald-400">99.4%</span>,
                    </div>
                    <div className="text-zinc-400">{`});`}</div>
                  </div>
                </motion.div>

                {/* Layer 2: Center Interactive Visual Showcase */}
                <div className="relative h-56 sm:h-64 w-full border border-zinc-800 bg-[#080808] overflow-hidden group">
                  <Image
                    src="/home-hero-dashboard.png"
                    alt="Zerovex Solutions Technology & Web Platform"
                    fill
                    className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />

                  {/* Dynamic Metrics Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 grid grid-cols-2 gap-2">
                    <div className="border border-zinc-800 bg-zinc-950/90 p-2.5 backdrop-blur-md">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 uppercase">
                        <TrendingUp className="h-3.5 w-3.5 text-red-500" />
                        <span>REVENUE SPEED</span>
                      </div>
                      <div className="text-sm sm:text-base font-extrabold font-heading text-white mt-0.5">
                        +340% GROWTH
                      </div>
                    </div>
                    <div className="border border-red-950 bg-red-950/50 p-2.5 backdrop-blur-md">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-red-400 font-bold uppercase">
                        <ShieldCheck className="h-3.5 w-3.5 text-red-500" />
                        <span>SLA COMPLIANCE</span>
                      </div>
                      <div className="text-sm sm:text-base font-extrabold font-heading text-red-400 mt-0.5">
                        99.4% VERIFIED
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 3: Bottom Creative & Software Nodes */}
                <div className="mt-4 grid grid-cols-2 gap-3 relative z-10">
                  <div className="border border-zinc-800 bg-zinc-950 p-3 flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-none border border-red-900/60 bg-red-950/40 flex items-center justify-center text-red-500 shrink-0">
                      <Layers className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">DESIGN SYSTEM</div>
                      <div className="text-xs font-bold text-white">EDITORIAL UI/UX</div>
                    </div>
                  </div>

                  <div className="border border-zinc-800 bg-zinc-950 p-3 flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-none border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300 shrink-0">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">ENGINEERING</div>
                      <div className="text-xs font-bold text-white">BESPOKE CODE</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-3 border-t border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-red-500" />
                    <span>PRODUCTION READY</span>
                  </div>
                  <div className="text-zinc-500">v3.5.0</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="relative z-10 flex flex-col items-center justify-center pt-8 pb-2"
      >
        <Link
          href="#about"
          className="group flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
        >
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-400 group-hover:text-red-500 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-6 w-4 items-start justify-center rounded-full border border-zinc-700 p-1"
          >
            <span className="h-1.5 w-1 rounded-full bg-red-500" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}

