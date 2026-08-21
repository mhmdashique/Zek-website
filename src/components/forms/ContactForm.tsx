'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Toast, type ToastState } from './Toast';
import { SubmitSuccess } from './SubmitSuccess';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(7, 'Phone number is required'),
  message: z.string().min(1, 'Message is required'),
});

type FormData = z.infer<typeof schema>;

const inputStyle = {
  width: '100%',
  background: 'var(--paper)',
  border: '1px solid var(--line)',
  borderRadius: '10px',
  padding: '10px 14px',
  fontSize: '0.9375rem',
  color: 'var(--mist)',
  outline: 'none',
  transition: 'border-color 0.15s var(--ease-std)',
} as React.CSSProperties;

const labelStyle = {
  display: 'block',
  fontSize: '0.8125rem',
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.04em',
  color: 'var(--mist)',
  opacity: 0.7,
  marginBottom: '6px',
} as React.CSSProperties;

const errorStyle = {
  fontSize: '0.75rem',
  color: 'var(--ember)',
  marginTop: '4px',
} as React.CSSProperties;

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const [toast, setToast] = useState<ToastState>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setToast({ type: 'success', message: 'Message sent successfully!' });
    } catch {
      setError('root', { message: 'Something went wrong. Please try again.' });
      setToast({
        type: 'error',
        message: 'Failed to send. Please try again.',
      });
    }
  };

  if (isSubmitSuccessful) {
    return (
      <SubmitSuccess
        title="Message received"
        message="Thanks for reaching out — we'll get back to you within 1 business day. A confirmation email is on its way."
        emailNote="Prefer email? official.zekvian@gmail.com"
      />
    );
  }

  return (
    <>
      {toast && <Toast state={toast} onClose={() => setToast(null)} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {errors.root && (
          <p style={{ color: 'var(--ember)', fontSize: '0.875rem' }}>
            {errors.root.message}
          </p>
        )}
        <Field label="FULL NAME *" error={errors.name?.message}>
          <input
            {...register('name')}
            placeholder="Jane Smith"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--pulse)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
          />
        </Field>

        <Field label="EMAIL *" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            placeholder="jane@company.com"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--pulse)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
          />
        </Field>

        <Field label="PHONE NUMBER *" error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+1 555 000 0000"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--pulse)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
          />
        </Field>

        <Field label="MESSAGE *" error={errors.message?.message}>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Tell us how we can help..."
            style={{ ...inputStyle, resize: 'none' }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--pulse)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
          />
        </Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg py-3 text-sm font-medium"
          style={{
            background: isSubmitting ? '#a5b4fc' : 'var(--pulse)',
            color: '#ffffff',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'background 0.15s var(--ease-std)',
          }}
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>

        <p
          className="text-center"
          style={{ fontSize: '0.75rem', color: 'var(--mist)', opacity: 0.35 }}
        >
          By submitting you agree to our{' '}
          <a
            href="/legal/privacy"
            style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}
          >
            Privacy Policy
          </a>
          . No spam, ever.
        </p>
      </form>
    </>
  );
}
