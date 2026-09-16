"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ultra-fast non-intrusive initial loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center pointer-events-none select-none"
        >
          <div className="space-y-3 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-zinc-900 tracking-widest uppercase">
              ZERO <span className="text-[#E31B2B]">VEX</span>
            </h1>

            {/* Subtle red progress accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-[2px] bg-[#E31B2B] mx-auto rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
