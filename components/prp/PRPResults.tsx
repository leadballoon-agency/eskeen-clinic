'use client';

import { useState } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';
import BookingModal from '@/components/BookingModal';

export default function PRPResults() {
  const [activeTab, setActiveTab] = useState('hair');
  const [showBookingModal, setShowBookingModal] = useState(false);

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

        {/* Elegant Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-neutral-100 p-1 rounded-full">
            <button
              onClick={() => setActiveTab('hair')}
              className={`relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'hair'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {activeTab === 'hair' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-full"></div>
              )}
              <span className="relative">💇‍♂️ Hair</span>
            </button>
            <button
              onClick={() => setActiveTab('face')}
              className={`relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'face'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {activeTab === 'face' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-full"></div>
              )}
              <span className="relative">✨ Face</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center p-6 sm:p-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">{results[activeTab as keyof typeof results].title}</h3>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-base sm:text-lg">Expected Timeline:</h4>
                {results[activeTab as keyof typeof results].timeline.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                    <div className="flex items-center sm:w-24">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-500 rounded-full mr-2 sm:mr-0"></div>
                      <span className="font-semibold text-sm sm:text-base text-primary-600 sm:ml-2">{item.time}</span>
                    </div>
                    <div className="hidden sm:flex flex-1 items-center px-3">
                      <div className="flex-1 h-0.5 bg-primary-200"></div>
                    </div>
                    <div className="flex-1 pl-4 sm:pl-0 text-sm sm:text-base text-neutral-700">{item.result}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                    {results[activeTab as keyof typeof results].stats.improvement}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600">Improvement</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                    {activeTab === 'hair' 
                      ? (results.hair.stats as any).density 
                      : (results.face.stats as any).glow}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    {activeTab === 'hair' ? 'Hair Density' : 'Skin Glow'}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                    {results[activeTab as keyof typeof results].stats.satisfaction}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600">Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] sm:aspect-[3/2] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl sm:text-7xl mb-4">
                      {activeTab === 'hair' ? '💇‍♂️' : '✨'}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-primary-800 mb-2">
                      {activeTab === 'hair' ? 'Hair Restoration Results' : 'Facial Rejuvenation Results'}
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
                  Interested in {activeTab === 'hair' ? 'facial' : 'hair'} results? 
                  <button 
                    onClick={() => setActiveTab(activeTab === 'hair' ? 'face' : 'hair')}
                    className="text-primary-600 hover:text-primary-700 font-medium ml-1"
                  >
                    View {activeTab === 'hair' ? 'Face' : 'Hair'} Results →
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-white rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-center">
            <p className="text-base sm:text-lg text-neutral-700 font-medium mb-2">
              {activeTab === 'hair' 
                ? 'Ready to restore your hair\'s natural fullness?'
                : 'Ready for naturally radiant, younger-looking skin?'
              }
            </p>
            <p className="text-sm text-neutral-600 mb-6">
              See if you\'re a good candidate with our quick assessment
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#assessment"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Take {activeTab === 'hair' ? 'Hair' : 'Facial'} Assessment
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <button
                onClick={() => {
                  FacebookEvents.ClickBookNow('PRP Consultation', 'PRP Results');
                  setShowBookingModal(true);
                }}
                className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-primary-50 transition-all duration-300"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Trust Section with Practitioners */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Trusted by 1000+ Clients</h3>
            <p className="text-neutral-600">Your PRP treatment is performed by certified experts</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <img
                src="/images/Elanda.jpg"
                alt="Nurse Elanda"
                className="w-20 h-20 rounded-full object-cover border-4 border-primary-100"
              />
              <div>
                <h4 className="font-bold">Nurse Elanda</h4>
                <p className="text-sm text-neutral-600">9 Years Experience</p>
                <div className="flex text-yellow-400 text-sm mt-1">
                  {'★★★★★'}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <img
                src="/images/Mavra.jpg"
                alt="Mavra"
                className="w-20 h-20 rounded-full object-cover border-4 border-primary-100"
              />
              <div>
                <h4 className="font-bold">Mavra</h4>
                <p className="text-sm text-neutral-600">Pharmacist Practitioner</p>
                <div className="flex text-yellow-400 text-sm mt-1">
                  {'★★★★★'}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <div className="grid grid-cols-3 text-center">
              <div>
                <p className="text-3xl font-bold gradient-text">500+</p>
                <p className="text-sm text-neutral-600">PRP Treatments</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">95%</p>
                <p className="text-sm text-neutral-600">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">5.0</p>
                <p className="text-sm text-neutral-600">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        treatment="PRP Consultation"
      />
    </section>
  );
}