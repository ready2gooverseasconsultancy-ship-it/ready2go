import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, Globe, Briefcase } from 'lucide-react';

const stats = [
  { label: "Students Guided", value: "500+", icon: Users, color: "text-blue-600" },
  { label: "Destination Countries", value: "20+", icon: Globe, color: "text-emerald-600" },
  { label: "Visa Success Rate", value: "95%", icon: Award, color: "text-orange-600" },
  { label: "University Tie-ups", value: "300+", icon: Briefcase, color: "text-purple-600" }
];

export const Stats = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <h4 className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</h4>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
