import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Divya M',
    role: 'Visa Client',
    text: 'I had a fantastic experience with Naresh! The entire visa process was handled smoothly from start to finish, with no stress or complications. Everything was well-organized, transparent, and efficient, which made the whole journey completely hassle-free. Naresh was professional, supportive, and always available to answer questions.',
    rating: 5,
  },
  {
    name: 'Karthik R',
    role: 'Student Visa, Canada',
    text: 'My UK journey started here, and the education guidance was excellent. The team helped me with universities, documents, and every step of the visa process.',
    rating: 5,
  },
  {
    name: 'Priya S',
    role: 'Student Visa',
    text: 'They made my education journey simple and stress-free. The support was clear, quick, and helpful throughout the entire visa process.',
    rating: 5,
  },
  {
    name: 'Arun Kumar',
    role: 'Visitor Visa, UK',
    text: 'Great support for my UK journey and education plans. The process was smooth, and I always felt guided in the right direction.',
    rating: 5,
  },
  {
    name: 'Ramakrishna',
    role: 'Visa Client',
    text: 'Excellent service. The entire visa process for me and my wife was handled properly with continuous support.',
    rating: 5,
  },
  {
    name: 'Muni Prasad',
    role: 'Local Guide',
    text: 'Outstanding service. Naresh was incredibly helpful, fast, and had excellent communication.',
    rating: 5,
  },
  {
    name: 'Preethi Goud',
    role: 'Visa Client',
    text: 'After two previous rejections for my mother, I contacted Mr. Naresh and everything went smoothly. Very happy with the result.',
    rating: 5,
  },
  {
    name: 'Shaik Rahul',
    role: 'Student Visa',
    text: 'Great place for student visa support. The management is supportive and creates a positive, motivating environment.',
    rating: 5,
  },
];

const PAGE_SIZE = 3;

export const Testimonials = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(TESTIMONIALS.length / PAGE_SIZE);
  const visible = TESTIMONIALS.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <Section className="bg-slate-50" id="testimonials">
      <SectionHeader
        label="Testimonials"
        title="What Our Clients Say"
        description="Hear from clients who have successfully achieved their dreams of moving abroad with our guidance."
      />

      <div className="relative">
        {/* Carousel */}
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((t) => (
              <motion.div
                key={t.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 flex flex-col h-full hover:shadow-card transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 italic text-sm flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                  <Quote className="w-8 h-8 text-slate-100" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === page ? 'bg-brand-orange w-6' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page >= totalPages - 1}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Google review link */}
      <div className="text-center mt-12">
        <a
          href="https://g.co/kgs/your-google-review-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-blue transition-colors"
        >
          <Star className="w-4 h-4 fill-brand-orange text-brand-orange" />
          See all reviews on Google
        </a>
      </div>
    </Section>
  );
};
