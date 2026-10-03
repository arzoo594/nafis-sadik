'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { education } from '@/data/profile';

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      style={{ padding: 'var(--spacing-section) clamp(1.5rem, 5vw, 3rem)' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'start',
          }}
        >
          {/* Left — heading */}
          <div>
            <SectionHeading
              index="05"
              label="Education"
              title={
                <>
                  Academic{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #7c4dff, #00cba8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    foundation.
                  </span>
                </>
              }
              description="The formal education that underpins my technical approach to technology and problem solving."
            />
          </div>

          {/* Right — education cards */}
          <div aria-label="Education list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((edu, i) => (
              <motion.article
                key={edu.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                aria-label={`${edu.degree} at ${edu.institution}`}
                style={{
                  padding: '2rem',
                  borderRadius: 16,
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(124,77,255,0.3)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(124,77,255,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top gradient bar */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'linear-gradient(90deg, #7c4dff, #00cba8, transparent)',
                  }}
                />

                {/* Icon + institution */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: 'rgba(124,77,255,0.1)',
                      border: '1px solid rgba(124,77,255,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={20} color="#7c4dff" strokeWidth={1.5} />
                  </div>

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
                      {edu.institution}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      <BookOpen size={12} color="var(--accent-violet)" aria-hidden="true" />
                      <span
                        style={{
                          fontSize: '0.9375rem',
                          color: '#7c4dff',
                          fontWeight: 500,
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {edu.field}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Degree + meta */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    alignItems: 'center',
                    marginBottom: edu.achievements && edu.achievements.length > 0 ? '1.25rem' : 0,
                  }}
                >
                  {edu.degree && (
                    <span className="tag-chip" style={{ borderColor: 'rgba(124,77,255,0.25)', color: '#7c4dff', background: 'rgba(124,77,255,0.07)' }}>
                      {edu.degree}
                    </span>
                  )}
                  {edu.startYear && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {edu.startYear} — {edu.endYear ?? 'Present'}
                    </span>
                  )}
                  {edu.location && (
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <MapPin size={11} aria-hidden="true" />
                      {edu.location}
                    </span>
                  )}
                </div>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <ul
                    style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                    aria-label="Academic achievements"
                  >
                    {edu.achievements.map((a, ai) => (
                      <li
                        key={ai}
                        style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-secondary)' }}
                      >
                        <span
                          style={{ marginTop: '0.5rem', width: 4, height: 4, borderRadius: '50%', background: '#7c4dff', flexShrink: 0 }}
                          aria-hidden="true"
                        />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Placeholder notice if years missing */}
                {!edu.startYear && (
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      fontStyle: 'italic',
                      margin: 0,
                      letterSpacing: '0.04em',
                    }}
                  >
                    // Add graduation year and achievements in data/profile.js → education
                  </p>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
