"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("cursor-none-deep");

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    const targets =
      "a,button,.svc-card,.book-card,.proof-item,.pill,.step,.mag-btn";
    const onEnter = () => {
      if (dotRef.current)
        dotRef.current.style.transform = "translate(-50%,-50%) scale(2.5)";
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%,-50%) scale(1.6)";
        ringRef.current.style.opacity = "1";
        ringRef.current.style.borderColor = "rgba(201,168,76,0.8)";
      }
    };
    const onLeave = () => {
      if (dotRef.current)
        dotRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%,-50%) scale(1)";
        ringRef.current.style.opacity = "0.5";
        ringRef.current.style.borderColor = "rgba(201,168,76,0.5)";
      }
    };
    const els = Array.from(document.querySelectorAll(targets));
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      document.documentElement.classList.remove("cursor-none-deep");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-gold"
        style={{
          transform: "translate(-50%,-50%)",
          mixBlendMode: "difference",
          transition: "transform 0.15s cubic-bezier(.23,1,.32,1)",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] h-10 w-10 rounded-full border opacity-50"
        style={{
          borderColor: "rgba(201,168,76,0.5)",
          borderWidth: 1.5,
          transform: "translate(-50%,-50%)",
          transition: "all 0.2s cubic-bezier(.23,1,.32,1)",
        }}
      />
    </>
  );
}
