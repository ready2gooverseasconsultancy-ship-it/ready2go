import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import educationFairImage from '../assets/images/education fair.png';
import { motion } from 'motion/react';

const blogs = [
  {
    title: "Ready2Go Overseas Consultancy Global Education Fair",
    excerpt: "Meet university representatives from the UK, Canada, and Australia with on-spot profile reviews.",
    date: "May 12, 2026",
    author: "Events Team",
    image: educationFairImage,
    category: "Events"
  },
  {
    title: "Skilled Migration Intake Checklist",
    excerpt: "A simple guide to assess points, documentation timelines, and priority occupations.",
    date: "April 25, 2026",
    author: "Visa Desk",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    category: "Guides"
  },
  {
    title: "Student Visa Interview Prep",
    excerpt: "Prepare the right answers, documents, and confidence boosters for consular interviews.",
    date: "April 04, 2026",
    author: "Counseling Team",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    category: "Tips"
  }
];

export const LatestUpdates = () => {
  return (
    <section id="updates" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Latest News</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase">Our News</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Updates from events, policy insights, and destination readiness tips.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm py-1.5 px-4 rounded-full text-xs font-bold text-brand-blue shadow-sm">
                  {blog.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {blog.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" /> {blog.author}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-orange transition-colors leading-tight">
                  {blog.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {blog.excerpt}
                </p>
                <a href="/updates" className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:gap-4 transition-all">
                  Read More <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
