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

function ApplyButton({ label = 'Apply for Access' }: { label?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        border: `1px solid ${hovered ? 'var(--accent-forest)' : 'var(--accent-sage)'}`,
        backgroundColor: hovered ? 'var(--accent-forest)' : 'transparent',
        color: hovered ? 'var(--text-primary)' : 'var(--accent-sage)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500, fontSize: '12px', letterSpacing: '0.16em',
        padding: '14px 36px', textTransform: 'uppercase',
        cursor: 'pointer', transition: 'all 0.3s ease', borderRadius: 0,
      }}
    >
      {label}
    </button>
  );
}

const parts = [
  {
    num: '01',
    name: 'My Profile',
    desc: 'A guided spreadsheet where you build your complete recruiting profile — stats, academics, video links, and key information organized the way college coaches need to see it.',
    outcome: 'Build a profile colleges can understand.',
  },
  {
    num: '02',
    name: 'My Colleges',
    desc: 'A tracking system for your college list and coach outreach. Organized by school, with built-in templates and follow-up guidance so nothing falls through the cracks.',
    outcome: 'Stay consistent with outreach and follow-ups.',
  },
  {
    num: '03',
    name: 'The Course',
    desc: 'A step-by-step guide that walks you through the full recruiting process from start to finish — what to do, when to do it, and why it matters.',
    outcome: 'Always know exactly what to do next.',
  },
];

const steps = [
  {
    step: '1',
    title: 'Build your profile.',
    body: 'Enter your information once. My Profile becomes your recruiting foundation — complete, organized, and ready to share with any coach at any school.',
  },
  {
    step: '2',
    title: 'Organize your colleges.',
    body: 'Build your target list. Track outreach. Use built-in templates to contact coaches and stay on top of every conversation as it develops.',
  },
  {
    step: '3',
    title: 'Follow the system.',
    body: 'The Course walks you through every stage of recruiting — what to do, what to send, and what comes next. The profile and tracker support each step.',
  },
];

const screenshots = [
  {
    label: 'My Profile',
    caption: 'All your recruiting information — organized, complete, and ready to share with coaches.',
    placeholder: '[INSERT NOTION PROFILE DASHBOARD IMAGE]',
  },
  {
    label: 'My Colleges',
    caption: 'Your outreach tracker with built-in templates and follow-up guidance.',
    placeholder: '[INSERT COLLEGE TRACKER CRM IMAGE]',
  },
  {
    label: 'The Course',
    caption: 'A structured guide that walks you through every stage of the recruiting process.',
    placeholder: '[INSERT COURSE / GUIDANCE STRUCTURE IMAGE]',
  },
];

