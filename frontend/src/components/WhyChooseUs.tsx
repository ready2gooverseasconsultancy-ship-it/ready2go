import React from 'react';
import { CheckCircle2, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    title: "Personalized Strategy",
    description: "Every profile gets a tailored pathway plan, intake timing, and documentation checklist.",
    icon: ShieldCheck,
    color: "bg-blue-50 text-brand-blue"
  },
  {
    title: "Certified Advisors",
    description: "Experienced counselors guide you through eligibility, interviews, and embassy requirements.",
    icon: CheckCircle2,
    color: "bg-orange-50 text-brand-orange"
  },
  {
    title: "Transparent Tracking",
    description: "Know exactly what happens next with milestone updates and real-time case progress.",
    icon: Zap,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Visa-Ready Files",
    description: "We review every file for accuracy, compliance, and clarity before submission.",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600"
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">Why Ready2Go Overseas Consultancy</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 uppercase">Why Choose Us?</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              Ready2Go Overseas Consultancy combines on-ground experience with a modern workflow so you can move abroad with confidence, clarity, and a clear timeline.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase text-sm tracking-wider">{feature.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200" 
                alt="Visa Consultation Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-blue text-white p-8 rounded-3xl shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-bold mb-1">8+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Expertise</p>
            </div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
