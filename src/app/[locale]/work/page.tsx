import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, content, type Locale } from "@/lib/content";
import { Header } from "@/components/Header";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Reveal } from "@/components/Reveal";
import { WorkGrid } from "@/components/WorkGrid";

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
    title: `${dict.nav.work} · CHLORINE`,
    description: dict.workPage.intro,
  };
}

export default async function WorkPage({
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
      <Header dict={dict} locale={locale as Locale} path="/work" />

      <main className="page-enter">
        <section className="relative min-h-[70vh] flex items-center px-5 sm:px-8 pt-28 pb-20">
          <div className="relative z-10 mx-auto max-w-7xl w-full">
            <Reveal>
              <div className="max-w-2xl lg:max-w-xl">
                <Link
                  href={`/${locale}`}
                  className="inline-block font-mono text-xs text-ink-dim hover:text-red transition-colors mb-10"
                >
                  {dict.workPage.back}
                </Link>
                <p className="font-mono text-[11px] tracking-[0.22em] text-red mb-4">
                  {dict.workPage.eyebrow}
                </p>
                <h1 className="font-body font-medium leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                  {dict.workPage.heading}{" "}
                  <span className="font-accent italic text-red">
                    {dict.workPage.headingMark}
                  </span>
                </h1>
                <p className="mt-6 text-sm sm:text-base text-ink-dim leading-relaxed">
                  {dict.workPage.intro}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 sm:px-8 py-10 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <WorkGrid
                items={dict.work.items}
                allLabel={dict.work.all}
                soonLabel={dict.work.soon}
                viewLabel={dict.work.view}
                locale={locale as Locale}
              />
            </Reveal>
          </div>
        </section>

        <Cta dict={dict} />
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
