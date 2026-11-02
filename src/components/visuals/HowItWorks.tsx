"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  playWhatsAppNotification,
  unlockNotificationSound,
} from "@/lib/notification-sound";

const STEPS = [
  {
    n: '01',
    title: 'Greetings & Onboarding',
    tag: 'onboarding',
    body: 'No app to download, no account to create, no new interface to learn. The shopper simply opens WhatsApp and says hi. Zekvian greets returning customers, remembers how they shop, and invites them to share their list in whatever way feels natural.',
    customer: 'Hi!\n My name is John',
    bot: 'Nice to meet you, John! 👋\nWhat can I get for you today?\nSend a list, a photo, or a voice note.',
    progress: 30,
    tone: 'yellow',
},
  {
    n: "02",
    title: "Send List",
    tag: "whatsapp.receive",
    body: "The shopper sends their grocery list exactly how it feels natural: a quick text message, a voice note, or a snapshot of a handwritten note. Zekvian reads the list directly, making adoption frictionless for customers who already use WhatsApp every day.",
    messages: [
      { from: "customer", text: "Milk 1L,\n eggs x 10,\n dettol 500ml,\n Fortune Sunflower Oil 1L" },
      { from: "bot", text: "Got it! Parsing your list now... \u23F3" },
    ],
    progress: 60,
    tone: "yellow",
  },
  {
    n: "03",
    title: "AI Match",
    tag: "ai.substituting",
    body: "Where a traditional order process stalls on stockouts, Zekvian keeps the basket moving. For every unavailable item, the AI proposes suitable alternatives that are available right now, with live pricing pulled from the store POS. Customers see real-money options before they confirm the order.",
    messages: [
      { from: "customer", text: "Milk 1L, eggs x 10, dettol 500ml, Fortune Sunflower Oil 1L" },
      { from: "bot", text: "🥛 Milk 1L — ₹62\n🥚 Eggs x 10 — ₹70\n🧴 Dettol 500ml — ₹95\n🌻 Fortune Sunflower Oil 1L — not available\nSuggested: 🥥 Kera Coconut Oil 1L — ₹342\nReply \"Yes\" to add to cart" },
    ],
    progress: 85,
    tone: "teal",
  },
  {
    n: "04",
    title: "Checkout",
    tag: "order.complete",
    body: "Once the list is finalized, the customer sees a full order preview with itemised prices and the total in the same conversation. A single approval places the order, an order ID is generated instantly, and the invoice follows automatically, no app hopping, no line waiting, no paper receipts.",
    messages: [
      { from: "customer", text: "Yes, add . Confirm order \u2713" },
      { from: "bot", text: "✅ Order placed! 🎉\n🧾 Order ID: ORD-2026-00007\n\nMilk 1L \u00D7 1 — ₹62.00\nEggs \u00D7 10 \u00D7 1 — ₹70.00\nDettol 500ml \u00D7 1 — ₹95.00\nKera Coconut Oil 1L \u00D7 1 — ₹342.00\nTotal — ₹569.00\n\n💵 Pay ₹569.00 on delivery.\n\n 📞 Our delivery partner will call you once we start! 😊" },
    ],
    progress: 100,
    tone: "green",
  },
] as const;

const STAGE_SUBTITLE: Record<string, string> = {
  "onboarding": "onboarding\u2026",
  "whatsapp.receive": "receiving your list\u2026",
  "ai.substituting": "finding substitutes\u2026",
  "order.complete": "order complete",
};

const STAGE_TIMES: Record<string, { user: string; bot: string }> = {
  "01": { user: "10:41", bot: "10:41" },
  "02": { user: "10:41", bot: "10:42" },
  "03": { user: "10:42", bot: "10:43" },
  "04": { user: "10:43", bot: "10:44" },
};

const FONT_STACK = '-apple-system, "Segoe UI", Helvetica, Arial, sans-serif';

function Svg(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props}>{props.children}</svg>;
}

function Path(props: React.SVGProps<SVGPathElement>) {
  return (
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} />
  );
}

function Icon({
  size = 22,
  children,
  style,
  className,
  fill = "none",
}: {
  size?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={fill === "none" ? "currentColor" : "none"}
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ flexShrink: 0, display: "block", ...style }}
    >
      {children}
    </svg>
  );
}

