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
  },
];

export default function ServicesPage() {
  return (
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
    </div>
  );
}
