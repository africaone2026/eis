import { useState } from 'react';
import { HealthSignal, SignalStatus } from '../../data/models';
import SlideOverPanel from '../SlideOverPanel';

interface HealthSignalsProps {
  signals: HealthSignal[];
}

const statusConfig: Record<SignalStatus, { label: string; color: string; bg: string; border: string }> = {
  stable: { label: 'Stable', color: 'var(--status-stable)', bg: 'var(--status-stable-bg)', border: 'var(--status-stable-border)' },
  watch: { label: 'Watch', color: 'var(--status-watch)', bg: 'var(--status-watch-bg)', border: 'var(--status-watch-border)' },
  action: { label: 'Action Required', color: 'var(--status-action)', bg: 'var(--status-action-bg)', border: 'var(--status-action-border)' },
};

export default function HealthSignals({ signals }: HealthSignalsProps) {
  const [activeSignal, setActiveSignal] = useState<HealthSignal | null>(null);

  return (
    <>
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ margin: '0 0 20px', fontSize: 13, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Strategic Health Overview
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
          }}
          className="signals-grid"
        >
          {signals.map((signal) => {
            const cfg = statusConfig[signal.status];
            return (
              <button
                key={signal.title}
                onClick={() => setActiveSignal(signal)}
                style={{
                  padding: '24px 22px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 10,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                  e.currentTarget.style.borderColor = 'var(--border-default)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-elevated)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: cfg.color,
                    opacity: 0.6,
                  }}
                />
                <div style={{ marginBottom: 14 }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      padding: '3px 8px',
                      background: cfg.bg,
                      border: `1px solid ${cfg.border}`,
                      borderRadius: 4,
                    }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: cfg.color, display: 'inline-block' }} />
                    <span style={{ fontSize: 10, fontWeight: 600, color: cfg.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {cfg.label}
                    </span>
                  </span>
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {signal.title}
                </h3>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {signal.summary}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {activeSignal && (
        <SlideOverPanel
          open={!!activeSignal}
          onClose={() => setActiveSignal(null)}
          title={activeSignal.title}
          status={activeSignal.status}
          summary={activeSignal.summary}
          details={activeSignal.details}
        />
      )}
    </>
  );
}
