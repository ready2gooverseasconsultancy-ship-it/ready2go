import React from 'react';
import { motion } from 'motion/react';
import photo18 from '../assets/PHOTOS/Untitled design (18).png';
import photo21 from '../assets/PHOTOS/Untitled design (21).png';
import photo22 from '../assets/PHOTOS/Untitled design (22).png';
import photo23 from '../assets/PHOTOS/Untitled design (23).png';
import photo24 from '../assets/PHOTOS/Untitled design (24).png';
import photo25 from '../assets/PHOTOS/Untitled design (25).png';
import photo26 from '../assets/PHOTOS/Untitled design (26).png';
import photo27 from '../assets/PHOTOS/Untitled design (27).png';
import photo28 from '../assets/PHOTOS/Untitled design (28).png';
import photo29 from '../assets/PHOTOS/Untitled design (29).png';
import photo30 from '../assets/PHOTOS/Untitled design (30).png';
import photo31 from '../assets/PHOTOS/Untitled design (31).png';
import photo32 from '../assets/PHOTOS/Untitled design (32).png';

const visaSuccessPhotos = [
  photo18,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
  photo31,
  photo32
];

const universityLogos = [
  "North Valley University",
  "Horizon Institute",
  "Summit Global College",
  "Pacific Crest University",
  "Maplewood University",
  "Lakeside International"
];

export const TrustElements = () => {
  return (
    <section className="py-14 md:py-18 px-6 md:px-12 lg:px-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-title mb-4">Trust Elements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Proof of Success, Partnerships, and Presence
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Real outcomes and global partnerships that showcase the Ready2Go Overseas Consultancy difference.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-brand-blue mb-4">Visa Success Photos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {visaSuccessPhotos.map((photo, index) => (
              <motion.div
                key={`${photo}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-white"
              >
                <img
                  src={photo}
                  alt={`Visa success ${index + 1}`}
                  className="w-full h-40 md:h-44 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">Partner University Logos</h3>
              <p className="text-slate-500">
                Collaboration across leading institutions to support your applications.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {universityLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-center text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 hover:border-brand-blue hover:text-brand-blue hover:bg-white transition-all h-full flex items-center justify-center"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
