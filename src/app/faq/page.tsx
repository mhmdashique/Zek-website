'use client';
import { useState, useEffect } from 'react';

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
  {
    q: 'How does role-based access control work?',
    a: 'We support three role levels: system_admin (cross-tenant platform access), tenant_admin (full access within one tenant), and shop-level roles (scoped to one or more shops).',
  },
  {
    q: 'What security certifications does ZEKVIAN hold?',
    a: "We implement encryption at rest and in transit, role-based access control, and detailed audit logging. SOC 2 audit is in progress, we'll update this page when it's available.",
  },
];

function Modal({
  faq,
  index,
  onClose,
}: {
  faq: (typeof FAQS)[0];
  index: number;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(15,15,15,0.42)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 0.2s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '560px',
          background: 'var(--paper)',
          border: '1px solid var(--line)',
          borderRadius: '20px',
          padding: '36px',
          position: 'relative',
          animation: 'slideUp 0.25s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 24px 60px rgba(15,15,15,0.16)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--badge-bg)',
            border: '1px solid #c7d2fe',
            color: 'var(--mist)',
            fontSize: '1.2rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ×
        </button>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--pulse)',
            opacity: 0.5,
            display: 'block',
            marginBottom: '12px',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: 'var(--mist)',
            lineHeight: 1.4,
            marginBottom: '20px',
          }}
        >
          {faq.q}
        </h3>
        <div
          style={{
            height: '1px',
            background: 'var(--line)',
            marginBottom: '20px',
          }}
        />
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--mist)',
            opacity: 0.8,
            lineHeight: 1.8,
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      {/* Header */}
      <div
        style={{
          borderBottom: '1px solid var(--line)',
          padding: '64px 0 48px',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--pulse)',
              letterSpacing: '0.1em',
              marginBottom: '12px',
            }}
          >
            SUPPORT
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem,5vw,3rem)',
              color: 'var(--mist)',
              fontWeight: 600,
              marginBottom: '12px',
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'var(--mist)',
              opacity: 0.75,
            }}
          >
            Can't find the answer?{' '}
            <a
              href="mailto:official.zekvian@gmail.com"
              style={{
                color: 'var(--pulse)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              official.zekvian@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Questions */}
      <div
        style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px 80px' }}
      >
        <div style={{ borderTop: '1px solid var(--line)', marginTop: '8px' }}>
          {FAQS.map((faq, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                padding: '22px 0',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--line)',
                cursor: 'pointer',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = '8px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = '0';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'padding 0.2s',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--pulse)',
                    opacity: 0.7,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--mist)',
                  }}
                >
                  {faq.q}
                </span>
              </div>
              <span
                style={{
                  flexShrink: 0,
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--badge-bg)',
                  border: '1px solid #c7d2fe',
                  color: 'var(--pulse)',
                  fontSize: '0.85rem',
                }}
              >
                ↗
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <Modal
          faq={FAQS[active]}
          index={active}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
