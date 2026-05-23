import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, FileText, Send, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: "Consultation",
    description: "Meet our experts to discuss your goals and evaluate your eligibility for various visa options.",
    icon: MessageSquare,
    step: "01",
    details: "Our initial consultation is designed to understand your unique profile and identify the best immigration pathways for you."
  },
  {
    title: "Document Preparation",
    description: "Our team assists you in gathering and organizing all necessary documents for a strong application.",
    icon: FileText,
    step: "02",
    details: "We provide a comprehensive checklist and review all documents to ensure they meet the specific requirements of the destination country."
  },
  {
    title: "Application Submission",
    description: "We handle the entire submission process, ensuring all forms are filled correctly and submitted on time.",
    icon: Send,
    step: "03",
    details: "Our experts manage the online and offline submission process, tracking your application at every stage."
  },
  {
    title: "Visa Approval",
    description: "Receive your visa and get ready for your journey abroad with our post-approval guidance.",
    icon: CheckCircle,
    step: "04",
    details: "Once your visa is approved, we provide pre-departure briefings and post-landing support to help you settle in."
  }
];

export const Process = () => {
  return (
    <div className="pt-32">
      <section className="section-padding bg-brand-orange text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Process</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A transparent, step-by-step approach to your international success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-12 items-center"
              >
                <div className={`w-32 h-32 shrink-0 rounded-full bg-slate-50 flex items-center justify-center border-8 border-white shadow-xl relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <step.icon className="w-12 h-12 text-brand-blue" />
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold border-4 border-white">
                    {step.step}
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right md:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="text-slate-500 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-brand-blue p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Start?</h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                Join thousands of successful applicants who have achieved their dreams with Ready2Go Overseas Consultancy.
              </p>
              <button className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-blue transition-all flex items-center gap-3 mx-auto group">
                Book Free Consultation <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
