"use client";
import { motion } from "framer-motion";

const float = (dur: number, dy = 24, dx = 8): any => ({
  y: [0, -dy, -dy * 0.6, 0],
  x: [0, dx, -dx * 0.5, 0],
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" },
});

export default function GeoShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden max-md:hidden">
      <motion.div
        animate={float(18)}
        className="absolute right-[8%] top-[15%] h-[120px] w-[120px] rotate-45 border border-gold/15"
      />
      <motion.div
        animate={float(24, 18, 4)}
        className="absolute right-[18%] top-[60%] h-14 w-14 rotate-45 border border-gold/10"
      />
      <motion.div
        animate={float(32, 28, 18)}
        className="absolute -left-16 top-[30%] h-[200px] w-[200px] rotate-45 border border-gold/[0.06]"
      />
      <motion.div
        animate={float(28, 18)}
        className="absolute left-1/2 top-[20%] h-40 w-40 rounded-full border border-gold/[0.07]"
      />
      <motion.div
        animate={float(20, 16, 12)}
        className="absolute left-[5%] top-[72%] h-[70px] w-[70px] bg-gold/[0.04]"
        style={{
          clipPath:
            "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
        }}
      />
      <motion.div
        animate={float(14, 12, -16)}
        className="absolute right-[5%] top-[45%] h-px w-[200px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)",
        }}
      />
      <motion.div
        animate={float(22, 20, 6)}
        className="absolute right-[30%] top-[10%] h-[140px] w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(201,168,76,0.15), transparent)",
        }}
      />
    </div>
  );
}
