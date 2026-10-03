import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #050810 0%, #0d1528 100%)',
          borderRadius: '38px',
        }}
      >
        {/* Subtle ring */}
        <div
          style={{
            position: 'absolute',
            width: 140,
            height: 140,
            borderRadius: '50%',
            border: '1.5px solid rgba(0,229,255,0.25)',
            display: 'flex',
          }}
        />
        <span
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 700,
            fontSize: 72,
            color: '#00e5ff',
            letterSpacing: '-3px',
          }}
        >
          NS
        </span>
      </div>
    ),
    { ...size }
  );
}
