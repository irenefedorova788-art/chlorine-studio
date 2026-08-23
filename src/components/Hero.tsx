import type { Dict } from "@/lib/content";
import { CONTACT } from "@/lib/content";

export function Hero({ dict }: { dict: Dict }) {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-5 sm:px-8">
      <div className="max-w-3xl text-center">
        <h1
          className="rise-in font-display font-light leading-[1.15] tracking-tight text-3xl sm:text-5xl lg:text-6xl text-red"
          style={{ animationDelay: "0.1s" }}
        >
          {dict.hero.headline}
        </h1>

        <a
          href={CONTACT.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="rise-in mt-10 inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-red hover:opacity-70 transition-opacity"
          style={{ animationDelay: "0.25s" }}
        >
          {dict.hero.cta.toUpperCase()}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
