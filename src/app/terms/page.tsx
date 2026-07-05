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

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-ghost)', marginBottom: '32px' }}>
          Last updated: [DATE]
        </p>

        <p style={pStyle}>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Recruiting Victory&apos;s website and recruiting system (the &ldquo;Service&rdquo;). By purchasing or using the Service, you agree to these Terms. If you are under 18, a parent or guardian should review these Terms with you before purchase.
        </p>

        <h2 style={h2Style}>What the Service is</h2>
        <p style={pStyle}>
          Recruiting Victory provides a self-serve digital system — a guided recruiting profile, a college outreach tracker, and a step-by-step course — intended to help student-athletes organize and manage the college athletic recruiting process. The Service is educational and organizational in nature. It does not act as an athletic agent, and it does not contact colleges or coaches on your behalf.
        </p>

        <h2 style={h2Style}>No guaranteed outcomes</h2>
        <p style={pStyle}>
          Recruiting outcomes depend on many factors outside our control, including an athlete&apos;s ability, academic profile, timing, and each college program&apos;s individual needs. Recruiting Victory does not guarantee admission, scholarship offers, roster spots, or any other specific recruiting outcome. Examples of past student outcomes referenced on our site are provided as context, not as a promise of similar results.
        </p>

        <h2 style={h2Style}>Subscription and billing</h2>
        <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
          <li style={liStyle}>The Service is billed on a recurring basis (currently $13.99 every 4 weeks) through our payment processor, Stripe, until you cancel.</li>
          <li style={liStyle}>You may cancel at any time; cancellation takes effect at the end of the current billing period, and you will retain access until that period ends.</li>
          <li style={liStyle}>Prices are subject to change with reasonable advance notice.</li>
        </ul>

        <h2 style={h2Style}>Eligibility and accounts</h2>
        <p style={pStyle}>
          The Service is intended for student-athletes and their parents or guardians. If you are under the age of 18, you should only use the Service with the involvement and consent of a parent or guardian, including for purchase and billing.
        </p>

        <h2 style={h2Style}>Acceptable use</h2>
        <p style={pStyle}>You agree not to:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '14px' }}>
          <li style={liStyle}>Share your access to the Service with individuals who have not purchased it.</li>
          <li style={liStyle}>Copy, resell, or redistribute the contents of the system.</li>
          <li style={liStyle}>Use the Service for any unlawful purpose.</li>
        </ul>

        <h2 style={h2Style}>Intellectual property</h2>
        <p style={pStyle}>
          All content, templates, guidance, and materials provided as part of the Service are owned by Recruiting Victory and are licensed to you for personal, non-commercial use during your subscription. We retain all rights not expressly granted to you.
        </p>

        <h2 style={h2Style}>Disclaimer of warranties</h2>
        <p style={pStyle}>
          The Service is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We do not warrant that the Service will be uninterrupted, error-free, or that it will meet your specific recruiting goals.
        </p>

        <h2 style={h2Style}>Limitation of liability</h2>
        <p style={pStyle}>
          To the fullest extent permitted by law, Recruiting Victory shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service, including any recruiting outcome. Our total liability for any claim relating to the Service is limited to the amount you paid us in the 12 months preceding the claim.
        </p>

        <h2 style={h2Style}>Termination</h2>
        <p style={pStyle}>
          We may suspend or terminate your access to the Service if you violate these Terms. You may stop using the Service and cancel your subscription at any time.
        </p>

        <h2 style={h2Style}>Governing law</h2>
        <p style={pStyle}>
          These Terms are governed by the laws of the United States and the state in which Recruiting Victory operates, without regard to conflict-of-law principles.
        </p>

        <h2 style={h2Style}>Changes to these Terms</h2>
        <p style={pStyle}>
          We may update these Terms from time to time. We will update the &ldquo;Last updated&rdquo; date above when we do. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.
        </p>

        <h2 style={h2Style}>Contact us</h2>
        <p style={pStyle}>
          Questions about these Terms can be sent to{' '}
          <a href="mailto:caps@capsglobal.org" style={{ color: 'var(--accent-forest)' }}>caps@capsglobal.org</a>.
        </p>
      </div>
    </div>
  );
}
