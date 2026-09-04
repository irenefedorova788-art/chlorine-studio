import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, content, type Locale } from "@/lib/content";
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
        <section className="relative px-5 sm:px-8 pt-28 pb-20">
          <div className="relative z-10 mx-auto max-w-7xl w-full">
            <Reveal>
              <Link
                href={`/${locale}`}
                className="inline-block font-mono text-xs text-red hover:opacity-70 transition-opacity mb-8"
              >
                {dict.servicesPage.back}
              </Link>
            </Reveal>

            <Reveal delay={60}>
              <div className="border border-red/25 bg-[#f1ece2] px-6 sm:px-10 lg:px-14 py-10 sm:py-14">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 pb-10 sm:pb-16">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red">
                    CHLORINE.STUDIO
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red">
                    (2026)
                  </p>
                  <p className="col-span-2 sm:col-span-1 text-xs sm:text-sm text-red/70 leading-snug">
                    {dict.servicesPage.tagline}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red sm:text-right">
                    ({dict.servicesPage.eyebrow})
                  </p>
                </div>

                <h1 className="font-display font-black leading-[0.95] tracking-tight text-5xl sm:text-7xl lg:text-8xl text-red">
                  {dict.servicesPage.heading}{" "}
                  <span className="font-accent italic">
                    {dict.servicesPage.headingMark}
                  </span>
                </h1>

                <div className="mt-14 sm:mt-20 grid sm:grid-cols-[6rem_1fr_10rem] gap-6 sm:gap-10 items-end">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red">
                    (2026)
                  </p>
                  <div>
                    <p className="text-sm sm:text-base text-red/70 leading-relaxed max-w-lg">
                      {dict.servicesPage.intro}
                    </p>
                    <p className="mt-4 font-mono text-[10px] tracking-[0.18em] text-red">
                      CHLORINE.STUDIO
                    </p>
                  </div>
                  <div className="flex sm:flex-col sm:items-end gap-3">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-red">
                      (2026)
                    </p>
                    <div className="w-full sm:w-32 h-16 sm:h-20 bg-red" />
                  </div>
                </div>
              </div>
            </Reveal>
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

                  <div className="lg:col-span-5">
                    <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-3 text-red">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-red leading-relaxed max-w-md">
                      {item.long}
                    </p>
                  </div>

                  <div className="lg:col-span-4">
                    <ul className="space-y-3">
                      {item.includes.map((line) => (
                        <li
                          key={line}
                          className="flex gap-3 text-sm text-red leading-relaxed"
                        >
                          <span className="text-red" aria-hidden="true">
                            —
                          </span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Cta dict={dict} />
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
