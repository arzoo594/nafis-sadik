'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, BookOpen } from 'lucide-react';

function GithubIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
import SectionHeading from './SectionHeading';
import { projects } from '@/data/profile';

const categoryColors = {
  SaaS:            { text: '#00e5ff', bg: 'rgba(0,229,255,0.08)',  border: 'rgba(0,229,255,0.22)' },
  AI:              { text: '#7c4dff', bg: 'rgba(124,77,255,0.08)', border: 'rgba(124,77,255,0.22)' },
  Technology:      { text: '#00cba8', bg: 'rgba(0,203,168,0.08)',  border: 'rgba(0,203,168,0.22)' },
  Media:           { text: '#ff6b4a', bg: 'rgba(255,107,74,0.08)', border: 'rgba(255,107,74,0.22)' },
  Web:             { text: '#00e5ff', bg: 'rgba(0,229,255,0.08)',  border: 'rgba(0,229,255,0.22)' },
  'Digital Product':{ text: '#7c4dff', bg: 'rgba(124,77,255,0.08)', border: 'rgba(124,77,255,0.22)' },
  default:         { text: '#8fa3c8', bg: 'rgba(143,163,200,0.06)', border: 'rgba(143,163,200,0.15)' },
};

function getCategoryColor(category) {
  return categoryColors[category] || categoryColors.default;
}

/* ── Project image placeholder ───────────────────────────────────── */
function ProjectImagePlaceholder({ index, category }) {
  const color = getCategoryColor(category);
  const patterns = [
    // Pattern 1 — circuit-like grid
    <svg key="p1" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <rect width="400" height="280" fill="transparent" />
      {/* Grid lines */}
      {[0,1,2,3,4,5,6].map(i => (
        <line key={`h${i}`} x1="0" y1={i*46} x2="400" y2={i*46} stroke={color.border} strokeWidth="0.5" strokeDasharray="4 4" />
      ))}
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="280" stroke={color.border} strokeWidth="0.5" strokeDasharray="4 4" />
      ))}
      {/* Corner markers */}
      <rect x="12" y="12" width="20" height="20" fill="none" stroke={color.text} strokeWidth="1" opacity="0.4" />
      <rect x="368" y="12" width="20" height="20" fill="none" stroke={color.text} strokeWidth="1" opacity="0.4" />
      <rect x="12" y="248" width="20" height="20" fill="none" stroke={color.text} strokeWidth="1" opacity="0.4" />
      {/* Centre mark */}
      <circle cx="200" cy="140" r="24" fill="none" stroke={color.text} strokeWidth="1" opacity="0.3" />
      <circle cx="200" cy="140" r="4" fill={color.text} opacity="0.5" />
      <line x1="176" y1="140" x2="160" y2="140" stroke={color.text} strokeWidth="1" opacity="0.3" />
      <line x1="224" y1="140" x2="240" y2="140" stroke={color.text} strokeWidth="1" opacity="0.3" />
      <line x1="200" y1="116" x2="200" y2="100" stroke={color.text} strokeWidth="1" opacity="0.3" />
      <text x="200" y="185" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={color.text} opacity="0.35" letterSpacing="2">PROJECT {String(index+1).padStart(2,'0')}</text>
    </svg>,
    // Pattern 2 — diagonal scan
    <svg key="p2" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <rect width="400" height="280" fill="transparent" />
      {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
        <line key={i} x1={i*80-200} y1="0" x2={i*80+200} y2="280" stroke={color.border} strokeWidth="0.6" />
      ))}
      <rect x="140" y="90" width="120" height="100" rx="8" fill="none" stroke={color.text} strokeWidth="1" opacity="0.3" />
      <rect x="160" y="108" width="80" height="64" rx="4" fill={color.bg} />
      <text x="200" y="146" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill={color.text} opacity="0.5">{`0${index+1}`}</text>
      <text x="200" y="222" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={color.text} opacity="0.3" letterSpacing="3">COMING SOON</text>
    </svg>,
    // Pattern 3 — orbital
    <svg key="p3" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <rect width="400" height="280" fill="transparent" />
      <ellipse cx="200" cy="140" rx="150" ry="80" fill="none" stroke={color.border} strokeWidth="0.75" strokeDasharray="6 4" />
      <ellipse cx="200" cy="140" rx="100" ry="55" fill="none" stroke={color.text} strokeWidth="0.5" opacity="0.2" />
      <circle cx="200" cy="140" r="18" fill={color.bg} stroke={color.text} strokeWidth="1" opacity="0.5" />
      <text x="200" y="145" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill={color.text} opacity="0.6">{`P${index+1}`}</text>
      <circle cx="350" cy="140" r="5" fill={color.text} opacity="0.6" />
      <circle cx="200" cy="60" r="3" fill={color.text} opacity="0.4" />
      <text x="200" y="222" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={color.text} opacity="0.3" letterSpacing="3">ADD PROJECT IMAGE</text>
    </svg>,
  ];

  return patterns[index % patterns.length];
}

