import type { Dict } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About({ dict }: { dict: Dict }) {
  return (
    <section id="about" className="px-5 sm:px-8 py-24 sm:py-32 border-y border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mb-14 max-w-2xl">
            {dict.about.heading}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-6 max-w-xl">
            {dict.about.bio.map((p, i) => (
              <p key={i} className="text-base sm:text-lg leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
