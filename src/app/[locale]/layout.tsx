import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, content, type Locale } from "@/lib/content";
import { HtmlLangSync } from "@/components/HtmlLangSync";

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
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: { ru: "/ru", en: "/en" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <>
      <HtmlLangSync locale={locale as Locale} />
      {children}
    </>
  );
}
