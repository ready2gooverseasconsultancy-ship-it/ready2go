import React, { useState, useEffect, useCallback } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { studyDestinationTabs, studyDestinations } from '../data/studyDestinations';
import { Button } from './ui/Button';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Study Destinations', href: '/study-destinations', hasDropdown: true },
  { name: 'Process', href: '/process' },
  { name: 'Updates', href: '/updates' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Referral', href: '/referral' },
  { name: 'Contact', href: '/contact' },
] as const;

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isStudyOpen, setIsStudyOpen] = useState(false);
  const [isMobileStudyOpen, setIsMobileStudyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsStudyOpen(false);
    setIsMobileStudyOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile study submenu when parent closes
  useEffect(() => {
    if (!isMobileOpen) setIsMobileStudyOpen(false);
  }, [isMobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === '/study-destinations')
        return location.pathname.startsWith('/study-destinations') || location.pathname.startsWith('/country/');
      return location.pathname === href;
    },
    [location.pathname],
  );

  /* ---------- Desktop link ---------- */
  const DesktopLink = ({ href, name, hasDropdown }: { href: string; name: string; hasDropdown?: boolean }) => {
    if (href === '/study-destinations') {
      return (
        <div
          className="relative"
          onMouseEnter={() => setIsStudyOpen(true)}
          onMouseLeave={() => setIsStudyOpen(false)}
        >
          <Link
            to={href}
            className={`inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-200 ${
              isActive(href)
                ? 'bg-brand-blue text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-brand-blue'
            }`}
            aria-expanded={isStudyOpen}
          >
            {name}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isStudyOpen ? 'rotate-180' : ''}`} />
          </Link>

          <AnimatePresence>
            {isStudyOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute left-0 top-full mt-3 w-[360px] rounded-2xl border border-slate-200 bg-white p-4 shadow-card"
              >
                <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Study Destinations
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {studyDestinationTabs.map((tab) => {
                    const country = studyDestinations[tab.key];
                    return (
                      <Link
                        key={tab.key}
                        to={`/country/${country.slug}`}
                        className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-brand-blue-50 hover:text-brand-blue"
                      >
                        {tab.label}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        to={href}
        className={`rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-200 ${
          isActive(href)
            ? 'bg-brand-blue text-white shadow-md'
            : 'text-slate-600 hover:bg-slate-100 hover:text-brand-blue'
        }`}
      >
        {name}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/60'
            : 'bg-white/90 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-[88px] flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-3 min-w-0">
            <Logo
              className="bg-white rounded-2xl p-1.5 shadow-sm border border-slate-200"
              imageClassName="h-10"
            />
            <span className="hidden md:block text-[13px] font-bold text-brand-blue tracking-wide leading-tight max-w-[180px] lg:max-w-none">
              Ready2Go Overseas
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 px-2 py-2 shadow-sm">
            {NAV_LINKS.map((link) => (
              <DesktopLink key={link.href} {...link} />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href="tel:+917702558704"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+91 77025 58704</span>
            </a>
            <Button to="/contact" variant="primary" size="sm">
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden inline-flex items-center justify-center h-11 w-11 bg-brand-orange text-white rounded-full hover:bg-brand-blue transition-all active:scale-90"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-5 gap-2">
                {NAV_LINKS.map((link) =>
                  link.href === '/study-destinations' ? (
                    <div key={link.href} className="rounded-xl border border-slate-200 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setIsMobileStudyOpen((o) => !o)}
                        className={`flex w-full items-center justify-between px-4 py-3.5 text-sm font-bold transition-all ${
                          isActive(link.href)
                            ? 'bg-brand-blue text-white'
                            : 'text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue'
                        }`}
                        aria-expanded={isMobileStudyOpen}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isMobileStudyOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isMobileStudyOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-slate-50 px-4 py-3 space-y-1"
                          >
                            <Link
                              to="/study-destinations"
                              className="block rounded-xl bg-brand-blue/10 px-3 py-2.5 text-sm font-semibold text-brand-blue"
                            >
                              View All Destinations
                            </Link>
                            <div className="grid grid-cols-2 gap-1.5">
                              {studyDestinationTabs.map((tab) => {
                                const c = studyDestinations[tab.key];
                                return (
                                  <Link
                                    key={tab.key}
                                    to={`/country/${c.slug}`}
                                    className="rounded-xl bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-brand-blue"
                                  >
                                    {tab.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`rounded-xl px-4 py-3.5 text-sm font-bold transition-all ${
                        isActive(link.href)
                          ? 'bg-brand-blue text-white'
                          : 'text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ),
                )}

                <hr className="my-2 border-slate-100" />
                <a
                  href="tel:+917702558704"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue transition-all"
                >
                  <Phone className="w-4 h-4" />
                  +91 77025 58704
                </a>
                <Button to="/contact" variant="secondary" className="w-full justify-center mt-1">
                  Book Free Consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
