import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { QuoteBanner } from './components/QuoteBanner';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
export function App() {
  return (
    <div className="min-h-screen bg-offwhite font-sans text-dark selection:bg-gold/30 selection:text-dark">
      <Navbar />
      <Hero />
      <About />
      <QuoteBanner />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>);

}