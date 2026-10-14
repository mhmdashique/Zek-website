'use client';

import Link from 'next/link';

export function SubmitSuccess({
  title,
  message,
  emailNote,
  status = 'success',
  backHref = '/',
  backLabel = 'Back to home',
}: {
  title: string;
  message: string;
  emailNote?: string;
  status?: 'success' | 'error';
  backHref?: string;
  backLabel?: string;
}) {
  const isError = status === 'error';
  const chipColor = isError ? 'var(--ember)' : '#22c55e';
  const chipBg = isError ? 'rgba(239,68,68,0.12)' : 'rgba(34,197,94,0.12)';

  return (
    <div
      className="py-10 text-center"
      style={{
        borderRadius: '16px',
        border: '1px solid var(--line)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
        padding: '32px 24px',
      }}
    >
      <div
        className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{
          background: 'var(--badge-bg)',
          border: '1px solid var(--pulse)',
          boxShadow: '0 0 0 6px rgba(65,105,225,0.08)',
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--pulse)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3
        className="font-display mb-2 text-2xl"
        style={{ color: 'var(--mist)' }}
      >
        {title}
      </h3>
      <p
        className="mx-auto max-w-sm text-sm"
        style={{ color: 'var(--mist)', opacity: 0.6, lineHeight: 1.6 }}
      >
        {message}
      </p>
      {emailNote && (
        <div
          className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-2 rounded-xl px-4 py-3"
          style={{
            background: chipBg,
            border: `1px solid ${chipColor}`,
          }}
        >
          {isError ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={chipColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={chipColor}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          )}
          <span className="text-sm font-mono" style={{ color: chipColor }}>
            {emailNote}
          </span>
        </div>
      )}

      <Link
        href={backHref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
          padding: '10px 20px',
          borderRadius: '999px',
          fontSize: '0.875rem',
          fontWeight: 600,
          background: 'var(--pulse)',
          color: '#ffffff',
          textDecoration: 'none',
          transition: 'opacity 0.15s ease',
        }}
      >
        {backLabel}
      </Link>
    </div>
  );
}
