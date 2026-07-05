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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-ghost)', marginBottom: '32px' }}>
          Last updated: [DATE]
        </p>

        <p style={pStyle}>
          Recruiting Victory (&ldquo;Recruiting Victory,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides a subscription-based recruiting system for student-athletes, delivered through a digital dashboard, and operates alongside CAPS (College Athlete Placement Standard). This Privacy Policy explains what information we collect, how we use it, and the choices you have.
        </p>

        <h2 style={h2Style}>Information we collect</h2>
        <p style={pStyle}>We collect information in the following ways:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
          <li style={liStyle}><strong>Contact form submissions</strong> — when you submit the &ldquo;Tell us about your situation&rdquo; form, we collect the athlete&apos;s name, sport, country, academic and recruiting details, email address, and any other information you choose to share.</li>
          <li style={liStyle}><strong>Account and subscription information</strong> — when you purchase the system, our payment processor (Stripe) collects your name, email, and payment details. We do not store your full payment card information ourselves.</li>
          <li style={liStyle}><strong>Usage data</strong> — we use a privacy-focused analytics tool to understand aggregate site traffic (e.g., which pages are visited and from what general location), which does not identify you individually.</li>
        </ul>

        <h2 style={h2Style}>How we use information</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
          <li style={liStyle}>To provide and maintain access to the Recruiting Victory system after purchase.</li>
          <li style={liStyle}>To respond to inquiries submitted through our contact form.</li>
          <li style={liStyle}>To send service-related communications, such as billing notices or access instructions.</li>
          <li style={liStyle}>To improve our website and offerings based on aggregate usage patterns.</li>
        </ul>
        <p style={pStyle}>We do not sell your personal information.</p>

        <h2 style={h2Style}>Third-party services</h2>
        <p style={pStyle}>
          We rely on trusted third parties to operate our site and business, including Stripe (payment processing), Formspree (contact form delivery), and Vercel (hosting and site analytics). Each of these providers processes data under its own privacy policy and security practices.
        </p>

        <h2 style={h2Style}>Student athletes and parents</h2>
        <p style={pStyle}>
          Many of our users are minors. We encourage parents and guardians to review this policy and to be involved when a minor submits information through our site. We collect only the information reasonably necessary to provide our services, and we do not knowingly collect more personal information from children than is needed for that purpose. If you are a parent or guardian and believe your child has submitted information you did not intend to share, contact us using the information below and we will address it promptly.
        </p>

        <h2 style={h2Style}>Data retention</h2>
        <p style={pStyle}>
          We retain personal information for as long as reasonably necessary to provide our services, respond to inquiries, and comply with legal obligations. You may request deletion of your information at any time, as described below.
        </p>

        <h2 style={h2Style}>Your choices</h2>
        <p style={pStyle}>
          You may request access to, correction of, or deletion of your personal information at any time by emailing us at{' '}
          <a href="mailto:caps@capsglobal.org" style={{ color: 'var(--accent-forest)' }}>caps@capsglobal.org</a>. You may cancel your subscription at any time through the billing management link provided at checkout or by contacting us directly.
        </p>

        <h2 style={h2Style}>International visitors</h2>
        <p style={pStyle}>
          Recruiting Victory supports athletes worldwide. If you are located outside the United States, please note that your information will be transferred to and processed in the United States, where our service providers operate.
        </p>

        <h2 style={h2Style}>Changes to this policy</h2>
        <p style={pStyle}>
          We may update this Privacy Policy from time to time. We will update the &ldquo;Last updated&rdquo; date above when we do. Continued use of our site after changes take effect constitutes acceptance of the updated policy.
        </p>

        <h2 style={h2Style}>Contact us</h2>
        <p style={pStyle}>
          Questions about this Privacy Policy can be sent to{' '}
          <a href="mailto:caps@capsglobal.org" style={{ color: 'var(--accent-forest)' }}>caps@capsglobal.org</a>.
        </p>
      </div>
    </div>
  );
}
