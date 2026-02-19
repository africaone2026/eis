import { useEffect } from 'react';
import { X } from 'lucide-react';

interface SlideOverPanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  status: 'stable' | 'watch' | 'action';
  summary: string;
  details: string;
}

const statusConfig = {
  stable: { label: 'Stable', color: 'var(--status-stable)', bg: 'var(--status-stable-bg)' },
  watch: { label: 'Watch', color: 'var(--status-watch)', bg: 'var(--status-watch-bg)' },
  action: { label: 'Action Required', color: 'var(--status-action)', bg: 'var(--status-action-bg)' },
};

export default function SlideOverPanel({ open, onClose, title, status, summary, details }: SlideOverPanelProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  const cfg = statusConfig[status];

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--bg-overlay)',
          zIndex: 200,
          animation: 'fadeIn 0.2s ease',
        }}
      />
      <div
        className="animate-slide-right"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 480,
          maxWidth: '100vw',
          height: '100vh',
          background: 'var(--bg-card)',
          borderLeft: '1px solid var(--border-default)',
          boxShadow: 'var(--shadow-panel)',
          zIndex: 201,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            padding: '28px 32px 24px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 10px',
                borderRadius: 4,
                background: cfg.bg,
                border: `1px solid ${cfg.color}33`,
                marginBottom: 12,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: cfg.color }} />
              <span style={{ color: cfg.color, fontSize: 11, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {cfg.label}
              </span>
            </div>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: '1px solid var(--border-default)',
              borderRadius: 6,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: 4,
            }}
          >
            <X size={15} />
          </button>
        </div>

        <div style={{ padding: '28px 32px', flex: 1 }}>
          <div
            style={{
              padding: '16px 20px',
              background: 'var(--bg-surface)',
              borderRadius: 8,
              border: '1px solid var(--border-subtle)',
              marginBottom: 28,
            }}
          >
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7 }}>
              {summary}
            </p>
          </div>

          <h3 style={{ margin: '0 0 14px', fontSize: 11, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Intelligence Detail
          </h3>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
            {details}
          </p>
        </div>
      </div>
    </>
  );
}
