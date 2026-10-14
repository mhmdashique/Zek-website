'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Zap,
  RefreshCcw,
  Repeat2,
  BellRing,
  CreditCard,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const SOLVE = [
  { icon: Zap, title: 'Sub-1s inventory lookup', desc: 'Replaces 10–25 min manual stock checks with a real-time POS query.' },
  { icon: RefreshCcw, title: 'AI-suggested substitutes', desc: 'Instant alternatives for out-of-stock items. Stockouts stop leaking revenue.' },
  { icon: Repeat2, title: '1-click re-order', desc: 'Customers re-order entire past lists in seconds from inside chat.' },
  { icon: BellRing, title: 'Live WhatsApp tracking', desc: 'Delivery visibility pushed to the customer. No app needed.' },
  { icon: CreditCard, title: 'Link payments + auto-invoice', desc: 'UPI / card checkout with invoice generated automatically.' },
  { icon: BarChart3, title: 'Multi-branch reporting', desc: 'Franchise-ready day one. One account scales across all stores.' },
];

export function SolutionsScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [leftShift, setLeftShift] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(() =>
    SOLVE.map(() => false),
  );
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(SOLVE.map(() => true));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    );

    cardRefs.current.forEach((node) => {
      if (node) io.observe(node);
    });
    return () => io.disconnect();
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;

      // 0 → section top hits viewport bottom, 1 → section bottom leaves viewport top
      const total = rect.height + viewport;
      const scrolled = viewport - rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / total));
      // Left column drifts downward as the user scrolls down through the section
      setLeftShift(progress * 72);

      // Active card = closest card center to viewport center
      let closest = 0;
      let closestDist = Number.POSITIVE_INFINITY;
      cardRefs.current.forEach((node, i) => {
        if (!node) return;
        const r = node.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - viewport / 2);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIdx((prev) => (prev === closest ? prev : closest));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-20 sm:py-24"
      style={{ background: '#fff', borderTop: '1px solid var(--line)' }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(65,105,225,0.10), transparent 70%)',
          }}
        />
        <div
          className="absolute -right-40 -bottom-20 h-[380px] w-[380px] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(65,105,225,0.10), transparent 70%)',
          }}
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — sticky + scrolls downward with the page */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div
              style={
                reduceMotion
                  ? undefined
                  : {
                      transform: `translateY(${leftShift}px)`,
                      transition: 'transform 0.12s linear',
                      willChange: 'transform',
                    }
              }
            >
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.16em]"
                style={{
                  borderColor: '#4169E1',
                  background: '#4169E1',
                  color: '#ffffff',
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: '#4169E1' }}
                />
                SOLUTIONS
              </span>
              <h2
                className="font-display mt-5 text-4xl text-neutral-950 sm:text-5xl"
                style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}
              >
                What this solves <br />
                on day one
              </h2>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-neutral-600">
                The six leaks that quietly kill independent grocery margins —
                fixed inside one WhatsApp thread.
              </p>
              <Link
                href="/solutions"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#4169E1] bg-[#F8FAFF] px-6 py-3 text-sm font-semibold text-[#4169E1] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                View all solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right — cards reveal + active-follow on scroll */}
          <div className="flex flex-col gap-3">
            {SOLVE.map((s, i) => {
              const isActive = i === activeIdx;
              const isVisible = visible[i];
              return (
                <div
                  key={s.title}
                  ref={(node) => {
                    cardRefs.current[i] = node;
                  }}
                  data-idx={i}
                  className="group flex items-start gap-4 rounded-2xl border bg-white p-5"
                  style={{
                    borderColor: isActive ? '#4169E1' : 'rgba(229,231,235,0.9)',
                    boxShadow: isActive
                      ? '0 18px 44px -16px rgba(65,105,225,0.3)'
                      : '0 1px 2px rgba(15,15,15,0.04)',
                    transform:
                      reduceMotion || isVisible
                        ? 'translateY(0)'
                        : 'translateY(28px)',
                    opacity: reduceMotion || isVisible ? 1 : 0,
                    transition: reduceMotion
                      ? 'border-color 0.25s ease, box-shadow 0.25s ease'
                      : `opacity 0.55s ease ${i * 0.06}s, transform 0.55s cubic-bezier(0,0,0.2,1) ${i * 0.06}s, border-color 0.25s ease, box-shadow 0.25s ease`,
                  }}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#4169E1] text-white transition group-hover:bg-[#4169E1] group-hover:text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[15.5px] font-bold tracking-tight text-neutral-950">
                        {s.title}
                      </h3>
                      <span className="font-mono text-[11px] text-neutral-300">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-1 text-[14px] leading-relaxed text-neutral-600">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
