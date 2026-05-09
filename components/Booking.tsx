"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const cards = [
  {
    tag: "Free · 45 minutes",
    title: "Discovery Call",
    body: "We audit where you are, identify the biggest opportunities, and map exactly what needs to happen — whether it's AI, sales, or operations. No pitch, just clarity.",
    cta: "Get in Touch →",
    href: "mailto:a.shaheen7853@gmail.com?subject=Propel%20BD%20-%20Discovery%20Call&body=Hey%20Ali%2C%0A%0AI%27d%20like%20to%20book%20a%20discovery%20call.%0A%0AName%3A%20%0ACompany%3A%20%0AWhat%20I%20need%20help%20with%3A%20%0A%0AYou%20can%20also%20reach%20me%20on%20WhatsApp%3A%20%2B201020054341",
    primary: true,
  },
  {
    tag: "Paid · 90 minutes",
    title: "Deep-Dive Session",
    body: "Focused working session on your specific challenge — AI implementation, sales strategy, or operational bottlenecks. Recorded, actionable, tailored to your market.",
    cta: "Get in Touch →",
    href: "mailto:a.shaheen7853@gmail.com?subject=Propel%20BD%20-%20Working%20Session&body=Hey%20Ali%2C%0A%0AI%27d%20like%20to%20book%20a%20deep-dive%20working%20session.%0A%0AName%3A%20%0ACompany%3A%20%0AChallenge%3A%20%0A%0AYou%20can%20also%20reach%20me%20on%20WhatsApp%3A%20%2B201020054341",
    primary: false,
  },
];

export default function Booking() {
  return (
    <section
      id="booking"
      className="relative z-[2] overflow-hidden border-t border-white/[0.06] px-14 text-center max-md:px-6"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div
        className="pointer-events-none absolute inset-0 animate-bookingPulse"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-[1]">
        <Reveal className="flex items-center justify-center gap-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
          <span className="inline-block h-px w-7 bg-gold" />
          Book a session
        </Reveal>
        <Reveal
          as="h2"
          delay={0.1}
          className="mt-6 font-display font-black leading-none tracking-[-0.02em]"
        >
          <span style={{ fontSize: "clamp(42px, 6vw, 84px)" }}>
            Ready to{" "}
            <em className="text-gradient-gold italic">move?</em>
          </span>
        </Reveal>
        <Reveal
          as="p"
          delay={0.2}
          className="mx-auto mt-6 max-w-[460px] text-[15px] leading-[1.75] text-bone/50"
        >
          Free consultation to scope the engagement — or jump straight into a
          focused working session.
        </Reveal>

        <div
          className="mx-auto mt-13 grid max-w-[760px] grid-cols-2 gap-px bg-white/10 max-md:grid-cols-1"
          style={{ marginTop: 52 }}
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="book-card relative overflow-hidden bg-card px-9 pb-13 pt-11 text-left transition-colors hover:bg-cardhover"
              style={{ paddingBottom: 52 }}
            >
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-gold">
                {c.tag}
              </div>
              <h4 className="mb-3 font-display text-[22px] font-bold">
                {c.title}
              </h4>
              <p className="mb-7 text-[13px] leading-[1.7] text-bone/50">
                {c.body}
              </p>
              <a
                href={c.href}
                className={
                  c.primary
                    ? "mag-btn relative inline-block overflow-hidden bg-gold px-7 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-black transition-all hover:bg-gold-light hover:shadow-[0_8px_32px_rgba(201,168,76,0.25)]"
                    : "mag-btn inline-block border border-white/10 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-bone/50 transition-all hover:border-gold/15 hover:bg-gold/10 hover:text-bone"
                }
              >
                {c.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
