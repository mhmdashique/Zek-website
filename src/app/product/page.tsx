import Link from 'next/link';
import type { ReactNode } from 'react';
import { HowItWorks } from '@/components/visuals/HowItWorks';
import { TeamSection } from '@/components/visuals/TeamSection';
import { Testimonials } from '@/components/visuals/Testimonials';
import { PricingSection } from '@/components/visuals/PricingSection';
import { FAQSection } from '@/components/visuals/FAQSection';
import {
  MessageCircle,
  ScanSearch,
  Repeat2,
  BadgeIndianRupee,
  MousePointerClick,
  Truck,
  ArrowRight,
  ArrowLeft,
  Bot,
  Store,
  Bike,
  LayoutDashboard,
  BrainCircuit,
  BellRing,
  BarChart3,
  Layers,
} from 'lucide-react';

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

const KEY_FEATURES = [
  { icon: MessageCircle, title: 'Order via WhatsApp', desc: 'Customers send a raw grocery list as text, image, or voice note.', col: 'md:col-span-2' },
  { icon: ScanSearch, title: 'Smart item matching', desc: 'AI parses the list and matches it to actual store inventory.' },
  { icon: Repeat2, title: 'Auto-substitutions', desc: 'If something is out of stock, the AI suggests live alternatives instead of losing the sale.' },
  { icon: BadgeIndianRupee, title: 'Real-time pricing', desc: 'Dynamic pricing based on current inventory.' },
  { icon: MousePointerClick, title: '1-click checkout', desc: 'In-chat payment with an auto-generated invoice.' },
  { icon: Truck, title: 'Doorstep delivery', desc: 'Order fulfilled and delivered after checkout.', col: 'md:col-span-2' },
];

const PILLARS = [
  { title: 'WhatsApp AI Bot', desc: '24/7 conversational ordering.' },
  { title: 'Autonomous Substitutions', desc: 'Keeps sales even when stock is low.' },
  { title: 'Link & Invoice Checkout', desc: 'Dynamic pricing + instant invoicing.' },
  { title: 'Franchise Dashboard', desc: 'Analytics, stock alerts, multi-store management for the business owner.' },
];

const CORE = [
  { icon: ScanSearch, title: 'Unstructured List Parsing', desc: 'Accepts raw text or snapshots of handwritten grocery lists. Recognizes items instantly and updates inventory quantities on the go.' },
  { icon: Repeat2, title: 'Autonomous Replacements', desc: 'When an item is sold out, the AI suggests matching substitutes based on brand, pricing, and category, preserving sales that would otherwise be lost.' },
  { icon: BadgeIndianRupee, title: 'Link & Invoice Checkout', desc: 'Calculates dynamic total pricing, takes final modifications in-chat, and produces direct digital invoices and secure checkout links.' },
];

const AI_ENGINE = [
  { icon: BrainCircuit, title: 'Behavioral AI Matching', desc: 'The algorithm analyzes customer order histories to instantly suggest the most appropriate, personalized alternatives when items are out of stock.' },
  { icon: Repeat2, title: 'Easy 1-Click Re-ordering', desc: 'Re-order entire household monthly lists in seconds, directly inside the chat window.' },
  { icon: BellRing, title: 'Integrated Delivery Tracking', desc: 'Dynamic updates tell users exactly when employees pack, dispatch, and arrive with their groceries.' },
];

const DASHBOARD = [
  { icon: BarChart3, title: 'Flexible Revenue Analysis', desc: 'Track generated revenue daily, weekly, monthly, and yearly, instantly.', col: 'md:col-span-2' },
  { icon: BellRing, title: 'Out-of-Stock Predictive Alerts', desc: 'Immediate warnings on draining inventories before checkout drop-offs occur.' },
  { icon: Layers, title: 'Franchise Toggle Engine', desc: 'Multi-store owners easily toggle between branches and contrast revenue.' },
  { icon: Store, title: 'Granular Access Management', desc: 'Owners access global financial profiles; store managers are strictly locked to their single location.' },
  { icon: BarChart3, title: 'High-Velocity Item Insights', desc: 'Track top-selling items to adjust shelf pricing dynamically.' },
];

