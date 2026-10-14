'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  MessageCircle,
  Repeat2,
  CreditCard,
  Truck,
  Store,
  LayoutDashboard,
  Settings2,
  ArrowLeft,
} from 'lucide-react';

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.16em]"
      style={{ borderColor: '#4169E1', background: '#4169E1', color: '#ffffff' }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#4169E1' }} />
      {children}
    </span>
  );
}

const SOLUTIONS = [
  { n: '01', icon: MessageCircle, title: 'AI WhatsApp Ordering Chatbot', desc: 'Customers send a raw or photographed grocery list to WhatsApp. The bot parses unstructured text/images, matches items against live store inventory, and updates quantities in real time, no manual clerk involvement needed.' },
  { n: '02', icon: Repeat2, title: 'Autonomous Substitution Engine', desc: 'When an item is out of stock, the AI immediately proposes alternatives based on brand, price, and category, preventing lost sales from stockouts.' },
  { n: '03', icon: CreditCard, title: 'In-Chat Checkout', desc: 'Dynamic pricing totals, last-minute list edits, digital invoicing, and secure payment links are all handled inside the WhatsApp conversation, no app switch required.' },
  { n: '04', icon: Truck, title: 'Delivery & Pickup Fulfillment', desc: 'Orders auto-dispatch to a driver app with route optimization and real-time WhatsApp tracking updates. Customers pre-approve and pay for pickup, then collect prepared orders with zero queue time.' },
  { n: '05', icon: Store, title: 'Storekeeper & Driver Apps', desc: 'Dedicated apps for packing (visual, high-efficiency picking lists) and delivery (route tracking, payment receipts) streamline the operational side of every order.' },
  { n: '06', icon: LayoutDashboard, title: 'Owner/Manager SaaS Dashboard', desc: 'Live revenue analytics (daily/weekly/monthly/yearly), out-of-stock predictive alerts, top-seller tracking, and franchise-level multi-store toggling with role-based access.' },
  { n: '07', icon: Settings2, title: 'Global Web Admin Console', desc: 'Centralized control panel for managing price catalogs, stock levels, and store data across the network.' },
];

const PAIN_POINTS: Array<[string, string]> = [
  ['10 to 25 min manual stock checks', 'Sub-1-second inventory lookup'],
  ['Lost sales on out-of-stock items', 'Instant AI-suggested substitutes'],
  ['Manual re-order hassle', '1-click re-order of past lists'],
  ['No delivery visibility', 'Live tracking pushed via WhatsApp'],
  ['Cash/manual payment friction', 'Integrated link payments + auto-invoicing'],
  ['Single-store-only tools', 'Multi-branch toggle and consolidated reporting'],
];

const NET_EFFECTS = [
  { value: '~80%', label: 'reduction in manual labor tied to order-taking and stock verification' },
  { value: 'Zero', label: 'revenue leakage from stockouts via automated substitution' },
  { value: 'Near 0', label: 'in-store queue time, faster checkout and pickup' },
  { value: 'Day 1', label: 'franchise-ready, one owner account scales across unlimited branches' },
];

