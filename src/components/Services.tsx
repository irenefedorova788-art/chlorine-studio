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
              <h2 className="font-display font-bold text-3xl sm:text-5xl max-w-2xl text-red">
                {dict.services.heading}
              </h2>
            </div>
            <Link
              href={`/${locale}/services`}
              className="font-mono text-xs text-red underline decoration-line hover:opacity-70 transition-opacity"
            >
              {dict.servicesPage.moreLabel}
            </Link>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-14">
          <Reveal delay={60}>
            <div className="space-y-6 max-w-xl">
              {dict.services.intro.map((p) => (
                <p key={p} className="text-sm sm:text-base text-red/85 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="space-y-10">
            {dict.services.items.map((item, i) => (
              <Reveal key={item.code} delay={120 + i * 60}>
                <div className="group">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-display font-bold text-3xl text-red group-hover:translate-x-1 transition-transform">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl mb-2 text-red">
                    {item.title}
                  </h3>
                  <p className="text-sm text-red leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
