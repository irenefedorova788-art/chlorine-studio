import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, content, CONTACT, type Locale } from "@/lib/content";
import { Header } from "@/components/Header";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Reveal } from "@/components/Reveal";

function ServiceDisclosure({
  detailsLabel,
  includesLabel,
  resultLabel,
  limitationsLabel,
  includes,
  result,
  limitations,
}: {
  detailsLabel: string;
  includesLabel: string;
  resultLabel: string;
  limitationsLabel: string;
  includes: string[];
  result: string;
  limitations: string[];
}) {
  return (
    <details className="group mt-5">
      <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer select-none inline-flex items-center gap-2 font-mono text-sm font-semibold tracking-[0.12em] text-red/80 hover:text-red transition-colors">
        <span className="inline-flex items-center justify-center w-4 h-4 border border-red/40 text-[10px] leading-none group-open:rotate-45 transition-transform">
          +
        </span>
        {detailsLabel.toUpperCase()}
      </summary>
      <div className="mt-6 grid sm:grid-cols-3 gap-6 max-w-3xl">
        <div>
          <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-red/60 mb-3">
            {includesLabel.toUpperCase()}
          </p>
          <ul className="space-y-2">
            {includes.map((line) => (
              <li key={line} className="flex gap-2 text-base font-medium text-red leading-relaxed">
                <span aria-hidden="true">—</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-red/60 mb-3">
            {resultLabel.toUpperCase()}
          </p>
          <p className="text-base font-medium text-red leading-relaxed">{result}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-red/60 mb-3">
            {limitationsLabel.toUpperCase()}
          </p>
          <ul className="space-y-2">
            {limitations.map((line) => (
              <li key={line} className="flex gap-2 text-base font-medium text-red/85 leading-relaxed">
                <span aria-hidden="true">—</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const dict = content[locale as Locale];
  return {
    title: `${dict.nav.services} · CHLORINE`,
    description: dict.servicesPage.intro,
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = content[locale as Locale];

  return (
    <>
      <Grain />
      <Header dict={dict} locale={locale as Locale} path="/services" />

      <main className="page-enter">
        <section className="relative min-h-dvh flex flex-col items-center justify-center px-5 sm:px-8">
          <Link
            href={`/${locale}`}
            className="absolute top-24 left-5 sm:left-8 font-mono text-xs text-red hover:opacity-70 transition-opacity"
          >
            {dict.servicesPage.back}
          </Link>

          <div className="max-w-2xl text-center">
            <h1 className="rise-in font-display font-light leading-[1.4] tracking-tight text-sm sm:text-lg lg:text-xl text-red space-y-4">
              <span className="block">
                {dict.servicesPage.heading}{" "}
                <span className="font-accent italic">
                  {dict.servicesPage.headingMark}
                </span>
              </span>
              <span className="block">{dict.servicesPage.intro}</span>
            </h1>

            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="rise-in mt-10 inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-red hover:opacity-70 transition-opacity"
            >
              {dict.hero.cta.toUpperCase()}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="px-5 sm:px-8 py-10 sm:py-16">
          <div className="mx-auto max-w-7xl divide-y divide-line border-t border-line">
            {dict.services.items.map((item, i) => (
              <Reveal key={item.code} delay={i * 60}>
                <div className="py-10 sm:py-14">
                  <div className="flex flex-wrap items-start justify-between gap-6 mb-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-display font-bold text-3xl sm:text-4xl text-red shrink-0">
                        {item.code}
                      </span>
                      <h2 className="font-display font-semibold text-xl sm:text-2xl text-red">
                        {item.title}
                      </h2>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="font-display font-semibold text-lg sm:text-xl text-red">
                        {item.price}
                      </div>
                      <div className="font-mono text-sm font-semibold tracking-[0.1em] text-red/70">
                        {item.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-red leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>

                  <ServiceDisclosure
                    detailsLabel={dict.services.detailsLabel}
                    includesLabel={dict.services.includesLabel}
                    resultLabel={dict.services.resultLabel}
                    limitationsLabel={dict.services.limitationsLabel}
                    includes={item.includes}
                    result={item.result}
                    limitations={item.limitations}
                  />
                </div>
              </Reveal>
            ))}

            <Reveal delay={dict.services.items.length * 60}>
              <div className="py-10 sm:py-14 bg-red/5 -mx-5 px-5 sm:-mx-8 sm:px-8">
                <div className="flex flex-wrap items-start justify-between gap-6 mb-4">
                  <h2 className="font-display font-semibold text-xl sm:text-2xl text-red">
                    {dict.services.bundle.title}
                  </h2>
                  <div className="text-left sm:text-right">
                    <div className="font-display font-semibold text-lg sm:text-xl text-red">
                      {dict.services.bundle.price}
                    </div>
                    <div className="font-mono text-sm font-semibold tracking-[0.1em] text-red/70">
                      {dict.services.bundle.duration}
                    </div>
                    <div className="text-sm font-medium text-red/70 leading-snug mt-1 sm:max-w-[16rem]">
                      {dict.services.bundle.savingsNote}
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-red leading-relaxed max-w-2xl">
                  {dict.services.bundle.desc}
                </p>

                <ServiceDisclosure
                  detailsLabel={dict.services.detailsLabel}
                  includesLabel={dict.services.includesLabel}
                  resultLabel={dict.services.resultLabel}
                  limitationsLabel={dict.services.limitationsLabel}
                  includes={dict.services.bundle.includes}
                  result={dict.services.bundle.result}
                  limitations={dict.services.bundle.limitations}
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 sm:px-8 pb-10 sm:pb-16">
          <div className="mx-auto max-w-7xl border-t border-line pt-10 sm:pt-14">
            <Reveal>
              <h2 className="font-display font-semibold text-xl sm:text-2xl mb-8 text-red">
                {dict.services.optionsHeading}
              </h2>
            </Reveal>

            <Reveal delay={60}>
              <div className="max-w-3xl divide-y divide-line border-y border-line">
                {dict.services.options.map((option) => (
                  <div key={option.label} className="py-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                      <h3 className="font-display font-semibold text-base sm:text-lg text-red">
                        {option.label}
                      </h3>
                      <span className="font-mono text-xs sm:text-sm text-red whitespace-nowrap">
                        {option.price}
                      </span>
                    </div>
                    <p className="text-base font-medium text-red/85 leading-relaxed max-w-2xl">
                      {option.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 sm:px-8 pb-10 sm:pb-16">
          <div className="mx-auto max-w-7xl border-t border-line pt-10 sm:pt-14">
            <Reveal>
              <h2 className="font-display font-semibold text-xl sm:text-2xl mb-6 text-red">
                {dict.services.termsHeading}
              </h2>
              <ul className="max-w-2xl space-y-3">
                {dict.services.terms.map((line) => (
                  <li key={line} className="flex gap-3 text-base font-medium text-red/85 leading-relaxed">
                    <span aria-hidden="true">—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <Cta dict={dict} />
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
