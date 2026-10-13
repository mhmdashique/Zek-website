'use client';

import { useState } from 'react';

// Character background photos live in /public/team/.
// Add these 4 files (jpg, png or webp — update `image` below if different):
//   public/team/loki.jpg
//   public/team/spider-man.jpg
//   public/team/super-man.jpg
//   public/team/bat-man.jpg
// If a file is missing, the card gracefully falls back to its themed gradient.
const TEAM = [
  {
    name: 'Loki Laufeyson',
    initials: 'LL',
    // role: 'CEO & Co-founder',
    bio: '10 years in retail ops and supply chain. Previously led fulfillment at a 200-store chain.',
    image: '/team/loki.jpg',
    avatarGradient:
      'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
    avatarBorder: 'rgba(100,120,220,0.5)',
    avatarColor: '#7b8cde',
    glowColor: 'rgba(100,120,220,0.08)',
    borderHover: 'rgba(100,120,220,0.35)',
  },
  {
    name: 'Spider Man',
    initials: 'SM',
    // role: 'CTO & Co-founder',
    bio: 'Built distributed systems at scale. Obsessed with sub-50ms allocation latency.',
    image: '/team/spider-man.jpg',
    avatarGradient:
      'linear-gradient(135deg, #2d0000 0%, #8b0000 50%, #cc0000 100%)',
    avatarBorder: 'rgba(220,50,50,0.5)',
    avatarColor: '#ff6b6b',
    glowColor: 'rgba(220,50,50,0.08)',
    borderHover: 'rgba(220,50,50,0.35)',
  },
  {
    name: 'Super Man',
    initials: 'SM',
    // role: 'Head of Product',
    bio: 'Former ops manager turned product builder. Designed the N8n automation layer.',
    image: '/team/super-man.jpg',
    avatarGradient:
      'linear-gradient(135deg, #0a1628 0%, #1a3a6b 50%, #c8a800 100%)',
    avatarBorder: 'rgba(200,168,0,0.5)',
    avatarColor: '#f5cc00',
    glowColor: 'rgba(200,168,0,0.08)',
    borderHover: 'rgba(200,168,0,0.35)',
  },
  {
    name: 'Bat Man',
    initials: 'BM',
    // role: 'Head of Customer Success',
    bio: 'Onboarded 40+ retail tenants. Avg setup time under 10 days on his watch.',
    image: '/team/bat-man.jpg',
    avatarGradient:
      'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2d2d2d 100%)',
    avatarBorder: 'rgba(180,180,180,0.4)',
    avatarColor: '#c8c8c8',
    glowColor: 'rgba(180,180,180,0.06)',
    borderHover: 'rgba(180,180,180,0.3)',
  },
];

function TeamCard({ member }: { member: (typeof TEAM)[0] }) {
  const [imgOk, setImgOk] = useState(true);
  const showImage = Boolean(member.image) && imgOk;

  return (
    <div className="feature-card team-card" style={{ position: 'relative' }}>
      {/* Character photo as card background */}
      {showImage && (
        <img
          src={member.image}
          alt=""
          aria-hidden="true"
          onError={() => setImgOk(false)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Legibility overlay: solid paper on the text side, photo visible on the right */}
      {showImage && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(100deg, var(--paper) 22%, rgba(255,255,255,0.88) 46%, rgba(255,255,255,0.25) 72%, rgba(255,255,255,0.05))',
            pointerEvents: 'none',
          }}
        />
      )}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '3px',
          background: member.avatarColor,
          opacity: 0.55,
        }}
      />
      <div style={{ position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '22px',
          }}
        >
          {/* Avatar */}
          <div
            className="team-avatar"
            style={{
              width: '78px',
              height: '78px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              fontWeight: 700,
              background: member.avatarGradient,
              border: `2px solid ${member.avatarBorder}`,
              color: member.avatarColor,
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)',
              transition: 'box-shadow 0.25s var(--ease-std)',
              letterSpacing: '0.02em',
            }}
          >
            {member.initials}
          </div>
          <span
            style={{
              color: member.avatarColor,
              opacity: 0.65,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
            }}
          >
            {String(TEAM.indexOf(member) + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Name */}
        <h3
          className="feature-title"
          style={{ fontSize: '1.2rem', marginBottom: '8px' }}
        >
          {member.name}
        </h3>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'var(--line)',
            marginBottom: '14px',
          }}
        />

        {/* Bio */}
        <p className="feature-desc" style={{ opacity: 0.72 }}>
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="w-full py-24"
      style={{ background: 'var(--void)', borderTop: '1px solid var(--line)' }}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
              TEAM
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
              Built by people who ran ops
            </h2>
          </div>
          <p
            className="section-subheading"
            style={{
              maxWidth: '280px',
              fontSize: '0.875rem',
              color: 'var(--mist)',
              opacity: 0.75,
              lineHeight: 1.6,
            }}
          >
            We&rsquo;ve been on the floor. We know what breaks at 3am.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TEAM.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
