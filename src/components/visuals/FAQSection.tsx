'use client';
import { useState } from 'react';
import Link from 'next/link';

const FAQS = [
  {
    q: 'How many shops can one tenant manage?',
    a: 'On the Starter plan, up to 10 shops. Growth allows 50, and Enterprise has no hard limits, we work with customers running 500+ locations.',
  },
  {
    q: 'How accurate is the haversine-based routing?',
    a: "Haversine calculates great-circle distance between two GPS coordinates. It's accurate for routing purposes within typical delivery radius scenarios. For extreme precision, we provide routing hooks for custom calculation logic.",
  },
  {
    q: 'How long does onboarding take?',
    a: 'Most customers are live within 1 to 2 weeks. We provide data migration support, an onboarding checklist, and dedicated setup calls for Growth and Enterprise plans.',
  },
  {
    q: 'Do I need N8n experience to use automation features?',
    a: 'No. We ship pre-built workflow templates for common scenarios, order notifications, low-stock alerts, fulfillment reporting. Advanced teams can customise or build from scratch.',
  },
  {
    q: 'Can I export my data if I leave?',
    a: 'Yes. You can export all orders, customer records, inventory snapshots, and audit logs in JSON or CSV format at any time from the admin dashboard.',
  },
  {
    q: 'What is the MCP-compatible API?',
    a: 'Our API follows the Model Context Protocol specification, enabling AI agents to interact with your ZEKVIAN tenant natively, querying orders, inventory, and running allocation logic programmatically.',
  },
  {
    q: 'How does pricing work if I add shops mid-month?',
    a: 'We prorate charges daily. If you add a shop on day 15, you only pay for the remaining days in the billing period.',
  },
  {
    q: 'Do you offer an SLA?',
    a: 'Enterprise plans include a 99.9% uptime SLA with response time commitments. Growth and Starter plans receive best-effort support.',
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
  <section
  id="faq"
  className="relative w-full overflow-hidden"
  style={{
  background: 'var(--void)',
  borderTop: '1px solid var(--line)',
  padding: '72px 0 80px',
  }}
  >
  <div className="container relative mx-auto max-w-3xl px-4 sm:px-8">
  {/* Header, same text style as upper sections */}
  <div className="mb-12 text-center">
  <span
  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold"
  style={{
  borderColor: '#4169E1',
  background: '#4169E1',
  color: '#ffffff',
  letterSpacing: '0.16em',
  marginBottom: '20px',
  }}
  >
  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff' }} />
  FAQ
  </span>
  <h2
  className="font-display"
  style={{
  fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
  lineHeight: 1.12,
  letterSpacing: '-0.03em',
  fontWeight: 800,
  marginBottom: '12px',
  }}
  >
  <span style={{ color: 'var(--mist)' }}>Common </span>
  <span style={{ color: 'var(--pulse)' }}>questions</span>
  </h2>
  <p
  style={{
  color: 'var(--mist)',
  opacity: 0.6,
  fontSize: 'var(--text-17)',
  lineHeight: 1.7,
  }}
  >
  Click any question to read the answer. Can&rsquo;t find what
  you&rsquo;re looking for?
  </p>
  </div>

  {/* Questions */}
  <div className="flex flex-col gap-3">
  {FAQS.map((faq, i) => {
  const isOpen = open === i;
  return (
    <div
  key={i}
      style={{
  background: 'var(--paper)',
  border: isOpen
  ? '1px solid rgba(65,105,225,0.4)'
  : '1px solid var(--line)',
  borderRadius: '18px',
  overflow: 'hidden',
  boxShadow: isOpen
  ? '0 16px 40px rgba(65,105,225,0.14)'
  : 'var(--card-shadow)',
  transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
  }}
  >
  <button
  onClick={() => setOpen(isOpen ? null : i)}
  aria-expanded={isOpen}
  style={{
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: isOpen ? '22px 22px 14px' : '20px 22px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  }}
  >
  <span
  style={{
  flexShrink: 0,
  fontFamily: 'var(--font-mono)',
  fontSize: '0.68rem',
  fontWeight: 700,
  color: isOpen ? '#fff' : 'var(--pulse)',
  background: isOpen
  ? 'var(--pulse)'
  : 'rgba(65,105,225,0.08)',
  border: isOpen
  ? '1px solid var(--pulse)'
  : '1px solid rgba(65,105,225,0.2)',
  borderRadius: '9px',
  padding: '6px 9px',
  minWidth: '36px',
  textAlign: 'center',
  }}
  >
  {String(i + 1).padStart(2, '0')}
  </span>
  <span
  style={{
  flex: 1,
  fontSize: '0.95rem',
  fontWeight: isOpen ? 600 : 500,
  color: 'var(--mist)',
  lineHeight: 1.5,
  letterSpacing: '-0.01em',
  }}
  >
  {faq.q}
  </span>
  <span
  style={{
  flexShrink: 0,
  width: '32px',
  height: '32px',
  borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
  fontSize: '1.1rem',
  lineHeight: 1,
  color: isOpen ? '#fff' : 'var(--pulse)',
  background: isOpen ? 'var(--pulse)' : 'transparent',
  border: isOpen
  ? '1px solid var(--pulse)'
  : '1px solid rgba(65,105,225,0.3)',
  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
  transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
  boxShadow: isOpen
  ? '0 4px 14px rgba(65,105,225,0.4)'
  : 'none',
      }}
    >
  +
  </span>
  </button>

      <div
        style={{
  display: 'grid',
  gridTemplateRows: isOpen ? '1fr' : '0fr',
  transition:
  'grid-template-rows 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
  <div style={{ overflow: 'hidden' }}>
  <div
          style={{
  margin: '0 22px 0 70px',
  paddingBottom: isOpen ? '24px' : '0',
  opacity: isOpen ? 1 : 0,
  transform: isOpen
  ? 'translateY(0)'
  : 'translateY(-6px)',
  transition:
  'opacity 0.25s 0.05s, transform 0.25s 0.05s',
          }}
        >
        <div
          style={{
            height: '1px',
  background:
  'linear-gradient(90deg, rgba(65,105,225,0.25), rgba(65,105,225,0.06))',
  marginBottom: '14px',
          }}
        />
        <p
          style={{
  fontSize: '0.88rem',
  lineHeight: 1.75,
            color: 'var(--mist)',
  opacity: 0.72,
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  </div>
  </div>
  );
  })}
  </div>

  {/* Footer CTAs */}
  <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/faq"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
  gap: '8px',
  fontSize: '0.83rem',
  fontWeight: 600,
  color: '#fff',
  background: 'linear-gradient(135deg, #4169E1, #2F4AC8)',
  padding: '12px 24px',
                borderRadius: '999px',
                textDecoration: 'none',
  boxShadow: '0 8px 24px rgba(65,105,225,0.35)',
              }}
            >
  View all FAQs <span aria-hidden>→</span>
  </Link>
  <Link
  href="/demo"
  style={{
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '0.83rem',
  fontWeight: 600,
  color: 'var(--mist)',
  background: 'var(--paper)',
  border: '1px solid var(--line)',
  padding: '12px 24px',
  borderRadius: '999px',
  textDecoration: 'none',
  }}
  >
  Talk to us
            </Link>
          </div>
                  </div>
    </section>
  );
}
