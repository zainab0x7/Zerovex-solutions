"use client";

import { motion } from "framer-motion";

const items = [
  "IDEAS",
  "DESIGN",
  "DEVELOPMENT",
  "DIGITAL SOLUTIONS",
  "GROWTH",
];

export default function TextMarquee() {
  return (
    <div className="py-6 bg-black border-y border-zinc-800 overflow-hidden select-none">
      <motion.div
        className="flex whitespace-nowrap gap-12 text-sm sm:text-base font-mono font-bold tracking-widest text-zinc-400 uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-12">
            <span className="hover:text-white transition-colors">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#E31B2B]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
