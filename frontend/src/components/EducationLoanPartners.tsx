import React from 'react';
import { motion } from 'motion/react';
import { Landmark } from 'lucide-react';

const partners = [
  { name: 'Axis Bank Education Loan', badge: 'AXIS' },
  { name: 'ICICI Bank Education Loan', badge: 'ICICI' },
  { name: 'SBI Education Loan', badge: 'SBI' },
  { name: 'Credila Financial Services Limited', badge: 'CRE' },
  { name: 'Avanse Financial Services', badge: 'AVA' },
  { name: 'GyanDhan Financial Services Pvt Ltd', badge: 'GD' },
  { name: 'Poonawalla Education Loan', badge: 'POO' },
  { name: 'Yes Bank Education Loan', badge: 'YES' },
];

const badgeStyles = [
  'from-sky-500 to-blue-700',
  'from-slate-800 to-slate-600',
  'from-emerald-500 to-teal-700',
  'from-orange-500 to-amber-600',
];

export const EducationLoanPartners = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-title mb-4">Financial Support</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Education Loan Partners
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Explore trusted lending partners that can help make overseas education more accessible with flexible financing options.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((partner, index) => {
            const badgeClass = badgeStyles[index % badgeStyles.length];

            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${badgeClass} flex items-center justify-center text-white font-bold tracking-widest shadow-lg shrink-0`}>
                    {partner.badge}
                  </div>
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-blue mb-3">
                      <Landmark className="w-4 h-4 text-brand-orange" />
                      Partner
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {partner.name}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 h-px bg-slate-100 group-hover:bg-brand-orange/30 transition-colors" />
                <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                  Financial assistance designed to support your education goals with a cleaner application path.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
