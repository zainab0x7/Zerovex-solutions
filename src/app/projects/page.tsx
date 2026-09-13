"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import ProjectCard, { ProjectCardProps } from "@/components/ui/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const allProjects: ProjectCardProps[] = [
  {
    title: "OmniHealth Global Portal",
    category: "Web",
    industry: "Healthcare Software",
    servicesUsed: ["Next.js App", "REST API System", "Healthcare Security Protocol"],
    description: "Enterprise healthcare portal with real-time consultation engine, patient health metrics dashboards, and HIPAA-compliant encryption.",
    client: "OmniHealth Ltd",
    challenge: "Handling complex healthcare workflows across thousands of active patients with zero latency.",
    solution: "Built a high-performance Next.js serverless architecture with end-to-end data encryption.",
    result: "45% reduction in appointment drop-offs and 99.99% server uptime.",
  },
  {
    title: "Vex Apparel Commerce",
    category: "E-Commerce",
    industry: "Retail & Apparel",
    servicesUsed: ["Custom Storefront", "Payment Gateway Integration", "Mobile UI Tuning"],
    description: "Custom high-converting e-commerce web platform with automated inventory synchronization and instant one-click checkout.",
    client: "Vex Apparel",
    challenge: "Slow mobile loading times led to abandoned carts during flash sales.",
    solution: "Engineered a headless storefront with single-page checkout and automated stock sync.",
    result: "42% increase in mobile checkout conversion rate within 60 days.",
  },
  {
    title: "Apex Financial Visual Identity",
    category: "Branding",
    industry: "Fintech Venture",
    servicesUsed: ["Vector Logo System", "Brand Identity Book", "Social Media Assets"],
    description: "Complete corporate visual identity system, vector logo suite, typography guidelines, and social media brand templates.",
    client: "Apex Financial",
    challenge: "Outdated visual branding hindered institutional investor trust.",
    solution: "Designed complete visual identity guidelines and collateral that boosted market prestige.",
    result: "Successfully secured initial seed funding round.",
  },
  {
    title: "Nexus B2B Growth Campaign",
    category: "Marketing",
    industry: "Enterprise B2B",
    servicesUsed: ["On-Page SEO Audit", "Content Strategy", "Performance Ad Campaign"],
    description: "Multi-channel digital marketing and SEO campaign expanding organic keyword visibility by 240% across search engines.",
    client: "Nexus B2B",
    challenge: "Low organic search visibility across key corporate service keywords.",
    solution: "Executed data-driven digital marketing strategy driving over 3,000 qualified leads.",
    result: "240% increase in Page 1 Google organic keyword placements.",
  },
  {
    title: "LogiTrack Fleet Telemetry",
    category: "Other",
    industry: "B2B Logistics",
    servicesUsed: ["Telemetry Dashboard", "WebSockets Sync", "Analytics Engine"],
    description: "Automated logistics telemetry portal for real-time tracking, route optimization, and driver performance reporting.",
    client: "LogiTrack Global",
    challenge: "Managing cross-border freight transit data across 400+ active transport units.",
    solution: "Engineered real-time telemetry analytics software reducing transit delays.",
    result: "Saved 18% in monthly fuel overhead.",
  },
  {
    title: "Pulse SaaS Analytics App",
    category: "Web",
    industry: "SaaS Software",
    servicesUsed: ["React UI", "Data Pipelines", "Sub-second Analytics"],
    description: "Real-time revenue monitoring and customer churn predictive dashboard for SaaS founders.",
    client: "Pulse Metrics",
    challenge: "Aggregating multi-channel payment data in real-time.",
    solution: "Built sub-second analytics dashboard rendering live revenue metrics.",
    result: "Enabled real-time churn alerts for enterprise subscription clients.",
  },
];

const filterCategories = ["All", "Web", "Branding", "E-Commerce", "Marketing", "Other"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="space-y-16 pb-20">
      
      <PageHero
        eyebrow="SELECTED WORK"
        title="Portfolio & Client Case Studies"
        subtitle="Explore recent digital platforms, software applications, brand identities, and e-commerce stores engineered by ZeroVex Solutions."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <ScrollReveal className="container-custom space-y-12">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-[#E31B2B] text-white border border-[#E31B2B] shadow-md shadow-[#E31B2B]/20"
                    : "bg-white text-gray-700 border border-gray-200 hover:text-black hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </ScrollReveal>

    </div>
  );
}
