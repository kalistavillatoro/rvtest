'use client';

import { useEffect, useRef } from 'react';

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

export default function AboutPage() {
  const pageRef = useFadeUp();

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px' }}>
      <div ref={pageRef} style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section A */}
        <div style={{ marginBottom: '80px' }}>
          <div className="fade-up" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--accent-forest)',
            marginBottom: '24px',
          }}>
            About
          </div>
          <h1 className="fade-up" style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: '64px',
            color: 'var(--text-primary)',
            lineHeight: 1.05,
            marginBottom: '40px',
          }}>
            Built from the inside.
          </h1>
          <div className="fade-up" style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        {/* Section B */}
        <div className="fade-up" style={{ marginBottom: '80px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '17px',
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
            marginBottom: '28px',
          }}>
            Recruiting Victory was founded by a Division I athlete who was herself recruited internationally to compete at the Ivy League level. That experience — navigating a system with no roadmap, across borders, across sports, across admission standards that required simultaneous academic and athletic precision — became the foundation of what this platform offers.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '17px',
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
            marginBottom: '28px',
          }}>
            After six years of working directly with student-athletes and alongside high schools to understand where the process breaks down, a clear pattern emerged: the athletes who struggled were rarely under-qualified. They were under-prepared for a system that rewards structure, timing, and positioning over raw talent alone.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '17px',
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
          }}>
            Recruiting Victory exists to correct that.
          </p>
        </div>

        {/* Section C — Institutional Foundation */}
        <div className="fade-up" style={{ marginBottom: '80px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--accent-forest)',
            marginBottom: '20px',
          }}>
            Institutional Foundation
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: 1.85,
            color: 'var(--text-muted)',
            marginBottom: '20px',
          }}>
            Recruiting Victory operates in partnership with CAPS Global — the College Athlete Placement Standard — a certification and training program for high schools worldwide. Schools partner with CAPS to build and formalize their own athletic recruiting infrastructure. Recruiting Victory serves individual athletes and families navigating that same landscape from the student side. Together, they represent a complete ecosystem: institutional systems for schools, and individual advisory for athletes.
          </p>
          <a
            href="https://www.capsglobal.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: '16px',
              color: 'var(--accent-sage)',
              textDecoration: 'none',
            }}
          >
            Learn about CAPS Global →
          </a>
        </div>

        {/* Section D — Experience Across */}
        <div className="fade-up" style={{ marginBottom: '80px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--accent-forest)',
            marginBottom: '20px',
          }}>
            Experience Across
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: '12px',
          }}>
            Sports: Rowing · Athletics · Swimming · Tennis · Golf · Volleyball · and others
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
          }}>
            Regions: Australia · Singapore · UAE · United Kingdom · Canada · New Zealand · Hong Kong
          </p>
        </div>

        {/* Section E — Student Outcomes */}
        <div className="fade-up">
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--accent-forest)',
            marginBottom: '20px',
          }}>
            Student Outcomes
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            marginBottom: '24px',
          }}>
            Athletes who have moved through this process have gone on to engage with programs across:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '32px',
          }}>
            {[
              'Ivy League programs (Yale, Princeton, Columbia, Dartmouth, Brown)',
              'Power Four Division I programs (Stanford, Duke, Michigan, Northwestern)',
              'Division II & III programs across all regions',
              'Scholarship and preferred walk-on offers',
            ].map((item) => (
              <div key={item} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--text-ghost)',
                lineHeight: 1.6,
              }}>
                {item}
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '13px',
            lineHeight: 1.7,
            color: 'var(--text-ghost)',
          }}>
            These outcomes are presented as context, not as a guarantee or measure of success. Every athlete&apos;s path is individual.
          </p>
        </div>

      </div>
    </div>
  );
}
