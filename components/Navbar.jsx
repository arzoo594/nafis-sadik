'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

/* Social brand icons — lucide-react ships without Github/Linkedin in this version */
function GithubIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { person, social } from '@/data/profile';

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Education',  href: '#education'   },
  { label: 'Contact',    href: '#contact'     },
];

function NavMonogram() {
  return (
    <Link
      href="/"
      aria-label={`${person.name} — home`}
      style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}
    >
      {/* NS glyph mark */}
      <div
        aria-hidden="true"
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: 'linear-gradient(135deg, rgba(0,229,255,0.12) 0%, rgba(0,203,168,0.08) 100%)',
          border: '1px solid rgba(0,229,255,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 0 12px rgba(0,229,255,0.1)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: '-0.5px',
            color: '#00e5ff',
          }}
        >
          NS
        </span>
      </div>

      {/* Name — hidden on small screens */}
      <span
        className="hidden sm:block"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: '0.9375rem',
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
        }}
      >
        {person.name}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef(null);

  /* ── Scroll detection ───────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ────────────────── */
  useEffect(() => {
    const sections = navLinks.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* ── Lock body scroll when mobile menu open ─────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* ── Close on outside click ─────────────────────────────────── */
  useEffect(() => {
    if (!mobileOpen) return;
    const handle = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    // Small delay so the menu animates out before scroll
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease, padding 0.3s ease',
          background: scrolled
            ? 'rgba(5,8,16,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(26,42,74,0.8)'
            : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: scrolled ? '0.875rem 2rem' : '1.25rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'padding 0.3s ease',
          }}
        >
          {/* Logo */}
          <NavMonogram />

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex" style={{ alignItems: 'center', gap: '0.25rem' }}>
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href;
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  aria-current={isActive ? 'true' : undefined}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'none',
                    padding: '0.5rem 0.875rem',
                    borderRadius: 6,
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 500 : 400,
                    letterSpacing: '0.01em',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    transition: 'color 0.2s, background 0.2s',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.background = 'rgba(0,229,255,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 16,
                        height: 1.5,
                        borderRadius: 1,
                        background: 'var(--accent-cyan)',
                        display: 'block',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right side — social icons + CTA */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: 8,
                color: 'var(--text-muted)',
                transition: 'color 0.2s, background 0.2s',
                cursor: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: 8,
                color: 'var(--text-muted)',
                transition: 'color 0.2s, background 0.2s',
                cursor: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <LinkedinIcon size={17} />
            </a>

            {/* CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.5rem 1.125rem',
                borderRadius: 8,
                background: 'rgba(0,229,255,0.1)',
                border: '1px solid rgba(0,229,255,0.25)',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'none',
                transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,229,255,0.16)';
                e.currentTarget.style.borderColor = 'rgba(0,229,255,0.5)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,229,255,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,229,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(0,229,255,0.25)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Let&apos;s Connect
              <ArrowUpRight size={14} strokeWidth={2} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            style={{
              background: 'none',
              border: '1px solid var(--border-subtle)',
              borderRadius: 8,
              padding: '0.5rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile menu ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-hidden="true"
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 850,
                background: 'rgba(5,8,16,0.7)',
                backdropFilter: 'blur(4px)',
              }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 900,
                width: 'min(320px, 85vw)',
                background: 'var(--bg-surface)',
                borderLeft: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
              }}
            >
              {/* Panel header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <NavMonogram />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  style={{
                    background: 'none',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 8,
                    padding: '0.4rem',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav
                aria-label="Mobile navigation"
                style={{ flex: 1, padding: '1.5rem' }}
              >
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {navLinks.map(({ label, href }, i) => (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <button
                        onClick={() => handleNavClick(href)}
                        style={{
                          width: '100%',
                          background: activeSection === href ? 'rgba(0,229,255,0.07)' : 'none',
                          border: 'none',
                          borderRadius: 8,
                          padding: '0.875rem 1rem',
                          textAlign: 'left',
                          fontFamily: 'var(--font-body)',
                          fontSize: '1rem',
                          fontWeight: activeSection === href ? 500 : 400,
                          color: activeSection === href ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'background 0.15s, color 0.15s',
                        }}
                      >
                        {label}
                        <ArrowUpRight size={14} style={{ opacity: 0.5 }} />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Social + CTA */}
              <div
                style={{
                  padding: '1.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <button
                  onClick={() => handleNavClick('#contact')}
                  style={{
                    padding: '0.875rem',
                    borderRadius: 8,
                    background: 'rgba(0,229,255,0.1)',
                    border: '1px solid rgba(0,229,255,0.25)',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  Let&apos;s Connect
                  <ArrowUpRight size={16} />
                </button>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {[
                    { href: social.github, label: 'GitHub', icon: <GithubIcon size={18} /> },
                    { href: social.linkedin, label: 'LinkedIn', icon: <LinkedinIcon size={18} /> },
                  ].map(({ href, label, icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in new tab)`}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.625rem',
                        borderRadius: 8,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.8125rem',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {icon}
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
