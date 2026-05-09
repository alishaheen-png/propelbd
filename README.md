# Propel BD — Next.js v2

Modern Next.js 14 rebuild of [propelbd](https://github.com/alishaheen-png/propelbd) with TypeScript, Tailwind, and Framer Motion.

Same gold/black brand. Same SEO + content. Upgraded to:

- **Next.js 14 App Router** + TypeScript + Tailwind
- **Framer Motion** for stagger reveals, scroll progress, magnetic buttons, and the SVG path draw on Process
- **New section: Results** — animated counter metrics (`useTransform` + `animate`)
- Refactored sections into composable components (`Hero`, `Marquee`, `Services`, `Process`, `Results`, `About`, `Booking`, `Footer`)
- Static export friendly (`output: 'export'`) for GitHub Pages drop-in

## Run locally

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # produces ./out for static hosting
```

## Deploy to GitHub Pages

```bash
npm run build
# upload ./out as the new site root, OR push the out/ folder to gh-pages branch
```

## Branch strategy

This lives on the `next-upgrade` branch. The original single-file `index.html` site is preserved on `main` and continues to serve from GitHub Pages. Merge or repoint Pages once ready.

## What changed vs the old site

| Old (`main`) | New (`next-upgrade`) |
|---|---|
| Single 1024-line `index.html` | Componentized React tree |
| CSS `@keyframes` + `IntersectionObserver` reveals | Framer Motion `whileInView` with stagger |
| Hand-rolled magnetic button via mouse events | `MagneticButton` with spring-driven `useMotionValue` |
| No build step | TypeScript-checked production build via `next build` |
| 6 sections | 7 — added `Results` (animated metric counters) |
