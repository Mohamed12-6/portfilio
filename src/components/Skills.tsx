"use client";

interface SkillsProps {
  isAr: boolean;
  t: Record<string, string>;
}

const skillCategories = [
  {
    key: "sk1",
    tags: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    key: "sk2",
    tags: ["Tailwind CSS", "Bootstrap", "Shadcn UI", "MUI", "Responsive Design"],
  },
  {
    key: "sk3",
    tags: ["Redux Toolkit", "Context API", "TanStack Query", "Formik", "React Hook Form", "Zod / Yup"],
  },
  {
    key: "sk4",
    tags: ["Git & GitHub", "Vercel", "Jira", "NextAuth.js", "Axios", "RESTful APIs"],
  },
  {
    // الكارت الجديد الخاص بالـ Backend اللي بتتعلمه حالياً
    key: "sk5",
    tags: ["Node.js", "Express.js", "MongoDB", "SQL Server / SQL"],
  },
];

export default function Skills({ isAr, t }: SkillsProps) {
  const fontStyle = { fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)" };

  return (
    <section
      id="skills"
      dir={isAr ? "rtl" : "ltr"}
      className="px-5 sm:px-8 lg:px-10 py-14 sm:py-16 border-t border-[var(--border)]"
    >
      
      <div className="flex items-center gap-4 mb-10">
        <h2
          className="text-2xl sm:text-3xl font-black tracking-tight text-center w-full"
          style={{ ...fontStyle, letterSpacing: isAr ? "normal" : "-1px" }}
        >
          {t.skillsTitle}
        </h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.key}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--accent)] transition-colors flex flex-col justify-between"
          >
            <div>
              <div
                className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-3 text-start"
                style={fontStyle}
              >
                {t[cat.key]}
              </div>
              
              
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[var(--bg3)] border border-[var(--border)] px-3 py-1 rounded-md text-xs text-[var(--text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}