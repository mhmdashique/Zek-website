import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ZEKVIAN | Multi-Tenant Order Management & Smart Routing',
  description:
    'Manage many shops, one tenant, smart order routing. The B2B SaaS platform for multi-tenant retail with haversine auto-allocation and N8n automation agents.',
  openGraph: {
    title: 'ZEKVIAN | Multi-Tenant Order Management & Smart Routing',
    description:
      'B2B SaaS for multi-tenant retail with haversine auto-allocation and N8n automation agents.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <body
        className="flex min-h-full flex-col antialiased"
        style={{
          background: 'var(--page-gradient)',
          color: 'var(--mist)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <Navbar />
  <main className="flex-1" style={{ paddingTop: '100px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
