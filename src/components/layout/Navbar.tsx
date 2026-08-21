'use client';
import { useEffect, useState, type MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type NavLink = {
  href: string;
  label: string;
  icon: keyof typeof ICONS;
  section?: string;
  labelOnActiveOnly?: boolean;
};

const ICONS = {
  home: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  howitworks: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <circle cx="3.5" cy="6" r="1.2" />
      <circle cx="3.5" cy="12" r="1.2" />
      <circle cx="3.5" cy="18" r="1.2" />
    </svg>
  ),
  product: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  solutions: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  ),
  about: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  ),
  pricing: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 12 12 3.5A2 2 0 0 0 10.6 3H4v6.6A2 2 0 0 0 3.5 12l8.5 8.5a2 2 0 0 0 2.8 0l6.2-6.2a2 2 0 0 0 0-2.8Z" />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </svg>
  ),
  team: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6" />
      <path d="M17 20a6 6 0 0 0-3-5.2" />
    </svg>
  ),
  testimonials: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a8 8 0 0 1-11 7.3L4 21l1.7-6A8 8 0 1 1 21 12Z" />
    </svg>
  ),
  faq: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 9.5a2.8 2.8 0 0 1 5.4 1c0 1.9-2.8 2.5-2.8 2.5" />
      <path d="M12 17h.01" />
    </svg>
  ),
  contact: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  demo: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 4v16l13-8z" />
    </svg>
  ),
};