function ChatBubble({
  step,
  reduceMotion,
}: {
  step: (typeof STEPS)[number];
  reduceMotion: boolean;
}) {
  const [phase, setPhase] = useState(() => (reduceMotion ? 2 : 0));
  const [ticksBlue, setTicksBlue] = useState(() => reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;
    // Shopper sends the message, then the bot replies — each with a chime.
    const t0 = setTimeout(() => playWhatsAppNotification(), 80);
    const t1 = setTimeout(() => setTicksBlue(true), 600);
    const t2 = setTimeout(() => setPhase(1), 800);
    const t3 = setTimeout(() => setPhase(2), 1500);
    const t4 = setTimeout(() => playWhatsAppNotification(), 1580);
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [step.tag, reduceMotion]);
  const _step = step as unknown as { messages?: readonly { from: string; text: string }[]; customer?: string; bot?: string };
  const _messages = _step.messages;
  const customer = _messages ? _messages.filter((m) => m.from === 'customer').map((m) => m.text).join('\n') : (_step.customer ?? '');
  const bot = _messages ? _messages.filter((m) => m.from === 'bot').map((m) => m.text).join('\n') : (_step.bot ?? '');
  const times = STAGE_TIMES[step.n];
  const subtitle = STAGE_SUBTITLE[step.tag];

  const bubbleBase = {
    borderRadius: "8px",
    fontSize: "16px",
    lineHeight: "21px",
    fontFamily: FONT_STACK,
    color: "var(--wa-text)",
    padding: "12px 14px",
    maxWidth: "80%",
    boxSizing: "border-box" as const,
    wordWrap: "break-word" as const,
    overflowWrap: "anywhere" as const,
  };

  const userBubble = {
    ...bubbleBase,
    borderRadius: "8px 0 8px 8px",
    background: "var(--wa-outgoing)",
    alignSelf: "flex-end",
    marginLeft: "auto",
  } as React.CSSProperties;

  const botBubble = {
    ...bubbleBase,
    borderRadius: "0 8px 8px 8px",
    background: "var(--wa-incoming)",
    alignSelf: "flex-start",
  } as React.CSSProperties;

  const meta = {
    fontSize: "13px",
    color: "var(--wa-meta)",
    marginTop: "4px",
    fontFamily: FONT_STACK,
  };

  const tick = (filled: boolean) => (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      style={{ display: "block", marginLeft: "6px" }}
      aria-hidden="true"
    >
      <Path
        d="M1 7.6l2 2 4-4.4"
        stroke={filled ? "var(--wa-tick-read)" : "var(--wa-meta)"}
        strokeWidth="1.8"
      />
      <Path
        d="M4 7.6l2 2 4-4.4"
        stroke={filled ? "var(--wa-tick-read)" : "var(--wa-meta)"}
        strokeWidth="1.8"
      />
    </Svg>
  );

  const typingDot = (i: number) => (
    <div
      key={i}
      className="wa-typing-dot"
      style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "var(--wa-meta)",
        display: "inline-block",
        animation: `wa-dot 1s ${i * 0.18}s infinite`,
      }}
    />
  );

  const bubbleAnim = (delay: number): React.CSSProperties =>
    reduceMotion
      ? { animation: "none" }
      : {
          animationName: "wa-bubble",
          animationDuration: "450ms",
          animationTimingFunction: "ease",
          animationFillMode: "both",
          animationDelay: `${delay}ms`,
        };

  const renderBotLine = (line: string, li: number, total: number) => {
    const words = line.split(" ");
    return (
      <span
        key={li}
        style={{ display: "block", marginBottom: li < total - 1 ? "2px" : 0 }}
      >
        {words.map((word, i) => {
          const lower = word.toLowerCase();
          if (
            step.tag === "ai.substituting" &&
            (lower === "not" || lower === "available")
          ) {
            return (
              <span
                key={i}
                style={{
                  color: "var(--wa-meta)",
                  textDecoration: "line-through",
                }}
              >
                {word}
                {i === words.length - 1 ? "" : " "}
              </span>
            );
          }
          if (
            step.tag === "ai.substituting" &&
            lower.startsWith("suggested:")
          ) {
            return (
              <span
                key={i}
                style={{ color: "var(--wa-chip-text)", fontWeight: 600 }}
              >
                {word}
                {i === words.length - 1 ? "" : " "}
              </span>
            );
          }
          if (step.tag === "order.complete" && lower.startsWith("total")) {
            return (
              <span key={i} style={{ fontWeight: 700 }}>
                {word}
                {i === words.length - 1 ? "" : " "}
              </span>
            );
          }
          return (
            <span key={i}>
              {word}
              {i === words.length - 1 ? "" : " "}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <div className="wa-phone-wrap">
      <div className="wa-phone-frame">
        <div className="wa-phone-screen">
          <div className="wa-phone-status">
            <span className="wa-phone-time">10:41</span>
            <span className="wa-phone-status-icons" aria-hidden>
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="currentColor"
              >
                <rect x="0" y="7" width="3" height="4" rx="1" />
                <rect x="4.5" y="5" width="3" height="6" rx="1" />
                <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
                <rect x="13.5" y="0" width="3" height="11" rx="1" />
              </svg>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="M1 4.2a10.5 10.5 0 0 1 14 0" />
                <path d="M3.6 6.9a7 7 0 0 1 8.8 0" />
                <path d="M6.2 9.5a3.4 3.4 0 0 1 3.6 0" />
                <circle
                  cx="8"
                  cy="11"
                  r="0.8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              <span className="wa-phone-battery">
                <span className="wa-phone-battery-level" />
              </span>
            </span>
          </div>

          <div
            className="wa-chat-card"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                background: "var(--wa-header)",
                color: "#ffffff",
                height: "58px",
                flexShrink: 0,
                padding: "0 8px 0 4px",
                display: "flex",
                alignItems: "start",
                gap: "2px",
              }}
              data-tag={step.tag}
            >
              <Icon size={24} style={{ opacity: 0.95 }}>
                <path d="M15 5l-7 7 7 7" />
              </Icon>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.14)",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  marginLeft: "2px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/Zekvian%20Z.jpeg"
                  alt="Zekvian"
                  width={34}
                  height={34}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ minWidth: 0, flex: 1, marginLeft: "8px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    gap: "5px",
                    minWidth: 0,
                  }}
                >
                  <span
                    className="wa-chat-title"
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      fontFamily: FONT_STACK,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Zekvian Bot
                  </span>
                  <Icon size={12} style={{ opacity: 0.9 }}>
                    <circle cx="12" cy="12" r="9" strokeWidth={2} />
                    <path d="M8.2 12.3l2.2 2.2 5-5.4" strokeWidth={2} />
                  </Icon>
                </div>
                <div
                  className="wa-chat-status"
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.95)",
                    fontFamily: FONT_STACK,
                    marginTop: "1px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {subtitle}
                </div>
              </div>
              <div
                className="wa-header-actions"
                style={{
                  display: "flex",
                  alignItems: "start",
                  gap: "14px",
                  flexShrink: 0,
                  marginLeft: "4px",
                  paddingRight: "4px",
                }}
              >
                <Icon size={21} className="wa-header-video">
                  <rect x="2.5" y="6.5" width="12.5" height="11" rx="3" />
                  <path d="M15 10.5l5.5-3v9l-5.5-3" />
                </Icon>
                <Icon size={21}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </Icon>
                <Icon size={21} fill="currentColor">
                  <circle cx="12" cy="5" r="1.7" stroke="none" />
                  <circle cx="12" cy="12" r="1.7" stroke="none" />
                  <circle cx="12" cy="19" r="1.7" stroke="none" />
                </Icon>
              </div>
            </div>

            <div
              key={step.tag}
              className="wa-chat-body"
              style={{
                flex: "0 0 420px",
                overflowY: "auto",
                padding: "12px 12px 10px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                height: "420px",
              }}
              role="log"
              aria-live="off"
              aria-label={`Zekvian Bot conversation: ${step.title}`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "2px",
                }}
              >
                <span
                  style={{
                    background: "var(--wa-date-bg)",
                    color: "var(--wa-meta)",
                    fontSize: "12.5px",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                    borderRadius: "8px",
                    boxShadow: "0 1px 0.5px rgba(11, 20, 26, 0.13)",
                    fontFamily: FONT_STACK,
                  }}
                >
                  Today
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    gap: "6px",
                    maxWidth: "90%",
                    background: "var(--wa-notice-bg)",
                    color: "var(--wa-notice-text)",
                    fontSize: "12.5px",
                    lineHeight: "17px",
                    padding: "6px 10px",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontFamily: FONT_STACK,
                  }}
                >
                  <Icon size={14}>
                    <rect x="4" y="10" width="16" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </Icon>
                  <span>
                    Messages are end-to-end encrypted. No one outside this chat
                    can read them.
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  className="wa-bubble-outgoing"
                  style={userBubble}
                  title={customer}
                >
                  {customer.split("\n").map((line: string, li: number, arr: string[]) => (
                    <span key={li} style={{ display: 'block', marginBottom: li < arr.length - 1 ? '6px' : 0 }}>{line}</span>
                  ))}
                  {times ? (
                    <div
                      style={{
                        ...meta,
                        color: "var(--wa-meta-outgoing)",
                        textAlign: "right",
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "2px",
                      }}
                    >
                      {times.user}
                      {ticksBlue ? tick(true) : tick(false)}
                    </div>
                  ) : null}
                </div>
              </div>

              {phase === 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    ...bubbleAnim(300),
                  }}
                >
                  <div
                    className="wa-bubble-incoming"
                    style={{
                      ...botBubble,
                      display: "flex",
                      alignItems: "start",
                      gap: "6px",
                      minHeight: "42px",
                    }}
                  >
                    {[0, 1, 2].map(typingDot)}
                  </div>
                </div>
              )}

              {phase >= 2 && (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      ...bubbleAnim(80),
                    }}
                  >
                    <div
                      className="wa-bubble-incoming"
                      style={botBubble}
                      title={bot}
                    >
                      {bot
                        .split("\n")
                        .map((line: string, li: number, arr: string[]) =>
                          renderBotLine(line, li, arr.length),
                        )}
                      {times ? (
                        <div
                          style={{
                            ...meta,
                            textAlign: "right",
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "2px",
                            marginTop: "6px",
                          }}
                        >
                          {times.bot}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div
              style={{
                position: "relative",
                flexShrink: 0,
                minHeight: "62px",
                background: "var(--wa-input-bar)",
                padding: "8px 10px",
                display: "flex",
                alignItems: "start",
                gap: "8px",
                boxSizing: "border-box",
              }}
              aria-hidden
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--wa-progress-track)",
                }}
              >
                <div
                  style={{
                    width: `${step.progress}%`,
                    height: "100%",
                    background: "var(--wa-accent)",
                    transition: reduceMotion ? "none" : "width 0.4s ease",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  alignItems: "start",
                  gap: "10px",
                  background: "var(--wa-input-pill)",
                  borderRadius: "999px",
                  padding: "0 10px 0 14px",
                  minHeight: "42px",
                  color: "var(--wa-placeholder)",
                }}
              >
                <Icon size={22}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8.5 14.2a4.5 4.5 0 0 0 7 0" />
                  <circle
                    cx="9"
                    cy="9.6"
                    r="0.9"
                    fill="currentColor"
                    stroke="none"
                  />
                  <circle
                    cx="15"
                    cy="9.6"
                    r="0.9"
                    fill="currentColor"
                    stroke="none"
                  />
                </Icon>
                <span
                  style={{
                    flex: 1,
                    minWidth: 0,
                    fontSize: "15px",
                    color: "var(--wa-placeholder)",
                    fontFamily: FONT_STACK,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Message
                </span>
                <Icon size={22} style={{ transform: "rotate(45deg)" }}>
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </Icon>
                <Icon size={22}>
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3.5" />
                </Icon>
              </div>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "var(--wa-accent)",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  color: "#ffffff",
                }}
              >
                <Icon size={23}>
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <path d="M12 19v3" />
                </Icon>
              </div>
            </div>

            <div className="wa-phone-home" aria-hidden />
            <div className="wa-phone-island" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReduceMotion = () => setReduceMotion(media.matches);
    updateReduceMotion();
    media.addEventListener?.("change", updateReduceMotion);
    return () => media.removeEventListener?.("change", updateReduceMotion);
  }, []);

  // Browsers only allow audio after a user gesture — unlock the chime once.
  useEffect(() => {
    const unlock = () => unlockNotificationSound();
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const goToStep = (index: number) => {
    if (index === activeIdx) {
      setReplayKey((k) => k + 1);
    } else {
      setActiveIdx(index);
    }
  };

  return (
    <>
      <style>{`
        @keyframes wa-bubble {
          from { transform: translateY(6px); }
          to { transform: translateY(0); }
        }
        @keyframes wa-dot {
          0%, 80%, 100% { transform: scale(1); opacity: 0.55; }
          40% { transform: scale(1.35); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-typing-dot { animation: none !important; opacity: 0.6; }
        }
        .hiw-step-card { cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
        .hiw-step-card:hover { transform: translateY(-3px); box-shadow: 0 12px 30px -8px rgba(65,105,225,0.25); border-color: #4169E1 !important; }
      `}</style>

      <section
        id="how-it-works"
        style={{
          borderTop: "1px solid var(--line)",
          background: "var(--void)",
          padding: "72px 0 80px",
        }}
      >
        <div
          style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px" }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold"
            style={{
              borderColor: "#4169E1",
              background: "#4169E1",
              color: "#ffffff",
              letterSpacing: "0.16em",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#ffffff",
              }}
            />
            HOW IT WORKS
          </span>

          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Step {activeIdx + 1} of {STEPS.length}: {STEPS[activeIdx].title}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "20px" : "32px",
              alignItems: "start",
            }}
          >
            <div>
              <div style={{ display: "grid", gap: "12px" }} role="tablist" aria-label="How it works steps">
                {STEPS.map((step, index) => {
                  const isActive = index === activeIdx;
                  const toneBorder =
                    step.tone === "green"
                      ? "#16a34a"
                      : step.tone === "yellow"
                        ? "#eab308"
                        : "#4169E1";
                  const toneWash =
                    step.tone === "green"
                      ? "#f0fdf4"
                      : step.tone === "yellow"
                        ? "#fffbeb"
                        : "#F8FAFF";
                  return (
                    <div
                      key={step.n}
                      onClick={() => goToStep(index)}
                      className="hiw-step-card"
                      role="tab"
                      aria-selected={isActive}
                      aria-current={isActive ? "true" : undefined}
                      ref={(node) => {
                        stepRefs.current[index] = node;
                      }}
                      style={{
                        border: `1px solid ${isActive ? toneBorder : "#e5e7eb"}`,
                        borderRadius: "14px",
                        background: isActive
                          ? `linear-gradient(180deg, ${toneWash} 0%, #ffffff 75%)`
                          : "var(--paper)",
                        overflow: "hidden",
                        transition: reduceMotion
                          ? "none"
                          : "border-color 0.25s ease, background 0.25s ease",
                        position: "relative",
                        padding: "22px 20px",
                        minHeight: "175px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "start",
                          gap: "12px",
                          marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.8rem",
                            color: isActive ? "var(--pulse)" : "#6b7280",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {step.n}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.125rem",
                            fontWeight: 700,
                            color: isActive ? "var(--mist)" : "#374151",
                          }}
                        >
                          {step.title}
                        </span>
                      </div>
                      <div
                        style={{
                          color: "#374151",
                          fontSize: "0.94rem",
                          lineHeight: 1.7,
                          paddingLeft: "30px",
                          marginTop: "10px",
                          marginBottom: "4px",
                        }}
                      >
                        {step.body}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                position: "sticky",
                top: "24px",
                zIndex: 10,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "12px",
              }}
            >
              <button
                type="button"
                className="hiw-nav-btn hiw-nav-side"
                onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
                disabled={activeIdx === 0}
                aria-label="Previous step"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>

              <ChatBubble
                key={`${STEPS[activeIdx].tag}-${replayKey}-${reduceMotion}`}
                step={STEPS[activeIdx]}
                reduceMotion={reduceMotion}
              />

              <button
                type="button"
                className="hiw-nav-btn hiw-nav-side"
                onClick={() =>
                  setActiveIdx((i) => Math.min(STEPS.length - 1, i + 1))
                }
                disabled={activeIdx === STEPS.length - 1}
                aria-label="Next step"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
