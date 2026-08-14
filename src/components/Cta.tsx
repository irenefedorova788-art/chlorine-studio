import type { Dict } from "@/lib/content";
import { CONTACT } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Cta({ dict }: { dict: Dict }) {
  return (
    <section id="contact" className="relative px-5 sm:px-8 py-28 sm:py-40">
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-body font-medium leading-[1.1] text-3xl sm:text-5xl lg:text-6xl max-w-4xl">
            {dict.cta.line1}
            <br />
            <span className="font-accent italic text-red">{dict.cta.line2}</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-bg font-mono text-xs tracking-[0.14em] px-7 py-4 hover:bg-red hover:text-ink transition-colors"
            >
              {dict.cta.button.toUpperCase()}
              <span aria-hidden="true">→</span>
            </a>
            <span className="font-mono text-xs text-ink-dim">
              {dict.cta.emailLabel}{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-ink underline decoration-line hover:decoration-red hover:text-red transition-colors">
                {CONTACT.email}
              </a>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
