import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Send, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { useInquiryForm } from '../lib/useInquiryForm';
import { Button } from './ui/Button';

const TRUST_BADGES = [
  { icon: CheckCircle, text: '8+ Years Experience' },
  { icon: Shield, text: '500+ Success Stories' },
  { icon: Star, text: '4.9 Google Rating' },
];

const VISA_OPTIONS = [
  'Study Abroad',
  'Work Visa',
  'Tourist / Visitor',
  'Family Sponsorship',
] as const;

interface HeroFieldErrors {
  name?: string;
  email?: string;
}

export const Hero = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', visaTrack: 'Study Abroad' });
  const [fieldErrors, setFieldErrors] = useState<HeroFieldErrors>({});
  const { status, error, submit } = useInquiryForm();

  const validate = (): boolean => {
    const errors: HeroFieldErrors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearErr = (f: keyof HeroFieldErrors) => {
    setFieldErrors((prev) => { const n = { ...prev }; delete n[f]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    const ok = await submit({
      name: form.name,
      email: form.email,
      phone: form.phone,
      visaType: form.visaTrack,
      message: `Interested in: ${form.visaTrack}`,
    });
    if (ok) { setForm({ name: '', email: '', phone: '', visaTrack: 'Study Abroad' }); setFieldErrors({}); }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-8 overflow-hidden bg-slate-50">
      {/* Ambient background layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2000"
          alt=""
          className="w-full h-full object-cover opacity-[0.12]"
          referrerPolicy="no-referrer"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/92 to-transparent" />
        {/* Accent orbs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-orange/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-brand-blue/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ---------- Left: Content ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <span className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em]">
                Ready2Go Overseas
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08] mb-6 text-balance">
              Your Global Journey Starts{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-400">
                Here
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Trusted visa and immigration guidance for students, professionals, and families.
              We turn your international ambitions into reality — with clarity, confidence, and care.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mb-10">
              {TRUST_BADGES.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <badge.icon className="w-5 h-5 text-brand-orange" />
                  <span className="text-sm font-semibold text-slate-700">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Button to="/services" variant="primary" size="xl">
                Explore Services <ArrowRight className="w-5 h-5" />
              </Button>
              <Button to="/contact" variant="outline" size="xl">
                Meet Our Experts
              </Button>
            </div>
          </motion.div>

          {/* ---------- Right: Form Card ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-card border border-slate-100 relative"
          >
            {/* Glow accent */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Book Free Consultation
            </h3>
            <p className="text-slate-500 mb-8">
              Tell us your goal — we'll respond within one business day.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <input
                  id="hero-name"
                  type="text"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => { setForm((p) => ({ ...p, name: e.target.value })); clearErr('name'); }}
                  required
                  aria-required="true"
                  aria-invalid={!!fieldErrors.name}
                  className={`w-full px-5 py-4 rounded-2xl outline-none transition-all text-sm ${
                    fieldErrors.name
                      ? 'bg-red-50 border-2 border-red-300 focus:ring-2 focus:ring-red-400'
                      : 'bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
                  }`}
                />
                {fieldErrors.name && <p className="text-xs font-semibold text-red-500 mt-1 ml-1" role="alert">{fieldErrors.name}</p>}
              </div>
              <div>
                <input
                  id="hero-email"
                  type="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={(e) => { setForm((p) => ({ ...p, email: e.target.value })); clearErr('email'); }}
                  required
                  aria-required="true"
                  aria-invalid={!!fieldErrors.email}
                  className={`w-full px-5 py-4 rounded-2xl outline-none transition-all text-sm ${
                    fieldErrors.email
                      ? 'bg-red-50 border-2 border-red-300 focus:ring-2 focus:ring-red-400'
                      : 'bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
                  }`}
                />
                {fieldErrors.email && <p className="text-xs font-semibold text-red-500 mt-1 ml-1" role="alert">{fieldErrors.email}</p>}
              </div>
              <input
                id="hero-phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-sm"
              />
              <select
                id="hero-visa"
                value={form.visaTrack}
                onChange={(e) => setForm((p) => ({ ...p, visaTrack: e.target.value }))}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-sm appearance-none"
              >
                {VISA_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-base hover:bg-brand-blue transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-orange/20 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Book Free Consultation
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-emerald-600 text-center">
                  Thanks! Your message has been sent.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-red-600 text-center">
                  {error}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
