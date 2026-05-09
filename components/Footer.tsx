const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#booking", label: "Book" },
];

export default function Footer() {
  return (
    <footer className="relative z-[2] flex items-center justify-between border-t border-white/[0.06] bg-offblack px-14 py-13 max-md:flex-col max-md:gap-6 max-md:px-6 max-md:text-center">
      <div className="font-display text-xl font-black">
        Propel<span className="text-gold">.</span>
      </div>
      <ul className="flex flex-wrap justify-center gap-8 max-md:gap-4">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-bone/50 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-bone/20">
        © 2026 Propel BD. All rights reserved.
      </div>
    </footer>
  );
}
