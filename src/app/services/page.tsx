<<<<<<< HEAD
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Services | ZeroVex Solutions",
  description: "Comprehensive software engineering, website development, graphic design, e-commerce, digital marketing, and maintenance services.",
};

const allServices = [
  {
    number: "01",
    title: "Custom Development",
    description: "Web & mobile applications tailored to business needs with robust scalable architecture.",
    slug: "custom-development",
    features: ["Custom Software Architecture", "API Integration", "SaaS & Cloud Apps", "Performance Optimization"],
  },
  {
    number: "02",
    title: "Website Development",
    description: "Modern, responsive and user-friendly websites designed for maximum conversion and engagement.",
    slug: "web-development",
    features: ["Responsive UI/UX", "Next.js & React Core", "Headless CMS", "SEO Infrastructure"],
  },
  {
    number: "03",
    title: "Graphic Design",
    description: "Brand identity, social media creatives, visual systems and marketing assets.",
    slug: "graphic-design",
    features: ["Brand Identity Systems", "Social Media Creatives", "Vector & Print Design", "UI Design System"],
  },
  {
    number: "04",
    title: "Digital Marketing",
    description: "Strategies that improve reach, visibility, lead acquisition and audience engagement.",
    slug: "digital-marketing",
    features: ["Search Engine Optimization", "Social Media Marketing", "Content Strategy", "Performance Analytics"],
  },
  {
    number: "05",
    title: "E-Commerce",
    description: "Online stores and digital commerce experiences optimized for seamless checkout.",
    slug: "ecommerce",
    features: ["Custom Storefronts", "Payment Gateways", "Inventory Syncing", "Conversion Rate Optimization"],
  },
  {
    number: "06",
    title: "Website Maintenance",
    description: "Security, updates, speed optimization, backup automation and ongoing support.",
    slug: "website-maintenance",
    features: ["24/7 Security Audits", "Core Web Vitals Tuning", "Daily Automated Backups", "Dedicated Tech Support"],
=======
"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Layers, Settings, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const services = [
  {
    id: "ai-automation",
    icon: Brain,
    title: "AI Automation",
    description: "Harness the power of artificial intelligence to automate complex workflows, reduce manual effort, and unlock actionable insights from your data.",
    features: ["Intelligent process automation", "Natural language processing", "Predictive analytics", "Computer vision", "Custom AI models"],
  },
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Build modern, scalable web applications with cutting-edge frameworks, optimized performance, and exceptional user experiences.",
    features: ["Custom web apps", "PWA development", "E-commerce platforms", "API integration", "Performance optimization"],
  },
  {
    id: "saas-development",
    icon: Layers,
    title: "SaaS Development",
    description: "Design, build, and scale Software-as-a-Service products with robust architecture and seamless integrations.",
    features: ["Multi-tenant architecture", "Subscription systems", "Auth & Identity", "Analytics dashboards", "Cloud infrastructure"],
  },
  {
    id: "business-systems",
    icon: Settings,
    title: "Business Systems",
    description: "Streamline operations with custom enterprise systems that optimize workflows and improve team productivity.",
    features: ["Workflow automation", "ERP development", "Custom CRM", "BI dashboards", "Legacy modernization"],
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
  },
];

export default function ServicesPage() {
  return (
<<<<<<< HEAD
    <div className="space-y-24 pb-20">
      
      <PageHero
        eyebrow="ZERO VEX SERVICES"
        title="Digital Engineering & Creative Capabilities"
        subtitle="Explore our 6 core modular service divisions. Click any service to view full technical specifications, deliverables, process, and FAQs."
        breadcrumbs={[{ label: "Services" }]}
      />

      <ScrollReveal className="container-custom space-y-12">
        <SectionHeading
          eyebrow="CORE DIVISIONS"
          title="Engineered Solutions For Business Growth"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </ScrollReveal>

      {/* Corporate Callout */}
      <ScrollReveal className="container-custom">
        <div className="corp-card p-10 sm:p-14 border-l-4 border-l-[#E31B2B] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold text-gray-900 font-heading">
              Need a Custom Tailored Package?
            </h3>
            <p className="text-sm text-gray-600">
              We frequently combine development, design, and marketing into custom enterprise retainers.
            </p>
          </div>
          <Link href="/contact" className="btn-brand-red text-xs shrink-0 group">
            <span>Consult With Us</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </ScrollReveal>

=======
    <div className="bg-transparent text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="container-custom relative z-10">
          <motion.div initial={fadeInUp.initial} animate={fadeInUp.whileInView} className="max-w-3xl">
            <h1 className="heading-xl mb-6">Expertise That <span className="text-gradient">Scales</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              From high-performance AI automation to enterprise SaaS platforms, we engineer technology
              that transforms global businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <div className="space-y-32 pb-32">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className="container-custom">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              className="grid gap-12 lg:grid-cols-2 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                  <service.icon className="h-8 w-8" />
                </div>
                <h2 className="heading-lg mb-6">{service.title}</h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-400">
                  {service.description}
                </p>
                <MagneticButton>
                  <Link href="/contact" className="btn-primary">Get Started</Link>
                </MagneticButton>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <GlassCard className="p-10 border-white/5">
                  <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-white/50">Capabilities</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                        <span className="text-sm font-medium text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </section>
        ))}
        {/* Additional Links */}
        <div className="mt-20 text-center">
          <h2 className="heading-lg mb-6">Explore More</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/internships" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20">
              <span>Internships</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/tools" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20">
              <span>Tools</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
    </div>
  );
}
