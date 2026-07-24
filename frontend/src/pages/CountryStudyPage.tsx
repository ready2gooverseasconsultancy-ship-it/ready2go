import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  CalendarCheck2,
  ChevronRight,
  DollarSign,
  GraduationCap,
  Landmark,
  PlaneTakeoff,
  Sparkles,
  Target,
} from 'lucide-react';
import { studyDestinationTabs, studyDestinations, type StudyDestinationKey } from '../data/studyDestinations';

const slugToKey: Record<string, StudyDestinationKey> = Object.entries(studyDestinations).reduce(
  (acc, [key, value]) => {
    acc[value.slug] = key as StudyDestinationKey;
    return acc;
  },
  {} as Record<string, StudyDestinationKey>,
);

export const CountryStudyPage = () => {
  const params = useParams();
  const key = params.slug ? slugToKey[params.slug] : undefined;

  if (!key) {
    return <Navigate to="/study-destinations" replace />;
  }

  const country = studyDestinations[key];

  return (
    <div className="bg-white">
      <section className="pt-44 md:pt-48 lg:pt-52 pb-16 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-blue mb-6">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                Study Destination
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
                <Link to="/" className="hover:text-brand-blue transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-slate-300" />
                <Link to="/study-destinations" className="hover:text-brand-blue transition-colors">
                  Study Destinations
                </Link>
                <ChevronRight className="w-4 h-4 text-slate-300" />
                <span className="text-slate-700">{country.shortTitle}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">{country.title}</h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                {country.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-blue"
                >
                  Get Free Expert Assistance
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#quick-facts"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-all hover:border-brand-blue hover:text-brand-blue"
                >
                  View Quick Facts
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-orange/20 blur-3xl rounded-full" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white">
                <img
                  src={country.heroImage}
                  alt={country.title}
                  className="h-[420px] w-full object-cover"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white backdrop-blur">
                    <BadgeCheck className="w-4 h-4 text-brand-orange" />
                    {country.shortTitle}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="sticky top-[86px] z-20 border-y border-slate-200 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {studyDestinationTabs.map((tab) => {
              const tabCountry = studyDestinations[tab.key];
              const active = tab.key === key;

              return (
                <Link
                  key={tab.key}
                  to={`/country/${tabCountry.slug}`}
                  className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 border ${
                    active
                      ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-brand-blue hover:text-brand-blue'
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="quick-facts" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="section-title mb-4">Quick Facts</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Study in {country.shortTitle}</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{country.overview}</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
            {country.quickFacts.map((fact) => (
              <div
                key={fact}
                className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-4">
                  <BadgeCheck className="w-5 h-5 text-brand-orange" />
                </div>
                <p className="text-slate-700 leading-relaxed text-sm font-medium">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-study" className="section-padding pt-0 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-[2rem] bg-slate-50 border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-brand-orange" />
              <h3 className="text-2xl font-bold text-slate-900">Why Study Here</h3>
            </div>
            <div className="space-y-4">
              {country.whyStudy.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-orange shrink-0" />
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="top-universities" className="rounded-[2rem] bg-brand-blue text-white p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="w-5 h-5 text-brand-orange" />
              <h3 className="text-2xl font-bold">Top Universities</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {country.topUniversities.map((university) => (
                <div key={university} className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3">
                  {university}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="popular-courses" className="section-padding pt-0 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-[2rem] bg-white border border-slate-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-brand-orange" />
              <h3 className="text-2xl font-bold text-slate-900">Popular Courses</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {country.popularCourses.map((course) => (
                <span key={course} className="rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div id="admission-process" className="rounded-[2rem] bg-white border border-slate-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <CalendarCheck2 className="w-5 h-5 text-brand-orange" />
              <h3 className="text-2xl font-bold text-slate-900">Admission Process</h3>
            </div>
            <div className="space-y-4">
              {country.admissionProcess.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="visa-process" className="section-padding pt-0 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-[2rem] bg-white border border-slate-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <PlaneTakeoff className="w-5 h-5 text-brand-orange" />
              <h3 className="text-2xl font-bold text-slate-900">Visa Process</h3>
            </div>
            <div className="space-y-4">
              {country.visaProcess.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="cost-scholarships" className="rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-5 h-5 text-brand-orange" />
              <h3 className="text-2xl font-bold text-slate-900">Cost / Scholarships</h3>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white border border-slate-100 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-1">Tuition</p>
                <p className="font-semibold text-slate-900">{country.costAndScholarships.tuition}</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-100 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-1">Living Cost</p>
                <p className="font-semibold text-slate-900">{country.costAndScholarships.living}</p>
              </div>
              <div className="rounded-2xl bg-brand-blue text-white p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/70 mb-1">Scholarships</p>
                <p className="font-semibold leading-relaxed">{country.costAndScholarships.scholarship}</p>
              </div>
              <p className="text-sm text-slate-500">{country.costAndScholarships.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2rem] bg-brand-blue text-white p-8 md:p-10 shadow-2xl">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <p className="text-white/70 text-sm font-bold uppercase tracking-[0.3em] mb-4">Apply Now</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Start your study abroad journey with {country.shortTitle}
                </h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  Get guidance on university shortlisting, admissions, visas, scholarships, and pre-departure preparation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="rounded-2xl bg-brand-orange px-6 py-4 font-bold text-white transition-all hover:bg-white hover:text-brand-blue text-center"
                >
                  Enquiry
                </Link>
                <Link
                  to="/contact"
                  className="rounded-2xl border border-white/20 px-6 py-4 font-bold text-white transition-all hover:bg-white/10 text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
