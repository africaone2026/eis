import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Sun, Moon, User, LayoutGrid } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SCOPES = ['Entire Organization', 'Region A', 'Region B', 'Department X'];

interface TopNavBarProps {
  scope: string;
  onScopeChange: (scope: string) => void;
}

export default function TopNavBar({ scope, onScopeChange }: TopNavBarProps) {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [scopeOpen, setScopeOpen] = useState(false);
  const isBoardView = location.pathname === '/board-view';

  return (
    <nav
      style={{
        height: 'var(--nav-height)',
        background: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          height: '100%',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => navigate('/dashboard')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              background: 'var(--accent-primary)',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '-0.5px' }}>JI</span>
          </div>
          <span
            style={{
              color: 'var(--text-primary)',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '-0.2px',
            }}
            className="hide-on-mobile"
          >
            JavisOne Executive Intelligence
          </span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {!isBoardView && (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setScopeOpen(prev => !prev)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '7px 12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 6,
                  color: 'var(--text-secondary)',
                  fontSize: 13,
                  cursor: 'pointer',
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-default)')}
              >
                <span>{scope}</span>
                <ChevronDown size={13} />
              </button>
              {scopeOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 6px)',
                    right: 0,
                    minWidth: 190,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 8,
                    boxShadow: 'var(--shadow-elevated)',
                    overflow: 'hidden',
                    zIndex: 100,
                  }}
                >
                  {SCOPES.map(s => (
                    <button
                      key={s}
                      onClick={() => { onScopeChange(s); setScopeOpen(false); }}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px 16px',
                        textAlign: 'left',
                        background: s === scope ? 'var(--bg-card-hover)' : 'transparent',
                        border: 'none',
                        color: s === scope ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontSize: 13,
                        cursor: 'pointer',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => { if (s !== scope) e.currentTarget.style.background = 'var(--bg-card-hover)'; }}
                      onMouseLeave={e => { if (s !== scope) e.currentTarget.style.background = 'transparent'; }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {!isBoardView && (
            <button
              onClick={() => navigate('/board-view')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '7px 12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 6,
                color: 'var(--text-secondary)',
                fontSize: 13,
                cursor: 'pointer',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-default)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <LayoutGrid size={13} />
              <span className="hide-on-mobile">Board Mode</span>
            </button>
          )}

          {isBoardView && (
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                padding: '7px 14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 6,
                color: 'var(--text-secondary)',
                fontSize: 13,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-default)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              Dashboard
            </button>
          )}

          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            style={{
              width: 34,
              height: 34,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-default)',
              borderRadius: 6,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-strong)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-default)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <button
            onClick={() => navigate('/settings')}
            style={{
              width: 34,
              height: 34,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--accent-primary)',
              border: 'none',
              borderRadius: 6,
              color: '#fff',
              cursor: 'pointer',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-primary-hover)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent-primary)')}
          >
            <User size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}
