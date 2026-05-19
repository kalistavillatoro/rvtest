'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // On home page, transparent until past hero (100vh)
      // On other pages, always show solid
      if (isHome) {
        setScrolled(window.scrollY > window.innerHeight * 0.8);
      } else {
        setScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 48px',
      backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'background-color 0.4s ease, border-bottom 0.4s ease',
    }}>
      <Link href="/" style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        letterSpacing: '0.16em',
        color: 'var(--accent-ivory)',
        textDecoration: 'none',
        textTransform: 'uppercase',
      }}>
        Recruiting Victory
      </Link>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {['About', 'Offerings', 'Apply'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              textTransform: 'uppercase',
              color: 'var(--accent-ivory)',
              letterSpacing: '0.08em',
              textDecoration: 'none',
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
