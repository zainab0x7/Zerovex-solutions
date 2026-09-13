"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface ScrollCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label?: string;
}

export default function ScrollCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 1.5,
  label = "",
}: ScrollCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="space-y-1">
      <div className="text-3xl sm:text-4xl font-extrabold font-mono text-gray-900 font-heading">
        {prefix}
        {count}
        {suffix}
      </div>
      {label && (
        <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block">
          {label}
        </span>
      )}
    </div>
  );
}
