import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Propel BD — AI-Powered Business Development",
  description:
    "Propel BD implements AI, builds sales engines, and rewires how your business operates — so every department runs faster, sharper, and more profitably. GCC + UK markets.",
  keywords: [
    "AI business development",
    "sales automation",
    "GCC markets",
    "UK markets",
    "AI implementation",
    "lead generation",
    "business transformation",
    "PropelBD",
  ],
  authors: [{ name: "Ali Shaheen — Propel BD" }],
  alternates: {
    canonical: "https://alishaheen-png.github.io/propelbd/",
  },
  openGraph: {
    type: "website",
    title: "Propel BD — AI-Powered Business Development",
    description:
      "We implement AI, build sales engines, and rewire how your business operates — so every department runs faster, sharper, and more profitably.",
    url: "https://alishaheen-png.github.io/propelbd/",
    siteName: "Propel BD",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propel BD — AI-Powered Business Development",
    description:
      "We implement AI, build sales engines, and rewire how your business operates across GCC and UK markets.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=DM+Mono:wght@300;400;500&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
