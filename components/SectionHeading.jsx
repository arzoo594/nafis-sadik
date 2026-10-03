'use client';

import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────────────────
   SectionHeading
   Props:
     index       — e.g. "01"
     label       — small eyebrow label
     title       — main heading text (can contain a <span> for gradient word)
     description — optional paragraph below heading
     align       — 'left' (default) | 'center'
───────────────────────────────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function SectionHeading({
  index,
  label,
  title,
  description,
  align = 'left',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : ''}`}>
      {/* Index + label row */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : ''}`}
      >
        {index && (
          <span
            className="tech-label"
            style={{ color: 'var(--accent-cyan)' }}
          >
            {index}
          </span>
        )}
        {index && label && (
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: 24,
              height: 1,
              background: 'var(--border-mid)',
            }}
          />
        )}
        {label && (
          <span className="tech-label">{label}</span>
        )}
      </motion.div>

      {/* Main heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true, margin: '-60px' }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: 'var(--text-primary)',
          marginBottom: description ? '1.25rem' : 0,
        }}
      >
        {title}
      </motion.h2>

      {/* Optional description */}
      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true, margin: '-60px' }}
          style={{
            maxWidth: isCenter ? '56ch' : '52ch',
            margin: isCenter ? '0 auto' : undefined,
            color: 'var(--text-secondary)',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
          }}
        >
          {description}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={3}
        viewport={{ once: true, margin: '-60px' }}
        aria-hidden="true"
        style={{
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          justifyContent: isCenter ? 'center' : 'flex-start',
        }}
      >
        <div
          style={{
            width: 32,
            height: 2,
            background:
              'linear-gradient(90deg, var(--accent-cyan), var(--accent-teal))',
            borderRadius: 2,
          }}
        />
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'var(--accent-cyan)',
            boxShadow: '0 0 8px var(--accent-cyan)',
          }}
        />
        <div
          style={{
            width: 16,
            height: 1,
            background: 'var(--border-mid)',
            borderRadius: 1,
          }}
        />
      </motion.div>
    </div>
  );
}
