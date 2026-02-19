import { useNavigate } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';
import { useState } from 'react';
import { ModelKey } from '../data/models';

const intelligenceModel: ModelKey = 'distributed';

const modelLabels: Record<ModelKey, string> = {
  growth: 'Growth Model',
  distributed: 'Distributed Operations Model',
  public: 'Public Sector Model',
};

export default function SettingsPage() {
  const navigate = useNavigate();
  const [scope, setScope] = useState('Entire Organization');

  const handleLogout = () => {
    localStorage.removeItem('ji-auth');
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <TopNavBar scope={scope} onScopeChange={setScope} />

      <main
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: '56px 40px 80px',
        }}
        className="settings-main"
      >
        <div style={{ marginBottom: 40 }}>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Configuration
          </p>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.4px' }}>
            Settings
          </h1>
        </div>

        <div style={{ height: 1, background: 'var(--border-subtle)', marginBottom: 40 }} />

        <div style={{ marginBottom: 32 }}>
          <h2 style={{ margin: '0 0 20px', fontSize: 12, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
            Organization
          </h2>

          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >
            {[
              { label: 'Organization Name', value: 'JavisOne Corporation' },
              { label: 'Assigned Intelligence Model', value: modelLabels[intelligenceModel] },
              { label: 'User Role', value: 'Executive' },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 24px',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                <span style={{ fontSize: 13, color: 'var(--text-tertiary)', fontWeight: 500 }}>
                  {row.label}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    padding: '4px 12px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 5,
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ margin: '0 0 20px', fontSize: 12, fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
            Session
          </h2>

          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >
            {[
              { label: 'Access Level', value: 'Full Executive Access' },
              { label: 'Session Status', value: 'Active' },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 24px',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                <span style={{ fontSize: 13, color: 'var(--text-tertiary)', fontWeight: 500 }}>
                  {row.label}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    padding: '4px 12px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 5,
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            background: 'transparent',
            border: '1px solid var(--status-action-border)',
            borderRadius: 7,
            color: 'var(--status-action)',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--status-action-bg)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Sign Out
        </button>
      </main>
    </div>
  );
}
