"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Cpu, ShieldCheck, Terminal, Layers } from "lucide-react";

export default function WorkstationVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative w-full max-w-lg lg:max-w-none mx-auto"
    >
      {/* Red Accent Background Glow */}
      <div className="absolute -inset-1 bg-[#E31B2B]/10 rounded-2xl blur-xl opacity-60 pointer-events-none" />

      {/* Main Digital Workstation Window */}
      <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xl">
        
        {/* Window Header Bar */}
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E31B2B]" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs font-mono text-gray-600 font-medium">ZeroVex Engineering Suite v2.4</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-red-50 border border-red-200 text-[#E31B2B] font-semibold">
              PRODUCTION READY
            </span>
          </div>
        </div>

        {/* Workspace Content */}
        <div className="p-6 space-y-6">
          
          {/* Active Code Tab */}
          <div className="flex items-center gap-2 text-xs font-mono border-b border-gray-200 pb-3">
            <div className="px-3 py-1.5 rounded bg-gray-100 text-gray-900 border-l-2 border-[#E31B2B] font-medium flex items-center gap-2">
              <Code2 className="h-3.5 w-3.5 text-[#E31B2B]" />
              <span>DigitalArchitecture.config</span>
            </div>
            <div className="px-3 py-1.5 text-gray-500 flex items-center gap-2 hover:text-black transition-colors cursor-pointer">
              <Layout className="h-3.5 w-3.5" />
              <span>BrandSystem.ts</span>
            </div>
          </div>

          {/* Live Code Snippet Display (IDE style) */}
          <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 font-mono text-xs text-gray-200 space-y-2 overflow-x-auto">
            <div className="flex items-center justify-between text-[#E31B2B] text-[11px] pb-1 border-b border-gray-800 font-semibold">
              <span>// ZERO VEX ARCHITECTURE</span>
              <span className="text-emerald-400">STATUS: 200 OK</span>
            </div>
            <p className="text-gray-400">
              <span className="text-purple-400">import</span> &#123; Vision, Architecture, Growth &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">"@zerovex/core"</span>;
            </p>
            <p className="text-gray-300">
              <span className="text-blue-400">const</span> <span className="text-yellow-400">enterpriseProject</span> = <span className="text-blue-400">await</span> ZeroVex.<span className="text-yellow-400">deploy</span>(&#123;
            </p>
            <p className="pl-4 text-gray-200">
              strategy: <span className="text-emerald-400">"Scalable Digital Architecture"</span>,
            </p>
            <p className="pl-4 text-gray-200">
              designLanguage: <span className="text-emerald-400">"Minimal, Clean, White"</span>,
            </p>
            <p className="pl-4 text-gray-200">
              primaryAccent: <span className="text-[#E31B2B]">"#E31B2B"</span>,
            </p>
            <p className="pl-4 text-gray-200">
              performanceVitals: <span className="text-emerald-400">100</span>
            </p>
            <p className="text-gray-300">&#125;);</p>
          </div>

          {/* Feature Pillars */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded bg-gray-50 border border-gray-200 space-y-1">
              <div className="flex items-center gap-1.5 text-[#E31B2B] text-xs font-semibold">
                <Cpu className="h-4 w-4" />
                <span>Engineered</span>
              </div>
              <p className="text-[11px] text-gray-500">Scalable Tech</p>
            </div>

            <div className="p-3 rounded bg-gray-50 border border-gray-200 space-y-1">
              <div className="flex items-center gap-1.5 text-[#E31B2B] text-xs font-semibold">
                <Layers className="h-4 w-4" />
                <span>Modular</span>
              </div>
              <p className="text-[11px] text-gray-500">Clean UI System</p>
            </div>

            <div className="p-3 rounded bg-gray-50 border border-gray-200 space-y-1">
              <div className="flex items-center gap-1.5 text-[#E31B2B] text-xs font-semibold">
                <ShieldCheck className="h-4 w-4" />
                <span>Secure</span>
              </div>
              <p className="text-[11px] text-gray-500">Enterprise Grade</p>
            </div>
          </div>

          {/* Terminal Build Status */}
          <div className="bg-gray-50 px-4 py-2.5 rounded border border-gray-200 flex items-center justify-between text-[11px] font-mono text-gray-600">
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-[#E31B2B]" />
              <span>zerovex build --prod</span>
            </div>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              Build Succeeded (0.42s)
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
