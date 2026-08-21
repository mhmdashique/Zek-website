import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import Link from 'next/link';
import Image from 'next/image';

const SANDBOX_STATS = [
  { value: '8', label: 'Demo Shops' },
  { value: '124', label: 'Products' },
  { value: 'Live', label: 'Routing' },
];

export default function DemoPage() {
  return (
    <div
      className="w-full"
      style={{ background: 'var(--void)', minHeight: '100vh' }}
    >
      {/* Header */}
      <section
        className="py-20"
        style={{ borderBottom: '1px solid var(--line)' }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2"
            style={{ textDecoration: 'none' }}
          ></Link>

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

          <p
            className="mb-4 font-mono text-xs"
            style={{ color: 'var(--pulse)', letterSpacing: '0.1em' }}
          >
            SANDBOX
          </p>
          <h1
            className="font-display mb-4 text-5xl"
            style={{ color: 'var(--mist)' }}
          >
            See ZEKVIAN in action
          </h1>
          <p
            style={{
              color: 'var(--mist)',
              opacity: 0.6,
              fontSize: 'var(--text-17)',
            }}
          >
            Explore an interactive sandbox with pre-seeded shops, products, and
            orders — or request a tailored live demo.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Sandbox panel */}
          <div>
            <h2
              className="font-display mb-6 text-2xl"
              style={{ color: 'var(--mist)' }}
            >
              Interactive Sandbox
            </h2>
            <div
              className="mb-6 flex aspect-video w-full items-center justify-center rounded-2xl"
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <div className="px-6 text-center">
                <div
                  className="mb-3 font-mono text-xs"
                  style={{ color: 'var(--pulse)' }}
                >
                  ● coming soon
                </div>
                <p
                  className="text-sm"
                  style={{
                    color: 'var(--mist)',
                    opacity: 0.78,
                    lineHeight: 1.6,
                  }}
                >
                  A pre-seeded tenant with shops, products, and live routing
                  will appear here.
                </p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-3 gap-3">
              {SANDBOX_STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl py-4 text-center"
                  style={{
                    background: 'var(--badge-bg)',
                    border: '1px solid #c7d2fe',
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
                    style={{ color: 'var(--mist)', opacity: 0.72 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p
              className="text-sm"
              style={{ color: 'var(--mist)', opacity: 0.72, lineHeight: 1.6 }}
            >
              The sandbox is isolated — your actions won't affect real data.
              State resets on reload.
            </p>
          </div>

          {/* Request form */}
          <div>
            <h2
              className="font-display mb-6 text-2xl"
              style={{ color: 'var(--mist)' }}
            >
              Request a tailored demo
            </h2>
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <DemoRequestForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
