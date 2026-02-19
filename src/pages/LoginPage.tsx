import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function LoginPage() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your credentials.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('ji-auth', 'true');
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-base)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        position: 'relative',
      }}
    >
      <button
        onClick={toggleTheme}
        title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
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
        }}
      >
        {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
      </button>

      <div className="animate-slide-up" style={{ width: '100%', maxWidth: 420 }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: 'var(--accent-primary)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}
          >
            <span style={{ color: '#fff', fontSize: 16, fontWeight: 700, letterSpacing: '-0.5px' }}>JI</span>
          </div>
          <h1
            style={{
              margin: '0 0 8px',
              fontSize: 22,
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.3px',
            }}
          >
            Executive Intelligence Access
          </h1>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--text-tertiary)' }}>
            Restricted to authorized executive personnel
          </p>
        </div>

        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-default)',
            borderRadius: 12,
            padding: '36px 36px 32px',
            boxShadow: 'var(--shadow-elevated)',
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="executive@organization.com"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 7,
                  color: 'var(--text-primary)',
                  fontSize: 14,
                  outline: 'none',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent-primary)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border-default)')}
              />
            </div>

            <div style={{ marginBottom: 28 }}>
              <label
                style={{
                  display: 'block',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 7,
                  color: 'var(--text-primary)',
                  fontSize: 14,
                  outline: 'none',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent-primary)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border-default)')}
              />
            </div>

            {error && (
              <p style={{ margin: '-12px 0 20px', fontSize: 12, color: 'var(--status-action)' }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                background: loading ? 'var(--text-muted)' : 'var(--accent-primary)',
                border: 'none',
                borderRadius: 7,
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
                letterSpacing: '0.01em',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'var(--accent-primary-hover)'; }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--accent-primary)'; }}
            >
              {loading ? 'Authenticating...' : 'Access Control Tower'}
            </button>
          </form>
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: 28,
            fontSize: 11,
            color: 'var(--text-muted)',
            letterSpacing: '0.02em',
          }}
        >
          JavisOne &nbsp;·&nbsp; Executive Intelligence Platform
        </p>
      </div>
    </div>
  );
}
