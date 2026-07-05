'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { STRIPE_CHECKOUT_URL } from '@/lib/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Inside the System', href: '/offerings' },
    { label: 'About', href: '/about' },
  ];

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
          padding: '18px 48px',
          backgroundColor: scrolled || menuOpen ? 'rgba(253, 252, 250, 0.92)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background-color 0.35s ease, border-color 0.35s ease',
        }}
      >
        <Link href="/" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          letterSpacing: '0.14em',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          fontWeight: 400,
        }}>
          Recruiting Victory
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 400,
                color: 'var(--text-secondary)',
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={STRIPE_CHECKOUT_URL}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '14px' }}
          >
            Get the System
          </a>
        </div>

        {/* Mobile: compact CTA + hamburger */}
        <div className="nav-mobile-group" style={{ display: 'none', alignItems: 'center', gap: '14px' }}>
          <a
            href={STRIPE_CHECKOUT_URL}
            className="btn-primary"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            Get the System
          </a>
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
            display: 'block', width: '22px', height: '1.5px',
            backgroundColor: 'var(--text-primary)',
            transition: 'transform 0.3s ease',
            transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            backgroundColor: 'var(--text-primary)',
            transition: 'opacity 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1.5px',
            backgroundColor: 'var(--text-primary)',
            transition: 'transform 0.3s ease',
            transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
          }} />
        </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '58px', left: 0, right: 0, bottom: 0,
          zIndex: 99,
          backgroundColor: 'var(--bg-primary)',
          display: 'flex',
          flexDirection: 'column',
          padding: '32px 24px',
        }}>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '28px',
                color: 'var(--text-primary)',
                padding: '20px 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={STRIPE_CHECKOUT_URL}
            className="btn-primary"
            style={{ marginTop: '32px', textAlign: 'center' }}
          >
            Get the System
          </a>
        </div>
      )}
    </>
  );
}
