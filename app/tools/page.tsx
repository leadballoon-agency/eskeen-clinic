'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AISkinAnalysis from '@/components/tools/AISkinsAnalysis';
import TreatmentRecommendationEngine from '@/components/tools/TreatmentRecommendationEngine';
import BeforeAfterGallery from '@/components/tools/BeforeAfterGallery';

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tools = [
    {
      id: 'ai-analysis',
      name: 'Skin Analysis',
      description: 'Discover your skin\'s unique needs with our comprehensive analysis',
      icon: '✨',
      color: 'from-primary-400 to-primary-600',
      features: ['Personalised assessment', 'Expert recommendations', 'Bespoke treatment plan'],
      component: <AISkinAnalysis />,
    },
    {
      id: 'treatment-finder',
      name: 'Treatment Guide',
      description: 'Explore our curated selection of advanced treatments',
      icon: '💎',
      color: 'from-primary-500 to-primary-700',
      features: ['Detailed information', 'Compare options', 'Find your perfect match'],
      component: <TreatmentRecommendationEngine />,
    },
    {
      id: 'results-gallery',
      name: 'Transformations',
      description: 'View stunning results from our satisfied patients',
      icon: '🌟',
      color: 'from-primary-300 to-primary-500',
      features: ['Real patient results', 'Before & after', 'Success stories'],
      component: <BeforeAfterGallery />,
    },
    {
      id: 'cost-calculator',
      name: 'Investment Guide',
      description: 'Transparent pricing for your aesthetic journey',
      icon: '💫',
      color: 'from-primary-400 to-primary-600',
      features: ['Clear pricing', 'Package options', 'Flexible plans'],
      component: null,
    },
    {
      id: 'virtual-consultation',
      name: 'Virtual Consultation',
      description: 'Connect with Nurse Elanda from the comfort of your home',
      icon: '🥂',
      color: 'from-primary-500 to-primary-700',
      features: ['Expert advice', 'Personalised care', 'Convenient booking'],
      component: null,
    },
    {
      id: 'appointment-booking',
      name: 'Book Your Visit',
      description: 'Schedule your transformation at our luxury clinic',
      icon: '🌹',
      color: 'from-primary-300 to-primary-500',
      features: ['Easy booking', 'Instant confirmation', 'Reminder service'],
      component: null,
    },
  ];

  if (activeTool) {
    const tool = tools.find(t => t.id === activeTool);
    if (tool?.component) {
      return (
        <div>
          <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              <button
                onClick={() => setActiveTool(null)}
                className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Tools</span>
              </button>
              <img 
                src="https://static.wixstatic.com/media/676ae8_702c36455e8c44acb913421b1a277550~mv2.png/v1/fill/w_185,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eskeen_logo_gold_TRANSPARENT.png"
                alt="Eskeen Clinic"
                className="h-8 w-auto"
              />
            </div>
          </div>
          <div className="pt-16">
            {tool.component}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary-50/30 to-white">
      <Navigation scrolled={scrolled} />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-primary-100 px-6 py-2 rounded-full mb-6 border border-primary-200">
              <span className="text-primary-700 font-medium tracking-wider uppercase text-sm">Exclusive Tools</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Your Personal Beauty
              <span className="block gradient-text">Consultation Suite</span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover your perfect treatment path with our exclusive consultation tools, 
              designed to create a bespoke aesthetic journey tailoured just for you
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span className="text-neutral-700 font-medium">Personalised Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span className="text-neutral-700 font-medium">Expert Recommendations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span className="text-neutral-700 font-medium">Real Transformations</span>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={`group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer border border-primary-100 ${
                  !tool.component ? 'opacity-60' : ''
                }`}
                onClick={() => tool.component && setActiveTool(tool.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-3 transition-opacity duration-500`} />
                
                <div className="p-8">
                  <div className="text-4xl mb-4 opacity-80">{tool.icon}</div>
                  
                  <h3 className="font-display text-2xl font-bold mb-3 text-neutral-800">{tool.name}</h3>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">{tool.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-neutral-600">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {tool.component ? (
                    <button className="w-full py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      Explore →
                    </button>
                  ) : (
                    <div className="w-full py-3 rounded-full bg-primary-50 text-primary-300 font-medium text-center border border-primary-100">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-br from-primary-50 via-white to-primary-50 rounded-3xl p-12 border border-primary-200">
            <h2 className="font-display text-3xl font-bold text-center mb-12 text-neutral-800">
              The Eskeen Difference
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-display font-bold mb-2 gradient-text">18+</div>
                <p className="text-neutral-600 text-sm">Years Combined Experience</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2 gradient-text">2</div>
                <p className="text-neutral-600 text-sm">Expert Practitioners</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2 gradient-text">Top 5</div>
                <p className="text-neutral-600 text-sm">London Clinic Rating</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2 gradient-text">5★</div>
                <p className="text-neutral-600 text-sm">Treatwell Rating</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="font-display text-3xl font-bold mb-4 text-neutral-800">
              Begin Your Transformation
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let our exclusive tools guide you to the perfect treatment, 
              then meet with Nurse Elanda for your personalised consultation
            </p>
            <a
              href="https://www.treatwell.co.uk/place/eskeen-clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-medium text-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Book Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}