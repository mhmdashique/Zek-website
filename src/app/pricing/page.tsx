'use client';
import { useState } from 'react';
import Link from 'next/link';

type Plan = {
  id: string;
  name: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
  popular: boolean;
};

const PLANS: Plan[] = [
  {
    id: 'STARTUP',
    name: 'Starter',
    price: '₹0',
    desc: 'For small teams experimenting with AI automation.',
    features: [
      '2 AI Agents',
      '500 Task Runs/mo',
      'Community Support',
      'Basic Analytics',
      '14-Day History',
    ],
    cta: 'Start Building',
    href: '/demo',
    popular: false,
  },
  {
    id: 'SCALE',
    name: 'Pro',
    price: '₹4,999',
    desc: 'For growing businesses needing scale & reliability.',
    features: [
      '10 AI Agents',
      '10k Task Runs/mo',
      'Priority Email Support',
      'Advanced Analytics',
      'Unlimited History',
      'API Access',
    ],
    cta: 'Upgrade to Pro',
    href: '/demo',
    popular: true,
  },
  {
    id: 'ENTERPRISE',
    name: 'Business',
    price: '₹19,999',
    desc: 'Mission-critical infrastructure for large organizations.',
    features: [
      'Unlimited Agents',
      '100k Task Runs/mo',
      '24/7 Dedicated Support',
      'SSO & Audit Logs',
      'Custom Integrations',
      'SLA Guarantee',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    popular: false,
  },
];

function isFree(price: string) {
  return price === '₹0';
}

export default function PricingPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="section-paper min-h-screen">
      <div className="site-container py-24">
        <div className="mb-16 text-center">
          <h1
            className="font-display mb-4 text-5xl"
            style={{ color: 'var(--mist)' }}
          >
            Simple, transparent pricing
          </h1>
          <p style={{ color: '#4b5563', fontSize: 'var(--text-17)' }}>
            Scale your retail operations without unpredictable costs.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          style={{ perspective: '1200px' }}
          onMouseLeave={() => setActive(null)}
        >
          {PLANS.map((plan) => {
            const isActive = active === plan.id;
            const anyActive = active !== null;

            const transform = isActive
              ? 'translateY(-22px) scale(1.06)'
              : anyActive
                ? 'translateY(0) scale(0.97)'
                : plan.popular
                  ? 'translateY(-10px) scale(1.02)'
                  : 'translateY(0) scale(1)';

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setActive(plan.id)}
                onFocus={() => setActive(plan.id)}
                tabIndex={0}
                className="relative flex flex-col rounded-2xl p-8 outline-none"
                style={{
                  background: plan.popular ? 'var(--pulse)' : 'var(--paper)',
                  border: plan.popular
                    ? '2px solid var(--pulse)'
                    : '1px solid var(--line)',
                  transform,
                  opacity: anyActive && !isActive ? 0.6 : 1,
                  zIndex: isActive ? 30 : plan.popular ? 10 : 1,
                  boxShadow: isActive
                    ? '0 36px 70px rgba(15,18,24,0.35)'
                    : plan.popular
                      ? '0 20px 50px rgba(26,28,32,0.25)'
                      : '0 8px 24px rgba(0,0,0,0.06)',
                  transition:
                    'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease, box-shadow 0.35s ease',
                  cursor: 'pointer',
                }}
              >
                {plan.popular && (
                  <div
                    className="mb-4 inline-block self-start rounded px-2 py-0.5 font-mono text-xs"
                    style={{
                      background: 'rgba(79,216,196,0.15)',
                      color: 'var(--pulse)',
                    }}
                  >
                    RECOMMENDED
                  </div>
                )}
                <h3
                  className="font-display mb-1 text-xl"
                  style={{ color: plan.popular ? '#ffffff' : 'var(--mist)' }}
                >
                  {plan.name}
                </h3>
                <p
                  className="mb-6 text-sm"
                  style={{
                    color: plan.popular ? 'rgba(255,255,255,0.78)' : '#4b5563',
                  }}
                >
                  {plan.desc}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="font-display text-4xl"
                      style={{
                        color: plan.popular ? '#ffffff' : 'var(--mist)',
                      }}
                    >
                      {plan.price}
                    </span>
                    {!isFree(plan.price) && (
                      <span
                        className="text-sm"
                        style={{
                          color: plan.popular
                            ? 'rgba(255,255,255,0.72)'
                            : '#4b5563',
                        }}
                      >
                        /mo
                      </span>
                    )}
                  </div>
                  {isFree(plan.price) && (
                    <p
                      className="mt-1 text-xs"
                      style={{
                        color: plan.popular
                          ? 'rgba(199,204,214,0.45)'
                          : '#8a8d94',
                      }}
                    >
                      Free forever
                    </p>
                  )}
                </div>

                <ul className="mb-8 flex-1 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2"
                      style={{
                        color: plan.popular
                          ? 'rgba(255,255,255,0.86)'
                          : '#4b5563',
                      }}
                    >
                      <span
                        style={{
                          color: plan.popular ? '#ffffff' : 'var(--pulse)',
                        }}
                      >
                        ✓
                      </span>{' '}
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className="inline-flex w-full items-center justify-center rounded-lg py-3 text-sm font-medium"
                  style={
                    plan.popular
                      ? { background: '#ffffff', color: 'var(--pulse)' }
                      : {
                          border: '1px solid var(--line)',
                          color: 'var(--pulse)',
                          background: 'var(--paper)',
                        }
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
