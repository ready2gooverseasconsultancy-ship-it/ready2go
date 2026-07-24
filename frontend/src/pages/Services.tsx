import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { SeoHead } from '../components/Seo Head';

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: 'Study Abroad',
    description: 'Plan every step of your education journey with university shortlisting, SOP support, and timely visa filing.',
    features: ['University Shortlisting', 'SOP & LOR Support', 'Visa Interview Prep', 'Scholarship Guidance'],
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Student Visa',
    description: 'End-to-end student visa support with eligibility checks, document preparation, and submission guidance.',
    features: ['Eligibility Assessment', 'Document Checklist', 'Financial Guidance', 'Embassy Submission'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Work Visa',
    description: 'Secure your overseas role with compliant filings, employer coordination, and timeline planning.',
    features: ['Role Alignment', 'Employer Documents', 'Application Filing', 'Post-Approval Steps'],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Tourist Visa',
    description: 'Get travel-ready with itinerary planning, financial proof guidance, and quick turnarounds.',
    features: ['Itinerary Planning', 'Funds Proof', 'Hotel & Flight Support', 'Fast-Track Filing'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'PR & Settlement',
    description: 'Strategic support for long-term residency, citizenship pathways, and family sponsorship.',
    features: ['PR Application Support', 'Citizenship Pathways', 'Family Sponsorship', 'Compliance Checks'],
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1000',
  },
];

export const Services = () => {
  return (
    <div className="pt-32">
      <SeoHead
        title="Visa & Immigration Services | Ready2Go Overseas"
        description="Comprehensive visa and immigration services including study abroad, work visas, tourist visas, business visas, and PR assistance. Expert guidance for 50+ countries."
        canonicalPath="/services"
      />

      {/* Hero */}
      <Section className="bg-slate-900 text-white pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Comprehensive visa and immigration solutions tailored to your unique journey.
          </motion.p>
        </div>
      </Section>

      {/* Service Cards */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden flex flex-col hover:shadow-card transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2 mb-6 flex-1">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span className="text-slate-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <Button to="/contact" variant="primary" size="md" className="w-full justify-center">
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
