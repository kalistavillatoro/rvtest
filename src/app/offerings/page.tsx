'use client';

import { useEffect, useRef, useState } from 'react';
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

const walkthrough = [
  {
    label: 'Your Profile',
    title: 'Everything coaches need, in one place.',
    body: 'A guided profile where you enter your stats, academics, video links, and key details. Built-in guidance shows you exactly what coaches look for — so your profile is complete, professional, and easy to evaluate.',
    image: '/my-profile.jpg',
  },
  {
    label: 'Your Colleges',
    title: 'Every school. Every conversation. Tracked.',
    body: 'Organize your target colleges and log every coach interaction. Built-in email templates take the guesswork out of outreach, and follow-up tracking makes sure no opportunity slips away.',
    image: '/my-colleges.jpg',
  },
  {
    label: 'Your Plan',
    title: 'Always know your next step.',
    body: 'A step-by-step guide through the entire recruiting process — what to do, when to do it, and why it matters. From your first email to your final decision, you\'re never guessing.',
    image: '/the-course.jpg',
  },
];

const included = [
  'Guided recruiting profile with embedded best practices',
  'College outreach tracker with follow-up management',
  'Proven email templates for every stage of coach contact',
  'Step-by-step course covering the full recruiting timeline',
  'Guidance for highlight video, transcripts, and test scores',
  'Works for every sport, every level, U.S. and international',
];

