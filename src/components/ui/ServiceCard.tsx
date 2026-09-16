"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  slug: string;
  features?: string[];
}

export default function ServiceCard({
  number,
  title,
  description,
  slug,
  features,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="block group h-full" data-cursor="explore">
      <div className="corp-card p-8 flex flex-col justify-between h-full relative overflow-hidden bg-white border border-zinc-200 hover:border-[#E31B2B] hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
        
        {/* Animated Red Accent Line on Top */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E31B2B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

        <div>
          {/* Number Badge & Interactive Arrow */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
            <span className="text-2xl font-bold font-mono text-[#E31B2B] group-hover:scale-110 transition-transform duration-300">
              {number}
            </span>
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200 text-zinc-700 group-hover:text-white group-hover:bg-[#E31B2B] group-hover:border-[#E31B2B] transition-all duration-300 shadow-sm">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="pt-6 space-y-3">
            <h3 className="text-xl font-bold text-zinc-900 font-heading group-hover:text-[#E31B2B] transition-colors">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed group-hover:text-zinc-800 transition-colors">
              {description}
            </p>
          </div>
        </div>

        {/* Feature Deliverable Badges */}
        {features && features.length > 0 && (
          <div className="pt-6 flex flex-wrap gap-2">
            {features.slice(0, 3).map((feat, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-zinc-50 text-zinc-700 border border-zinc-200 group-hover:border-red-200 transition-colors"
              >
                • {feat}
              </span>
            ))}
          </div>
        )}

      </div>
    </Link>
  );
}
