"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] h-[2px] origin-left bg-gradient-gold"
      style={{
        scaleX: scrollYProgress,
        boxShadow: "0 0 8px rgba(201,168,76,0.5)",
        width: "100%",
      }}
    />
  );
}
