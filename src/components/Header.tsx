import Link from "next/link";
import type { Dict, Locale } from "@/lib/content";

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

  const links = [
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/process`, label: dict.nav.process },
    { href: `/${locale}#contact`, label: dict.nav.contacts },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="font-logo tracking-tight text-lg sm:text-2xl"
        >
          CHLORINE
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-[0.14em] text-ink-dim">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={`/${other}${path}`}
            className="font-mono text-[11px] tracking-[0.14em] text-ink-dim hover:text-red transition-colors"
            aria-label={`Switch to ${other === "ru" ? "Russian" : "English"}`}
          >
            {other.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}
