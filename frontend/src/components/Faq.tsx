import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';

const FAQS = [
  {
    q: 'What visa services does Ready2Go Overseas offer?',
    a: 'We provide end-to-end guidance for student visas, work visas, tourist visas, business visas, family sponsorship, and permanent residency applications across 50+ countries.',
  },
  {
    q: 'How long does the visa process usually take?',
    a: 'Timelines vary by visa type and country. Student visas typically take 4–12 weeks, while visitor visas can be processed in 2–4 weeks. We provide a personalised timeline during your initial consultation.',
  },
  {
    q: 'Do you guarantee visa approval?',
    a: 'No ethical consultant can guarantee visa approval — that decision rests solely with the embassy. What we guarantee is meticulous preparation: every document reviewed, every form checked, and every deadline met to give you the strongest possible application.',
  },
  {
    q: 'What countries do you support for study abroad?',
    a: 'We support applications to the USA, Canada, UK, Australia, New Zealand, Germany, Ireland, UAE, Singapore, and more. Our study destination page has detailed information on each country.',
  },
  {
    q: 'How much does your consultation cost?',
    a: 'Your first consultation is completely free. We discuss your profile, goals, and options with no obligation. Paid service packages are transparently priced and discussed only after you decide to proceed.',
  },
  {
    q: 'Can you help if my visa was previously rejected?',
    a: 'Yes — we have helped many clients successfully reapply after a rejection. We analyse the refusal reasons, address gaps in documentation, and build a stronger application for re-submission.',
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Inject FAQPage structured data for SEO rich results
  useEffect(() => {
    const id = 'faq-structured-data';
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.id = id;
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    });
  }, []);

  return (
    <Section className="bg-slate-50" id="faq">
      <SectionHeader
        label="FAQ"
        title="Frequently Asked Questions"
        description="Quick answers to the most common questions about our visa and immigration services."
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? 'bg-white border-brand-blue/20 shadow-md'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-base font-bold text-slate-900 leading-snug">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-brand-orange transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-3 bg-brand-blue/5 px-6 py-4 rounded-2xl">
          <HelpCircle className="w-5 h-5 text-brand-orange shrink-0" />
          <p className="text-slate-600">
            Still have questions?{' '}
            <a href="/contact" className="font-bold text-brand-blue hover:text-brand-orange transition-colors underline underline-offset-2">
              Contact our team
            </a>
          </p>
        </div>
      </motion.div>
    </Section>
  );
};
