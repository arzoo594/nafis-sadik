import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '6px',
          border: '1px solid #1a2a4a',
        }}
      >
        <span
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 700,
            fontSize: 14,
            color: '#00e5ff',
            letterSpacing: '-0.5px',
          }}
        >
          NS
        </span>
      </div>
    ),
    { ...size }
  );
}
