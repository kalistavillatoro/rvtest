'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const sportsWords = [
  { text: 'Soccer',        size: 36 },
  { text: 'Basketball',    size: 34 },
  { text: 'Swimming',      size: 32 },
  { text: 'Rowing',        size: 38 },
  { text: 'Football',      size: 30 },
  { text: 'Tennis',        size: 28 },
  { text: 'Running',       size: 24 },
  { text: 'Track & Field', size: 22 },
  { text: 'Field Hockey',  size: 21 },
  { text: 'Volleyball',    size: 21 },
  { text: 'Ice Hockey',    size: 20 },
  { text: 'Lacrosse',      size: 19 },
  { text: 'Golf',          size: 18 },
  { text: 'Cross Country', size: 18 },
  { text: 'Baseball',      size: 18 },
  { text: 'Softball',      size: 17 },
  { text: 'Gymnastics',    size: 17 },
  { text: 'Rugby',         size: 17 },
  { text: 'Wrestling',     size: 17 },
  { text: 'Water Polo',    size: 17 },
  { text: 'Skiing',        size: 17 },
  { text: 'Fencing',       size: 17 },
  { text: 'Diving',        size: 17 },
  { text: 'Triathlon',     size: 17 },
];

const countryWords = [
  { text: 'United States',        size: 30 },  // scaled down — not the dominant signal
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
  { text: 'Academic excellence',          size: 36 },
  { text: 'Ivy League programs',          size: 34 },
  { text: 'Power Four Division I',        size: 32 },
  { text: 'Scholarship placements',       size: 29 },
  { text: 'All levels of collegiate sport', size: 26 },
  { text: 'Division II & III',            size: 25 },
  { text: 'Preferred walk-on offers',     size: 22 },
  { text: 'Program fit above prestige',   size: 20 },
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

// ─── homepage ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const img1Ref        = useRef<HTMLImageElement>(null);
  const img2WrapperRef = useRef<HTMLDivElement>(null);
  const [highlighted,  setHighlighted]  = useState<HighlightedWord | null>(null);
  const [heroVisible,  setHeroVisible]  = useState(false);
  const contextRef = useFadeUp();
  const ctaRef     = useFadeUp();

  // Hero text fade-in
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  // ── scroll-driven crossfade ───────────────────────────────────────────────
  // Image 1 holds for the vast majority of scroll; image 2 fades in only
  // in the final ~12% of the hero section scroll. rAF + smoothstep, no React
  // re-renders — directly mutates the wrapper's opacity for 60fps.
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

      // Subtle zoom on image 1 as you scroll (1.0 → 1.03) — gives
      // immediate visual feedback that scroll is doing something.
      if (img1Ref.current) {
        img1Ref.current.style.transform = `scale(${1 + raw * 0.03})`;
      }

      // Image 2 fades in only in the final 15% of hero scroll.
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

  // ── animated type cycle ──────────────────────────────────────────────────
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
          SECTION 1 — HERO  (200vh sticky scroll container)
          Scrolling immediately produces a subtle zoom on image 1.
          Image 2 fades in only in the final 15% of hero scroll.
      ════════════════════════════════════════════════════════════ */}
      <div ref={heroSectionRef} style={{ height: '200vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

          {/* ── Image 1 — base; subtle scroll-driven zoom via ref ── */}
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

          {/* ── Image 2 — fades in at end of hero scroll ── */}
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
                // No saturation reduction — keeps image sharp and vivid
                filter: 'brightness(0.88) contrast(1.10)',
              }}
            />
          </div>

          {/* ── Bottom gradient for contrast ── */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, rgba(14,16,15,0.40) 100%)',
            pointerEvents: 'none',
          }} />

          {/* ── Hero text ──────────────────────────────────────────
              Title removed. Single left-aligned subtitle only.
              Font: DM Sans 400 — strong, confident, institutional.
              Width kept narrow so the oars remain fully visible.
          ─────────────────────────────────────────────────────── */}
          <div
            className="hero-text-block"
            style={{
              position: 'absolute',
              left: '7vw',
              top: '40%',
              transform: 'translateY(-50%)',
              maxWidth: '420px',
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 300,
              fontSize: 'clamp(13px, 1.4vw, 17px)',
              color: 'var(--accent-ivory)',
              textAlign: 'left',
              margin: 0,
              lineHeight: 1.7,
              letterSpacing: '0.06em',
            }}>
              Structured pathways for student-athletes pursuing U.S. collegiate programs.
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
          SECTION 3 — ANIMATED TYPOGRAPHY
          Sports: 24 NCAA sports in 2 sub-columns (same total width
          as one column), so everyone sees their sport. Smaller text
          to fit; approximately same visual height as other columns.
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

          {/* Block 1 — Sports (2 sub-columns inside 1 column) */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              columnGap: '16px',
              rowGap: '3px',
            }}>
              {sportsWords.map((w, i) => (
                <AnimatedWord
                  key={w.text}
                  word={w}
                  block={0}
                  index={i}
                  highlighted={highlighted}
                  align="left"
                />
              ))}
            </div>
          </div>

          {/* Block 2 — Countries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '24px' }}>
            {countryWords.map((w, i) => (
              <AnimatedWord key={w.text} word={w} block={1} index={i} highlighted={highlighted} align="center" />
            ))}
          </div>

          {/* Block 3 — Outcomes */}
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
