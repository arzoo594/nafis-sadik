'use client';

import { useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';

function LinkedinIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
import { person, social } from '@/data/profile';

/* ─────────────────────────────────────────────────────────────────────────────
   Digital Signal SVG — the core visual identity element
   Orbital rings, data grid, animated particles, monogram mark, signal lines.
   Pure SVG/CSS — no heavy libraries.
───────────────────────────────────────────────────────────────────────────── */
function DigitalSignalMark({ reduced }) {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      style={{ width: '100%', height: '100%', maxWidth: 480 }}
    >
      <defs>
        {/* Cyan radial glow */}
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
        </radialGradient>

        {/* Teal subtle glow */}
        <radialGradient id="tealGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00cba8" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#00cba8" stopOpacity="0" />
        </radialGradient>

        {/* Stroke gradient for rings */}
        <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#00cba8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7c4dff" stopOpacity="0.5" />
        </linearGradient>

        {/* Monogram gradient */}
        <linearGradient id="monoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00e5ff" />
          <stop offset="100%" stopColor="#00cba8" />
        </linearGradient>

        {/* Clip for tick marks */}
        {/* <clipPath id="ringClip1">
          <circle cx="240" cy="240" r="168" />
        </clipPath> */}
        <clipPath id="profileClip">
  <circle cx="240" cy="240" r="40" />
</clipPath>

        {/* Filter — soft glow */}
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Ambient glow fills ────────────────────────────────── */}
      <circle cx="240" cy="240" r="200" fill="url(#coreGlow)" />
      <circle cx="240" cy="240" r="160" fill="url(#tealGlow)" />

      {/* ── Outer data grid dots ──────────────────────────────── */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * 2 * Math.PI;
        const x = 240 + Math.cos(angle) * 210;
        const y = 240 + Math.sin(angle) * 210;
        return (
          <circle key={`grid-${i}`} cx={x} cy={y} r="1.5" fill="#1a2a4a" />
        );
      })}

      {/* ── Orbital rings ────────────────────────────────────── */}
      {/* Ring 1 — outermost, dashed */}
      <circle
        cx="240" cy="240" r="196"
        stroke="#1a2a4a"
        strokeWidth="0.75"
        strokeDasharray="4 8"
        strokeLinecap="round"
      />

      {/* Ring 2 — gradient stroke */}
      <circle
        cx="240" cy="240" r="168"
        stroke="url(#ringGradient)"
        strokeWidth="1"
        strokeDasharray="120 20 60 20"
        strokeLinecap="round"
        style={reduced ? {} : { animation: 'spinCW 40s linear infinite' }}
      />

      {/* Ring 3 — mid, solid dim */}
      <circle
        cx="240" cy="240" r="136"
        stroke="rgba(0,203,168,0.2)"
        strokeWidth="0.75"
      />

      {/* Ring 4 — inner ring */}
      <circle
        cx="240" cy="240" r="104"
        stroke="rgba(0,229,255,0.12)"
        strokeWidth="0.5"
        strokeDasharray="3 6"
        style={reduced ? {} : { animation: 'spinCCW 28s linear infinite' }}
      />

      {/* ── Crosshair lines ───────────────────────────────────── */}
      <line x1="44" y1="240" x2="96" y2="240" stroke="rgba(0,229,255,0.18)" strokeWidth="0.75" />
      <line x1="384" y1="240" x2="436" y2="240" stroke="rgba(0,229,255,0.18)" strokeWidth="0.75" />
      <line x1="240" y1="44" x2="240" y2="96" stroke="rgba(0,229,255,0.18)" strokeWidth="0.75" />
      <line x1="240" y1="384" x2="240" y2="436" stroke="rgba(0,229,255,0.18)" strokeWidth="0.75" />

      {/* ── 45° diagonal marks ───────────────────────────────── */}
      <line x1="92" y1="92" x2="107" y2="107" stroke="rgba(124,77,255,0.25)" strokeWidth="0.75" />
      <line x1="388" y1="92" x2="373" y2="107" stroke="rgba(124,77,255,0.25)" strokeWidth="0.75" />
      <line x1="92" y1="388" x2="107" y2="373" stroke="rgba(124,77,255,0.25)" strokeWidth="0.75" />
      <line x1="388" y1="388" x2="373" y2="373" stroke="rgba(124,77,255,0.25)" strokeWidth="0.75" />

      {/* ── Tick marks on ring 2 ──────────────────────────────── */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 240, cy = 240, r = 168;
        const x1 = cx + Math.cos(rad) * (r - 7);
        const y1 = cy + Math.sin(rad) * (r - 7);
        const x2 = cx + Math.cos(rad) * (r + 7);
        const y2 = cy + Math.sin(rad) * (r + 7);
        return (
          <line
            key={`tick-${deg}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(0,229,255,0.35)"
            strokeWidth="1"
          />
        );
      })}

      {/* ── Animated orbiting nodes ──────────────────────────── */}
      <g style={reduced ? {} : { animation: 'spinCW 12s linear infinite', transformOrigin: '240px 240px' }}>
        <circle cx="408" cy="240" r="4" fill="#00e5ff" filter="url(#glow)" opacity="0.9" />
        <circle cx="408" cy="240" r="8" fill="rgba(0,229,255,0.1)" />
      </g>
      <g style={reduced ? {} : { animation: 'spinCCW 18s linear infinite', transformOrigin: '240px 240px' }}>
        <circle cx="240" cy="72" r="3" fill="#00cba8" filter="url(#glow)" opacity="0.8" />
        <circle cx="240" cy="72" r="6" fill="rgba(0,203,168,0.1)" />
      </g>
      <g style={reduced ? {} : { animation: 'spinCW 22s linear infinite', transformOrigin: '240px 240px' }}>
        <circle
          cx={240 + 136 * Math.cos(Math.PI * 0.7)}
          cy={240 + 136 * Math.sin(Math.PI * 0.7)}
          r="2.5"
          fill="#7c4dff"
          filter="url(#glow)"
          opacity="0.85"
        />
      </g>

      {/* ── Centre backdrop disc ──────────────────────────────── */}
      <circle
        cx="240" cy="240" r="64"
        fill="rgba(13,21,40,0.9)"
        stroke="rgba(0,229,255,0.2)"
        strokeWidth="1"
      />
      <circle
        cx="240" cy="240" r="64"
        fill="none"
        stroke="rgba(0,229,255,0.1)"
        strokeWidth="6"
        filter="url(#strongGlow)"
      />

      {/* ── NS Monogram ───────────────────────────────────────── */}
     {/* ── Profile Photo ─────────────────────────────────────── */}

<circle 
  cx="240" 
  cy="240" 
  r="100" 
  fill="rgba(13,21,40,0.35)" 
  stroke="rgba(0,229,255,0.2)" 
  strokeWidth="1" 
/>

<clipPath id="profileImageClip">
  <circle cx="240" cy="240" r="100" />
</clipPath>


<image
  href="https://i.ibb.co.com/G3bJ1mxY/nafis-sadik-1.webp"
  x="135"
  y="115"
  width="200"
  height="200"
  preserveAspectRatio="xMidYMin slice"
  clipPath="url(#profileImageClip)"
/>

<circle 
  cx="240" 
  cy="240" 
  r="103" 
  fill="none" 
  stroke="rgba(0,229,255,0.18)" 
  strokeWidth="5" 
  filter="url(#strongGlow)" 
/>
      {/* ── Coordinate labels ─────────────────────────────────── */}
      <text x="252" y="82" fontFamily="monospace" fontSize="8" fill="rgba(0,229,255,0.4)" letterSpacing="1">24.8°N</text>
      <text x="370" y="253" fontFamily="monospace" fontSize="8" fill="rgba(0,229,255,0.4)" letterSpacing="1">90.4°E</text>

      {/* ── Signal pulse lines ────────────────────────────────── */}
      <g filter="url(#glow)" opacity="0.6">
        <line x1="240" y1="176" x2="240" y2="156" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="304" y1="240" x2="324" y2="240" stroke="#00cba8" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* ── CSS keyframes injected inline ────────────────────── */}
      <style>{`
        @keyframes spinCW  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
        @keyframes spinCCW { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
      `}</style>
    </svg>
  );
}

/* ── Social icon pill ───────────────────────────────────────────── */
function SocialPill({ href, label, icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in new tab)`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.4rem 0.875rem',
        borderRadius: '9999px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-secondary)',
        fontSize: '0.8125rem',
        fontFamily: 'var(--font-body)',
        textDecoration: 'none',
        transition: 'border-color 0.2s, color 0.2s, background 0.2s',
        cursor: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)';
        e.currentTarget.style.color = 'var(--text-primary)';
        e.currentTarget.style.background = 'rgba(0,229,255,0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.color = 'var(--text-secondary)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
      }}
    >
      {icon}
      {children}
    </a>
  );
}

