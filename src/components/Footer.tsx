import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      padding: '48px 0 36px',
    }}>
      <div
        style={{
          maxWidth: '1040px',
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
          marginBottom: '28px',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            letterSpacing: '0.12em',
          }}>
            Recruiting Victory
          </span>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/offerings" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)' }}>
              Inside the System
            </Link>
            <Link href="/about" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)' }}>
              About
            </Link>
            <Link href="/apply" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)' }}>
              Contact
            </Link>
            <a
              href="https://www.instagram.com/recruitingvictory"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)' }}
            >
              Instagram
            </a>
          </div>

          <a
            href="https://www.capsglobal.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: 'var(--text-ghost)',
            }}
          >
            Powered by CAPS (College Athlete Placement Standard)
          </a>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'var(--text-ghost)',
          }}>
            <a href="/privacy" style={{ color: 'inherit' }}>Privacy Policy</a>
            {' · '}
            <a href="/terms" style={{ color: 'inherit' }}>Terms of Service</a>
            {' · '}
            <a href="/accessibility" style={{ color: 'inherit' }}>Accessibility</a>
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.05em',
            color: 'var(--text-ghost)',
          }}>
            © 2026 Recruiting Victory
          </span>
        </div>
      </div>
    </footer>
  );
}
