'use client';

import { useState } from 'react';

export default function CO2ProblemSolution() {
  const [selectedConcern, setSelectedConcern] = useState(0);
  
  const concerns = [
    {
      problem: 'Living with Acne Scars',
      impact: 'Avoiding mirrors, photos, and close conversations',
      solution: 'CO2 laser creates controlled micro-injuries that trigger collagen production, filling in scars from within',
      result: '70-80% improvement in scar depth',
      icon: '🎯'
    },
    {
      problem: 'Fighting Visible Aging',
      impact: 'Feeling less confident at work and social events',
      solution: 'Fractional resurfacing removes damaged skin layers while tightening remaining tissue',
      result: '60% reduction in fine lines',
      icon: '⏰'
    },
    {
      problem: 'Dealing with Rough Texture',
      impact: 'Makeup sits wrong, skincare doesn\'t help',
      solution: 'Deep thermal energy smooths irregularities and resurfaces your entire complexion',
      result: '85% smoother skin texture',
      icon: '✨'
    },
    {
      problem: 'Hiding Sun Damage',
      impact: 'Heavy concealer every day',
      solution: 'Targeted laser energy breaks up pigmentation while stimulating new cell growth',
      result: '75% reduction in dark spots',
      icon: '☀️'
    }
  ];

  return (
    <section id="solution" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">The Problem & Solution</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            From Your Struggles
            <span className="block gradient-text mt-2">To Your Solution</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto">
            We understand your pain. Here\'s exactly how CO2 laser solves each concern.
          </p>
        </div>

        {/* Interactive Problem-Solution Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Problem Side */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Your Daily Reality</h3>
            {concerns.map((concern, index) => (
              <button
                key={index}
                onClick={() => setSelectedConcern(index)}
                className={`w-full text-left rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
                  selectedConcern === index
                    ? 'bg-white shadow-xl scale-105 border-2 border-primary-400'
                    : 'bg-white/50 hover:bg-white hover:shadow-lg'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{concern.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-800 mb-1">{concern.problem}</h4>
                    <p className="text-sm text-neutral-600 italic">{concern.impact}</p>
                  </div>
                  {selectedConcern === index && (
                    <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Solution Side */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-neutral-800 mb-6">Your CO2 Laser Solution</h3>
            
            <div className="space-y-6">
              <div className="text-center py-4">
                <span className="text-6xl">{concerns[selectedConcern].icon}</span>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">How CO2 Laser Helps:</h4>
                <p className="text-neutral-700">{concerns[selectedConcern].solution}</p>
              </div>
              
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6">
                <h4 className="font-semibold text-neutral-800 mb-3">Expected Result:</h4>
                <p className="text-3xl font-bold gradient-text mb-2">
                  {concerns[selectedConcern].result}
                </p>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Clinically proven results</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">FDA</p>
                  <p className="text-xs text-neutral-600">Approved</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">1-3</p>
                  <p className="text-xs text-neutral-600">Sessions</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">Years</p>
                  <p className="text-xs text-neutral-600">Lasting</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why CO2 Laser is Different */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary-100 to-primary-200 p-1">
            <div className="bg-white rounded-3xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
                Why CO2 Laser Succeeds Where Everything Else Failed
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Goes Deep</h4>
                  <p className="text-sm text-neutral-600">
                    Reaches layers creams can\'t touch, treating the root cause
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Triggers Healing</h4>
                  <p className="text-sm text-neutral-600">
                    Your body rebuilds stronger, smoother skin naturally
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Lasts Years</h4>
                  <p className="text-sm text-neutral-600">
                    Not a temporary fix - genuine skin transformation
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-neutral-600 mb-4">Ready to solve your skin concerns?</p>
                <a
                  href="#assessment"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Take Your Free Assessment
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}