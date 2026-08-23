"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dict, Locale } from "@/lib/content";
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
  const [paused, setPaused] = useState(false);

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
      <header className="fixed top-0 inset-x-0 z-[70]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href={`/${locale}`}
            onClick={() => setOpen(false)}
            className="font-logo tracking-tight text-lg sm:text-2xl"
          >
            CHLORINE
          </Link>

          <div className="flex items-center gap-4 sm:gap-5">
            <Link
              href={`/${other}${path}`}
              className="font-mono text-[11px] tracking-[0.14em] text-red hover:opacity-70 transition-opacity"
              aria-label={`Switch to ${other === "ru" ? "Russian" : "English"}`}
            >
              {other.toUpperCase()}
            </Link>

            {open && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play background animation" : "Pause background animation"}
                aria-pressed={paused}
                className="w-7 h-7 flex items-center justify-center rounded-full border border-red text-red hover:opacity-70 transition-opacity"
              >
                {paused ? (
                  <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor" aria-hidden="true">
                    <path d="M0 0L9 5L0 10V0Z" />
                  </svg>
                ) : (
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor" aria-hidden="true">
                    <rect width="2.5" height="10" />
                    <rect x="5.5" width="2.5" height="10" />
                  </svg>
                )}
              </button>
            )}

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="font-mono text-[11px] tracking-[0.14em] text-red hover:opacity-70 transition-opacity"
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
        paused={paused}
        onNavigate={() => setOpen(false)}
      />
    </>
  );
}
