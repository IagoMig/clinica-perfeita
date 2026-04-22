import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';

import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { Footer } from './components/Footer';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-offwhite font-sans text-dark selection:bg-gold/30 selection:text-dark">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutPage />} />
        </Routes>

        <WhatsAppButton />
        
      </div>
    </BrowserRouter>
  );
}