const faqs = [
  {
    q: 'Who is this for?',
    a: 'Any student-athlete pursuing college sports in the United States — any sport, any level, from freshmen just starting out to seniors deep in conversations with coaches. Parents use it right alongside their athletes.',
  },
  {
    q: 'When should we start?',
    a: 'Earlier is better, but there\'s no wrong time. The system meets you where you are — whether you haven\'t contacted a single coach yet or you\'re already fielding interest.',
  },
  {
    q: 'Does it work for international athletes?',
    a: 'Yes. The system was built with international families in mind and covers the specific steps international athletes need to navigate the U.S. recruiting process.',
  },
  {
    q: 'How is it delivered?',
    a: 'Instantly, as a digital dashboard you open in your browser. No software to install. You\'ll receive access right after checkout.',
  },
  {
    q: 'What if we want more hands-on help?',
    a: 'The system is designed to be fully self-serve. If your family wants individual advisory support on top of it, tell us about your situation through the application form and we\'ll follow up.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '24px 0',
          background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-sans)', fontWeight: 500,
          fontSize: '17px', color: 'var(--text-primary)',
        }}>
          {q}
        </span>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: '22px', fontWeight: 300,
          color: 'var(--text-ghost)', flexShrink: 0, marginLeft: '16px',
          transform: open ? 'rotate(45deg)' : 'none',
          transition: 'transform 0.3s var(--ease)',
        }}>
          +
        </span>
      </button>
      <div style={{
        maxHeight: open ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s var(--ease)',
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '15px',
          lineHeight: 1.7, color: 'var(--text-muted)',
          paddingBottom: '24px', maxWidth: '560px',
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const pageRef = useFadeUp();

  return (
    <div ref={pageRef} style={{ backgroundColor: 'var(--bg-primary)', paddingTop: 'clamp(120px, 18vh, 170px)' }}>

      {/* Header */}
      <section style={{ padding: '0 24px clamp(64px, 8vw, 96px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="fade-up" style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            textTransform: 'uppercase', letterSpacing: '0.16em',
            color: 'var(--accent-forest)', marginBottom: '24px',
          }}>
            Inside the System
          </div>
          <h1 className="fade-up" data-delay="80" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(36px, 5.5vw, 56px)', letterSpacing: '-0.025em',
            color: 'var(--text-primary)', lineHeight: 1.08, marginBottom: '24px',
          }}>
            Everything inside
            <br />
            Recruiting Victory.
          </h1>
          <p className="fade-up" data-delay="160" style={{
            fontFamily: 'var(--font-sans)', fontSize: '18px',
            lineHeight: 1.65, color: 'var(--text-muted)',
            maxWidth: '520px', margin: '0 auto',
          }}>
            One purchase. One dashboard. A complete system that guides your family through recruiting from start to finish.
          </p>
        </div>
      </section>

      {/* Walkthrough — alternating text + screenshot */}
      {walkthrough.map((item, i) => (
        <section
          key={item.label}
          style={{
            padding: 'clamp(48px, 6vw, 80px) 24px',
            backgroundColor: i % 2 === 1 ? 'var(--bg-secondary)' : 'var(--bg-primary)',
          }}
        >
          <div
            className="walkthrough-grid"
            style={{
              maxWidth: '1040px', margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: i % 2 === 1 ? '1.2fr 1fr' : '1fr 1.2fr',
              gap: '64px', alignItems: 'center',
            }}
          >
            <div className="fade-up" style={{ order: i % 2 === 1 ? 2 : 1 }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                textTransform: 'uppercase', letterSpacing: '0.14em',
                color: 'var(--accent-forest)', marginBottom: '16px',
              }}>
                {item.label}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-sans)', fontWeight: 600,
                fontSize: 'clamp(26px, 3.2vw, 36px)', letterSpacing: '-0.02em',
                color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '18px',
              }}>
                {item.title}
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: '16px',
                lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: '440px',
              }}>
                {item.body}
              </p>
            </div>
            <div className="fade-up" data-delay="120" style={{ order: i % 2 === 1 ? 1 : 2 }}>
              <div className="screenshot-frame">
                <div className="frame-bar">
                  <span className="frame-dot" /><span className="frame-dot" /><span className="frame-dot" />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* What's included */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 className="fade-up" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(28px, 3.8vw, 40px)', letterSpacing: '-0.02em',
            color: 'var(--text-primary)', textAlign: 'center',
            marginBottom: 'clamp(40px, 5vw, 56px)',
          }}>
            What&apos;s included
          </h2>
          <div className="fade-up" data-delay="100" style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: 'clamp(28px, 4vw, 44px)',
            boxShadow: 'var(--shadow-card)',
          }}>
            {included.map((item, i) => (
              <div key={item} style={{
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                padding: '12px 0',
                borderBottom: i < included.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{
                  color: 'var(--accent-forest)', fontWeight: 600,
                  fontSize: '15px', paddingTop: '1px', flexShrink: 0,
                }}>✓</span>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: '15.5px',
                  lineHeight: 1.6, color: 'var(--text-secondary)',
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="walkthrough-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {[
              {
                quote: 'The course covered things I hadn’t even thought of and gave me tips that put me ahead of other recruits. Having it all laid out step-by-step made the whole process click.',
                name: 'Recruited athlete, Class of 2026',
              },
              {
                quote: 'I always recommend this to families I work with — it’s affordable, and it’s one of the only things that actually keeps high schoolers engaged with their own recruiting process.',
                name: 'High school coach',
              },
            ].map((t) => (
              <div key={t.name} className="fade-up" style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                  fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.6,
                  color: 'var(--text-secondary)', marginBottom: '16px',
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--text-ghost)',
                }}>
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 24px clamp(80px, 10vw, 120px)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 className="fade-up" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(28px, 3.8vw, 40px)', letterSpacing: '-0.02em',
            color: 'var(--text-primary)', textAlign: 'center',
            marginBottom: 'clamp(32px, 4vw, 48px)',
          }}>
            Common questions
          </h2>
          <div className="fade-up" data-delay="100">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: 'clamp(80px, 10vw, 120px) 24px',
        backgroundColor: 'var(--accent-forest)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 className="fade-up" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 600,
            fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.02em',
            color: '#FFFFFF', lineHeight: 1.15, marginBottom: '18px',
          }}>
            Get the complete system.
          </h2>
          <p className="fade-up" data-delay="80" style={{
            fontFamily: 'var(--font-sans)', fontSize: '17px',
            color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '32px',
          }}>
            Instant access after checkout. Start building your profile tonight.
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
        </div>
      </section>

    </div>
  );
}
