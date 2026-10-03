'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { person, about } from '@/data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ── Interest card ───────────────────────────────────────────────── */
function InterestCard({ label, description, index }) {
  const colors = [
    { accent: '#00e5ff', bg: 'rgba(0,229,255,0.06)', border: 'rgba(0,229,255,0.18)' },
    { accent: '#00cba8', bg: 'rgba(0,203,168,0.06)', border: 'rgba(0,203,168,0.18)' },
    { accent: '#7c4dff', bg: 'rgba(124,77,255,0.06)', border: 'rgba(124,77,255,0.18)' },
    { accent: '#ff6b4a', bg: 'rgba(255,107,74,0.06)', border: 'rgba(255,107,74,0.18)' },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.5 + 2}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      style={{
        padding: '1.25rem 1.5rem',
        borderRadius: 12,
        background: color.bg,
        border: `1px solid ${color.border}`,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = `0 8px 32px ${color.bg}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.625rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: color.accent,
          marginBottom: '0.625rem',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.0625rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em',
        }}
      >
        {label}
      </div>
      <p
        style={{
          fontSize: '0.875rem',
          lineHeight: 1.65,
          color: 'var(--text-secondary)',
          margin: 0,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

/* ── Identity map — vertical flow diagram ───────────────────────── */
function IdentityMap() {
  const nodes = ['Technology', 'SaaS', 'AI', 'Media', 'Digital Experiences'];

  return (
    <div
      aria-label="Professional identity map"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
        padding: '2rem 0',
      }}
    >
      {nodes.map((node, i) => {
        const isFirst = i === 0;
        const isLast = i === nodes.length - 1;
        const isCore = i === 2; // AI — middle node
        return (
          <div key={node} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Connector line above (skip first) */}
            {!isFirst && (
              <div
                aria-hidden="true"
                style={{
                  width: 1,
                  height: 28,
                  background: isCore
                    ? 'linear-gradient(180deg, rgba(0,229,255,0.3), rgba(124,77,255,0.3))'
                    : 'linear-gradient(180deg, rgba(0,229,255,0.15), rgba(0,203,168,0.15))',
                }}
              />
            )}

            {/* Node pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: isCore ? '0.625rem 1.875rem' : '0.5rem 1.5rem',
                borderRadius: '9999px',
                background: isCore
                  ? 'linear-gradient(135deg, rgba(0,229,255,0.14), rgba(124,77,255,0.10))'
                  : 'rgba(255,255,255,0.03)',
                border: isCore
                  ? '1px solid rgba(0,229,255,0.35)'
                  : '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-display)',
                fontSize: isCore ? '1rem' : '0.875rem',
                fontWeight: isCore ? 600 : 400,
                letterSpacing: '-0.01em',
                color: isCore ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                boxShadow: isCore ? '0 0 20px rgba(0,229,255,0.1)' : 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {node}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Nafis Sadik"
      className="section-base"
      style={{ padding: 'var(--spacing-section) clamp(1.5rem, 5vw, 3rem)' }}
    >
      {/* Ambient top divider */}
      <div className="line-h" style={{ maxWidth: 1280, margin: '0 auto 5rem' }} aria-hidden="true" />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              More than a{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00e5ff, #00cba8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                job title.
              </span>
            </>
          }
        />

        {/* Asymmetric two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'start',
          }}
        >
          {/* Left — Narrative text */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{
                fontSize: 'clamp(1.0625rem, 2vw, 1.1875rem)',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '1.75rem',
              }}
            >
              {about.intro}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true, margin: '-40px' }}
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                marginBottom: '2.5rem',
              }}
            >
              Currently working at{' '}
              <span style={{ color: 'var(--accent-teal)', fontWeight: 500 }}>TechDoor LLC</span>{' '}
              in Dhaka, Bangladesh, where I apply both technical depth and media literacy to the products and systems I engage with.
              My academic foundation in Computer Science and Engineering at{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Southeast University</span>{' '}
              informs the systematic way I approach problems.
            </motion.p>

            {/* Current status chip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true, margin: '-40px' }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 1.25rem',
                borderRadius: 10,
                background: 'rgba(0,203,168,0.06)',
                border: '1px solid rgba(0,203,168,0.2)',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--accent-teal)',
                  boxShadow: '0 0 8px var(--accent-teal)',
                  flexShrink: 0,
                  animation: 'pulse 2.5s ease-in-out infinite',
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.125rem',
                  }}
                >
                  Current Role
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {person.title} · TechDoor LLC
                </div>
              </div>
            </motion.div>

            {/* Identity map — desktop only, inline for mobile it's in right column */}
            <div className="lg:hidden" style={{ marginTop: '3rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                }}
              >
                Domain Map
              </div>
              <IdentityMap />
            </div>
          </div>

          {/* Right — Interest cards + identity map */}
          <div>
            {/* Identity map on lg+ only */}
            <div className="hidden lg:block" style={{ marginBottom: '3rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                }}
              >
                Domain Map
              </div>
              <IdentityMap />
            </div>

            {/* Interest cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {about.interests.map((item, i) => (
                <InterestCard key={item.label} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
