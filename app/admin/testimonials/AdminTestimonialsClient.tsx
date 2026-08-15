'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Testimonial {
  id: string;
  name: string;
  relation: string;
  photoUrl: string | null;
  message: string;
  status: string;
  createdAt: Date;
}

interface Props {
  pending: Testimonial[];
  approved: Testimonial[];
  rejected: Testimonial[];
}

type Tab = 'pending' | 'approved' | 'rejected';

function TestimonialRow({
  t,
  onAction,
}: {
  t: Testimonial;
  onAction: (id: string, action: 'approved' | 'rejected') => Promise<void>;
}) {
  const [loading, setLoading] = useState<'approved' | 'rejected' | null>(null);

  const doAction = async (action: 'approved' | 'rejected') => {
    setLoading(action);
    await onAction(t.id, action);
    setLoading(null);
  };

  return (
    <div
      className="p-5 rounded-xl border flex flex-col gap-3"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium inline-block mt-1"
            style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1' }}
          >
            {t.relation}
          </span>
        </div>
        <p className="text-xs font-mono shrink-0" style={{ color: 'var(--text-muted)' }}>
          {new Date(t.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
        </p>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        &ldquo;{t.message}&rdquo;
      </p>

      {t.photoUrl && (
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Photo: <a href={t.photoUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">{t.photoUrl}</a>
        </p>
      )}

      {t.status === 'pending' && (
        <div className="flex gap-2 pt-1">
          <button
            onClick={() => doAction('approved')}
            disabled={!!loading}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all"
            style={{ background: 'rgba(16,185,129,0.85)' }}
          >
            {loading === 'approved' ? '...' : '✓ Approve'}
          </button>
          <button
            onClick={() => doAction('rejected')}
            disabled={!!loading}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)' }}
          >
            {loading === 'rejected' ? '...' : '✕ Reject'}
          </button>
        </div>
      )}

      {t.status === 'approved' && (
        <div className="flex gap-2 pt-1">
          <button
            onClick={() => doAction('rejected')}
            disabled={!!loading}
            className="text-sm px-4 py-2 rounded-lg font-medium transition-all"
            style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)' }}
          >
            {loading ? '...' : 'Revoke Approval'}
          </button>
        </div>
      )}
    </div>
  );
}

export default function AdminTestimonialsClient({ pending, approved, rejected }: Props) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('pending');

  const handleAction = async (id: string, status: 'approved' | 'rejected') => {
    await fetch(`/api/testimonials/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    router.refresh();
  };

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const lists: Record<Tab, Testimonial[]> = { pending, approved, rejected };
  const tabs: { key: Tab; label: string; count: number; color: string }[] = [
    { key: 'pending', label: 'Pending', count: pending.length, color: '#f59e0b' },
    { key: 'approved', label: 'Approved', count: approved.length, color: '#10b981' },
    { key: 'rejected', label: 'Rejected', count: rejected.length, color: '#ef4444' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <header
        className="sticky top-0 z-10 px-6 py-4 flex items-center justify-between"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(16px)' }}
      >
        <div>
          <h1 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Testimonials Admin</h1>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Manage pending approvals and published testimonials</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="btn-outline text-sm">← View Site</a>
          <button onClick={handleLogout} className="text-sm px-4 py-2 rounded-lg border transition-all"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 p-1 rounded-xl" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                background: tab === t.key ? 'var(--bg-card)' : 'transparent',
                color: tab === t.key ? 'var(--text-primary)' : 'var(--text-muted)',
                boxShadow: tab === t.key ? 'var(--shadow-card)' : 'none',
              }}
            >
              {t.label}
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold"
                style={{ background: `${t.color}20`, color: t.color }}
              >
                {t.count}
              </span>
            </button>
          ))}
        </div>

        {/* List */}
        {lists[tab].length === 0 ? (
          <div className="text-center py-16" style={{ color: 'var(--text-muted)' }}>
            <p className="text-3xl mb-3">🎉</p>
            <p className="font-medium">No {tab} testimonials</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {lists[tab].map((t) => (
              <TestimonialRow key={t.id} t={t} onAction={handleAction} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
