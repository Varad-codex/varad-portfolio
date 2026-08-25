import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Python',
      'C++',
      'HTML5/CSS3',
    ],
  },
  {
    category: 'Frontend',
    icon: '⚡',
    skills: [
      'React.js',
      'Next.js 14',
      'Tailwind CSS',
      'Framer Motion',
      'REST APIs',
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'RESTful APIs',
    ],
  },
  {
    category: 'Tools & Practices',
    icon: '🛠️',
    skills: [
      'Git & GitHub',
      'Vercel',
      'VS Code',
      'Version Control',
      'API Integration',
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
      style={{
        background: 'var(--bg-primary)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Section Header ───────────────────────────────────── */}

        <SectionHeader
          number="03"
          title="SKILLS"
          heading="Technologies I Work With"
          subtitle="A collection of technologies, frameworks, and tools I use to build modern applications."
        />

        {/* ─── Skills Grid ──────────────────────────────────────── */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {skillGroups.map((group, i) => (
            <AnimatedSection
              key={group.category}
              delay={i * 0.08}
            >
              <div
                className="card p-6 h-full relative overflow-hidden"
              >

                {/* Subtle gradient glow */}

                <div
                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                  style={{
                    background:
                      i === 0
                        ? 'rgba(37,99,235,0.12)'
                        : i === 1
                          ? 'rgba(79,70,229,0.12)'
                          : i === 2
                            ? 'rgba(124,58,237,0.12)'
                            : 'rgba(236,72,153,0.12)',
                  }}
                />

                {/* Category Header */}

                <div className="flex items-center gap-3 mb-5 relative z-10">

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-mono font-bold"
                    style={{
                      background:
                        i === 0
                          ? 'rgba(37,99,235,0.10)'
                          : i === 1
                            ? 'rgba(79,70,229,0.10)'
                            : i === 2
                              ? 'rgba(124,58,237,0.10)'
                              : 'rgba(236,72,153,0.10)',

                      color:
                        i === 0
                          ? '#60a5fa'
                          : i === 1
                            ? '#818cf8'
                            : i === 2
                              ? '#a78bfa'
                              : '#f472b6',

                      border:
                        i === 0
                          ? '1px solid rgba(37,99,235,0.22)'
                          : i === 1
                            ? '1px solid rgba(79,70,229,0.22)'
                            : i === 2
                              ? '1px solid rgba(124,58,237,0.22)'
                              : '1px solid rgba(236,72,153,0.22)',
                    }}
                  >
                    {group.icon}
                  </div>

                  <h3
                    className="font-semibold text-sm uppercase tracking-wider"
                    style={{
                      color: 'var(--text-muted)',
                    }}
                  >
                    {group.category}
                  </h3>

                </div>


                {/* Skills */}

                <div className="flex flex-wrap gap-2 relative z-10">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            </AnimatedSection>
          ))}

        </div>
      </div>
    </section>
  );
}