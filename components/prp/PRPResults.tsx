'use client';

import { useState } from 'react';

export default function PRPResults() {
  const [activeTab, setActiveTab] = useState('hair');

  const results = {
    hair: {
      title: 'Hair Restoration Results',
      timeline: [
        { time: '1 Month', result: 'Reduced hair shedding' },
        { time: '2-3 Months', result: 'New hair growth begins' },
        { time: '4-6 Months', result: 'Visible thickness improvement' },
        { time: '12 Months', result: 'Full results achieved' },
      ],
      stats: { improvement: '30-40%', density: 'Increase', satisfaction: '95%' },
    },
    face: {
      title: 'Facial Rejuvenation Results',
      timeline: [
        { time: '1 Week', result: 'Skin appears refreshed' },
        { time: '2-4 Weeks', result: 'Improved texture and tone' },
        { time: '2-3 Months', result: 'Collagen production peaks' },
        { time: '6 Months', result: 'Maximum rejuvenation' },
      ],
      stats: { improvement: '60%', glow: 'Natural', satisfaction: '98%' },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Proven Results</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Real Transformations,
            <span className="gradient-text"> Natural Beauty</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            See what PRP therapy can achieve for hair restoration and facial rejuvenation
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('hair')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'hair'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Hair Restoration
            </button>
            <button
              onClick={() => setActiveTab('face')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'face'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Facial Rejuvenation
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{results[activeTab as keyof typeof results].title}</h3>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Expected Timeline:</h4>
                {results[activeTab as keyof typeof results].timeline.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-24 font-semibold text-primary-600">{item.time}</div>
                    <div className="flex-1 flex items-center">
                      <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                      <div className="flex-1 h-0.5 bg-primary-200"></div>
                    </div>
                    <div className="flex-1 ml-3 text-neutral-700">{item.result}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">
                    {results[activeTab as keyof typeof results].stats.improvement}
                  </p>
                  <p className="text-sm text-neutral-600">Improvement</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">
                    {activeTab === 'hair' 
                      ? (results.hair.stats as any).density 
                      : (results.face.stats as any).glow}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {activeTab === 'hair' ? 'Hair Density' : 'Skin Glow'}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">
                    {results[activeTab as keyof typeof results].stats.satisfaction}
                  </p>
                  <p className="text-sm text-neutral-600">Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={activeTab === 'hair' 
                  ? 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=400&fit=crop'
                  : 'https://images.unsplash.com/photo-1556228852-5647db99e8b6?w=600&h=400&fit=crop'
                }
                alt={`PRP ${activeTab} results`}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium mb-1">Individual Results May Vary</p>
                <p className="text-xs opacity-90">Results shown after complete treatment series</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-neutral-600 mb-6">
            Ready to start your transformation journey?
          </p>
          <a
            href="https://www.treatwell.co.uk/place/eskeen-clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Your PRP Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}