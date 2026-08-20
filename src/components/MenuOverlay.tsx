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
  const links = [
    {
      href: `/${locale}/services`,
      label: dict.nav.services,
      area: "a",
      justify: "justify-self-start text-left",
      size: "text-4xl sm:text-5xl lg:text-6xl",
    },
    {
      href: `/${locale}/work`,
      label: dict.nav.work,
      area: "b",
      justify: "justify-self-end text-right",
      size: "text-4xl sm:text-5xl lg:text-6xl",
    },
    {
      href: `/${locale}/process`,
      label: dict.nav.process,
      area: "c",
      justify: "justify-self-center text-center",
      size: "text-6xl sm:text-8xl lg:text-9xl",
    },
    {
      href: `/${locale}#about`,
      label: dict.nav.about,
      area: "d",
      justify: "justify-self-start text-left",
      size: "text-4xl sm:text-5xl lg:text-6xl",
    },
    {
      href: `/${locale}#contact`,
      label: dict.nav.contacts,
      area: "e",
      justify: "justify-self-end text-right",
      size: "text-4xl sm:text-5xl lg:text-6xl",
    },
  ];

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

      {/* Mobile: simple stacked list — a scattered layout has no room to breathe below ~640px */}
      <nav className="sm:hidden relative z-10 h-full flex flex-col justify-center px-5">
        <ul>
          {links.map((l, i) => (
            <li key={l.href} className="border-b border-line first:border-t">
              <Link
                href={l.href}
                onClick={onNavigate}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline gap-4 py-3"
              >
                <span className="font-mono text-xs text-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-bold text-4xl leading-none group-hover:translate-x-3 transition-transform duration-300 ease-out">
                  {l.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop/tablet: links scattered across the screen, one dominant
          center item — echoes a poster layout rather than a centered list. */}
      <nav
        className="hidden sm:grid relative z-10 h-full w-full px-8 lg:px-14 pt-24 pb-28 gap-6"
        style={{
          gridTemplateAreas: `"a b" "c c" "d e"`,
          gridTemplateRows: "1fr 1.2fr 1fr",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={onNavigate}
            tabIndex={open ? 0 : -1}
            style={{ gridArea: l.area }}
            className={`group flex flex-col ${l.justify} ${
              l.area === "c" ? "self-center" : l.area === "a" || l.area === "b" ? "self-start" : "self-end"
            }`}
          >
            <span className="font-mono text-xs text-red mb-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`font-display font-bold leading-none group-hover:text-red/80 group-hover:-translate-y-1 transition-all duration-300 ease-out ${l.size}`}
            >
              {l.label}
            </span>
          </Link>
        ))}
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
