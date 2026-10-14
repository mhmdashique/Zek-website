import { HeroSection } from '@/components/visuals/HeroSection';
import { HowItWorks } from '@/components/visuals/HowItWorks';
import { SolutionsScroll } from '@/components/visuals/SolutionsScroll';
import { FAQSection } from '@/components/visuals/FAQSection';
import { PricingSection } from '@/components/visuals/PricingSection';
import { TeamSection } from '@/components/visuals/TeamSection';
import { Testimonials } from '@/components/visuals/Testimonials';
import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  MessageCircle,
  ScanSearch,
  Repeat2,
  BadgeIndianRupee,
  MousePointerClick,
  Truck,
  ArrowRight,
} from 'lucide-react';

function Kicker({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.16em]"
      style={
        dark
          ? { borderColor: 'rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.06)', color: '#FFFFFF' }
          : { borderColor: '#4169E1', background: '#4169E1', color: '#ffffff' }
      }
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#FFFFFF' }} />
      {children}
    </span>
  );
}

const KEY_FEATURES = [
  { icon: MessageCircle, title: 'Order via WhatsApp', desc: 'Raw list as text, photo of a chit, or a voice note. No app, no signup.', col: 'md:col-span-2' },
  { icon: ScanSearch, title: 'Smart item matching', desc: 'AI parses the list and matches it to live store inventory in milliseconds.' },
  { icon: Repeat2, title: 'Auto-substitutions', desc: "Out of stock? AI suggests live alternatives so you never lose the sale." },
  { icon: BadgeIndianRupee, title: 'Real-time pricing', desc: 'Prices pulled live from POS. What the customer sees is what they pay.' },
  { icon: MousePointerClick, title: '1-click checkout', desc: 'In-chat payment link with auto-generated GST invoice.' },
  { icon: Truck, title: 'Doorstep delivery', desc: 'Confirmation, tracking and updates — all inside the same chat.', col: 'md:col-span-2' },
];

const METRICS = [
  { value: '~80%', label: 'reduction in manual order-taking labor' },
  { value: 'Day 1', label: 'franchise-ready across unlimited branches' },
  { value: 'Near 0', label: 'queue time with pre-approved pickup' },
  { value: 'Zero', label: 'revenue lost to stockouts via AI subs' },
];

const PILLARS = [
  { n: '01', title: 'Higher operational margins', desc: 'Digitize manual order-taking and free staff for fulfillment, not phone calls.' },
  { n: '02', title: 'Zero admin bottlenecks', desc: 'Kill the chaos of phone + walk-in order management with one AI inbox.' },
  { n: '03', title: 'Customers who return', desc: 'Meet shoppers where they already live — their WhatsApp inbox.' },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col" style={{ background: 'var(--void)' }}>
      <HeroSection />
      <HowItWorks />

      {/* ── Product bento ─────────────────────────────── */}
      <section id="product" className="relative w-full overflow-hidden py-20 sm:py-24" style={{ background: 'var(--void)', borderTop: '1px solid var(--line)' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-80 w-[720px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(65,105,225,0.12), transparent 70%)' }} />
        </div>
        <div className="relative site-container">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Kicker>PRODUCT</Kicker>
              <h2 className="font-display mt-5 text-4xl tracking-tight text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
                A WhatsApp-native AI assistant for <span style={{ background: 'linear-gradient(92deg, #4169E1, #4169E1)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>any store</span>
              </h2>
              <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-neutral-600">
                Connects to your live catalog, inventory and payments — whatever platform you run on.
                &ldquo;2 kg rice, a dozen eggs and some milk&rdquo; becomes a paid order with no human in the loop.
              </p>
            </div>
            <Link href="#product" className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-[#4169E1] bg-[#F0F8FF] px-5 py-3 text-sm font-semibold text-[#4169E1] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Explore full product <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {KEY_FEATURES.map((f) => (
              <div
                key={f.title}
                className={`group relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4169E1] hover:shadow-[0_24px_60px_-16px_rgba(65,105,225,0.28)] ${f.col ?? ''}`}
              >
                {f.col && (
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4169E1] via-[#4169E1] to-[#4169E1]" />
                )}
                <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(65,105,225,0.14),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className={`mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${f.col ? 'bg-gradient-to-br from-[#4169E1] to-[#2F4AC8] text-white' : 'bg-neutral-950 text-white'}`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-[17px] font-bold tracking-tight text-neutral-950">{f.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-neutral-600">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Solutions ─────────────────────────────────── */}
      <SolutionsScroll />

      {/* ── About / light premium panel ───────────────── */}
      <section id="about" className="w-full py-20 sm:py-24" style={{ background: 'var(--void)', borderTop: '1px solid var(--line)' }}>
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[28px] border border-neutral-200/90 bg-white px-6 py-12 shadow-[0_30px_80px_-30px_rgba(65,105,225,0.10)] sm:px-12 sm:py-16">
            <span aria-hidden className="absolute inset-x-12 top-0 h-[3px] rounded-full bg-gradient-to-r from-[#4169E1] via-[#4169E1] to-[#4169E1]" />
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(15,15,15,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,15,15,0.035) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 80% 90% at 50% 0%, black, transparent 75%)' }} />
              <div className="absolute -top-32 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(65,105,225,0.08), rgba(65,105,225,0.04), transparent 70%)' }} />
              <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.05), transparent 70%)' }} />
            </div>
            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <Kicker>WHO WE ARE</Kicker>
                <h2 className="font-display mt-5 text-neutral-950" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.4rem)', lineHeight: 1.06, letterSpacing: '-0.03em', fontWeight: 800 }}>
                  Independent stores.<br /><span style={{ background: 'linear-gradient(92deg, #4169E1, #4169E1)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Same digital power.</span>
                </h2>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-neutral-600">
                  Not another delivery app. Your WhatsApp <em className="text-neutral-950 not-italic font-semibold">is</em> your store — live stock, instant checkout, zero commission.
                </p>
                <Link href="#about" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#4169E1] bg-[#F0F8FF] px-6 py-3 text-sm font-semibold text-[#4169E1] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  Our story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {METRICS.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-neutral-200/90 bg-neutral-50 p-5 transition hover:-translate-y-0.5 hover:border-[#4169E1] hover:shadow-[0_18px_44px_-16px_rgba(65,105,225,0.3)]">
                    <div className="font-display text-2xl font-extrabold text-neutral-950 sm:text-3xl">{m.value}</div>
                    <p className="mt-1.5 text-[12.5px] leading-snug text-neutral-600">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.n} className="group rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#4169E1] hover:shadow-[0_18px_44px_-16px_rgba(65,105,225,0.3)]">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-[#4169E1]">{p.n}</span>
                  <h3 className="mt-2 text-[16px] font-bold text-neutral-950">{p.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-neutral-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <TeamSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}
