'use client';

export default function PRPPricing() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Investment</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Invest in natural rejuvenation with our competitive PRP pricing
          </p>
        </div>

        {/* Hair Treatment Packages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Hair Restoration Packages</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-neutral-600 mb-2">Single Hair Session</p>
                  <p className="text-4xl font-bold gradient-text">£175</p>
                  <p className="text-sm text-primary-600 font-medium mt-1">+ Free Biotin Injection</p>
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
                    PRP hair treatment
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    FREE biotin boost
                  </li>
                </ul>
                <a
                  href="#assessment"
                  className="block text-center bg-neutral-100 text-neutral-700 px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-all duration-300"
                >
                  Start Assessment
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                POPULAR
              </div>
              <div className="relative bg-gradient-to-br from-primary-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl border-2 border-primary-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-primary-600 font-medium mb-2">3 Hair Sessions</p>
                    <div className="flex items-baseline space-x-2">
                      <p className="text-4xl font-bold gradient-text">£450</p>
                      <p className="text-lg text-neutral-500 line-through">£525</p>
                    </div>
                    <p className="text-sm text-primary-600 font-medium mt-1">+ 3 Biotin Injections</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm font-medium">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Optimal results
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Save £75
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

            <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-neutral-600 mb-2">6 Hair Sessions</p>
                  <p className="text-4xl font-bold gradient-text">£699</p>
                  <p className="text-sm text-primary-600 font-medium mt-1">+ 6 Biotin Injections</p>
                </div>
                <ul className="space-y-3">
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
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Save £351
                  </li>
                </ul>
                <a
                  href="#assessment"
                  className="block text-center bg-neutral-100 text-neutral-700 px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-all duration-300"
                >
                  Start Assessment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Facial Treatment Packages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Facial Rejuvenation Packages</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-neutral-600 mb-2">Full Face + Eyes</p>
                  <p className="text-4xl font-bold gradient-text">£175</p>
                  <p className="text-sm text-neutral-500 mt-1">Single session</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full face treatment
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Eye area included
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
                  Book Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                RECOMMENDED
              </div>
              <div className="relative bg-gradient-to-br from-primary-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl border-2 border-primary-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-primary-600 font-medium mb-2">3 Face Sessions</p>
                    <div className="flex items-baseline space-x-2">
                      <p className="text-4xl font-bold gradient-text">£450</p>
                      <p className="text-lg text-neutral-500 line-through">£525</p>
                    </div>
                    <p className="text-sm text-primary-600 font-medium mt-1">Including eyes</p>
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
                      Collagen boost
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Save £75
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

            <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-neutral-600 mb-2">6 Face Sessions</p>
                  <p className="text-4xl font-bold gradient-text">£699</p>
                  <p className="text-sm text-primary-600 font-medium mt-1">Including eyes</p>
                </div>
                <ul className="space-y-3">
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
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Save £351
                  </li>
                </ul>
                <a
                  href="#assessment"
                  className="block text-center bg-neutral-100 text-neutral-700 px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-all duration-300"
                >
                  Start Assessment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Combination Packages */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Combination Packages</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-primary-600 font-medium mb-2">Face, Eyes & Neck</p>
                  <p className="text-4xl font-bold gradient-text">£250</p>
                  <p className="text-sm text-neutral-500 mt-1">Complete facial treatment</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full face coverage
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Eye area treatment
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Neck rejuvenation
                  </li>
                </ul>
                <a
                  href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-purple-600 font-medium mb-2">Face & Hair Combo</p>
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">£350</p>
                  <p className="text-sm text-neutral-500 mt-1">Ultimate rejuvenation</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Hair restoration
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Facial rejuvenation
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Complete treatment
                  </li>
                </ul>
                <a
                  href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Book Combo
                </a>
              </div>
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