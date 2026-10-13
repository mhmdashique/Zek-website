'use client';

const TESTIMONIALS = [
  {
    quote:
      'ZEKVIAN cut our average order allocation time from 4 minutes to under 50ms. Our ops team stopped manually assigning shops entirely.',
    name: 'Ravi Menon',
    title: 'Head of Operations',
    // company: "FreshRun Retail",
  },
  {
    quote:
      "We run 38 dark stores across three cities. Before ZEKVIAN, routing was a spreadsheet nightmare. Now it's invisible, it just works.",
    name: 'Aisha Balogun',
    title: 'COO',
    // company: "QuickDark Co.",
  },
  {
    quote:
      'The N8n automation hooks saved us from building a custom notification pipeline. We had Slack alerts and inventory sync live in one afternoon.',
    name: 'Tomás Herrera',
    title: 'CTO',
    // company: "LocalRunner",
  },
  {
    quote:
      'Onboarding was under two weeks. The RBAC system meant each franchise owner only sees their own data, exactly what we needed for compliance.',
    name: 'Mei-Lin Chou',
    title: 'VP Technology',
    // company: "Metro Fresh Group",
  },
  {
    quote:
      "The haversine engine handles our peak load of 800 orders per hour without a single manual override. It's genuinely set-and-forget.",
    name: 'Dmitri Volkov',
    title: 'Director of Logistics',
    // company: "UrbanBasket",
  },
  {
    quote:
      'We migrated from a custom-built routing system in 9 days. The MCP-compatible API meant our existing LLM tooling connected on day one.',
    name: 'Fatima Al-Rashid',
    title: 'Engineering Lead',
    // company: "Souk Express",
  },
  {
    quote:
      'Real-time inventory sync across 22 shops was the feature that sold us. Stock discrepancies dropped to near zero within the first week.',
    name: 'Lena Hoffmann',
    title: 'Operations Manager',
    // company: "Stadtmarkt GmbH",
  },
  {
    quote:
      'The audit log alone justified the switch. Every allocation, every override, every role change, fully traceable. Our compliance team loves it.',
    name: 'James Okafor',
    title: 'Head of Compliance',
    // company: "PrimePath Retail",
  },
];

const ROW_1 = TESTIMONIALS.slice(0, 4);
const ROW_2 = TESTIMONIALS.slice(4);

function Card({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div
      className="interactive-card"
      style={{
        flexShrink: 0,
        width: '360px',
        background: 'var(--paper)',
        border: '1px solid var(--line)',
        borderRadius: '14px',
        padding: '24px',
        marginRight: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'border-color 0.2s, background 0.2s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = '#c7d2fe';
        el.style.background = 'var(--badge-bg)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'var(--line)';
        el.style.background = 'var(--paper)';
      }}
    >
      <p
        style={{
          color: 'var(--mist)',
          opacity: 0.7,
          fontSize: '0.875rem',
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        "{t.quote}"
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          borderTop: '1px solid var(--line)',
          paddingTop: '14px',
        }}
      >
        <div
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '0.72rem',
            background: 'var(--badge-bg)',
            border: '1px solid #c7d2fe',
            color: 'var(--pulse)',
          }}
        >
          {t.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--mist)',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            {t.name}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--mist)',
              opacity: 0.7,
              fontSize: '0.68rem',
            }}
          >
            {t.title}{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof TESTIMONIALS;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items, ...items];
  const animName = reverse ? 'marquee-right' : 'marquee-left';

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <style>{`
        @keyframes marquee-left  { from { transform: translateX(0); } to { transform: translateX(calc(-100% / 3)); } }
        @keyframes marquee-right { from { transform: translateX(calc(-100% / 3)); } to { transform: translateX(0); } }
      `}</style>
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `${animName} ${items.length * 8}s linear infinite`,
          willChange: 'transform',
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState =
            'paused')
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState =
            'running')
        }
      >
        {doubled.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-24"
      style={{ background: 'var(--void)', borderTop: '1px solid var(--line)' }}
    >
      <div className="container mx-auto mb-14 max-w-6xl px-4 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p
              className="section-kicker"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--pulse)',
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}
            >
              TESTIMONIALS
            </p>
            <h2
              className="section-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem,4vw,2.5rem)',
                color: 'var(--mist)',
                fontWeight: 600,
              }}
            >
              What ops teams say
            </h2>
          </div>
          <p
            className="section-subheading"
            style={{
              maxWidth: '280px',
              fontSize: '0.875rem',
              color: 'var(--mist)',
              opacity: 0.5,
              lineHeight: 1.6,
            }}
          >
            From dark stores to franchise chains, teams running on ZEKVIAN.
          </p>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            background:
              'linear-gradient(90deg, rgba(79,70,229,0.18) 0%, transparent 8%, transparent 92%, rgba(79,70,229,0.18) 100%)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <MarqueeRow items={ROW_1} />
          <MarqueeRow items={ROW_2} reverse />
        </div>
      </div>
    </section>
  );
}
