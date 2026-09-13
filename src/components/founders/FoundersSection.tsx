"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Mail, MessageSquare } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function FoundersSection() {
  const { founder, coFounder } = companyInfo;

  const leaders = [
    {
      ...founder,
      initials: "ZA",
      badge: "VISION & LEADERSHIP",
      email: companyInfo.email,
      whatsapp: companyInfo.whatsappLink,
    },
    {
      ...coFounder,
      initials: "AK",
      badge: "CREATIVE & PRODUCT EXECUTION",
      email: companyInfo.email,
      whatsapp: companyInfo.whatsappLink,
    },
  ];

  return (
    <section className="relative bg-[#0A0A0A] py-24 text-white border-b border-zinc-800/80 overflow-hidden">
      <div className="container-custom relative z-10 space-y-16">
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#E31B2B] uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E31B2B]" />
            LEADERSHIP
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading uppercase tracking-tight text-white"
          >
            The People Behind <span className="text-[#E31B2B]">ZeroVex</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Built with ideas, technology and a commitment to meaningful digital solutions.
          </motion.p>
        </div>

        {/* Two Profiles Layout: Desktop side-by-side, Mobile stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative border border-zinc-800 bg-zinc-950 p-8 sm:p-10 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31B2B]/40 to-transparent group-hover:via-[#E31B2B] transition-all duration-500" />

              <div className="space-y-6">
                
                {/* Header: Portrait Placeholder Area + Name & Role */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-zinc-800/80 pb-6">
                  {/* Portrait Placeholder Area */}
                  <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-sm border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 font-mono text-2xl font-extrabold text-[#E31B2B] shadow-inner group-hover:border-[#E31B2B]/60 group-hover:text-white transition-all duration-300">
                    <span className="relative z-10">{leader.initials}</span>
                    <div className="absolute inset-0 bg-radial from-[#E31B2B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#E31B2B] uppercase">
                      {leader.role}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-white tracking-tight">
                      {leader.name}
                    </h3>
                    <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-zinc-400">
                      <Sparkles className="h-3.5 w-3.5 text-[#E31B2B]" />
                      <span>{leader.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Short Intro */}
                <p className="text-sm text-zinc-300 leading-relaxed font-medium border-l-2 border-[#E31B2B]/80 pl-4 py-0.5">
                  "{leader.intro}"
                </p>

                {/* Detailed Professional Introduction */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {leader.detailedIntro}
                </p>

                {/* Core Focus Chips */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                    CORE FOCUS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {leader.coreFocus.map((focus) => (
                      <span
                        key={focus}
                        className="bg-zinc-900/90 px-3 py-1.5 text-xs font-mono text-zinc-300 border border-zinc-800/90 rounded-sm group-hover:border-zinc-700 transition-colors"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Actions & CTA */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3 text-zinc-400 text-xs font-mono">
                  <a
                    href={`mailto:${leader.email}?subject=Contact%20${encodeURIComponent(leader.name)}`}
                    className="hover:text-[#E31B2B] transition-colors p-2 rounded bg-zinc-900 border border-zinc-800"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={leader.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E31B2B] transition-colors p-2 rounded bg-zinc-900 border border-zinc-800"
                    aria-label={`WhatsApp ${leader.name}`}
                  >
                    <MessageSquare className="h-4 w-4" />
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E31B2B] text-white text-xs font-bold font-mono uppercase tracking-wider hover:bg-red-700 transition-all rounded-sm group/btn shadow-md"
                >
                  <span>{leader.cta}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

