'use client';

import { useState } from 'react';

export default function CO2Results() {
  const [activeTab, setActiveTab] = useState('scars');

  const results = {
    scars: {
      title: 'Acne Scar Reduction',
      improvement: '70-80%',
      timeframe: '3-6 months',
      description: 'Dramatic improvement in pitted scars, ice pick scars, and rolling scars',
      icon: '🎯',
      displayText: 'Scars',
    },
    wrinkles: {
      title: 'Fine Lines & Wrinkles',
      improvement: '60-70%',
      timeframe: '2-4 months',
      description: 'Significant reduction in crow\'s feet, forehead lines, and smile lines',
      icon: '✨',
      displayText: 'Wrinkles',
    },
    texture: {
      title: 'Skin Texture',
      improvement: '85-90%',
      timeframe: '1-3 months',
      description: 'Smoother, more refined skin with improved tone and clarity',
      icon: '💎',
      displayText: 'Texture',
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-600 font-medium tracking-wider uppercase text-sm animate-pulse">
            Proven Results
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Real Transformations,
            <span className="gradient-text"> Real People</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            See the dramatic improvements our clients achieve with CO2 laser therapy at Eskeen Clinic
          </p>
        </div>

        {/* Elegant Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-neutral-100 p-1 rounded-full">
            {Object.entries(results).map(([key, result]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-white text-primary-600 shadow-lg'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {activeTab === key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-full"></div>
                )}
                <span className="relative">{result.icon} {result.displayText}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center p-6 sm:p-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">{results[activeTab as keyof typeof results].title}</h3>
              <p className="text-base sm:text-lg text-neutral-600">
                {results[activeTab as keyof typeof results].description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-xl p-4">
                  <p className="text-sm text-primary-700 font-medium mb-1">Average Improvement</p>
                  <p className="text-2xl sm:text-3xl font-bold gradient-text">
                    {results[activeTab as keyof typeof results].improvement}
                  </p>
                </div>
                <div className="bg-primary-50 rounded-xl p-4">
                  <p className="text-sm text-primary-700 font-medium mb-1">Full Results In</p>
                  <p className="text-xl sm:text-2xl font-bold gradient-text">
                    {results[activeTab as keyof typeof results].timeframe}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-neutral-600 mb-4">
                  <strong>Note from Nurse Elanda:</strong> "Every client's skin is unique. During your 
                  consultation, I'll assess your specific needs and create a personalised treatment plan 
                  to achieve your best possible results."
                </p>
                <a
                  href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Book Your Consultation
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] sm:aspect-[3/2] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl sm:text-7xl mb-4">
                      {results[activeTab as keyof typeof results].icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-primary-800 mb-2">
                      {results[activeTab as keyof typeof results].title}
                    </h4>
                    <p className="text-sm text-primary-600">
                      Before & After Photos Available
                    </p>
                    <p className="text-xs text-primary-500 mt-2">
                      During Your Consultation
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium mb-1">Individual Results May Vary</p>
                  <p className="text-xs opacity-90">Results shown after complete treatment series</p>
                </div>
              </div>
              
              {/* Quick Switch Hint */}
              <div className="mt-4 text-center">
                <p className="text-xs text-neutral-500">
                  Want to see {activeTab === 'scars' ? 'texture' : activeTab === 'wrinkles' ? 'scar' : 'wrinkle'} results? 
                  <button 
                    onClick={() => setActiveTab(activeTab === 'scars' ? 'texture' : activeTab === 'wrinkles' ? 'scars' : 'wrinkles')}
                    className="text-primary-600 hover:text-primary-700 font-medium ml-1"
                  >
                    Switch View →
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-white rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-center">
            <p className="text-base sm:text-lg text-neutral-700 font-medium mb-2">
              Ready to transform your skin with CO2 laser therapy?
            </p>
            <p className="text-sm text-neutral-600 mb-6">
              Book your consultation to see what results you can achieve
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Consultation
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#assessment"
                className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-primary-50 transition-all duration-300"
              >
                Take Assessment
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">200+</div>
            <p className="text-neutral-600">CO2 Treatments Performed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <p className="text-neutral-600">Client Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">5★</div>
            <p className="text-neutral-600">Average Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}