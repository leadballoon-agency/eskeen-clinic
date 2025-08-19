'use client';

export default function CO2Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-primary-600 font-medium tracking-wider uppercase">The Solution</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              CO2 Laser:
              <span className="block gradient-text">The Gold Standard in Skin Resurfacing</span>
            </h2>
            <p className="text-lg text-neutral-600">
              CO2 laser therapy is the most powerful and effective treatment for deep skin rejuvenation. 
              Using advanced fractional technology, it creates microscopic channels in your skin that 
              trigger your body's natural healing response.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Precision Treatment</h3>
                  <p className="text-neutral-600">
                    Targets specific areas with microscopic accuracy, leaving surrounding tissue intact for faster healing
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Collagen Stimulation</h3>
                  <p className="text-neutral-600">
                    Activates your body's natural collagen production for months after treatment, continuously improving skin quality
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Dramatic Results</h3>
                  <p className="text-neutral-600">
                    See up to 80% improvement in acne scars and 60% reduction in fine lines after just one treatment series
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Learn More in Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/clinic/inside2.webp"
                alt="Eskeen Clinic Treatment Room"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Industry Leading</p>
                  <p className="text-sm text-neutral-600">Latest CO2 technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}