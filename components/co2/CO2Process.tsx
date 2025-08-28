'use client';

export default function CO2Process() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Our experts assess your skin and create a personalised treatment plan',
      icon: '💬',
      color: 'from-blue-50 to-cyan-50',
    },
    {
      number: '02',
      title: 'Preparation',
      description: 'Numbing cream applied to ensure your complete comfort during treatment',
      icon: '🧴',
      color: 'from-purple-50 to-pink-50',
    },
    {
      number: '03',
      title: 'Treatment',
      description: '30-45 minute precise laser application targeting your specific concerns',
      icon: '✨',
      color: 'from-yellow-50 to-orange-50',
    },
    {
      number: '04',
      title: 'Aftercare',
      description: 'Comprehensive aftercare kit and follow-up support for optimal results',
      icon: '💝',
      color: 'from-red-50 to-pink-50',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">The Process</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold px-4">
            Your Journey to
            <span className="gradient-text"> Perfect Skin</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto px-4">
            Simple, comfortable, and completely tailored to you
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full">
                  <svg className="w-full h-1" viewBox="0 0 100 2">
                    <line x1="0" y1="1" x2="100" y2="1" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
                    <defs>
                      <linearGradient id="gradient">
                        <stop offset="0%" stopColor="rgb(212, 130, 47)" />
                        <stop offset="100%" stopColor="rgb(212, 130, 47)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
              
              <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-primary-300">{step.number}</span>
                    <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2 text-neutral-800">{step.title}</h3>
                  <p className="text-neutral-600 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary-100 to-primary-200 p-1">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-neutral-800">Recovery Timeline</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start bg-primary-50 rounded-xl p-3 sm:p-4">
                      <span className="font-semibold text-primary-700 mr-3 whitespace-nowrap text-sm sm:text-base">Day 1-3:</span>
                      <span className="text-neutral-600 text-sm sm:text-base">Mild redness and warmth (like sunburn)</span>
                    </li>
                    <li className="flex items-start bg-primary-50 rounded-xl p-3 sm:p-4">
                      <span className="font-semibold text-primary-700 mr-3 whitespace-nowrap text-sm sm:text-base">Day 4-7:</span>
                      <span className="text-neutral-600 text-sm sm:text-base">Light peeling begins, skin renewal starts</span>
                    </li>
                    <li className="flex items-start bg-primary-50 rounded-xl p-3 sm:p-4">
                      <span className="font-semibold text-primary-700 mr-3 whitespace-nowrap text-sm sm:text-base">Week 2:</span>
                      <span className="text-neutral-600 text-sm sm:text-base">Fresh, glowing skin emerges</span>
                    </li>
                    <li className="flex items-start bg-primary-50 rounded-xl p-3 sm:p-4">
                      <span className="font-semibold text-primary-700 mr-3 whitespace-nowrap text-sm sm:text-base">Month 1-3:</span>
                      <span className="text-neutral-600 text-sm sm:text-base">Continued improvement as collagen builds</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-4 sm:p-6">
                  <h4 className="font-bold text-lg sm:text-xl mb-4 text-neutral-800">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-neutral-700">Pre-treatment consultation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-neutral-700">Numbing cream application</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-neutral-700">Full aftercare kit</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-neutral-700">Follow-up support</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-primary-200">
                    <p className="text-xs sm:text-sm text-neutral-600 text-center">
                      All treatments performed by certified professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}