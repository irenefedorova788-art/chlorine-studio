import type { Dict } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Process({ dict }: { dict: Dict }) {
  return (
    <section id="process" className="px-5 sm:px-8 py-24 sm:py-32 border-y border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mb-14 max-w-2xl">
            {dict.process.heading}
          </h2>
        </Reveal>

        <div className="divide-y divide-line border-t border-line">
          {dict.process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 40}>
              <div className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[6rem_16rem_1fr] items-baseline gap-x-4 sm:gap-x-10 py-6 sm:py-7">
                <span className="font-mono text-sm text-red">{step.n}</span>
                <h3 className="font-display font-semibold text-lg sm:text-2xl group-hover:opacity-70 transition-opacity">
                  {step.title}
                </h3>
                <p className="col-span-2 sm:col-span-1 mt-2 sm:mt-0 text-sm sm:text-base text-red leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
