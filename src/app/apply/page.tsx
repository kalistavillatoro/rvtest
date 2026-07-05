'use client';

import { useState } from 'react';

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  color: 'var(--text-muted)',
  marginBottom: '8px',
};

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  fontFamily: 'var(--font-sans)',
  fontWeight: 400,
  fontSize: '15px',
  backgroundColor: 'var(--bg-input)',
  border: '1px solid var(--border-input)',
  color: 'var(--text-primary)',
  padding: '14px 16px',
  borderRadius: 8,
  outline: 'none',
  boxSizing: 'border-box',
};

function FormField({
  label,
  children,
  subLabel,
}: {
  label: string;
  children: React.ReactNode;
  subLabel?: string;
}) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <label style={labelStyle}>{label}</label>
      {children}
      {subLabel && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 300,
          fontSize: '12px',
          color: 'var(--text-ghost)',
          marginTop: '8px',
          lineHeight: 1.5,
        }}>
          {subLabel}
        </p>
      )}
    </div>
  );
}

function FocusInput({ type = 'text', name, required = false }: { type?: string; name: string; required?: boolean }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      name={name}
      required={required}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        borderColor: focused ? 'var(--accent-forest)' : 'var(--border-input)',
        transition: 'border-color 0.2s ease',
      }}
    />
  );
}

function FocusTextarea({ rows = 3, placeholder = '', name, required = false }: { rows?: number; placeholder?: string; name: string; required?: boolean }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      rows={rows}
      name={name}
      required={required}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        borderColor: focused ? 'var(--accent-forest)' : 'var(--border-input)',
        transition: 'border-color 0.2s ease',
        resize: 'vertical',
        lineHeight: 1.6,
      }}
    />
  );
}

export default function ApplyPage() {
  const [submitHovered, setSubmitHovered] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xnjrjwvn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        backgroundColor: 'var(--bg-primary)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--accent-forest)',
            display: 'block',
            marginBottom: '24px',
          }}>
            Message Received
          </span>
          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '48px',
            color: 'var(--text-primary)',
            marginBottom: '24px',
            lineHeight: 1.1,
          }}>
            Thank you.
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '16px',
            color: 'var(--text-muted)',
            lineHeight: 1.85,
          }}>
            We review every submission personally and will respond within 3–5 business days with a recommended next step.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: 'clamp(80px, 15vw, 120px)', paddingBottom: 'clamp(60px, 10vw, 120px)' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="apply-grid"
      >

        {/* Left Column */}
        <div className="apply-left-col" style={{ position: 'sticky', top: '140px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--accent-forest)',
            marginBottom: '24px',
          }}>
            Contact
          </div>
          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: 'clamp(36px, 5vw, 48px)',
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)',
            lineHeight: 1.08,
            marginBottom: '28px',
          }}>
            Tell us about
            <br />
            your situation.
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            maxWidth: '320px',
            marginBottom: '40px',
          }}>
            Have questions before getting the system, or interested in individual advisory support? Share a little about your athlete and we&apos;ll respond within 3–5 business days with a recommended next step.
          </p>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--text-ghost)',
          }}>
            Recruiting Victory · Powered by CAPS (College Athlete Placement Standard)
          </div>
        </div>

        {/* Right Column — Form */}
        <div className="apply-form-box" style={{
          backgroundColor: 'var(--bg-card)',
          padding: '48px',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-card)',
        }}>
          <form onSubmit={handleSubmit}>

            <FormField label="Name">
              <FocusInput name="name" required />
            </FormField>

            <FormField label="Email address">
              <FocusInput name="email" type="email" required />
            </FormField>

            <FormField label="Sport & graduation year">
              <FocusInput name="sport_and_year" required />
            </FormField>

            <FormField label="What's your question or situation?">
              <FocusTextarea
                name="message"
                required
                rows={4}
                placeholder="Ask us anything — where you are in the process, whether the system fits, or anything else."
              />
            </FormField>

            <button
              type="submit"
              disabled={status === 'submitting'}
              onMouseEnter={() => setSubmitHovered(true)}
              onMouseLeave={() => setSubmitHovered(false)}
              style={{
                display: 'block',
                width: '100%',
                backgroundColor: submitHovered ? 'var(--accent-forest-dark)' : 'var(--accent-forest)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '15px',
                letterSpacing: '0.01em',
                padding: '16px',
                border: 'none',
                borderRadius: '10px',
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                opacity: status === 'submitting' ? 0.7 : 1,
                transition: 'background-color 0.3s ease',
                marginBottom: '20px',
              }}
            >
              {status === 'submitting' ? 'Submitting...' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '13px',
                color: '#C17B7B',
                textAlign: 'center',
                marginBottom: '12px',
              }}>
                Something went wrong. Please try again in a moment.
              </p>
            )}

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: '12px',
              color: 'var(--text-ghost)',
              textAlign: 'center',
              lineHeight: 1.6,
            }}>
              Sending this form is not a purchase or commitment. We read every message and respond personally.
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}
