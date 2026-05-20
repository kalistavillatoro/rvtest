export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      padding: '48px 0 36px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 48px',
      }}
      className="footer-inner"
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            color: 'var(--text-ghost)',
            letterSpacing: '0.1em',
          }}>
            Recruiting Victory
          </span>

          <a
            href="https://www.capsglobal.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: '12px',
              color: 'var(--text-ghost)',
              textDecoration: 'none',
            }}
          >
            Powered by CAPS (College Athlete Placement Standard)
          </a>

          <a
            href="mailto:caps@capsglobal.org"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-ghost)',
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
          >
            caps@capsglobal.org
          </a>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '20px',
          textAlign: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.12em',
            color: 'var(--text-ghost)',
            opacity: 0.7,
          }}>
            <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            {' · '}
            <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
            {' · '}
            <a href="/accessibility" style={{ color: 'inherit', textDecoration: 'none' }}>Accessibility Statement</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
