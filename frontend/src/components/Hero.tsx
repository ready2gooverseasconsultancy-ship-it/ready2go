import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Send } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-12 overflow-hidden bg-slate-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2000" 
          alt="Global Travel Skyline" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/85 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full mb-6 reveal-up">
              <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <span className="text-brand-blue text-xs font-bold uppercase tracking-widest">Trusted Overseas Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 reveal-up">
              Start your global journey with expert visa guidance.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl reveal-up">
              Plan your global journey with clarity. We guide students, professionals, and families through every visa milestone with transparent advice and hands-on support.
            </p>
            
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 mb-10 group hover:border-brand-orange transition-colors soft-shadow">
              <h4 className="text-brand-blue font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                Your Personal Visa Roadmap
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                From eligibility checks to embassy submissions, our advisors create a step-by-step plan tailored to your profile and destination.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 reveal-up">
              <Link to="/services">
                <button className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-blue transition-all shadow-lg shadow-brand-orange/20">
                  Explore Services
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-blue transition-all shadow-lg shadow-brand-orange/20">
                  Meet Our Experts
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative float-slow"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl"></div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Book Free Consultation</h3>
            <p className="text-slate-500 mb-8">Tell us your goal and we will respond within one business day.</p>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none"
              />
              <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none appearance-none">
                <option>Select a Visa Track</option>
                <option>Study Abroad</option>
                <option>Skilled Migration</option>
                <option>Tourist / Visitor</option>
                <option>Family Sponsorship</option>
              </select>
              <button className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue transition-all flex items-center justify-center gap-3 group">
                Book Free Consultation
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
