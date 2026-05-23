import React from 'react';
import { motion } from 'motion/react';
import { Clock3, ShieldCheck, Sparkles, Users } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    value: '500+',
    label: 'Students Guided',
  },
  {
    icon: ShieldCheck,
    value: '95%',
    label: 'Visa Success Rate',
  },
  {
    icon: Sparkles,
    value: '20+',
    label: 'Destination Countries',
  },
];

export const ExperienceHighlight = () => {
  return (
    <section className="py-16 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,rgba(246,139,30,0.45),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(142,201,243,0.35),transparent_30%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Clock3 className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.28em]">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              8+ Years of Experience
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              We bring years of practical consulting experience to every case, helping clients move forward with confidence, clear documentation, and a smoother application journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[2rem] p-6 md:p-8 soft-shadow"
          >
            <div className="flex items-end justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <p className="text-white/70 text-sm uppercase tracking-[0.3em] mb-3">Trusted Expertise</p>
                <div className="flex items-end gap-3">
                  <span className="text-6xl md:text-7xl font-bold text-brand-orange leading-none">8+</span>
                  <span className="text-lg md:text-xl font-semibold text-white/90 pb-2">
                    Years guiding global visa journeys
                  </span>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 border border-white/10 p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{item.value}</div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/65">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
