'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
import { person, social, contact } from '@/data/profile';

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socialLinks = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    handle: 'Nafis Sadik',
    href: social.linkedin,
    icon: <LinkedinIcon size={20} />,
    color: '#0077b5',
    accent: 'rgba(0,119,181,0.15)',
    border: 'rgba(0,119,181,0.25)',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    handle: 'i.nafissadik',
    href: social.facebook,
    icon: <FacebookIcon size={20} />,
    color: '#1877f2',
    accent: 'rgba(24,119,242,0.12)',
    border: 'rgba(24,119,242,0.22)',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    handle: 'nafis.__.sadik',
    href: social.instagram,
    icon: <InstagramIcon size={20} />,
    color: '#e1306c',
    accent: 'rgba(225,48,108,0.12)',
    border: 'rgba(225,48,108,0.22)',
  },
  {
    key: 'github',
    label: 'GitHub',
    handle: 'NAFIS_GITHUB_USERNAME',
    href: social.github,
    icon: <GithubIcon size={20} />,
    color: '#e8edf7',
    accent: 'rgba(232,237,247,0.06)',
    border: 'rgba(232,237,247,0.12)',
  },
];

function SocialCard({ item, index }) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.label} — ${item.handle} (opens in new tab)`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.25rem 1.5rem',
        borderRadius: 14,
        background: item.accent,
        border: `1px solid ${item.border}`,
        textDecoration: 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = `0 12px 40px ${item.accent}`;
        e.currentTarget.style.borderColor = item.color + '55';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = item.border;
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          background: `${item.color}18`,
          border: `1px solid ${item.color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: item.color,
          flexShrink: 0,
        }}
      >
        {item.icon}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '0.125rem',
          }}
        >
          {item.label}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.04em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          @{item.handle}
        </div>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={16}
        style={{ color: 'var(--text-muted)', flexShrink: 0, opacity: 0.6 }}
        aria-hidden="true"
      />
    </motion.a>
  );
}

export default function Contact() {
  const hasEmail = contact.email && contact.email !== 'EMAIL_PLACEHOLDER';

  return (
    <section
      id="contact"
      aria-label="Contact Nafis Sadik"
      style={{ padding: 'var(--spacing-section) clamp(1.5rem, 5vw, 3rem)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient glow blob */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Top divider */}
        <div className="line-h" style={{ marginBottom: '5rem' }} aria-hidden="true" />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '1rem' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-cyan)',
              }}
            >
              06 — Contact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
            }}
          >
            Let&apos;s build something{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00e5ff 0%, #00cba8 50%, #7c4dff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              meaningful.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.16, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              maxWidth: '52ch',
              margin: '0 auto',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}
          >
            Whether you have a project in mind, a role to discuss, or simply want to connect — reach out through any of these channels.
          </motion.p>

          {/* Location indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', marginTop: '1rem' }}
          >
            <MapPin size={13} color="var(--accent-coral)" aria-hidden="true" />
            <span className="tech-label">{person.location}</span>
          </motion.div>
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}
        >
          {hasEmail ? (
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Send email to ${contact.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.125rem 2.25rem',
                borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(0,229,255,0.14), rgba(0,203,168,0.10))',
                border: '1px solid rgba(0,229,255,0.3)',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                textDecoration: 'none',
                boxShadow: '0 0 40px rgba(0,229,255,0.08)',
                transition: 'background 0.25s, box-shadow 0.25s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,229,255,0.22), rgba(0,203,168,0.16))';
                e.currentTarget.style.boxShadow = '0 0 60px rgba(0,229,255,0.14)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,229,255,0.14), rgba(0,203,168,0.10))';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0,229,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={22} strokeWidth={1.5} aria-hidden="true" />
              {contact.email}
            </a>
          ) : (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.125rem 2.25rem',
                borderRadius: 14,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-mid)',
              }}
            >
              <Mail size={20} strokeWidth={1.5} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                  letterSpacing: '0.04em',
                }}
              >
                // Add email in data/profile.js → contact.email
              </span>
            </div>
          )}
        </motion.div>

        {/* Social grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '1rem',
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {socialLinks.map((item, i) => (
            <SocialCard key={item.key} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
