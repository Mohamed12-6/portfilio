"use client";

import { useState } from "react";

interface ContactProps {
  isAr: boolean;
  t: Record<string, string>;
}

const contactItems = [
  {
    labelKey: "c1label",
    value: "mohamedosama01005045063@gmail.com",
    href: "mailto:mohamedosama01005045063@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="2,4 12,13 22,4"/>
      </svg>
    ),
  },
  {
    labelKey: "c2label",
    value: "+20 1014546662",
    href: "tel:+201014546662",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.47a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 5.93 5.93l1.75-1.75a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
 {
  labelKey: "linkedin",
  value: "Mohamed Osama",
  href: "https://www.linkedin.com/in/mohamed-osama-fullstack/",

  icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
},
  {
    labelKey: "github",
    value: "Mohamed Osama",
    href: "https://github.com/Mohamed12-6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
      </svg>
    ),
  },
];

const staticLabels: Record<string, { en: string; ar: string }> = {
  linkedin: { en: "LinkedIn", ar: "لينكدإن" },
  github: { en: "GitHub", ar: "جيتهاب" },
};

export default function Contact({ isAr, t }: ContactProps) {
  const fontStyle = { fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)" };
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const getLabel = (key: string) => {
    if (t[key]) return t[key];
    const entry = staticLabels[key];
    return entry ? (isAr ? entry.ar : entry.en) : key;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // تم دمج الـ Form ID المباشر الخاص بك هنا لحل مشكلة الـ 404 نهائياً
      const response = await fetch("https://formspree.io/f/xykvkprg", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section
      id="contact"
      dir={isAr ? "rtl" : "ltr"}
      className="px-5 sm:px-8 lg:px-10 py-14 sm:py-16 border-t border-[var(--border)]"
    >
      {/* Section header */}
      <div className="flex items-center gap-4 mb-10">
        <h2
          className="text-2xl sm:text-3xl font-black tracking-tight text-center w-full"
          style={{ ...fontStyle, letterSpacing: isAr ? "normal" : "-1px" }}
        >
          {t.contactTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Side: Contact Info Cards */}
        <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {contactItems.map((item) => (
            <a
              key={item.labelKey}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all text-start"
            >
              <div className="text-[var(--accent)] mb-3">{item.icon}</div>
              <div
                className="text-xs text-[var(--muted)] uppercase tracking-widest font-semibold mb-1.5"
                style={fontStyle}
              >
                {getLabel(item.labelKey)}
              </div>
              <div
                className="text-sm font-semibold text-[var(--text)] break-all"
                style={fontStyle}
              >
                {item.value}
              </div>
            </a>
          ))}
        </div>

        {/* Right Side: Dynamic Contact Form */}
        <div className="lg:col-span-2 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[var(--text)] opacity-80" style={fontStyle}>
                  {t.formName}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg2)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-all"
                  style={fontStyle}
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[var(--text)] opacity-80" style={fontStyle}>
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg2)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-all"
                  style={fontStyle}
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[var(--text)] opacity-80" style={fontStyle}>
                {t.formMessage}
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg2)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] resize-none transition-all"
                style={fontStyle}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "SENDING"}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold bg-[var(--accent)] text-white hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
              style={fontStyle}
            >
              {status === "SENDING" ? t.formBtnSending : t.formBtnSend}
            </button>

            {/* Status Messages */}
            {status === "SUCCESS" && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium" style={fontStyle}>
                {t.formSuccess}
              </div>
            )}
            {status === "ERROR" && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium" style={fontStyle}>
                {t.formError}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}