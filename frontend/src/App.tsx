import React, { Component, ReactNode, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { FloatingContact } from './components/FloatingContact';

const About = lazy(() => import('./pages/About').then(m => ({ default: m.default || m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.default || m.Services })));
const ProcessPage = lazy(() => import('./pages/Process').then(m => ({ default: m.default || m.Process })));
const Updates = lazy(() => import('./pages/Updates').then(m => ({ default: m.default || m.Updates })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.default || m.Contact })));
const Referral = lazy(() => import('./pages/Referral').then(m => ({ default: m.default || m.Referral })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.default || m.Gallery })));
const StudyDestinationsPage = lazy(() => import('./pages/StudyDestinations').then(m => ({ default: m.default || m.StudyDestinationsPage })));
const CountryStudyPage = lazy(() => import('./pages/CountryStudyPage').then(m => ({ default: m.default || m.CountryStudyPage })));

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
  }
  state: Readonly<ErrorBoundaryState> = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Page rendering error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    const that = this as unknown as {
      state: ErrorBoundaryState;
      props: ErrorBoundaryProps & { children: ReactNode };
    };
    if (that.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Something went wrong</h2>
          <p className="text-slate-600 mb-6 max-w-md">
            We encountered an unexpected issue while loading this section.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return that.props.children;
  }
}

function PageFallback() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="text-8xl font-bold text-brand-orange mb-4">404</div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
      <p className="text-slate-600 max-w-md mb-8 text-lg">
        The page you're looking for doesn't exist or has been moved. Let us help you find the right path.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-blue transition-all shadow-lg shadow-brand-orange/20"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-grow outline-none" tabIndex={-1}>
          <ErrorBoundary>
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}
