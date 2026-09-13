"use client";

import { useEffect, useRef } from "react";
import { animateLineExpand } from "@/lib/gsap";

interface AnimatedLineProps {
  className?: string;
}

export default function AnimatedLine({ className = "" }: AnimatedLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      animateLineExpand(lineRef.current);
    }
  }, []);

  return (
    <div
      ref={lineRef}
      className={`h-[2px] bg-[#E31B2B] origin-left ${className}`}
    />
  );
}
