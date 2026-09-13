"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Layers, Cpu, Code2, Sparkles } from "lucide-react";
import Image from "next/image";

export interface ProjectItem {
  id: string;
  name: string;
  category: "WEBSITES" | "SOFTWARE" | "BRANDING" | "UI/UX" | "DIGITAL SOLUTIONS" | "AI & SOFTWARE";
  clientIndustry: string;
  isPlaceholder?: boolean;
  image: string;
  problem: string;
  solution: string;
  technology: string[];
  result: string;
  caseStudy: {
    challenge: string;
    strategy: string;
    design: string;
    techDetails: string;
    solutionDetails: string;
    outcome: string;
  };
}

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-red-500/40 bg-zinc-950 p-6 sm:p-10 text-white shadow-[0_0_80px_rgba(239,68,68,0.3)] space-y-10 custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-2.5 text-white/60 hover:bg-red-600 hover:text-white transition-all duration-300"
            aria-label="Close Case Study"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-4 pr-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-mono font-bold uppercase text-red-400 border border-red-500/40">
                {project.category}
              </span>
              <span className="text-xs font-mono text-white/50">
                INDUSTRY: {project.clientIndustry}
              </span>
              {project.isPlaceholder && (
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-mono text-white/60">
                  Concept Demonstration
                </span>
              )}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              {project.name}
            </h2>
          </div>

          {/* Large Hero Project Media */}
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/15 bg-zinc-900">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>

          {/* Case Study Grid Sections */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* THE CHALLENGE */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-500 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                THE CHALLENGE
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                {project.caseStudy.challenge}
              </p>
            </div>

            {/* THE STRATEGY */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-500 uppercase">
                <Sparkles className="h-4 w-4" />
                THE STRATEGY
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                {project.caseStudy.strategy}
              </p>
            </div>

            {/* THE DESIGN */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-500 uppercase">
                <Layers className="h-4 w-4" />
                THE DESIGN
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                {project.caseStudy.design}
              </p>
            </div>

            {/* THE TECHNOLOGY */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-500 uppercase">
                <Code2 className="h-4 w-4" />
                THE TECHNOLOGY
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-light mb-3">
                {project.caseStudy.techDetails}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technology.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-red-500/10 px-2.5 py-1 text-[10px] font-mono text-red-300 border border-red-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* THE SOLUTION & RESULT */}
          <div className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
                THE SOLUTION
              </h3>
              <p className="text-base text-white/90 leading-relaxed font-light">
                {project.caseStudy.solutionDetails}
              </p>
            </div>

            <div className="rounded-2xl border border-green-500/30 bg-green-950/20 p-6 flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-green-400">
                  THE RESULT
                </h4>
                <p className="text-sm text-white/90 font-medium mt-1">
                  {project.caseStudy.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-white/40">Zerovex Case Study Archive</span>
            <button
              onClick={onClose}
              className="rounded-xl bg-red-600 px-6 py-3 text-xs font-mono font-bold uppercase text-white hover:bg-red-500 transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
