import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';
import { SeoHead } from '../components/Seo Head';

const VALUES = [
  {
    title: 'Our Mission',
    description: 'To provide transparent, expert-guided visa and immigration services that empower individuals and families to achieve their international aspirations with confidence.',
    icon: Target,
    color: 'bg-orange-50 text-brand-orange',
  },
  {
    title: 'Our Vision',
    description: 'To be the most trusted overseas education and immigration consultancy, known for integrity, personalised service, and successful outcomes.',
    icon: Eye,
    color: 'bg-blue-50 text-brand-blue',
  },
  {
    title: 'Our Commitment',
    description: 'Every client receives honest assessments, clear communication, and dedicated support throughout their journey — from first consultation to final visa decision.',
    icon: Award,
    color: 'bg-emerald-50 text-emerald-600',
  },
];

export const About = () => {
  return (
    <>
      <SeoHead
        title="About Us | Ready2Go Overseas Consultancy"
        description="Learn about Ready2Go Overseas — a trusted visa and immigration consultancy with 8+ years of experience helping students and professionals achieve their global dreams."
        canonicalPath="/about"
      />

      <div className="pt-32">
        {/* Hero */}
        <section className="section-padding bg-brand-blue text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Ready2Go Overseas is a boutique visa and immigration consultancy focused on personalised guidance, transparent timelines, and compliant documentation.
              </p>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </section>

        {/* Values */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              {VALUES.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-slate-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">Our Story</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded with a vision to simplify the overseas journey, Ready2Go Overseas has grown into a trusted name in visa and immigration consulting. We combine years of on-ground experience with a modern, client-first approach.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                From study abroad aspirations to family reunification and skilled migration — we guide every client through the process with clarity, compliance, and genuine care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '8+', label: 'Years Experience' },
                  { number: '500+', label: 'Successful Visas' },
                  { number: '50+', label: 'Countries Served' },
                  { number: '4.9', label: 'Google Rating' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-3xl font-bold text-brand-orange">{stat.number}</p>
                    <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
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
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200"
                  alt="Ready2Go Overseas team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-slate-900">Registered Consultancy</span>
                </div>
                <p className="text-sm text-slate-500">Fully compliant with immigration regulations</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
