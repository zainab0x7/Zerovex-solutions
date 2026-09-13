"use client";

import Link from "next/link";
import { ArrowUpRight, MessageSquareCode } from "lucide-react";

export default function LeadGenCTA() {
  return (
    <div className="corp-card p-6 sm:p-8 bg-gradient-to-r from-gray-900 via-zinc-900 to-gray-900 text-white border-l-4 border-l-[#E31B2B] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 my-12">
      <div className="flex items-center gap-4 text-left">
        <div className="p-3 rounded-full bg-red-950/80 border border-red-800/80 text-[#E31B2B] shrink-0 hidden sm:block">
          <MessageSquareCode className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xl font-bold font-heading text-white tracking-tight">
            Have a Project in Mind?
          </h4>
          <p className="text-xs sm:text-sm text-gray-300">
            Tell us what you're building.
          </p>
        </div>
      </div>

      <Link
        href="/contact"
        className="btn-brand-red text-xs py-3 px-6 shrink-0 group w-full sm:w-auto text-center"
      >
        <span>Start a Conversation</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  );
}
