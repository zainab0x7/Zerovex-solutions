import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowUpRight, Search, Target, Layout, Code2, ShieldCheck, Rocket, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Our Process | ZeroVex Solutions",
  description: "Explore our 7-step digital engineering and creative workflow from Discovery to Launch and Support.",
};

const fullWorkflow = [
  {
    step: "01",
    title: "Discovery",
    icon: Search,
    summary: "In-depth consultation to analyze your business goals, target audience, technical needs, and competitive landscape.",
    deliverables: ["Project Specification Document", "User Persona Analysis", "Technical Scope Breakdown"],
  },
  {
    step: "02",
    title: "Strategy",
    icon: Target,
    summary: "Formulating system architecture, technology selection, database schema planning, and roadmap timelines.",
    deliverables: ["System Architecture Plan", "Database Schemas", "Project Milestone Timeline"],
  },
  {
    step: "03",
    title: "Design",
    icon: Layout,
    summary: "Crafting intuitive UX wireframes, high-fidelity UI visual components, design tokens, and interactive prototypes.",
    deliverables: ["Figma UI Prototypes", "Design System Guidelines", "Brand Asset Exports"],
  },
  {
    step: "04",
    title: "Development",
    icon: Code2,
    summary: "Engineering clean, modular TypeScript code with fast SSR, secure APIs, and responsive layout styling.",
    deliverables: ["Modular React/Next.js Codebase", "API Integration", "Clean Code Commit History"],
  },
  {
    step: "05",
    title: "Testing",
    icon: ShieldCheck,
    summary: "Rigorous quality assurance including cross-browser testing, mobile responsiveness check, and security audits.",
    deliverables: ["QA Test Audit Report", "Page Speed & Vitals Tuning", "Security Patching"],
  },
  {
    step: "06",
    title: "Launch",
    icon: Rocket,
    summary: "Production deployment, SSL configuration, domain mapping, and zero-downtime release to public servers.",
    deliverables: ["Live Production Server Deployment", "DNS & SSL Configuration", "Final Client Handover"],
  },
  {
    step: "07",
    title: "Support & Growth",
    icon: HeartHandshake,
    summary: "Continuous monitoring, daily backups, ongoing feature additions, and growth marketing support.",
    deliverables: ["Daily Automated Backups", "Dedicated Developer Hours", "Monthly Growth Reports"],
  },
];

export default function ProcessPage() {
  return (
    <div className="space-y-24 pb-20">
      
      <PageHero
        eyebrow="ENGINEERING METHODOLOGY"
        title="Our Proven 7-Step Workflow"
        subtitle="From initial discovery to post-launch scaling, our structured process ensures complete clarity, quality control, and predictable results."
        breadcrumbs={[{ label: "Process" }]}
      />

      <ScrollReveal className="container-custom space-y-16">
        <SectionHeading
          eyebrow="TIMELINE"
          title="From Idea to High-Impact Digital Solution"
          subtitle="Explore each phase of our delivery model."
        />

        {/* Visual Timeline */}
        <div className="relative border-l-2 border-[#E31B2B] ml-4 md:ml-8 space-y-12 pl-6 md:pl-12">
          {fullWorkflow.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1 w-6 h-6 rounded-full bg-white border-2 border-[#E31B2B] flex items-center justify-center text-[10px] font-mono text-[#E31B2B] font-bold shadow-sm">
                  {idx + 1}
                </div>

                <div className="corp-card p-6 sm:p-8 space-y-4 hover:border-[#E31B2B]/60 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded bg-red-50 border border-red-200 text-[#E31B2B]">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 font-heading">
                        PHASE {item.step}: {item.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase px-2.5 py-1 rounded bg-gray-100 border border-gray-200">
                      STAGE {item.step} OF 07
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="pt-2 border-t border-gray-100 space-y-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Key Deliverables:</span>
                    <div className="flex flex-wrap gap-2">
                      {item.deliverables.map((deliv, dIdx) => (
                        <span key={dIdx} className="text-xs px-3 py-1 rounded bg-gray-50 text-gray-700 border border-gray-200">
                          • {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal className="container-custom">
        <div className="corp-card p-10 sm:p-14 bg-gray-900 text-white border-2 border-[#E31B2B] text-center space-y-6 shadow-2xl">
          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-white font-heading">
              Ready to Kick Off Phase 01?
            </h2>
            <p className="text-sm text-gray-300">
              Schedule a technical discovery call with ZeroVex Solutions today.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn-brand-red text-xs py-3.5 px-8 group">
                <span>Start Discovery Call</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
