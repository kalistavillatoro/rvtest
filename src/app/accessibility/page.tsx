const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-sans)', fontWeight: 600,
  fontSize: '22px', letterSpacing: '-0.01em',
  color: 'var(--text-primary)', marginTop: '48px', marginBottom: '14px',
};

const pStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)', fontSize: '15.5px',
  lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '14px',
};

const liStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)', fontSize: '15.5px',
  lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '8px',
};

export default function AccessibilityPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: 'clamp(120px, 18vh, 170px)', paddingBottom: '120px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '12px',
          textTransform: 'uppercase', letterSpacing: '0.16em',
          color: 'var(--accent-forest)', marginBottom: '20px',
        }}>
          Legal
        </div>
        <h1 style={{
          fontFamily: 'var(--font-sans)', fontWeight: 600,
          fontSize: 'clamp(32px, 4.5vw, 44px)', letterSpacing: '-0.02em',
          color: 'var(--text-primary)', marginBottom: '12px',
        }}>
          Accessibility Statement
        </h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-ghost)', marginBottom: '32px' }}>
          Last updated: [DATE]
        </p>

        <p style={pStyle}>
          Recruiting Victory is committed to making our website usable by as many people as possible, including student-athletes and parents using assistive technology.
        </p>

        <h2 style={h2Style}>Our approach</h2>
        <p style={pStyle}>We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. In practice, that includes:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
          <li style={liStyle}>Sufficient color contrast between text and background.</li>
          <li style={liStyle}>Keyboard-navigable menus, links, and form fields.</li>
          <li style={liStyle}>Descriptive text alternatives for meaningful images.</li>
          <li style={liStyle}>Clear, consistent page structure and navigation across the site.</li>
        </ul>

        <h2 style={h2Style}>Known limitations</h2>
        <p style={pStyle}>
          Accessibility is an ongoing effort. Some decorative photography and dashboard screenshots on this site are marked as decorative for assistive technology, and some third-party tools we rely on (such as our payment processor&apos;s checkout page) are outside our direct control, though we choose providers with strong accessibility practices.
        </p>

        <h2 style={h2Style}>Feedback</h2>
        <p style={pStyle}>
          If you experience any difficulty accessing content on this site, please let us know. We take accessibility feedback seriously and will work to address reported issues.
        </p>
        <p style={pStyle}>
          Email us at{' '}
          <a href="mailto:caps@capsglobal.org" style={{ color: 'var(--accent-forest)' }}>caps@capsglobal.org</a>{' '}
          and describe the issue, the page you were on, and the browser or assistive technology you were using. We will respond and aim to resolve accessibility issues promptly.
        </p>
      </div>
    </div>
  );
}
