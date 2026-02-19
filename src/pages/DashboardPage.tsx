import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { models, intelligenceHistory, ModelKey } from '../data/models';
import TopNavBar from '../components/TopNavBar';
import ExecBrief from '../components/dashboard/ExecBrief';
import HealthSignals from '../components/dashboard/HealthSignals';
import PriorityAlerts from '../components/dashboard/PriorityAlerts';
import PerformanceTrends from '../components/dashboard/PerformanceTrends';
import IntelHistory from '../components/dashboard/IntelHistory';
import { LayoutGrid } from 'lucide-react';

const intelligenceModel: ModelKey = 'distributed';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [scope, setScope] = useState('Entire Organization');

  const model = models[intelligenceModel];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <TopNavBar scope={scope} onScopeChange={setScope} />

      <main
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '48px 40px 80px',
        }}
        className="dashboard-main"
      >
        <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 11, color: 'var(--text-tertiary)', fontWeight: 500 }}>
              Scope:
            </span>
            <span
              style={{
                padding: '2px 8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 4,
                fontSize: 11,
                fontWeight: 500,
                color: 'var(--text-secondary)',
              }}
            >
              {scope}
            </span>
          </div>
        </div>

        <div style={{ height: 1, background: 'var(--border-subtle)', margin: '16px 0 40px' }} />

        <ExecBrief brief={model.executiveBrief} primaryAttention={model.primaryAttention} />
        <HealthSignals signals={model.healthSignals} />
        <PriorityAlerts alerts={model.alerts} />
        <PerformanceTrends trends={model.trends} />
        <IntelHistory history={intelligenceHistory} />

        <div className="mobile-board-cta" style={{ display: 'none' }}>
          <button
            onClick={() => navigate('/board-view')}
            style={{
              width: '100%',
              padding: '14px',
              background: 'var(--accent-primary)',
              border: 'none',
              borderRadius: 8,
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <LayoutGrid size={15} />
            Generate Board Summary
          </button>
        </div>
      </main>
    </div>
  );
}
