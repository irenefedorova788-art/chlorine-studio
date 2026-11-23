import type { Metadata } from "next";
import Image from "next/image";
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
    title: `${item.headline ?? item.title} · Irina Fedorova`,
    description: item.lead ?? item.subtitle,
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
  const index = dict.cases.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const item = dict.cases[index];
  const next = dict.cases[(index + 1) % dict.cases.length];
  const number = String(index + 1).padStart(2, "0");

  return (
    <>
      <Grain />
      <Header dict={dict} locale={locale as Locale} path={`/work/${slug}`} />

      <main className="page-enter">
        {/* Article header */}
        <section className="relative px-5 sm:px-8 pt-32 sm:pt-40 pb-12 sm:pb-16">
          <div className="relative z-10 mx-auto max-w-7xl w-full">
            <Reveal>
              <Link
                href={`/${locale}/work`}
                className="inline-block font-mono text-xs text-red hover:opacity-70 transition-opacity mb-10"
              >
                {dict.caseView.back}
              </Link>
              <p className="font-mono text-[11px] tracking-[0.22em] text-red mb-6">
                {`${dict.caseView.caseLabel} ${number}`.toUpperCase()}
                {!item.hideCategoryEyebrow && ` | ${item.category.toUpperCase()}`}
              </p>
              <h1 className="font-display font-extrabold text-red leading-[0.95] tracking-[-0.03em] text-[clamp(2.5rem,7vw,6rem)] max-w-5xl">
                {item.headline ?? item.subtitle}
              </h1>
              {item.lead && (
                <p className="font-accent italic text-red text-xl sm:text-2xl leading-snug mt-8 max-w-3xl">
                  {item.lead}
                </p>
              )}
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 border-t border-red/40 pt-6 max-w-5xl">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red mb-2">
                    {dict.caseView.roleLabel.toUpperCase()}
                  </p>
                  <p className="text-base text-red leading-snug font-medium">{item.role}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-red mb-2">
                    {dict.caseView.yearLabel.toUpperCase()}
                  </p>
                  <p className="text-base text-red leading-snug font-medium [font-variant-numeric:lining-nums]">
                    {item.year}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Cover */}
        {item.cover && (
          <section className="px-5 sm:px-8">
            <Reveal>
              <figure className="mx-auto max-w-7xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.cover.src}
                    alt={item.cover.caption ?? ""}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover"
                  />
                </div>
                {item.cover.caption && (
                  <figcaption className="font-accent italic text-sm text-red mt-3">
                    {item.cover.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          </section>
        )}

        {/* Story */}
        <article className="px-5 sm:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl space-y-16 sm:space-y-24">
            {item.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i === 0 ? 0 : 40}>
                <section className="grid lg:grid-cols-[14rem_1fr] gap-x-12 gap-y-4">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-red lg:pt-3">
                    {section.eyebrow.toUpperCase()}
                  </p>
                  <div className="max-w-3xl">
                    <h2 className="font-display font-bold text-red text-2xl sm:text-4xl leading-tight tracking-tight mb-6">
                      {section.heading}
                    </h2>
                    <div className="space-y-4">
                      {section.body.map((p) => (
                        <p key={p} className="text-base sm:text-lg text-red leading-relaxed font-medium">
                          {p}
                        </p>
                      ))}
                    </div>
                    {section.quote && (
                      <blockquote className="mt-10 border-l-2 border-red pl-6 sm:pl-8">
                        <p className="font-accent italic text-red text-2xl sm:text-3xl leading-snug">
                          {section.quote}
                        </p>
                      </blockquote>
                    )}
                  </div>
                  {section.images && section.images.length > 0 && (
                    <figure className="lg:col-start-2 mt-6">
                      <div
                        className={`grid gap-3 sm:gap-4 ${
                          section.images.length === 1
                            ? "grid-cols-1 max-w-3xl"
                            : section.images.length === 2
                              ? "grid-cols-2"
                              : "grid-cols-2 sm:grid-cols-3"
                        }`}
                      >
                        {section.images.map((src) => (
                          <div key={src} className="relative aspect-[4/5] overflow-hidden">
                            <Image
                              src={src}
                              alt=""
                              fill
                              sizes="(max-width: 640px) 50vw, 400px"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      {section.caption && (
                        <figcaption className="font-accent italic text-sm text-red mt-3">
                          {section.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </section>
              </Reveal>
            ))}
          </div>
        </article>

        {/* Results */}
        {item.stats && item.stats.length > 0 && (
          <section className="px-5 sm:px-8 pb-16 sm:pb-24">
            <div className="mx-auto max-w-7xl">
              <Reveal>
                {item.statsHeading && (
                  <p className="font-mono text-[11px] tracking-[0.18em] text-red mb-6">
                    {item.statsHeading.toUpperCase()}
                  </p>
                )}
                <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 border-t border-red/40 pt-8">
                  {item.stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-display font-extrabold text-red leading-none tracking-[-0.03em] text-[clamp(2.5rem,5vw,4.5rem)] [font-variant-numeric:lining-nums] whitespace-nowrap">
                        {s.value}
                      </p>
                      <p className="text-sm sm:text-base text-red leading-snug font-medium mt-3 max-w-xs">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {item.takeaway && (
          <section className="px-5 sm:px-8 pb-16 sm:pb-24">
            <div className="mx-auto max-w-7xl">
              <Reveal>
                <p className="font-accent italic text-red text-xl sm:text-2xl leading-snug max-w-3xl lg:ml-[17rem]">
                  {item.takeaway}
                </p>
              </Reveal>
            </div>
          </section>
        )}

        {/* Next case */}
        {next.slug !== item.slug && (
          <section className="px-5 sm:px-8 pb-20">
            <div className="mx-auto max-w-7xl">
              <Link
                href={`/${locale}/work/${next.slug}`}
                className="group block border-t border-b border-red/40 py-8 sm:py-10"
              >
                <p className="font-mono text-[11px] tracking-[0.18em] text-red mb-3">
                  {dict.caseView.nextLabel.toUpperCase()} →
                </p>
                <p className="font-display font-extrabold text-red leading-[0.95] tracking-[-0.03em] text-[clamp(1.75rem,4.5vw,3.5rem)] group-hover:translate-x-1 transition-transform">
                  {next.headline ?? next.subtitle}
                </p>
              </Link>
            </div>
          </section>
        )}

        <Cta dict={dict} />
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
