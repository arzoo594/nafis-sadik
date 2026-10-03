'use client';

import { motion } from 'framer-motion';
import { MapPin, Briefcase, Calendar, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience } from '@/data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ExperienceCard({ item, index }) {
  const isPresent = item.endDate === null;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, margin: '-40px' }}
      aria-label={`${item.role} at ${item.company}`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '0 2.5rem',
        position: 'relative',
      }}
    >
      {/* ── Timeline stem ────────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.3rem' }}>
        {/* Top dot */}
        <div
          aria-hidden="true"
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-teal))',
            boxShadow: '0 0 12px rgba(0,229,255,0.5)',
            flexShrink: 0,
            zIndex: 1,
          }}
        />
        {/* Vertical stem */}
        <div
          aria-hidden="true"
          style={{
            flex: 1,
            width: 1,
            minHeight: 40,
            background: 'linear-gradient(180deg, rgba(0,229,255,0.3), rgba(0,229,255,0.05))',
            marginTop: 6,
          }}
        />
      </div>

      {/* ── Card body ────────────────────────────────────────────── */}
      <div
        style={{
          padding: '1.75rem 2rem',
          borderRadius: 14,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '2rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.25s, box-shadow 0.25s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)';
          e.currentTarget.style.boxShadow = '0 0 40px rgba(0,229,255,0.04)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-subtle)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Corner accent */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 3,
            height: '100%',
            background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-teal), transparent)',
            borderRadius: '14px 0 0 14px',
          }}
        />

        {/* Header row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
              }}
            >
              {item.role}
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--accent-teal)',
                }}
              >
                {item.company}
              </span>
              {item.companyUrl && (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.company} website (opens in new tab)`}
                  style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                >
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>

          {/* Present badge */}
          {isPresent && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                background: 'rgba(0,229,255,0.08)',
                border: '1px solid rgba(0,229,255,0.22)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--accent-cyan)',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--accent-cyan)',
                  display: 'inline-block',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
                aria-hidden="true"
              />
              Present
            </span>
          )}
        </div>

        {/* Meta row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            <Calendar size={12} aria-hidden="true" />
            {item.startDate} — {isPresent ? 'Present' : item.endDate}
          </span>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            <MapPin size={12} aria-hidden="true" />
            {item.location}
          </span>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            <Briefcase size={12} aria-hidden="true" />
            {item.type} · {item.workMode}
          </span>
        </div>

        {/* Responsibilities */}
        {item.responsibilities && item.responsibilities.length > 0 && (
          <ul
            style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}
            aria-label="Responsibilities"
          >
            {item.responsibilities.map((r, ri) => (
              <li
                key={ri}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                  fontSize: '0.9375rem',
                  lineHeight: 1.65,
                  color: r.startsWith('Add ') ? 'var(--text-muted)' : 'var(--text-secondary)',
                  fontStyle: r.startsWith('Add ') ? 'italic' : 'normal',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    marginTop: '0.55rem',
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: 'var(--accent-cyan)',
                    flexShrink: 0,
                    opacity: r.startsWith('Add ') ? 0.3 : 0.7,
                  }}
                />
                {r}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional experience"
      style={{ padding: 'var(--spacing-section) clamp(1.5rem, 5vw, 3rem)' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'start',
          }}
        >
          {/* Left — heading */}
          <div>
            <SectionHeading
              index="02"
              label="Experience"
              title={
                <>
                  Professional{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #00e5ff, #00cba8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    journey.
                  </span>
                </>
              }
              description="Where I have applied my skills and grown as a technology and media professional."
            />
          </div>

          {/* Right — timeline */}
          <div aria-label="Experience timeline">
            {experience.map((item, i) => (
              <ExperienceCard key={item.id} item={item} index={i} />
            ))}

            {/* End node */}
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: 0 }}
              aria-hidden="true"
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: '1px solid var(--border-mid)',
                  flexShrink: 0,
                }}
              />
              <span className="tech-label">More to come</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
