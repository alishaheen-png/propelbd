"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import clsx from "clsx";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "mag-btn group relative inline-block overflow-hidden font-mono text-[12px] font-medium uppercase tracking-[0.1em] no-underline transition-all";
  const styles =
    variant === "primary"
      ? "bg-gold text-black px-10 py-[18px] hover:bg-gold-light hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)]"
      : "text-bone/50 flex items-center gap-2.5 hover:text-bone";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={clsx(base, styles, className)}
    >
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-y-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-[left] duration-500 group-hover:left-full" />
      )}
      <span className="relative">{children}</span>
      {variant === "ghost" && (
        <span className="transition-transform group-hover:translate-x-1.5">
          →
        </span>
      )}
    </motion.a>
  );
}
