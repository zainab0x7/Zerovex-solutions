"use client";

import { useEffect, useRef } from "react";
import { animateTextReveal } from "@/lib/gsap";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  as: Component = "h2",
  delay = 0.1,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (textRef.current) {
      animateTextReveal(textRef.current, { delay });
    }
  }, [delay, text]);

  return (
    <Component ref={textRef as any} className={className}>
      {text}
    </Component>
  );
}
