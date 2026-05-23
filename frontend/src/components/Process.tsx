import React from 'react';
import { UserPlus, FileUp, Search } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    title: "PROFILE REVIEW",
    description: "Share your goals and we evaluate eligibility, timelines, and recommended pathways.",
    icon: UserPlus,
    step: "01"
  },
  {
    title: "DOCUMENTATION",
    description: "Receive a checklist and expert review for SOPs, finances, and supporting documents.",
    icon: FileUp,
    step: "02"
  },
  {
    title: "SUBMISSION & TRACKING",
    description: "We submit to the right channel and keep you updated at every milestone.",
    icon: Search,
    step: "03"
  }
];

export const Process = () => {
  return (
    <section id="process" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 uppercase">How It Works</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A streamlined workflow that keeps you informed, prepared, and confident.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 text-center group"
              >
                <div className="relative mb-8 inline-block">
                  <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500 group-hover:scale-110">
                    <step.icon className="w-10 h-10 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm border-4 border-slate-900">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4 uppercase tracking-wider">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue transition-all shadow-2xl shadow-brand-orange/20 uppercase tracking-widest">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
