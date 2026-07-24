import React from 'react';
import { Logo } from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com/ready2gooverseas', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/ready2gooverseas', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/ready2gooverseas', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/ready2gooverseas', label: 'LinkedIn' },
];

const GOOGLE_MAPS_URL = 'https://share.google/xT2X5ECKgQw399HcF';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Application Process', href: '/process' },
    { name: 'Latest Updates', href: '/updates' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const visaServices = [
    { name: 'Student Visa', href: '/services' },
    { name: 'Work Visa', href: '/services' },
    { name: 'Tourist Visa', href: '/services' },
    { name: 'Business Visa', href: '/services' },
    { name: 'Family Visa', href: '/services' },
    { name: 'PR & Immigration', href: '/services' },
  ];

  return (
    <footer className="bg-slate-900 pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <Logo className="bg-white rounded-2xl p-1.5 shadow-sm border border-white/10" imageClassName="h-10" />
              <div className="leading-snug">
                <p className="text-lg font-bold text-white">Ready2Go Overseas</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">Consultancy</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
              Ready2Go Overseas is a boutique visa and immigration consultancy focused on personalized guidance, transparent timelines, and compliant documentation.
            </p>
            <div className="flex gap-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-xl mb-10">Quick Links</h4>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 text-sm hover:text-brand-orange transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xl mb-10">Visa Services</h4>
            <ul className="space-y-5">
              {visaServices.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 text-sm hover:text-brand-orange transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xl mb-10">Contact Info</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+917702558704"
                  className="text-slate-400 text-sm hover:text-brand-orange transition-colors"
                >
                  +91 77025 58704
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ready2gooverseas.com"
                  className="text-slate-400 text-sm hover:text-brand-orange transition-colors"
                >
                  info@ready2gooverseas.com
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:text-brand-orange transition-colors leading-relaxed"
                >
                  F-16, Ground Floor, Gayathri Towers<br />
                  Main Road, Green Hills Colony, Kothapet<br />
                  Saroornagar Mandal, Ranga Reddy District<br />
                  Telangana – 500035
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-slate-500 text-xs">
            © 2026 Ready2Go Overseas. All rights reserved.
          </p>
          <div className="flex gap-10">
            <Link to="/privacy-policy" className="text-slate-500 text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 text-xs hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="text-slate-500 text-xs hover:text-white transition-colors">Cookie Policy</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-2xl hover:bg-white hover:text-brand-blue transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
