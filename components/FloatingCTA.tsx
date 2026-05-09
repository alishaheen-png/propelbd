"use client";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => {
      setShow(y > window.innerHeight * 0.6);
    });
    return () => unsub();
  }, [scrollY]);

  const opacity = useTransform(scrollY, [0, 400], [0, 1]);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          key="fab"
          href="#booking"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          style={{ opacity }}
          className="group fixed bottom-6 right-6 z-[150] flex items-center gap-3 border border-gold/30 bg-black/80 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-gold backdrop-blur-xl transition-all hover:border-gold hover:bg-gold hover:text-black hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)] max-md:bottom-4 max-md:right-4"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold group-hover:bg-black" />
          Book a call
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
