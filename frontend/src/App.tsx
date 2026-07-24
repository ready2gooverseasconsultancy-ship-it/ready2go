import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { FloatingContact } from './components/FloatingContact';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ProcessPage = lazy(() => import('./pages/Process'));
const Updates = lazy(() => import('./pages/Updates'));
const Contact = lazy(() => import('./pages/Contact'));
const Referral = lazy(() => import('./pages/Referral'));
const Gallery = lazy(() => import('./pages/Gallery'));
const StudyDestinationsPage = lazy(() => import('./pages/StudyDestinations'));
const CountryStudyPage = lazy(() => import('./pages/CountryStudyPage'));

function PageFallback() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-4 border-brand-orange/30 border-t-brand-orange rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/referral" element={<Referral />} />
              <Route path="/study-destinations" element={<StudyDestinationsPage />} />
              <Route path="/study-destinations/:country" element={<StudyDestinationsPage />} />
              <Route path="/country/:slug" element={<CountryStudyPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}
