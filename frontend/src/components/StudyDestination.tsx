import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { StudyDestinationData, StudyDestinationKey } from '../data/studyDestinations';

type StudyDestinationProps = {
  activeKey: StudyDestinationKey;
  countryKey: StudyDestinationKey;
  data: StudyDestinationData;
};

export const StudyDestination = ({ activeKey, countryKey, data }: StudyDestinationProps) => {
  const isActive = activeKey === countryKey;

  return (
    <motion.article
      id={`destination-${countryKey}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.3 }}
      className={`rounded-[2rem] border bg-white shadow-sm overflow-hidden transition-all duration-300 ${
        isActive ? 'border-brand-blue shadow-xl ring-1 ring-brand-blue/10' : 'border-slate-100'
      }`}
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-blue mb-5">
              <Globe2 className="w-4 h-4 text-brand-orange" />
              {data.shortTitle}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{data.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">{data.overview}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
                <BadgeCheck className="w-4 h-4 text-brand-orange" />
                Quick facts
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {data.quickFacts.map((fact) => (
                  <li
                    key={fact}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3 text-slate-700"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-orange shrink-0" />
                    <span className="leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-[220px] flex lg:justify-end">
            <Link
              to={`/country/${data.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-brand-blue shadow-lg shadow-brand-orange/20"
            >
              Know More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
