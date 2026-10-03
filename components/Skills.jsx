'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '@/data/profile';

/* ── Capability map node ─────────────────────────────────────────── */
function CapabilityNode({ label, isCore, index, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      role="listitem"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Connector line above (skip first) */}
      {index > 0 && (
        <div
          aria-hidden="true"
          style={{
            width: 1,
            height: 32,
            background: `linear-gradient(180deg, ${color.line}, transparent)`,
            marginBottom: 0,
          }}
        />
      )}

      {/* Node pill */}
      <div
        style={{
          padding: isCore ? '0.75rem 2.25rem' : '0.5625rem 1.75rem',
          borderRadius: '9999px',
          background: isCore
            ? `linear-gradient(135deg, ${color.bgCore})`
            : color.bg,
          border: `1px solid ${isCore ? color.borderCore : color.border}`,
          fontFamily: isCore ? 'var(--font-display)' : 'var(--font-body)',
          fontSize: isCore ? '1rem' : '0.9rem',
          fontWeight: isCore ? 600 : 400,
          letterSpacing: isCore ? '-0.015em' : '0.01em',
          color: isCore ? color.textCore : 'var(--text-secondary)',
          boxShadow: isCore ? `0 0 24px ${color.glow}` : 'none',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          cursor: 'default',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.04)';
          if (isCore) e.currentTarget.style.boxShadow = `0 0 36px ${color.glow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          if (isCore) e.currentTarget.style.boxShadow = `0 0 24px ${color.glow}`;
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

/* ── Domain cluster card ─────────────────────────────────────────── */
function DomainCard({ title, items, accent, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: '1.75rem',
        borderRadius: 14,
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        transition: 'border-color 0.25s, box-shadow 0.25s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accent}44`;
        e.currentTarget.style.boxShadow = `0 0 40px ${accent}08`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top accent bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '1.75rem',
          right: '1.75rem',
          height: 2,
          background: `linear-gradient(90deg, ${accent}, transparent)`,
          borderRadius: '0 0 2px 2px',
        }}
      />

      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6875rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: accent,
          marginBottom: '1.25rem',
          marginTop: '0.25rem',
        }}
      >
        {title}
      </div>

      <div
        role="list"
        aria-label={`${title} skills`}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
      >
        {items.map((item, i) => (
          <motion.span
            key={item.label}
            role="listitem"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + i * 0.06, duration: 0.4 }}
            style={{
              padding: '0.375rem 0.875rem',
              borderRadius: '9999px',
              background: `${accent}0d`,
              border: `1px solid ${accent}30`,
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s, border-color 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.borderColor = `${accent}55`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = `${accent}30`;
            }}
          >
            {item.label}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  // Build capability chain data
  const chainNodes = [
    { label: 'Technology', isCore: false },
    { label: 'Computer Science', isCore: false },
    { label: 'SaaS Development', isCore: true },
    { label: 'Artificial Intelligence', isCore: true },
    { label: 'Media', isCore: false },
    { label: 'Digital Products', isCore: false },
  ];

  const colorScheme = {
    line: 'rgba(0,229,255,0.25)',
    bg: 'rgba(255,255,255,0.03)',
    border: 'var(--border-subtle)',
    bgCore: 'rgba(0,229,255,0.12), rgba(0,203,168,0.08)',
    borderCore: 'rgba(0,229,255,0.35)',
    textCore: 'var(--accent-cyan)',
    glow: 'rgba(0,229,255,0.15)',
  };

  return (
    <section
      id="skills"
      aria-label="Skills and capabilities"
      style={{ padding: 'var(--spacing-section) clamp(1.5rem, 5vw, 3rem)' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeading
          index="03"
          label="Skills"
          title={
            <>
              Capability{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00e5ff, #7c4dff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                map.
              </span>
            </>
          }
          description="The domains and disciplines that define my professional focus."
          align="center"
        />

        {/* Capability chain — centred vertical flow */}
        <div
          role="list"
          aria-label="Core capabilities"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '4.5rem',
          }}
        >
          {chainNodes.map((node, i) => (
            <CapabilityNode
              key={node.label}
              label={node.label}
              isCore={node.isCore}
              index={i}
              color={colorScheme}
            />
          ))}
        </div>

        {/* Domain cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem',
          }}
        >
          <DomainCard
            title="Core Focus"
            items={skills.primary.filter((s) => ['SaaS Development', 'Artificial Intelligence'].includes(s.label))}
            accent="#00e5ff"
            delay={0}
          />
          <DomainCard
            title="Domain Expertise"
            items={skills.primary.filter((s) => ['Technology', 'Media', 'Computer Science', 'Digital Products'].includes(s.label))}
            accent="#00cba8"
            delay={0.1}
          />
          {skills.tools.length > 0 && (
            <DomainCard
              title="Tools & Technologies"
              items={skills.tools}
              accent="#7c4dff"
              delay={0.2}
            />
          )}
        </div>

        {/* Placeholder notice for tools */}
        {skills.tools.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              letterSpacing: '0.04em',
            }}
          >
            // Tools & technologies can be added in data/profile.js → skills.tools
          </motion.p>
        )}
      </div>
    </section>
  );
}
