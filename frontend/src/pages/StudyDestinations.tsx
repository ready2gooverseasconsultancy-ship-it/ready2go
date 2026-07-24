import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, ArrowRight, GraduationCap, Globe2, Sparkles, Landmark } from 'lucide-react';
import {
  defaultStudyDestinationKey,
  studyDestinationTabs,
  studyDestinations,
  type StudyDestinationKey,
} from '../data/studyDestinations';
import { StudyDestination } from '../components/StudyDestination';

const normalizeKey = (value: string | undefined): StudyDestinationKey => {
  if (value && value in studyDestinations) {
    return value as StudyDestinationKey;
  }
  return defaultStudyDestinationKey;
};

export const StudyDestinationsPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const activeKey = normalizeKey(params.country);

  useEffect(() => {
    if (!params.country) {
      navigate(`/study-destinations/${defaultStudyDestinationKey}`, { replace: true });
    }
  }, [navigate, params.country]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeKey]);

  return (
    <div className="bg-white">
      <section className="pt-44 md:pt-48 lg:pt-52 pb-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-blue mb-6">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              Study Destinations
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              The World is your Campus!
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed">
              Aspire for more. Choose what suits you best from the top countries to study abroad, with the same smooth guidance and clear workflow across every destination.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-blue">
              Get Free Expert Assistance
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-[86px] z-20 border-y border-slate-200 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-500 whitespace-nowrap">
              <Search className="w-4 h-4 text-brand-orange" />
              Search your Study Destination
            </div>
            <div className="flex-1">
              <label className="sr-only" htmlFor="country-select">Search your Study Destination</label>
              <select
                id="country-select"
                value={activeKey}
                onChange={(event) => navigate(`/study-destinations/${event.target.value}`)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-700 outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
              >
                {studyDestinationTabs.map((tab) => (
                  <option key={tab.key} value={tab.key}>
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => document.getElementById(`destination-${activeKey}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-brand-blue"
            >
              Search
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="section-title mb-4">Our Strengths</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Countries We Serve</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Expert study abroad guidance for the world's most popular destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                <Globe2 className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Global study destinations</h3>
              <p className="text-slate-600 leading-relaxed">
                Explore the world's most popular study abroad destinations.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                <Landmark className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">University tie-ups</h3>
              <p className="text-slate-600 leading-relaxed">
                Access guidance for leading universities and institutions.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                <GraduationCap className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our numbers speak volumes</h3>
              <p className="text-slate-600 leading-relaxed">
                Practical support for admission, visa, and pre-departure planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-title mb-4">Explore our study destinations!</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Choose the country that fits you best</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Every destination follows the same workflow and layout, so students can compare options quickly and confidently.
            </p>
          </div>

          <div className="space-y-8">
            {studyDestinationTabs.map((tab) => (
              <div key={tab.key}>
                <StudyDestination
                  activeKey={activeKey}
                  countryKey={tab.key}
                  data={studyDestinations[tab.key]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

