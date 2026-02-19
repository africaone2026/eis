import { Alert, Severity } from '../../data/models';
import { AlertTriangle, ArrowRight } from 'lucide-react';

interface PriorityAlertsProps {
  alerts: Alert[];
}

const severityConfig: Record<Severity, { color: string; label: string; bg: string }> = {
  critical: { color: 'var(--severity-critical)', label: 'Critical', bg: 'rgba(239,68,68,0.06)' },
  high: { color: 'var(--severity-high)', label: 'High', bg: 'rgba(245,158,11,0.06)' },
  medium: { color: 'var(--severity-medium)', label: 'Medium', bg: 'rgba(59,130,246,0.06)' },
};

export default function PriorityAlerts({ alerts }: PriorityAlertsProps) {
  return (
    <section style={{ marginBottom: 48 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Action Required
        </h2>
        <span
          style={{
            padding: '2px 8px',
            background: 'var(--status-action-bg)',
            border: '1px solid var(--status-action-border)',
            borderRadius: 4,
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--status-action)',
          }}
        >
          {alerts.length}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {alerts.map((alert, i) => {
          const cfg = severityConfig[alert.severity];
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 10,
                overflow: 'hidden',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-default)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
            >
              <div style={{ width: 4, background: cfg.color, flexShrink: 0 }} />
              <div style={{ flex: 1, padding: '20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <AlertTriangle size={14} style={{ color: cfg.color, flexShrink: 0 }} />
                    <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>
                      {alert.title}
                    </h3>
                    <span
                      style={{
                        padding: '2px 7px',
                        background: cfg.bg,
                        borderRadius: 4,
                        fontSize: 10,
                        fontWeight: 600,
                        color: cfg.color,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        border: `1px solid ${cfg.color}30`,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {cfg.label}
                    </span>
                  </div>
                </div>
                <p style={{ margin: '0 0 14px', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {alert.description}
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    padding: '10px 14px',
                    background: 'var(--bg-surface)',
                    borderRadius: 6,
                    marginBottom: 16,
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <ArrowRight size={12} style={{ color: 'var(--accent-secondary)', flexShrink: 0, marginTop: 2 }} />
                  <p style={{ margin: 0, fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--accent-secondary)', fontWeight: 500 }}>Suggested Action: </span>
                    {alert.suggestedAction}
                  </p>
                </div>
                <button
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '7px 14px',
                    background: 'transparent',
                    border: '1px solid var(--border-default)',
                    borderRadius: 6,
                    color: 'var(--text-secondary)',
                    fontSize: 12,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = cfg.color;
                    e.currentTarget.style.color = cfg.color;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-default)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  Review Details
                  <ArrowRight size={11} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
