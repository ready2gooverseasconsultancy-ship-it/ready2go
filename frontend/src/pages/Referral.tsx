import React from 'react';
import { motion } from 'motion/react';
import { Gift, Share2, Wallet, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Referral = () => {
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
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none" />
                    <input type="text" placeholder="Last Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none" />
                  <textarea placeholder="Tell us why you'd like to join our referral program" rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none resize-none"></textarea>
                  <button className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue transition-all shadow-lg shadow-brand-orange/20">
                    Register Now
                  </button>
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
              'The program is open to all existing and new partners of Ready2Go Overseas Consultancy.',
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
