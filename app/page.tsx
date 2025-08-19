'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import ClinicGallery from '@/components/ClinicGallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation scrolled={scrolled} />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <About />
        <ClinicGallery />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}