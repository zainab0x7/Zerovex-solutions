"use client";



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Filter } from "lucide-react";
import CaseStudyModal, { ProjectItem } from "./CaseStudyModal";

const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    name: "Enterprise AI Workflow Platform",
    category: "AI & SOFTWARE",
    clientIndustry: "Healthcare & Operations",
    isPlaceholder: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    problem: "Manual patient intake and diagnostic dispatch delayed critical care workflows by 4.5 hours daily.",
    solution: "Engineered an AI-native web platform with real-time patient queue routing, automated OCR, and HIPAA-compliant data pipelines.",
    technology: ["Next.js 15", "TypeScript", "Python AI", "PostgreSQL"],
    result: "+340% Workflow Speed • 0.4s System Latency",
    caseStudy: {
      challenge: "The healthcare organization experienced bottlenecked multi-department patient records routing, causing administrative delays and staff fatigue.",
      strategy: "Conducted complete operational workflow mapping, replacing legacy database entry with automated intelligent OCR and event-driven microservices.",
      design: "High-contrast dark-mode dashboard tailored for clinical speed, instant status badges, and zero latency interaction feedback.",
      techDetails: "Built using Next.js 15, React 18, Python FastAPI microservices, PostgreSQL, and custom LLM document processing.",
      solutionDetails: "A unified enterprise clinical portal providing automated dispatching rules, role-based security, and real-time audit logs.",
      outcome: "Cut patient processing time from 4.5 hours to under 12 minutes while maintaining 100% data integrity.",
    },
  },
  {
    id: "proj-2",
    name: "Zerovex Global Brand Identity",
    category: "BRANDING",
    clientIndustry: "Technology & Software",
    isPlaceholder: false,
    image: "/logogency.png",
    problem: "Need for an authoritative, international brand identity for Zerovex Solutions across global markets.",
    solution: "Developed an architectural design system centered around Black, White, and Zerovex Crimson Red.",
    technology: ["Figma", "Design Systems", "Brand Architecture", "CSS Tokens"],
    result: "100% Brand Consistency Across Global Touchpoints",
    caseStudy: {
      challenge: "Establishing an elite digital identity that commands trust among global enterprise clients, healthcare organizations, and startups.",
      strategy: "Prioritize strong typography, architectural grid layouts, generous whitespace, and strategic crimson accents.",
      design: "Precision visual guidelines, dark aesthetic palette, clean typography, and mathematical grid alignment.",
      techDetails: "Exported design tokens directly into Tailwind CSS v4 variables for instant developer alignment.",
      solutionDetails: "Comprehensive brand ecosystem including logo usage rules, typography hierarchy, UI component libraries, and pitch assets.",
      outcome: "Positioned Zerovex Solutions as a premier, international technology and design partner.",
    },
  },
  {
    id: "proj-3",
    name: "Global EdTech SaaS Platform",
    category: "WEBSITES",
    clientIndustry: "Education & Academy",
    isPlaceholder: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    problem: "High bounce rate and slow loading times on legacy course enrollment portals.",
    solution: "Architected a high-speed web application with interactive learning previews and instant checkout flows.",
    technology: ["React", "Vite", "Tailwind CSS", "Stripe API"],
    result: "+210% Conversion Rate • 99/100 Core Web Vitals",
    caseStudy: {
      challenge: "The educational platform suffered from 6-second page load times and fragmented mobile UX, resulting in abandoned course enrollments.",
      strategy: "Re-engineered the digital platform using modern SSR architecture, edge caching, and a mobile-first checkout UI.",
      design: "Editorial typography, high-contrast course cards, clear progress indicators, and frictionless single-step registration.",
      techDetails: "React, Vite, Node.js API endpoints, Stripe checkout integration, and Cloudflare CDN distribution.",
      solutionDetails: "A fast, scalable EdTech ecosystem connecting 15,000+ active students with live course streams and automated certification.",
      outcome: "Achieved 99/100 Google Lighthouse performance score and boosted monthly enrollments by 210%.",
    },
  },
  {
    id: "proj-4",
    name: "Automated Logistics & Supply Hub",
    category: "DIGITAL SOLUTIONS",
    clientIndustry: "Supply Chain & E-Commerce",
    isPlaceholder: false,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    problem: "Fragmented inventory tracking across 12 regional distribution warehouses.",
    solution: "Built a custom automation suite linking warehouse ERPs with real-time inventory dashboards.",
    technology: ["Python", "Node.js", "REST APIs", "Redis Cache"],
    result: "10x Inventory Sync Speed • 0 Manual Errors",
    caseStudy: {
      challenge: "Manual spreadsheet updates resulted in stock discrepancies, backorder delays, and unfulfilled customer shipments.",
      strategy: "Architect automated API webhooks connecting warehouse barcode scanners directly to the centralized database.",
      design: "Industrial dark interface engineered for rapid scan feedback, warning indicators, and automated inventory re-ordering.",
      techDetails: "Python data scripts, Redis pub/sub caching, and React dashboard UI.",
      solutionDetails: "An automated digital transformation suite ensuring real-time inventory visibility across all regional hubs.",
      outcome: "Eliminated inventory sync errors completely and reduced order processing cycles by 85%.",
    },
  },
  {
    id: "proj-5",
    name: "Cyber Security Command Portal",
    category: "UI/UX",
    clientIndustry: "Enterprise Security",
    isPlaceholder: true,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
    problem: "Complex telemetry graphs creating cognitive overload for security operators.",
    solution: "Designed a clean, minimal threat monitoring interface with instant alert prioritization.",
    technology: ["Figma", "UI Architecture", "Design Systems"],
    result: "Reduced Incident Response Time by 65%",
    caseStudy: {
      challenge: "Visualizing complex network threat metrics without cluttering critical operator views.",
      strategy: "Establish a strict visual hierarchy using red glow accents exclusively for active security alerts.",
      design: "Modular grid design with dark slate backgrounds and crisp monospaced telemetry fonts.",
      techDetails: "Figma design system with comprehensive component token libraries.",
      solutionDetails: "An ultra-clean security management dashboard interface prototype.",
      outcome: "Laid the visual and UX foundation for future Zerovex Cybersecurity platform offerings.",
    },
  },
];

