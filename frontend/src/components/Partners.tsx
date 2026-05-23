import React from 'react';
import { motion } from 'motion/react';

const partners = [
  { name: "Global Education Network" },
  { name: "Skyline Recruitment" },
  { name: "CampusBridge" },
  { name: "Apex Language Institute" },
  { name: "Northshore University Hub" },
  { name: "TalentGate International" }
];

export const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-12">Trusted by Universities and Partners Worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="px-6 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold hover:text-brand-blue hover:border-brand-blue hover:bg-white transition-all">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
