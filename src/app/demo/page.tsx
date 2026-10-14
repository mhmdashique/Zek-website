import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import Link from 'next/link';

const CONTACT_ITEMS = [
  { value: '<24h', label: 'Response time' },
  { value: 'Mon to Sat', label: 'Support' },
  { value: 'Live', label: 'Demo call' },
];

export default function DemoPage() {
  return (
    <div
      className="w-full"
      style={{ background: 'var(--void)', minHeight: '100vh' }}
    >
      {/* Header */}
      <section
        className="py-16 sm:py-20"
        style={{
          borderBottom: '1px solid var(--line)',
          background:
            'radial-gradient(55% 70% at 50% 0%, rgba(65,105,225,0.10), transparent 70%), var(--void)',
        }}
      >
        <div className="site-container text-center">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs"
            style={{
              color: 'var(--mist)',
              opacity: 0.6,
              textDecoration: 'none',
              letterSpacing: '0.08em',
            }}
          >
            <span aria-hidden="true">&larr;</span> BACK TO HOME
          </Link>

          <div>
            <span
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--pulse)',
                background: 'var(--badge-bg)',
                border: '1px solid #4169E1',
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
              SANDBOX · LIVE DEMO
            </span>
          </div>
          <h1
            className="font-display mx-auto text-5xl"
            style={{
              color: 'var(--mist)',
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              maxWidth: '640px',
            }}
          >
            See ZEKVIAN in action
          </h1>
          <p
            className="mx-auto"
            style={{
              color: 'var(--mist)',
              opacity: 0.6,
              fontSize: 'var(--text-17)',
              marginTop: '14px',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}
          >
            Explore ZEKVIAN with a tailored walkthrough, or reach us directly
            below.
          </p>
        </div>
      </section>

      <div className="site-container py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Contact panel */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              boxShadow: 'var(--card-shadow)',
              alignSelf: 'start',
            }}
          >
            <h2
              className="font-display mb-6 text-2xl"
              style={{ color: 'var(--mist)', letterSpacing: '-0.02em' }}
            >
              Contact details
            </h2>
            <a
              href="mailto:official.zekvian@gmail.com"
              className="mb-6 flex w-full items-center gap-4 rounded-2xl p-5"
              style={{
                background: 'var(--badge-bg)',
                border: '1px solid #4169E1',
                textDecoration: 'none',
              }}
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl text-white"
                style={{
                  background:
                    'linear-gradient(135deg, #4169E1 0%, #4169E1 100%)',
                  boxShadow: '0 10px 20px -8px rgba(65,105,225,0.6)',
                }}
                aria-hidden="true"
              >
                ✉
              </span>
              <span>
                <span
                  className="mb-1 block font-mono text-xs"
                  style={{ color: 'var(--pulse)', letterSpacing: '0.08em' }}
                >
                  EMAIL US AT
                </span>
                <span
                  className="font-display block break-all text-lg"
                  style={{ color: 'var(--mist)' }}
                >
                  official.zekvian@gmail.com
                </span>
              </span>
            </a>

            <div className="mb-6 grid grid-cols-3 gap-3">
              {CONTACT_ITEMS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl py-5 text-center"
                  style={{
                    background: 'var(--void)',
                    border: '1px solid var(--line)',
                  }}
                >
                  <div
                    className="font-display mb-1 text-2xl"
                    style={{ color: 'var(--pulse)' }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="font-mono text-xs"
                    style={{ color: 'var(--mist)', opacity: 0.65 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p
              className="text-sm"
              style={{ color: 'var(--mist)', opacity: 0.6, lineHeight: 1.7 }}
            >
              For demos, pricing, and support, we reply within one business
              day. Write to us anytime, your message goes straight to the
              ZEKVIAN team.
            </p>
          </div>

          {/* Request form */}
          <div
            className="relative overflow-hidden rounded-3xl p-8"
            style={{
              background: 'var(--paper)',
              border: '1px solid #4169E1',
              boxShadow: '0 24px 48px -16px rgba(65,105,225,0.25)',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '0 0 auto 0',
                height: '4px',
                background:
                  'linear-gradient(90deg, var(--pulse), #8b5cf6, var(--pulse))',
              }}
            />
            <h2
              className="font-display mb-1 text-2xl"
              style={{ color: 'var(--mist)', letterSpacing: '-0.02em' }}
            >
              Request a tailored demo
            </h2>
            <p
              className="mb-6 text-sm"
              style={{ color: 'var(--mist)', opacity: 0.55 }}
            >
              Tell us about your stores — we&apos;ll shape the walkthrough
              around them.
            </p>
            <DemoRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
