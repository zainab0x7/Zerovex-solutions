"use client";



import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

const steps = [
  { step: "STRATEGY", desc: "Commercial objectives & technical architecture" },
  { step: "DESIGN", desc: "Editorial UI/UX & brand identity systems" },
  { step: "ENGINEERING", desc: "Clean code, bespoke AI models & cloud infrastructure" },
  { step: "SCALE", desc: "Continuous performance tuning & SLA support" },
];

export default function EditorialAbout() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 text-white border-b border-zinc-800/80 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          {/* Left Column: Editorial Headline & Story */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-red-500 uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              OUR BRAND PHILOSOPHY
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-[1.08] text-white"
            >
              ENGINEERING DIGITAL PRODUCTS <br />
              <span className="text-red-500">THAT COMMAND INDUSTRY RESPECT.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal"
            >
              <p>
                Founded by <strong className="text-white font-bold">Zainab Ayaz</strong> and <strong className="text-white font-bold">Ahmed Kamal</strong>, <strong className="text-white">Zerovex Solutions</strong> was created to eliminate the gap between high-level technology strategy and world-class digital execution.
              </p>
              <p>
                We do not build generic templates. We build bespoke digital infrastructure — combining intelligent web applications, AI automation, and high-impact branding designed for ambitious startups, healthcare systems, educational institutions, and global corporations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <MagneticButton>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-none border border-zinc-700 bg-zinc-900 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:shadow-lg"
                >
                  <span>OUR LEADERSHIP &amp; STORY</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Methodology Architecture Box */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative border border-zinc-800 bg-zinc-950 p-8 sm:p-10 shadow-xl"
            >
              <div className="flex items-baseline justify-between border-b border-zinc-800 pb-6 mb-8">
                <span className="text-6xl sm:text-8xl font-extrabold font-heading text-red-600 leading-none select-none">
                  01
                </span>
                <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase font-semibold">
                  ENGINEERING PROCESS
                </span>
              </div>

              <div className="space-y-6">
                {steps.map((item, idx) => (
                  <div key={item.step} className="group relative flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-red-900/80 bg-red-950/60 text-red-400 text-xs font-mono font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 font-mono text-sm font-bold text-white group-hover:text-red-500 transition-colors">
                        <span>{item.step}</span>
                        {idx < steps.length - 1 && (
                          <span className="text-zinc-600">→</span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center gap-3 text-xs font-mono text-zinc-400">
                <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />
                <span>Zero Technical Debt • 100% Custom Codebase</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
