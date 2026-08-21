const SOLUTIONS = [
  {
    n: '01',
    title: 'AI WhatsApp Ordering Chatbot',
    desc: 'Customers send a raw or photographed grocery list to WhatsApp. The bot parses unstructured text/images, matches items against live store inventory, and updates quantities in real time — no manual clerk involvement needed.',
  },
  {
    n: '02',
    title: 'Autonomous Substitution Engine',
    desc: 'When an item is out of stock, the AI immediately proposes alternatives based on brand, price, and category — preventing lost sales from stockouts.',
  },
  {
    n: '03',
    title: 'In-Chat Checkout',
    desc: 'Dynamic pricing totals, last-minute list edits, digital invoicing, and secure payment links are all handled inside the WhatsApp conversation — no app switch required.',
  },
  {
    n: '04',
    title: 'Delivery & Pickup Fulfillment',
    desc: 'Orders auto-dispatch to a driver app with route optimization and real-time WhatsApp tracking updates. Customers pre-approve and pay for pickup, then collect prepared orders with zero queue time.',
  },
  {
    n: '05',
    title: 'Storekeeper & Driver Apps',
    desc: 'Dedicated apps for packing (visual, high-efficiency picking lists) and delivery (route tracking, payment receipts) streamline the operational side of every order.',
  },
  {
    n: '06',
    title: 'Owner/Manager SaaS Dashboard',
    desc: 'Live revenue analytics (daily/weekly/monthly/yearly), out-of-stock predictive alerts, top-seller tracking, and franchise-level multi-store toggling with role-based access.',
  },
  {
    n: '07',
    title: 'Global Web Admin Console',
    desc: 'Centralized control panel for managing price catalogs, stock levels, and store data across the network.',
  },
];

const PAIN_POINTS = [
  ['10–25 min manual stock checks', 'Sub-1-second inventory lookup'],
  ['Lost sales on out-of-stock items', 'Instant AI-suggested substitutes'],
  ['Manual re-order hassle', '1-click re-order of past lists'],
  ['No delivery visibility', 'Live tracking pushed via WhatsApp'],
  ['Cash/manual payment friction', 'Integrated link payments + auto-invoicing'],
  ['Single-store-only tools', 'Multi-branch toggle and consolidated reporting'],
];

const NET_EFFECTS = [
  {
    value: '~80%',
    label:
      'reduction in manual labor tied to order-taking and stock verification',
  },
  {
    value: '↓ 0',
    label: 'revenue leakage from stockouts via automated substitution',
  },
  {
    value: 'Near zero',
    label: 'in-store queue time — faster checkout and pickup',
  },
  {
    value: 'Day 1',
    label:
      'franchise-ready — one owner account scales across unlimited branches',
  },
];

export default function SolutionsPage() {
  return (
    <div style={{ background: 'var(--void)', minHeight: '100vh' }}>
      {/* Header */}
      <section
        style={{
          borderBottom: '1px solid var(--line)',
          padding: '80px 0 64px',
        }}
      >
        <div
          style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 32px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--pulse)',
              letterSpacing: '0.1em',
              marginBottom: '12px',
            }}
          >
            SOLUTIONS
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem,5vw,3.5rem)',
              color: 'var(--mist)',
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: '20px',
              maxWidth: '680px',
            }}
          >
            What Zekvian does — available now
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--mist)',
              opacity: 0.6,
              lineHeight: 1.75,
              maxWidth: '560px',
            }}
          >
            Seven production-ready capabilities that transform a traditional
            supermarket into a fully automated, WhatsApp-native retail
            operation.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section
        style={{ borderBottom: '1px solid var(--line)', padding: '72px 0' }}
      >
        <div
          style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 32px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {SOLUTIONS.map((s) => (
              <div key={s.n} className="feature-card">
                <div className="feature-index">{s.n}</div>
                <h3 className="feature-title">{s.title}</h3>
                <p className="feature-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain point table */}
      <section
        style={{ borderBottom: '1px solid var(--line)', padding: '72px 0' }}
      >
        <div
          style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 32px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--pulse)',
              letterSpacing: '0.1em',
              marginBottom: '12px',
            }}
          >
            WHAT THIS SOLVES
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem,3vw,2.2rem)',
              color: 'var(--mist)',
              fontWeight: 600,
              marginBottom: '40px',
            }}
          >
            Pain point today → Zekvian fix now
          </h2>
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--line)',
              background: 'var(--paper)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: 'var(--badge-bg)',
              }}
            >
              <div
                style={{
                  padding: '14px 24px',
                  borderRight: '1px solid var(--line)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#6b7280',
                    opacity: 1,
                    letterSpacing: '0.06em',
                  }}
                >
                  PAIN POINT TODAY
                </span>
              </div>
              <div style={{ padding: '14px 24px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--ember)',
                    letterSpacing: '0.06em',
                  }}
                >
                  ZEKVIAN FIX NOW
                </span>
              </div>
            </div>
            {PAIN_POINTS.map(([pain, fix], i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderTop: '1px solid var(--line)',
                }}
              >
                <div
                  style={{
                    padding: '18px 24px',
                    borderRight: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#fff1f2',
                  }}
                >
                  <span
                    style={{
                      color: '#ef4444',
                      flexShrink: 0,
                      fontSize: '1.15rem',
                      fontWeight: 700,
                    }}
                  >
                    ✕
                  </span>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#991b1b',
                      opacity: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    {pain}
                  </p>
                </div>
                <div
                  style={{
                    padding: '18px 24px',
                    background: '#ecfdf5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ color: '#16a34a', flexShrink: 0 }}>✓</span>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#166534',
                      opacity: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    {fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Net effects */}
      <section style={{ padding: '72px 0' }}>
        <div
          style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 32px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--ember)',
              letterSpacing: '0.1em',
              marginBottom: '12px',
            }}
          >
            NET EFFECT
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem,3vw,2.2rem)',
              color: 'var(--mist)',
              fontWeight: 600,
              marginBottom: '40px',
            }}
          >
            For a store adopting Zekvian today
          </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
              }}
            >
              {NET_EFFECTS.map((e, i) => (
                <div key={i} className="feature-card">
                  <div className="net-value">{e.value}</div>
                  <p className="feature-desc" style={{ opacity: 0.75 }}>
                    {e.label}
                  </p>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
