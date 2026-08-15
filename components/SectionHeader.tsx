interface SectionHeaderProps {
  number: string;
  title: string;
  heading?: string;
  subtitle?: string;
}

export function SectionHeader({
  number,
  title,
  heading,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      {/* Small section label */}
      <p className="section-number mb-3">
        {number} — {title}
      </p>

      {/* Main heading */}
      <h2 className="section-title">
        {heading || title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="mt-3 text-base max-w-xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}

      {/* Accent line */}
      <div
        className="mt-4 h-px w-16"
        style={{
          background:
            'linear-gradient(90deg, #2563eb, #ec4899)',
        }}
      />
    </div>
  );
}