export default function SolutionsPage() {
  const [featured, ...rest] = SOLUTIONS;

  return (
    <div className="flex w-full flex-col" style={{ background: 'var(--void)' }}>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative w-full overflow-hidden py-20 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(15,15,15,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,15,15,0.045) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)' }} />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(65,105,225,0.20), rgba(65,105,225,0.08), transparent 70%)' }} />
        </div>
        <div className="relative site-container">
          <Link href="/" className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition hover:text-[#4169E1]">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <Kicker>SOLUTIONS · 7 CAPABILITIES LIVE</Kicker>
          <h1 className="font-display mt-5 max-w-3xl text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            What Zekvian does, <span className="text-[#4169E1]">available now</span>
          </h1>
          <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-neutral-600">
            Seven production-ready capabilities that transform a traditional supermarket into a fully automated, WhatsApp-native retail operation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/product" className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#4169E1] hover:shadow-md">
              Explore product
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured + grid ──────────────────────── */}
      <section className="w-full border-t border-neutral-200/70 py-20 sm:py-24">
        <div className="site-container">
          <article className="group relative mb-4 overflow-hidden rounded-[28px] border border-neutral-200/90 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(65,105,225,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#4169E1] hover:shadow-[0_36px_90px_-24px_rgba(65,105,225,0.35)] sm:p-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(65,105,225,0.10) 0%, rgba(47,74,200,0.05) 35%, transparent 65%)' }} />
              <div className="absolute -top-24 right-10 h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(65,105,225,0.18), transparent 70%)' }} />
              <span className="absolute -top-6 right-4 font-display text-[9rem] font-extrabold leading-none text-neutral-950 opacity-[0.05] select-none">{featured.n}</span>
            </div>
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-neutral-950 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <featured.icon className="h-6 w-6" />
              </span>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.16em]" style={{ borderColor: '#4169E1', background: '#4169E1', color: '#ffffff' }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#4169E1' }} />
                  FLAGSHIP · {featured.n}
                </span>
                <h2 className="font-display mt-4 max-w-xl text-3xl text-neutral-950 sm:text-4xl" style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}>{featured.title}</h2>
                <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-neutral-600">{featured.desc}</p>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s) => (
              <article key={s.n} className="group relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4169E1] hover:shadow-[0_24px_60px_-16px_rgba(65,105,225,0.28)]">
                <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(65,105,225,0.14),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span aria-hidden className="pointer-events-none absolute top-3 right-4 font-display text-5xl font-extrabold text-neutral-950 opacity-[0.05] select-none">{s.n}</span>
                <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-neutral-950 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-[17px] font-bold tracking-tight text-neutral-950">{s.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-neutral-600">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain comparison (same as About pattern) ─ */}
      <section className="w-full border-t border-neutral-200/70 bg-white py-20 sm:py-24">
        <div className="site-container">
          <Kicker>WHAT THIS SOLVES</Kicker>
          <h2 className="font-display mt-5 mb-12 text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            Pain point today → Zekvian fix now
          </h2>
          <div className="flex flex-col gap-3">
            {PAIN_POINTS.map(([pain, fix]) => (
              <div key={pain} className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr]">
                <div className="flex items-center gap-3 rounded-2xl px-5 py-4" style={{ border: '1px solid #fecdd3', background: '#fff1f2' }}>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[13px] font-bold text-white" style={{ background: '#ef4444' }}>✕</span>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: '#991b1b' }}>{pain}</p>
                </div>
                <div aria-hidden className="hidden self-center font-bold text-[#4169E1] md:block">→</div>
                <div className="flex items-center gap-3 rounded-2xl px-5 py-4" style={{ border: '1px solid #a7f3d0', background: '#ecfdf5' }}>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[13px] font-bold text-white" style={{ background: '#16a34a' }}>✓</span>
                  <p className="text-[14.5px] leading-relaxed font-semibold" style={{ color: '#166534' }}>{fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Net effect metrics panel (same as landing) ─ */}
      <section className="w-full border-t border-neutral-200/70 py-20 sm:py-24">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[28px] border border-neutral-200/90 bg-white px-6 py-12 shadow-[0_30px_80px_-30px_rgba(65,105,225,0.25)] sm:px-12 sm:py-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(15,15,15,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,15,15,0.05) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 80% 90% at 50% 0%, black, transparent 75%)' }} />
              <div className="absolute -top-32 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(65,105,225,0.22), rgba(65,105,225,0.10), transparent 70%)' }} />
            </div>
            <div className="relative">
              <Kicker>NET EFFECT</Kicker>
              <h2 className="font-display mt-5 text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
                For a store adopting <span className="text-[#4169E1]">Zekvian today</span>
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {NET_EFFECTS.map((e) => (
                  <div key={e.label} className="rounded-2xl border border-neutral-200/90 bg-neutral-50 p-6 transition hover:-translate-y-0.5 hover:border-[#4169E1] hover:shadow-[0_18px_44px_-16px_rgba(65,105,225,0.3)]">
                    <div className="font-display text-3xl font-extrabold text-neutral-950">{e.value}</div>
                    <p className="mt-2 text-[13px] leading-snug text-neutral-600">{e.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
