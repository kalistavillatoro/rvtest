'use client';

import { useEffect, useRef } from 'react';

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

export default function AboutPage() {
  const pageRef = useFadeUp();

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: 'clamp(80px, 15vw, 120px)', paddingBottom: 'clamp(80px, 12vw, 140px)' }}>
      <div ref={pageRef} style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '72px' }}>
          <div className="fade-up" data-delay="0" style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'var(--accent-forest)', marginBottom: '24px',
          }}>
            About
          </div>
          <h1 className="fade-up heading-interactive" data-delay="80" style={{
            fontFamily: 'var(--font-serif)', fontWeight: 300,
            fontSize: 'clamp(42px, 6vw, 64px)',
            color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '40px',
          }}>
            Built from experience.
          </h1>
          <div className="divider-animated" data-delay="180" />
        </div>

        {/* Origin */}
        <div style={{ marginBottom: '80px' }}>
          <p className="fade-up" data-delay="0" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '17px', lineHeight: 1.85,
            color: 'var(--text-secondary)', marginBottom: '28px',
          }}>
            Recruiting Victory was built by a Division I athlete who was recruited by five universities — including programs within the Ivy League. That process, navigated across time zones, timelines, and competing academic and athletic expectations, was never as clear as it should have been.
          </p>
          <p className="fade-up" data-delay="100" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '17px', lineHeight: 1.85,
            color: 'var(--text-secondary)', marginBottom: '28px',
          }}>
            What became clear over time was that the athletes who struggled most weren&apos;t struggling because of ability. They were struggling because they didn&apos;t have a system. No clear profile. No organized outreach. No step-by-step plan.
          </p>
          <p className="fade-up" data-delay="180" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '17px', lineHeight: 1.85,
            color: 'var(--text-secondary)',
          }}>
            The Recruiting Victory System was built to solve exactly that — to give student-athletes the structure, organization, and guidance they need to move through recruiting with clarity and confidence.
          </p>
        </div>

        {/* CAPS */}
        <div className="divider-animated" data-delay="0" style={{ marginBottom: '56px' }} />
        <div style={{ marginBottom: '80px' }}>
          <div className="fade-up" data-delay="60" style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'var(--accent-forest)', marginBottom: '20px',
          }}>
            Institutional foundation
          </div>
          <p className="fade-up" data-delay="140" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '16px', lineHeight: 1.85,
            color: 'var(--text-muted)', marginBottom: '20px',
          }}>
            Recruiting Victory operates alongside CAPS (College Athlete Placement Standard) — an institutional framework designed to help high schools formalize and strengthen their athletic recruiting infrastructure.
          </p>
          <p className="fade-up" data-delay="200" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '16px', lineHeight: 1.85,
            color: 'var(--text-muted)', marginBottom: '20px',
          }}>
            While CAPS works at the school and systems level, Recruiting Victory works directly with student-athletes and families — giving individuals the same structure that the best-prepared programs already have in place.
          </p>
          <a className="fade-up" data-delay="260"
            href="https://www.capsglobal.org" target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300,
              fontSize: '15px', color: 'var(--accent-sage)',
              display: 'inline-block', transition: 'opacity 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            Learn about CAPS →
          </a>
        </div>

        {/* Yale */}
        <div className="divider-animated" data-delay="0" style={{ marginBottom: '56px' }} />
        <div style={{ marginBottom: '80px' }}>
          <div className="fade-up" data-delay="60" style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'var(--accent-forest)', marginBottom: '20px',
          }}>
            Development
          </div>
          <p className="fade-up" data-delay="140" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '16px', lineHeight: 1.85,
            color: 'var(--text-muted)',
          }}>
            The system was developed with support from Yale Tsai City Innovation — a program focused on building tools and solutions to real, clearly-defined problems. Recruiting Victory began there as an answer to a straightforward question: why don&apos;t student-athletes have a simple, organized system for this?
          </p>
        </div>

        {/* Track record */}
        <div className="divider-animated" data-delay="0" style={{ marginBottom: '56px' }} />
        <div>
          <div className="fade-up" data-delay="60" style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'var(--accent-forest)', marginBottom: '20px',
          }}>
            Track record
          </div>
          <p className="fade-up" data-delay="120" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '15px', lineHeight: 1.8,
            color: 'var(--text-muted)', marginBottom: '24px',
          }}>
            Athletes supported through this process have gone on to compete at programs across all levels of collegiate sport, including:
          </p>
          <div className="fade-up outcomes-grid" data-delay="180" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '16px', marginBottom: '32px',
          }}>
            {[
              'Ivy League institutions including Yale, Princeton, Columbia, Dartmouth, and Brown',
              'Power Four Division I programs including Stanford, Duke, Michigan, and Northwestern',
              'Division II and III programs across multiple regions and sports',
              'Scholarship placements and preferred walk-on offers',
            ].map((item) => (
              <div key={item} style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                color: 'var(--text-ghost)', lineHeight: 1.6,
              }}>
                {item}
              </div>
            ))}
          </div>
          <p className="fade-up" data-delay="260" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '13px', lineHeight: 1.7, color: 'var(--text-ghost)',
          }}>
            These outcomes are context, not a guarantee. Every athlete&apos;s situation, sport, and goals are different.
          </p>
        </div>

      </div>
    </div>
  );
}
