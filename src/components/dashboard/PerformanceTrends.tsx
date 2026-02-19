import { Trend } from '../../data/models';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface PerformanceTrendsProps {
  trends: Trend[];
}

function TrendBar({ value, maxValue }: { value: number; maxValue: number }) {
  const pct = Math.round((value / maxValue) * 100);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}>
      <div
        style={{
          height: 28,
          background: 'var(--bg-surface)',
          borderRadius: 3,
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: `${pct}%`,
            background: 'var(--accent-primary)',
            opacity: 0.5,
            borderRadius: 3,
            transition: 'width 0.4s ease',
          }}
        />
      </div>
      <span style={{ fontSize: 11, color: 'var(--text-tertiary)', minWidth: 30, textAlign: 'right' }}>
        {pct}%
      </span>
    </div>
  );
}

export default function PerformanceTrends({ trends }: PerformanceTrendsProps) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ margin: '0 0 20px', fontSize: 13, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        Performance Trends
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
        }}
        className="trends-grid"
      >
        {trends.map((trend) => {
          const maxVal = Math.max(...trend.points.map(p => p.value));
          const directionIcon = trend.direction === 'up'
            ? <TrendingUp size={14} style={{ color: 'var(--status-stable)' }} />
            : trend.direction === 'down'
            ? <TrendingDown size={14} style={{ color: 'var(--status-action)' }} />
            : <Minus size={14} style={{ color: 'var(--status-watch)' }} />;

          const deltaColor = trend.direction === 'up'
            ? 'var(--status-stable)'
            : trend.direction === 'down'
            ? 'var(--status-action)'
            : 'var(--status-watch)';

          return (
            <div
              key={trend.title}
              style={{
                padding: '24px 22px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>
                  {trend.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {directionIcon}
                  <span style={{ fontSize: 12, fontWeight: 600, color: deltaColor }}>
                    {trend.delta}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
                {trend.points.map(point => (
                  <div key={point.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span
                      style={{
                        fontSize: 10,
                        color: 'var(--text-tertiary)',
                        minWidth: 28,
                        fontWeight: 500,
                      }}
                    >
                      {point.label}
                    </span>
                    <TrendBar value={point.value} maxValue={maxVal} />
                  </div>
                ))}
              </div>

              <p style={{ margin: 0, fontSize: 11, color: 'var(--text-tertiary)', lineHeight: 1.5, borderTop: '1px solid var(--border-subtle)', paddingTop: 12 }}>
                {trend.note}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
