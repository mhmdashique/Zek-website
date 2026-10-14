"use client";
import { useState } from "react";
import Link from "next/link";

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
    price: '₹4999',
    desc: 'For small teams experimenting with AI automation.',
    features: [
      '2 shops',
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
    price: '₹14,999',
    desc: 'For growing businesses needing scale & reliability.',
    features: [
      '5 Shops',
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
    price: '₹29,999',
    desc: 'Mission-critical infrastructure for large organizations.',
    features: [
      'Unlimited Shops',
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

export function PricingSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="pricing"
      style={{
        background: "var(--void)",
        borderTop: "1px solid var(--line)",
        padding: "72px 0",
        scrollMarginTop: "76px",
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold" style={{ borderColor: "#4169E1", background: "#4169E1", color: "#ffffff", letterSpacing: "0.16em", marginBottom: "20px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
            PRICING
          </span>
          <h2 className="section-heading font-display text-4xl mb-4" style={{ color: "var(--mist)" }}>
            Simple, transparent pricing
          </h2>
          <p style={{ color: "var(--mist)", opacity: 0.6, fontSize: "var(--text-17)" }}>
            Scale your retail operations without unpredictable costs.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ perspective: "1200px" }}
          onMouseLeave={() => setActive(null)}
        >
          {PLANS.map(plan => {
            const isActive = active === plan.id;
            const anyActive = active !== null;

            const transform = isActive
              ? "translateY(-22px) scale(1.06)"
              : anyActive
                ? "translateY(0) scale(0.97)"
                : plan.popular
                  ? "translateY(-10px) scale(1.02)"
                  : "translateY(0) scale(1)";

            const cardBg = plan.popular
              ? "linear-gradient(160deg, rgba(79,216,196,0.10), rgba(255,255,255,0.02))"
              : "rgba(255,255,255,0.03)";

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setActive(plan.id)}
                onFocus={() => setActive(plan.id)}
                tabIndex={0}
                className="rounded-2xl p-8 flex flex-col relative outline-none"
                style={{
                  background: cardBg,
                  border: plan.popular ? "1px solid var(--pulse)" : "1px solid var(--line)",
                  transform,
                  opacity: anyActive && !isActive ? 0.6 : 1,
                  zIndex: isActive ? 30 : plan.popular ? 10 : 1,
                  boxShadow: isActive
                    ? "0 36px 70px rgba(0,0,0,0.5)"
                    : plan.popular
                      ? "0 20px 50px rgba(79,216,196,0.12)"
                      : "0 8px 24px rgba(0,0,0,0.25)",
                  transition:
                    "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease, box-shadow 0.35s ease",
                  cursor: "pointer",
                }}>
                {plan.popular && (
                  <div className="font-mono text-xs mb-4 px-2 py-0.5 rounded inline-block self-start"
                    style={{ background: "rgba(79,216,196,0.15)", color: "var(--pulse)" }}>
                    RECOMMENDED
                  </div>
                )}
                <h3 className="font-display text-xl mb-1" style={{ color: "var(--mist)" }}>
                  {plan.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--mist)", opacity: 0.6 }}>
                  {plan.desc}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl" style={{ color: "var(--mist)" }}>
                      {plan.price}
                    </span>
                    {!isFree(plan.price) && (
                      <span className="text-sm" style={{ color: "var(--mist)", opacity: 0.5 }}>
                        /mo
                      </span>
                    )}
                  </div>
                  {isFree(plan.price) && (
                    <p className="text-xs mt-1" style={{ color: "var(--mist)", opacity: 0.5 }}>
                      Free forever
                    </p>
                  )}
                </div>

                <ul className="space-y-3 text-sm flex-1 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2" style={{ color: "var(--mist)", opacity: 0.75 }}>
                      <span style={{ color: "var(--pulse)" }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href}
                  className="inline-flex items-center justify-center w-full py-3 rounded-lg text-sm font-medium"
                  style={plan.popular
                    ? { background: "var(--pulse)", color: "var(--void)" }
                    : { border: "1px solid rgba(255,255,255,0.18)", color: "var(--mist)" }}>
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
