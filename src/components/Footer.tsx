export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      padding: '48px 0',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
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
          Powered by CAPS Global
        </a>

        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-ghost)',
          letterSpacing: '0.05em',
        }}>
          caps@capsglobal.org
        </span>
      </div>
    </footer>
  );
}
