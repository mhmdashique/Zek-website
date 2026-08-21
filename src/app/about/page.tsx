const COMPARISON = [
  [
    'Phone-in orders, manual note-taking',
    'Structured lists parsed automatically from text or photo',
  ],
  [
    'Staff calling back to confirm stock',
    'Instant, live POS availability checks',
  ],
  [
    'Guesswork on substitutions',
    'AI-suggested alternatives at real, live pricing',
  ],
  [
    'Manual billing and paper receipts',
    'One-tap payment with instant digital invoicing',
  ],
];

export default function AboutPage() {
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
            WHO WE ARE
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem,5vw,3.5rem)',
              color: 'var(--mist)',
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: '28px',
              maxWidth: '680px',
            }}
          >
            Independent supermarkets deserve the same digital power as
            billion-dollar platforms.
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--mist)',
              opacity: 0.65,
              lineHeight: 1.8,
              maxWidth: '620px',
            }}
          >
            Zekvian was founded by four vision-driven retail tech innovators
            united by a single conviction — and they shouldn't need a
            billion-dollar budget to get it.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section
        style={{ borderBottom: '1px solid var(--line)', padding: '72px 0' }}
      >
        <div
          style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 32px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--pulse)',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}
              >
                OUR STORY
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                  color: 'var(--mist)',
                  fontWeight: 600,
                  marginBottom: '20px',
                }}
              >
                Not a delivery app. Infrastructure.
              </h2>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--mist)',
                  opacity: 0.65,
                  lineHeight: 1.8,
                }}
              >
                We're not building another delivery app or marketplace that
                competes with local stores. We're building the infrastructure
                that turns a store's existing messaging channel into a live,
                transactional database.
              </p>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              {[
                'Increase operational margins by digitizing manual order-taking',
                'Eliminate employee administrative bottlenecks created by phone and in-person order management',
                'Strengthen customer retention by meeting shoppers where they already are — in their chat inbox',
              ].map((item, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-index">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="feature-desc" style={{ opacity: 0.75 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        style={{ borderBottom: '1px solid var(--line)', padding: '72px 0' }}
      >
        <div
          style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 32px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2px',
              background: 'var(--line)',
            }}
          >
            <div style={{ background: 'var(--void)', padding: '48px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--pulse)',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                OUR MISSION
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--mist)',
                  lineHeight: 1.6,
                }}
              >
                To transform traditional, manually-run supermarkets into
                technologically superior retail ecosystems — dramatically
                accelerating staff productivity, inventory accuracy, and
                customer retention.
              </p>
            </div>
            <div
              style={{ background: 'rgba(79,216,196,0.03)', padding: '48px' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--pulse)',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                OUR VISION
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--mist)',
                  lineHeight: 1.6,
                }}
              >
                To democratize dynamic, conversational commerce for local
                brick-and-mortar stores everywhere — so that fast, frictionless,
                everyday grocery buying is simple and accessible to anyone,
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zekvian — comparison table */}
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
            WHY ZEKVIAN
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
            The old way vs. the Zekvian way
          </h2>
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--line)',
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              <div
                style={{
                  padding: '16px 24px',
                  borderRight: '1px solid var(--line)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--mist)',
                    opacity: 0.4,
                    letterSpacing: '0.06em',
                  }}
                >
                  THE OLD WAY
                </span>
              </div>
              <div style={{ padding: '16px 24px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--pulse)',
                    letterSpacing: '0.06em',
                  }}
                >
                  THE ZEKVIAN WAY
                </span>
              </div>
            </div>
            {COMPARISON.map(([old, neo], i) => (
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
                    padding: '20px 24px',
                    borderRight: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(255, 90, 90, 0.04)',
                  }}
                >
                  <span
                    style={{
                      color: '#ff6b6b',
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
                      color: 'rgba(255, 214, 214, 0.9)',
                      opacity: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    {old}
                  </p>
                </div>
                <div
                  style={{
                    padding: '20px 24px',
                    background: 'rgba(79,216,196,0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <span style={{ color: 'var(--pulse)', flexShrink: 0 }}>
                    ✓
                  </span>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--mist)',
                      opacity: 0.8,
                      lineHeight: 1.6,
                    }}
                  >
                    {neo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for independent retail */}
      <section style={{ padding: '72px 0' }}>
        <div
          style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 32px' }}
        >
          <div style={{ maxWidth: '640px' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--ember)',
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}
            >
              BUILT FOR INDEPENDENT RETAIL
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                color: 'var(--mist)',
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              Local supermarkets are the backbone of every neighborhood.
            </h2>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--mist)',
                opacity: 0.65,
                lineHeight: 1.8,
              }}
            >
              Zekvian exists because local supermarkets shouldn't have to
              disappear into the shadow of e-commerce giants to survive. We give
              them the tools to compete on their own terms, powered by the same
              messaging app their customers already trust.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
