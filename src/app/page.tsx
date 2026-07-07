'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { STRIPE_CHECKOUT_URL } from '@/lib/site';

const dashboardMockups = [
  { src: '/jana-dashboard.jpg', alt: "Jana's Recruiting Victory dashboard — Swimming" },
  { src: '/andre-dashboard.jpg', alt: "Andre's Recruiting Victory dashboard — Football" },
  { src: '/layne-dashboard.jpg', alt: "Layne's Recruiting Victory dashboard — Lacrosse" },
  { src: '/homepage-dashboard.jpg', alt: "A Recruiting Victory dashboard, ready for your name and sport" },
];

function DashboardCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % dashboardMockups.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="screenshot-frame carousel-frame" style={{ position: 'relative', backgroundColor: 'var(--bg-card)' }}>
      {dashboardMockups.map((m, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={m.src}
          src={m.src}
          alt={m.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'contain',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 0.9s ease',
          }}
        />
      ))}
    </div>
  );
}

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
    body: 'Enter your stats, academics, and highlights into a private, guided profile — organized exactly the way coaches expect once you share it with them.',
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
  { title: 'A profile coaches understand', body: 'Everything a college coach needs to evaluate you, organized in one place and ready for you to share when you reach out.' },
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
      <section className="hero-section" style={{
        padding: 'clamp(140px, 20vh, 200px) 24px clamp(28px, 4vw, 48px)',
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
            fontFamily: 'var(--font-sans)', fontSize: '13.5px', fontWeight: 500,
            color: 'var(--text-muted)', marginTop: '20px',
          }}>
            $13.99 every 4 weeks · Cancel anytime
          </p>
          <p className="fade-up" data-delay="320" style={{
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            color: 'var(--text-muted)', marginTop: '4px',
          }}>
            Every sport · Every level · U.S. &amp; international athletes
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST STRIP — quiet proof, right up front
      ═══════════════════════════════════════════ */}
      <section style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '16px 24px',
      }}>
        <div className="fade-up" style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          gap: '10px 32px',
        }}>
          {[
            'Founded by a Yale D1 athlete',
            'Built on our own College Athlete Placement Standard',
            'Placements at Yale, Princeton, Stanford & Duke',
          ].map((item) => (
            <span key={item} style={{
              fontFamily: 'var(--font-mono)', fontSize: '11.5px',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCT SHOT — auto-rotating dashboard examples
      ═══════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(28px, 4vw, 44px) 24px clamp(48px, 7vw, 88px)' }}>
        <div className="fade-up" data-delay="100" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <DashboardCarousel />
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '13.5px',
            color: 'var(--text-muted)', textAlign: 'center', marginTop: '16px',
          }}>
            Every athlete gets their own dashboard — name, sport, and class year included.
          </p>
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
          QUOTE BREAK — no single sport, no photo bias
      ═══════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(72px, 9vw, 112px) 24px',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <p className="fade-up" style={{
          fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic',
          fontSize: 'clamp(24px, 3.5vw, 38px)', lineHeight: 1.4,
          color: 'var(--text-primary)', maxWidth: '680px', margin: '0 auto',
        }}>
          &ldquo;Talent gets you noticed.
          <br />
          A system gets you recruited.&rdquo;
        </p>
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
          WHAT HAPPENS NEXT — remove last-minute hesitation
      ═══════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 128px) 24px', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 className="fade-up" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(28px, 3.6vw, 40px)', letterSpacing: '-0.02em',
            color: 'var(--text-primary)', textAlign: 'center',
            marginBottom: 'clamp(40px, 5vw, 56px)',
          }}>
            What happens after you sign up
          </h2>
          {[
            {
              num: '1',
              title: 'Check out securely',
              body: 'Pay through Stripe — $13.99 every 4 weeks, cancel anytime.',
            },
            {
              num: '2',
              title: 'Get your dashboard within 24 hours',
              body: 'You\'ll receive an email with your own Recruiting Victory dashboard link, already set up with your name, sport, and class year.',
            },
            {
              num: '3',
              title: 'Watch the welcome video',
              body: 'A short walkthrough shows you exactly how to use your profile, your college tracker, and the course.',
            },
            {
              num: '4',
              title: 'Bookmark it and you\'re in',
              body: 'It\'s a web link, not an app to download — save it and return anytime. You\'re part of the Recruiting Victory community from day one.',
            },
          ].map((step, i) => (
            <div
              key={step.num}
              className="fade-up"
              data-delay={i * 100}
              style={{ display: 'flex', gap: '20px', marginBottom: '32px', alignItems: 'flex-start' }}
            >
              <div style={{
                width: '28px', height: '28px', flexShrink: 0, marginTop: '2px',
                borderRadius: '8px',
                border: '1.5px solid var(--accent-forest)',
                color: 'var(--accent-forest)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '14px',
              }}>
                ✓
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 600,
                  fontSize: '17px', color: 'var(--text-primary)', marginBottom: '6px',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '15px',
                  lineHeight: 1.65, color: 'var(--text-muted)',
                }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
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
            Your personalized dashboard arrives by email within 24 hours. Works for every sport, every level, anywhere in the world.
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
          <p className="fade-up" data-delay="190" style={{
            fontFamily: 'var(--font-sans)', fontSize: '13.5px', fontWeight: 500,
            color: 'rgba(255,255,255,0.85)', marginTop: '16px',
          }}>
            $13.99 every 4 weeks · Cancel anytime
          </p>
          <p className="fade-up" data-delay="220" style={{
            fontFamily: 'var(--font-sans)', fontSize: '13px',
            color: 'rgba(255,255,255,0.75)', marginTop: '16px',
          }}>
            Questions first? <Link href="/apply" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>Tell us about your situation</Link>{' '}and we&apos;ll point you in the right direction.
          </p>
        </div>
      </section>

    </div>
  );
}
