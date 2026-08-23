import Link from "next/link";
import type { Dict, Locale } from "@/lib/content";
import { CONTACT } from "@/lib/content";

export function Footer({ dict, locale }: { dict: Dict; locale: Locale }) {
  return (
    <footer className="px-5 sm:px-8 py-14 border-t border-line text-red">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-4 gap-10 sm:gap-6">
        <div className="sm:col-span-2">
          <p className="font-logo text-2xl mb-2">CHLORINE</p>
          <p className="text-sm">{dict.footer.role}</p>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] mb-3">
            {dict.footer.nav.toUpperCase()}
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href={`/${locale}/services`} className="hover:opacity-70 transition-opacity">{dict.nav.services}</Link></li>
            <li><Link href={`/${locale}/work`} className="hover:opacity-70 transition-opacity">{dict.nav.work}</Link></li>
            <li><Link href={`/${locale}/process`} className="hover:opacity-70 transition-opacity">{dict.nav.process}</Link></li>
            <li><Link href={`/${locale}#about`} className="hover:opacity-70 transition-opacity">{dict.nav.about}</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] mb-3">
            {dict.footer.contact.toUpperCase()}
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                {CONTACT.telegramLabel}
              </a>
            </li>
            <li>
              <a href={CONTACT.behance} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                {dict.footer.work}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:opacity-70 transition-opacity">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] tracking-[0.16em]">
        <span>© {new Date().getFullYear()} CHLORINE</span>
        <span>{dict.footer.location.toUpperCase()}</span>
      </div>
    </footer>
  );
}
