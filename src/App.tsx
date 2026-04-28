import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ProcedurePage } from './pages/ProcedurePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-offwhite font-sans text-dark selection:bg-gold/30 selection:text-dark">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/procedimentos/:slug" element={<ProcedurePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>

          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}