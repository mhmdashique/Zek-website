import { HeroSection } from '@/components/visuals/HeroSection';
import { HowItWorks } from '@/components/visuals/HowItWorks';
import { TeamSection } from '@/components/visuals/TeamSection';
import { FAQSection } from '@/components/visuals/FAQSection';
import { PricingSection } from '@/components/visuals/PricingSection';
import { Testimonials } from '@/components/visuals/Testimonials';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

const KEY_FEATURES = [
  { title: "Order via WhatsApp", desc: "Customers send a raw grocery list as text, image, or voice note." },
  { title: "Smart item matching", desc: "AI parses the list and matches it to actual store inventory." },
  { title: "Auto-substitutions", desc: "If something's out of stock, the AI suggests live alternatives instead of losing the sale." },
  { title: "Real-time pricing", desc: "Dynamic pricing based on current inventory." },
  { title: "1-click checkout", desc: "In-chat payment with an auto-generated invoice." },
  { title: "Doorstep delivery", desc: "Order fulfilled and delivered after checkout." },
];

const svg = (children: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const FEATURE_ICONS: ReactNode[] = [
  svg(<path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.8-5.9A8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" />),
  svg(<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>),
  svg(<path d="M7 7h11l-3-3M17 17H6l3 3" />),
  svg(<><path d="M20.5 12 12 3.5A2 2 0 0 0 10.6 3H4v6.6A2 2 0 0 0 3.5 12l8.5 8.5a2 2 0 0 0 2.8 0l6.2-6.2a2 2 0 0 0 0-2.8Z" /><circle cx="7.5" cy="7.5" r="1.2" /></>),
  svg(<><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h3l2.4 12.2a1.5 1.5 0 0 0 1.5 1.2h8.8a1.5 1.5 0 0 0 1.5-1.2L21 7H6" /></>),
  svg(<><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>),
];

const SOLVE_ICONS: ReactNode[] = [
  svg(<path d="M13 2 4 14h7l-1 8 9-12h-7z" />),
  svg(<path d="M7 7h11l-3-3M17 17H6l3 3" />),
  svg(<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" />),
  svg(<><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" /><circle cx="12" cy="12" r="2.5" /></>),
  svg(<><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18M7 15h4" /></>),
  svg(<path d="M5 20V10M12 20V4M19 20v-7" />),
];

function FeatureCard({
  icon,
  title,
  desc,
  accent = 'var(--pulse)',
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  accent?: string;
}) {
  return (
    <div className="feature-card">
      <div className="feature-icon" style={{ color: accent }}>
        {icon}
      </div>
      <h4 className="feature-title">{title}</h4>
      <p className="feature-desc">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex w-full flex-col" style={{ background: 'var(--void)' }}>
      <HeroSection />
      <HowItWorks />

  {/* <section
        id="demo-video"
        style={{
          background: 'var(--void)',
          borderTop: '1px solid var(--line)',
          padding: '72px 0',
          scrollMarginTop: '90px',
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-8">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '24px',
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <p
                className="section-kicker mb-3 font-mono text-xs"
                style={{
                  color: 'var(--pulse)',
                  letterSpacing: '0.12em',
                }}
              >
                VIDEO
              </p>
              <h2
                className="section-heading font-display mb-3 text-4xl"
                style={{ color: 'var(--mist)' }}
              >
                The 1 min demo video
              </h2>
              <p
                className="interactive-card"
                style={{
                  color: 'var(--mist)',
                  opacity: 0.7,
                  lineHeight: 1.8,
                }}
              >
                From a simple message to live substitutions and instant
                checkout, this is how Zekvian keeps grocery orders moving
                without friction.
              </p>
            </div>

            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid var(--line)',
                background:
                  'radial-gradient(circle at 30% 20%, rgba(79,70,229,0.12), transparent 26%), linear-gradient(135deg, #eef2ff, #ffffff)',
                minHeight: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.5))',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: '24px',
                  border: '1px solid rgba(79,70,229,0.12)',
                  borderRadius: '18px',
                  background: 'rgba(255,255,255,0.55)',
                }}
              />

              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  gap: '18px',
                }}
              >
                <div
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    background: 'var(--badge-bg)',
                    border: '1px solid #c7d2fe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 0 18px rgba(79,70,229,0.05)',
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: '16px solid var(--pulse)',
                      marginLeft: '4px',
                    }}
                  />
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      color: 'var(--pulse)',
                      marginBottom: '10px',
                    }}
                  >
                    PRODUCT OVERVIEW
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                      color: 'var(--mist)',
                      fontWeight: 700,
                    }}
                  >
                    The 1 min demo video
                  </div>
                </div>

                <button
                  type="button"
                  style={{
                    border: '1px solid #c7d2fe',
                    background: 'var(--paper)',
                    color: 'var(--pulse)',
                    borderRadius: '999px',
                    padding: '12px 20px',
                    fontSize: '0.8rem',
                    letterSpacing: '0.05em',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  WATCH DEMO
                </button>
              </div>
            </div>
          </div>
        </div>
  </section> */}

      {/* Product */}
      <section
        id="product"
        className="w-full py-24"
        style={{
          background: 'var(--void)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-8">
          {/* Core concept */}
          <div className="mb-16">
            <p
              className="section-kicker mb-3 font-mono text-xs"
              style={{ color: 'var(--pulse)', letterSpacing: '0.1em' }}
            >
              PRODUCT
            </p>
            <h2
              className="section-heading font-display mb-3 text-4xl"
              style={{ color: 'var(--mist)' }}
            >
              A WhatsApp-native AI sales assistant that plugs into any
              e-commerce platform
            </h2>
            <p
              className="section-subheading"
              style={{ color: 'var(--mist)', opacity: 0.6, maxWidth: '640px' }}
            >
              An AI assistant on WhatsApp that connects directly to your
              store&rsquo;s live catalog, inventory, and payments, whatever
              platform you run on. Customers browse, order, and pay in a simple
              conversation, with no app to download and no website to navigate.
              It turns a messy message like &ldquo;2 kg rice, a dozen eggs and
              some milk&rdquo; into a confirmed, paid order without a human in
              the loop.
            </p>
          </div>

          {/* Key features */}
          <h3 className="font-display text-2xl mb-8" style={{ color: 'var(--mist)' }}>
            Key features
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {KEY_FEATURES.map((f, i) => (
              <FeatureCard key={i} icon={FEATURE_ICONS[i]} title={f.title} desc={f.desc} />
            ))}
          </div>

          <div className="mt-10">
  <Button asChild className="bg-[var(--pulse)] text-[var(--void)] hover:opacity-90">
  <Link href="/product">Explore full product →</Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Solutions snapshot */}
      <section
        id="solutions"
        className="w-full py-24"
        style={{
          background: 'var(--void)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p
                className="section-kicker mb-3 font-mono text-xs"
                style={{ color: 'var(--pulse)', letterSpacing: '0.1em' }}
              >
                SOLUTIONS
              </p>
              <h2
                className="section-heading font-display text-4xl"
                style={{ color: 'var(--mist)' }}
              >
                What this solves immediately
              </h2>
            </div>
  <Button asChild className="bg-[var(--pulse)] text-[var(--void)] hover:opacity-90">
  <Link href="/solutions">View all solutions →</Link>
              </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Sub-1s inventory lookup',
                desc: 'Replaces 10 to 25 min manual stock checks with a real-time POS query.',
                accent: 'var(--pulse)',
              },
              {
                title: 'AI-suggested substitutes',
                desc: 'Prevents lost sales on out-of-stock items with instant AI alternatives.',
                accent: 'var(--pulse)',
              },
              {
                title: '1-click re-order',
                desc: 'Customers re-order entire past lists in seconds from inside the chat.',
                accent: 'var(--pulse)',
              },
              {
                title: 'Live WhatsApp tracking',
                desc: 'Delivery visibility pushed directly to the customer, no app needed.',
                accent: 'var(--ember)',
              },
              {
                title: 'Link payments + auto-invoice',
                desc: 'Eliminates cash/manual payment friction with integrated checkout.',
                accent: 'var(--ember)',
              },
              {
                title: 'Multi-branch reporting',
                desc: 'Franchise-ready from day one, one account scales across all stores.',
                accent: 'var(--ember)',
              },
            ].map((item, i) => (
              <FeatureCard
                key={i}
                icon={SOLVE_ICONS[i]}
                title={item.title}
                desc={item.desc}
                accent={item.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About snippet, redesigned dark section */}
      <section
        id="about"
        className="w-full py-24"
        style={{
          background: 'var(--void)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p
                className="section-kicker mb-4 font-mono text-xs"
                style={{ color: 'var(--pulse)', letterSpacing: '0.1em' }}
              >
  WHO WE ARE
              </p>
              <h2
                className="section-heading font-display mb-6"
                style={{
  fontSize: 'clamp(2.4rem,5vw,3.75rem)',
                  color: 'var(--mist)',
  fontWeight: 800,
  lineHeight: 1.05,
  letterSpacing: '-0.03em',
                }}
              >
  Independent stores.
  <br />
  Same digital power.
              </h2>
              <p
                className="section-subheading mb-10"
                style={{
                  color: 'var(--mist)',
                  opacity: 0.6,
                  lineHeight: 1.8,
                  fontSize: 'var(--text-17)',
                }}
              >
  Not another delivery app. Your WhatsApp is your store.
  Live stock. Instant checkout.
              </p>
  <Button asChild className="bg-[var(--pulse)] text-[var(--void)] hover:opacity-90">
  <Link href="/about">Our story →</Link>
                </Button>
            </div>
            {/* Right, stat grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  value: '~80%',
                  label: 'reduction in manual order-taking labor',
                },
                {
                  value: 'Day 1',
                  label: 'franchise-ready, scales across unlimited branches',
                },
                {
                  value: 'Near 0',
                  label: 'in-store queue time with pre-approved pickup',
                },
                {
                  value: '↓ 0',
                  label: 'revenue leakage from stockouts via AI substitution',
                },
              ].map((s, i) => (
                <div key={i} className="feature-card">
                  <div className="net-value">{s.value}</div>
                  <p className="feature-desc" style={{ opacity: 0.75 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
  {/* Our story points, 01/02/03 */}
  <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
  {[
  {
  title: 'Higher operational margins',
  desc: 'Increase operational margins by digitizing manual order-taking.',
  icon: svg(<><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>),
  },
  {
  title: 'Zero admin bottlenecks',
  desc: 'Eliminate employee administrative bottlenecks created by phone and in-person order management.',
  icon: svg(<path d="M13 2 4 14h7l-1 8 9-12h-7z" />),
  },
  {
  title: 'Customers who return',
  desc: 'Strengthen customer retention by meeting shoppers where they already are, in their chat inbox.',
  icon: svg(<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />),
  },
  ].map((item, i) => (
  <div
  key={i}
  className="group relative overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--paper)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a5b4fc] hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.35)]"
  >
  {/* top accent line */}
  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 transition-transform duration-300 group-hover:scale-x-100" />
  {/* glow blob */}
  <span className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.18),transparent_70%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
  {/* watermark number */}
  <span className="pointer-events-none absolute -bottom-6 right-2 select-none text-[92px] font-extrabold leading-none tracking-tighter text-neutral-950/[0.05] transition-colors duration-300 group-hover:text-indigo-600/10">
  {String(i + 1).padStart(2, '0')}
  </span>
  <div className="relative">
  <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-[0_10px_24px_-8px_rgba(79,70,229,0.7)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 [&>svg]:h-6 [&>svg]:w-6">
  {item.icon}
  </div>
  <h3 className="mb-2 text-[17px] font-bold tracking-tight" style={{ color: 'var(--mist)' }}>
  {item.title}
  </h3>
  <p className="text-[14.5px] leading-relaxed" style={{ color: 'var(--mist)', opacity: 0.65 }}>
  {item.desc}
  </p>
  </div>
  </div>
  ))}
  </div>
        </div>
      </section>

      <TeamSection />
      <Testimonials />
      <PricingSection />

      <FAQSection />

      {/* CTA */}
      <section
        className="w-full py-24"
        style={{
          background: 'var(--void)',
          borderTop: '1px solid var(--line)',
        }}
      >
  {/* <div className="container mx-auto max-w-3xl px-4 text-center sm:px-8">
          <h2
            className="section-heading font-display mb-4 text-4xl"
            style={{ color: 'var(--mist)' }}
          >
            Ready to automate your operations?
          </h2>
          <p
            className="section-subheading mb-10"
            style={{
              color: 'var(--mist)',
              opacity: 0.6,
              fontSize: 'var(--text-17)',
            }}
          >
            Get set up in under 2 weeks. No routing logic to write.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium"
              style={{ background: 'var(--pulse)', color: '#ffffff' }}
            >
              Try Sandbox Free
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium"
              style={{
                border: '1px solid var(--line)',
                color: 'var(--mist)',
              }}
            >
              Talk to Sales
            </Link>
          </div>
  </div> */}
      </section>
    </div>
  );
}
