import { ImageResponse } from 'next/og';

export const alt = 'Nafis Sadik — Technology & Media Specialist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#050810',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* ── Background grid ─────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* ── Radial glow ──────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-5%',
            width: '55%',
            height: '80%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,203,168,0.12) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            right: '-5%',
            width: '50%',
            height: '70%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(124,77,255,0.10) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* ── NS mark (right side) ─────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            right: 80,
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Outer ring */}
          <div
            style={{
              position: 'absolute',
              width: 280,
              height: 280,
              borderRadius: '50%',
              border: '1px solid rgba(0,229,255,0.12)',
              display: 'flex',
            }}
          />
          {/* Middle ring */}
          <div
            style={{
              position: 'absolute',
              width: 220,
              height: 220,
              borderRadius: '50%',
              border: '1px solid rgba(0,229,255,0.20)',
              display: 'flex',
            }}
          />
          {/* Centre disc */}
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,203,168,0.10))',
              border: '1px solid rgba(0,229,255,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 60,
                fontWeight: 800,
                letterSpacing: '-3px',
                color: '#00e5ff',
              }}
            >
              NS
            </span>
          </div>
        </div>

        {/* ── Main text content ─────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            left: 72,
            top: 0,
            bottom: 0,
            width: '55%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 0,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#00e5ff',
                display: 'flex',
              }}
            />
            <span
              style={{
                fontSize: 14,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#00e5ff',
                fontWeight: 500,
              }}
            >
              Technology &amp; Media Specialist
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: '-4px',
              lineHeight: 0.92,
              color: '#e8edf7',
              marginBottom: 32,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Nafis</span>
            <span
              style={{
                background: 'linear-gradient(135deg, #00e5ff 0%, #00cba8 60%, #7c4dff 100%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Sadik
            </span>
          </div>

          {/* Tags row */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Technology', 'Media', 'AI', 'SaaS'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '6px 16px',
                  borderRadius: 9999,
                  background: 'rgba(0,229,255,0.08)',
                  border: '1px solid rgba(0,229,255,0.20)',
                  fontSize: 13,
                  color: '#8fa3c8',
                  letterSpacing: '0.06em',
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Location */}
          <div
            style={{
              marginTop: 28,
              fontSize: 13,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: '#4d6490',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ color: '#ff6b4a', display: 'flex' }}>•</span>
            Dhaka, Bangladesh
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg, #00e5ff, #00cba8, #7c4dff)',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
