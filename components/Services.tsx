"use client";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const services = [
  {
    num: "01 — Build",
    title: "AI Build",
    body: "We audit your operations, identify the highest-ROI opportunities, and deploy tailored AI solutions — automations, custom apps, finance tools, and 24/7 AI assistants that plug into your existing systems.",
    price: "Done-For-You",
    features: [
      "Operations & workflow automation",
      "Custom AI apps built for your business",
      "Finance & reporting tools",
      "24/7 AI assistants deployed in your stack",
      "Team training on every tool we build",
    ],
  },
  {
    num: "02 — Pipeline",
    title: "Sales in a Box",
    body: "We deep-dive into your market, define your ICP with surgical precision, build your outreach strategy from scratch, and deliver a pipeline of researched, qualified prospects ready for you to close.",
    price: "Full Package",
    features: [
      "ICP deep analysis & persona mapping",
      "Outreach strategy & sales playbook",
      "Objection handling & closing scripts",
      "Qualified lead lists matching your ICP",
      "Multi-channel campaign architecture",
    ],
  },
  {
    num: "03 — Transform",
    title: "The Overhaul",
    body: "We sit with every department — finance, ops, sales, leadership — map how they run, where they leak, and rebuild the playbook. Process redesign, AI training for every team, and tighter cross-functional alignment.",
    price: "Consulting Engagement",
    features: [
      "Cross-functional business audit",
      "Process & communication redesign",
      "KPI frameworks & accountability systems",
      "AI training for every department",
      "Ongoing advisory & implementation support",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-[2] border-t border-white/[0.06] bg-offblack px-14 py-30 max-md:px-6 max-md:py-20"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="mb-18 flex items-end justify-between gap-10 max-md:flex-col max-md:items-start">
        <div>
          <Reveal className="flex items-center gap-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
            <span className="inline-block h-px w-7 bg-gold" />
            What we offer
          </Reveal>
          <Reveal
            as="h2"
            delay={0.1}
            className="mt-6 font-display font-black leading-[1.08] tracking-[-0.02em]"
          >
            <span style={{ fontSize: "clamp(38px, 5vw, 68px)" }}>
              Three ways to
              <br />
              <em className="text-gradient-gold italic">transform your business</em>
            </span>
          </Reveal>
        </div>
        <Reveal
          as="p"
          delay={0.2}
          className="max-w-[340px] text-[15px] leading-[1.75] text-bone/50"
        >
          From AI-powered tools to full business transformation — pick the
          engagement that matches where you are.
        </Reveal>
      </div>

      <div className="grid grid-cols-3 gap-px bg-white/10 max-md:grid-cols-1">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="svc-card group relative overflow-hidden border border-transparent bg-card px-10 pb-14 pt-12 transition-colors hover:border-white/10 hover:bg-cardhover"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-gold transition-transform duration-500 group-hover:scale-x-100" />
            <div
              className="absolute right-0 top-0 h-[200px] w-[200px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(201,168,76,0.12), transparent 70%)",
              }}
            />
            <div className="absolute bottom-6 right-6 h-11 w-11 rotate-45 border border-gold/10 transition-all duration-700 group-hover:rotate-90 group-hover:border-gold/35 group-hover:shadow-[0_0_16px_rgba(201,168,76,0.1)]" />

            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.15em] text-gold/60">
              {s.num}
            </div>
            <h3 className="mb-4 font-display text-3xl font-bold leading-[1.15]">
              {s.title}
            </h3>
            <p className="mb-7 text-sm leading-[1.8] text-bone/50">{s.body}</p>
            <span className="inline-block border border-gold/10 bg-gold/10 px-[18px] py-[9px] font-mono text-[11px] tracking-[0.1em] text-gold">
              {s.price}
            </span>
            <ul className="mt-7 list-none space-y-0">
              {s.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 border-b border-white/[0.06] py-[9px] text-[13px] text-bone/50 transition-all duration-300 group-hover:pl-1 group-hover:text-bone"
                >
                  <span className="flex-shrink-0 text-[11px] text-gold">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
