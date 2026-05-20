'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// ─── word data ────────────────────────────────────────────────────────────────
// Curated to ~8 per column so visual heights are roughly equal

const sportsWords = [
  { text: 'Rowing',       size: 48 },
  { text: 'Swimming',     size: 40 },
  { text: 'Soccer',       size: 44 },
  { text: 'Basketball',   size: 34 },
  { text: 'Tennis',       size: 38 },
  { text: 'Football',     size: 36 },
  { text: 'Lacrosse',     size: 32 },
  { text: 'Golf',         size: 30 },
  { text: 'Volleyball',   size: 34 },
];

const countryWords = [
  { text: 'United States',        size: 42 },
  { text: 'Australia',            size: 46 },
  { text: 'United Kingdom',       size: 36 },
  { text: 'Canada',               size: 40 },
  { text: 'Singapore',            size: 34 },
  { text: 'United Arab Emirates', size: 28 },
  { text: 'Mexico',               size: 38 },
  { text: 'New Zealand',          size: 32 },
  { text: 'Hong Kong',            size: 34 },
];

const outcomeWords = [
  { text: 'Ivy League programs',    size: 40 },
  { text: 'Power Four Division I',  size: 34 },
  { text: 'Division II & III',      size: 30 },
  { text: 'Scholarship placements', size: 32 },
  { text: 'Preferred walk-on offers', size: 28 },
  { text: 'All levels of collegiate sport', size: 24 },
  { text: 'Academic excellence',    size: 28 },
  { text: 'Program fit above prestige', size: 22 },
];

type WordItem = { text: string; size: number };

function buildWordList() {
  const all: { text: string; block: number; index: number }[] = [];
  sportsWords.forEach((w, i)  => all.push({ text: w.text, block: 0, index: i }));
  countryWords.forEach((w, i) => all.push({ text: w.text, block: 1, index: i }));
  outcomeWords.forEach((w, i) => all.push({ text: w.text, block: 2, index: i }));
  return all;
}
const allWords = buildWordList();

interface HighlightedWord { block: number; index: number; opacity: number; }

function AnimatedWord({
  word, block, index, highlighted, align,
}: {
  word: WordItem; block: number; index: number;
  highlighted: HighlightedWord | null; align: 'left' | 'center' | 'right';
}) {
  const [hovered, setHovered] = useState(false);
  const isHighlighted = highlighted?.block === block && highlighted?.index === index;

  let color = 'var(--text-ghost)';
  let fontWeight: number = 300;
  let textDecoration = 'none';
  let textDecorationColor = 'transparent';

  if (hovered) {
    color = 'var(--text-primary)';
    fontWeight = 600;
    textDecoration = 'underline';
    textDecorationColor = 'var(--accent-forest)';
  } else if (isHighlighted && highlighted) {
    const r = 143, g = 175, b = 151;
    color = `rgba(${r}, ${g}, ${b}, ${highlighted.opacity})`;
    fontWeight = highlighted.opacity > 0.5 ? 600 : 300;
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-serif)',
        fontSize: `${word.size}px`,
        fontWeight,
        color,
        textAlign: align,
        lineHeight: 1.15,
        cursor: 'default',
        textDecoration,
        textDecorationColor,
        transition: hovered ? 'none' : 'color 1.2s ease',
        userSelect: 'none',
      }}
    >
      {word.text}
    </div>
  );
}

