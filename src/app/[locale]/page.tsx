import { getDictionary, Locale } from "@/get-dictionary";
import PortfolioWrapper from "@/components/PortfolioWrapper";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function IndexPage({ params }: PageProps) {
  const { locale } = await params;
  
  // Cast locale to verify type-safety
  const activeLocale = (locale === "en" || locale === "ar") ? (locale as Locale) : "ar";
  const dict = await getDictionary(activeLocale);

  return <PortfolioWrapper dict={dict} locale={activeLocale} />;
}