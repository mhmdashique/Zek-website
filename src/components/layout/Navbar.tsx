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
  const onScroll = () => setScrolled(window.scrollY > 24);
  onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
  if (window.innerWidth >= 1024) setMenuOpen(false);
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
    setActiveSection(null);
    const ids = NAV_LINKS.map((l) => l.section).filter(Boolean) as string[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
  { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
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
    <div
  className={[
  'fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
  scrolled ? 'px-3 pt-3 sm:px-5 sm:pt-4' : 'px-0 pt-0',
  ].join(' ')}
      >
        <div
  className={[
  'transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
  scrolled ? 'w-[75%] max-w-none' : 'w-full max-w-none',
  ].join(' ')}
        >
  <header
  className={[
  'relative flex items-center justify-between gap-3 border pl-3 pr-2 sm:pl-4 sm:pr-2.5',
  'transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
  scrolled
  ? 'rounded-2xl border-black/[0.08] bg-white/25 shadow-[0_12px_40px_-12px_rgba(15,15,20,0.25),0_2px_8px_rgba(15,15,20,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl'
  : 'rounded-none border-x-0 border-t-0 border-black/[0.06] bg-white/25 shadow-[0_8px_30px_-12px_rgba(15,15,20,0.18),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl',
  ].join(' ')}
  style={{ height: scrolled ? '3.625rem' : '4.5rem' }}
          >
  {/* top highlight + scroll progress */}
  <span
  aria-hidden
  className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#4169E1]/50 to-transparent"
  />
  <motion.span
  aria-hidden
  style={{ scaleX: progress }}
  className="absolute inset-x-5 bottom-[-1px] h-[2px] origin-left rounded-full bg-gradient-to-r from-[#4169E1] via-[#4169E1] to-[#2F4AC8] opacity-80"
  />

  {/* Brand */}
  <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="group flex shrink-0 items-center gap-2.5 outline-none">
  <span className="relative block">
            <Image
              src="/Zekvian%20Z.jpeg"
              alt="ZEKVIAN"
  width={36}
  height={36}
  priority
  className="h-9 w-9 rounded-[11px] object-cover shadow-[0_4px_14px_rgba(65,105,225,0.35)] ring-1 ring-black/10 transition-transform duration-300 group-hover:scale-[1.04] group-hover:rotate-[-2deg]"
            />
  <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-white ring-1 ring-black/10">
  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
  </span>
  </span>
  <span className="leading-none">
  <span className="block text-[1.0625rem] font-extrabold tracking-[-0.03em] text-neutral-950">
              ZEKVIAN
  </span>
            </span>
          </Link>

  {/* Desktop nav, floating pill */}
  <nav
  aria-label="Primary"
  className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
          >
  <div className="flex max-w-full items-center gap-0.5 rounded-full border border-black/[0.06] bg-neutral-950/[0.045] p-1 backdrop-blur-sm">
  {NAV_LINKS.map(({ href, label, section }) => {
  const active = section ? activeSection === section : pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
  className={[
  'relative shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-[0.8125rem] font-bold transition-colors duration-200 outline-none',
  active ? 'text-neutral-950' : 'text-neutral-500 hover:text-neutral-950',
  ].join(' ')}
                  >
  {active && (
  <motion.span
  layoutId="zek-nav-pill"
  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
  className="absolute inset-0 rounded-full border border-black/[0.06] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
  />
  )}
  <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                      {label}
  {active && <span className="h-1 w-1 shrink-0 rounded-full bg-[#4169E1]" />}
                    </span>
                  </Link>
                );
              })}
  </div>
            </nav>

          {/* Desktop CTAs */}
  <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Link
              href="/demo"
  className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-[#4169E1] py-2 pl-4 pr-3 text-[0.8125rem] font-bold text-white shadow-[0_8px_20px_-8px_rgba(65,105,225,0.8)] transition-all duration-300 hover:bg-[#3558E8] hover:shadow-[0_10px_28px_-8px_rgba(65,105,225,0.9)]"
            >
  <span
  aria-hidden
  className="absolute inset-0 bg-gradient-to-b from-[#4169E1]/0 via-[#4169E1]/20 to-[#2F4AC8]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  />
  <span className="relative">Request demo</span>
  <span className="relative grid h-5 w-5 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
  <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
  </span>
            </Link>
          </div>

  {/* Mobile toggle */}
          <button
            type="button"
  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen((v) => !v)}
  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-black/[0.08] bg-white text-neutral-900 shadow-sm transition active:scale-95 lg:hidden"
          >
  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
  </button>
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
  className="fixed inset-0 -z-10 bg-neutral-950/20 backdrop-blur-sm lg:hidden"
  />
  <motion.nav
  initial={{ opacity: 0, y: -10, scale: 0.98, filter: 'blur(6px)' }}
  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
  exit={{ opacity: 0, y: -8, scale: 0.98, filter: 'blur(6px)' }}
  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
  aria-label="Mobile"
  className={[
  'overflow-hidden rounded-2xl border border-black/[0.08] bg-white/95 p-2 shadow-[0_24px_60px_-16px_rgba(15,15,20,0.35)] backdrop-blur-2xl lg:hidden',
  scrolled ? 'mt-2' : 'mx-3 mt-2',
  ].join(' ')}
            >
  <div className="p-1.5">
  {NAV_LINKS.map(({ href, label, section }, i) => {
  const active = section ? activeSection === section : pathname === href;
  return (
  <motion.div
  key={href}
  initial={{ opacity: 0, x: -8 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.04 + i * 0.035 }}
          >
  <Link
  href={href}
  onClick={(e) => handleNavClick(e, href)}
  className={[
  'group flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-bold transition',
  active
  ? 'bg-neutral-950/[0.05] text-neutral-950'
  : 'text-neutral-600 hover:bg-neutral-950/[0.04] hover:text-neutral-950',
  ].join(' ')}
            >
  <span className="flex items-center gap-2.5">
              <span
  className={[
  'h-1.5 w-1.5 rounded-full transition',
  active ? 'bg-[#4169E1]' : 'bg-neutral-300 group-hover:bg-neutral-400',
  ].join(' ')}
              />
  {label}
  </span>
  <ArrowUpRight className="h-4 w-4 text-neutral-300 transition group-hover:translate-x-0.5 group-hover:text-neutral-600" />
  </Link>
  </motion.div>
  );
  })}
            </div>

  <div className="grid gap-2 border-t border-black/[0.06] p-2">
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4169E1] px-4 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(65,105,225,0.7)] transition hover:bg-[#3558E8] active:scale-[0.99]"
            >
  Request demo
  <ArrowRight className="h-4 w-4" />
            </Link>
  <p className="pb-1 text-center text-[12px] font-medium text-neutral-400">
  No credit card · 14-day pilot · Cancel anytime
  </p>
  </div>
  </motion.nav>
  </>
        )}
  </AnimatePresence>
  </div>
    </div>
  );
}
