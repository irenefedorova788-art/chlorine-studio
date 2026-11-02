import Link from "next/link";
import type { Dict, Locale } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Services({ dict, locale }: { dict: Dict; locale: Locale }) {
  const rows = [
    ...dict.services.items.map(({ title, price, duration }) => ({ title, price, duration })),
    {
      title: dict.services.bundle.title,
      price: dict.services.bundle.price,
      duration: dict.services.bundle.duration,
    },
  ];

  return (
    <section id="services" className="px-5 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-5xl max-w-2xl text-red">
              {dict.services.heading}
            </h2>
            <Link
              href={`/${locale}/services`}
              className="font-mono text-sm text-red underline decoration-line hover:opacity-70 transition-opacity"
            >
              {dict.servicesPage.moreLabel}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="space-y-6 max-w-xl mb-16 sm:mb-20">
            {dict.services.intro.map((p) => (
              <p key={p} className="text-base sm:text-lg font-medium text-red/85 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div>
          {rows.map((row, i) => (
            <Reveal key={row.title} delay={120 + i * 60}>
              <Link
                href={`/${locale}/services`}
                className="group grid sm:grid-cols-[1fr_auto] items-end gap-x-8 gap-y-3 border-b border-red! pt-4 pb-2 sm:pb-1"
              >
                <span className="font-display font-extrabold uppercase text-red leading-[0.92] tracking-[-0.04em] [font-variant-numeric:lining-nums] text-[clamp(1.9rem,6.2vw,5.25rem)] group-hover:translate-x-1 transition-transform">
                  ({i + 1}) {row.title}
                </span>
                <span className="font-display font-bold uppercase text-red text-[11px] sm:text-xs leading-tight tracking-[0.02em] [font-variant-numeric:lining-nums] sm:text-right sm:pb-2">
                  {row.price}
                  <br />
                  {row.duration}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
