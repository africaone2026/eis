import { useNavigate } from 'react-router-dom';
import { FileText, Download, LayoutGrid } from 'lucide-react';

interface ExecBriefProps {
  brief: string[];
  primaryAttention: string;
}

export default function ExecBrief({ brief, primaryAttention }: ExecBriefProps) {
  const navigate = useNavigate();

  return (
    <section style={{ marginBottom: 48 }}>
      <div style={{ marginBottom: 32 }}>
        <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
          Today's Executive Brief
        </h1>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 10,
          marginBottom: 24,
        }}
        className="brief-grid"
      >
        {brief.map((line, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              padding: '14px 16px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 8,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                minWidth: 20,
                paddingTop: 2,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.65 }}>{line}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: '14px 20px',
          background: 'var(--status-watch-bg)',
          border: '1px solid var(--status-watch-border)',
          borderRadius: 8,
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--status-watch)', flexShrink: 0 }} />
        <div>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--status-watch)', letterSpacing: '0.06em', textTransform: 'uppercase', marginRight: 10 }}>
            Primary Attention
          </span>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{primaryAttention}</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button
          onClick={() => {}}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            padding: '9px 16px',
            background: 'var(--accent-primary)',
            border: 'none',
            borderRadius: 7,
            color: '#fff',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-primary-hover)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent-primary)')}
        >
          <FileText size={13} />
          View Full Brief
        </button>
        <button
          onClick={() => {}}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            padding: '9px 16px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-default)',
            borderRadius: 7,
            color: 'var(--text-secondary)',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
        >
          <Download size={13} />
          Export PDF
        </button>
        <button
          onClick={() => navigate('/board-view')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            padding: '9px 16px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-default)',
            borderRadius: 7,
            color: 'var(--text-secondary)',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
        >
          <LayoutGrid size={13} />
          Switch to Board Mode
        </button>
      </div>
    </section>
  );
}
