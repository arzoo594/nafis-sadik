'use client';

import { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   BackgroundEffects
   Renders the global page background:
     1. Deep radial gradient atmosphere
     2. Subtle grid pattern
     3. Ambient glow blobs (static, CSS-driven)
     4. Custom cursor (desktop only)
   All purely decorative — hidden from assistive technologies.
───────────────────────────────────────────────────────────────────────────── */

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    // Only on pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    dot.style.opacity = '1';
    ringEl.style.opacity = '1';

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const onEnterLink = () => {
      dot.style.width = '6px';
      dot.style.height = '6px';
      ringEl.style.width = '52px';
      ringEl.style.height = '52px';
      ringEl.style.borderColor = 'rgba(0,229,255,0.7)';
    };

    const onLeaveLink = () => {
      dot.style.width = '';
      dot.style.height = '';
      ringEl.style.width = '';
      ringEl.style.height = '';
      ringEl.style.borderColor = '';
    };

    // Laggy ring follow via rAF
    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    document.addEventListener('mousemove', onMove, { passive: true });

    const interactives = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label[for]'
    );
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
      });
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
    </>
  );
}

export default function BackgroundEffects() {
  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Global background atmosphere */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -10,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,203,168,0.09) 0%, transparent 60%), ' +
            'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(124,77,255,0.06) 0%, transparent 50%), ' +
            'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(0,229,255,0.05) 0%, transparent 50%), ' +
            '#050810',
        }}
      />
    </>
  );
}
