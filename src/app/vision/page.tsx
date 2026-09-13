"use client";

import { motion } from "framer-motion";
import FutureVision from "@/components/vision/FutureVision";
import ConversationalContact from "@/components/contact/ConversationalContact";

export default function VisionPage() {
  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-black text-center border-b border-white/10 overflow-hidden">
        <div className="container-custom relative z-10 max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-red-500 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            FUTURE TECHNOLOGY ROADMAP
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[1.05]"
          >
            BUILDING FOR <span className="text-gradient-red">TOMORROW.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Zerovex Solutions is executing a clear strategic roadmap from digital solutions into software architecture, business automation, cybersecurity, and global SaaS platforms.
          </motion.p>
        </div>
      </section>

      {/* Main Future Vision Section */}
      <FutureVision />

      {/* Contact Section */}
      <ConversationalContact />
    </div>
  );
}
