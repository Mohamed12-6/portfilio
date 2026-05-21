interface FooterProps {
  isAr: boolean;
  t: Record<string, string>;
}

export default function Footer({ isAr, t }: FooterProps) {
  const fontStyle = { fontFamily: isAr ? "var(--font-ar)" : "var(--font-en)" };

  return (
    <footer className="py-12 border-t border-[var(--border)] bg-[var(--bg2)]/80 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm text-[var(--muted)] font-medium">
        <p style={fontStyle}>{t.footerText}</p>
      </div>
    </footer>
  );
}
