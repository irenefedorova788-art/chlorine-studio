import Link from "next/link";
import type { Dict, Locale } from "@/lib/content";
import { CONTACT } from "@/lib/content";
import { Reveal } from "./Reveal";
import { WorkGrid } from "./WorkGrid";

export function Work({ dict, locale }: { dict: Dict; locale: Locale }) {
  return (
    <section id="work" className="px-5 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-red">
                {dict.work.heading}
              </h2>
            </div>
            <div className="flex flex-col items-end gap-2 font-mono text-xs">
              <Link
                href={`/${locale}/work`}
                className="text-red underline decoration-line hover:opacity-70 transition-opacity"
              >
                {dict.work.moreLabel}
              </Link>
              <p className="text-red">
                {dict.work.note}{" "}
                <a
                  href={CONTACT.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red underline decoration-line hover:opacity-70 transition-opacity"
                >
                  {dict.work.noteLink}
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <WorkGrid
            items={dict.work.items}
            allLabel={dict.work.all}
            soonLabel={dict.work.soon}
            viewLabel={dict.work.view}
            locale={locale}
            light
          />
        </Reveal>
      </div>
    </section>
  );
}
