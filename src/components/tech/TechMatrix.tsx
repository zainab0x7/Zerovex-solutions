"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Palette, CheckCircle2 } from "lucide-react";

interface TechCategory {
  id: string;
  name: string;
  icon: any;
  items: {
    name: string;
    desc: string;
    level: string;
  }[];
}

const techStackData: TechCategory[] = [
  {
    id: "frontend",
    name: "FRONTEND",
    icon: Code,
    items: [
      { name: "React", desc: "Interactive UI Component Architecture", level: "Core" },
      { name: "Next.js", desc: "Production Server-Side Rendering & App Router", level: "Core" },
      { name: "JavaScript / TypeScript", desc: "Type-Safe Dynamic Application Logic", level: "Core" },
      { name: "HTML5", desc: "Semantic Web Content Structure", level: "Standard" },
      { name: "CSS3 / Vanilla CSS", desc: "Custom Styling & Responsive Motion", level: "Standard" },
    ],
  },
  {
    id: "backend",
    name: "BACKEND",
    icon: Server,
    items: [
      { name: "Node.js", desc: "High-Performance Event-Driven Microservices", level: "Core" },
      { name: "Python", desc: "Automation Scripts, Data Pipelines & Logic", level: "Core" },
      { name: "REST & GraphQL APIs", desc: "Seamless External & Internal Integrations", level: "Core" },
    ],
  },
  {
    id: "database",
    name: "DATABASE",
    icon: Database,
    items: [
      { name: "PostgreSQL", desc: "Relational Enterprise Data Storage", level: "Core" },
      { name: "MySQL", desc: "Structured Relational Database Systems", level: "Standard" },
      { name: "MongoDB", desc: "Document-Based NoSQL Data Store", level: "Standard" },
    ],
  },
  {
    id: "cloud",
    name: "CLOUD & INFRASTRUCTURE",
    icon: Cloud,
    items: [
      { name: "Cloud Hosting", desc: "Global Edge & Serverless Deployment", level: "Core" },
      { name: "Deployment Pipelines", desc: "Automated Continuous Integration & Delivery", level: "Core" },
      { name: "DevOps Practices", desc: "Infrastructure Management & Monitoring", level: "Core" },
    ],
  },
  {
    id: "design",
    name: "DESIGN",
    icon: Palette,
    items: [
      { name: "Figma", desc: "UI/UX Design Systems & Interactive Wireframes", level: "Core" },
      { name: "Adobe Creative Tools", desc: "Vector Graphics, Branding & Visual Assets", level: "Core" },
    ],
  },
];

export default function TechMatrix() {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const currentCategory =
    techStackData.find((c) => c.id === activeTab) || techStackData[0];

  return (
    <section className="relative bg-black py-28 text-white border-t border-white/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[180px]" />

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
            ENGINEERING STACK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight"
          >
            BUILT WITH THE <span className="text-gradient-red">RIGHT TECHNOLOGY.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/60 font-light"
          >
            We select precise, proven engineering tools to ensure speed, security, and scalability for every project.
          </motion.p>
        </div>

        {/* Categories Tabs Selector */}
        <div className="flex items-center justify-center gap-3 overflow-x-auto no-scrollbar pb-2">
          {techStackData.map((cat) => {
            const isActive = activeTab === cat.id;
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 rounded-2xl px-5 py-3 text-xs font-mono font-bold uppercase transition-all duration-300 shrink-0 ${
                  isActive
                    ? "bg-red-600 text-white shadow-[0_0_25px_rgba(239,68,68,0.5)] scale-105"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Technology Items Grid */}
        <motion.div
          key={currentCategory.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {currentCategory.items.map((tech) => (
            <div
              key={tech.name}
              className="group relative rounded-2xl border border-white/10 bg-zinc-950/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:bg-black hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-black text-white group-hover:text-red-400 transition-colors">
                  {tech.name}
                </h3>
                <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-[9px] font-mono font-extrabold uppercase text-red-400 border border-red-500/30">
                  {tech.level}
                </span>
              </div>

              <p className="text-xs text-white/60 font-light leading-relaxed">
                {tech.desc}
              </p>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[10px] font-mono text-white/40">
                <CheckCircle2 className="h-3.5 w-3.5 text-red-500" />
                <span>Verified Zerovex Tooling</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
