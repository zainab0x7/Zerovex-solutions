"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin if in browser environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const isReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const animateTextReveal = (
  element: HTMLElement | null,
  options: { delay?: number; duration?: number } = {}
) => {
  if (!element || isReducedMotion()) return;

  const words = element.innerText.split(" ");
  element.innerHTML = words
    .map(
      (word) =>
        `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full opacity-0 gsap-word">${word}</span></span>`
    )
    .join(" ");

  const wordSpans = element.querySelectorAll(".gsap-word");

  gsap.to(wordSpans, {
    y: 0,
    opacity: 1,
    duration: options.duration || 0.6,
    delay: options.delay || 0.1,
    stagger: 0.04,
    ease: "power3.out",
  });
};

export const animateLineExpand = (
  lineElement: HTMLElement | null,
  triggerElement?: HTMLElement | null
) => {
  if (!lineElement || isReducedMotion()) return;

  gsap.fromTo(
    lineElement,
    { width: "0%" },
    {
      width: "100%",
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerElement || lineElement,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const animateClipPathReveal = (
  element: HTMLElement | null,
  triggerElement?: HTMLElement | null
) => {
  if (!element || isReducedMotion()) return;

  gsap.fromTo(
    element,
    { clipPath: "inset(12% 12% 12% 12%)", opacity: 0, scale: 0.95 },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: triggerElement || element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
};

export { gsap, ScrollTrigger };
