import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { HistoryEntry, SignalStatus } from '../../data/models';
import Modal from '../Modal';

interface IntelHistoryProps {
  history: HistoryEntry[];
}

const statusConfig: Record<SignalStatus, { color: string }> = {
  stable: { color: 'var(--status-stable)' },
  watch: { color: 'var(--status-watch)' },
  action: { color: 'var(--status-action)' },
};

export default function IntelHistory({ history }: IntelHistoryProps) {
  const [expanded, setExpanded] = useState(false);
  const [activeEntry, setActiveEntry] = useState<HistoryEntry | null>(null);

  return (
    <>
      <section style={{ marginBottom: 48 }}>
        <button
          onClick={() => setExpanded(prev => !prev)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '16px 20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: expanded ? '10px 10px 0 0' : 10,
            cursor: 'pointer',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-card)')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <h2 style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Intelligence History
            </h2>
            <span
              style={{
                padding: '2px 8px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 4,
                fontSize: 11,
                fontWeight: 500,
                color: 'var(--text-tertiary)',
              }}
            >
              {history.length} briefs
            </span>
          </div>
          {expanded ? (
            <ChevronUp size={15} style={{ color: 'var(--text-tertiary)' }} />
          ) : (
            <ChevronDown size={15} style={{ color: 'var(--text-tertiary)' }} />
          )}
        </button>

        {expanded && (
          <div
            style={{
              border: '1px solid var(--border-subtle)',
              borderTop: 'none',
              borderRadius: '0 0 10px 10px',
              overflow: 'hidden',
            }}
          >
            {history.map((entry, i) => {
              const cfg = statusConfig[entry.status];
              const isLast = i === history.length - 1;
              return (
                <button
                  key={entry.id}
                  onClick={() => setActiveEntry(entry)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    width: '100%',
                    padding: '16px 20px',
                    background: 'var(--bg-card)',
                    border: 'none',
                    borderBottom: isLast ? 'none' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.1s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-card)')}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: cfg.color, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: '0 0 2px', fontSize: 13, fontWeight: 500, color: 'var(--text-primary)' }}>
                      {entry.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 12, color: 'var(--text-tertiary)' }}>
                      {entry.primaryAttention}
                    </p>
                  </div>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {entry.date}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {activeEntry && (
        <Modal
          open={!!activeEntry}
          onClose={() => setActiveEntry(null)}
          title={activeEntry.title}
          date={activeEntry.date}
          primaryAttention={activeEntry.primaryAttention}
          brief={activeEntry.brief}
        />
      )}
    </>
  );
}
