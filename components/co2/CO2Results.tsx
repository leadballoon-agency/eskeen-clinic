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
      image: '/images/clinic/inside1.webp',
    },
    wrinkles: {
      title: 'Fine Lines & Wrinkles',
      improvement: '60-70%',
      timeframe: '2-4 months',
      description: 'Significant reduction in crow\'s feet, forehead lines, and smile lines',
      image: '/images/clinic/inside2.webp',
    },
    texture: {
      title: 'Skin Texture',
      improvement: '85-90%',
      timeframe: '1-3 months',
      description: 'Smoother, more refined skin with improved tone and clarity',
      image: '/images/clinic/inside3.webp',
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Proven Results</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Real Transformations,
            <span className="gradient-text"> Real People</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            See the dramatic improvements our clients achieve with CO2 laser therapy at Eskeen Clinic
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(results).map(([key, result]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {result.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={results[activeTab as keyof typeof results].image}
                alt={results[activeTab as keyof typeof results].title}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium mb-1">Before & After</p>
                <p className="text-xs opacity-90">Individual results may vary</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{results[activeTab as keyof typeof results].title}</h3>
              <p className="text-lg text-neutral-600">
                {results[activeTab as keyof typeof results].description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-xl p-4">
                  <p className="text-sm text-primary-700 font-medium mb-1">Average Improvement</p>
                  <p className="text-3xl font-bold gradient-text">
                    {results[activeTab as keyof typeof results].improvement}
                  </p>
                </div>
                <div className="bg-primary-50 rounded-xl p-4">
                  <p className="text-sm text-primary-700 font-medium mb-1">Full Results In</p>
                  <p className="text-2xl font-bold gradient-text">
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