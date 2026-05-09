"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
  },
};

type Props = {
  text: string;
  className?: string;
  goldFrom?: number;
  /** Render an italic gold span starting at this word index. */
};

export default function StaggerText({ text, className, goldFrom }: Props) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={container}
      className={className}
      style={{ display: "inline-block" }}
    >
      {words.map((w, i) => {
        const isGold = goldFrom !== undefined && i >= goldFrom;
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
            }}
          >
            <motion.span
              variants={word}
              style={{ display: "inline-block" }}
              className={
                isGold
                  ? "text-gradient-gold italic"
                  : ""
              }
            >
              {w}
              {i < words.length - 1 && " "}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
