'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const fadeEls = el.querySelectorAll('.fade-up');
    fadeEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

function OutlinedButton({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          border: `1px solid ${hovered ? 'var(--accent-forest)' : 'var(--accent-sage)'}`,
          backgroundColor: hovered ? 'var(--accent-forest)' : 'transparent',
          color: hovered ? 'var(--text-primary)' : 'var(--accent-sage)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          fontSize: '12px',
          letterSpacing: '0.16em',
          padding: '14px 36px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          borderRadius: 0,
        }}
      >
        {label}
      </button>
    </Link>
  );
}

const levels = [
  {
    label: 'Orientation',
    title: 'Foundational Resources',
    text: 'Self-guided tools designed to help families understand the recruiting process, timelines, and expectations. This level is intended for early-stage athletes who are beginning to explore college recruiting and want clarity before engaging in direct support.',
  },
  {
    label: 'Guided Progression',
    title: 'Small-Group Cohorts',
    text: 'Advisor-led cohorts of athletes progressing through the recruiting cycle together. Each cohort includes structured sessions, shared milestones, and individualized feedback. Some cohorts are organized by sport or recruiting profile when appropriate.',
  },
  {
    label: 'Acceleration',
    title: 'Private Advisory',
    text: 'One-to-one strategic support for athletes and families requiring a fully individualized recruiting plan. This includes positioning, outreach strategy, profile development, school targeting, communication support, and ongoing decision guidance through the commitment process. Availability is intentionally limited.',
  },
];

export default function OfferingsPage() {
  const pageRef = useFadeUp();

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px' }}>
      <div ref={pageRef} style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="fade-up" style={{ marginBottom: '16px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--accent-forest)',
            marginBottom: '24px',
          }}>
            How We Work
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(40px, 5vw, 60px)',
            color: 'var(--text-primary)',
            lineHeight: 1.05,
            marginBottom: '40px',
          }}>
            Support that fits where you are.
          </h1>
        </div>

        {/* Framing statement */}
        <p className="fade-up" style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 300,
          fontSize: '17px',
          lineHeight: 1.85,
          color: 'var(--text-muted)',
          maxWidth: '580px',
          marginBottom: '48px',
        }}>
          Support is structured across three levels. Each athlete is evaluated individually before a recommended level of support is made, based on sport, timeline, and recruiting readiness.
        </p>

        {/* Separator */}
        <div className="fade-up" style={{ borderTop: '1px solid var(--border)', marginBottom: '32px' }} />

        {/* Important sentence */}
        <div className="fade-up" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--text-ghost)',
          textAlign: 'center',
          margin: '0 0 48px',
        }}>
          We do not assign families to programs. Every recommendation is made through an individual review process.
        </div>

        {/* Three Levels */}
        {levels.map((level, idx) => (
          <div key={level.label}>
            <div className="fade-up" style={{ padding: '48px 0' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--accent-forest)',
                marginBottom: '16px',
              }}>
                {level.label}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                fontSize: '34px',
                color: 'var(--text-primary)',
                marginBottom: '20px',
                lineHeight: 1.15,
              }}>
                {level.title}
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.85,
                color: 'var(--text-muted)',
                maxWidth: '560px',
              }}>
                {level.text}
              </p>
            </div>
            {idx < levels.length - 1 && (
              <div style={{ borderTop: '1px solid var(--border)' }} />
            )}
          </div>
        ))}

        {/* Closing */}
        <div className="fade-up" style={{ paddingTop: '120px', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: 1.85,
            color: 'var(--text-muted)',
            maxWidth: '480px',
            margin: '0 auto 40px',
          }}>
            All families begin by submitting an application. Following review, we recommend the level of support that best fits the athlete&apos;s current stage and goals.
          </p>
          <OutlinedButton href="/apply" label="Submit an Application" />
        </div>

      </div>
    </div>
  );
}
