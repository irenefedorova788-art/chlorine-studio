import type { Dict } from "@/lib/content";
import { CONTACT } from "@/lib/content";

const YEAR = new Date().getFullYear();

/**
 * Composition v1 — "light poster": small service labels distributed across
 * the top edge, a large empty middle, and the title/description/meta held
 * to the bottom third instead of centered like a standard hero block.
 */
export function Hero({ dict }: { dict: Dict }) {
  return (
    <section className="relative min-h-dvh flex flex-col">
      {/* top service row */}
      <div className="relative z-10 pt-24 sm:pt-28 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-3 items-start border-t border-line pt-3 font-mono text-[10px] sm:text-[11px] tracking-[0.16em] text-ink-dim">
          <span className="text-left leading-relaxed pr-3">{dict.footer.role.toUpperCase()}</span>
          <span className="text-center">{YEAR}</span>
          <span className="text-right">{dict.hero.metaRight}</span>
        </div>
      </div>

      {/* large open middle */}
      <div className="flex-1" />

      {/* bottom third: title/description left, CTA right */}
      <div className="relative z-10 px-5 sm:px-8 pb-6">
        <div className="mx-auto max-w-7xl border-t border-line pt-8 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
          <div className="max-w-2xl">
            <p
              className="rise-in font-mono text-[11px] tracking-[0.22em] text-red mb-4"
              style={{ animationDelay: "0.05s" }}
            >
              CHLORINE
            </p>
            <h1
              className="rise-in font-body font-medium leading-[1.1] tracking-tight text-2xl sm:text-3xl lg:text-4xl text-bg"
              style={{ animationDelay: "0.1s" }}
            >
              {dict.hero.tagline}{" "}
              <span className="font-accent italic text-red">{dict.hero.tagMark}</span>
              {dict.hero.tagTail}
            </h1>

            <p
              className="rise-in mt-6 border-l border-line pl-5 text-sm sm:text-base text-ink-dim leading-relaxed max-w-md"
              style={{ animationDelay: "0.2s" }}
            >
              {dict.hero.supporting}
            </p>
          </div>

          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="rise-in shrink-0 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-ink-dim hover:text-red transition-colors lg:pb-1"
            style={{ animationDelay: "0.3s" }}
          >
            {dict.hero.cta.toUpperCase()}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* bottom technical line */}
      <div className="relative z-10 px-5 sm:px-8 pb-8">
        <div className="mx-auto max-w-7xl border-t border-line pt-3 flex items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.16em] text-ink-dim">
          <span>{dict.hero.scroll}</span>
          <span
            aria-hidden="true"
            className="animate-bounce motion-reduce:animate-none"
          >
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}
