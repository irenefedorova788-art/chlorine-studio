"use client";

import Link from "next/link";
import { CONTACT, type Dict, type Locale } from "@/lib/content";

export function MenuOverlay({
  dict,
  locale,
  open,
  paused,
  onNavigate,
}: {
  dict: Dict;
  locale: Locale;
  open: boolean;
  paused: boolean;
  onNavigate: () => void;
}) {
  const linksLeft = [
    { href: `/${locale}/services`, label: dict.nav.services, n: 1 },
    { href: `/${locale}/work`, label: dict.nav.work, n: 2 },
    { href: `/${locale}/process`, label: dict.nav.process, n: 3 },
  ];
  const linksRight = [
    { href: `/${locale}#about`, label: dict.nav.about, n: 4 },
    { href: `/${locale}#contact`, label: dict.nav.contacts, n: 5 },
  ];
  const allLinks = [...linksLeft, ...linksRight];

  const playState = paused ? "paused" : "running";

  return (
    <div
      className={`fixed inset-0 z-[55] transition-opacity duration-500 ease-out ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 overflow-hidden bg-bg">
        <div
          className="menu-blob absolute w-[70vmax] h-[70vmax] rounded-full opacity-70"
          style={{
            left: "-15%",
            top: "-20%",
            background: "radial-gradient(circle, #1657DE 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "menu-blob-a 24s ease-in-out infinite",
            animationPlayState: playState,
          }}
        />
        <div
          className="menu-blob absolute w-[60vmax] h-[60vmax] rounded-full opacity-60"
          style={{
            right: "-18%",
            top: "5%",
            background: "radial-gradient(circle, #7c3fbf 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "menu-blob-b 28s ease-in-out infinite",
            animationPlayState: playState,
          }}
        />
        <div
          className="menu-blob absolute w-[55vmax] h-[55vmax] rounded-full opacity-50"
          style={{
            left: "18%",
            bottom: "-25%",
            background: "radial-gradient(circle, #3a1c6b 0%, transparent 70%)",
            filter: "blur(90px)",
            animation: "menu-blob-c 20s ease-in-out infinite",
            animationPlayState: playState,
          }}
        />
      </div>

      {/* Mobile: single compact column near the top */}
      <nav className="sm:hidden relative z-10 px-5 pt-28">
        <ul className="space-y-1">
          {allLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={onNavigate}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline gap-3 py-1.5"
              >
                <span className="font-mono text-[10px] text-red">
                  {String(l.n).padStart(2, "0")}
                </span>
                <span className="font-mono text-xl tracking-tight group-hover:translate-x-2 transition-transform duration-300 ease-out">
                  {l.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop/tablet: two compact columns near the top, left-aligned —
          same idea as a classic full-screen takeover nav, just modest in scale. */}
      <nav className="hidden sm:flex relative z-10 px-8 lg:px-14 pt-28 gap-20 lg:gap-32">
        <ul className="space-y-2">
          {linksLeft.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={onNavigate}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline gap-3"
              >
                <span className="font-mono text-[11px] text-red">
                  {String(l.n).padStart(2, "0")}
                </span>
                <span className="font-mono text-xl lg:text-2xl tracking-tight group-hover:translate-x-2 transition-transform duration-300 ease-out">
                  {l.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {linksRight.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={onNavigate}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline gap-3"
              >
                <span className="font-mono text-[11px] text-red">
                  {String(l.n).padStart(2, "0")}
                </span>
                <span className="font-mono text-xl lg:text-2xl tracking-tight group-hover:translate-x-2 transition-transform duration-300 ease-out">
                  {l.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-0 inset-x-0 px-5 sm:px-8 pb-8 sm:pb-10">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-line font-mono text-[10px] sm:text-[11px] tracking-[0.16em] text-ink-dim">
          <span>{dict.footer.location.toUpperCase()}</span>
          <span>{dict.footer.role.toUpperCase()}</span>
          <a
            href={`mailto:${CONTACT.email}`}
            tabIndex={open ? 0 : -1}
            className="hover:text-red transition-colors sm:text-right"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}
