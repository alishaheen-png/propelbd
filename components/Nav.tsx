"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#booking", label: "Book" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: Event) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!a) return;
      const href = (a as HTMLAnchorElement).getAttribute("href")!;
      const t = document.querySelector(href);
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b backdrop-blur-2xl transition-all",
        scrolled
          ? "border-white/10 bg-black/95 px-14 py-4 max-md:px-6"
          : "border-white/[0.06] bg-black/80 px-14 py-6 max-md:px-6",
      )}
    >
      <a href="#home" className="font-display text-2xl font-black tracking-tight">
        Propel<span className="text-gold">.</span>
      </a>
      <ul className="flex gap-9 max-md:hidden">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="relative font-mono text-[11px] uppercase tracking-[0.12em] text-bone/50 transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="mailto:a.shaheen7853@gmail.com?subject=Propel%20BD%20-%20Inquiry"
        className="bg-gold px-7 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-black transition-all hover:-translate-y-px hover:bg-gold-light hover:shadow-[0_8px_32px_rgba(201,168,76,0.2)]"
      >
        Contact Us
      </a>
    </nav>
  );
}
