import Link from "next/link";
import type { Dict, Locale } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Services({ dict, locale }: { dict: Dict; locale: Locale }) {
  return (
    <section id="services" className="px-5 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-red mb-3">
                {dict.services.label}
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-5xl max-w-2xl">
                {dict.services.heading}
              </h2>
            </div>
            <Link
              href={`/${locale}/services`}
              className="font-mono text-xs text-ink underline decoration-line hover:decoration-red hover:text-red transition-colors"
            >
              {dict.servicesPage.moreLabel} ↗
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {dict.services.items.map((item, i) => (
            <Reveal key={item.code} delay={i * 60}>
              <div className="group bg-bg/55 backdrop-blur-sm h-full p-7 sm:p-8 hover:bg-bg/75 transition-colors">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-mono text-sm text-ink-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-bold text-3xl text-red group-hover:translate-x-1 transition-transform">
                    {item.code}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg sm:text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-dim leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
