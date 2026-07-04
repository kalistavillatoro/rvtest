'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
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

const steps = [
  {
    num: '1',
    title: 'Build your profile',
    body: 'Enter your stats, academics, and highlights into a guided profile that coaches instantly understand.',
  },
  {
    num: '2',
    title: 'Reach your colleges',
    body: 'Organize your target schools and contact coaches with proven templates — every conversation tracked in one place.',
  },
  {
    num: '3',
    title: 'Follow your plan',
    body: 'A step-by-step guide tells you exactly what to do and when — from your first email to your commitment.',
  },
];

const outcomes = [
  { title: 'A profile coaches understand', body: 'Everything a college coach needs to evaluate you, organized in one place.' },
  { title: 'An organized college list', body: 'Your target schools, tracked from first contact to offer.' },
  { title: 'Templates for every email', body: 'Never stare at a blank message to a coach again.' },
  { title: 'A plan for the whole process', body: 'Know your next step at every stage of recruiting.' },
];

export default function HomePage() {
  const pageRef = useFadeUp();

  return (
    <div ref={pageRef} style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* ═══════════════════════════════════════════
          HERO — one idea: recruiting, made simple
      ═══════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(140px, 20vh, 200px) 24px clamp(48px, 6vw, 72px)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="fade-up" data-delay="0" style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: 'var(--accent-forest)', marginBottom: '28px',
          }}>
            College Athletic Recruiting
          </div>
          <h1 className="fade-up" data-delay="80" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(40px, 6.5vw, 68px)',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)', lineHeight: 1.05,
            marginBottom: '28px',
          }}>
            Recruiting, finally
            <br />
            made simple.
          </h1>
          <p className="fade-up" data-delay="160" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 400,
            fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.6,
            color: 'var(--text-muted)', maxWidth: '560px',
            margin: '0 auto 40px',
          }}>
            One complete system that shows student-athletes exactly how to get recruited — build your profile, reach the right coaches, and always know your next step.
          </p>
          <div className="fade-up hero-ctas" data-delay="240" style={{
            display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center',
          }}>
            <a href={STRIPE_CHECKOUT_URL} className="btn-primary">
              Get the System
            </a>
            <Link href="/offerings" className="btn-secondary">
              See what&apos;s inside →
            </Link>
          </div>
          <p className="fade-up" data-delay="300" style={{
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            color: 'var(--text-ghost)', marginTop: '20px',
          }}>
            Every sport · Every level · U.S. &amp; international athletes
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCT SHOT — show, don't tell
      ═══════════════════════════════════════════ */}
      <section style={{ padding: '0 24px clamp(64px, 8vw, 104px)' }}>
        <div className="fade-up" data-delay="100" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="screenshot-frame">
            <div className="frame-bar">
              <span className="frame-dot" /><span className="frame-dot" /><span className="frame-dot" />
            </div>
            <div style={{
              aspectRatio: '16/9',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: 'var(--bg-card)',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                color: 'var(--text-ghost)', letterSpacing: '0.08em',
                textAlign: 'center', padding: '24px', lineHeight: 1.8,
              }}>
                [INSERT MAIN DASHBOARD SCREENSHOT]
                <br />
                Full recruiting dashboard — profile, colleges, and plan in one view
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST STRIP — quiet proof
      ═══════════════════════════════════════════ */}
      <section style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '28px 24px',
      }}>
        <div className="fade-up" style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          gap: '12px 40px',
        }}>
          {[
            'Built by a Division I athlete',
            'Developed at Yale',
            'Placements at Yale, Princeton, Stanford & Duke',
          ].map((item) => (
            <span key={item} style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS — 3 steps, one idea each
      ═══════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 128px) 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 className="fade-up" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(30px, 4vw, 44px)', letterSpacing: '-0.02em',
            color: 'var(--text-primary)', textAlign: 'center',
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}>
            How it works
          </h2>
          <div className="steps-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px',
          }}>
            {steps.map((step, i) => (
              <div key={step.num} className="fade-up" data-delay={i * 120}>
                <div style={{
                  width: '40px', height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-forest)',
                  color: '#FFF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '16px',
                  marginBottom: '20px',
                }}>
                  {step.num}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 600,
                  fontSize: '20px', letterSpacing: '-0.01em',
                  color: 'var(--text-primary)', marginBottom: '10px',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 400,
                  fontSize: '15px', lineHeight: 1.65,
                  color: 'var(--text-muted)',
                }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          IMAGE BAND — the one emotional moment
      ═══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 'clamp(360px, 50vw, 520px)', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Rowing 2 - green.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%',
            filter: 'brightness(0.72)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '24px',
        }}>
          <p className="fade-up" style={{
            fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic',
            fontSize: 'clamp(24px, 3.5vw, 38px)', lineHeight: 1.4,
            color: '#F5F2EA', textAlign: 'center', maxWidth: '640px',
            textShadow: '0 2px 24px rgba(0,0,0,0.4)',
          }}>
            &ldquo;Talent gets you noticed.
            <br />
            A system gets you recruited.&rdquo;
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT YOU GET — 4 concrete outcomes
      ═══════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 128px) 24px', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 className="fade-up" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(30px, 4vw, 44px)', letterSpacing: '-0.02em',
            color: 'var(--text-primary)', textAlign: 'center',
            marginBottom: '16px',
          }}>
            Everything your family needs
          </h2>
          <p className="fade-up" data-delay="80" style={{
            fontFamily: 'var(--font-sans)', fontSize: '17px',
            color: 'var(--text-muted)', textAlign: 'center',
            maxWidth: '480px', margin: '0 auto clamp(48px, 6vw, 72px)',
            lineHeight: 1.6,
          }}>
            No guesswork. No scattered notes. One system that covers the entire recruiting process.
          </p>
          <div className="outcome-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
          }}>
            {outcomes.map((item, i) => (
              <div
                key={item.title}
                className="fade-up card-lift"
                data-delay={i * 80}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '32px',
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 600,
                  fontSize: '18px', letterSpacing: '-0.01em',
                  color: 'var(--text-primary)', marginBottom: '8px',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '15px',
                  lineHeight: 1.6, color: 'var(--text-muted)',
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIAL — social proof placeholder
      ═══════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 128px) 24px' }}>
        <div className="fade-up" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.5,
            color: 'var(--text-secondary)', marginBottom: '28px',
          }}>
            &ldquo;We signed up as a freshman to get ahead. It taught him what to focus on each year, so he had everything he needed by the time it was time to start contacting coaches. I&apos;m glad we have the confidence of knowing what to do — both now and down the road.&rdquo;
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--text-ghost)',
          }}>
            Parent of a freshman athlete
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA — one clear action
      ═══════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(80px, 10vw, 128px) 24px',
        backgroundColor: 'var(--accent-forest)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="fade-up" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(30px, 4.5vw, 48px)', letterSpacing: '-0.02em',
            color: '#FFFFFF', lineHeight: 1.15, marginBottom: '20px',
          }}>
            Start your recruiting
            <br />
            journey today.
          </h2>
          <p className="fade-up" data-delay="80" style={{
            fontFamily: 'var(--font-sans)', fontSize: '17px',
            color: 'rgba(255,255,255,0.75)', lineHeight: 1.6,
            marginBottom: '36px',
          }}>
            Instant access after checkout. Works for every sport, every level, anywhere in the world.
          </p>
          <div className="fade-up" data-delay="160">
            <a
              href={STRIPE_CHECKOUT_URL}
              className="btn-primary"
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--accent-forest)',
                fontSize: '17px',
                padding: '18px 40px',
              }}
            >
              Get the System
            </a>
          </div>
          <p className="fade-up" data-delay="220" style={{
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            color: 'rgba(255,255,255,0.55)', marginTop: '24px',
          }}>
            Questions first? <Link href="/apply" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline' }}>Tell us about your situation</Link> and we&apos;ll point you in the right direction.
          </p>
        </div>
      </section>

    </div>
  );
}