/* ── Facebook icon (not in Lucide default set, using SVG) ────────── */
function FacebookIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const reduced = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '7rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Background grid */}
      <div
        className="bg-grid"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, opacity: 0.6 }}
      />

      {/* Vertical accent line — left edge */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 'clamp(1.5rem, 4vw, 3rem)',
          top: '15%',
          bottom: '15%',
          width: 1,
          background: 'linear-gradient(180deg, transparent, rgba(0,229,255,0.15) 30%, rgba(0,229,255,0.15) 70%, transparent)',
        }}
      />

      <div
      className="hero-grid"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 3rem)',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0, auto)',
          gap: 'clamp(3rem, 8vw, 6rem)',
          alignItems: 'center',
        }}
      >
        {/* ── Left: Text content ─────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 640 }}
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.375rem 0.875rem 0.375rem 0.625rem',
                borderRadius: '9999px',
                background: 'rgba(0,229,255,0.06)',
                border: '1px solid rgba(0,229,255,0.18)',
              }}
            >
              {/* Pulsing dot */}
              <span
                aria-hidden="true"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--accent-cyan)',
                  display: 'inline-block',
                  boxShadow: '0 0 8px var(--accent-cyan)',
                  animation: reduced ? 'none' : 'pulse 2s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-cyan)',
                }}
              >
                Technology &amp; Media Specialist
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                marginBottom: '0.25rem',
                color: 'var(--text-primary)',
              }}
            >
              {person.firstName}
            </h1>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                marginBottom: '2rem',
                background: 'linear-gradient(135deg, #00e5ff 0%, #00cba8 60%, #7c4dff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {person.lastName}
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.0625rem, 2.5vw, 1.25rem)',
              lineHeight: 1.55,
              color: 'var(--text-secondary)',
              maxWidth: '52ch',
              marginBottom: '1.5rem',
            }}
          >
            {person.tagline}
          </motion.p>

          {/* Micro labels */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '2.5rem',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              <MapPin size={11} style={{ color: 'var(--accent-coral)' }} aria-hidden="true" />
              Based in Dhaka, Bangladesh
            </span>
            <span aria-hidden="true" style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border-mid)', display: 'inline-block' }} />
            <span className="tech-label">Technology / Media / AI</span>
            <span aria-hidden="true" style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border-mid)', display: 'inline-block' }} />
            <span className="tech-label" style={{ color: 'var(--accent-teal)' }}>TechDoor LLC</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '3rem' }}
          >
            {/* Primary CTA */}
            <button
            onClick={() => {
  const projects = document.getElementById('projects');

  if (projects) {
    const y = projects.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }
}} className='cursor-pointer'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.875rem',
                borderRadius: 10,
                background: 'linear-gradient(135deg, rgba(0,229,255,0.18), rgba(0,203,168,0.12))',
                border: '1px solid rgba(0,229,255,0.35)',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                cursor: 'none',
                boxShadow: '0 0 0 0 rgba(0,229,255,0)',
                transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,229,255,0.25), rgba(0,203,168,0.18))';
                e.currentTarget.style.borderColor = 'rgba(0,229,255,0.55)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(0,229,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,229,255,0.18), rgba(0,203,168,0.12))';
                e.currentTarget.style.borderColor = 'rgba(0,229,255,0.35)';
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(0,229,255,0)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore My Work
              <ArrowDown size={15} strokeWidth={2} />
            </button>

            {/* Secondary CTA */}
            <a
             href="https://www.linkedin.com/in/inafissadik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn (opens in new tab)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.875rem',
                borderRadius: 10,
                background: 'transparent',
                border: '1px solid var(--border-mid)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 400,
                textDecoration: 'none',
                cursor: 'none',
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,229,255,0.25)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-mid)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Connect With Me
              <LinkedinIcon size={15} />
            </a>
          </motion.div>

          {/* Social links row */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}
          >
            <SocialPill href={social.linkedin} label="LinkedIn" icon={<LinkedinIcon size={14} />}>
              LinkedIn
            </SocialPill>
            <SocialPill href={social.facebook} label="Facebook" icon={<FacebookIcon size={14} />}>
              Facebook
            </SocialPill>
            <SocialPill href={social.instagram} label="Instagram" icon={<InstagramIcon size={14} />}>
              Instagram
            </SocialPill>
            <SocialPill href={social.github} label="GitHub" icon={<GithubIcon size={14} />}>
              GitHub
            </SocialPill>
          </motion.div>
        </motion.div>

        {/* ── Right: Digital Signal Visual ─────────────────────── */}
        <motion.div
          variants={visualVariants}
          initial="hidden"
          animate="visible"
          className="flex"
          style={{
            width: 'clamp(280px, 36vw, 460px)',
            height: 'clamp(280px, 36vw, 460px)',
            flexShrink: 0,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          aria-hidden="true"
        >
          {/* Ambient glow behind the mark */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <DigitalSignalMark reduced={reduced} />
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.625rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(180deg, rgba(0,229,255,0.4), transparent)',
            animation: reduced ? 'none' : 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* Inline keyframes for hero-specific animations */}
      {/* <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(0.6); transform-origin: top; }
        }
      `}</style> */}
      <style>{`
  @media (max-width: 1023px) {
    .hero-grid {
      grid-template-columns: 1fr !important;
    }

    .hero-grid > div:last-child {
      grid-row: 1;
      justify-self: center;
    }

    .hero-grid > div:first-child {
      grid-row: 2;
    }
  }

  @keyframes pulse { 
    0%, 100% { opacity: 1; } 
    50% { opacity: 0.4; } 
  } 

  @keyframes scrollPulse { 
    0%, 100% { opacity: 0.6; transform: scaleY(1); transform-origin: top; } 
    50% { opacity: 1; transform: scaleY(0.6); transform-origin: top; } 
  }
`}</style>
    </section>
  );
}
