'use client';

export default function CO2Solution() {
  return (
    <section id="solution" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-primary-700 font-medium text-sm">The Solution</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                CO2 Laser:
                <span className="block gradient-text mt-2">The Gold Standard in Skin Resurfacing</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-600">
                CO2 laser therapy is the most powerful and effective treatment for deep skin rejuvenation. 
                Using advanced fractional technology, it creates microscopic channels in your skin that 
                trigger your body's natural healing response.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-primary-50 rounded-2xl p-4 sm:p-6 hover:bg-primary-100 transition-colors duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl sm:text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 text-neutral-800">Precision Treatment</h3>
                    <p className="text-sm sm:text-base text-neutral-600">
                      Targets specific areas with microscopic accuracy, leaving surrounding tissue intact for faster healing
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-4 sm:p-6 hover:bg-primary-100 transition-colors duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl sm:text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 text-neutral-800">Collagen Stimulation</h3>
                    <p className="text-sm sm:text-base text-neutral-600">
                      Activates your body's natural collagen production for months after treatment, continuously improving skin quality
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-4 sm:p-6 hover:bg-primary-100 transition-colors duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl sm:text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 text-neutral-800">Dramatic Results</h3>
                    <p className="text-sm sm:text-base text-neutral-600">
                      See up to 80% improvement in acne scars and 60% reduction in fine lines after just one treatment series
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <a
                href="#assessment"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Learn More in Consultation
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl sm:text-7xl mb-4">🔬</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-800 mb-2">
                    Advanced CO2 Technology
                  </h3>
                  <p className="text-sm sm:text-base text-primary-600">
                    Professional Treatment Room
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-[200px] sm:max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg">Industry Leading</p>
                  <p className="text-xs sm:text-sm text-neutral-600">Latest CO2 technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 text-center">
            <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">80%</p>
            <p className="text-sm text-neutral-600">Scar Improvement</p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 text-center">
            <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">60%</p>
            <p className="text-sm text-neutral-600">Wrinkle Reduction</p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 text-center">
            <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">95%</p>
            <p className="text-sm text-neutral-600">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}