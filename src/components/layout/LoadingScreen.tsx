'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade after 1.6s, remove from DOM after fade completes
    const fadeTimer = setTimeout(() => setFading(true), 1600);
    const removeTimer = setTimeout(() => setVisible(false), 2100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--void)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <style>{`
        @keyframes logo-in {
          from { opacity: 0; transform: scale(0.85) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes logo-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.45; transform: scale(0.92); }
          50%      { opacity: 0.85; transform: scale(1.08); }
        }
        @keyframes ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bar-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes text-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      {/* ZEKVIAN "Z" mark with pulsing glow + rotating ring */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '120px',
          height: '120px',
          animation: 'logo-in 0.6s cubic-bezier(0.4,0,0.2,1) forwards',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(45,212,191,0.35), transparent 70%)',
            filter: 'blur(6px)',
            animation: 'glow-pulse 2s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '104px',
            height: '104px',
            borderRadius: '50%',
            background:
              'conic-gradient(from 0deg, transparent 0deg, var(--pulse) 90deg, transparent 200deg)',
            WebkitMask:
              'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
            animation: 'ring-spin 1.4s linear infinite',
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '84px',
            height: '84px',
            borderRadius: '22px',
            background:
              'linear-gradient(135deg, rgba(45,212,191,0.18), rgba(45,212,191,0.04))',
            border: '1px solid rgba(45,212,191,0.32)',
            boxShadow: '0 0 30px rgba(45,212,191,0.18)',
            animation: 'logo-float 2.4s ease-in-out infinite',
          }}
        >
          <Image
            src="/Zekvian%20Z.jpeg"
            alt="ZEKVIAN"
            width={84}
            height={84}
            style={{ borderRadius: '16px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Wordmark */}
      <div
        style={{
          animation: 'text-in 0.5s 0.2s cubic-bezier(0.4,0,0.2,1) both',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: 'var(--mist)',
            letterSpacing: '-0.02em',
          }}
        >
          ZEKVIAN
        </p>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: '160px',
          height: '2px',
          borderRadius: '1px',
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden',
          animation: 'text-in 0.4s 0.3s cubic-bezier(0.4,0,0.2,1) both',
        }}
      >
        <div
          style={{
            height: '100%',
            borderRadius: '1px',
            background: 'var(--pulse)',
            animation: 'bar-fill 1.4s 0.3s cubic-bezier(0.4,0,0.2,1) forwards',
            width: '0%',
          }}
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--mist)',
          opacity: 0.35,
          letterSpacing: '0.08em',
          animation: 'text-in 0.4s 0.5s cubic-bezier(0.4,0,0.2,1) both',
        }}
      >
        Powering the Digital Solution.
      </p>
    </div>
  );
}
