import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Plane, MapPin, ArrowRight, CheckCircle2, FileText, Award } from 'lucide-react';

const detailedServices = [
  {
    title: "Study Abroad",
    description: "Plan every step of your education journey with university shortlisting, SOP support, and timely visa filing.",
    icon: GraduationCap,
    color: "bg-blue-50 text-brand-blue",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000",
    features: ["University Shortlisting", "SOP & LOR Support", "Visa Interview Prep", "Scholarship Guidance"]
  },
  {
    title: "Student Visa",
    description: "End-to-end student visa support with eligibility checks, document preparation, and submission guidance.",
    icon: GraduationCap,
    color: "bg-sky-50 text-sky-700",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    features: ["Eligibility Assessment", "Document Checklist", "Financial Guidance", "Embassy Submission"]
  },
  {
    title: "Work Visa",
    description: "Secure your overseas role with compliant filings, employer coordination, and timeline planning.",
    icon: Briefcase,
    color: "bg-amber-50 text-amber-700",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000",
    features: ["Role Alignment", "Employer Documents", "Application Filing", "Post-Approval Steps"]
  },
  {
    title: "Tourist Visa",
    description: "Get travel-ready with itinerary planning, financial proof guidance, and quick turnarounds.",
    icon: Plane,
    color: "bg-emerald-50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
    features: ["Itinerary Planning", "Funds Proof", "Hotel & Flight Support", "Fast-Track Filing"]
  },
  {
    title: "SOP / LOR Guidance",
    description: "Craft compelling SOPs and LORs aligned with university expectations and visa requirements.",
    icon: FileText,
    color: "bg-indigo-50 text-indigo-700",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=1000",
    features: ["Story Structuring", "Editing & Review", "University Alignment", "Final Proofing"]
  },
  {
    title: "Scholarship Assistance",
    description: "Identify scholarships and build strong applications with timelines, essays, and document support.",
    icon: Award,
    color: "bg-rose-50 text-rose-700",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
    features: ["Scholarship Shortlisting", "Essay Support", "Document Prep", "Deadline Tracking"]
  },
  {
    title: "Skilled Migration",
    description: "Advance your career with point-based assessments, sponsorship guidance, and compliant documentation.",
    icon: Briefcase,
    color: "bg-orange-50 text-brand-orange",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
    features: ["Point-Based Assessment", "Employer Sponsorship", "Job Market Guidance", "Document Verification"]
  },
  {
    title: "Visitor & Family",
    description: "Stress-free visitor visas with a clear checklist, itinerary guidance, and embassy-ready submissions.",
    icon: Plane,
    color: "bg-emerald-50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1000",
    features: ["Itinerary Support", "Document Checklist", "Fast-Track Processing", "Multi-Country Visits"]
  },
  {
    title: "PR & Settlement",
    description: "Strategic support for long-term residency, citizenship pathways, and family sponsorship.",
    icon: MapPin,
    color: "bg-purple-50 text-purple-600",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1000",
    features: ["PR Application Support", "Citizenship Pathways", "Family Sponsorship", "Compliance Checks"]
  }
];

export const Services = () => {
  return (
    <div className="pt-32">
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive visa and immigration solutions tailored to your unique journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-[2rem] border border-slate-100 shadow-lg overflow-hidden flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-44 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/50 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-auto bg-brand-orange text-white px-5 py-3 rounded-full font-bold text-sm hover:bg-brand-blue transition-all flex items-center gap-2 group">
                    Book Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
