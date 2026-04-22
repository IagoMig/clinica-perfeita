import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { QuoteBanner } from '../components/QuoteBanner';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { CinematicIntro } from '../components/CinematicIntro';
import { Footer } from '../components/Footer';
import { Reviews } from '../components/Reviews';

export function Home() {
  return (
    <>
      <CinematicIntro />     
      <QuoteBanner />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}