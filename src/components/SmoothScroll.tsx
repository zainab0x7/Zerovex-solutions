"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
<<<<<<< HEAD
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Respect reduced motion settings
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

=======

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
<<<<<<< HEAD
      touchMultiplier: 1.8,
      infinite: false,
    });

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateGSAPTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGSAPTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateGSAPTicker);
=======
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
