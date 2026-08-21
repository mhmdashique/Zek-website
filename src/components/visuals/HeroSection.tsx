'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PhoneShowcase } from '@/components/visuals/PhoneShowcase';

const STATS = [
  { end: 42, suffix: 'ms', label: 'Avg allocation time' },
  { end: 3204, suffix: '', label: 'Orders / day' },
  { end: 99.4, suffix: '%', label: 'On-time fulfillment' },
];

function useCountUp(target: number, duration = 1200, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const isFloat = target % 1 !== 0;
    const raf = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(
        isFloat
          ? Math.round(target * eased * 10) / 10
          : Math.round(target * eased)
      );
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function StatItem({
  end,
  suffix,
  label,
  active,
}: {
  end: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const val = useCountUp(end, 1200, active);
  return (
    <div
      className="count-appear"
      style={{ animationDelay: '1.8s', animationFillMode: 'both' }}
    >
      <div
        className="font-mono text-2xl md:text-3xl"
        style={{ color: 'var(--pulse)' }}
      >
        {val}
        {suffix}
      </div>
      <div
        className="mt-1 text-xs"
        style={{ color: 'var(--mist)', opacity: 0.6 }}
      >
        {label}
      </div>
    </div>
  );
}

const LINES = ['Powering the future with', 'ZEKVIAN'];

export function HeroSection() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Small delay so fonts are loaded before reveal
    const t = setTimeout(() => setStarted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="hero-surface relative flex min-h-[92vh] w-full flex-col justify-center overflow-hidden pt-20"
    >
      {/* SVG filter for glow */}
      <svg width={0} height={0} style={{ position: 'absolute' }}>
        <defs>
          <filter id="pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          {/* Left: copy */}
          <div className="w-full max-w-4xl text-center lg:text-left">
            {/* Badge */}
            <div
              className="mb-10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
              style={{
                border: '1px solid #a5b4fc',
                color: 'var(--pulse)',
                background: 'var(--badge-bg)',
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: 'var(--pulse)' }}
              />
              Introduce AI Powered Integrations for Automations
            </div>

            {/* Headline — masked line reveal */}
            <h1
              className="font-display mb-8"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              {LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <span
                    className={started ? 'line-reveal' : ''}
                    style={{
                      display: 'block',
                      animationDelay: `${i * 0.12}s`,
                      animationFillMode: 'both',
                      color: i === 1 ? 'var(--pulse)' : 'var(--mist)',
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className="mb-10 max-w-2xl lg:mr-auto"
              style={{
                color: 'var(--mist)',
                opacity: 0.7,
                fontSize: 'var(--text-17)',
                lineHeight: 1.6,
              }}
            >
              An AI platform that automates operations across the world's
              leading companies, unlocking unprecedented efficiency and
              innovation.
            </p>

            {/* CTAs — appear after headline settles */}
            <div
              className="flex flex-col gap-3 sm:flex-row lg:justify-start"
              style={{
                opacity: started ? 1 : 0,
                transition: 'opacity 0.4s 1.6s var(--ease-std)',
              }}
            >
              <Link
                href="/#demo-video"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium"
                style={{ background: 'var(--pulse)', color: '#ffffff' }}
              >
                Watch Demo →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium"
                style={{
                  border: '1px solid var(--line)',
                  color: 'var(--mist)',
                }}
              >
                Request Demo
              </Link>
            </div>

            {/* Stats */}
            <div
              className="mt-12 flex justify-center gap-10 pt-8 lg:justify-start"
              style={{ borderTop: '1px solid var(--line)' }}
            >
              {STATS.map((s) => (
                <StatItem key={s.label} {...s} active={started} />
              ))}
            </div>
          </div>

          <PhoneShowcase />
        </div>
      </div>
    </section>
  );
}