const NAV_LINKS: NavLink[] = [
  {
    href: '/',
    label: 'Home',
    icon: 'home',
    section: 'home',
    labelOnActiveOnly: true,
  },
  {
    href: '/#how-it-works',
    label: 'How it works',
    icon: 'howitworks',
    section: 'how-it-works',
  },
  { href: '/#product', label: 'Product', icon: 'product', section: 'product' },
  {
    href: '/#solutions',
    label: 'Solutions',
    icon: 'solutions',
    section: 'solutions',
  },
  { href: '/#about', label: 'About', icon: 'about', section: 'about' },
  { href: '/#pricing', label: 'Pricing', icon: 'pricing', section: 'pricing' },
  { href: '/#faq', label: 'FAQ', icon: 'faq', section: 'faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, []);

  useEffect(() => {
    setActiveSection(null);
    const ids = NAV_LINKS.map((l) => l.section).filter(Boolean) as string[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    const raf = requestAnimationFrame(() => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const idx = href.indexOf("#");
    if (idx !== -1) {
      const id = href.slice(idx + 1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 flex justify-center"
      style={{
        padding: '12px 0 0',
        transition: 'padding 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <style>{`
        .nav-item .nav-label {
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          white-space: nowrap;
          transition: max-width 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease;
        }
        .nav-item:hover .nav-label,
        .nav-item.active .nav-label {
          max-width: 140px;
          opacity: 1;
          margin-left: 8px;
        }
        .nav-item.home-item .nav-label {
          max-width: 140px;
          opacity: 1;
          margin-left: 8px;
        }
        .nav-item svg {
          width: 22px;
          height: 22px;
          transition: width 0.3s cubic-bezier(0.4,0,0.2,1), height 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-item:hover svg,
        .nav-item.active svg {
          width: 18px;
          height: 18px;
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-item .nav-label,
          .nav-item svg { transition: none; }
        }
        .navbar-shell {
          width: min(75%, 1200px) !important;
          max-width: 1200px !important;
        }
        @media (max-width: 767px) {
          .navbar-shell {
            width: calc(100% - 16px) !important;
          }
        }
      `}</style>

      <header
        className="navbar-shell"
        style={{
          width: 'min(75%, 1200px)',
          maxWidth: '1200px',
          background: scrolled
            ? 'rgba(255,255,255,0.96)'
            : 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderRadius: '20px',
          border: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          boxShadow: scrolled
            ? '0 8px 24px rgba(15,15,15,0.08)'
            : '0 4px 12px rgba(15,15,15,0.05)',
          transition:
            'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '76px',
            padding: '0 20px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <Image
              src="/Zekvian%20Z.jpeg"
              alt="ZEKVIAN"
              width={scrolled ? 30 : 38}
              height={scrolled ? 30 : 38}
              style={{
                borderRadius: '8px',
                objectFit: 'cover',
                transition:
                  'width 0.4s cubic-bezier(0.4,0,0.2,1), height 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: scrolled ? '0.9rem' : '1.5rem',
                color: 'var(--mist)',
                letterSpacing: '-0.02em',
                transition: 'font-size 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              ZEKVIAN
            </span>
          </Link>

          <div
            className="hidden lg:flex"
            style={{
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              {NAV_LINKS.map(({ href, label, icon, section }) => {
                const active = section
                  ? activeSection === section
                  : pathname === href;
                const isHomeItem = section === 'home';
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`nav-item${active ? 'active' : ''}${isHomeItem && active ? 'home-item' : ''}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '8px 10px',
                      borderRadius: '10px',
                      color: 'var(--mist)',
                      fontWeight: 600,
                      opacity: active ? 1 : 0.6,
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'opacity 0.12s',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = '1')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = active
                        ? '1'
                        : '0.6')
                    }
                  >
                    {ICONS[icon]}
                    <span className="nav-label" style={{ fontSize: '0.95rem' }}>
                      {label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop CTAs */}
          <div
            className="hidden lg:flex"
            style={{
              alignItems: 'center',
              gap: '8px',
              flexShrink: 0,
            }}
          >
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: scrolled ? '6px 12px' : '8px 16px',
                borderRadius: '8px',
                fontSize: scrolled ? '0.8rem' : '0.875rem',
                color: 'var(--mist)',
                opacity: 0.65,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition:
                  'padding 0.4s cubic-bezier(0.4,0,0.2,1), font-size 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = '1')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = '0.65')
              }
            >
              {ICONS.contact}
              Contact
            </Link>
            <Link
              href="/demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: scrolled ? '6px 14px' : '8px 18px',
                borderRadius: '999px',
                fontSize: scrolled ? '0.8rem' : '0.875rem',
                fontWeight: 600,
                background: 'var(--pulse)',
                color: '#ffffff',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition:
                  'padding 0.4s cubic-bezier(0.4,0,0.2,1), font-size 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              {ICONS.demo}
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              border: '1px solid var(--line)',
              borderRadius: '12px',
              background: 'var(--paper)',
              cursor: 'pointer',
              padding: 0,
              flexShrink: 0,
            }}
            className="flex lg:hidden"
          >
            <span
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                width: '18px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  height: '2px',
                  width: '100%',
                  background: 'var(--mist)',
                  borderRadius: '999px',
                  transform: menuOpen
                    ? 'rotate(45deg) translate(4px, 4px)'
                    : 'none',
                  transition: 'transform 0.2s ease',
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: '2px',
                  width: '100%',
                  background: 'var(--mist)',
                  borderRadius: '999px',
                  opacity: menuOpen ? 0 : 1,
                  transition: 'opacity 0.2s ease',
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: '2px',
                  width: '100%',
                  background: 'var(--mist)',
                  borderRadius: '999px',
                  transform: menuOpen
                    ? 'rotate(-45deg) translate(4px, -4px)'
                    : 'none',
                  transition: 'transform 0.2s ease',
                }}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav
            className="flex flex-col lg:hidden"
            style={{
              gap: '8px',
              padding: '0 20px 18px',
              borderTop: '1px solid var(--line)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                width: 'fit-content',
                margin: '12px 0 4px',
                padding: '7px 10px',
                borderRadius: '999px',
                border: '1px solid #c7d2fe',
                background: 'var(--badge-bg)',
                color: 'var(--pulse)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--pulse)',
                  boxShadow: '0 0 12px rgba(79,70,229,0.35)',
                  display: 'inline-block',
                }}
              />
              Live Ops
            </div>
            {NAV_LINKS.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => {
                  handleNavClick(e, href);
                  setMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: 'var(--mist)',
                  opacity: 0.85,
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  padding: '10px 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {ICONS[icon]}
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--mist)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                padding: '10px 0 0',
              }}
            >
              Contact Sales
            </Link>
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop: '8px',
                padding: '12px 16px',
                borderRadius: '999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                background: 'var(--pulse)',
                color: 'var(--void)',
                textDecoration: 'none',
              }}
            >
              Request Demo
            </Link>
          </nav>
        )}
      </header>
    </div>
  );
}
