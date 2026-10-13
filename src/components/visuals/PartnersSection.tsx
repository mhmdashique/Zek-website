'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

type Partner = {
  name: string;
  category: string;
  desc: string;
  icon: ReactNode;
};

const icon = (path: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: '22px', height: '22px' }}
  >
    {path}
  </svg>
);

const PARTNERS: Partner[] = [
  {
    name: 'WhatsApp Business',
    category: 'Ordering channel',
    desc: 'Catalogs, carts and order chats on the official WhatsApp Business Platform.',
    icon: icon(
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.8-5.9A8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" />,
    ),
  },
  {
    name: 'Razorpay',
    category: 'Payments',
    desc: 'UPI, cards and payment links with auto-invoices inside the chat.',
    icon: icon(
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </>,
    ),
  },
  {
    name: 'n8n',
    category: 'Automation',
    desc: 'Slack alerts, inventory sync and ops workflows live in one afternoon.',
    icon: icon(<path d="M13 2 4 14h7l-1 8 9-12h-7z" />),
  },
  {
    name: 'Shopify POS',
    category: 'Inventory',
    desc: 'Real-time stock sync across all branches. No more manual checks.',
    icon: icon(
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </>,
    ),
  },
  {
    name: 'Shiprocket',
    category: 'Delivery',
    desc: 'Last-mile fulfilment with live tracking pushed to WhatsApp.',
    icon: icon(
      <>
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </>,
    ),
  },
  {
    name: 'MCP + LLMs',
    category: 'AI agents',
    desc: 'MCP-compatible API so your existing LLM tooling connects on day one.',
    icon: icon(
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <rect x="8" y="8" width="8" height="8" rx="2" />
      </>,
    ),
  },
];

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="w-full"
      style={{
        background:
          'radial-gradient(50% 32% at 50% 0%, rgba(79,70,229,0.10), transparent 70%), var(--void)',
        borderTop: '1px solid var(--line)',
        padding: '72px 0 28px',
      }}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div style={{ maxWidth: '560px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--pulse)',
                background: 'var(--badge-bg)',
                border: '1px solid #c7d2fe',
                borderRadius: '999px',
                padding: '7px 14px',
                marginBottom: '18px',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--pulse)',
                  boxShadow: '0 0 10px var(--pulse)',
                }}
              />
              Ecosystem · 6 native connections
            </span>
            <h2
              className="section-heading font-display"
              style={{ color: 'var(--mist)' }}
            >
              Plugs into your stack
            </h2>
            <p
              className="section-subheading"
              style={{
                color: 'var(--mist)',
                opacity: 0.6,
                marginTop: '12px',
                maxWidth: '480px',
              }}
            >
              Ordering, payments, inventory and delivery — ZEKVIAN sits between
              the tools you already use.
            </p>
          </div>
          <Link
            href="/integrations"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff',
              background: 'var(--pulse)',
              borderRadius: '999px',
              padding: '13px 22px',
              boxShadow: '0 12px 28px -10px rgba(79,70,229,0.55)',
              whiteSpace: 'nowrap',
            }}
          >
            View integrations →
          </Link>
        </div>

        {/* Premium cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((p, i) => (
            <article
              key={p.name}
              className="group"
              style={{
                position: 'relative',
                borderRadius: '22px',
                border: '1px solid var(--line)',
                background: 'var(--paper)',
                padding: '26px 24px 22px',
                overflow: 'hidden',
                boxShadow: 'var(--card-shadow)',
                transition:
                  'transform 0.28s var(--ease-std), border-color 0.28s, box-shadow 0.28s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-6px)';
                el.style.borderColor = '#a5b4fc';
                el.style.boxShadow =
                  '0 24px 48px -16px rgba(79,70,229,0.28)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'var(--line)';
                el.style.boxShadow = 'var(--card-shadow)';
              }}
            >
              {/* top sheen */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: '0 0 auto 0',
                  height: '3px',
                  background:
                    'linear-gradient(90deg, transparent, var(--pulse), transparent)',
                  opacity: 0,
                  transition: 'opacity 0.28s',
                }}
                className="sheen"
              />
              {/* watermark index */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '6px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '3.4rem',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: 'var(--mist)',
                  opacity: 0.05,
                  userSelect: 'none',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '15px',
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                    color: '#ffffff',
                    background:
                      'linear-gradient(135deg, #4f46e5 0%, #6d64ff 100%)',
                    boxShadow:
                      '0 12px 24px -8px rgba(79,70,229,0.6), inset 0 1px 0 rgba(255,255,255,0.35)',
                  }}
                >
                  {p.icon}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--pulse)',
                    background: 'var(--badge-bg)',
                    border: '1px solid #c7d2fe',
                    borderRadius: '999px',
                    padding: '5px 11px',
                  }}
                >
                  {p.category}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  letterSpacing: '-0.01em',
                  color: 'var(--mist)',
                  marginBottom: '8px',
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  color: 'var(--mist)',
                  opacity: 0.62,
                  minHeight: '44px',
                }}
              >
                {p.desc}
              </p>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  color: 'var(--pulse)',
                  opacity: 0.85,
                }}
              >
                Native connection
                <span aria-hidden="true">→</span>
              </span>
            </article>
          ))}
        </div>

        {/* Ticker — contained strip, no edge cuts */}
        <div
          aria-hidden="true"
          style={{
            marginTop: '20px',
            border: '1px solid var(--line)',
            borderRadius: '16px',
            background: 'var(--paper)',
            boxShadow: 'var(--card-shadow)',
            padding: '13px 0',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
          }}
        >
          {/* edge fades */}
          <span
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '72px',
              background:
                'linear-gradient(90deg, var(--paper), transparent)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          <span
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '72px',
              background:
                'linear-gradient(270deg, var(--paper), transparent)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          <div
            className="marquee-left"
            style={{ display: 'flex', width: 'max-content' }}
          >
            {Array.from({ length: 2 }).map((_, dup) => (
              <span
                key={dup}
                style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
              >
                {PARTNERS.map((p) => (
                  <span
                    key={`${dup}-${p.name}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      flexShrink: 0,
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: '#9ca3af',
                    }}
                  >
                    <span style={{ padding: '0 20px' }}>{p.name}</span>
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: '#c7d2fe',
                        flexShrink: 0,
                      }}
                    />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <p
          className="font-mono"
          style={{
            marginTop: '12px',
            marginBottom: 0,
            textAlign: 'center',
            fontSize: '0.72rem',
            letterSpacing: '0.06em',
            color: 'var(--mist)',
            opacity: 0.5,
          }}
        >
          + POS, Tally, UPI gateways & any webhook-ready tool via API
        </p>
      </div>

      <style>{`.group:hover .sheen { opacity: 1 !important; }`}</style>
    </section>
  );
}
