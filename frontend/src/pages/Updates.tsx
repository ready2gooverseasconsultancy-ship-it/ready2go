import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import visaTipsImage from '../assets/images/visa tips.png';

const blogs = [
  {
    title: "New Immigration Rules for Canada in 2024",
    excerpt: "Stay updated with the latest changes in Canada's express entry and provincial nominee programs. The government has announced new targets for permanent residency.",
    date: "March 15, 2024",
    author: "Admin",
    category: "Immigration",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Top 5 Universities in UK for International Students",
    excerpt: "Explore the best educational institutions in the UK and their admission requirements for 2024. From Russell Group universities to modern research centers.",
    date: "March 10, 2024",
    author: "Visa Expert",
    category: "Study Abroad",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "How to Prepare for Your Visa Interview",
    excerpt: "Essential tips and common questions to help you ace your visa interview with confidence. Learn how to present your case effectively to the consular officer.",
    date: "March 05, 2024",
    author: "Consultant",
    category: "Tips",
    image: visaTipsImage
  },
  {
    title: "Australia's New Skilled Worker Visa Categories",
    excerpt: "Australia has introduced new visa subclasses for skilled workers in regional areas. Find out if your occupation is on the new demand list.",
    date: "March 01, 2024",
    author: "Admin",
    category: "Work Visa",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Understanding the German Opportunity Card",
    excerpt: "Germany's new 'Chancenkarte' makes it easier for skilled workers to find jobs. Learn about the points-based system and eligibility criteria.",
    date: "February 25, 2024",
    author: "Visa Expert",
    category: "Immigration",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Student Health Insurance Requirements for USA",
    excerpt: "A comprehensive guide to understanding health insurance requirements for F1 visa students in the United States.",
    date: "February 20, 2024",
    author: "Consultant",
    category: "Study Abroad",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800"
  }
];

export const Updates = () => {
  const pageSize = 3;
  const totalPages = Math.ceil(blogs.length / pageSize);
  const [page, setPage] = useState(1);
  const pagedBlogs = blogs.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="pt-32">
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Latest Updates</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay informed with the latest immigration news, visa tips, and study abroad guides.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for updates..." 
              className="w-full px-8 py-5 rounded-full bg-white shadow-xl border-none focus:ring-2 focus:ring-brand-blue outline-none pl-16"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {pagedBlogs.map((blog, index) => (
              <motion.div
                key={`${blog.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
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
                <div className="flex items-center gap-6 text-slate-400 text-xs mb-6">
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
                <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3">
                  {blog.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:gap-4 transition-all">
                  Read Full Article <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                  page === pageNumber
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-orange/20 text-brand-blue hover:bg-brand-blue hover:text-white'
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
