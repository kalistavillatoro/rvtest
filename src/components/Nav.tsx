'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Framework', href: '/about' },
    { label: 'Support Model', href: '/offerings' },
    { label: 'Apply', href: '/apply' },
  ];

  const navBg = scrolled || menuOpen ? 'var(--bg-primary)' : 'transparent';
  const navBorder = scrolled || menuOpen ? '1px solid var(--border)' : 'none';

  return (
    <>
      <nav
        className="nav-inner"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 48px',
          backgroundColor: navBg,
          borderBottom: navBorder,
          transition: 'background-color 0.4s ease',
        }}
      >
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

        {/* Desktop links */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                textTransform: 'uppercase',
                color: 'var(--accent-ivory)',
                letterSpacing: '0.08em',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '1px',
            backgroundColor: 'var(--accent-ivory)',
            transition: 'transform 0.3s ease',
            transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1px',
            backgroundColor: 'var(--accent-ivory)',
            transition: 'opacity 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1px',
            backgroundColor: 'var(--accent-ivory)',
            transition: 'transform 0.3s ease',
            transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '65px', left: 0, right: 0, bottom: 0,
          zIndex: 99,
          backgroundColor: 'var(--bg-primary)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 24px',
        }}>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontSize: '36px',
                color: 'var(--accent-ivory)',
                textDecoration: 'none',
                padding: '20px 0',
                borderBottom: '1px solid var(--border)',
                lineHeight: 1.2,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
