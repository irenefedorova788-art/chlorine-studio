import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, content, CONTACT, type Locale } from "@/lib/content";
import { Header } from "@/components/Header";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Reveal } from "@/components/Reveal";

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
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 sm:py-14">
                  <div className="lg:col-span-3 flex lg:flex-col items-baseline lg:items-start justify-between gap-4">
                    <span className="font-display font-bold text-4xl sm:text-5xl text-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-3 text-red">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-red leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 lg:gap-1 justify-between lg:justify-start lg:items-end lg:text-right">
                    <span className="font-display font-semibold text-xl sm:text-2xl text-red">
                      {item.price}
                    </span>
                    <span className="font-mono text-xs tracking-[0.1em] text-red/70">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={dict.services.items.length * 60}>
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 sm:py-14 bg-red/5 -mx-5 px-5 sm:-mx-8 sm:px-8">
                <div className="lg:col-span-3" />

                <div className="lg:col-span-6">
                  <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-3 text-red">
                    {dict.services.bundle.title}
                  </h2>
                  <p className="text-sm sm:text-base text-red leading-relaxed max-w-md">
                    {dict.services.bundle.desc}
                  </p>
                </div>

                <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 lg:gap-1 justify-between lg:justify-start lg:items-end lg:text-right">
                  <span className="font-display font-semibold text-xl sm:text-2xl text-red">
                    {dict.services.bundle.price}
                  </span>
                  <span className="font-mono text-xs tracking-[0.1em] text-red/70">
                    {dict.services.bundle.duration}
                  </span>
                  <span className="text-xs text-red/70 leading-snug lg:max-w-[14rem]">
                    {dict.services.bundle.discountNote}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 sm:px-8 pb-10 sm:pb-16">
          <div className="mx-auto max-w-7xl border-t border-line pt-10 sm:pt-14">
            <Reveal>
              <h2 className="font-display font-semibold text-xl sm:text-2xl mb-4 text-red">
                {dict.services.optionsHeading}
              </h2>
              <p className="text-sm sm:text-base text-red/85 leading-relaxed max-w-2xl mb-8">
                {dict.services.optionsIntro}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <div className="max-w-3xl divide-y divide-line border-y border-line">
                {dict.services.options.map((option) => (
                  <div
                    key={option.label}
                    className="flex items-center justify-between gap-6 py-4"
                  >
                    <span className="text-sm text-red leading-relaxed">{option.label}</span>
                    <span className="font-mono text-xs sm:text-sm text-red whitespace-nowrap">
                      {option.price}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-xs sm:text-sm text-red/70 leading-relaxed max-w-2xl mt-8">
                {dict.services.exclusion}
              </p>
            </Reveal>
          </div>
        </section>

        <Cta dict={dict} />
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
