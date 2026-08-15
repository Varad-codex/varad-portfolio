'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

const RELATION_OPTIONS = ['Friend', 'Colleague', 'Teacher', 'Mentor', 'Teammate', 'Classmate', 'Other'];

const RELATION_COLORS: Record<string, string> = {
  Friend: '#10b981',
  Colleague: '#6366f1',
  Teacher: '#f59e0b',
  Mentor: '#8b5cf6',
  Teammate: '#0ea5e9',
  Classmate: '#ec4899',
  Other: '#94a3b8',
};

interface Testimonial {
  id: string;
  name: string;
  relation: string;
  photoUrl?: string | null;
  message: string;
  createdAt: string;
}

// Initials avatar helper
function Avatar({ name, photoUrl }: { name: string; photoUrl?: string | null }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  if (photoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={photoUrl} alt={name} className="w-10 h-10 rounded-full object-cover" />
    );
  }

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
      style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
    >
      {initials}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const color = RELATION_COLORS[t.relation] || RELATION_COLORS.Other;
  return (
    <div className="card p-5 flex flex-col gap-4">
      {/* Quote icon */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" opacity="0.3">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" stroke="#6366f1" strokeWidth="2"/>
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" stroke="#6366f1" strokeWidth="2"/>
      </svg>

      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
        &ldquo;{t.message}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
        <Avatar name={t.name} photoUrl={t.photoUrl} />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ background: `${color}18`, color }}
          >
            {t.relation}
          </span>
        </div>
      </div>
    </div>
  );
}

function TestimonialModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: '', relation: 'Friend', photoUrl: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit.');
      }
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3 }}
        className="card w-full max-w-lg p-6 relative"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          aria-label="Close modal"
          style={{ color: 'var(--text-muted)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(16,185,129,0.12)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Thank you! 🎉</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Your testimonial has been submitted and is pending approval. It will appear publicly once reviewed.
            </p>
            <button onClick={onClose} className="btn-primary mt-2">Close</button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Leave a Testimonial</h3>
            <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
              Share your experience working with or knowing me.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Name *</label>
                <input
                  required
                  className="form-input"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Relation *</label>
                <select
                  required
                  className="form-input"
                  value={form.relation}
                  onChange={(e) => setForm({ ...form, relation: e.target.value })}
                >
                  {RELATION_OPTIONS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Photo URL <span className="normal-case font-normal">(optional)</span></label>
                <input
                  className="form-input"
                  placeholder="https://example.com/your-photo.jpg"
                  value={form.photoUrl}
                  onChange={(e) => setForm({ ...form, photoUrl: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Your Testimonial *</label>
                <textarea
                  required
                  rows={4}
                  className="form-input resize-none"
                  placeholder="Share your experience, what we worked on together, or what you appreciate about my work..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  minLength={20}
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/30 px-3 py-2 rounded-lg">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary justify-center mt-1"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Submit Testimonial'}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/testimonials')
      .then((r) => r.json())
      .then((data) => {
        setTestimonials(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="testimonials" className="py-24" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            number="06"
            title="Feedback"
            subtitle="What people I've worked and studied with have to say."
          />
        </AnimatedSection>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card p-5 animate-pulse">
                <div className="h-4 rounded mb-3" style={{ background: 'var(--border)', width: '80%' }} />
                <div className="h-4 rounded mb-3" style={{ background: 'var(--border)', width: '60%' }} />
                <div className="h-4 rounded" style={{ background: 'var(--border)', width: '40%' }} />
              </div>
            ))}
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.08}>
                <TestimonialCard t={t} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <div className="text-center py-16 card">
              <div className="text-4xl mb-3">💬</div>
              <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>No testimonials yet</p>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                Be the first to leave a testimonial!
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <div
            className="mt-10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))',
              border: '1px solid rgba(99,102,241,0.2)',
            }}
          >
            <div>
              <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                Worked or studied with me?
              </h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                I&apos;d love to hear your feedback — it means a lot and helps others get to know my work.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary whitespace-nowrap shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Leave a Testimonial
            </button>
          </div>
        </AnimatedSection>
      </div>

      <AnimatePresence>
        {modalOpen && <TestimonialModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
