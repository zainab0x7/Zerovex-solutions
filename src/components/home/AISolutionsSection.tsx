"use client";

import { motion } from "framer-motion";
import { Cpu, Bot, Zap, ArrowRight, LineChart, ShieldCheck } from "lucide-react";
import Link from "next/link";

const aiCapabilities = [
  {
    icon: Bot,
    title: "Autonomous AI Agents & Chatbots",
    desc: "Bespoke conversational agents integrated into your operational workflows for 24/7 customer engagement, lead qualification, and support automation.",
    metrics: "94% First-Response Resolution",
  },
  {
    icon: Cpu,
    title: "Custom LLM & Private Model Tuning",
    desc: "Domain-specific fine-tuning on your proprietary datasets, guaranteeing enterprise data privacy, zero data leakage, and hyper-accurate intelligence.",
    metrics: "100% Data Isolation Guarantee",
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    desc: "Intelligent document processing (OCR), automated invoice parsing, CRM sync, and multi-system RPA that cuts manual effort by over 80%.",
    metrics: "8.5x Workflow Efficiency",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics & Vision Systems",
    desc: "Data-driven forecasting tools, anomaly detection, and automated computer vision for healthcare diagnostics, inventory, and quality control.",
    metrics: "99.2% Model Accuracy",
  },
];

export default function AISolutionsSection() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 text-white border-b border-zinc-800/80 overflow-hidden">
      <div className="container-custom relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-red-500 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              ARTIFICIAL INTELLIGENCE ENGINEERING
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading uppercase tracking-tight text-white">
              BESPOKE <span className="text-red-500">AI SOLUTIONS</span> FOR MODERN ENTERPRISE.
            </h2>
            <p className="text-base text-zinc-400 font-normal">
              We engineer practical, high-ROI artificial intelligence tailored specifically to your operational ecosystem.
            </p>
          </div>

          <Link
            href="/ai-solutions"
            className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors shrink-0"
          >
            <span>VIEW ALL AI CAPABILITIES</span>
            <ArrowRight className="h-4 w-4 text-red-500" />
          </Link>
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {aiCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group border border-zinc-800 bg-zinc-950 p-8 hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-red-900 bg-red-950/60 text-red-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-red-400 border border-red-950 bg-red-950/30 px-3 py-1 uppercase">
                      {cap.metrics}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-red-500 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-red-500" />
                    Enterprise Security Standard
                  </span>
                  <span className="text-zinc-400 font-bold group-hover:translate-x-1 transition-transform">
                    EXPLORE →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
