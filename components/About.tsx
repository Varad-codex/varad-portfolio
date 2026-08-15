'use client';

import { motion } from 'framer-motion';

const traitTags = [
  'Problem Solver',
  'Quick Learner',
  'Adaptable',
];

export function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Section Header ─────────────────────────────────────── */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center mb-16"
        >
          <span className="section-number">
            About Me
          </span>

          <h2
            className="text-3xl sm:text-4xl font-bold mt-2"
            style={{
              color: 'var(--text-primary)',
            }}
          >
            Passionate Software Engineer
          </h2>

          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Learn a bit more about my background, education,
            and what drives my work.
          </p>
        </motion.div>


        {/* ─── Main Content ──────────────────────────────────────── */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* ─── Left: Bio Card ─────────────────────────────────── */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="card p-6 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">

              <h3
                className="text-xl font-bold"
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                Who I Am
              </h3>

              <p
                className="leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                I&apos;m a Computer Science student with a strong
                foundation in C, C++, and Python, and solid
                coursework in Object-Oriented Programming and
                Operating Systems.
              </p>

              <p
                className="leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                Currently, I&apos;m focused on the MERN/full-stack
                ecosystem — building production-grade apps with
                React, Node.js/Express, and PostgreSQL. I love
                turning complex problems into clean, elegant
                solutions.
              </p>

              <p
                className="leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                When I&apos;m not coding, I enjoy exploring new
                technologies, contributing to open-source, and
                deepening my understanding of software engineering
                principles.
              </p>

            </div>


            {/* ─── Trait Tags ────────────────────────────────────── */}

            <div
              className="flex flex-wrap gap-7 mt-6 pt-6 border-t"
              style={{
                borderColor: 'var(--border)',
              }}
            >
              {traitTags.map((tag) => (
                <span
                  key={tag}
                  className="skill-pill"
                >
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>


          {/* ─── Right: Education Card ──────────────────────────── */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="card p-8 flex flex-col justify-between"
          >

            <div className="flex flex-col gap-6">

              {/* Education Heading */}

              <h3
                className="text-xl font-bold flex items-center gap-2"
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                <span
                  className="p-2 rounded-lg"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(236,72,153,0.10))',
                    color: '#60a5fa',
                    border:
                      '1px solid rgba(37,99,235,0.20)',
                  }}
                >
                  🎓
                </span>

                Education
              </h3>


              {/* ─── Bachelor's Degree ──────────────────────────── */}

              <div className="flex flex-col gap-4">

                <div className="flex items-center justify-between flex-wrap gap-2">

                  <h4
                    className="font-bold text-lg"
                    style={{
                      color: 'var(--text-primary)',
                    }}
                  >
                    Bachelor of Technology —
                    Computer Science & Engineering
                  </h4>

                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{
                      background:
                        'rgba(37,99,235,0.10)',
                      color: '#60a5fa',
                      border:
                        '1px solid rgba(37,99,235,0.15)',
                    }}
                  >
                    2024 – 2028
                  </span>

                </div>

                <p
                  className="font-medium text-sm"
                  style={{
                    color: 'var(--text-secondary)',
                  }}
                >
                  Dr. D.Y.Patil Pratishthan&apos;s College
                  of Engineering / Shivaji University
                </p>

              </div>


              {/* ─── Higher Secondary ──────────────────────────── */}

              <div className="flex flex-col gap-4">

                <div className="flex items-center justify-between flex-wrap gap-2">

                  <h4
                    className="font-bold text-lg"
                    style={{
                      color: 'var(--text-primary)',
                    }}
                  >
                    Higher Secondary Education —
                    Science Stream
                  </h4>

                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{
                      background:
                        'rgba(124,58,237,0.10)',
                      color: '#a78bfa',
                      border:
                        '1px solid rgba(124,58,237,0.15)',
                    }}
                  >
                    2023 – 2024
                  </span>

                </div>

                <p
                  className="font-medium text-sm"
                  style={{
                    color: 'var(--text-secondary)',
                  }}
                >
                  Sou.S.M.Lohia Jr. College /
                  Maharashtra State Board
                </p>

              </div>


              {/* ─── Academic Achievements ─────────────────────── */}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

                {/* Current CGPA */}

                <div
                  className="rounded-xl p-4"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08))',
                    border:
                      '1px solid rgba(99,102,241,0.15)',
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      color: 'var(--text-muted)',
                    }}
                  >
                    Current CGPA
                  </p>

                  <p
                    className="font-bold text-lg mt-1"
                    style={{
                      color: 'var(--text-primary)',
                    }}
                  >
                    8.0
                  </p>

                  <p
                    className="text-xs mt-1"
                    style={{
                      color: 'var(--text-secondary)',
                    }}
                  >
                    2nd Year
                  </p>
                </div>


                {/* HSC */}

                <div
                  className="rounded-xl p-4"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08))',
                    border:
                      '1px solid rgba(99,102,241,0.15)',
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      color: 'var(--text-muted)',
                    }}
                  >
                    HSC
                  </p>

                  <p
                    className="font-bold text-lg mt-1"
                    style={{
                      color: 'var(--text-primary)',
                    }}
                  >
                    72.33%
                  </p>

                  <p
                    className="text-xs mt-1"
                    style={{
                      color: 'var(--text-secondary)',
                    }}
                  >
                    2024
                  </p>
                </div>


                {/* MHT-CET */}

                <div
                  className="rounded-xl p-4"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(236,72,153,0.08))',
                    border:
                      '1px solid rgba(124,58,237,0.15)',
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      color: 'var(--text-muted)',
                    }}
                  >
                    MHT-CET
                  </p>

                  <p
                    className="font-bold text-lg mt-1"
                    style={{
                      color: 'var(--text-primary)',
                    }}
                  >
                    82.69
                  </p>

                  <p
                    className="text-xs mt-1"
                    style={{
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Percentile • 2024
                  </p>
                </div>


                {/* SSC */}

                <div
                  className="rounded-xl p-4"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(37,99,235,0.08))',
                    border:
                      '1px solid rgba(16,185,129,0.15)',
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      color: 'var(--text-muted)',
                    }}
                  >
                    SSC
                  </p>

                  <p
                    className="font-bold text-lg mt-1"
                    style={{
                      color: 'var(--text-primary)',
                    }}
                  >
                    92.00%
                  </p>

                  <p
                    className="text-xs mt-1"
                    style={{
                      color: 'var(--text-secondary)',
                    }}
                  >
                    2022
                  </p>
                </div>

              </div>

            </div>


            {/* ─── Resume CTA ───────────────────────────────────── */}

            <div
              className="mt-6 pt-6 border-t flex items-center justify-between gap-4 flex-wrap"
              style={{
                borderColor: 'var(--border)',
              }}
            >

              <span
                className="text-sm"
                style={{
                  color: 'var(--text-muted)',
                }}
              >
                Looking for my full background?
              </span>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Download CV ↗
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}