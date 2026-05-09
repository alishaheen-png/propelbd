const items = [
  "AI Automation",
  "Custom AI Apps",
  "Sales in a Box",
  "ICP Research",
  "Lead Generation",
  "Business Overhaul",
  "AI Training",
  "Operations Design",
  "Finance Automation",
  "GCC Markets",
  "UK Markets",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative z-[2] overflow-hidden border-y border-white/[0.06] bg-offblack py-[18px]">
      <div
        className="flex w-max animate-marquee gap-12 whitespace-nowrap hover:[animation-play-state:paused]"
      >
        {doubled.map((s, i) => (
          <span
            key={i}
            className="flex items-center gap-[18px] font-mono text-[11px] uppercase tracking-[0.18em] text-bone/50 transition-colors hover:text-gold"
          >
            <span className="text-[7px] text-gold">◆</span>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
