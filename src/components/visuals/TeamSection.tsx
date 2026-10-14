'use client';
import { useState } from 'react';

const TEAM = [
  {
    id: 'LOKI',
    name: 'Loki Laufeyson',
    initials: 'LL',
    role: 'Operations',
    bio: '10 years in retail ops and supply chain. Previously led fulfillment at a 200-store chain.',
    image: '/loki.jpg',
  },
  {
    id: 'SPIDER',
    name: 'Spider Man',
    initials: 'SM',
    role: 'Engineering',
    bio: 'Built distributed systems at scale. Obsessed with sub-50ms allocation latency.',
    image: '/spiderman.jpg',
  },
  {
    id: 'SUPER',
    name: 'Super Man',
    initials: 'SM',
    role: 'Product',
    bio: 'Former ops manager turned product builder. Designed the N8n automation layer.',
    image: '/superman.jpg',
  },
  {
    id: 'BAT',
    name: 'Bat Man',
    initials: 'BM',
    role: 'Customer Success',
    bio: 'Onboarded 40+ retail tenants. Avg setup time under 10 days on his watch.',
    image: '/batman.jpg',
  },
];

function TeamCard({ member, index, active, onEnter, onLeave }: {
  member: (typeof TEAM)[0];
  index: number;
  active: string | null;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const [imgOk, setImgOk] = useState(true);
  const isActive = active === member.id;
  const anyActive = active !== null;

  const transform = isActive
    ? 'translateY(-22px) scale(1.06)'
    : anyActive
      ? 'translateY(0) scale(0.97)'
      : 'translateY(0) scale(1)';

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      tabIndex={0}
      className="rounded-2xl flex flex-col relative outline-none overflow-hidden"
      style={{
        background: '#ffffff',
        border: '1px solid var(--line)',
        transform,
        opacity: anyActive && !isActive ? 0.6 : 1,
        zIndex: isActive ? 30 : 1,
        boxShadow: isActive
          ? '0 36px 70px rgba(65,105,225,0.28)'
          : '0 8px 24px rgba(15,15,15,0.06)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
        borderColor: isActive ? '#4169E1' : undefined,
        cursor: 'pointer',
      }}
    >
      {/* photo */}
      <div className="relative w-full overflow-hidden" style={{ height: '260px', background: '#F8FAFF' }}>
        {imgOk ? (
          <img
            src={member.image}
            alt={member.name}
            onError={() => setImgOk(false)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        ) : (
          <div
            className="flex items-center justify-center w-full h-full text-3xl font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #4169E1, #2F4AC8)', fontFamily: 'var(--font-display)' }}
          >
            {member.initials}
          </div>
        )}
        <span
          className="absolute top-3 right-3 font-mono text-[11px] px-2 py-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.9)', color: '#4169E1', letterSpacing: '0.08em' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
      {/* role */}
      <p className="font-mono text-[11px] font-semibold tracking-[0.16em] mb-1" style={{ color: 'var(--pulse)' }}>
        {member.role.toUpperCase()}
      </p>

      {/* name */}
      <h3 className="text-xl mb-4" style={{ color: 'var(--mist)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
        {member.name}
      </h3>

      {/* divider */}
      <div style={{ height: '1px', background: 'var(--line)', marginBottom: '16px' }} />

      {/* bio */}
      <p className="text-sm flex-1" style={{ color: 'var(--mist)', opacity: 0.6, lineHeight: 1.7 }}>
        {member.bio}
      </p>
      </div>
    </div>
  );
}

export function TeamSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="team"
      style={{
        background: 'var(--void)',
        borderTop: '1px solid var(--line)',
        padding: '72px 0',
        scrollMarginTop: '76px',
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold"
            style={{ borderColor: '#4169E1', background: '#4169E1', color: '#ffffff', letterSpacing: '0.16em', marginBottom: '20px' }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff' }} />
            TEAM
          </span>
          <h2 className="section-heading font-display text-4xl mb-4" style={{ color: 'var(--mist)' }}>
            Built by people who ran ops
          </h2>
          <p style={{ color: 'var(--mist)', opacity: 0.6, fontSize: 'var(--text-17)' }}>
            We&rsquo;ve been on the floor. We know what breaks at 3am.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          style={{ perspective: '1200px' }}
          onMouseLeave={() => setActive(null)}
        >
          {TEAM.map((m, i) => (
            <TeamCard
              key={m.id}
              member={m}
              index={i}
              active={active}
              onEnter={() => setActive(m.id)}
              onLeave={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
