'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Fade-up observer hook
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

const sportsWords = [
  { text: 'Rowing', size: 72 },
  { text: 'Athletics', size: 52 },
  { text: 'Swimming', size: 60 },
  { text: 'Tennis', size: 44 },
  { text: 'Golf', size: 42 },
  { text: 'Volleyball', size: 36 },
];

const countryWords = [
  { text: 'Australia', size: 64 },
  { text: 'Singapore', size: 48 },
  { text: 'United Arab Emirates', size: 38 },
  { text: 'United Kingdom', size: 56 },
  { text: 'Hong Kong', size: 44 },
  { text: 'Canada', size: 52 },
  { text: 'New Zealand', size: 42 },
];

const outcomeWords = [
  { text: 'Ivy League programs', size: 32 },
  { text: 'Power Four Division I', size: 28 },
  { text: 'Division II & III', size: 24 },
  { text: 'Scholarship placements', size: 26 },
  { text: 'Preferred walk-on offers', size: 22 },
];

type WordItem = { text: string; size: number };

function buildWordList() {
  const all: { text: string; block: number; index: number }[] = [];
  sportsWords.forEach((w, i) => all.push({ text: w.text, block: 0, index: i }));
  countryWords.forEach((w, i) => all.push({ text: w.text, block: 1, index: i }));
  outcomeWords.forEach((w, i) => all.push({ text: w.text, block: 2, index: i }));
  return all;
}

const allWords = buildWordList();

interface HighlightedWord {
  block: number;
  index: number;
  opacity: number;
}

function AnimatedWord({
  word,
  block,
  index,
  highlighted,
  align,
}: {
  word: WordItem;
  block: number;
  index: number;
  highlighted: HighlightedWord | null;
  align: 'left' | 'center' | 'right';
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
        lineHeight: 1.1,
        cursor: 'default',
        textDecoration,
        textDecorationColor,
        transition: hovered ? 'none' : 'color 1.8s ease',
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
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0.16em',
        padding: '14px 36px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        borderRadius: 0,
      }}
    >
      Submit an Application
    </button>
  );
}

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [highlighted, setHighlighted] = useState<HighlightedWord | null>(null);
  const contextRef = useFadeUp();
  const ctaRef = useFadeUp();

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let cycleTimeout: ReturnType<typeof setTimeout>;
    let fadeInterval: ReturnType<typeof setInterval>;

    function pickAndHighlight() {
      const idx = Math.floor(Math.random() * allWords.length);
      const word = allWords[idx];

      setHighlighted({ block: word.block, index: word.index, opacity: 1 });

      fadeInterval = setInterval(() => {
        setHighlighted((prev) => {
          if (!prev) return null;
          const nextOp = prev.opacity - 0.05;
          if (nextOp <= 0) {
            clearInterval(fadeInterval);
            return null;
          }
          return { ...prev, opacity: nextOp };
        });
      }, 50);

      cycleTimeout = setTimeout(() => {
        clearInterval(fadeInterval);
        setHighlighted(null);
        cycleTimeout = setTimeout(pickAndHighlight, 200);
      }, 2200);
    }

    const startTimer = setTimeout(pickAndHighlight, 500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(cycleTimeout);
      clearInterval(fadeInterval);
    };
  }, []);

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <Image
          src="/Rowing 2 - green.jpg"
          alt="Rowing hero"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 30%',
            filter: 'brightness(0.88) saturate(0.9)',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          opacity: heroVisible ? 1 : 0,
          transition: 'opacity 1s ease',
        }}>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(48px, 8vw, 80px)',
            color: 'var(--accent-ivory)',
            letterSpacing: '0.1em',
            textAlign: 'center',
            margin: 0,
          }}>
            RECRUITING VICTORY
          </h1>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '22px',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            margin: 0,
          }}>
            Elite pathways for student-athletes pursuing U.S. universities.
          </p>
        </div>
      </section>

      {/* SECTION 2 — CONTEXT PARAGRAPH */}
      <section style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '120px 24px',
      }}>
        <div ref={contextRef} style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="fade-up" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--accent-forest)',
            marginBottom: '32px',
          }}>
            The Landscape
          </div>
          <p className="fade-up" style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '18px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: '64px',
          }}>
            Most families enter the U.S. college athletic recruiting process without a clear sense of when it begins, who drives it, or how institutions evaluate candidates beyond performance alone. The result is a fragmented, reactive experience that disadvantages high-performing athletes — not for lack of ability, but for lack of structure. Recruiting Victory provides that structure: a disciplined, individually calibrated framework that helps student-athletes at every stage move through the recruiting process with clarity, confidence, and a competitive position that reflects the full scope of who they are.
          </p>
          <div className="fade-up" style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '32px',
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
          }}>
            Powered by CAPS Global · The Institutional Standard for High School Athletic Recruiting Systems
          </div>
        </div>
      </section>

      {/* SECTION 3 — ANIMATED TYPOGRAPHY */}
      <section style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '160px 48px 140px',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: 'var(--accent-forest)',
          marginBottom: '80px',
        }}>
          Reach · Sport · Outcome
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '48px',
        }}>
          {/* Block 1 — Sports, left-aligned */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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

          {/* Block 2 — Countries, center-aligned */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            {countryWords.map((w, i) => (
              <AnimatedWord
                key={w.text}
                word={w}
                block={1}
                index={i}
                highlighted={highlighted}
                align="center"
              />
            ))}
          </div>

          {/* Block 3 — Outcomes, right-aligned */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
            {outcomeWords.map((w, i) => (
              <AnimatedWord
                key={w.text}
                word={w}
                block={2}
                index={i}
                highlighted={highlighted}
                align="right"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — APPLY CTA BAND */}
      <section style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '100px 24px',
        textAlign: 'center',
      }}>
        <div ref={ctaRef}>
          <div className="fade-up" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--accent-forest)',
            marginBottom: '24px',
          }}>
            Take the Next Step
          </div>
          <h2 className="fade-up" style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: '38px',
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}>
            Apply for a consultation.
          </h2>
          <p className="fade-up" style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '16px',
            color: 'var(--text-muted)',
            maxWidth: '420px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}>
            Each consultation begins with a short application. We review every submission personally before any next step is recommended.
          </p>
          <div className="fade-up">
            <Link href="/apply" style={{ textDecoration: 'none' }}>
              <CTAButton />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
