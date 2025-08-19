'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import PRPHero from '@/components/prp/PRPHero';
import PRPBenefits from '@/components/prp/PRPBenefits';
import PRPProcess from '@/components/prp/PRPProcess';
import PRPResults from '@/components/prp/PRPResults';
import PRPPricing from '@/components/prp/PRPPricing';
import PRPFAQ from '@/components/prp/PRPFAQ';
import PRPCTA from '@/components/prp/PRPCTA';

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