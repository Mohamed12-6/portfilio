import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مطور ويب متكامل | Full-Stack Developer Portfolio",
  description: "الموقع التعريفي الشخصي لعرض المشاريع والمهارات البرمجية | Modern Multilingual Portfolio Showcase",
};

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const direction = isAr ? "rtl" : "ltr";
  const activeFontClass = isAr ? cairo.className : geistSans.className;

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full scroll-smooth`}
    >
      <body className={`${activeFontClass} min-h-full bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-teal-500 selection:text-slate-900`}>
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(20,184,166,0.07)_0,rgba(9,15,30,0)_50%),radial-gradient(120%_120%_at_50%_10%,rgba(99,102,241,0.04)_0,rgba(9,15,30,0)_50%)] pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
