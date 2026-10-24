import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Team } from './components/Team';
import { Process } from './components/Process';
import { QuoteCalculator } from './components/QuoteCalculator';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ContactModal } from './components/ContactModal';
import { Toast } from './components/Toast';

function AppContent() {
  return (
    <div className="doorstep-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Team />
        <Process />
        <QuoteCalculator />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Floating Helpers */}
      <ProjectModal />
      <ContactModal />
      <FloatingActions />
      <Toast />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
