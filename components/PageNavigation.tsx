'use client';

import Link from 'next/link';

interface PageNavigationProps {
  previous?: {
    label: string;
    href: string;
  };
  next?: {
    label: string;
    href: string;
  };
}

export function PageNavigation({
  previous,
  next,
}: PageNavigationProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div
        className="flex items-center justify-between gap-4 pt-8 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        {/* Previous */}
        <div className="flex-1">
          {previous && (
            <Link
              href={previous.href}
              className="group inline-flex items-center gap-2 text-sm font-medium transition-all duration-200"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="text-lg transition-transform duration-200 group-hover:-translate-x-1">
                ←
              </span>

              <span>
                <span
                  className="block text-xs mb-1"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Previous
                </span>

                <span className="group-hover:text-blue-500 transition-colors">
                  {previous.label}
                </span>
              </span>
            </Link>
          )}
        </div>

        {/* Center Home */}
        <Link
          href="/"
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            color: 'var(--text-secondary)',
          }}
          aria-label="Home"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 9.5V21h14V9.5" />
            <path d="M9 21v-6h6v6" />
          </svg>
        </Link>

        {/* Next */}
        <div className="flex-1 flex justify-end">
          {next && (
            <Link
              href={next.href}
              className="group inline-flex items-center gap-2 text-right text-sm font-medium transition-all duration-200"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span>
                <span
                  className="block text-xs mb-1"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Next
                </span>

                <span className="group-hover:text-blue-500 transition-colors">
                  {next.label}
                </span>
              </span>

              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}