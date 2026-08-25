import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

const experiences = [
  {
    role: 'Web Developer',
    org: 'Thiranex • Kolhapur',
    period: '11 July 2026 - 10 Aug 2026',
    type: 'Internship',
    description:
      'Built responsive web components using React, TypeScript, and Tailwind CSS. Integrated REST APIs and backend endpoints with Node.js and PostgreSQL. Collaborated with team members to deliver high-quality features.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    role: 'Front-end Developer',
    org: 'Dimension X Hackathon • Kolhapur',
    period: '16 Jan 2026',
    type: 'Hackathon',
    description:
      'Developed a web application using React and Tailwind CSS. Implemented responsive design and interactive UI components. Collaborated with a team to deliver a functional prototype within the hackathon timeframe.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
  },
];

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  Internship: {
    bg: 'rgba(16,185,129,0.10)',
    text: '#34d399',
    border: 'rgba(16,185,129,0.20)',
  },

  PBL: {
    bg: 'rgba(37,99,235,0.10)',
    text: '#60a5fa',
    border: 'rgba(37,99,235,0.20)',
  },

  Coursework: {
    bg: 'rgba(124,58,237,0.10)',
    text: '#a78bfa',
    border: 'rgba(124,58,237,0.20)',
  },

  Freelance: {
    bg: 'rgba(236,72,153,0.10)',
    text: '#f472b6',
    border: 'rgba(236,72,153,0.20)',
  },

  default: {
    bg: 'rgba(37,99,235,0.10)',
    text: '#60a5fa',
    border: 'rgba(37,99,235,0.20)',
  },
};

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
      style={{
        background: 'var(--bg-primary)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Section Header ───────────────────────────────────── */}

        <SectionHeader
          number="05"
          title="Journey"
          heading='Experience'
          subtitle="My professional experience, internships, and hands-on development work."
        />


        {/* ─── Timeline ────────────────────────────────────────── */}

        <div className="relative pl-12 flex flex-col gap-8">

          {/* Vertical Timeline Line */}

          <div className="timeline-line" />


          {experiences.map((exp, i) => {
            const color =
              typeColors[exp.type] ||
              typeColors.default;

            return (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
              >
                <div className="relative">

                  {/* Timeline Dot */}

                  <div
                    className="timeline-dot"
                    style={{
                      background:
                        'linear-gradient(135deg, #2563eb, #7c3aed, #ec4899)',

                      boxShadow:
                        '0 0 0 3px rgba(37,99,235,0.18), 0 0 18px rgba(124,58,237,0.18)',
                    }}
                  />


                  {/* Experience Card */}

                  <div className="card p-6 flex flex-col gap-3">

                    {/* Header */}

                    <div className="flex flex-wrap items-start gap-3 justify-between">

                      <div>

                        <h3
                          className="font-bold text-base"
                          style={{
                            color: 'var(--text-primary)',
                          }}
                        >
                          {exp.role}
                        </h3>

                        <p
                          className="text-sm mt-0.5"
                          style={{
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {exp.org}
                        </p>

                      </div>


                      {/* Type + Period */}

                      <div className="flex flex-col items-end gap-2 shrink-0">

                        <span
                          className="text-xs px-2.5 py-1 rounded-full font-semibold"
                          style={{
                            background: color.bg,
                            color: color.text,
                            border: `1px solid ${color.border}`,
                          }}
                        >
                          {exp.type}
                        </span>

                        <span
                          className="text-xs font-mono"
                          style={{
                            color: 'var(--text-muted)',
                          }}
                        >
                          {exp.period}
                        </span>

                      </div>

                    </div>


                    {/* Description */}

                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {exp.description}
                    </p>


                    {/* Technology Tags */}

                    <div className="flex flex-wrap gap-1.5 pt-1">

                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md font-medium skill-pill"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>
              </AnimatedSection>
            );
          })}

        </div>
      </div>
    </section>
  );
}