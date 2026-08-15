'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-blur' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ─── Logo ─────────────────────────────────────────────── */}

          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 font-bold text-xl tracking-tight group"
          >
            <span
              className="gradient-text"
            >
              Varad Wakarekar
            </span>
          </Link>


          {/* ─── Desktop Navigation ───────────────────────────────── */}

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 group"
                  style={{
                    color: isActive
                      ? '#60a5fa'
                      : 'var(--text-secondary)',
                  }}
                >
                  {link.label}

                  {/* Active / Hover underline */}

                  <span
                    className={`absolute bottom-0 left-3 right-3 h-px transition-all duration-300 ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-60'
                    }`}
                    style={{
                      background:
                        'linear-gradient(90deg, #2563eb, #7c3aed, #ec4899)',
                    }}
                  />
                </Link>
              );
            })}


            {/* ─── Resume ─────────────────────────────────────────── */}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-2"
            >
              Resume
            </a>


            {/* ─── Theme Toggle ───────────────────────────────────── */}

            <ThemeToggle />
          </nav>


          {/* ─── Mobile Controls ──────────────────────────────────── */}

          <div className="flex md:hidden items-center gap-2">

            <ThemeToggle />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg transition-colors hover:bg-white/5"
              style={{
                color: 'var(--text-secondary)',
              }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileOpen ? (
                  <>
                    <line
                      x1="18"
                      y1="6"
                      x2="6"
                      y2="18"
                    />

                    <line
                      x1="6"
                      y1="6"
                      x2="18"
                      y2="18"
                    />
                  </>
                ) : (
                  <>
                    <line
                      x1="3"
                      y1="6"
                      x2="21"
                      y2="6"
                    />

                    <line
                      x1="3"
                      y1="12"
                      x2="21"
                      y2="12"
                    />

                    <line
                      x1="3"
                      y1="18"
                      x2="21"
                      y2="18"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>


      {/* ─── Mobile Menu ───────────────────────────────────────────── */}

      {mobileOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: 'auto',
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          className="md:hidden navbar-blur border-t"
          style={{
            borderColor: 'var(--border)',
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">

            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                  style={{
                    color: isActive
                      ? '#60a5fa'
                      : 'var(--text-secondary)',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}


            {/* Mobile Resume */}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 justify-center"
            >
              Resume
            </a>

          </div>
        </motion.div>
      )}
    </motion.header>
  );
}