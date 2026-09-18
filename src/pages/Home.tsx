import React from 'react';
import { QuoteBanner } from '../components/QuoteBanner';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { CinematicIntro } from '../components/CinematicIntro';
import { BlogSection } from '../components/BlogSection';
import { Reviews } from '../components/Reviews';

export function Home() {
  return (
    <>
      <CinematicIntro />     
      <QuoteBanner />
      <BlogSection />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  );
}