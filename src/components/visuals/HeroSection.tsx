'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { PhoneShowcase } from '@/components/visuals/PhoneShowcase';

const LINES = ['POWERING THE', 'FUTURE WITH', "ZEKVIAN'S"];

const PARTNER_COMPANIES = [
  'Uber',
  'Swiggy',
  'Zomato',
  'Blinkit',
  'Zepto',
  'BigBasket',
  "Domino's",
  'Starbucks',
];

export function HeroSection() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ background: '#F8FAFF' }}
    >
      {/* premium backdrop: grid + gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,15,15,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,15,15,0.045) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)',
          }}
        />
        <div
          className="absolute -top-40 left-1/2 h-[480px] w-[860px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(65,105,225,0.08), rgba(65,105,225,0.04), transparent 70%)' }}
        />
        <div
          className="absolute top-40 -left-32 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(65,105,225,0.06), transparent 70%)' }}
        />
        <div
          className="absolute top-64 -right-28 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.05), transparent 70%)' }}
        />
      </div>

      {/* Giant ash-gray ZEKVIAN watermark — centered */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(6rem, 20vw, 18rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              color: 'rgba(15,15,15,0.06)',
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
          >
            ZEKVIAN
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-14 pb-16 sm:px-8 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
          {/* Left copy */}
          <div className="text-center lg:text-left">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4169E1] bg-white/80 py-1.5 pr-4 pl-1.5 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur"
              style={{
                opacity: started ? 1 : 0,
                transform: started ? 'translateY(0)' : 'translateY(8px)',
                transition: 'all 0.5s cubic-bezier(0,0,0.2,1)',
              }}
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-neutral-950 px-2.5 py-1 text-[11px] font-semibold text-white">
                <Zap className="h-3 w-3" /> New
              </span>
              WhatsApp is now your smart storefront
              <ArrowRight className="h-3.5 w-3.5 text-[#4169E1]" />
            </div>

            <h1
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                fontWeight: 700,
              }}
            >
              {LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1">
                  <span
                    className={started ? 'line-reveal' : ''}
                    style={{
                      display: 'block',
                      animationDelay: `${i * 0.12}s`,
                      animationFillMode: 'both',
                      color: 'var(--mist)',
                      fontSize:
                        i === 2
                          ? 'clamp(2.8rem, 6.5vw, 5rem)'
                          : 'clamp(1.9rem, 4vw, 3rem)',
                      lineHeight: i === 2 ? 1.02 : 1.06,
                      fontWeight: i === 2 ? 800 : 700,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {i === 2 ? (
                      <span
                        style={{
                          background: 'linear-gradient(92deg, #4169E1 10%, #4169E1 50%, #4169E1 90%)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent',
                        }}
                      >
                        {line}
                      </span>
                    ) : (
                      line
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className="mx-auto mb-8 max-w-xl text-[17px] leading-relaxed text-neutral-600 lg:mx-0"
              style={{
                opacity: started ? 1 : 0,
                transform: started ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.55s 0.35s cubic-bezier(0,0,0.2,1)',
              }}
            >
              Zekvian turns a messy WhatsApp message, text, photo, or voice note,
              into a confirmed, paid grocery order. Live stock, smart substitutes,
              1-click payment. No app, no website.
            </p>

            <div
              className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
              style={{
                opacity: started ? 1 : 0,
                transition: 'opacity 0.5s 0.55s ease',
              }}
            >
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4169E1] to-[#2F4AC8] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(65,105,225,0.65)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(65,105,225,0.75)]"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-white">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                See how it works
              </Link>
            </div>

          </div>

          {/* Right: phones with gradient glow (mockups untouched) */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div
              aria-hidden
              className="absolute inset-x-10 top-8 bottom-8 rounded-[48px] blur-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(65,105,225,0.10), rgba(65,105,225,0.06), rgba(47,74,200,0.05))', opacity: 0.6 }}
            />
            <div className="relative">
              <PhoneShowcase />
            </div>
          </div>
        </div>
      </div>

      {/* partner marquee */}
      <div className="relative z-10 border-t border-neutral-200/70 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-8">
          <p
            className="mb-3 text-center font-mono text-[11px] tracking-[0.18em] text-neutral-400"
          >
            CONNECTS WITH YOUR STACK
          </p>
          <div className="relative overflow-hidden" style={{ whiteSpace: 'nowrap' }}>
            <span
              aria-hidden
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '72px',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.9), transparent)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
            <span
              aria-hidden
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '72px',
                background: 'linear-gradient(270deg, rgba(255,255,255,0.9), transparent)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
            <div className="marquee-left" style={{ display: 'flex', width: 'max-content' }}>
              {[0, 1].map((dup) => (
                <span key={dup} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  {PARTNER_COMPANIES.map((name) => (
                    <span
                      key={`${dup}-${name}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        flexShrink: 0,
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: '#64748b',
                      }}
                    >
                      <span style={{ padding: '0 22px' }}>{name}</span>
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: '#4169E1',
                          flexShrink: 0,
                          opacity: 0.6,
                        }}
                      />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
