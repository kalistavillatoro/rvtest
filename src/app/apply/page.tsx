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
  fontWeight: 300,
  fontSize: '15px',
  backgroundColor: 'var(--bg-input)',
  border: '1px solid var(--border-input)',
  color: 'var(--text-primary)',
  padding: '14px 16px',
  borderRadius: 0,
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

function FocusSelect({ options, name, required = false }: { options: string[]; name: string; required?: boolean }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      name={name}
      required={required}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      defaultValue=""
      style={{
        ...inputStyle,
        borderColor: focused ? 'var(--accent-forest)' : 'var(--border-input)',
        transition: 'border-color 0.2s ease',
        appearance: 'none',
        cursor: 'pointer',
      }}
    >
      <option value="" disabled>Select...</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
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
            Application Received
          </span>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: '52px',
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
            Application
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: '52px',
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '28px',
          }}>
            Apply for access.
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '15px',
            lineHeight: 1.85,
            color: 'var(--text-muted)',
            maxWidth: '320px',
            marginBottom: '40px',
          }}>
            Tell us a little about your situation. Applications are reviewed individually — there&apos;s no purchase at this stage. If accepted, you&apos;ll receive access to the full Recruiting Victory System.
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
          backgroundColor: 'var(--bg-secondary)',
          padding: '48px',
          border: '1px solid var(--border)',
          borderRadius: 0,
        }}>
          <form onSubmit={handleSubmit}>

            <FormField label="Athlete's full name">
              <FocusInput name="athlete_name" required />
            </FormField>

            <FormField label="Country of residence">
              <FocusInput name="country" required />
            </FormField>

            <FormField label="Sport">
              <FocusInput name="sport" required />
            </FormField>

            <FormField label="High school graduation year">
              <FocusSelect
                name="graduation_year"
                required
                options={['2026', '2027', '2028', '2029', '2030', '2031', '2032', 'Post-grad']}
              />
            </FormField>

            <FormField
              label="Current school (optional)"
              subLabel="We use this to understand your current environment, not to contact your school."
            >
              <FocusInput name="current_school" />
            </FormField>

            <FormField label="Academic pathway">
              <FocusSelect
                name="academic_pathway"
                required
                options={[
                  'Strong academic focus',
                  'Balanced athlete-academic',
                  'Athletic-primary',
                  'Unsure',
                ]}
              />
            </FormField>

            <FormField label="Where are you in the recruiting process?">
              <FocusSelect
                name="recruiting_stage"
                required
                options={[
                  "Haven't started",
                  'Early research stage',
                  'Actively reaching out',
                  'In conversations with coaches',
                  'Other',
                ]}
              />
            </FormField>

            <FormField label="Brief athletic background">
              <FocusTextarea
                name="athletic_background"
                required
                rows={3}
                placeholder="Level competed, notable results, current training environment."
              />
            </FormField>

            <FormField label="What would a meaningful outcome look like?">
              <FocusTextarea
                name="meaningful_outcome"
                required
                rows={3}
                placeholder="There is no right answer. We use this to understand what you're working toward."
              />
            </FormField>

            <FormField label="Email address">
              <FocusInput name="email" type="email" required />
            </FormField>

            <FormField label="Parent / guardian name (optional)">
              <FocusInput name="guardian_name" />
            </FormField>

            <FormField label="How did you hear about Recruiting Victory? (optional)">
              <FocusInput name="referral_source" />
            </FormField>

            <button
              type="submit"
              disabled={status === 'submitting'}
              onMouseEnter={() => setSubmitHovered(true)}
              onMouseLeave={() => setSubmitHovered(false)}
              style={{
                display: 'block',
                width: '100%',
                backgroundColor: submitHovered ? 'var(--accent-sage)' : 'var(--text-primary)',
                color: 'var(--bg-primary)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '12px',
                letterSpacing: '0.16em',
                padding: '16px',
                textTransform: 'uppercase',
                border: 'none',
                borderRadius: 0,
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                opacity: status === 'submitting' ? 0.7 : 1,
                transition: 'background-color 0.3s ease',
                marginBottom: '20px',
              }}
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
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
                Something went wrong. Please try again or email us directly at caps@capsglobal.org
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
              Submitting this form is not a purchase or commitment. We review every application before recommending a next step.
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}
