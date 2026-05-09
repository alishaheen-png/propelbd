"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const steps = [
  {
    num: 1,
    title: "Discovery Call",
    body: "We map your business, understand your pain points, and identify where the biggest gains are hiding. 45 minutes — no fluff, no pitch.",
  },
  {
    num: 2,
    title: "Solution Architecture",
    body: "We design the full plan — whether that's AI tools, a sales engine, or an operational overhaul. You approve everything before we touch a thing.",
  },
  {
    num: 3,
    title: "Build & Deploy",
    body: "We execute inside your systems, test everything end-to-end, and go live. You see results within the first week — not the first quarter.",
  },
  {
    num: 4,
    title: "Optimise & Scale",
    body: "Weekly reviews. Performance tracking. Continuous iteration. We don't disappear after delivery — we stay until every system is running at peak.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      id="how"
      ref={ref}
      className="relative z-[2] overflow-hidden px-14 max-md:px-6"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full max-md:hidden"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          fill="none"
          stroke="rgba(201,168,76,0.12)"
          strokeWidth={1}
          strokeDasharray="800"
          initial={{ strokeDashoffset: 800 }}
          animate={{ strokeDashoffset: inView ? 0 : 800 }}
          transition={{ duration: 1.6, ease: [0.23, 1, 0.32, 1] }}
          d="M 150 100 C 350 100, 350 300, 550 300 C 750 300, 750 100, 950 100 C 1050 100, 1100 200, 1100 300"
        />
      </svg>

      <Reveal className="flex items-center gap-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
        <span className="inline-block h-px w-7 bg-gold" />
        The process
      </Reveal>
      <Reveal
        as="h2"
        delay={0.1}
        className="mt-6 font-display font-black leading-[1.08] tracking-[-0.02em]"
      >
        <span style={{ fontSize: "clamp(38px, 5vw, 68px)" }}>
          From first call to
          <br />
          <em className="text-gradient-gold italic">full transformation</em>
        </span>
      </Reveal>

      <div
        className="relative z-[1] mt-18 grid grid-cols-2 gap-18 max-md:grid-cols-1 max-md:gap-11"
        style={{ marginTop: 72 }}
      >
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: i * 0.12,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="step group relative pl-18"
            style={{ paddingLeft: 72 }}
          >
            <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center border-[1.5px] border-gold/10 bg-card font-mono text-base text-gold transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_28px_rgba(201,168,76,0.2),inset_0_0_16px_rgba(201,168,76,0.05)]">
              {s.num}
            </span>
            <h4 className="mb-3 mt-1 font-sans text-xl font-bold transition-colors group-hover:text-gold-light">
              {s.title}
            </h4>
            <p className="text-sm leading-[1.8] text-bone/50">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
