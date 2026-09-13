"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import ProjectCard from "@/components/ui/ProjectCard";
import WorkstationVisual from "@/components/home/WorkstationVisual";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FoundersSection from "@/components/founders/FoundersSection";
import FounderStoryPillars from "@/components/home/FounderStoryPillars";
import WhyChooseUsPoints from "@/components/home/WhyChooseUsPoints";
import TrustSectionGoals from "@/components/home/TrustSectionGoals";
import BusinessJourneyTimeline from "@/components/home/BusinessJourneyTimeline";
import FAQAccordion from "@/components/home/FAQAccordion";
import LeadGenCTA from "@/components/ui/LeadGenCTA";
import DarkCompanyCTA from "@/components/ui/DarkCompanyCTA";
import TestimonialSection from "@/components/home/TestimonialSection";
import TextMarquee from "@/components/ui/TextMarquee";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedText from "@/components/ui/AnimatedText";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

const servicesList = [
  {
    number: "01",
    title: "Custom Development",
    description: "Web & mobile applications tailored to business needs with high-performance scalable infrastructure.",
    slug: "custom-development",
    features: ["Custom Software Architecture", "API Integration", "SaaS & Cloud Systems"],
  },
  {
    number: "02",
    title: "Website Development",
    description: "Modern, responsive and user-friendly websites designed for maximum conversion and engagement.",
    slug: "web-development",
    features: ["Responsive UI", "CMS Integration", "SEO Optimized"],
  },
  {
    number: "03",
    title: "Graphic Design",
    description: "Brand identity, social media, marketing creatives and cohesive visual systems that stand out.",
    slug: "graphic-design",
    features: ["Brand Identity", "Marketing Assets", "Vector Design"],
  },
  {
    number: "04",
    title: "Digital Marketing",
    description: "Strategies that improve reach, visibility, lead generation and long-term audience engagement.",
    slug: "digital-marketing",
    features: ["SEO & SEM", "Social Strategy", "Growth Analytics"],
  },
  {
    number: "05",
    title: "E-Commerce",
    description: "Online stores and digital commerce experiences optimized for seamless checkout and scaling.",
    slug: "ecommerce",
    features: ["Custom Stores", "Payment Gateways", "Inventory Sync"],
  },
  {
    number: "06",
    title: "Website Maintenance",
    description: "Security monitoring, updates, speed optimization and continuous dedicated technical support.",
    slug: "website-maintenance",
    features: ["24/7 Security", "Speed Tuning", "Regular Backups"],
  },
];

