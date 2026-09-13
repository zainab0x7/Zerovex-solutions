"use client";



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Palette, Code, CheckCircle, Rocket, RefreshCw } from "lucide-react";

const processStages = [
  {
    step: "01",
    name: "DISCOVER",
    icon: Search,
    headline: "Commercial Objectives & Requirements",
    desc: "We analyze your target market dynamics, business goals, and technical boundaries to define a crystal-clear engineering blueprint.",
  },
  {
    step: "02",
    name: "ARCHITECT",
    icon: Compass,
    headline: "System Architecture & Stacks",
    desc: "Selecting type-safe software frameworks, AI model integrations, cloud infrastructure, and database schemas for zero technical debt.",
  },
  {
    step: "03",
    name: "DESIGN",
    icon: Palette,
    headline: "Editorial UI/UX & Brand Identity",
    desc: "Crafting minimalist, high-converting visual design, responsive grid layouts, and cohesive brand design systems.",
  },
  {
    step: "04",
    name: "ENGINEER",
    icon: Code,
    headline: "Full-Stack Development & AI",
    desc: "Writing clean, modular React / Next.js code, custom AI model pipelines, and high-speed API endpoints.",
  },
  {
    step: "05",
    name: "AUDIT",
    icon: CheckCircle,
    headline: "Security & Performance Testing",
    desc: "Rigorous Core Web Vitals optimization, responsive layout verification, penetration testing, and cross-browser auditing.",
  },
  {
    step: "06",
    name: "DEPLOY",
    icon: Rocket,
    headline: "Production Launch & CDN",
    desc: "Deploying to enterprise cloud infrastructure with global CDN routing, SSL encryption, and automated database backups.",
  },
  {
    step: "07",
    name: "SCALE",
    icon: RefreshCw,
    headline: "Continuous SLA & Evolution",
    desc: "Monitoring system uptime, analyzing user metrics, and delivering ongoing feature iterations to maintain market dominance.",
  },
];

export default function InteractiveProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const activeStage = processStages[activeStep];
  const Icon = activeStage.icon;

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
            ENGINEERING ROADMAP
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading uppercase tracking-tight text-white"
          >
            OUR 7-STAGE <span className="text-red-500">EXECUTION PROCESS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-400 font-normal"
          >
            A disciplined, step-by-step engineering roadmap delivering world-class digital products.
          </motion.p>
        </div>

        {/* 7 Stages Horizontal Nav Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2">
          {processStages.map((stage, idx) => {
            const isActive = idx === activeStep;

            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold uppercase transition-colors shrink-0 ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                <span className="text-red-400 font-bold">{stage.step}</span>
                <span>{stage.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Process Stage Details Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="border border-zinc-800 bg-zinc-950 p-8 sm:p-12 text-white space-y-6"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-red-900 bg-red-950/60 text-red-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-red-500 font-bold uppercase">
                      STAGE {activeStage.step} OF 07
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading uppercase tracking-tight">
                      {activeStage.name}
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:block text-5xl font-mono font-bold text-zinc-800">
                  {activeStage.step}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
                  {activeStage.headline}
                </h4>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  {activeStage.desc}
                </p>
              </div>

              {/* Step Controls */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-xs font-mono font-bold uppercase text-zinc-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← PREVIOUS
                </button>

                <div className="flex items-center gap-1.5">
                  {processStages.map((_, i) => (
                    <span
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
                        i === activeStep ? "bg-red-600 w-5" : "bg-zinc-800"
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={activeStep === processStages.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(processStages.length - 1, prev + 1))}
                  className="bg-red-600 px-5 py-2.5 text-xs font-mono font-bold uppercase text-white hover:bg-red-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  NEXT STAGE →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
