"use client";

interface ExperienceProps {
  isAr: boolean;
  t: Record<string, string>;
}

const experiences = [
  {
    roleKey: "e1role",
    company: "Imdad — Saudi Arabia 🇸🇦",
    descKey: "e1desc",
    periodKey: "e1period",
    badgeKey: "e1badge",
    badgeType: "current",
  },
  {
    roleKey: "e2role",
    company: "US & Saudi Company 🇺🇸🇸🇦",
    descKey: "e2desc",
    periodKey: "e2period",
    badgeKey: "e2badge",
    badgeType: "ended",
  },
  {
    roleKey: "e3role",
    company: "Waqi3ak Company",
    descKey: "e3desc",
    periodKey: "e3period",
    badgeKey: "e3badge",
    badgeType: "ended",
  },
  {
    roleKey: "e4role",
    company: "Route Academy 🎓",
    descKey: "e4desc",
    period: "2024",
    badgeKey: "e4badge",
    badgeType: "ended", // تم تعديلها لـ ended لأنها دبلومة منتهية، غيرها لـ current لو لسه مستمرة
  },
  {
    roleKey: "e5role",
    company: "Beni Suef University 🇪🇬",
    descKey: "e5desc",
    period: "2025",
    badgeKey: "e5badge",
    badgeType: "ended", // تم تعديلها لـ ended لأن التخرج 2025، غيرها لـ current لو لسه بتدرس
  },
];

export default function Experience({ isAr, t }: ExperienceProps) {
  const fontStyle = { fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)" };

  return (
    <section
      id="experience"
      dir={isAr ? "rtl" : "ltr"}
      className="px-5 sm:px-8 lg:px-10 py-14 sm:py-16 border-t border-[var(--border)]"
    >
      {/* Section header */}
      <div className="flex items-center gap-4 mb-10">
        <h2
          className="text-2xl sm:text-3xl font-black tracking-tight text-center w-full"
          style={{ ...fontStyle, letterSpacing: isAr ? "normal" : "-1px" }}
        >
          {t.expTitle}
        </h2>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl px-5 sm:px-6 py-5 hover:border-[var(--accent)] transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              
              {/* Left side (Content) - text-start handles alignment beautifully for both locales */}
              <div className="flex-1 text-start">
                <div className="text-base font-bold mb-1" style={fontStyle}>
                  {t[exp.roleKey]}
                </div>
                <div className="text-sm font-semibold text-[var(--accent)] mb-1.5">
                  {exp.company}
                </div>
                <div
                  className="text-xs text-[var(--muted)] leading-relaxed"
                  style={fontStyle}
                >
                  {t[exp.descKey]}
                </div>
              </div>

              {/* Right side (Meta: Period & Badge) - Aligns cleanly to the opposite end via Tailwind logic */}
              <div className="flex sm:flex-col sm:items-end ltr:sm:items-end rtl:sm:items-start items-center gap-2 flex-shrink-0">
                <div className="text-xs text-[var(--muted)] whitespace-nowrap font-medium">
                  {exp.periodKey ? t[exp.periodKey] : exp.period}
                </div>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold whitespace-nowrap ${
                    exp.badgeType === "current"
                      ? "bg-[var(--accent3)]/10 text-[var(--accent3)]"
                      : "bg-[var(--muted)]/10 text-[var(--muted)]" // لون هادئ ومكتوم للخبرات السابقة
                  }`}
                  style={fontStyle}
                >
                  {t[exp.badgeKey]}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}