const selectedProjects = [
  {
    title: "OmniHealth Global Platform",
    category: "Web",
    industry: "Healthcare Software",
    servicesUsed: ["Next.js Frontend", "REST API", "HIPAA Security"],
    description: "Enterprise healthcare portal with real-time consultation engine, patient dashboards, and HIPAA-ready encryption.",
    client: "OmniHealth Ltd",
    challenge: "Handling complex healthcare workflows across thousands of concurrent active patients with zero latency.",
    solution: "Built a high-performance Next.js serverless architecture with end-to-end data encryption and real-time appointment booking.",
    result: "45% reduction in appointment drop-offs and 99.99% server uptime.",
  },
  {
    title: "Vex Commerce Storefront",
    category: "E-Commerce",
    industry: "Retail & Commerce",
    servicesUsed: ["Custom Storefront", "Payment Gateway", "Mobile UI"],
    description: "Custom high-converting e-commerce web platform with automated inventory synchronization and instant checkout.",
    client: "Vex Apparel Global",
    challenge: "Legacy e-commerce store suffered slow mobile page loads and high cart abandonment during peak sales.",
    solution: "Engineered a headless storefront with single-page checkout and automated stock synchronization.",
    result: "42% increase in mobile checkout conversion rate within 60 days.",
  },
  {
    title: "Apex Horizon Visual Identity",
    category: "Branding",
    industry: "Fintech Venture",
    servicesUsed: ["Visual Identity", "Brand Book", "Social Design"],
    description: "Complete corporate visual identity system, vector logo design, typography guidelines, and social marketing collateral.",
    client: "Apex Financial",
    challenge: "Standing out in a competitive financial market with an outdated visual identity.",
    solution: "Created a bold, modern brand identity system and visual style guide that projected enterprise trust.",
    result: "Established strong market prestige resulting in successful round-one investor funding.",
  },
  {
    title: "Nexus Logistics Telemetry",
    category: "Digital Solutions",
    industry: "B2B Logistics",
    servicesUsed: ["React Dashboard", "Data Analytics", "API Integration"],
    description: "Real-time telemetry and analytics portal for B2B fleet logistics monitoring with custom reporting modules.",
    client: "Nexus Logistics",
    challenge: "Managing cross-border transport data across 400+ active freight vehicles.",
    solution: "Built real-time telemetry dashboard with WebSockets data sync and automated fuel usage reports.",
    result: "Saved 18% in monthly fuel overhead through optimized route analytics.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 bg-[#F9FAFB] border-b border-gray-200 overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="w-8 h-[2px] bg-[#E31B2B]" />
              <span className="text-xs font-mono tracking-widest text-[#E31B2B] uppercase font-semibold">
                IDEAS → DESIGNS → DIGITAL SOLUTIONS
              </span>
            </motion.div>

            <AnimatedText
              as="h1"
              text="Build Your Vision With Us"
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-gray-900 font-heading tracking-tight leading-[1.08]"
              delay={0.2}
            />

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 64 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-[2px] bg-[#E31B2B]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              "{companyInfo.positioningStatement}"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <Link href="/contact" className="btn-brand-red group">
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/services" className="btn-brand-outline">
                  <span>Explore Our Services</span>
                </Link>
              </MagneticButton>
            </motion.div>

          </div>

          <div className="lg:col-span-5">
            <WorkstationVisual />
          </div>

        </div>
      </section>

      {/* HORIZONTAL MARQUEE */}
      <TextMarquee />

      {/* 2. WHY ZERO VEX & STORY PILLARS */}
      <ScrollReveal>
        <FounderStoryPillars />
      </ScrollReveal>

      {/* 3. CORE SERVICES CAPABILITIES */}
      <ScrollReveal className="container-custom space-y-12">
        <SectionHeading
          eyebrow="CORE CAPABILITIES"
          title="Our Services"
          subtitle="Explore our specialized digital service divisions engineered for business scale."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </ScrollReveal>

      {/* 4. WHY BUSINESSES CHOOSE ZEROVEX */}
      <ScrollReveal>
        <WhyChooseUsPoints />
      </ScrollReveal>

      {/* 5. TRUST SECTION: BUILT AROUND YOUR GOALS */}
      <ScrollReveal>
        <TrustSectionGoals />
      </ScrollReveal>

      {/* 6. FOUNDERS & EXECUTIVE LEADERSHIP */}
      <ScrollReveal>
        <FoundersSection />
      </ScrollReveal>

      {/* 7. BUSINESS JOURNEY TIMELINE */}
      <ScrollReveal>
        <BusinessJourneyTimeline />
      </ScrollReveal>

      {/* 8. SELECTED WORK / PORTFOLIO */}
      <ScrollReveal className="container-custom space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="PORTFOLIO"
            title="Selected Work"
            subtitle="A glimpse into digital systems and platforms engineered by ZeroVex."
          />
          <Link href="/projects" className="btn-brand-outline text-xs self-start md:self-auto">
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedProjects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </ScrollReveal>

      {/* 9. SOCIAL PROOF / TESTIMONIALS */}
      <ScrollReveal>
        <TestimonialSection />
      </ScrollReveal>

      {/* 10. FAQ ACCORDION */}
      <ScrollReveal>
        <FAQAccordion />
      </ScrollReveal>

      {/* 11. INLINE LEAD GENERATION CTA */}
      <ScrollReveal className="container-custom">
        <LeadGenCTA />
      </ScrollReveal>

      {/* 12. DARK COMPANY CTA */}
      <ScrollReveal>
        <DarkCompanyCTA />
      </ScrollReveal>

    </div>
  );
}
