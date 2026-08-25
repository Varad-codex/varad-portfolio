'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialId: string;
}

const certifications: Certification[] = [
  {
    title: 'Web Development Internship',
    issuer: 'Thiranex',
    date: '10-Aug-2026',
    imageUrl: '/certificates/Thiranex.png',
    credentialId: 'THX-JUL1126-336',
  },
  {
    title: 'Intro. To LLM',
    issuer: 'Simplilearn',
    date: '24-Dec-2025',
    imageUrl: '/certificates/Simpli_1.png',
    credentialId: '9632385',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Simplilearn',
    date: '24-Dec-2025',
    imageUrl: '/certificates/Simpli_2.png',
    credentialId: '9362092',
  },
  {
    title: 'App Operable Car [Centrado Kit]',
    issuer: 'Infosys',
    date: '31-Dec-2026',
    imageUrl: '/certificates/Infosys_certificate.jpg',
    credentialId: 'Not Available',
  },
];

function CertificateQuickView({
  cert,
  onClose,
}: {
  cert: Certification;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
      style={{
        background: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close certificate preview"
          className="absolute -top-3 -right-3 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 hover:!bg-red-600 hover:!border-red-500"
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Certificate */}
        <div
          className="relative w-full max-h-[78vh] rounded-2xl overflow-hidden flex items-center justify-center"
          style={{
            background: '#050507',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow:
              '0 25px 80px rgba(0,0,0,0.6), 0 0 50px rgba(37,99,235,0.12)',
          }}
        >
          {cert.imageUrl ? (
            <Image
              src={cert.imageUrl}
              alt={`${cert.title} certificate - full view`}
              width={1600}
              height={1100}
              className="max-h-[78vh] w-auto max-w-full object-contain"
              priority
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-32 px-8">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-4"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.15), rgba(236,72,153,0.15))',
                  border: '1px solid rgba(37,99,235,0.25)',
                }}
              >
                🏆
              </div>

              <p
                className="text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                Certificate image not available
              </p>
            </div>
          )}
        </div>

        {/* Certificate Information */}
        <div
          className="mt-3 px-4 py-3 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{
            background: 'rgba(15,23,42,0.9)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div>
            <p className="text-sm font-semibold text-white">
              {cert.title}
            </p>

            <p className="text-xs text-white/50 mt-0.5">
              {cert.issuer} • {cert.date}
            </p>
          </div>

          {cert.credentialId && (
            <div className="text-left sm:text-right">
              <p className="text-[10px] uppercase tracking-wider text-white/40">
                Credential ID
              </p>

              <p className="text-xs font-mono text-white/70 break-all">
                {cert.credentialId}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CertCard({
  cert,
  onQuickView,
}: {
  cert: Certification;
  onQuickView: () => void;
}) {
  return (
    <div className="card overflow-hidden flex flex-col h-full">

      {/* Certificate Thumbnail */}
      <button
        type="button"
        onClick={onQuickView}
        className="group relative w-full aspect-[1.414/1] overflow-hidden text-left cursor-zoom-in"
        aria-label={`Quick view ${cert.title} certificate`}
        style={{
          background:
            'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.10), rgba(236,72,153,0.10))',
        }}
      >
        {cert.imageUrl ? (
          <Image
            src={cert.imageUrl}
            alt={`${cert.title} certificate`}
            fill
            className="object-contain w-full h-full p-2 transition-all duration-300 group-hover:blur-sm group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3">

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(236,72,153,0.12))',
                  border: '1px solid rgba(37,99,235,0.20)',
                  boxShadow:
                    '0 0 30px rgba(37,99,235,0.08)',
                }}
              >
                🏆
              </div>

              <span
                className="text-xs font-medium"
                style={{
                  color: 'var(--text-muted)',
                }}
              >
                Certification Badge
              </span>

            </div>
          </div>
        )}

        {/* Quick View Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(2px)',
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{
              background: 'rgba(15,23,42,0.85)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="20" y1="20" x2="16.2" y2="16.2" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>

            Quick View
          </div>
        </div>
      </button>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">

        {/* Issuer */}
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full self-start"
          style={{
            background: 'rgba(37,99,235,0.10)',
            color: '#60a5fa',
            border: '1px solid rgba(37,99,235,0.18)',
          }}
        >
          {cert.issuer}
        </span>

        {/* Certificate Title */}
        <h3
          className="font-bold text-sm leading-snug mt-1"
          style={{
            color: 'var(--text-primary)',
          }}
        >
          {cert.title}
        </h3>

        {/* Date */}
        <p
          className="text-xs font-mono"
          style={{
            color: 'var(--text-muted)',
          }}
        >
          {cert.date}
        </p>

        {/* Credential ID */}
        {cert.credentialId && (
          <div
            className="mt-2 p-3 rounded-lg"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            <p
              className="text-[10px] uppercase tracking-wider font-semibold mb-1"
              style={{
                color: 'var(--text-muted)',
              }}
            >
              Credential ID
            </p>

            <p
              className="text-xs font-mono break-all"
              style={{
                color: 'var(--text-secondary)',
              }}
            >
              {cert.credentialId}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export function Certifications() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certification | null>(null);

  return (
    <section
      id="certifications"
      className="py-24"
      style={{
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          number="06"
          title="Certifications"
          heading="Certifications & Achievements"
          subtitle="Professional certifications and courses that showcase my continuous learning."
        />

        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {certifications.map((cert, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.08}
            >
              <CertCard
                cert={cert}
                onQuickView={() => setSelectedCertificate(cert)}
              />
            </AnimatedSection>
          ))}

        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateQuickView
            cert={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}