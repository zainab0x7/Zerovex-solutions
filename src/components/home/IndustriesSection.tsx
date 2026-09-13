"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Rocket, Store, Stethoscope, GraduationCap, ShoppingBag, ShoppingCart, Briefcase, MapPin } from "lucide-react";

const industriesList = [
  { icon: Rocket, label: "Startups", desc: "Digital foundation, MVPs, and scalable web apps." },
  { icon: Store, label: "Small Businesses", desc: "High-impact web presence and conversion tools." },
  { icon: Stethoscope, label: "Healthcare", desc: "Secure portals, clean UX, and business management." },
  { icon: GraduationCap, label: "Education", desc: "E-learning interfaces, platforms, and portals." },
  { icon: ShoppingBag, label: "Retail", desc: "Digital storefronts, product showcases, and branding." },
  { icon: ShoppingCart, label: "E-Commerce", desc: "High-converting online stores with payment sync." },
  { icon: Briefcase, label: "Professional Services", desc: "Corporate sites, lead funnels, and prestige design." },
  { icon: MapPin, label: "Local Businesses", desc: "Local SEO, Google visibility, and customer acquisition." },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom space-y-12">
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title="Who We Work With"
          subtitle="We build solutions for businesses across different industries."
        />

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {industriesList.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="corp-card p-6 space-y-3 hover:border-[#E31B2B]/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-[#E31B2B] flex items-center justify-center group-hover:bg-[#E31B2B] group-hover:text-white transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 font-heading">
                  {ind.label}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {ind.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