/* ── Project card ────────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const color = getCategoryColor(project.category);
  const isPlaceholder = project.title.startsWith('Add ');

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      aria-label={isPlaceholder ? `Project placeholder ${project.index}` : project.title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        background: 'var(--bg-surface)',
        border: `1px solid ${hovered ? color.border : 'var(--border-subtle)'}`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.25), 0 0 0 1px ${color.border}` : 'none',
      }}
    >
      {/* ── Image area ──────────────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          background: `linear-gradient(135deg, var(--bg-deep) 0%, var(--bg-surface) 100%)`,
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <ProjectImagePlaceholder index={index} category={project.category} />
          </div>
        )}

        {/* Project index overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '0.875rem',
            left: '0.875rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: color.text,
            background: color.bg,
            border: `1px solid ${color.border}`,
            padding: '0.25rem 0.625rem',
            borderRadius: '9999px',
          }}
        >
          {project.index}
        </div>

        {/* Arrow reveal on hover */}
        <AnimatePresence>
          {hovered && (project.liveUrl || project.caseStudyUrl) && (
            <motion.div
              key="arrow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: '0.875rem',
                right: '0.875rem',
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color.text,
              }}
              aria-hidden="true"
            >
              <ArrowUpRight size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Content area ────────────────────────────────────────── */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Category tag */}
        <div style={{ marginBottom: '0.75rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: color.text,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.125rem, 2vw, 1.3125rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: isPlaceholder ? 'var(--text-muted)' : 'var(--text-primary)',
            fontStyle: isPlaceholder ? 'italic' : 'normal',
            marginBottom: '0.625rem',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9rem',
            lineHeight: 1.68,
            color: 'var(--text-muted)',
            fontStyle: isPlaceholder ? 'italic' : 'normal',
            flex: 1,
            marginBottom: '1.25rem',
          }}
        >
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="tag-chip" style={{ fontSize: '0.6875rem' }}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links row */}
        <div
          style={{
            display: 'flex',
            gap: '0.625rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — live site (opens in new tab)`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.375rem 0.875rem',
                borderRadius: 8,
                background: color.bg,
                border: `1px solid ${color.border}`,
                color: color.text,
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              <ExternalLink size={13} /> Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — GitHub repository (opens in new tab)`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.375rem 0.875rem',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
            >
              <GithubIcon size={13} /> Code
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — case study (opens in new tab)`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.375rem 0.875rem',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
              }}
            >
              <BookOpen size={13} /> Case Study
            </a>
          )}

          {/* No links placeholder */}
          {!project.liveUrl && !project.githubUrl && !project.caseStudyUrl && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                letterSpacing: '0.04em',
              }}
            >
              // Add project links in data/profile.js
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
 <section
  id="projects"
  aria-label="Projects"
  style={{
    padding: 'var(--spacing-section) clamp(1.5rem, 5vw, 3rem)',
  }}
>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeading
          index="04"
          label="Projects"
          title={
            <>
              Selected{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00cba8, #7c4dff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                work.
              </span>
            </>
          }
          description="Things I have built. Details and links can be added in data/profile.js."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
