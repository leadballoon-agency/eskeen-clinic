'use client';

import { useState } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';
import GHLBookingModal from '@/components/GHLBookingModal';

const beforeAfterData = {
  hair: [
    {
      id: 1,
      title: 'Male Pattern Baldness',
      description: 'Significant hair density improvement after 6 PRP sessions',
      improvement: '40% density increase',
      timeframe: '6 months',
    },
    {
      id: 2,
      title: 'Female Hair Thinning',
      description: 'Noticeable volume restoration with PRP + biotin',
      improvement: '35% thickness gain',
      timeframe: '4 months',
    },
    {
      id: 3,
      title: 'Hairline Restoration',
      description: 'Frontal hairline strengthening and regrowth',
      improvement: 'Fuller hairline',
      timeframe: '5 months',
    },
    {
      id: 4,
      title: 'Crown Thinning',
      description: 'Crown area rejuvenation with consistent PRP treatments',
      improvement: '45% coverage',
      timeframe: '6 months',
    },
  ],
  face: [
    {
      id: 1,
      title: 'Under-Eye Rejuvenation',
      description: 'Dark circles and fine lines improved with PRP',
      improvement: '60% reduction',
      timeframe: '3 months',
    },
    {
      id: 2,
      title: 'Skin Texture Enhancement',
      description: 'Overall skin quality and radiance boost',
      improvement: 'Glowing skin',
      timeframe: '2 months',
    },
    {
      id: 3,
      title: 'Acne Scar Treatment',
      description: 'Significant improvement in acne scarring',
      improvement: '50% smoother',
      timeframe: '4 months',
    },
    {
      id: 4,
      title: 'Natural Face Lift',
      description: 'Collagen stimulation for natural lifting effect',
      improvement: 'Firmer skin',
      timeframe: '3 months',
    },
  ],
};

export default function PRPBeforeAfter() {
  const [activeTab, setActiveTab] = useState<'hair' | 'face'>('hair');
  const [selectedResult, setSelectedResult] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const currentData = beforeAfterData[activeTab];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Real Transformations</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Before & After
            <span className="gradient-text"> Results</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            See the incredible transformations achieved with PRP therapy
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex bg-neutral-100 p-1 rounded-full">
            <button
              onClick={() => {
                setActiveTab('hair');
                setSelectedResult(0);
              }}
              className={`relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'hair'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {activeTab === 'hair' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-full"></div>
              )}
              <span className="relative">💇‍♂️ Hair Restoration</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('face');
                setSelectedResult(0);
              }}
              className={`relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'face'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {activeTab === 'face' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-full"></div>
              )}
              <span className="relative">✨ Facial Rejuvenation</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Results Selector */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold">
              {activeTab === 'hair' ? 'Hair Restoration Cases' : 'Facial Rejuvenation Cases'}
            </h3>
            
            <div className="space-y-3 sm:space-y-4">
              {currentData.map((result, index) => (
                <div
                  key={result.id}
                  onClick={() => setSelectedResult(index)}
                  className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedResult === index
                      ? 'bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-300 shadow-lg'
                      : 'bg-white border border-neutral-200 hover:border-primary-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-base sm:text-lg mb-1">{result.title}</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mb-2">{result.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                          {result.improvement}
                        </span>
                        <span className="inline-block px-2 sm:px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full">
                          {result.timeframe}
                        </span>
                      </div>
                    </div>
                    {selectedResult === index && (
                      <div className="ml-3 flex-shrink-0">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary-50 rounded-xl">
              <p className="text-xs sm:text-sm text-primary-700">
                <strong>Note:</strong> Individual results may vary. Full before/after photos are shown during consultation to protect client privacy.
              </p>
            </div>
          </div>

          {/* Visual Display */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-5xl sm:text-6xl mb-3 sm:mb-4">
                    {activeTab === 'hair' ? '🔬' : '✨'}
                  </p>
                  <p className="text-base sm:text-lg text-primary-700 font-medium mb-2">
                    {currentData[selectedResult].title}
                  </p>
                  <p className="text-xs sm:text-sm text-primary-600">
                    Professional photography available in clinic
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Treatment Details</h4>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-neutral-50 rounded-xl p-3">
                      <p className="text-xs text-neutral-500 mb-1">Improvement</p>
                      <p className="font-semibold text-sm sm:text-base text-primary-600">
                        {currentData[selectedResult].improvement}
                      </p>
                    </div>
                    <div className="bg-neutral-50 rounded-xl p-3">
                      <p className="text-xs text-neutral-500 mb-1">Timeframe</p>
                      <p className="font-semibold text-sm sm:text-base text-primary-600">
                        {currentData[selectedResult].timeframe}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm sm:text-base text-neutral-700 mb-4">
                    Ready to achieve similar results? Take our assessment to see if PRP is right for you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#assessment"
                      className="flex-1 text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Take Assessment
                    </a>
                    <button
                      onClick={() => {
                        FacebookEvents.ClickBookNow('PRP Consultation', 'Before After Gallery');
                        setShowBookingModal(true);
                      }}
                      className="flex-1 text-center border-2 border-primary-500 text-primary-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-primary-50 transition-all duration-300"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GHLBookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        treatment="PRP Consultation"
      />
    </section>
  );
}