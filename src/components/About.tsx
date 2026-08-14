import type { Dict } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About({ dict }: { dict: Dict }) {
  return (
    <section id="about" className="px-5 sm:px-8 py-24 sm:py-32 border-y border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.22em] text-red mb-3">
            {dict.about.label}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mb-14 max-w-2xl">
            {dict.about.heading}
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20">
          <Reveal delay={80}>
            <div className="space-y-6 max-w-xl">
              {dict.about.bio.map((p, i) => (
                <p key={i} className="text-base sm:text-lg leading-relaxed text-ink/90">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-8 border-t border-line pt-8 lg:border-t-0 lg:pt-0">
              {dict.about.principles.map((p) => (
                <div key={p.title}>
                  <p className="font-mono text-xs tracking-[0.2em] text-red mb-2">
                    {p.title}
                  </p>
                  <p className="text-sm sm:text-base text-ink-dim leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
