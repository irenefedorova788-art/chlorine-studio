"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND, type Dict, type Locale } from "@/lib/content";
import { MenuOverlay } from "./MenuOverlay";

export function Header({
  dict,
  locale,
  path = "",
}: {
  dict: Dict;
  locale: Locale;
  /** Current subpage segment, e.g. "/services". Empty string for the homepage. */
  path?: string;
}) {
  const other: Locale = locale === "ru" ? "en" : "ru";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navLinks = [
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/process`, label: dict.nav.process },
    { href: `/${locale}#about`, label: dict.nav.about },
  ];
  // Floating pill only while scrolled and the full-screen menu is closed.
  const pill = scrolled && !open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[70] px-3 sm:px-6">
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
            pill
              ? "mt-3 sm:mt-4 max-w-5xl h-14 sm:h-16 rounded-full px-5 sm:px-8 bg-[#141414]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
              : "mt-0 max-w-7xl h-16 px-2 bg-transparent"
          }`}
        >
          <Link
            href={`/${locale}`}
            onClick={() => setOpen(false)}
            className="font-logo tracking-tight whitespace-nowrap text-[13px] min-[400px]:text-[15px] sm:text-xl"
          >
            {BRAND}
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav
              className={`hidden lg:flex items-center gap-7 transition-opacity duration-300 ${
                pill ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={!pill}
            >
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  tabIndex={pill ? 0 : -1}
                  className="text-[15px] font-medium text-white/75 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <Link
              href={`/${other}${path}`}
              className={`font-mono text-[11px] tracking-[0.14em] hover:opacity-70 transition-colors ${
                pill ? "text-white/75" : "text-red"
              }`}
              aria-label={`Switch to ${other === "ru" ? "Russian" : "English"}`}
            >
              {other.toUpperCase()}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className={`font-mono text-[11px] tracking-[0.14em] hover:opacity-70 transition-colors ${
                pill ? "text-white/75" : "text-red"
              }`}
            >
              {open ? "✕" : "MENU"}
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay
        dict={dict}
        locale={locale}
        open={open}
        onNavigate={() => setOpen(false)}
      />
    </>
  );
}
