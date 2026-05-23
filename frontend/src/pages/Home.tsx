import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Process as ProcessSection } from '../components/Process';
import { Countries } from '../components/Countries';
import { LatestUpdates } from '../components/LatestUpdates';
import { Contact as ContactSection } from '../components/Contact';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { Partners } from '../components/Partners';
import { ExperienceHighlight } from '../components/ExperienceHighlight';
import { EducationLoanPartners } from '../components/EducationLoanPartners';
import { ReferralCTA } from '../components/ReferralCTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <ExperienceHighlight />
      <Partners />
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-blue mb-2">Explore Our Gallery</h3>
            <p className="text-slate-500">
              See real visa success moments and office highlights from Ready2Go Overseas Consultancy.
            </p>
          </div>
          <a href="/gallery" className="inline-flex">
            <button className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue transition-all">
              View Gallery
            </button>
          </a>
        </div>
      </section>
      <Services />
      <Countries />
      <Stats />
      <WhyChooseUs />
      <EducationLoanPartners />
      <ReferralCTA />
      <ProcessSection />
      <Testimonials />
      <LatestUpdates />
      <ContactSection />
    </>
  );
};
