import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { PageBackdrop } from "@/components/PageBackdrop";

// One typeface for everything on the site — headings, body, labels, italic
// emphasis — so the system reads as one deliberate choice. The site-name
// wordmark is the sole exception (see peaceSans below).
const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

// Wordmark-only typeface, self-hosted (SIL OFL) — used just for the
// site-name logotype in the header and footer.
const peaceSans = localFont({
  src: "../fonts/peace-sans-latin-400-normal.woff2",
  variable: "--font-peace-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "brand marketing by Irina Fedorova",
  description:
    "Independent Creative & Brand Strategist helping ambitious brands turn ideas into distinctive campaigns, visual worlds and AI-powered content.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${raleway.variable} ${peaceSans.variable}`}
    >
      <body className="text-ink font-body antialiased">
        <PageBackdrop />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