export default function HomePage() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const img1Ref        = useRef<HTMLImageElement>(null);
  const img2WrapperRef = useRef<HTMLDivElement>(null);
  const [heroVisible,  setHeroVisible] = useState(false);
  const contentRef = useFadeUp();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let raf: number;
    let current = 0;
    let target  = 0;

    function smoothstep(t: number): number {
      t = Math.max(0, Math.min(1, t));
      return t * t * (3 - 2 * t);
    }
    function lerp(a: number, b: number, t: number): number {
      return a + (b - a) * t;
    }

    function tick() {
      current = lerp(current, target, 0.04);
      if (img2WrapperRef.current) {
        img2WrapperRef.current.style.opacity = String(current);
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function onScroll() {
      const section = heroSectionRef.current;
      if (!section) return;
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const raw = Math.min(1, window.scrollY / scrollable);

      if (img1Ref.current) {
        img1Ref.current.style.transform = `scale(${1 + raw * 0.03})`;
      }

      const onset   = 0.85;
      const window_ = 0.15;
      target = smoothstep(Math.max(0, (raw - onset) / window_));
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — scroll-driven crossfade
      ══════════════════════════════════════════ */}
      <div ref={heroSectionRef} style={{ height: '200vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={img1Ref}
            src="/Rowing 2 - green.jpg"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 30%',
              filter: 'brightness(0.90) contrast(1.06)',
              transformOrigin: 'center 30%',
              willChange: 'transform',
            }}
          />
          <div
            ref={img2WrapperRef}
            style={{ position: 'absolute', inset: 0, opacity: 0, willChange: 'opacity' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Very good rowing 2.png"
              alt=""
              aria-hidden="true"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center 30%',
                filter: 'brightness(0.88) contrast(1.10)',
              }}
            />
          </div>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, rgba(14,16,15,0.40) 100%)',
            pointerEvents: 'none',
          }} />
          <div
            className="hero-text-block"
            style={{
              position: 'absolute',
              right: '7vw',
              top: '40%',
              transform: 'translateY(-50%)',
              maxWidth: '420px',
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(24px, 2.5vw, 34px)',
              color: 'var(--accent-ivory)',
              textAlign: 'right',
              margin: 0,
              lineHeight: 1.45,
              letterSpacing: '0.01em',
            }}>
              A 3-part recruiting system for student-athletes.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BELOW-HERO CONTENT
      ══════════════════════════════════════════ */}
      <div ref={contentRef}>

        {/* ── SECTION 1: THE PROBLEM ── */}
        <section style={{ backgroundColor: 'var(--bg-primary)', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="fade-up" data-delay="0" style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              textTransform: 'uppercase', letterSpacing: '0.14em',
              color: 'var(--accent-forest)', marginBottom: '32px',
            }}>
              The Recruiting Victory System
            </div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: 'var(--font-serif)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)',
              color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '32px',
            }}>
              Recruiting doesn&apos;t have to be confusing.
            </h2>
            <p className="fade-up" data-delay="160" style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300,
              fontSize: '17px', lineHeight: 1.85,
              color: 'var(--text-secondary)', marginBottom: '24px',
            }}>
              Most athletes don&apos;t miss opportunities because of their ability. They miss them because they don&apos;t have a clear plan — they don&apos;t know what to build, who to contact, or what to do next.
            </p>
            <p className="fade-up" data-delay="220" style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300,
              fontSize: '17px', lineHeight: 1.85,
              color: 'var(--text-secondary)',
            }}>
              The Recruiting Victory System gives you a profile, a college tracker, and a step-by-step course — everything you need to manage the full recruiting process, in one place.
            </p>
          </div>
        </section>

        {/* ── SECTION 2: THE 3 PARTS ── */}
        <section style={{ backgroundColor: 'var(--bg-secondary)', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="fade-up" data-delay="0" style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              textTransform: 'uppercase', letterSpacing: '0.14em',
              color: 'var(--accent-forest)', marginBottom: '16px',
            }}>
              What&apos;s included
            </div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: 'var(--font-serif)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)',
              color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '56px',
            }}>
              Three parts. One system.
            </h2>

            <div className="parts-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2px' }}>
              {parts.map((part, i) => (
                <div
                  key={part.num}
                  className="fade-up"
                  data-delay={i * 100}
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    padding: '40px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--text-ghost)', letterSpacing: '0.12em',
                    marginBottom: '20px',
                  }}>
                    {part.num}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontWeight: 400,
                    fontSize: '26px', color: 'var(--text-primary)',
                    marginBottom: '16px', lineHeight: 1.2,
                  }}>
                    {part.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontWeight: 300,
                    fontSize: '14px', lineHeight: 1.75,
                    color: 'var(--text-muted)', marginBottom: '28px',
                    flexGrow: 1,
                  }}>
                    {part.desc}
                  </p>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--accent-sage)', letterSpacing: '0.06em',
                    borderTop: '1px solid var(--border)', paddingTop: '16px',
                  }}>
                    → {part.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: HOW IT WORKS ── */}
        <section style={{ backgroundColor: 'var(--bg-primary)', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="fade-up" data-delay="0" style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              textTransform: 'uppercase', letterSpacing: '0.14em',
              color: 'var(--accent-forest)', marginBottom: '32px',
            }}>
              The process
            </div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: 'var(--font-serif)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)',
              color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '56px',
            }}>
              How it works.
            </h2>

            {steps.map((item, i) => (
              <div
                key={item.step}
                className="fade-up"
                data-delay={(i + 1) * 100}
                style={{ display: 'flex', gap: '32px', marginBottom: '48px', alignItems: 'flex-start' }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  color: 'var(--accent-forest)', letterSpacing: '0.12em',
                  paddingTop: '5px', flexShrink: 0, width: '16px',
                }}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontWeight: 400,
                    fontSize: '22px', color: 'var(--text-primary)',
                    marginBottom: '10px', lineHeight: 1.2,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontWeight: 300,
                    fontSize: '15px', lineHeight: 1.75,
                    color: 'var(--text-muted)',
                  }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: COMMAND CENTER ── */}
        <section style={{ backgroundColor: 'var(--bg-secondary)', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="fade-up" data-delay="0" style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              textTransform: 'uppercase', letterSpacing: '0.14em',
              color: 'var(--accent-forest)', marginBottom: '16px',
            }}>
              What it looks like
            </div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: 'var(--font-serif)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)',
              color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '56px',
            }}>
              Your recruiting command center.
            </h2>

            <div className="parts-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
              {screenshots.map((item, i) => (
                <div key={item.label} className="fade-up" data-delay={i * 100}>
                  <div style={{
                    aspectRatio: '4/3',
                    backgroundColor: 'var(--bg-input)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '10px',
                      color: 'var(--text-ghost)', letterSpacing: '0.08em',
                      textAlign: 'center', padding: '16px', lineHeight: 1.7,
                    }}>
                      {item.placeholder}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--accent-sage)', letterSpacing: '0.1em',
                    marginBottom: '8px', textTransform: 'uppercase',
                  }}>
                    {item.label}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontWeight: 300,
                    fontSize: '13px', lineHeight: 1.7, color: 'var(--text-muted)',
                  }}>
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: WHO IT'S FOR ── */}
        <section style={{ backgroundColor: 'var(--bg-primary)', padding: 'clamp(72px, 10vw, 120px) 24px' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="fade-up" data-delay="0" style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              textTransform: 'uppercase', letterSpacing: '0.14em',
              color: 'var(--accent-forest)', marginBottom: '32px',
            }}>
              Who it&apos;s for
            </div>
            <h2 className="fade-up" data-delay="80" style={{
              fontFamily: 'var(--font-serif)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)',
              color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '32px',
            }}>
              Any athlete. Any sport.
            </h2>
            <p className="fade-up" data-delay="160" style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300,
              fontSize: '17px', lineHeight: 1.85,
              color: 'var(--text-secondary)', marginBottom: '32px',
            }}>
              This system is for any student-athlete pursuing college sport in the United States — regardless of sport, year, or country.
            </p>

            <div className="fade-up" data-delay="220" style={{ marginBottom: '56px' }}>
              {[
                'High school athletes at any stage of the recruiting process',
                'International athletes navigating the U.S. system from abroad',
                'Parents who want to understand the process and stay involved',
                'Athletes at any level — the system scales to where you are',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '14px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--accent-forest)', paddingTop: '4px', flexShrink: 0,
                  }}>—</span>
                  <span style={{
                    fontFamily: 'var(--font-sans)', fontWeight: 300,
                    fontSize: '15px', lineHeight: 1.7, color: 'var(--text-muted)',
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="divider-animated" data-delay="0" style={{ marginBottom: '32px' }} />
            <p className="fade-up" data-delay="80" style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300,
              fontSize: '13px', lineHeight: 1.75, color: 'var(--text-ghost)',
            }}>
              Recruiting Victory was built by a Division I athlete recruited by five universities, and is supported by CAPS (College Athlete Placement Standard). The system was developed in partnership with Yale Tsai City Innovation.
            </p>
          </div>
        </section>

        {/* ── SECTION 6: CTA ── */}
        <section style={{ backgroundColor: 'var(--bg-secondary)', padding: 'clamp(64px, 8vw, 100px) 24px', textAlign: 'center' }}>
          <div className="fade-up" data-delay="0" style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'var(--accent-forest)', marginBottom: '24px',
          }}>
            Apply for access
          </div>
          <h2 className="fade-up" data-delay="100" style={{
            fontFamily: 'var(--font-serif)', fontWeight: 300,
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: 'var(--text-primary)', marginBottom: '24px', lineHeight: 1.1,
          }}>
            Get the system.
          </h2>
          <p className="fade-up" data-delay="200" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '16px',
            color: 'var(--text-muted)', maxWidth: '400px',
            margin: '0 auto 40px', lineHeight: 1.75,
          }}>
            Applications are reviewed individually. If accepted, you&apos;ll receive access to all three parts of the Recruiting Victory System.
          </p>
          <div className="fade-up" data-delay="300">
            <Link href="/apply" style={{ textDecoration: 'none' }}>
              <ApplyButton />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
