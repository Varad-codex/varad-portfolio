'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const roles = [
  'CSE Student',
  'Web Developer',
  'AI Enthusiast',
  'Problem Solver',
];

const stats = [
  { value: '2+', label: 'Projects Built' },
  { value: '1+', label: 'Years Full Stack' },
  { value: '5+', label: 'Tech Stack' },
  { value: '1', label: 'Capstone Project' },
];

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typeSpeed = isDeleting ? 50 : 100;
    const pauseDelay = isDeleting ? 0 : 2000;

    if (!isDeleting && displayText === currentRole) {
      timerRef.current = setTimeout(
        () => setIsDeleting(true),
        pauseDelay
      );

      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);

      return;
    }

    timerRef.current = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [displayText, isDeleting, roleIndex]);

  /* Blink cursor */
  useEffect(() => {
    const id = setInterval(
      () => setShowCursor((v) => !v),
      530
    );

    return () => clearInterval(id);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 24,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{
        background: 'var(--bg-primary)',
      }}
    >
      {/* ─── Futuristic Grid ─────────────────────────────────────────── */}

      <div className="absolute inset-0 futuristic-grid pointer-events-none opacity-40" />

      {/* ─── Blue Glow ───────────────────────────────────────────────── */}

      <div
        className="absolute top-10 left-[10%] w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%)',
        }}
      />

      {/* ─── Purple Glow ─────────────────────────────────────────────── */}

      <div
        className="absolute top-1/3 left-1/2 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)',
        }}
      />

      {/* ─── Pink Glow ───────────────────────────────────────────────── */}

      <div
        className="absolute bottom-0 right-[5%] w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(236,72,153,0.12), transparent 70%)',
        }}
      />

      {/* ─── Main Content ────────────────────────────────────────────── */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ─── Left: Content ───────────────────────────────────────── */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >

            {/* Available Badge */}

            <motion.div variants={item}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(37,99,235,0.08)',
                  border: '1px solid rgba(37,99,235,0.25)',
                  color: '#60a5fa',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                Available for opportunities
              </span>
            </motion.div>


            {/* Name */}

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              style={{
                color: 'var(--text-primary)',
              }}
            >
              Hey, I&apos;m{' '}
              <span className="gradient-text">
                Varad Wakarekar
              </span>
            </motion.h1>


            {/* Typewriter */}

            <motion.div
              variants={item}
              className="flex items-center gap-2 text-xl sm:text-2xl font-semibold"
              style={{
                color: 'var(--text-secondary)',
              }}
            >
              <span>{displayText}</span>

              <span
                className={`w-0.5 h-6 rounded-full transition-opacity ${showCursor
                  ? 'opacity-100'
                  : 'opacity-0'
                  }`}
                style={{
                  background:
                    'linear-gradient(180deg, #2563eb, #ec4899)',
                }}
              />
            </motion.div>


            {/* Tagline */}

            <motion.p
              variants={item}
              className="text-base sm:text-lg leading-relaxed max-w-xl"
              style={{
                color: 'var(--text-secondary)',
              }}
            >
              Building full-stack web applications with React,
              Node/Express, and PostgreSQL. Passionate about clean
              code and great user experiences.
            </motion.p>


            {/* Action Buttons */}

            <motion.div
              variants={item}
              className="flex flex-wrap gap-3"
            >

              {/* GitHub */}

              <a
                href="https://github.com/Varad-codex"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>

                GitHub
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/varad-wakarekar/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>

                LinkedIn
              </a>


              {/* Email */}

              <a
                href="mailto:varadwakarekar85@gmail.com"
                className="btn-outline"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                  />

                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>

                Email
              </a>

            </motion.div>


            {/* Stats */}

            <motion.div
              variants={item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-3 rounded-xl"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </span>

                  <span
                    className="text-xs mt-1"
                    style={{
                      color: 'var(--text-muted)',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>


          {/* ─── Right: Avatar ────────────────────────────────────────── */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.21, 1.11, 0.81, 0.99],
            }}
            className="flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative animate-float">

              {/* Gradient Ring */}

              <div
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full p-1 relative"
                style={{
                  background:
                    'linear-gradient(135deg, #2563eb, #7c3aed, #ec4899)',
                  boxShadow:
                    '0 0 40px rgba(37,99,235,0.18), 0 0 70px rgba(236,72,153,0.10)',
                }}
              >
                <Image
                  src="/Varad.png"
                  alt="Varad Wakarekar"
                  width={288}
                  height={288}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              </div>

            </div>
          </motion.div>

        </div>

        {/* ─── Explore / Page Navigation ─────────────────────────────── */}

        <motion.div
          className="flex justify-center mt-16"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
        >
          <Link
            href="/about"
            className="flex flex-col items-center gap-2 group"
            style={{
              color: 'var(--text-muted)',
            }}
            aria-label="Go to About page"
          >
            <span className="text-xs font-medium tracking-widest uppercase group-hover:text-blue-400 transition-colors">
              Explore
            </span>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="group-hover:text-pink-400 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}