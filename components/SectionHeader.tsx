import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  tag: string;
  title: ReactNode;
  centered?: boolean;
};

export default function SectionHeader({ tag, title, centered }: Props) {
  return (
    <>
      <Reveal
        className={`flex items-center gap-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="inline-block h-px w-7 bg-gold" />
        {tag}
      </Reveal>
      <Reveal
        as="h2"
        delay={0.1}
        className="mt-6 font-display font-black leading-[1.08] tracking-[-0.02em]"
      >
        <span style={{ fontSize: "clamp(38px, 5vw, 68px)" }}>{title}</span>
      </Reveal>
    </>
  );
}
