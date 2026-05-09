"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "h2" | "h3" | "p";
};

export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: Props) {
  const MotionTag = (motion as any)[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
