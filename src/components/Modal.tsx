import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  date: string;
  primaryAttention: string;
  brief: string[];
}

export default function Modal({ open, onClose, title, date, primaryAttention, brief }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) {
      document.addEventListener('keydown', handler);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-overlay)',
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="animate-modal"
        style={{
          width: '100%',
          maxWidth: 600,
          background: 'var(--bg-card)',
          borderRadius: 12,
          border: '1px solid var(--border-default)',
          boxShadow: 'var(--shadow-elevated)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '24px 28px 20px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <div>
            <p style={{ margin: '0 0 4px', fontSize: 11, color: 'var(--text-tertiary)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {date}
            </p>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: 'var(--text-primary)' }}>
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
              flexShrink: 0,
            }}
          >
            <X size={15} />
          </button>
        </div>

        <div style={{ padding: '24px 28px 28px' }}>
          <div
            style={{
              padding: '12px 16px',
              background: 'var(--status-watch-bg)',
              border: '1px solid var(--status-watch-border)',
              borderRadius: 6,
              marginBottom: 24,
            }}
          >
            <p style={{ margin: 0, fontSize: 12, color: 'var(--status-watch)', fontWeight: 500 }}>
              Primary Attention: {primaryAttention}
            </p>
          </div>

          <h3 style={{ margin: '0 0 14px', fontSize: 11, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Executive Brief
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {brief.map((line, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  padding: '10px 14px',
                  background: 'var(--bg-surface)',
                  borderRadius: 6,
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <span style={{ color: 'var(--text-muted)', fontSize: 11, fontWeight: 600, minWidth: 18, paddingTop: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
