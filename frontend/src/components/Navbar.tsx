import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { studyDestinationTabs, studyDestinations } from '../data/studyDestinations';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStudyMenuOpen, setIsStudyMenuOpen] = useState(false);
  const [isMobileStudyMenuOpen, setIsMobileStudyMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsStudyMenuOpen(false);
    setIsMobileStudyMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Study Destinations', href: '/study-destinations' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Updates', href: '/updates' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Referral', href: '/referral' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/study-destinations') {
      return location.pathname.startsWith('/study-destinations') || location.pathname.startsWith('/country/');
    }
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`border-b border-slate-200/80 transition-all duration-300 ${
          isScrolled ? 'bg-white/98 shadow-lg backdrop-blur-xl' : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-[88px] flex items-center justify-between gap-4">
          <Link to="/" className="shrink-0 flex items-center gap-3 min-w-0">
            <Logo className="bg-white rounded-2xl p-1.5 shadow-sm border border-slate-200" imageClassName="h-10" />
            <span className="hidden md:block text-[13px] font-bold text-brand-blue tracking-wide leading-tight max-w-[180px] lg:max-w-none">
              Ready2Go Overseas Consultancy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-2 py-2 shadow-sm">
            {navLinks.map((link) => {
              if (link.href === '/study-destinations') {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsStudyMenuOpen(true)}
                    onMouseLeave={() => setIsStudyMenuOpen(false)}
                  >
                    <Link
                      to={link.href}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-all ${
                        isActiveLink(link.href)
                          ? 'bg-brand-blue text-white shadow-md'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-brand-blue'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </Link>

                    <AnimatePresence>
                      {isStudyMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 top-full mt-3 w-[340px] rounded-[1.5rem] border border-slate-100 bg-white p-3 shadow-2xl"
                        >
                          <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                            Study Destinations
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {studyDestinationTabs.map((tab) => {
                              const country = studyDestinations[tab.key];
                              return (
                                <Link
                                  key={tab.key}
                                  to={`/country/${country.slug}`}
                                  className="rounded-2xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-brand-blue/10 hover:text-brand-blue"
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
                  key={link.name}
                  to={link.href}
                  className={`rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-all ${
                    isActiveLink(link.href)
                      ? 'bg-brand-blue text-white shadow-md'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-brand-blue'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Link to="/contact" className="inline-flex">
              <button className="bg-brand-orange text-white px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-brand-blue transition-all hover:shadow-xl active:scale-95 whitespace-nowrap">
                Book Free Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden inline-flex items-center justify-center h-11 w-11 text-white bg-brand-orange rounded-full hover:bg-brand-blue transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-5 gap-3">
                {navLinks.map((link) => (
                  link.href === '/study-destinations' ? (
                    <div key={link.name} className="rounded-xl border border-slate-200 overflow-hidden">
                      <button
                        type="button"
                        className={`flex items-center justify-between text-base font-semibold px-3 py-3 transition-all w-full ${
                          isActiveLink(link.href)
                            ? 'bg-brand-blue text-white'
                            : 'text-slate-700 hover:text-brand-blue hover:bg-brand-blue/10'
                        }`}
                        onClick={() => setIsMobileStudyMenuOpen((open) => !open)}
                        aria-expanded={isMobileStudyMenuOpen}
                        aria-controls="mobile-study-destinations-submenu"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMobileStudyMenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileStudyMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            id="mobile-study-destinations-submenu"
                            className="bg-slate-50 px-3 py-3"
                          >
                            <Link
                              to="/study-destinations"
                              className="mb-2 block rounded-xl bg-brand-blue/10 px-3 py-2 text-sm font-semibold text-brand-blue"
                            >
                              View All Study Destinations
                            </Link>
                            <div className="grid grid-cols-2 gap-2">
                              {studyDestinationTabs.map((tab) => {
                                const country = studyDestinations[tab.key];
                                return (
                                  <Link
                                    key={tab.key}
                                    to={`/country/${country.slug}`}
                                    className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-blue"
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
                      key={link.name}
                      to={link.href}
                      className={`text-base font-semibold px-3 py-3 rounded-xl transition-all ${
                        isActiveLink(link.href)
                          ? 'bg-brand-blue text-white'
                          : 'text-slate-700 hover:text-brand-blue hover:bg-brand-blue/10'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <Link to="/contact" className="pt-1">
                  <button className="bg-brand-orange text-white px-6 py-3 rounded-xl text-sm font-semibold w-full hover:bg-brand-blue transition-all">
                    Book Free Consultation
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
