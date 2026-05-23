import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Process } from './pages/Process';
import { Updates } from './pages/Updates';
import { Contact } from './pages/Contact';
import { Referral } from './pages/Referral';
import { Gallery } from './pages/Gallery';
import { StudyDestinationsPage } from './pages/StudyDestinations';
import { CountryStudyPage } from './pages/CountryStudyPage';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/study-destinations" element={<StudyDestinationsPage />} />
            <Route path="/study-destinations/:country" element={<StudyDestinationsPage />} />
            <Route path="/country/:slug" element={<CountryStudyPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}
