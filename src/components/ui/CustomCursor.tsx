"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only run on desktop with fine pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("custom-cursor-active");
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("a, button, [role='button'], input, textarea, select");
      const projectEl = target.closest("[data-cursor='project']");
      const imageEl = target.closest("[data-cursor='explore'], img");

      if (projectEl) {
        setIsHovered(true);
        setIsPointer(false);
        setCursorText("VIEW PROJECT →");
      } else if (imageEl && !interactiveEl) {
        setIsHovered(true);
        setIsPointer(false);
        setCursorText("EXPLORE");
      } else if (interactiveEl) {
        setIsHovered(true);
        setIsPointer(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setIsPointer(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block overflow-hidden">
      {/* Central Cursor Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? (cursorText ? 4.5 : 1.8) : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className={`fixed left-0 top-0 -ml-1.5 -mt-1.5 flex items-center justify-center rounded-full text-center ${
          cursorText
            ? "h-16 w-16 bg-red-600/90 text-white font-bold text-[9px] tracking-widest uppercase shadow-[0_0_25px_rgba(239,68,68,0.8)] backdrop-blur-md"
            : isPointer
            ? "h-8 w-8 bg-red-500/30 border border-red-500 backdrop-blur-sm"
            : "h-3 w-3 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]"
        }`}
      >
        {cursorText && (
          <span className="px-1 text-center font-extrabold leading-tight text-white drop-shadow">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Smooth Outer Follow Ring */}
      {!cursorText && (
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          animate={{
            scale: isHovered ? 1.4 : 1,
            opacity: isVisible ? (isHovered ? 0.6 : 0.3) : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed left-0 top-0 -ml-5 -mt-5 h-10 w-10 rounded-full border border-red-500/50 pointer-events-none"
        />
      )}
    </div>
  );
}
