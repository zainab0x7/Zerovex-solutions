"use client";

import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="corp-card p-8 sm:p-10 space-y-5 border-l-4 border-l-[#E31B2B] bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-red-50 border border-red-200 text-[#E31B2B] flex items-center justify-center">
              <Target className="h-5 w-5" />
            </div>
            <span className="text-xs font-mono tracking-widest text-[#E31B2B] uppercase font-bold">
              PURPOSE & DIRECTION
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-heading">
            Our Mission
          </h3>

          <p className="text-base text-gray-700 leading-relaxed font-normal">
            "To build reliable, modern and meaningful digital solutions that help businesses grow, operate better and communicate more effectively."
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="corp-card p-8 sm:p-10 space-y-5 border-l-4 border-l-gray-900 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-gray-100 border border-gray-200 text-gray-900 flex items-center justify-center">
              <Compass className="h-5 w-5" />
            </div>
            <span className="text-xs font-mono tracking-widest text-gray-900 uppercase font-bold">
              FUTURE HORIZON
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-heading">
            Our Vision
          </h3>

          <p className="text-base text-gray-700 leading-relaxed font-normal">
            "To become a trusted digital solutions partner for businesses looking to build, improve and scale their digital presence."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
