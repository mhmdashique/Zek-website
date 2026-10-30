'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, ArrowUpRight, Bot } from 'lucide-react';

type Message = {
  id: number;
  role: 'bot' | 'user';
  text: string;
  links?: { href: string; label: string }[];
};

const SUGGESTIONS = [
  'How does pricing work?',
  'How fast is onboarding?',
  'Book a demo',
  'Is my data secure?',
];

const GREETING =
  "Hi 👋 I'm the Zekvian assistant. Ask me about pricing, onboarding, WhatsApp ordering, security, or the API — or jump straight to a demo.";

const KB: { keywords: string[]; answer: string; links?: { href: string; label: string }[] }[] = [
  {
    keywords: ['price', 'pricing', 'cost', 'plan', 'billing', 'charge', 'expensive'],
    answer:
      'Plans scale with the number of shops: Starter covers a couple of locations, Growth up to 10, and Enterprise is unlimited. Charges are prorated daily if you add a shop mid-month.',
    links: [
      { href: '/pricing', label: 'See pricing' },
      { href: '/demo', label: 'Talk to sales' },
    ],
  },
  {
    keywords: ['onboard', 'setup', 'start', 'migrate', 'migration', 'launch', 'install'],
    answer:
      'Most teams go live in 1–2 weeks. We handle data migration, give you an onboarding checklist, and run dedicated setup calls on Growth and Enterprise plans.',
    links: [{ href: '/demo', label: 'Start onboarding' }],
  },
  {
    keywords: ['demo', 'book', 'call', 'meeting', 'sales', 'contact', 'talk'],
    answer:
      'Happy to set that up. Pick a time on the demo page and our team replies within 24 hours, Monday to Saturday.',
    links: [{ href: '/demo', label: 'Request a demo' }],
  },
  {
    keywords: ['whatsapp', 'order', 'chat', 'bot', 'list', 'message'],
    answer:
      'Customers send a raw text, photo, or voice note of their grocery list on WhatsApp. The assistant parses it, matches items against live inventory, suggests substitutions, and checks out — no clerk needed.',
    links: [
      { href: '/product', label: 'Product tour' },
      { href: '/solutions', label: 'All solutions' },
    ],
  },
  {
    keywords: ['secure', 'security', 'data', 'privacy', 'encrypt', 'soc', 'gdpr', 'audit'],
    answer:
      'Data is encrypted in transit and at rest, access is role-based, and every action is written to an audit log. Our SOC 2 audit is in progress.',
    links: [
      { href: '/security', label: 'Security overview' },
      { href: '/legal/privacy', label: 'Privacy policy' },
    ],
  },
  {
    keywords: ['api', 'mcp', 'integration', 'webhook', 'n8n', 'automation', 'developer'],
    answer:
      'The API follows the Model Context Protocol, so AI agents can query orders and inventory directly. We also ship pre-built N8n workflow templates for notifications, stock alerts, and reporting.',
    links: [
      { href: '/integrations', label: 'Integrations' },
      { href: '/product', label: 'Product details' },
    ],
  },
  {
    keywords: ['shop', 'tenant', 'multi', 'location', 'store', 'manage'],
    answer:
      'One tenant can manage many shops, with smart order routing that allocates each order to the nearest fulfilment point using haversine distance.',
    links: [{ href: '/product', label: 'How routing works' }],
  },
  {
    keywords: ['route', 'routing', 'haversine', 'delivery', 'distance', 'allocat'],
    answer:
      'Orders are auto-allocated to the closest shop by great-circle distance. You can tune delivery radius, fall back to a second shop, and hook in custom routing logic when needed.',
    links: [{ href: '/product', label: 'Routing engine' }],
  },
  {
    keywords: ['export', 'leave', 'cancel', 'data out', 'csv', 'json'],
    answer:
      'You own your data. Export orders, customers, inventory snapshots, and audit logs as JSON or CSV from the admin dashboard at any time.',
    links: [{ href: '/faq', label: 'Read the FAQ' }],
  },
  {
    keywords: ['support', 'help', 'sla', 'uptime', 'response'],
    answer:
      'Support runs Monday to Saturday with replies inside 24 hours. Enterprise plans add a 99.9% uptime SLA with response-time commitments.',
    links: [
      { href: '/faq', label: 'Help centre' },
      { href: '/demo', label: 'Contact support' },
    ],
  },
  {
    keywords: ['about', 'who', 'company', 'team', 'founder'],
    answer:
      'Zekvian builds multi-tenant retail infrastructure — WhatsApp ordering, smart routing, and automation for shops of every size. Meet the team on the about page.',
    links: [{ href: '/about', label: 'About Zekvian' }],
  },
];

const FALLBACK: Message = {
  id: 0,
  role: 'bot',
  text:
    "I don't have that one yet. The help centre covers most questions — or talk to a human and we'll reply within 24 hours.",
  links: [
    { href: '/faq', label: 'Open help centre' },
    { href: '/demo', label: 'Talk to a human' },
  ],
};

function replyFor(input: string): Message {
  const q = input.toLowerCase();
  const match = KB.find((entry) => entry.keywords.some((k) => q.includes(k)));
  if (!match) return { ...FALLBACK, id: Date.now() };
  return {
    id: Date.now(),
    role: 'bot',
    text: match.answer,
    links: match.links,
  };
}

