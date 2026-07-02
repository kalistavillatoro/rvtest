'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay') || '0');
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    el.querySelectorAll('.fade-up, .divider-animated').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ApplyButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href="/apply" style={{ textDecoration: 'none' }}>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          border: `1px solid ${hovered ? 'var(--accent-forest)' : 'var(--accent-sage)'}`,
          backgroundColor: hovered ? 'var(--accent-forest)' : 'transparent',
          color: hovered ? 'var(--text-primary)' : 'var(--accent-sage)',
          fontFamily: 'var(--font-sans)', fontWeight: 500,
          fontSize: '12px', letterSpacing: '0.16em',
          padding: '14px 36px', textTransform: 'uppercase',
          cursor: 'pointer', transition: 'all 0.3s ease', borderRadius: 0,
        }}
      >
        Apply for Access
      </button>
    </Link>
  );
}

const parts = [
  {
    num: '01',
    name: 'My Profile',
    what: 'A guided spreadsheet where you enter your recruiting information — stats, academic records, video links, contact details, and anything else a college coach needs to evaluate you.',
    how: 'The spreadsheet includes embedded guidance and best practices at each step. You don\'t need to know what colleges want. The profile walks you through it.',
    outcome: 'You finish with a complete, organized recruiting profile that\'s ready to share with any school.',
  },
  {
    num: '02',
    name: 'My Colleges',
    what: 'A tracking system for your college list and outreach. You organize target schools, log communication with coaches, and use built-in email templates to make sure your outreach is clear and professional.',
    how: 'The tracker keeps follow-ups visible so nothing falls through the cracks. Every coach conversation lives in one place, with a clear record of where each school stands.',
    outcome: 'You stay organized and consistent — the two things most athletes aren\'t.',
  },
  {
    num: '03',
    name: 'The Course',
    what: 'A step-by-step guide that teaches you the full recruiting process from start to finish. It covers what to do, when to do it, and why each step matters.',
    how: 'The Course is designed to support everything else in the system. When you\'re not sure what to do next, the Course tells you. It removes the guesswork entirely.',
    outcome: 'You always know your next step — and the reasoning behind it.',
  },
];

export default function OfferingsPage() {
  const pageRef = useFadeUp();

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: 'clamp(80px, 15vw, 120px)', paddingBottom: 'clamp(80px, 12vw, 140px)' }}>
      <div ref={pageRef} style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '72px' }}>
          <div className="fade-up" data-delay="0" style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'var(--accent-forest)', marginBottom: '24px',
          }}>
            The System
          </div>
          <h1 className="fade-up heading-interactive" data-delay="80" style={{
            fontFamily: 'var(--font-serif)', fontWeight: 300,
            fontSize: 'clamp(40px, 5vw, 60px)',
            color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '32px',
          }}>
            Everything in one place.
          </h1>
          <p className="fade-up" data-delay="160" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '17px', lineHeight: 1.85,
            color: 'var(--text-muted)', maxWidth: '560px', marginBottom: '40px',
          }}>
            The Recruiting Victory System is three tools built to work together. A profile. A college tracker. A course. Together, they give you structure, organization, and a clear plan — from your first outreach to your final decision.
          </p>
          <div className="divider-animated" data-delay="220" />
        </div>

        {/* The 3 Parts — detailed */}
        {parts.map((part, idx) => (
          <div key={part.num}>
            <div style={{ padding: '56px 0' }}>
              <div className="fade-up" data-delay="0" style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                textTransform: 'uppercase', letterSpacing: '0.14em',
                color: 'var(--text-ghost)', marginBottom: '12px',
              }}>
                {part.num}
              </div>
              <h2 className="fade-up heading-interactive" data-delay="60" style={{
                fontFamily: 'var(--font-serif)', fontWeight: 400,
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                color: 'var(--text-primary)', marginBottom: '28px', lineHeight: 1.15,
              }}>
                {part.name}
              </h2>

              <div className="fade-up" data-delay="120" style={{ marginBottom: '20px' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  textTransform: 'uppercase', letterSpacing: '0.14em',
                  color: 'var(--accent-forest)', marginBottom: '10px',
                }}>What it is</p>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 300,
                  fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)',
                }}>
                  {part.what}
                </p>
              </div>

              <div className="fade-up" data-delay="180" style={{ marginBottom: '28px' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  textTransform: 'uppercase', letterSpacing: '0.14em',
                  color: 'var(--accent-forest)', marginBottom: '10px',
                }}>How it works</p>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 300,
                  fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)',
                }}>
                  {part.how}
                </p>
              </div>

              <div className="fade-up" data-delay="240" style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: 'var(--accent-sage)', letterSpacing: '0.06em',
                borderLeft: '2px solid var(--accent-forest)',
                paddingLeft: '16px',
              }}>
                → {part.outcome}
              </div>
            </div>
            {idx < parts.length - 1 && (
              <div className="divider-animated" data-delay="0" />
            )}
          </div>
        ))}

        {/* CTA */}
        <div className="divider-animated" data-delay="0" style={{ marginBottom: '72px' }} />
        <div className="fade-up" data-delay="0" style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '16px', lineHeight: 1.85,
            color: 'var(--text-muted)', maxWidth: '460px',
            margin: '0 auto 40px',
          }}>
            Access to the system is application-based. We review every submission individually before providing access.
          </p>
          <ApplyButton />
        </div>

      </div>
    </div>
  );
}
