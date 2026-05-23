import React from 'react';
import { motion } from 'motion/react';
import { Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ReferralCTA = () => {
  return (
    <section className="py-20 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Refer & Earn</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Know someone planning to go abroad?</h2>
            <p className="text-xl text-white/80 max-w-xl">
              Refer friends or family to Ready2Go Overseas Consultancy and receive exclusive rewards for every successful application.
            </p>
          </div>
          <Link to="/referral">
            <button className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-blue transition-all flex items-center gap-3 group shadow-xl">
              Start Referring <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
