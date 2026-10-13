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
  fontSize: 'clamp(2.4rem,5vw,3.75rem)',
              color: 'var(--mist)',
  fontWeight: 800,
  lineHeight: 1.05,
  letterSpacing: '-0.03em',
              marginBottom: '28px',
  maxWidth: '720px',
            }}
          >
  Independent stores.
  <br />
  Same digital power.
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
  Four builders. One belief. Local stores deserve big tech.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section
        style={{ borderBottom: '1px solid var(--line)', padding: '72px 0' }}
      >
  <style>{`
  .story-point { transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1), border-color 0.25s cubic-bezier(0.4,0,0.2,1); }
  .story-point:hover { transform: translateY(-4px); border-color: rgba(79,70,229,0.5) !important; box-shadow: 0 18px 44px rgba(79,70,229,0.18) !important; }
  `}</style>
        <div
          style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 32px' }}
        >
  <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
  <div className="lg:sticky lg:top-28">
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
  opacity: 0.85,
                  lineHeight: 1.8,
                }}
              >
  No marketplace. No middleman. Your chat is your store.
  Live inventory. Real checkout.
              </p>
            </div>
  <div style={{ position: 'relative', paddingLeft: '4px' }}>
  {/* timeline rail */}
            <div
  aria-hidden
  style={{
  position: 'absolute',
  left: '27px',
  top: '28px',
  bottom: '28px',
  width: '2px',
  background:
  'linear-gradient(180deg, #4f46e5, #a5b4fc 55%, rgba(79,70,229,0.12))',
  borderRadius: '2px',
  }}
  />
  {[
  {
  t: 'Higher margins',
  d: 'Increase operational margins by digitizing manual order-taking',
  },
  {
  t: 'Zero bottlenecks',
  d: 'Eliminate employee administrative bottlenecks created by phone and in-person order management',
  },
  {
  t: 'Loyal customers',
  d: 'Strengthen customer retention by meeting shoppers where they already are, in their chat inbox',
  },
  ].map((item, i) => (
  <div
  key={i}
  style={{
  position: 'relative',
  display: 'flex',
  gap: '18px',
  alignItems: 'flex-start',
  marginBottom: i === 2 ? 0 : '20px',
  }}
            >
  {/* node */}
  <span
  style={{
  position: 'relative',
  zIndex: 1,
  flexShrink: 0,
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.78rem',
  fontWeight: 800,
  color: '#fff',
  background:
  'linear-gradient(135deg, #4f46e5, #7c3aed)',
  border: '4px solid var(--void)',
  boxShadow:
  '0 0 0 1px rgba(79,70,229,0.35), 0 8px 20px rgba(79,70,229,0.35)',
  }}
  >
                    {String(i + 1).padStart(2, '0')}
  </span>
  {/* card */}
  <div
  className="story-point"
  style={{
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  background:
  i === 0
  ? 'linear-gradient(160deg, rgba(79,70,229,0.08), var(--paper) 55%)'
  : 'var(--paper)',
  border:
  i === 0
  ? '1.5px solid rgba(79,70,229,0.55)'
  : '1px solid var(--line)',
  borderRadius: '20px',
  padding: '24px 24px 26px',
  boxShadow:
  i === 0
  ? '0 16px 40px rgba(79,70,229,0.16)'
  : 'var(--card-shadow)',
  }}
  >
  <div
  aria-hidden
  style={{
  position: 'absolute',
  top: '-46px',
  right: '-46px',
  width: '130px',
  height: '130px',
  borderRadius: '50%',
  background:
  'radial-gradient(circle, rgba(79,70,229,0.16), transparent 70%)',
  pointerEvents: 'none',
  }}
  />
  <div
  style={{
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '1rem',
  color: 'var(--mist)',
  marginBottom: '8px',
  letterSpacing: '-0.01em',
  }}
  >
  {item.t}
                  </div>
  <p
  style={{
  fontSize: '0.875rem',
  color: 'var(--mist)',
  opacity: 0.7,
  lineHeight: 1.7,
  }}
  >
  {item.d}
                  </p>
  </div>
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
  To transform traditional, manually-run businesses into
  technologically superior operations, dramatically
  accelerating staff productivity, order accuracy, and
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
  businesses everywhere, so that fast, frictionless,
  everyday buying is simple and accessible to anyone,
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zekvian, comparison table */}
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
  opacity: 0.65,
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
  background: '#fef2f2',
                  }}
                >
                  <span
                    style={{
  color: '#dc2626',
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
  color: '#7f1d1d',
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


