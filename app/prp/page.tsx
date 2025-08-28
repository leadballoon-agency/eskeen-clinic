'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import {
  PRPHero,
  PRPBenefits,
  PRPAssessmentSection,
  PRPProcess,
  PRPResults,
  PRPPricing,
  PRPFAQ,
  PRPCTA
} from '@/components/prp';
import PRPBeforeAfter from '@/components/prp/PRPBeforeAfter';
import { FacebookEvents } from '@/lib/facebook-events';
import PixelTest from '@/components/prp/PixelTest';

export default function PRPPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Track PRP page view
    FacebookEvents.ViewContent('PRP Therapy Page', 'Treatment Page');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation scrolled={scrolled} />
      <main className="overflow-hidden">
        <PRPHero />
        <PRPAssessmentSection />
        <PRPBenefits />
        <PRPResults />
        <PRPBeforeAfter />
        <PRPProcess />
        <PRPPricing />
        <PRPFAQ />
        <PRPCTA />
      </main>
      <PixelTest />
    </>
  );
}