const SUITE = [
  { n: '01', icon: Bot, title: 'WhatsApp AI Customer Bot', desc: 'Seamless, 24/7 client conversational order interface.' },
  { n: '02', icon: Store, title: 'Storekeeper Packing App', desc: 'High-efficiency visual packing lists for rapid order collection.' },
  { n: '03', icon: Bike, title: 'Live Delivery Driver App', desc: 'Dedicated logistical fulfillment, route tracking, and payment receipts.' },
  { n: '04', icon: LayoutDashboard, title: 'Global Web Admin Console', desc: 'Complete central database control panel for managing price catalogs and stocks.' },
];

const FLOW = [
  'Upload a raw grocery list on WhatsApp',
  'AI matches items & proposes smart substitutes',
  'Digital payment & invoice sent autonomously',
];

export default function ProductPage() {
  return (
    <div className="flex w-full flex-col" style={{ background: 'var(--void)' }}>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative w-full overflow-hidden py-20 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(15,15,15,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,15,15,0.045) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 55%, transparent 100%)' }} />
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(65,105,225,0.20), rgba(65,105,225,0.08), transparent 70%)' }} />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-8">
          <div className="mb-6 flex justify-center">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition hover:text-[#4169E1]">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
          </div>
          <Kicker>PRODUCT</Kicker>
          <h1 className="font-display mx-auto mt-5 max-w-3xl text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            Meet Zekvian AI chatbot <br /><span className="text-[#4169E1]">24/7 smart conversations</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[16.5px] leading-relaxed text-neutral-600">
            Zekvian connects an intelligent AI agent directly to your live inventory. Shoppers upload raw grocery lists on WhatsApp — the bot handles matching, substitutes, and payments autonomously.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#4169E1] hover:shadow-md">
              See how it works
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['WhatsApp AI', 'Live Inventory', 'Auto-Substitution', 'Digital Checkout', 'Franchise Analytics'].map((t) => (
              <span key={t} className="rounded-full border border-[#4169E1] bg-white px-4 py-1.5 text-[12.5px] font-medium text-neutral-700 shadow-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key features bento ───────────────────── */}
      <HowItWorks />
      <section className="w-full border-t border-neutral-200/70 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Kicker>KEY FEATURES</Kicker>
          <h2 className="font-display mt-5 max-w-2xl text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            Everything happens <span className="text-[#4169E1]">inside WhatsApp</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
            {KEY_FEATURES.map((f) => (
              <div key={f.title} className={`group relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4169E1] hover:shadow-[0_24px_60px_-16px_rgba(65,105,225,0.28)] ${f.col ?? ''}`}>
                <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(65,105,225,0.14),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-neutral-950 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-[17px] font-bold tracking-tight text-neutral-950">{f.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-neutral-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Four pillars ─────────────────────────── */}
      <section className="w-full border-t border-neutral-200/70 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Kicker>FOUR PILLARS</Kicker>
          <h2 className="font-display mt-5 text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            The foundation of every order
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="group relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4169E1] hover:shadow-[0_24px_60px_-16px_rgba(65,105,225,0.28)]">
                <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4169E1] to-[#2F4AC8]" />
                <span className="font-display mb-4 block text-3xl font-extrabold text-[#4169E1]">0{i + 1}</span>
                <h3 className="mb-2 text-[16px] font-bold tracking-tight text-neutral-950">{p.title}</h3>
                <p className="text-[14px] leading-relaxed text-neutral-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conversational commerce split ─────────── */}
      <section className="w-full border-t border-neutral-200/70 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
          <div>
            <Kicker>CONVERSATIONAL COMMERCE</Kicker>
            <h2 className="font-display mt-5 text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
              24/7 smart conversations
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-neutral-600">
              The bot reads raw lists, checks live stock, suggests substitutes, and collects payment — reclaiming employee hours instantly.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['WhatsApp AI', 'Live Inventory', 'Auto-Substitution', 'Digital Payments'].map((t) => (
                <span key={t} className="rounded-full border border-[#4169E1] bg-white px-4 py-1.5 text-[12.5px] font-medium text-neutral-700 shadow-sm">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#4169E1] bg-white p-4 shadow-[0_24px_60px_-20px_rgba(65,105,225,0.3)]">
            {FLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl p-4" style={i > 0 ? { borderTop: '1px dashed #4169E1' } : undefined}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#4169E1] to-[#2F4AC8] text-sm font-bold text-white shadow-lg">{i + 1}</span>
                <p className="text-[15px] font-semibold text-neutral-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core capabilities ────────────────────── */}
      <section className="w-full border-t border-neutral-200/70 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Kicker>CORE CAPABILITIES</Kicker>
          <h2 className="font-display mt-5 text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            What the bot does out of the box
          </h2>
          <div className="mt-12 flex flex-col gap-3">
            {CORE.map((c, i) => (
              <div key={c.title} className="group flex items-start gap-4 rounded-2xl border border-neutral-200/90 bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#4169E1] hover:shadow-[0_18px_44px_-16px_rgba(65,105,225,0.3)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#4169E1] text-white transition group-hover:bg-[#4169E1] group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[16px] font-bold tracking-tight text-neutral-950">{c.title}</h3>
                    <span className="font-mono text-[11px] text-neutral-300">0{i + 1}</span>
                  </div>
                  <p className="mt-1 max-w-2xl text-[14.5px] leading-relaxed text-neutral-600">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI engine sticky ─────────────────────── */}
      <section className="w-full border-t border-neutral-200/70 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Kicker>AI ENGINE</Kicker>
            <h2 className="font-display mt-5 text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
              Interactive AI WhatsApp engine
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-neutral-600">
              Beyond basic chatbots — behavioral intelligence that learns from every order and adapts in real time.
            </p>
            <Link href="/demo" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4169E1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(65,105,225,0.6)] transition hover:-translate-y-0.5 hover:bg-[#2F4AC8]">
              Try the engine <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {AI_ENGINE.map((a) => (
              <div key={a.title} className="group flex items-start gap-4 rounded-2xl border border-neutral-200/90 bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#4169E1] hover:shadow-[0_18px_44px_-16px_rgba(65,105,225,0.3)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-neutral-950 text-white transition group-hover:scale-110">
                  <a.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold tracking-tight text-neutral-950">{a.title}</h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-neutral-600">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dashboard bento ──────────────────────── */}
      <section className="w-full border-t border-neutral-200/70 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <Kicker>DASHBOARD</Kicker>
          <h2 className="font-display mt-5 text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            Supermarket SaaS dashboard
          </h2>
          <p className="mt-4 max-w-xl text-[16px] text-neutral-600">Franchise analytics & consolidated apps.</p>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
            {DASHBOARD.map((d) => (
              <div key={d.title} className={`group relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4169E1] hover:shadow-[0_24px_60px_-16px_rgba(65,105,225,0.28)] ${d.col ?? ''}`}>
                <span className="mb-5 block h-1 w-10 rounded-full bg-gradient-to-r from-[#4169E1] to-[#2F4AC8]" />
                <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-[#4169E1] text-white transition group-hover:bg-[#4169E1] group-hover:text-white">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-[16px] font-bold tracking-tight text-neutral-950">{d.title}</h3>
                <p className="text-[14px] leading-relaxed text-neutral-600">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Suite ────────────────────────────────── */}
      <section className="w-full border-t border-neutral-200/70 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-8">
          <Kicker>SUITE</Kicker>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-4xl text-neutral-950 sm:text-5xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            The 4 essential suite apps
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[16px] text-neutral-600">Every role in your operation, covered end to end.</p>
          <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {SUITE.map((s) => (
              <div key={s.n} className="group relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4169E1] hover:shadow-[0_24px_60px_-16px_rgba(65,105,225,0.28)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-neutral-950 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] text-neutral-300">{s.n}</span>
                </div>
                <h3 className="mb-2 text-[16px] font-bold tracking-tight text-neutral-950">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
    </div>
  );
}
