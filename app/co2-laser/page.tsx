'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import CO2Hero from '@/components/co2/CO2Hero';
import CO2WowAssessment from '@/components/co2/CO2WowAssessment';
import CO2ProblemSolution from '@/components/co2/CO2ProblemSolution';
import CO2ResultsStories from '@/components/co2/CO2ResultsStories';
import CO2Process from '@/components/co2/CO2Process';
import CO2DynamicPricing from '@/components/co2/CO2DynamicPricing';
import CO2FAQ from '@/components/co2/CO2FAQ';

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
      <Navigation scrolled={scrolled} />
      <main className="overflow-hidden">
        <CO2Hero />
        <CO2WowAssessment />
        <CO2ProblemSolution />
        <CO2ResultsStories />
        <CO2Process />
        <CO2DynamicPricing />
        <CO2FAQ />
      </main>
    </>
  );
}