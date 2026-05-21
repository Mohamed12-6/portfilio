"use client";

import Image from "next/image";

interface HeroProps {
  isAr: boolean;
  t: Record<string, string>;
}

export default function Hero({ isAr, t }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fontStyle = { fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)" };

  return (
    <section
      id="hero"
      dir={isAr ? "rtl" : "ltr"}
      className="relative px-5 sm:px-8 lg:px-10 pt-10 sm:pt-16 lg:pt-20 pb-14 sm:pb-20 overflow-hidden border-b border-[var(--border)]"
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)",
          top: "-100px",
          ...(isAr ? { left: "-100px" } : { right: "-100px" }),
        }}
      />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center relative z-10">

        {/* Left/Right Content Side */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start order-2 lg:order-1">

          {/* Available tag */}
          <div className="inline-flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] px-4 py-1.5 rounded-full text-xs text-[var(--accent)] mb-6">
            <span
              className="w-2.5 h-2.5 rounded-full bg-emerald-500"
              style={{ animation: "pulse 2s infinite" }}
            />
            <span style={fontStyle} className="font-medium">{t.heroTag}</span>
          </div>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4"
            style={{ letterSpacing: isAr ? "normal" : "-2px" }}
          >
            {isAr ? "محمد" : "Mohamed"}
            <br />
            <span className="bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
              {isAr ? "أسامة حمدي" : "Osama Hamedy"}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg text-[var(--muted)] max-w-xl leading-relaxed mb-8"
            style={fontStyle}
          >
            {t.heroSub}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start w-full">
            <a
              href="https://github.com/Mohamed12-6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-[var(--accent)] text-white hover:opacity-90 hover:-translate-y-0.5 transition-all text-center min-w-[140px]"
              style={fontStyle}
            >
              {t.heroBtn1}
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold border border-[var(--border)] text-[var(--text)] bg-[var(--card)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all cursor-pointer min-w-[140px]"
              style={fontStyle}
            >
              {t.heroBtn2}
            </button>
          </div>

      
        </div>

        {/* Image Side */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 w-full">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)] to-[var(--accent2)] rounded-3xl rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-300 pointer-events-none" />
            <div className="absolute inset-0 bg-[var(--card)] border-2 border-[var(--border)] rounded-3xl overflow-hidden group-hover:border-[var(--accent)] transition-all duration-300 shadow-xl">
              <Image
                src="/1762881911500.jpg"
                alt="Mohamed Osama"
                fill
                priority
                className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 224px, 320px"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}