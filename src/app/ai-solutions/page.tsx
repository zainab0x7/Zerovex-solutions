"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  Cpu,
  Zap,
  LineChart,
  ShieldCheck,
  ArrowRight,
  Database,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const aiServices = [
  {
    id: "agents",
    icon: Bot,
    title: "Autonomous AI Voice & Chat Agents",
    subtitle: "24/7 Intelligent Customer & Operational Engagement",
    description:
      "We build custom conversational agents integrated into your web platforms, mobile apps, and internal communication tools. Equipped with memory, tool usage, and human handoff protocols.",
    deliverables: [
      "Custom RAG-powered knowledge retrieval",
      "Multi-channel deployment (Web, WhatsApp, Slack, API)",
      "Automated lead qualification & appointment scheduling",
      "Real-time sentiment & intent analytics",
    ],
  },
  {
    id: "llm-fine-tuning",
    icon: Cpu,
    title: "Proprietary LLM & Domain Model Fine-Tuning",
    subtitle: "100% Data Privacy & Custom Enterprise Intelligence",
    description:
      "Fine-tune open-weight models (Llama, Mistral, Qwen) or private enterprise endpoints on your company's internal documentation, codebase, or patient/legal data with zero data leak risk.",
    deliverables: [
      "Private cloud model hosting (AWS / GCP / Azure)",
      "Strict data isolation & HIPAA / GDPR compliance",
      "Tailored system prompts & domain terminology",
      "Optimized inference speed & latency reduction",
    ],
  },
  {
    id: "workflow-automation",
    icon: Zap,
    title: "Intelligent Process & RPA Automation",
    subtitle: "Eliminating Operational Friction & Manual Overhead",
    description:
      "Automate repetitive back-office workflows, document processing, invoice extraction, and multi-system data sync using vision models and intelligent RPA pipelines.",
    deliverables: [
      "Document OCR & structured data extraction",
      "Automated invoice & contract analysis",
      "Cross-platform CRM & ERP integration",
      "Automated compliance checking & auditing",
    ],
  },
  {
    id: "predictive-analytics",
    icon: LineChart,
    title: "Predictive Intelligence & Machine Vision",
    subtitle: "Data-Driven Forecasting & Visual Quality Control",
    description:
      "Harness machine learning models to forecast demand, detect financial anomalies, or automate visual inspections for manufacturing and healthcare diagnostics.",
    deliverables: [
      "Time-series demand & revenue forecasting",
      "Computer vision for defect & medical image detection",
      "Real-time fraud & anomaly detection alerts",
      "Executive BI dashboards with live streaming data",
    ],
  },
];

const stats = [
  { label: "AVERAGE WORKFLOW SPEEDUP", value: "8.5x" },
  { label: "MODEL ACCURACY RATE", value: "99.2%" },
  { label: "DATA PRIVACY COMPLIANCE", value: "100%" },
  { label: "ACTIVE AI INTEGRATIONS", value: "40+" },
];

export default function AISolutionsPage() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-32 pb-24 selection:bg-red-600/40">
      {/* Page Header */}
      <section className="relative border-b border-zinc-800/80 pb-20 overflow-hidden">
        <div className="container-custom relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-950 px-4 py-1.5 font-mono text-xs font-bold tracking-widest text-red-500 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
            ENTERPRISE AI DIVISION
          </div>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-heading uppercase tracking-tight text-white max-w-4xl">
            CUSTOM <span className="text-red-500">AI SOLUTIONS</span> FOR HIGH-GROWTH ENTERPRISES.
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            From autonomous AI agents and fine-tuned private LLMs to intelligent OCR and predictive analytics, Zerovex Solutions engineers practical artificial intelligence that drives immediate operational ROI.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-red-600 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-red-700 transition-colors shadow-md"
              >
                <span>BOOK AN AI CONSULTATION</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container-custom pt-16 mt-12 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((st) => (
              <div key={st.label} className="border-l-2 border-red-600 pl-4 py-1">
                <div className="text-3xl font-extrabold font-heading text-white">{st.value}</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-1">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main AI Capabilities Breakdown */}
      <section className="py-24 border-b border-zinc-800/80">
        <div className="container-custom space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase text-white">
              CORE <span className="text-red-500">AI CAPABILITIES</span>
            </h2>
            <p className="text-base text-zinc-400 font-normal">
              Bespoke machine intelligence engineered around your proprietary data and operational goals.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {aiServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border border-zinc-800 bg-zinc-950 p-8 sm:p-10 space-y-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-zinc-800 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-red-900 bg-red-950/60 text-red-500">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-red-500 font-bold uppercase">
                          {service.subtitle}
                        </span>
                        <h3 className="text-2xl font-bold font-heading uppercase text-white mt-0.5">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-zinc-400">
                      MOD 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      KEY DELIVERABLES &amp; INTEGRATIONS
                    </span>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-mono text-zinc-300"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-red-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security & Data Privacy Promise Section */}
      <section className="py-20 border-b border-zinc-800/80 bg-zinc-950">
        <div className="container-custom max-w-4xl space-y-8 text-center">
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900 px-3.5 py-1 text-xs font-mono text-red-400">
            <ShieldCheck className="h-4 w-4 text-red-500" />
            ZERO DATA LEAKAGE GUARANTEE
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading uppercase text-white">
            YOUR DATA <span className="text-red-500">NEVER LEAVES YOUR INFRASTRUCTURE.</span>
          </h2>

          <p className="text-base text-zinc-300 font-normal leading-relaxed">
            We deploy AI models within your private cloud environment (VPC) or local enterprise servers. Your training data, customer communications, and IP are strictly isolated and never fed back into public model providers.
          </p>

          <div className="pt-4 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-red-600 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-red-700 transition-colors"
            >
              SCHEDULE AN AI ARCHITECTURE AUDIT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
