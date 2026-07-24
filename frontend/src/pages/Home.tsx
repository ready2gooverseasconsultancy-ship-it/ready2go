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
import { Faq } from '../components/Faq';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <>
      <Hero />
      <ExperienceHighlight />
      <Partners />

      {/* Gallery CTA strip */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-brand-blue mb-1">Explore Our Gallery</h3>
            <p className="text-slate-500 text-sm">See real visa success moments and office highlights from Ready2Go Overseas.</p>
          </div>
          <Button to="/gallery" variant="primary" size="md">
            View Gallery <ArrowRight className="w-4 h-4" />
          </Button>
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
      <Faq />
      <LatestUpdates />
      <ContactSection />
    </>
  );
};