function CTAButton() {
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
      Submit an Application
    </button>
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
    }, { threshold: 0.15 });
    el.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── homepage ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  // Hero scroll-driven transition
  const heroSectionRef   = useRef<HTMLDivElement>(null);
  const img2WrapperRef   = useRef<HTMLDivElement>(null);

  // Animated type
  const [highlighted, setHighlighted] = useState<HighlightedWord | null>(null);

  // Fade-up sections
  const contextRef = useFadeUp();
  const ctaRef     = useFadeUp();

  // Hero text fade-in
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  // ── scroll-driven image crossfade (rAF + smoothstep, no React re-renders) ──
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
      current = lerp(current, target, 0.035);   // buttery lag
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
      // Delayed onset: no change until 45% scroll, full by 90%
      const delayed = Math.max(0, (raw - 0.45) / 0.45);
      target = smoothstep(delayed);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // ── animated type cycle ───────────────────────────────────────────────────
  useEffect(() => {
    let cycleTimeout: ReturnType<typeof setTimeout>;
    let fadeInterval: ReturnType<typeof setInterval>;

    function pickAndHighlight() {
      const idx  = Math.floor(Math.random() * allWords.length);
      const word = allWords[idx];
      setHighlighted({ block: word.block, index: word.index, opacity: 1 });

      fadeInterval = setInterval(() => {
        setHighlighted((prev) => {
          if (!prev) return null;
          const next = prev.opacity - 0.06;
          if (next <= 0) { clearInterval(fadeInterval); return null; }
          return { ...prev, opacity: next };
        });
      }, 40);

      cycleTimeout = setTimeout(() => {
        clearInterval(fadeInterval);
        setHighlighted(null);
        cycleTimeout = setTimeout(pickAndHighlight, 150);
      }, 1500);
    }

    const start = setTimeout(pickAndHighlight, 600);
    return () => {
      clearTimeout(start);
      clearTimeout(cycleTimeout);
      clearInterval(fadeInterval);
    };
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO  (300vh sticky scroll container)
      ════════════════════════════════════════════════════════════ */}
      <div ref={heroSectionRef} style={{ height: '300vh', position: 'relative' }}>
        <div style={{
          position: 'sticky', top: 0,
          height: '100vh', overflow: 'hidden',
        }}>
          {/* Image 1 — base */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Rowing 2 - green.jpg"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 30%',
              filter: 'brightness(0.90) contrast(1.06) saturate(0.92)',
            }}
          />

          {/* Image 2 — crossfade target (starts invisible) */}
          <div
            ref={img2WrapperRef}
            style={{
              position: 'absolute', inset: 0,
              opacity: 0,
              willChange: 'opacity',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Very good rowing 2.png"
              alt=""
              aria-hidden="true"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center 30%',
                filter: 'brightness(0.88) contrast(1.08) saturate(0.90)',
              }}
            />
          </div>

          {/* Subtle gradient — bottom only, improves text contrast */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, rgba(14,16,15,0.45) 100%)',
            pointerEvents: 'none',
          }} />

          {/* Film grain overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: 0.032,
            mixBlendMode: 'overlay',
            pointerEvents: 'none',
          }} />

          {/* Hero text — left-aligned, single subtitle only */}
          <div
            className="hero-text-block"
            style={{
              position: 'absolute',
              left: '7vw',
              top: '50%',
              transform: 'translateY(-58%)',
              maxWidth: '460px',
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 1.7vw, 22px)',
              color: '#D4CFC6',
              textAlign: 'left',
              margin: 0,
              lineHeight: 1.55,
              letterSpacing: '0.025em',
            }}>
              Structured pathways for student-athletes<br />
              pursuing U.S. collegiate programs.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — CONTEXT PARAGRAPH
      ════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '120px 24px' }}>
        <div ref={contextRef} style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="fade-up" data-delay="0" style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'var(--accent-forest)', marginBottom: '32px',
          }}>
            The Landscape
          </div>
          <p className="fade-up" data-delay="100" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '18px', lineHeight: 1.8,
            color: 'var(--text-secondary)', marginBottom: '28px',
          }}>
            Most families enter the U.S. college athletic recruiting process without a clear sense of when it begins, who drives it, or how institutions evaluate candidates beyond performance alone. The result is a fragmented, reactive experience that disadvantages high-performing athletes — not for lack of ability, but for lack of structure.
          </p>
          <p className="fade-up" data-delay="200" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300,
            fontSize: '18px', lineHeight: 1.8,
            color: 'var(--text-secondary)', marginBottom: '64px',
          }}>
            Recruiting Victory provides that structure: a disciplined, individually calibrated framework that helps student-athletes at every stage move through the recruiting process with clarity, confidence, and a competitive position that reflects the full scope of who they are.
          </p>
          <div className="fade-up" data-delay="300" style={{
            borderTop: '1px solid var(--border)', paddingTop: '32px',
            textAlign: 'center', fontFamily: 'var(--font-mono)',
            fontSize: '11px', textTransform: 'uppercase',
            letterSpacing: '0.12em', color: 'var(--text-muted)',
          }}>
            Powered by CAPS (College Athlete Placement Standard) · The Institutional Standard for High School Athletic Recruiting Systems
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — ANIMATED TYPOGRAPHY  (3 balanced columns)
      ════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '140px 5vw 120px' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          textTransform: 'uppercase', letterSpacing: '0.14em',
          color: 'var(--accent-forest)', marginBottom: '72px',
        }}>
          Reach · Sport · Outcome
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', alignItems: 'start' }}>
          {/* Block 1 — Sports */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: 0 }}>
            {sportsWords.map((w, i) => (
              <AnimatedWord key={w.text} word={w} block={0} index={i} highlighted={highlighted} align="left" />
            ))}
          </div>

          {/* Block 2 — Countries (offset down slightly) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '24px' }}>
            {countryWords.map((w, i) => (
              <AnimatedWord key={w.text} word={w} block={1} index={i} highlighted={highlighted} align="center" />
            ))}
          </div>

          {/* Block 3 — Outcomes (offset down more, larger sizes to balance height) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '8px' }}>
            {outcomeWords.map((w, i) => (
              <AnimatedWord key={w.text} word={w} block={2} index={i} highlighted={highlighted} align="right" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — APPLY CTA BAND
      ════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 24px', textAlign: 'center' }}>
        <div ref={ctaRef}>
          <div className="fade-up" data-delay="0" style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.14em',
            color: 'var(--accent-forest)', marginBottom: '24px',
          }}>
            Take the Next Step
          </div>
          <h2 className="fade-up" data-delay="100" style={{
            fontFamily: 'var(--font-serif)', fontWeight: 400,
            fontSize: '38px', color: 'var(--text-primary)', marginBottom: '24px',
          }}>
            Apply for a consultation.
          </h2>
          <p className="fade-up" data-delay="200" style={{
            fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '16px',
            color: 'var(--text-muted)', maxWidth: '420px',
            margin: '0 auto 40px', lineHeight: 1.7,
          }}>
            Each consultation begins with a short application. We review every submission personally before any next step is recommended.
          </p>
          <div className="fade-up" data-delay="300">
            <Link href="/apply" style={{ textDecoration: 'none' }}>
              <CTAButton />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

