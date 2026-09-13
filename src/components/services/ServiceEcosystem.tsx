"use client";



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Code2,
  Palette,
  Cpu,
  ShieldAlert,
  Cloud,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  isFuture?: boolean;
  formula: string[];
  description: string;
  icon: any;
  capabilities: string[];
}

const serviceEcosystemData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "WEB ENGINEERING & APPS",
    category: "Core Service",
    formula: ["ARCHITECTURE", "UI/UX", "CODE", "SPEED"],
    description: "High-performance bespoke web applications, enterprise platforms, and digital products engineered for global scalability and speed.",
    icon: Globe,
    capabilities: [
      "Enterprise Web Apps",
      "Headless E-Commerce",
      "Corporate Digital Platforms",
      "Custom Web Portals",
      "Core Web Vitals Optimization",
      "Full Redesign & Migration",
    ],
  },
  {
    id: "ai-solutions",
    title: "CUSTOM AI & AUTOMATION",
    category: "Specialized Service",
    formula: ["LLM", "AGENTS", "WORKFLOWS", "INTELLIGENCE"],
    description: "Custom AI model integration, domain-tuned chatbots, autonomous agent workflows, and robotic process automation (RPA) that transforms business efficiency.",
    icon: Cpu,
    capabilities: [
      "Custom LLM Fine-Tuning",
      "24/7 AI Chat & Voice Agents",
      "Workflow & RPA Automation",
      "Document OCR & Vision Systems",
      "Predictive Data Intelligence",
      "API & Data Pipelines",
    ],
  },
  {
    id: "creative-design",
    title: "BRANDING & UI/UX DESIGN",
    category: "Core Service",
    formula: ["IDENTITY", "EDITORIAL UI", "CONVERSION", "SYSTEMS"],
    description: "World-class visual identity systems, editorial digital design, high-converting product interfaces, and cohesive brand guidelines.",
    icon: Palette,
    capabilities: [
      "Strategic Brand Architecture",
      "Editorial UI/UX Systems",
      "Corporate Identity & Guidelines",
      "Design System Engineering",
      "Pitch Decks & Presentations",
      "Conversion Optimization",
    ],
  },
  {
    id: "software-dev",
    title: "CUSTOM SOFTWARE & SAAS",
    category: "Core Service",
    formula: ["LOGIC", "DATA", "APIS", "SECURITY"],
    description: "Tailored business management software, ERP/CRM platforms, interactive executive dashboards, and multi-tenant SaaS architecture.",
    icon: Code2,
    capabilities: [
      "Custom ERP & CRM Software",
      "Business Management Tools",
      "Multi-Tenant SaaS Systems",
      "Secure REST/GraphQL APIs",
      "Executive Data Dashboards",
      "Database Architecture",
    ],
  },
  {
    id: "cybersecurity",
    title: "CYBERSECURITY & SLA",
    category: "Division",
    isFuture: true,
    formula: ["DEFENSE", "ENCRYPTION", "AUDITING", "COMPLIANCE"],
    description: "Specialized security auditing, application hardening, zero-trust infrastructure, and continuous enterprise SLA engineering support.",
    icon: ShieldAlert,
    capabilities: [
      "Application Guarding & WAF",
      "Infrastructure Penetration Testing",
      "Data Encryption Standards",
      "24/7 SLA Engineering Support",
    ],
  },
];

export default function ServiceEcosystem() {
  const [activeService, setActiveService] = useState<string>("web-dev");

  const current = serviceEcosystemData.find((s) => s.id === activeService) || serviceEcosystemData[0];

  return (
    <section id="services" className="relative bg-[#0A0A0A] py-28 text-white border-b border-zinc-800/80 overflow-hidden">
      <div className="container-custom relative z-10 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-red-500 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              OUR DIGITAL CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading uppercase tracking-tight text-white">
              SERVICE <span className="text-red-500">ECOSYSTEM.</span>
            </h2>
          </div>

          <p className="text-sm text-zinc-400 font-normal max-w-md">
            Select any domain below to inspect our core deliverables, technical stack formulas, and implementation standards.
          </p>
        </div>

        {/* Interactive Grid & Central Node Visualizer */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Left Column: Capabilities Buttons Matrix */}
          <div className="lg:col-span-5 space-y-3">
            {serviceEcosystemData.map((service) => {
              const isSelected = service.id === activeService;
              const Icon = service.icon;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  onMouseEnter={() => setActiveService(service.id)}
                  className={`group relative w-full border p-5 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-red-600 bg-red-950/20 text-white"
                      : "border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 hover:bg-zinc-900"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-colors ${
                          isSelected
                            ? "border-red-600 bg-red-600 text-white"
                            : "border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:text-white"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold font-heading uppercase text-white tracking-tight">
                            {service.title}
                          </span>
                          {service.isFuture && (
                            <span className="bg-red-950/80 px-2 py-0.5 text-[9px] font-mono font-bold uppercase text-red-400 border border-red-900/60">
                              SPECIALIZED
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isSelected ? "text-red-500 translate-x-0.5 -translate-y-0.5" : "text-zinc-500"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Connected Capability View */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full border border-zinc-800 bg-zinc-950 p-8 sm:p-10 flex flex-col justify-between space-y-8"
              >
                {/* Header info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
                      SERVICE SPECIFICATION // {current.id.toUpperCase()}
                    </span>
                    {current.isFuture ? (
                      <span className="inline-flex items-center gap-1.5 border border-red-900 bg-red-950/60 px-3 py-1 text-[10px] font-mono font-bold text-red-400">
                        <Sparkles className="h-3 w-3" /> SPECIALIZED DIVISION
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-red-400 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> ACTIVE PRODUCTION
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold font-heading uppercase text-white tracking-tight">
                    {current.title}
                  </h3>

                  <p className="text-base text-zinc-300 leading-relaxed font-normal">
                    {current.description}
                  </p>
                </div>

                {/* Capability Formula Display */}
                <div className="border border-zinc-800 bg-[#080808] p-5 space-y-2">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    SYSTEM FORMULA
                  </span>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-white">
                    {current.formula.map((item, i) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="bg-red-950/50 px-3 py-1 text-red-400 border border-red-900/60">
                          {item}
                        </span>
                        {i < current.formula.length - 1 && (
                          <span className="text-zinc-500">+</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-capabilities Tags List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    CORE DELIVERABLES
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {current.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2 border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-xs text-zinc-200 font-mono"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
