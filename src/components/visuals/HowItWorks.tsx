'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    n: '01',
    title: 'Send List',
    tag: 'whatsapp.receive',
    body: 'No app to download, no account to create, no new interface to learn. The shopper simply opens WhatsApp and sends their grocery list exactly how it feels natural, a quick text message or a snapshot of a handwritten note. Zekvian reads the list directly, making adoption frictionless for customers who already use WhatsApp every day.',
    customer: '2kg rice, milk, eggs, and dettol',
    bot: 'Got it! Parsing your list now…',
    progress: 70,
    tone: 'yellow',
  },
  {
    n: '02',
    title: 'AI Match',
    tag: 'ai.substituting',
    body: 'Where a traditional order process stalls on stockouts, Zekvian keeps the basket moving. For every unavailable item, the AI proposes suitable alternatives that are available right now, with live pricing pulled from the store POS. Customers see real-money options before they confirm the order.',
    customer: 'Parisudham Sunflower oil 1L',
    bot: 'Suggested: Parisudham not Available, Fortune Sunflower Oil 1L, ₹142 (Available)',
    progress: 85,
    tone: 'teal',
  },
  {
    n: '03',
    title: 'Checkout',
    tag: 'order.complete',
    body: 'Once the list is finalized, the customer reviews the complete order and total cost in the same conversation. A single approval confirms it, payment proceeds instantly, and the invoice is generated automatically, no app hopping, no line waiting, no paper receipts.',
    customer: 'Confirm order ✓',
    bot: 'Order confirmed · Invoice sent · Total: ₹847',
    progress: 100,
    tone: 'green',
  },
] as const;

function ChatBubble({ step }: { step: (typeof STEPS)[number] }) {
  const tone = step.tone;
  const accent =
    tone === 'green'
      ? '#16a34a'
      : tone === 'yellow'
        ? '#ca8a04'
        : 'var(--pulse)';
  const accentBg =
    tone === 'green'
      ? '#ecfdf5'
      : tone === 'yellow'
        ? '#fefce8'
        : 'var(--badge-bg)';
  const accentBorder =
    tone === 'green' ? '#86efac' : tone === 'yellow' ? '#fde68a' : '#c7d2fe';

  return (
    <div
      className="interactive-card"
      style={{
        borderRadius: '20px',
        border: '1px solid var(--line)',
        background: 'var(--paper)',
        padding: '22px 20px 18px',
        boxShadow: 'var(--card-shadow)',
        animation: 'chatFade 220ms ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '18px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--mist)',
            opacity: 0.7,
            letterSpacing: '0.04em',
          }}
        >
          zekvian.bot
        </span>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.64rem',
            color: accent,
            borderRadius: '999px',
            border: `1px solid ${accentBorder}`,
            background: accentBg,
            padding: '5px 10px',
            letterSpacing: '0.04em',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: accent,
              display: 'inline-block',
            }}
          />
          {step.tag}
        </span>
      </div>

      <div style={{ display: 'grid', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ maxWidth: '82%', width: '100%' }}>
            <div
              style={{
                borderRadius: '16px 16px 4px 16px',
                background: accentBg,
                border: `1px solid ${accentBorder}`,
                color: 'var(--mist)',
                fontSize: '0.8125rem',
                lineHeight: 1.5,
                padding: '12px 14px',
                boxSizing: 'border-box',
              }}
            >
              {step.customer}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--mist)',
                opacity: 0.65,
                textAlign: 'right',
                marginTop: '5px',
              }}
            >
              You
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ maxWidth: '86%', width: '100%' }}>
            <div
              style={{
                borderRadius: '16px 16px 16px 4px',
                background: '#f9fafb',
                border: '1px solid var(--line)',
                color: 'var(--mist)',
                fontSize: '0.8125rem',
                lineHeight: 1.5,
                padding: '12px 14px',
                boxSizing: 'border-box',
              }}
            >
              {step.bot}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--mist)',
                opacity: 0.65,
                marginTop: '5px',
              }}
            >
              Zekvian Bot
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: '20px',
          height: '3px',
          background: 'var(--line)',
          borderRadius: '999px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${step.progress}%`,
            height: '100%',
            borderRadius: '999px',
            background: accent,
            transition: 'width 0.4s ease, background 0.4s ease',
          }}
        />
      </div>
    </div>
  );
}

