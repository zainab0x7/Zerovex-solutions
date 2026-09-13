"use client";

<<<<<<< HEAD
import { useRef, useState, useEffect } from "react";
=======
import { useRef, useState } from "react";
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
<<<<<<< HEAD
  distance = 0.35,
=======
  distance = 0.5,
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
<<<<<<< HEAD
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
=======

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * distance;
    const y = (clientY - (top + height / 2)) * distance;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
<<<<<<< HEAD
    if (!enabled) return;
    setPosition({ x: 0, y: 0 });
  };

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

=======
    setPosition({ x: 0, y: 0 });
  };

>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
<<<<<<< HEAD
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.1 }}
=======
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
      className={className}
    >
      {children}
    </motion.div>
  );
}
