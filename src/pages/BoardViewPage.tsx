import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { models, ModelKey } from '../data/models';
import TopNavBar from '../components/TopNavBar';
import { useState } from 'react';

const intelligenceModel: ModelKey = 'distributed';

const statusConfig = {
  stable: { label: 'Stable', color: '#10b981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)' },
  watch: { label: 'Watch', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)' },
  action: { label: 'Action Required', color: '#ef4444', bg: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.3)' },
};

export default function BoardViewPage() {
  const navigate = useNavigate();
  const [scope, setScope] = useState('Entire Organization');
  const model = models[intelligenceModel];

  const riskSignals = model.healthSignals.filter(s => s.status === 'action' || s.status === 'watch');

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a' }}>
      <div style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <TopNavBar scope={scope} onScopeChange={setScope} />
      </div>

      <main
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '60px 48px 80px',
        }}
        className="board-main"
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 56 }}>
          <div>
            <p
              style={{
                margin: '0 0 10px',
                fontSize: 11,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              JavisOne Executive Intelligence &nbsp;·&nbsp; Board View &nbsp;·&nbsp; {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <h1
              style={{
                margin: 0,
                fontSize: 36,
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '-0.8px',
                lineHeight: 1.15,
              }}
            >
              Executive Intelligence Summary
            </h1>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                padding: '9px 16px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 7,
                color: 'rgba(255,255,255,0.6)',
                fontSize: 13,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
            >
              <ArrowLeft size={13} />
              Dashboard
            </button>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                padding: '9px 16px',
                background: 'rgba(37,99,235,0.7)',
                border: '1px solid rgba(37,99,235,0.5)',
                borderRadius: 7,
                color: '#fff',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(37,99,235,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(37,99,235,0.7)')}
            >
              <Download size={13} />
              Download Board PDF
            </button>
          </div>
        </div>

        <div
          style={{
            padding: '32px 36px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12,
            marginBottom: 32,
          }}
        >
          <p
            style={{
              margin: '0 0 6px',
              fontSize: 10,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Executive Summary
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.75,
              maxWidth: 820,
            }}
          >
            {model.primaryAttention}. {model.executiveBrief[0]} {model.executiveBrief[2]} Three items require executive decision or authorization within the next 48 hours.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
            marginBottom: 32,
          }}
          className="board-signals-grid"
        >
          {model.healthSignals.map((signal) => {
            const cfg = statusConfig[signal.status];
            return (
              <div
                key={signal.title}
                style={{
                  padding: '22px 20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 10,
                  position: 'relative',
                  overflow: 'hidden',
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
                    opacity: 0.7,
                  }}
                />
                <div style={{ marginBottom: 12 }}>
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
                    <span style={{ fontSize: 9, fontWeight: 700, color: cfg.color, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                      {cfg.label}
                    </span>
                  </span>
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600, color: '#ffffff', lineHeight: 1.3 }}>
                  {signal.title}
                </h3>
                <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                  {signal.summary}
                </p>
              </div>
            );
          })}
        </div>

        {riskSignals.length > 0 && (
          <div
            style={{
              padding: '28px 32px',
              background: 'rgba(239,68,68,0.04)',
              border: '1px solid rgba(239,68,68,0.15)',
              borderRadius: 12,
            }}
          >
            <p
              style={{
                margin: '0 0 18px',
                fontSize: 10,
                fontWeight: 600,
                color: 'rgba(239,68,68,0.7)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Risk Summary &nbsp;·&nbsp; {riskSignals.length} signal{riskSignals.length > 1 ? 's' : ''} requiring attention
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {riskSignals.map(signal => {
                const cfg = statusConfig[signal.status];
                return (
                  <div
                    key={signal.title}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: cfg.color,
                        flexShrink: 0,
                        marginTop: 6,
                      }}
                    />
                    <div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginRight: 10 }}>
                        {signal.title}:
                      </span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                        {signal.summary}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
