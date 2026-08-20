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
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/process`, label: dict.nav.process },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#contact`, label: dict.nav.contacts },
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

      <nav className="relative z-10 h-full flex flex-col justify-center px-5 sm:px-8">
        <div className="mx-auto max-w-7xl w-full">
          <ul>
            {links.map((l, i) => (
              <li key={l.href} className="border-b border-line first:border-t">
                <Link
                  href={l.href}
                  onClick={onNavigate}
                  tabIndex={open ? 0 : -1}
                  className="group flex items-baseline gap-4 sm:gap-7 py-3 sm:py-4"
                >
                  <span className="font-mono text-xs sm:text-sm text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-none group-hover:translate-x-3 transition-transform duration-300 ease-out">
                    {l.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
