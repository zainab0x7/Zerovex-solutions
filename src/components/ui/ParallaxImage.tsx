"use client";

import { useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";
import { animateClipPathReveal } from "@/lib/gsap";

interface ParallaxImageProps extends ImageProps {
  containerClassName?: string;
}

export default function ParallaxImage({
  containerClassName = "",
  alt,
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      animateClipPathReveal(containerRef.current);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      data-cursor="explore"
    >
      <Image
        {...props}
        alt={alt}
        className={`transition-transform duration-700 ease-out hover:scale-105 ${
          props.className || ""
        }`}
      />
    </div>
  );
}
