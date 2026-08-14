import { notFound } from "next/navigation";
import { locales, content, type Locale } from "@/lib/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";

export default async function LocalePage({
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
      <Header dict={dict} locale={locale as Locale} />
      <main className="page-enter">
        <Hero dict={dict} />
        <Services dict={dict} locale={locale as Locale} />
        <Process dict={dict} />
        <Work dict={dict} locale={locale as Locale} />
        <About dict={dict} />
        <Cta dict={dict} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
