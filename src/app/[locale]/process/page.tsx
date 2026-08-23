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
    title: `${dict.nav.process} · CHLORINE`,
    description: dict.processPage.intro,
  };
}

export default async function ProcessPage({
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
      <Header dict={dict} locale={locale as Locale} path="/process" />

      <main className="page-enter">
        <section className="relative min-h-[70vh] flex items-center px-5 sm:px-8 pt-28 pb-20">
          <div className="relative z-10 mx-auto max-w-7xl w-full">
            <Reveal>
              <div className="max-w-2xl lg:max-w-xl">
                <Link
                  href={`/${locale}`}
                  className="inline-block font-mono text-xs text-red hover:opacity-70 transition-opacity mb-10"
                >
                  {dict.processPage.back}
                </Link>
                <p className="font-mono text-[11px] tracking-[0.22em] text-red mb-4">
                  {dict.processPage.eyebrow}
                </p>
                <h1 className="font-body font-medium leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                  {dict.processPage.heading}{" "}
                  <span className="font-accent italic text-red">
                    {dict.processPage.headingMark}
                  </span>
                </h1>
                <p className="mt-6 text-sm sm:text-base text-red leading-relaxed">
                  {dict.processPage.intro}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 sm:px-8 py-10 sm:py-16">
          <div className="mx-auto max-w-7xl divide-y divide-line border-t border-line">
            {dict.process.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <div className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[6rem_16rem_1fr] items-baseline gap-x-4 sm:gap-x-10 py-6 sm:py-7">
                  <span className="font-mono text-sm text-red">{step.n}</span>
                  <h2 className="font-display font-semibold text-lg sm:text-2xl group-hover:opacity-70 transition-opacity">
                    {step.title}
                  </h2>
                  <p className="col-span-2 sm:col-span-1 mt-2 sm:mt-0 text-sm sm:text-base text-red leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
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