export function HelpBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'bot', text: GREETING, links: [{ href: '/faq', label: 'Browse help centre' }] },
  ]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setTeaser(true), 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    []
  );

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setDraft('');
    setMessages((m) => [...m, { id: Date.now(), role: 'user', text }]);
    setTyping(true);
    timerRef.current = setTimeout(() => {
      setMessages((m) => [...m, replyFor(text)]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      <style>{`
        @keyframes hb-pop { from { opacity: 0; transform: translateY(14px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes hb-ring { 0% { transform: scale(1); opacity: 0.55; } 70% { transform: scale(1.7); opacity: 0; } 100% { transform: scale(1.7); opacity: 0; } }
        @keyframes hb-dot { 0%, 60%, 100% { transform: translateY(0); opacity: 0.45; } 30% { transform: translateY(-3px); opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .hb-anim, .hb-anim * { animation: none !important; }
        }
      `}</style>

      <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        {/* Panel */}
        {open && (
          <div
            role="dialog"
            aria-label="Zekvian help assistant"
            className="hb-anim flex w-[calc(100vw-2rem)] flex-col overflow-hidden sm:w-[380px]"
            style={{
              maxHeight: 'min(560px, calc(100vh - 7rem))',
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: '20px',
              boxShadow: '0 28px 70px -20px rgba(15,15,20,0.35)',
              animation: 'hb-pop 0.22s cubic-bezier(0.32,0.72,0,1)',
            }}
          >
            {/* Header */}
            <div
              className="relative flex items-center gap-3 px-4 py-3.5"
              style={{
                background: 'linear-gradient(135deg, #4169E1 0%, #2F4AC8 100%)',
                color: '#ffffff',
              }}
            >
              <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/30">
                <Bot className="h-4.5 w-4.5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.875rem] font-bold leading-tight">Zekvian Assistant</p>
                <p className="flex items-center gap-1.5 text-[0.6875rem] leading-tight text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Online · replies instantly
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25 active:scale-95"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
              style={{ background: 'var(--void)' }}
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
                >
                  <div
                    className="max-w-[85%] px-3.5 py-2.5 text-[0.8125rem] leading-relaxed"
                    style={
                      m.role === 'user'
                        ? {
                            background: '#4169E1',
                            color: '#ffffff',
                            borderRadius: '14px 14px 4px 14px',
                          }
                        : {
                            background: 'var(--paper)',
                            color: 'var(--mist)',
                            border: '1px solid var(--line)',
                            borderRadius: '14px 14px 14px 4px',
                          }
                    }
                  >
                    <p>{m.text}</p>
                    {m.links && m.links.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {m.links.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.6875rem] font-bold transition"
                            style={{
                              background: 'var(--badge-bg)',
                              color: '#2F4AC8',
                              border: '1px solid rgba(65,105,225,0.35)',
                            }}
                          >
                            {l.label}
                            <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div
                    className="flex items-center gap-1 px-3.5 py-3"
                    style={{
                      background: 'var(--paper)',
                      border: '1px solid var(--line)',
                      borderRadius: '14px 14px 14px 4px',
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          background: '#4169E1',
                          animation: `hb-dot 1s ${i * 0.15}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length <= 2 && !typing && (
              <div
                className="flex flex-wrap gap-1.5 px-4 pb-2 pt-2"
                style={{ background: 'var(--void)' }}
              >
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold transition hover:border-[#4169E1] hover:text-[#2F4AC8]"
                    style={{
                      background: 'var(--paper)',
                      border: '1px solid var(--line)',
                      color: 'var(--mist)',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(draft);
              }}
              className="flex items-center gap-2 border-t px-3 py-3"
              style={{ borderColor: 'var(--line)', background: 'var(--paper)' }}
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask a question…"
                aria-label="Ask the Zekvian assistant a question"
                className="min-w-0 flex-1 bg-transparent px-1 text-[0.8125rem] outline-none placeholder:text-neutral-400"
                style={{ color: 'var(--mist)' }}
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                aria-label="Send message"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white transition disabled:opacity-40"
                style={{ background: '#4169E1' }}
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        )}

        {/* Teaser bubble */}
        {teaser && !open && (
          <div
            className="hb-anim hidden max-w-[240px] rounded-2xl px-3.5 py-2.5 text-[0.75rem] font-medium shadow-lg sm:block"
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              color: 'var(--mist)',
              animation: 'hb-pop 0.3s cubic-bezier(0.32,0.72,0,1)',
            }}
          >
            <span className="mr-1">👋</span> Need a hand? Ask about pricing, setup, or book a demo.
          </div>
        )}

        {/* Launcher */}
        <button
          type="button"
          onClick={() => {
            setTeaser(false);
            setOpen((v) => !v);
          }}
          aria-label={open ? 'Close help assistant' : 'Open help assistant'}
          aria-expanded={open}
          className="group relative grid h-14 w-14 place-items-center rounded-full text-white transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #4169E1 0%, #2F4AC8 100%)',
            boxShadow: '0 12px 30px -8px rgba(65,105,225,0.75)',
          }}
        >
          {!open && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                border: '2px solid #4169E1',
                animation: 'hb-ring 2.6s ease-out infinite',
              }}
            />
          )}
          {open ? (
            <X className="h-5 w-5" strokeWidth={2.5} />
          ) : (
            <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-6" strokeWidth={2} />
          )}
        </button>
      </div>
    </>
  );
}
