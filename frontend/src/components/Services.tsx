import React from 'react';
import { GraduationCap, Briefcase, Plane, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Study Abroad",
    description: "University shortlisting, SOP support, and visa filing for top destinations with intake planning and scholarship guidance.",
    icon: GraduationCap,
    color: "bg-blue-50 text-brand-blue",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800",
    link: "/services"
  },
  {
    title: "Skilled Migration",
    description: "End-to-end support for PR pathways, point-based profiles, documentation, and employer sponsorship programs.",
    icon: Briefcase,
    color: "bg-orange-50 text-brand-orange",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    link: "/services"
  },
  {
    title: "Visitor & Family",
    description: "Tourist, family reunion, and business visit visas with a dedicated checklist and embassy-ready submissions.",
    icon: Plane,
    color: "bg-emerald-50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800",
    link: "/services"
  }
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Visa Services We Offer</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Choose the right pathway with clear timelines, expert documentation, and transparent guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-6 left-6 w-12 h-12 rounded-xl ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">
                  {service.description}
                </p>
                <Link to={service.link} className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-blue transition-all group-hover:shadow-lg active:scale-95">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
