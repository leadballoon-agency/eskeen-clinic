'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import {
  PRPHero,
  PRPBenefits,
  PRPProcess,
  PRPResults,
  PRPPricing,
  PRPFAQ,
  PRPCTA
} from '@/components/prp';

export default function PRPPage() {
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
        <PRPHero />
        <PRPBenefits />
        <PRPResults />
        <PRPProcess />
        <PRPPricing />
        <PRPFAQ />
        <PRPCTA />
      </main>
    </>
  );
}