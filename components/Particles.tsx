"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cnv = ref.current;
    if (!cnv) return;
    const ctx = cnv.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0,
      raf = 0;
    const resize = () => {
      W = cnv.width = window.innerWidth;
      H = cnv.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = Math.min(55, Math.floor(window.innerWidth / 25));
    type Dot = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const ps: Dot[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.45 + 0.1,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.a})`;
        ctx.fill();
        for (let j = i + 1; j < ps.length; j++) {
          const q = ps[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(201,168,76,${(1 - d / 130) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.45 }}
    />
  );
}
