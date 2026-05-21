"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
  isAr: boolean;
  isDark: boolean;
  onToggleLang: () => void;
  onToggleTheme: () => void;
  t: Record<string, string>;
}

export default function Header({ isAr, isDark, onToggleLang, onToggleTheme, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: t.navSkills, id: "skills" },
    { label: t.navProjects, id: "projects" },
    { label: t.navExp, id: "experience" },
    { label: t.navContact, id: "contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "backdrop-blur-xl bg-[var(--bg)]/90 shadow-lg shadow-[var(--accent)]/5"
          : "bg-[var(--bg)]"
      } border-[var(--border)]`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 flex-wrap gap-3">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
          MO.
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
          <ul className={`flex gap-6 list-none ${isAr ? "flex-row-reverse" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-[var(--muted)] text-sm font-medium hover:text-[var(--accent)] transition-colors cursor-pointer bg-transparent border-none"
                  style={{ fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <button
              onClick={onToggleLang}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all"
            >
              {isAr ? "EN" : "عربي"}
            </button>
            <button
              onClick={onToggleTheme}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleLang}
            className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all"
          >
            {isAr ? "EN" : "عربي"}
          </button>
          <button
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded-full text-xs border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-2 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:border-[var(--accent)] transition-all"
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1"></span>
            <span className="block w-5 h-0.5 bg-current mb-1"></span>
            <span className="block w-3 h-0.5 bg-current"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg2)] px-5 py-4">
          <ul className={`flex flex-col gap-3 list-none ${isAr ? "items-end" : "items-start"}`}>
            {navLinks.map((link) => (
              <li key={link.id} className="w-full">
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`text-[var(--muted)] text-sm font-medium hover:text-[var(--accent)] transition-colors bg-transparent border-none cursor-pointer w-full ${
                    isAr ? "text-right" : "text-left"
                  }`}
                  style={{ fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}