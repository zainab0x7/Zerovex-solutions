"use client";

<<<<<<< HEAD
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

=======
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Globe,
  Layers,
  Settings,
  Shield,
  TrendingUp,
  Star,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";
import GlassCard from "@/components/ui/GlassCard";

gsap.registerPlugin(ScrollTrigger);

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  viewport: { once: true, margin: "-50px" },
};

// Services Data
const services = [
  {
    icon: Brain,
    title: "AI Automation",
    description: "Intelligent automation systems that eliminate repetitive tasks and supercharge your business operations.",
    features: ["Process Automation", "Machine Learning", "Smart Workflows"],
    color: "from-red-500/20 to-red-600/20",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Stunning, high-performance websites that captivate users and drive conversions.",
    features: ["Modern Stack", "Responsive Design", "SEO Optimized"],
    color: "from-blue-500/20 to-cyan-600/20",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "Scalable cloud platforms designed for growth, efficiency, and seamless user experiences.",
    features: ["Cloud Native", "Multi-tenant", "API First"],
    color: "from-purple-500/20 to-pink-600/20",
  },
  {
    icon: Settings,
    title: "Custom Software",
    description: "Bespoke software solutions engineered to solve your unique business challenges.",
    features: ["Tailored Solutions", "Enterprise Grade", "Future-proof"],
    color: "from-orange-500/20 to-yellow-600/20",
  },
];

// Stats Data
const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: TrendingUp },
  { value: 10, suffix: "+", label: "Automation Systems", icon: Bot },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Star },
  { value: 24, suffix: "/7", label: "Support Available", icon: Shield },
];

// Projects Data
const projects = [
  {
    title: "AI Business Automation",
    category: "AI",
    description: "Intelligent workflow automation reducing manual operations by 80%.",
    tags: ["AI", "Python", "Automation"],
    gradient: "from-red-900/80 via-black to-black",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    title: "Corporate Platform",
    category: "Web",
    description: "Enterprise-grade web application with real-time collaboration.",
    tags: ["Next.js", "React", "TypeScript"],
    gradient: "from-gray-900 via-gray-800 to-black",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "SaaS",
    description: "Real-time analytics platform processing millions of events daily.",
    tags: ["SaaS", "Node.js", "PostgreSQL"],
    gradient: "from-red-950/60 via-gray-900 to-black",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
];

// Testimonials Data
const testimonials = [
  {
    quote: "Zerovex transformed our entire operation with AI automation. The efficiency gains were immediate and remarkable.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    rating: 5,
  },
  {
    quote: "Exceptional quality and professionalism. They delivered our SaaS platform ahead of schedule with outstanding results.",
    author: "Marcus Johnson",
    role: "Founder, InnovateCo",
    rating: 5,
  },
  {
    quote: "The team's expertise in modern technology is unmatched. Our web application exceeded all expectations.",
    author: "Emily Rodriguez",
    role: "CTO, DataFlow Inc",
    rating: 5,
  },
];

// Animated Counter Component
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function() {
            setCount(Math.floor(this.targets()[0].val));
          }
        });
      },
      once: true
    });
  }, [target]);

  return (
    <div ref={countRef}>
      <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
        {count}{suffix}
      </span>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-transparent text-white">
      {/* ==================== CINEMATIC HERO SECTION ==================== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="container-custom relative z-10 w-full">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-semibold backdrop-blur-md"
              >
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                Empowering the AI Revolution
              </motion.div>

              <div className="overflow-hidden mb-6">
                <h1 className="hero-line heading-xl leading-[1.05]">
                  Engineering the <br />
                  <span className="text-gradient">Future of AI</span>
                </h1>
              </div>

              <div className="overflow-hidden mb-8">
                <p className="hero-line text-base text-gray-400 md:text-lg leading-relaxed max-w-xl">
                  We build high-performance AI automation and custom software solutions for the world&apos;s most ambitious companies.
                </p>
              </div>

              <div className="hero-line flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105"
                  >
                    Launch Your Project
                    <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold backdrop-blur-md transition-all hover:bg-white/10"
                  >
                    View Services
                  </Link>
                </MagneticButton>
              </div>
            </div>

            {/* Right Column - Mockup Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="lg:col-span-5 relative w-full h-[320px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 glow-red shadow-premium bg-black/40 backdrop-blur-sm group cursor-pointer"
            >
              <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-red-500/10 blur-[30px] group-hover:bg-red-500/25 transition-colors duration-500" />
              
              <Image
                src="/home-hero-dashboard.png"
                alt="Zerovex AI Enterprise Solution Dashboard"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* ==================== BENTO GRID SERVICES ==================== */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="mb-20 text-center">
            <motion.h2 variants={fadeInUp} initial="initial" whileInView="whileInView" className="heading-lg mb-4">
              Our <span className="text-gradient">Core Expertise</span>
            </motion.h2>
            <motion.p variants={fadeInUp} initial="initial" whileInView="whileInView" className="mx-auto max-w-2xl text-gray-400">
              Modern engineering meets futuristic design. We deliver scalable solutions across the digital spectrum.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="h-full">
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3D PROJECT SHOWCASE ==================== */}
      <section className="section-padding bg-black/50">
        <div className="container-custom">
          <div className="flex flex-col items-end justify-between gap-6 mb-16 md:flex-row">
            <div className="max-w-xl">
              <h2 className="heading-lg mb-4">Featured <span className="text-gradient">Creations</span></h2>
              <p className="text-gray-400">A showcase of our most recent engineering triumphs in AI and software architecture.</p>
            </div>
            <MagneticButton>
              <Link href="/projects" className="btn-secondary-white">View All Work</Link>
            </MagneticButton>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-3xl border border-white/10"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="mb-4 flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                  <Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-red-500">
                    Explore Case Study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DYNAMIC STATS ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl md:p-20">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 font-bold uppercase tracking-widest text-gray-500 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <GlassCard className="py-24 text-center border-red-500/30">
            <h2 className="heading-lg mb-8">
              Ready to <span className="text-gradient">Innovate</span>?
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-gray-400">
              Join the league of forward-thinking companies building the next generation of AI-driven technology.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <MagneticButton>
                <Link href="/contact" className="btn-primary">
                  Start Your Journey
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/about" className="btn-secondary-white">
                  Learn Our Story
                </Link>
              </MagneticButton>
            </div>
          </GlassCard>
        </div>
        {/* Decorative Light Leak */}
        <div className="absolute -right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />
      </section>
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
    </div>
  );
}
