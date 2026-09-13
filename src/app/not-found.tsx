import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowLeft, Compass } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | ZeroVex Solutions",
  description: "Looks like this page took a wrong turn. Return to ZeroVex Solutions home.",
};

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#0A0A0A] text-white pt-24 pb-16 px-4">
      <div className="max-w-xl mx-auto text-center space-y-8 corp-card p-10 sm:p-14 bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
        
        {/* Ambient background accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#E31B2B] shadow-[0_0_30px_#E31B2B]" />

        <div className="w-16 h-16 rounded-full bg-red-950/60 border border-red-800/80 text-[#E31B2B] flex items-center justify-center mx-auto">
          <Compass className="h-8 w-8 animate-pulse" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#E31B2B] uppercase font-bold">
            ERROR 404
          </span>

          <h1 className="text-6xl sm:text-8xl font-black font-heading text-white tracking-tight">
            404
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal max-w-md mx-auto">
            "Looks like this page took a wrong turn."
          </p>
        </div>

        <div className="pt-4 flex justify-center">
          <MagneticButton>
            <Link
              href="/"
              className="btn-brand-red text-xs py-4 px-8 inline-flex items-center gap-2 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </MagneticButton>
        </div>

      </div>
    </div>
  );
}
