"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Header from "./Header";
import Hero from "./Hero";
import About from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import { Locale } from "@/get-dictionary";

interface PortfolioWrapperProps {
  dict: Record<string, string>;
  locale: Locale;
}

export default function PortfolioWrapper({ dict, locale }: PortfolioWrapperProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isAr = locale === "ar";
  
  // Theme state
  const [isDark, setIsDark] = useState(true);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Update CSS custom properties based on theme
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.style.setProperty("--bg", "#090f1e");
      root.style.setProperty("--bg2", "#0f172a");
      root.style.setProperty("--bg3", "#1e293b");
      root.style.setProperty("--card", "#131c31");
      root.style.setProperty("--border", "rgba(255, 255, 255, 0.08)");
      root.style.setProperty("--text", "#f8fafc");
      root.style.setProperty("--muted", "#94a3b8");
    } else {
      root.classList.remove("dark");
      root.style.setProperty("--bg", "#f8fafc");
      root.style.setProperty("--bg2", "#f1f5f9");
      root.style.setProperty("--bg3", "#e2e8f0");
      root.style.setProperty("--card", "#ffffff");
      root.style.setProperty("--border", "rgba(0, 0, 0, 0.08)");
      root.style.setProperty("--text", "#0f172a");
      root.style.setProperty("--muted", "#475569");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleToggleLang = () => {
    const newLocale = isAr ? "en" : "ar";
    
    // حل مشكلة التبديل الآمن في الـ Pathname لـ Next.js i18n
    const segments = pathname.split("/");
    // الـ segment الأول بعد الـ split الفاضي (segments[1]) هو الـ locale الحالي دايماً
    segments[1] = newLocale;
    
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <>
      <Header 
        isAr={isAr} 
        isDark={isDark} 
        onToggleLang={handleToggleLang} 
        onToggleTheme={handleToggleTheme} 
        t={dict} 
      />
      <main className="flex-grow flex flex-col">
        <Hero isAr={isAr} t={dict} />
        <About isAr={isAr} t={dict} />
        <Projects isAr={isAr} t={dict} />
        <Skills isAr={isAr} t={dict} />
        <Contact isAr={isAr} t={dict} />
      </main>
      <Footer isAr={isAr} t={dict} />
    </>
  );
}