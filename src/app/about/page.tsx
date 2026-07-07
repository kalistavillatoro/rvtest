'use client';

import { useEffect, useRef } from 'react';
import { STRIPE_CHECKOUT_URL } from '@/lib/site';

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
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: 'clamp(120px, 18vh, 170px)', paddingBottom: 'clamp(80px, 12vw, 140px)' }}>
      <div ref={pageRef} style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div className="fade-up" style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: 'var(--accent-forest)', marginBottom: '20px',
          }}>
            About
          </div>
          <h1 className="fade-up" data-delay="80" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(36px, 5.5vw, 54px)', letterSpacing: '-0.025em',
            color: 'var(--text-primary)', lineHeight: 1.08, marginBottom: '32px',
          }}>
            Built from experience.
          </h1>
          <div className="divider-animated" data-delay="160" />
        </div>

        {/* Origin */}
        <div style={{ marginBottom: '72px' }}>
          <p className="fade-up" style={{
            fontFamily: 'var(--font-sans)', fontSize: '17px',
            lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '24px',
          }}>
            Recruiting Victory was founded by a Yale Division I athlete, recruited to Yale alongside offers from four other universities. That process, navigated across time zones, timelines, and competing academic and athletic expectations, was never as clear as it should have been.
          </p>
          <p className="fade-up" data-delay="80" style={{
            fontFamily: 'var(--font-sans)', fontSize: '17px',
            lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '24px',
          }}>
            The athletes who struggle most aren&apos;t struggling because of ability. They&apos;re struggling because they don&apos;t have a system — no clear profile, no organized outreach, no step-by-step plan.
          </p>
          <p className="fade-up" data-delay="160" style={{
            fontFamily: 'var(--font-sans)', fontSize: '17px',
            lineHeight: 1.8, color: 'var(--text-secondary)',
          }}>
            Recruiting Victory was built to fix exactly that.
          </p>
        </div>

        {/* Credibility */}
        <div className="divider-animated" style={{ marginBottom: '48px' }} />
        <div style={{ marginBottom: '72px' }}>
          <div className="fade-up" style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: 'var(--accent-forest)', marginBottom: '24px',
          }}>
            Foundation
          </div>
          <div className="fade-up" data-delay="80" style={{ display: 'grid', gap: '20px' }}>
            {[
              { title: 'A Yale athlete’s playbook', body: 'Our founder’s own recruiting journey to Yale, and later experience refining this system through Yale’s Tsai City innovation program, shaped the structure behind Recruiting Victory.' },
              { title: 'Built on CAPS', body: 'Recruiting Victory is built on CAPS (College Athlete Placement Standard), a framework developed from real recruiting experience and refined with every family we’ve worked with.' },
            ].map((item) => (
              <div key={item.title} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '28px',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 600,
                  fontSize: '17px', color: 'var(--text-primary)', marginBottom: '8px',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '15px',
                  lineHeight: 1.7, color: 'var(--text-muted)',
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Outcomes */}
        <div className="divider-animated" style={{ marginBottom: '48px' }} />
        <div style={{ marginBottom: '72px' }}>
          <div className="fade-up" style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: 'var(--accent-forest)', marginBottom: '24px',
          }}>
            Student Outcomes
          </div>
          <div className="fade-up" data-delay="80" style={{ display: 'grid', gap: '16px', marginBottom: '28px' }}>
            {[
              {
                name: 'International athlete',
                tag: 'From India',
                result: 'Offers from Yale, Princeton, and Stanford, plus 4 other Ivy League programs',
                note: 'Navigated the full process successfully across time zones.',
              },
              {
                name: 'Twin athletes',
                tag: 'Recruiting simultaneously',
                result: '7 combined offers — both committed to Northwestern University',
                note: 'Recruiting Victory handled the added complexity of two athletes recruiting at once.',
              },
              {
                name: 'Late starter',
                tag: 'First outreach senior year',
                result: 'D1 and Ivy League offers — committed to Duke University',
                note: 'Began the process with no prior outreach. Recruiting Victory enabled a full late-stage recruiting campaign.',
              },
              {
                name: 'Overcame injury',
                tag: 'Mid-recruiting setback',
                result: 'Offer from UC Irvine — D1 program',
                note: 'Recruiting Victory helped navigate injury disclosure and sustained coach communication successfully.',
              },
            ].map((item) => (
              <div key={item.name} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '24px 28px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '16px', color: 'var(--text-primary)' }}>
                    {item.name}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-ghost)', letterSpacing: '0.04em' }}>
                    {item.tag}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '15px', color: 'var(--accent-forest)', marginBottom: '6px', lineHeight: 1.5 }}>
                  {item.result}
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
          <p className="fade-up" data-delay="140" style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: 'var(--text-ghost)', marginBottom: '10px',
          }}>
            Athletes admitted at
          </p>
          <p className="fade-up" data-delay="180" style={{
            fontFamily: 'var(--font-sans)', fontSize: '14.5px',
            lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px',
          }}>
            Yale · Princeton · Stanford · Columbia · Duke · Dartmouth · Cornell · Brown · Northwestern · UC Irvine · Michigan State · and more
          </p>
          <p className="fade-up" data-delay="220" style={{
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            lineHeight: 1.7, color: 'var(--text-ghost)',
          }}>
            Outcomes are context, not a guarantee. Every athlete&apos;s situation, sport, and goals are different.
          </p>
        </div>

        {/* CTA */}
        <div className="fade-up" style={{ textAlign: 'center', paddingTop: '16px' }}>
          <a href={STRIPE_CHECKOUT_URL} className="btn-primary">
            Get the System
          </a>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '13.5px', fontWeight: 500,
            color: 'var(--text-muted)', marginTop: '14px',
          }}>
            $13.99 every 4 weeks · Cancel anytime
          </p>
        </div>

      </div>
    </div>
  );
}
