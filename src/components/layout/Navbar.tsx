'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Menu, X } from 'lucide-react';

type NavLink = { href: string; label: string; section?: string };

const NAV_LINKS: NavLink[] = [
  { href: '/#how-it-works', label: 'How it works', section: 'how-it-works' },
  { href: '/#product', label: 'Product', section: 'product' },
  { href: '/#solutions', label: 'Solutions', section: 'solutions' },
  { href: '/#about', label: 'About', section: 'about' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ', section: 'faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.section).filter(Boolean) as string[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    const raf = requestAnimationFrame(() => {
      setActiveSection(null);
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
    if (href === '/' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const idx = href.indexOf('#');
    if (idx !== -1) {
      const id = href.slice(idx + 1);
      // If we're not on home, let Next.js navigate first
      if (pathname !== '/') return;
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top, behavior: 'smooth' });
        setMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
        <div
          className={[
            'relative transition-[width,margin,background-color,box-shadow,border-radius] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
            scrolled
              ? 'mt-3 w-[calc(100%-1.5rem)] max-w-[80rem] rounded-2xl border border-black/[0.07] bg-white/50 shadow-[0_12px_40px_-16px_rgba(15,15,20,0.18)] backdrop-blur-xl sm:w-[90%] xl:w-[70%]'
              : 'mt-0 w-full rounded-none border border-transparent bg-transparent',
          ].join(' ')}
        >
          <div
            className={[
              'mx-auto flex w-full items-center justify-between gap-4 transition-[height,max-width,padding] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
              scrolled
                ? 'h-[3.6875rem] max-w-[80rem] px-4'
                : 'h-[4.5rem] max-w-none px-5 sm:px-8',
            ].join(' ')}
          >
          {/* Brand */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="group flex shrink-0 items-center gap-2.5 outline-none"
          >
            <Image
              src="/Zekvian%20Z.jpeg"
              alt="ZEKVIAN"
              width={32}
              height={32}
              priority
              className="h-8 w-8 rounded-[9px] object-cover ring-1 ring-black/[0.06] transition-transform duration-300 group-hover:scale-[1.04]"
            />
            <span className="font-sans text-[1.0625rem] font-semibold tracking-[-0.02em] text-neutral-950">
              ZEKVIAN
            </span>
          </Link>

          {/* Desktop nav — borderless, underline active state */}
          <nav
            aria-label="Primary"
            className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
          >
            <div className="flex items-center gap-7">
              {NAV_LINKS.map(({ href, label, section }) => {
                const active = section ? activeSection === section : pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      'group relative shrink-0 whitespace-nowrap py-1 font-sans text-[0.8125rem] font-medium tracking-[-0.005em] outline-none transition-colors duration-200',
                      active ? 'text-neutral-950' : 'text-neutral-500 hover:text-neutral-950',
                    ].join(' ')}
                  >
                    {label}
                    <span
                      aria-hidden
                      className={[
                        'absolute inset-x-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-300 ease-out',
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      ].join(' ')}
                    />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-1.5">
            <Link
              href="/demo"
              className="group hidden items-center gap-1.5 rounded-full bg-[#4169E1] py-2 pl-4 pr-2.5 font-sans text-[0.8125rem] font-medium text-white transition-colors duration-200 hover:bg-[#3558E8] lg:inline-flex"
            >
              Request demo
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3" strokeWidth={2.25} />
              </span>
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-lg text-neutral-900 outline-none transition-colors duration-200 hover:bg-neutral-950/[0.05] active:scale-95 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

          {/* Scroll progress hairline */}
          <motion.span
            aria-hidden
            style={{ scaleX: progress }}
            className={[
              'absolute inset-x-3 bottom-0 h-px origin-left rounded-full bg-[#4169E1]/70 transition-opacity duration-300',
              scrolled ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
          />
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-neutral-950/20 backdrop-blur-sm lg:hidden"
            />
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              aria-label="Mobile"
              className="fixed inset-x-4 top-[4.75rem] z-50 overflow-hidden rounded-2xl border border-black/[0.07] bg-white/95 p-2 shadow-[0_24px_60px_-20px_rgba(15,15,20,0.3)] backdrop-blur-2xl lg:hidden"
            >
              <div className="p-1">
                {NAV_LINKS.map(({ href, label, section }, i) => {
                  const active = section ? activeSection === section : pathname === href;
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 + i * 0.03 }}
                    >
                      <Link
                        href={href}
                        onClick={(e) => handleNavClick(e, href)}
                        className={[
                          'group flex items-center justify-between rounded-lg px-3 py-2.5 font-sans text-[15px] font-medium transition-colors',
                          active
                            ? 'text-neutral-950'
                            : 'text-neutral-500 hover:text-neutral-950',
                        ].join(' ')}
                      >
                        {label}
                        <ArrowUpRight className="h-4 w-4 text-neutral-300 transition group-hover:translate-x-0.5 group-hover:text-neutral-600" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-1 border-t border-black/[0.06] p-2">
                <Link
                  href="/demo"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4169E1] px-4 py-3 font-sans text-[15px] font-medium text-white transition-colors hover:bg-[#3558E8]"
                >
                  Request demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="pb-1 pt-2.5 text-center font-sans text-[12px] font-medium text-neutral-400">
                  No credit card · 14-day pilot · Cancel anytime
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
