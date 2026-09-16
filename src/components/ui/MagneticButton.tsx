"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  distance = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setEnabled(false);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!enabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * distance;
    const y = (clientY - (top + height / 2)) * distance;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (!enabled) return;
    setPosition({ x: 0, y: 0 });
  };

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
