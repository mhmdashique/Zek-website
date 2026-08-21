'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Toast, type ToastState } from './Toast';
import { SubmitSuccess } from './SubmitSuccess';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid work email required'),
  phone: z.string().min(7, 'Phone number is required'),
  company: z.string().min(1, 'Company is required'),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
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

export function DemoRequestForm() {
  const [toast, setToast] = useState<ToastState>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setToast({ type: 'success', message: 'Demo request sent successfully!' });
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
        title="Request received"
        message="Thanks for requesting a demo of ZEKVIAN! Our team will reach out shortly to find a time that works for you."
        emailNote="Confirmation sent to your inbox"
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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="FULL NAME *" error={errors.name?.message}>
          <input
            {...register('name')}
            placeholder="Jane Smith"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--pulse)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
          />
        </Field>
        <Field label="WORK EMAIL *" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            placeholder="jane@company.com"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--pulse)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        <Field label="COMPANY *" error={errors.company?.message}>
          <input
            {...register('company')}
            placeholder="Your company name"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--pulse)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
          />
        </Field>
      </div>

      <Field label="PREFERRED TIME">
          <select
            {...register('preferredTime')}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--pulse)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
          >
            <option value="">No preference</option>
            <option value="Morning (9am–12pm)">Morning (9am–12pm)</option>
            <option value="Afternoon (12pm–4pm)">Afternoon (12pm–4pm)</option>
            <option value="Evening (4pm–7pm)">Evening (4pm–7pm)</option>
          </select>
        </Field>

      <Field label="MESSAGE">
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Tell us about your setup and what you're trying to solve..."
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
        {isSubmitting ? 'Sending…' : 'Request Demo'}
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
