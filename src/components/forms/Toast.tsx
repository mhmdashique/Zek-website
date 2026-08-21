'use client';

import { useEffect } from 'react';

export type ToastState = { type: 'success' | 'error'; message: string } | null;

export function Toast({
  state,
  onClose,
}: {
  state: { type: 'success' | 'error'; message: string };
  onClose: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  const isSuccess = state.type === 'success';

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        maxWidth: '360px',
        padding: '12px 16px',
        borderRadius: '12px',
        background: isSuccess ? 'var(--badge-bg)' : 'rgba(239,68,68,0.12)',
        border: `1px solid ${isSuccess ? 'var(--pulse)' : 'var(--ember)'}`,
        color: isSuccess ? 'var(--pulse)' : 'var(--ember)',
        fontSize: '0.875rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
      }}
    >
      <span aria-hidden="true" style={{ fontWeight: 700 }}>
        {isSuccess ? '✓' : '!'}
      </span>
      <span style={{ color: 'var(--mist)' }}>{state.message}</span>
    </div>
  );
}
