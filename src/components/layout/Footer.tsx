import Link from 'next/link';
import Image from 'next/image';

const COLS = [
  {
    heading: 'Product',
    links: [
      { href: '/product', label: 'Features' },
      { href: '/solutions', label: 'Solutions' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/architecture', label: 'Architecture' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/customers', label: 'Customers' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: '/legal/privacy', label: 'Privacy Policy' },
      { href: '/legal/data-usage', label: 'Data Usage Policy' },
      { href: '/legal/terms', label: 'Terms of Service' },
      { href: '/security', label: 'Security' },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{ background: 'var(--void)', borderTop: '1px solid var(--line)' }}
    >
      <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                marginBottom: '16px',
              }}
            >
              <Image
                src="/Zekvian%20Z.jpeg"
                alt="ZEKVIAN"
                width={34}
                height={34}
                style={{ borderRadius: '8px', objectFit: 'cover' }}
              />
              <span
                className="font-display text-lg"
                style={{ color: 'var(--mist)' }}
              >
                ZEKVIAN
              </span>
            </Link>
            <p
              className="max-w-xs text-sm"
              style={{ color: 'var(--mist)', opacity: 0.72, lineHeight: 1.6 }}
            >
              Manage many shops, one tenant, smart order routing. The B2B SaaS
              platform for multi-tenant retail.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.heading}>
              <h3
                className="mb-5 font-mono text-xs"
                style={{
                  color: 'var(--mist)',
                  opacity: 0.7,
                  letterSpacing: '0.08em',
                }}
              >
                {col.heading.toUpperCase()}
              </h3>
              <ul className="space-y-3">
                {col.links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm"
                      style={{ color: 'var(--mist)', opacity: 0.78 }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-14 flex flex-col items-center justify-between gap-4 pt-8 md:flex-row"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          <p
            className="font-mono text-xs"
            style={{ color: 'var(--mist)', opacity: 0.6 }}
          >
            © {new Date().getFullYear()} Zekvian Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
