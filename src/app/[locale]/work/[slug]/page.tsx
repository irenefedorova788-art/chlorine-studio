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
  return locales.flatMap((locale) =>
    content[locale].cases.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const dict = content[locale as Locale];
  const item = dict.cases.find((c) => c.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} · CHLORINE`,
    description: item.subtitle,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = content[locale as Locale];
  const item = dict.cases.find((c) => c.slug === slug);
  if (!item) notFound();

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
                  href={`/${locale}/work`}
                  className="inline-block font-mono text-xs text-ink-dim hover:text-red transition-colors mb-10"
                >
                  {dict.caseView.back}
                </Link>
                <p className="font-mono text-[11px] tracking-[0.22em] text-red mb-4">
                  {item.category.toUpperCase()}
                </p>
                <h1 className="font-display font-bold leading-[1.05] tracking-tight text-4xl sm:text-6xl">
                  {item.title}
                </h1>
                <p className="mt-6 text-sm sm:text-base text-ink-dim leading-relaxed max-w-lg">
                  {item.subtitle}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-14 grid sm:grid-cols-3 gap-8 max-w-3xl border-t border-line pt-8">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red mb-2">
                    {dict.caseView.clientLabel.toUpperCase()}
                  </p>
                  <p className="text-sm text-ink-dim leading-snug">{item.client}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red mb-2">
                    {dict.caseView.roleLabel.toUpperCase()}
                  </p>
                  <p className="text-sm text-ink-dim leading-snug">{item.role}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red mb-2">
                    {item.year}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 sm:px-8 py-10 sm:py-16">
          <div className="mx-auto max-w-7xl divide-y divide-line border-t border-line">
            {item.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 60}>
                <div className="grid sm:grid-cols-[10rem_1fr] gap-x-10 gap-y-3 py-10 sm:py-12">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-red">
                    {section.eyebrow.toUpperCase()}
                  </p>
                  <div className="max-w-2xl">
                    <h2 className="font-display font-semibold text-xl sm:text-2xl mb-4">
                      {section.heading}
                    </h2>
                    <div className="space-y-3">
                      {section.body.map((p) => (
                        <p key={p} className="text-sm sm:text-base text-ink-dim leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
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