export function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReduceMotion = () => setReduceMotion(media.matches);
    updateReduceMotion();
    media.addEventListener?.('change', updateReduceMotion);
    return () => media.removeEventListener?.('change', updateReduceMotion);
  }, []);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updateActiveStep = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const nodeCenter = rect.top + rect.height / 2;
        const distance = Math.abs(nodeCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIdx((prev) => (prev === closestIndex ? prev : closestIndex));
    };

    const handleScroll = () => {
      if (scrollFrameRef.current) cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = requestAnimationFrame(updateActiveStep);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollFrameRef.current) cancelAnimationFrame(scrollFrameRef.current);
    };
  }, [isMobile]);

  return (
    <>
      <style>{`
        @keyframes chatFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        id="how-it-works"
        style={{
          borderTop: '1px solid var(--line)',
          background: 'var(--void)',
          padding: '72px 0 80px',
        }}
      >
        <div
          style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--pulse)',
              letterSpacing: '0.12em',
              marginBottom: '28px',
            }}
          >
            HOW IT WORKS
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1.15fr 0.85fr',
              gap: isMobile ? '20px' : '32px',
              alignItems: 'start',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: '6px',
                  marginBottom: '20px',
                  paddingRight: isMobile ? '0' : '16px',
                }}
              >
                {STEPS.map((step, index) => {
                  const filled = index <= activeIdx;
                  return (
                    <div
                      key={step.n}
                      style={{
                        flex: 1,
                        height: '3px',
                        borderRadius: '999px',
                        background: filled ? 'var(--pulse)' : '#d1d5db',
                        transform: filled ? 'scaleX(1)' : 'scaleX(0.96)',
                        transformOrigin: 'left center',
                        transition: reduceMotion
                          ? 'none'
                          : 'background 0.35s ease, transform 0.35s ease',
                        opacity: filled ? 1 : 0.75,
                      }}
                    />
                  );
                })}
              </div>

              <div style={{ display: 'grid', gap: '12px' }}>
                {STEPS.map((step, index) => {
                  const isActive = index === activeIdx;
                  const expanded = isActive ? '1fr' : '0fr';
                  const toneBorder =
                    step.tone === 'green'
                      ? '#16a34a'
                      : step.tone === 'yellow'
                        ? '#eab308'
                        : '#3b82f6';
                  return (
                    <div
                      key={step.n}
                      ref={(node) => {
                        stepRefs.current[index] = node;
                      }}
                      style={{
                        border: `1px solid ${toneBorder}`,
                        borderRadius: '14px',
                        background: isActive
                          ? 'var(--badge-bg)'
                          : 'var(--paper)',
                        overflow: 'hidden',
                        transition: reduceMotion
                          ? 'none'
                          : 'background 0.25s ease',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveIdx(index)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          border: 'none',
                          background: 'transparent',
                          color: 'var(--mist)',
                          padding: '16px 18px',
                          display: 'grid',
                          gridTemplateColumns: 'auto 1fr auto',
                          gap: '12px',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            color: isActive ? 'var(--pulse)' : '#6b7280',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {step.n}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: isActive ? 'var(--mist)' : '#374151',
                          }}
                        >
                          {step.title}
                        </span>
                        <span
                          style={{
                            display: 'inline-block',
                            width: '9px',
                            height: '9px',
                            borderRight: `1.5px solid ${isActive ? 'var(--pulse)' : '#9ca3af'}`,
                            borderBottom: `1.5px solid ${isActive ? 'var(--pulse)' : '#9ca3af'}`,
                            transform: isActive
                              ? 'rotate(-135deg)'
                              : 'rotate(45deg)',
                            transition: reduceMotion
                              ? 'none'
                              : 'transform 0.25s ease, border-color 0.25s ease',
                            marginRight: '4px',
                          }}
                        />
                      </button>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateRows: expanded,
                          transition: reduceMotion
                            ? 'none'
                            : 'grid-template-rows 0.35s ease',
                        }}
                      >
                        <div style={{ overflow: 'hidden' }}>
                          <div
                            style={{
                              padding: isActive ? '0 18px 16px' : '0',
                              color: '#374151',
                              fontSize: '0.84rem',
                              lineHeight: 1.7,
                            }}
                          >
                            {step.body}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {!isMobile && (
              <div
                style={{
                  position: 'sticky',
                  top: '98px',
                  alignSelf: 'start',
                }}
              >
                <ChatBubble step={STEPS[activeIdx]} />
              </div>
            )}
          </div>

          {isMobile && (
            <div style={{ marginTop: '8px' }}>
              <ChatBubble step={STEPS[activeIdx]} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