const filterCategories = [
  "ALL",
  "WEBSITES",
  "AI & SOFTWARE",
  "BRANDING",
  "UI/UX",
  "DIGITAL SOLUTIONS",
] as const;

export default function PortfolioShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedFilter === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="work" className="relative bg-[#0A0A0A] py-28 text-white border-b border-zinc-800/80 overflow-hidden">
      <div className="container-custom relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-red-500 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              SELECTED WORK &amp; CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading uppercase tracking-tight text-white">
              FEATURED <span className="text-red-500">PROJECTS.</span>
            </h2>
          </div>

          <p className="text-sm text-zinc-400 font-normal max-w-md">
            Explore how we deliver measurable commercial impact through enterprise web applications, custom AI systems, and strategic branding.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <Filter className="h-4 w-4 text-red-500 mr-2 shrink-0 hidden sm:block" />
          {filterCategories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-colors shrink-0 ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative border border-zinc-800 bg-zinc-950 overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                {/* Media Section */}
                <div className="relative h-56 w-full bg-zinc-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="border border-red-900/80 bg-red-950/90 px-3 py-1 text-[10px] font-mono font-bold uppercase text-red-400">
                      {project.category}
                    </span>
                    <span className="bg-zinc-900/90 border border-zinc-800 px-2.5 py-0.5 text-[9px] font-mono text-zinc-300">
                      {project.result}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">
                      INDUSTRY: {project.clientIndustry}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-red-500 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                      {project.solution}
                    </p>
                  </div>

                  {/* Tech Pill List */}
                  <div className="space-y-4 pt-4 border-t border-zinc-800">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technology.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-zinc-900 px-2.5 py-1 text-[10px] font-mono text-zinc-300 border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-full inline-flex items-center justify-between border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-xs font-mono font-bold uppercase text-white hover:bg-red-600 hover:border-red-600 transition-colors"
                    >
                      <span>INSPECT CASE STUDY</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal Viewer */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
