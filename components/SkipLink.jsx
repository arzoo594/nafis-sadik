'use client';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      onFocus={(e) => { e.currentTarget.style.top = '1rem'; }}
      onBlur={(e) => { e.currentTarget.style.top = '-100px'; }}
      style={{
        position: 'fixed',
        top: '-100px',
        left: '1rem',
        zIndex: 9999,
        padding: '0.75rem 1.5rem',
        background: 'var(--accent-cyan)',
        color: '#050810',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        borderRadius: 8,
        textDecoration: 'none',
        transition: 'top 0.2s',
      }}
    >
      Skip to main content
    </a>
  );
}
