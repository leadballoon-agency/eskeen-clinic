'use client';

export default function PRPPricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Investment</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Invest in natural rejuvenation with our competitive PRP pricing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-neutral-600 mb-2">Single Session</p>
                <p className="text-4xl font-bold gradient-text">£320</p>
                <p className="text-sm text-neutral-500 mt-1">Per treatment</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full consultation
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  PRP preparation & injection
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Aftercare support
                </li>
              </ul>
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-neutral-100 text-neutral-700 px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-all duration-300"
              >
                Book Single
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              RECOMMENDED
            </div>
            <div className="relative bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 shadow-xl border-2 border-primary-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-primary-600 font-medium mb-2">3 Session Package</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-4xl font-bold gradient-text">£900</p>
                    <p className="text-lg text-neutral-500 line-through">£960</p>
                  </div>
                  <p className="text-sm text-primary-600 font-medium mt-1">Save £60</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm font-medium">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    3 full treatments
                  </li>
                  <li className="flex items-center text-sm font-medium">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Optimal for hair restoration
                  </li>
                  <li className="flex items-center text-sm font-medium">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Perfect for facial rejuvenation
                  </li>
                  <li className="flex items-center text-sm font-medium">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Priority booking
                  </li>
                </ul>
                <a
                  href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Book Package
                </a>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-neutral-600 mb-2">6 Session Package</p>
                <p className="text-4xl font-bold gradient-text">£1,800</p>
                <p className="text-sm text-primary-600 font-medium mt-1">Save £120</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  6 full treatments
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Maximum results
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Best value
                </li>
              </ul>
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-neutral-100 text-neutral-700 px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose PRP at Eskeen Clinic?</h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-3xl mb-2">👩‍⚕️</div>
              <p className="font-semibold">Expert Care</p>
              <p className="text-sm text-primary-100">With Nurse Elanda</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔬</div>
              <p className="font-semibold">Latest Technology</p>
              <p className="text-sm text-primary-100">Advanced centrifuge</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✨</div>
              <p className="font-semibold">Natural Results</p>
              <p className="text-sm text-primary-100">Your own platelets</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏆</div>
              <p className="font-semibold">Proven Success</p>
              <p className="text-sm text-primary-100">95% satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}