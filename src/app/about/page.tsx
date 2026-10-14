import Link from 'next/link';
import type { ReactNode } from 'react';
import { Eye, Target, ArrowLeft } from 'lucide-react';

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.16em]"
      style={{ borderColor: '#4169E1', background: '#4169E1', color: '#ffffff' }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#ffffff' }} />
      {children}
    </span>
  );
}

const STORY = [
  {
    n: '01',
    t: 'Higher margins',
    d: 'Increase operational margins by digitizing manual order-taking',
  },
  {
    n: '02',
    t: 'Zero bottlenecks',
    d: 'Eliminate employee administrative bottlenecks created by phone and in-person order management',
  },
  {
    n: '03',
    t: 'Loyal customers',
    d: 'Strengthen customer retention by meeting shoppers where they already are, in their chat inbox',
  },
];

const COMPARISON: Array<[string, string]> = [
  [
    'Phone-in orders, manual note-taking',
    'Structured lists parsed automatically from text or photo',
  ],
  [
    'Staff calling back to confirm stock',
    'Instant, live POS availability checks',
  ],
  [
    'Guesswork on substitutions',
    'AI-suggested alternatives at real, live pricing',
  ],
  [
    'Manual billing and paper receipts',
    'One-tap payment with instant digital invoicing',
  ],
];

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col bg-white">
      {/* ── Header ─────────────────────────────────── */}
      <section className="relative w-full overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(15,15,15,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,15,15,0.045) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)' }} />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(65,105,225,0.20), rgba(65,105,225,0.08), transparent 70%)' }} />
        </div>
        <div className="relative site-container">
          <Link href="/" className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition hover:text-[#4169E1]">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <Kicker>WHO WE ARE</Kicker>
          <h1
            className="font-display mt-5 max-w-3xl text-4xl text-neutral-950 sm:text-5xl"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}
          >
            Independent stores.
            <br />
            <span className="text-[#4169E1]">Same digital power.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-neutral-600">
            Four builders. One belief. Local stores deserve big tech.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/product"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#4169E1] hover:shadow-md"
            >
              Explore product
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our story ──────────────────────────────── */}
      <section className="w-full border-t border-neutral-200/70 py-20 sm:py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <Kicker>OUR STORY</Kicker>
              <h2
                className="font-display mt-5 text-4xl text-neutral-950 sm:text-5xl"
                style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}
              >
                Not a delivery app. Infrastructure.
              </h2>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-neutral-600">
                No marketplace. No middleman. Your chat is your store.
                Live inventory. Real checkout.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {STORY.map((item) => (
                <div
                  key={item.n}
                  className="group rounded-3xl border border-neutral-200/90 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4169E1] hover:shadow-[0_24px_60px_-16px_rgba(65,105,225,0.28)]"
                >
                  <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-neutral-950 text-sm font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {item.n}
                  </div>
                  <h3 className="mb-2 text-[17px] font-bold tracking-tight text-neutral-950">
                    {item.t}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-neutral-600">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ───────────────────────── */}
      <section className="w-full border-t border-neutral-200/70 py-20 sm:py-24" style={{ background: '#F8FAFF' }}>
        <div className="site-container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200/90 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4169E1] hover:shadow-[0_24px_60px_-16px_rgba(65,105,225,0.28)]">
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#4169E1] text-white shadow-lg">
                <Target className="h-5 w-5" />
              </div>
              <p className="mb-2 font-mono text-[11px] font-semibold tracking-[0.16em] text-[#4169E1]">
                OUR MISSION
              </p>
              <p className="text-[17px] font-semibold leading-relaxed tracking-tight text-neutral-950">
                To transform traditional, manually-run businesses into
                technologically superior operations, dramatically
                accelerating staff productivity, order accuracy, and
                customer retention.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200/90 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4169E1] hover:shadow-[0_24px_60px_-16px_rgba(65,105,225,0.28)]">
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#4169E1] text-white shadow-lg">
                <Eye className="h-5 w-5" />
              </div>
              <p className="mb-2 font-mono text-[11px] font-semibold tracking-[0.16em] text-[#4169E1]">
                OUR VISION
              </p>
              <p className="text-[17px] font-semibold leading-relaxed tracking-tight text-neutral-950">
                To democratize dynamic, conversational commerce for local
                businesses everywhere, so that fast, frictionless,
                everyday buying is simple and accessible to anyone,
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Old way vs Zekvian way ─────────────────── */}
      <section className="w-full border-t border-neutral-200/70 bg-white py-20 sm:py-24">
        <div className="site-container">
          <Kicker>WHY ZEKVIAN</Kicker>
          <h2
            className="font-display mt-5 mb-12 text-4xl text-neutral-950 sm:text-5xl"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}
          >
            The old way vs. the Zekvian way
          </h2>
          <div className="flex flex-col gap-3">
            {COMPARISON.map(([old, neo]) => (
              <div key={old} className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr]">
                <div
                  className="flex items-center gap-3 rounded-2xl px-5 py-4"
                  style={{ border: '1px solid #fecdd3', background: '#fff1f2' }}
                >
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[13px] font-bold text-white"
                    style={{ background: '#ef4444' }}
                  >
                    ✕
                  </span>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: '#991b1b' }}>
                    {old}
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  className="hidden self-center font-bold text-[#4169E1] md:block"
                >
                  →
                </div>
                <div
                  className="flex items-center gap-3 rounded-2xl px-5 py-4"
                  style={{ border: '1px solid #a7f3d0', background: '#ecfdf5' }}
                >
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[13px] font-bold text-white"
                    style={{ background: '#16a34a' }}
                  >
                    ✓
                  </span>
                  <p className="text-[14.5px] leading-relaxed font-semibold" style={{ color: '#166534' }}>
                    {neo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
