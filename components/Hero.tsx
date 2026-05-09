"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import GeoShapes from "./GeoShapes";
import MagneticButton from "./MagneticButton";
import StaggerText from "./StaggerText";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const g1x = useSpring(mx, { stiffness: 60, damping: 22 });
  const g1y = useSpring(my, { stiffness: 60, damping: 22 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const xf = e.clientX / window.innerWidth - 0.5;
      const yf = e.clientY / window.innerHeight - 0.5;
      mx.set(xf * -35);
      my.set(yf * -22);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] as const },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-14 pb-24 pt-40 max-md:px-6 max-md:pb-20 max-md:pt-28"
    >
      {[20, 40, 60, 80].map((p) => (
        <div
          key={p}
          className="absolute bottom-0 top-0 z-[1] w-px bg-white/[0.06] max-md:hidden"
          style={{ left: `${p}%` }}
        />
      ))}

      <div
        className="pointer-events-none absolute inset-0 z-[1] animate-meshShift"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 10%, rgba(201,168,76,0.07) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(201,168,76,0.04) 0%, transparent 60%)",
        }}
      />

      <motion.div
        style={{ x: g1x, y: g1y }}
        className="pointer-events-none absolute -right-52 -top-52 z-[1] h-[700px] w-[700px]"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />
      </motion.div>
      <motion.div
        style={{ x: g1x, y: g1y, scale: -1 }}
        className="pointer-events-none absolute -bottom-24 -left-24 z-[1] h-[500px] w-[500px]"
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
            transform: "scale(1)",
          }}
        />
      </motion.div>

      <GeoShapes />

      <div className="relative z-[2]">
        <motion.div
          {...fadeUp(0.2)}
          className="mb-8 flex items-center gap-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-gold"
        >
          <span className="h-px w-8 bg-gold" />
          AI-Powered Business Development
        </motion.div>

        <h1
          className="max-w-[920px] pb-2 font-display font-black leading-[1.02] tracking-[-0.03em]"
          style={{ fontSize: "clamp(56px, 8.5vw, 112px)" }}
        >
          <StaggerText text="Your business." />
          <br />
          <StaggerText text="Rebuilt to scale." goldFrom={0} />
        </h1>

        <motion.p
          {...fadeUp(0.6)}
          className="mt-9 max-w-[480px] text-[17px] leading-[1.7] text-bone/50"
        >
          We implement AI, build sales engines, and rewire how your business
          operates — so every department runs faster, sharper, and more
          profitably.
        </motion.p>

        <motion.div
          {...fadeUp(0.8)}
          className="mt-13 flex items-center gap-7"
          style={{ marginTop: 52 }}
        >
          <MagneticButton
            href="mailto:a.shaheen7853@gmail.com?subject=Propel%20BD%20-%20Free%20Consultation&body=Hey%20Ali%2C%0A%0AI%27d%20like%20to%20book%20a%20free%20consultation.%0A%0AName%3A%20%0ACompany%3A%20%0AWhat%20I%20need%20help%20with%3A%20%0A%0AYou%20can%20also%20reach%20me%20on%20WhatsApp%3A%20%2B201020054341"
            variant="primary"
          >
            Contact Us
          </MagneticButton>
          <MagneticButton href="#services" variant="ghost">
            See what we do
          </MagneticButton>
        </motion.div>

        <motion.div
          {...fadeUp(1)}
          className="relative z-[2] mt-22 flex gap-14 border-t border-white/[0.06] pt-11 max-md:flex-col max-md:gap-7"
          style={{ marginTop: 88 }}
        >
          {[
            { num: "3x", label: "Average ROI increase" },
            { num: "GCC + UK", label: "Markets we operate in" },
            { num: "AI-First", label: "Every solution we build" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-gradient-gold font-display text-[40px] font-bold leading-none">
                {s.num}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-bone/50">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
