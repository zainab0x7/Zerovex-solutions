"use client";

import Link from "next/link";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function DarkCompanyCTA() {
  return (
    <section className="bg-zinc-950 text-white py-20 border-t border-zinc-800">
      <div className="container-custom">
        <div className="corp-card p-10 sm:p-16 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 border-2 border-[#E31B2B] text-center space-y-8 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-mono tracking-widest text-[#E31B2B] uppercase font-bold">
              ZEROVEX SOLUTIONS PARTNERSHIP
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Let's Build Something Meaningful.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
              "Have an idea, business problem or digital project in mind? Let's turn it into a practical solution."
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-brand-red text-xs py-4 px-8 w-full sm:w-auto group justify-center"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-700 text-white hover:border-[#E31B2B] hover:text-[#E31B2B] transition-all text-xs font-bold font-mono uppercase tracking-wider rounded-sm w-full sm:w-auto"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Talk to Our Team</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
