import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Divya M',
    role: '4 reviews',
    text:
      'I had a fantastic experience with Naresh! The entire visa process was handled smoothly from start to finish, with no stress or complications. Everything was well-organized, transparent, and efficient, which made the whole journey completely hassle-free. Naresh was professional, supportive, and always available to answer questions, making me feel confident throughout the process. I truly appreciate the dedication and attention to detail. Highly recommended for anyone looking for a reliable and seamless visa service!',
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
    role: '',
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
    name: 'ramakrishna',
    role: '1 review',
    text: 'Excellent service. The entire visa process for me and my wife was handled properly with continuous support.',
    rating: 5,
  },
  {
    name: 'Muni Prasad',
    role: 'Local Guide - 21 reviews - 8 photos',
    text: 'Outstanding service. Naresh was incredibly helpful, fast, and had excellent communication.',
    rating: 5,
  },
  {
    name: 'Preethi goud',
    role: '2 reviews',
    text: 'After two previous rejections for my mother, I contacted Mr. Naresh and everything went smoothly. Very happy with the result.',
    rating: 5,
  },
  {
    name: 'Shaik Rahul',
    role: 'Local Guide',
    text: 'Great place for student visa support. The management is supportive and creates a positive, motivating environment.',
    rating: 5,
  },
  {
    name: 'regulagadda mani',
    role: '5 reviews',
    text: 'My UK journey started here. The process went smoothly, and I am very happy with the support I received.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Hear from our successful clients who have achieved their dreams of moving abroad with our expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="bg-white p-8 md:p-9 rounded-[2.5rem] shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all h-full min-h-[320px] flex flex-col"
            >
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-brand-orange/20 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              <p
                className="text-slate-600 leading-relaxed mb-6 italic"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                  overflow: 'hidden',
                }}
              >
                "{testimonial.text}"
              </p>

              <div className="mt-auto">
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
