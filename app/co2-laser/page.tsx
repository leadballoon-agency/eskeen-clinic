'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import CO2ComingSoon from '@/components/co2/CO2ComingSoon';

export default function CO2LaserPage() {
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
      <Navigation scrolled={scrolled} darkMode={true} />
      <main className="overflow-hidden">
        <CO2ComingSoon />
      </main>
    </>
  );
}