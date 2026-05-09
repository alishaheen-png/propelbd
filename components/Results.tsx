"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

type Metric = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  detail: string;
};

const metrics: Metric[] = [
  {
    value: 312,
    suffix: "%",
    label: "Avg pipeline lift",
    detail: "Across GCC + UK B2B engagements in the first 90 days post-deploy.",
  },
  {
    prefix: "<",
    value: 14,
    suffix: " days",
    label: "Time-to-first-result",
    detail: "From discovery call to first qualified meeting on the calendar.",
  },
  {
    value: 6,
    suffix: " hrs/wk",
    label: "Reclaimed per operator",
    detail: "Workflow + finance automation, deployed inside your stack.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Owned by you",
    detail: "Every system, playbook, and automation. No retainer lock-in.",
  },
];

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => {
    const n = Math.round(v);
    return `${prefix}${n.toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.6,
      ease: [0.23, 1, 0.32, 1],
    });
    return () => controls.stop();
  }, [inView, mv, to]);

  return (
    <motion.span ref={ref} className="text-gradient-gold tabular-nums">
      {display}
    </motion.span>
  );
}

export default function Results() {
  return (
    <section
      id="results"
      className="relative z-[2] border-t border-white/[0.06] px-14 max-md:px-6"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="mb-18 flex items-end justify-between gap-10 max-md:flex-col max-md:items-start">
        <div>
          <Reveal className="flex items-center gap-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-7 bg-gold" />
            What we deliver
          </Reveal>
          <Reveal
            as="h2"
            delay={0.1}
            className="mt-6 font-display font-black leading-[1.08] tracking-[-0.02em]"
          >
            <span style={{ fontSize: "clamp(38px, 5vw, 68px)" }}>
              Numbers, not
              <br />
              <em className="text-gradient-gold italic">narratives.</em>
            </span>
          </Reveal>
        </div>
        <Reveal
          as="p"
          delay={0.2}
          className="max-w-[360px] text-[15px] leading-[1.75] text-bone/50"
        >
          Engagements are scoped to the metric, instrumented from day one, and
          reported weekly. If it doesn't move, we kill it.
        </Reveal>
      </div>

      <div className="grid grid-cols-4 gap-px bg-white/10 max-md:grid-cols-1">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="group relative overflow-hidden bg-card p-10 transition-colors hover:bg-cardhover"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-gold transition-transform duration-500 group-hover:scale-x-100" />
            <div className="font-display text-[56px] font-bold leading-none">
              <Counter to={m.value} prefix={m.prefix} suffix={m.suffix} />
            </div>
            <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-gold/80">
              {m.label}
            </div>
            <p className="mt-4 text-[13px] leading-[1.7] text-bone/50">
              {m.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
