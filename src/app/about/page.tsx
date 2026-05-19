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

        {/* Section A — Header */}
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
            fontSize: 'clamp(42px, 6vw, 64px)',
            color: 'var(--text-primary)',
            lineHeight: 1.05,
            marginBottom: '40px',
          }}>
            Built from the inside.
          </h1>
          <div className="fade-up" style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        {/* Section B — Founding Story */}
        <div className="fade-up" style={{ marginBottom: '80px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '17px',
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
            marginBottom: '28px',
          }}>
            Recruiting Victory was founded by a Division I athlete who was recruited by five universities within the Ivy League system. That experience — navigating a process with no clear roadmap across time zones, timelines, academic expectations, and athletic standards — became the foundation for what this platform now provides to student-athletes across all levels of collegiate sport in the United States.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '17px',
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
            marginBottom: '28px',
          }}>
            Over time, through direct work with student-athletes and partnerships with schools, a consistent pattern emerged: the athletes who struggled most were rarely lacking ability. More often, they lacked structure, timing, positioning, and informed guidance within a process that quietly rewards all four.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '17px',
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
          }}>
            Recruiting Victory was built to bring clarity and discipline to that process — helping athletes present not only their performance, but the full scope of who they are, what they value, and where they fit best.
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
            Recruiting Victory operates alongside CAPS (College Athlete Placement Standard) — an institutional framework designed to help high schools formalize and strengthen their athletic recruiting infrastructure.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: 1.85,
            color: 'var(--text-muted)',
            marginBottom: '20px',
          }}>
            While CAPS supports schools at the systems level, Recruiting Victory works directly with student-athletes and families navigating that same landscape from the individual side.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: 1.85,
            color: 'var(--text-muted)',
            marginBottom: '24px',
          }}>
            Together, they represent a connected ecosystem: institutional structure for schools, and individualized strategic guidance for athletes.
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
            Learn about CAPS →
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
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            marginBottom: '12px',
          }}>
            Sports
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: '28px',
          }}>
            Rowing · Running · Swimming · Tennis · Basketball · Soccer · Golf · Volleyball · Hockey · Field Hockey · Lacrosse · Track &amp; Field · Cross Country · Football · and others
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            marginBottom: '12px',
          }}>
            Regions
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
          }}>
            Australia · Singapore · United Arab Emirates · United Kingdom · United States · Mexico · Canada · New Zealand · Hong Kong
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
            Athletes supported through this process have gone on to engage with programs across a wide range of collegiate environments, including:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '32px',
          }}>
            {[
              'Ivy League institutions such as Yale University, Princeton University, Columbia University, Dartmouth College, and Brown University',
              'Power Four Division I programs including Stanford University, Duke University, University of Michigan, and Northwestern University',
              'Division II and III programs across multiple regions',
              'Scholarship opportunities and preferred walk-on placements',
            ].map((item) => (
              <div key={item} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
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
            These outcomes are presented as context rather than promise. Every athlete&apos;s pathway, priorities, and opportunities are different.
          </p>
        </div>

      </div>
    </div>
  );
}
