import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Share2, Wallet, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useInquiryForm } from '../lib/useInquiryForm';

interface ReferralFieldErrors {
  firstName?: string;
  email?: string;
}

export const Referral = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState<ReferralFieldErrors>({});
  const { status, error, submit } = useInquiryForm();

  const validate = (): boolean => {
    const errors: ReferralFieldErrors = {};
    if (!form.firstName.trim()) errors.firstName = 'First name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearErr = (f: keyof ReferralFieldErrors) => {
    setFieldErrors((prev) => { const n = { ...prev }; delete n[f]; return n; });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    const fullName = `${form.firstName} ${form.lastName}`.trim();
    const ok = await submit({
      name: fullName,
      email: form.email,
      phone: form.phone,
      message: form.message || 'Interested in referral partner program',
    });
    if (ok) {
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setFieldErrors({});
    }
  };

  const steps = [
    {
      icon: Share2,
      title: 'Share Your Link',
      description: 'Share your unique referral code or link with friends and family who are looking for visa services.',
      color: 'bg-blue-50 text-brand-blue',
    },
    {
      icon: Users,
      title: 'They Register',
      description: 'Your friend signs up for any of our visa services using your referral link or code.',
      color: 'bg-orange-50 text-brand-orange',
    },
    {
      icon: Wallet,
      title: 'Get Rewarded',
      description: 'Once their visa process is successfully initiated, you receive your referral bonus directly.',
      color: 'bg-emerald-50 text-emerald-600',
    },
  ];

  const benefits = [
    {
      title: 'Student Visa',
      description: 'Per successful enrollment',
    },
    {
      title: 'Work Visa',
      description: 'Per successful application',
    },
    {
      title: 'Tourist Visa',
      description: 'Per successful processing',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-brand-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
            alt="Referral background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4 text-brand-orange" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Refer & Earn Program</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Spread the Word, <br />
              <span className="text-brand-orange">Earn Rewards</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Help your friends achieve their global dreams and get rewarded for every successful referral.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">Simple Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">How It Works</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">Incentives</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Referral Rewards</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We value your trust and recommendations. Our referral program is designed to reward you for helping others find the right guidance for their visa journey.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div>
                      <h5 className="font-bold text-slate-900">{benefit.title}</h5>
                      <p className="text-sm text-slate-500">{benefit.description}</p>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-brand-orange" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
                <h4 className="text-3xl font-bold text-slate-900 mb-6">Become a Partner</h4>
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ref-firstname" className="sr-only">First Name <span className="text-red-500">*</span></label>
                      <input
                        id="ref-firstname"
                        type="text"
                        placeholder="First Name *"
                        value={form.firstName}
                        required
                        aria-required="true"
                        aria-invalid={!!fieldErrors.firstName}
                        onChange={(e) => { setForm((prev) => ({ ...prev, firstName: e.target.value })); clearErr('firstName'); }}
                        className={`w-full px-6 py-4 rounded-2xl outline-none ${
                          fieldErrors.firstName
                            ? 'bg-red-50 border-2 border-red-300 focus:ring-2 focus:ring-red-400'
                            : 'bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue'
                        }`}
                      />
                      {fieldErrors.firstName && <p className="text-xs font-semibold text-red-500 mt-1 ml-1" role="alert">{fieldErrors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="ref-lastname" className="sr-only">Last Name</label>
                      <input
                        id="ref-lastname"
                        type="text"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ref-email" className="sr-only">Email Address <span className="text-red-500">*</span></label>
                    <input
                      id="ref-email"
                      type="email"
                      placeholder="Email Address *"
                      value={form.email}
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.email}
                      onChange={(e) => { setForm((prev) => ({ ...prev, email: e.target.value })); clearErr('email'); }}
                      className={`w-full px-6 py-4 rounded-2xl outline-none ${
                        fieldErrors.email
                          ? 'bg-red-50 border-2 border-red-300 focus:ring-2 focus:ring-red-400'
                          : 'bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue'
                      }`}
                    />
                    {fieldErrors.email && <p className="text-xs font-semibold text-red-500 mt-1 ml-1" role="alert">{fieldErrors.email}</p>}
                  </div>
                  <label htmlFor="ref-phone" className="sr-only">Phone Number</label>
                  <input
                    id="ref-phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none"
                  />
                  <label htmlFor="ref-message" className="sr-only">Message</label>
                  <textarea
                    id="ref-message"
                    placeholder="Tell us why you'd like to join our referral program"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue transition-all shadow-lg shadow-brand-orange/20 disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : 'Register Now'}
                  </button>
                  {status === 'success' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-emerald-600">Thanks! Your inquiry has been received.</motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-red-600">{error}</motion.p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Program Terms & Conditions</h3>
          <div className="space-y-4 text-left">
            {[
              'Referral bonus is paid only after the referred client successfully initiates their visa process.',
              'There is no limit to the number of referrals you can make.',
              'Referral rewards are subject to verification by our team.',
              'The program is open to all existing and new partners of Ready2Go Overseas.',
            ].map((term, i) => (
              <div key={i} className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <p className="text-slate-600">{term}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Referral;
