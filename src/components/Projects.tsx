"use client";

interface ProjectsProps {
  isAr: boolean;
  t: Record<string, string>;
}
const projects = [
  {
    num: "PROJECT 01",
    titleKey: "p1title",
    descKey: "p1desc",
    codeKey: "p1code",
    demoKey: "p1demo",
    tags: ["React.js", "Redux Toolkit", "Tailwind", "REST API"],
    codeHref: "https://github.com/Mohamed12-6/E-ecommerce",
    demoHref: "https://e-ecommerce-six.vercel.app/",
  },
  {
    num: "PROJECT 02",
    titleKey: "p2title",
    descKey: "p2desc",
    codeKey: "p1code",
    demoKey: "p1demo",
    tags: ["Next.js", "TypeScript", "Redux Toolkit", "MUI"],
    codeHref: "https://github.com/Mohamed12-6/social-app",
    demoHref: "https://social-app-pied-eta.vercel.app/",
  },
  {
    num: "PROJECT 03",
    titleKey: "p3title",
    descKey: "p3desc",
    codeKey: "p1code",
    demoKey: "p1demo",
    tags: ["JavaScript", "Bootstrap", "Weather API"],
    codeHref: "https://github.com/Mohamed12-6/weatherApp",
    demoHref: "https://mohamed12-6.github.io/weatherApp/",
  },
  {
    num: "PROJECT 04",
    titleKey: "p4title",
    descKey: "p4desc",
    codeKey: "p1code",
    demoKey: "p1demo",
    tags: ["React.js", "Tailwind CSS", "Corporate UI"],
    codeHref: "https://github.com/Mohamed12-6/The-New-Code-",
    demoHref: "https://the-new-code.vercel.app/",
  },
  {
    num: "PROJECT 05",
    titleKey: "p5title",
    descKey: "p5desc",
    codeKey: "p1code",
    demoKey: "p1demo",
    tags: ["React.js", "Context API", "Responsive Design"],
    codeHref: "https://github.com/Mohamed12-6/Note-App",
    demoHref: "https://note-app-two-tau.vercel.app/allnotes",
  },
  {
    num: "PROJECT 06",
    titleKey: "p6title",
    descKey: "p6desc",
    codeKey: "p1code",
    demoKey: "p1demo",
    tags: ["React.js", "Movie API", "Axios"],
    codeHref: "https://github.com/Mohamed12-6/Movie",
    demoHref: "https://movie-one-weld.vercel.app/",
  },
  {
    num: "PROJECT 07",
    titleKey: "p7title",
    descKey: "p7desc",
    codeKey: "p1code",
    demoKey: "p1demo",
    tags: ["HTML5", "CSS3", "JavaScript ES6+"],
    codeHref: "https://github.com/Mohamed12-6/LandingPage",
    demoHref: "https://landing-page-murex-xi-55.vercel.app/",
  },
];

export default function Projects({ isAr, t }: ProjectsProps) {
  const fontStyle = { fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)" };

  return (
    <section
      id="projects"
      dir={isAr ? "rtl" : "ltr"}
      className="px-5 sm:px-8 lg:px-10 py-14 sm:py-16 border-t border-[var(--border)]"
    >
      {/* Section header */}
      <div className="flex items-center gap-4 mb-10">
        <h2
          className="text-2xl sm:text-3xl font-black tracking-tight text-center w-full"
          style={{ ...fontStyle, letterSpacing: isAr ? "normal" : "-1px" }}
        >
          {t.projectsTitle}
        </h2>
      </div>

      {/* Grid - Reconfigured for multi-project scalability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((proj) => (
          <div
            key={proj.num}
            className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 overflow-hidden hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-250 flex flex-col justify-between"
          >
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div>
              <div className="text-[11px] font-bold text-[var(--accent)] tracking-widest mb-3 text-start">
                {proj.num}
              </div>
              <div className="text-lg font-bold mb-2.5 text-start" style={fontStyle}>
                {t[proj.titleKey]}
              </div>
              <div
                className="text-sm text-[var(--muted)] leading-relaxed mb-4 text-start"
                style={fontStyle}
              >
                {t[proj.descKey]}
              </div>
              
              {/* Tags direction handled natively by direction context */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[var(--accent)]/10 text-[var(--accent)] px-2.5 py-0.5 rounded-md text-[11px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="flex gap-4">
              <a
                href={proj.codeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                style={fontStyle}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
                {t[proj.codeKey]}
              </a>
              <a
                href={proj.demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                style={fontStyle}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {t[proj.demoKey]}
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}