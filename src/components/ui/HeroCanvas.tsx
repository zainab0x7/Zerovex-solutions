"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for subtle interaction
    let mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Data streams flowing along grid
    const numStreams = 16;
    const streams = Array.from({ length: numStreams }, () => ({
      x: Math.floor(Math.random() * (width / 60)) * 60,
      y: Math.random() * height,
      speed: 1.5 + Math.random() * 2.5,
      length: 80 + Math.random() * 120,
      opacity: 0.2 + Math.random() * 0.5,
      isVertical: Math.random() > 0.5,
    }));

    // Interactive Particles / Nodes
    const numParticles = 40;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: 1.5 + Math.random() * 2,
      baseAlpha: 0.15 + Math.random() * 0.45,
    }));

    // Floating Code Fragments
    const codeSnippets = [
      "01010011 ZEROVEX",
      "const ecosystem = buildFuture();",
      "SYSTEM_STATUS: OPTIMAL",
      "import { Innovation } from '@zerovex';",
      "scale.auto() -> 100%",
      "CYBER_SECURITY: INITIALIZING",
      "SAAS_CORE: READY",
    ];
    const floatingSnippets = Array.from({ length: 5 }, () => ({
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -0.2 - Math.random() * 0.3,
      alpha: 0.1 + Math.random() * 0.2,
    }));

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // 1. Minimal Digital Grid
      const gridSize = 60;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Subtle mouse radial glow
      const grad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        450
      );
      grad.addColorStop(0, "rgba(239, 68, 68, 0.08)");
      grad.addColorStop(0.5, "rgba(239, 68, 68, 0.02)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Flowing Red Data Lines
      streams.forEach((stream) => {
        if (stream.isVertical) {
          stream.y += stream.speed;
          if (stream.y > height + stream.length) {
            stream.y = -stream.length;
            stream.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
          }

          const streamGrad = ctx.createLinearGradient(
            stream.x,
            stream.y - stream.length,
            stream.x,
            stream.y
          );
          streamGrad.addColorStop(0, "transparent");
          streamGrad.addColorStop(1, `rgba(239, 68, 68, ${stream.opacity})`);

          ctx.strokeStyle = streamGrad;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(stream.x, stream.y - stream.length);
          ctx.lineTo(stream.x, stream.y);
          ctx.stroke();

          // Stream head pulse
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
          ctx.fillRect(stream.x - 1, stream.y - 1, 3, 3);
        } else {
          stream.x += stream.speed;
          if (stream.x > width + stream.length) {
            stream.x = -stream.length;
            stream.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
          }

          const streamGrad = ctx.createLinearGradient(
            stream.x - stream.length,
            stream.y,
            stream.x,
            stream.y
          );
          streamGrad.addColorStop(0, "transparent");
          streamGrad.addColorStop(1, `rgba(239, 68, 68, ${stream.opacity})`);

          ctx.strokeStyle = streamGrad;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(stream.x - stream.length, stream.y);
          ctx.lineTo(stream.x, stream.y);
          ctx.stroke();

          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
          ctx.fillRect(stream.x - 1, stream.y - 1, 3, 3);
        }
      });

      // 3. Particles & Connecting Network Lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.fillStyle = `rgba(239, 68, 68, ${p.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(239, 68, 68, ${
              (1 - dist / 120) * 0.15
            })`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 4. Floating Code Snippets
      ctx.font = "11px monospace";
      floatingSnippets.forEach((snippet) => {
        snippet.y += snippet.vy;
        if (snippet.y < -20) {
          snippet.y = height + 20;
          snippet.x = Math.random() * (width - 200);
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${snippet.alpha})`;
        ctx.fillText(snippet.text, snippet.x, snippet.y);
      });

      // 5. Abstract Geometric Wireframe (Rotating Subtle Hexagon / Cube in corner)
      ctx.save();
      ctx.translate(width * 0.82, height * 0.4);
      ctx.rotate(tick * 0.003);
      ctx.strokeStyle = "rgba(239, 68, 68, 0.12)";
      ctx.lineWidth = 1;
      const size = 90;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = size * Math.cos(angle);
        const y = size * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Inner star lines
      for (let i = 0; i < 6; i += 2) {
        const angle = (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(size * Math.cos(angle), size * Math.sin(angle));
        ctx.stroke();
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-90"
    />
  );
}
