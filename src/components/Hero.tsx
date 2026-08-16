import type { Dict } from "@/lib/content";
import { CONTACT } from "@/lib/content";

export function Hero({ dict }: { dict: Dict }) {
  return (
    <section className="relative min-h-dvh flex flex-col">
      <div className="relative z-10 flex-1 flex flex-col justify-end px-5 sm:px-8 pt-28 pb-8">
        <div className="mx-auto max-w-7xl w-full py-10 sm:py-16">
          <div className="max-w-2xl lg:max-w-xl">
            <h1
              className="rise-in font-body font-medium leading-[1.1] tracking-tight text-2xl sm:text-3xl lg:text-4xl"
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

            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="rise-in mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-ink-dim hover:text-red transition-colors"
              style={{ animationDelay: "0.3s" }}
            >
              {dict.hero.cta.toUpperCase()}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-7xl w-full flex items-end justify-end gap-6">
          <div className="flex flex-col items-end gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.16em] text-ink-dim">
              {dict.hero.metaRight}
            </span>
            <span
              aria-hidden="true"
              className="font-mono text-ink-dim animate-bounce motion-reduce:animate-none"
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
