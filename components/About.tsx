"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const pills = [
  "GCC Markets",
  "UK Markets",
  "AI Implementation",
  "B2B Sales",
  "Operations",
  "Fintech",
];

const proofs = [
  {
    icon: "</>",
    h: "AI-Native Builder",
    p: "Custom apps, automations, and AI assistants — built and deployed inside your business, not off-the-shelf.",
  },
  {
    icon: "◎",
    h: "Operator, Not Consultant",
    p: "We run the systems alongside you. Not slides. Not recommendations. Execution and results.",
  },
  {
    icon: "▲",
    h: "Market-Specific Playbooks",
    p: "GCC outreach is different from UK outreach. We know both and build accordingly.",
  },
  {
    icon: "◈",
    h: "You Own Everything",
    p: "Every system, tool, playbook, and automation we build belongs to you. No lock-in, ever.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-[2] grid grid-cols-2 items-center gap-25 border-t border-white/[0.06] bg-offblack px-14 max-md:grid-cols-1 max-md:gap-12 max-md:px-6"
      style={{ paddingTop: 120, paddingBottom: 120, gap: 100 }}
    >
      <div>
        <Reveal className="flex items-center gap-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
          <span className="inline-block h-px w-7 bg-gold" />
          Who we are
        </Reveal>
        <Reveal
          as="h2"
          delay={0.1}
          className="mt-6 font-display font-black leading-[1.08] tracking-[-0.02em]"
        >
          <span style={{ fontSize: "clamp(38px, 5vw, 68px)" }}>
            Operator mindset.
            <br />
            <em className="text-gradient-gold italic">AI leverage.</em>
          </span>
        </Reveal>
        <Reveal
          as="p"
          delay={0.2}
          className="mt-8 text-[15px] leading-[1.85] text-bone/50"
        >
          Propel was built by someone who's been in the trenches — building
          pipelines, closing deals across GCC and UK markets, and deploying AI
          infrastructure that makes businesses move faster.
        </Reveal>
        <Reveal
          as="p"
          delay={0.3}
          className="mt-5 text-[15px] leading-[1.85] text-bone/50"
        >
          We don't hand you a strategy deck and walk away. We build the systems,
          train the teams, and stay until the numbers prove it's working.
          Everything we create is yours to keep.
        </Reveal>
        <Reveal delay={0.4} className="mt-9 flex flex-wrap gap-2.5">
          {pills.map((p) => (
            <span
              key={p}
              className="pill group relative overflow-hidden border border-gold/10 bg-gold/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-gold transition-colors hover:border-gold hover:text-black"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              <span className="relative">{p}</span>
            </span>
          ))}
        </Reveal>
      </div>

      <div className="flex flex-col gap-px bg-white/10">
        {proofs.map((p, i) => (
          <motion.div
            key={p.h}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="proof-item group relative flex items-start gap-5 overflow-hidden bg-card px-9 py-8 transition-all hover:bg-cardhover hover:pl-11"
          >
            <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-gold transition-transform duration-300 group-hover:scale-y-100" />
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-gold/10 bg-gold/10 text-lg text-gold transition-all group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(201,168,76,0.12)]">
              {p.icon}
            </span>
            <div>
              <h5 className="mb-1.5 text-[15px] font-bold">{p.h}</h5>
              <p className="text-[13px] leading-[1.65] text-bone/50">{p.p}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
