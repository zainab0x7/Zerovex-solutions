"use client";

import { useState } from "react";
import { ArrowUpRight, X, CheckCircle2, Layers, Cpu, Trophy, Target } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  category: string;
  industry?: string;
  servicesUsed?: string[];
  description: string;
  client?: string;
  challenge?: string;
  solution?: string;
  designHighlights?: string[];
  devHighlights?: string[];
  result?: string;
}

export default function ProjectCard({
  title,
  category,
  industry = "Enterprise Technology",
  servicesUsed = ["Web Architecture", "UI/UX Design", "API Infrastructure"],
  description,
  client = "Confidential Enterprise Client",
  challenge = "The client required a modern, highly secure digital architecture capable of processing thousands of concurrent user interactions with sub-second response times, while maintaining strict compliance standards.",
  solution = "ZeroVex engineered a custom modular solution utilizing Next.js server-side rendering, scalable cloud microservices, and a custom design system tailored for rapid data visualization.",
  designHighlights = ["Pixel-perfect design system", "Accessible high contrast UI", "Responsive layout scaling"],
  devHighlights = ["TypeScript strict typing", "Edge server API caching", "Automated deployment pipeline"],
  result = "Delivered a 45% increase in operational speed, sub-second load times across global regions, and zero downtime post-launch.",
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        data-cursor="project"
        className="corp-card cursor-pointer overflow-hidden group flex flex-col justify-between h-full bg-white border border-zinc-200 hover:border-[#E31B2B]/60 transition-all duration-300 transform group-hover:-translate-y-1 hover:shadow-xl"
      >
        {/* Card Top Vector Visual Header */}
        <div className="bg-zinc-50 p-6 border-b border-zinc-200 relative overflow-hidden">
          <div className="flex items-center justify-between pb-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#E31B2B] px-2.5 py-1 rounded bg-red-50 border border-red-200">
              {category}
            </span>
            <div className="p-2 rounded bg-white border border-zinc-200 text-zinc-700 group-hover:text-white group-hover:bg-[#E31B2B] group-hover:border-[#E31B2B] transition-all">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-zinc-900 font-heading group-hover:text-[#E31B2B] transition-colors">
            {title}
          </h3>

          <p className="text-xs text-zinc-500 font-mono pt-1">
            Industry: {industry}
          </p>
        </div>

        {/* Card Body Description */}
        <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
          <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
            {description}
          </p>

          <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
            {servicesUsed.slice(0, 3).map((s, i) => (
              <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-50 text-zinc-700 border border-zinc-200">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Link */}
        <div className="px-6 py-3 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-600">
          <span>{client}</span>
          <span className="font-semibold text-[#E31B2B] group-hover:underline">
            View Case Study →
          </span>
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white border border-zinc-200 rounded-xl max-w-3xl w-full p-6 sm:p-10 space-y-8 relative max-h-[90vh] overflow-y-auto text-left shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded bg-zinc-100 text-zinc-600 hover:text-black border border-zinc-200 transition-colors"
            >
              <X className="h-5 w-5 text-[#E31B2B]" />
            </button>

            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#E31B2B]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#E31B2B] font-semibold">
                  {category} • CASE STUDY
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-zinc-900 font-heading">
                {title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600 pt-1 font-mono">
                <span>Client: <strong className="text-zinc-900">{client}</strong></span>
                <span>•</span>
                <span>Industry: <strong className="text-zinc-900">{industry}</strong></span>
              </div>
            </div>

            <div className="w-16 h-[2px] bg-[#E31B2B]" />

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Challenge */}
              <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200 space-y-3">
                <div className="flex items-center gap-2 text-[#E31B2B] font-bold text-sm uppercase tracking-wider font-heading">
                  <Target className="h-4 w-4" />
                  <span>The Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200 space-y-3">
                <div className="flex items-center gap-2 text-[#E31B2B] font-bold text-sm uppercase tracking-wider font-heading">
                  <Cpu className="h-4 w-4" />
                  <span>Our Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {solution}
                </p>
              </div>

            </div>

            {/* Design & Development Execution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="h-4 w-4 text-[#E31B2B]" />
                  <span>Design Strategy</span>
                </h4>
                <ul className="space-y-2 text-xs text-zinc-700">
                  {designHighlights.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 bg-zinc-50 p-2.5 rounded border border-zinc-200">
                      <CheckCircle2 className="h-4 w-4 text-[#E31B2B] shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[#E31B2B]" />
                  <span>Development Highlights</span>
                </h4>
                <ul className="space-y-2 text-xs text-zinc-700">
                  {devHighlights.map((dh, i) => (
                    <li key={i} className="flex items-center gap-2 bg-zinc-50 p-2.5 rounded border border-zinc-200">
                      <CheckCircle2 className="h-4 w-4 text-[#E31B2B] shrink-0" />
                      <span>{dh}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Result Box */}
            <div className="bg-red-50/80 p-6 rounded-lg border-l-4 border-l-[#E31B2B] border border-red-200 space-y-2">
              <div className="flex items-center gap-2 text-[#E31B2B] font-bold text-sm uppercase tracking-wider">
                <Trophy className="h-5 w-5" />
                <span>The Commercial Result</span>
              </div>
              <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                {result}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 flex items-center justify-between border-t border-zinc-200">
              <span className="text-xs text-zinc-500">ZeroVex Digital Engineering</span>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-brand-red text-xs py-2 px-5"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
