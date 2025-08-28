'use client';

export default function CO2Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-600 font-medium tracking-wider uppercase text-sm animate-pulse">
            Investment
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Clear, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Invest in your skin with flexible payment options and comprehensive care packages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Single Session Card */}
          <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-t-3xl"></div>
            <div className="p-8 space-y-6">
              <div>
                <p className="text-sm text-neutral-600 mb-2">Single Session</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">£350</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full consultation
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  CO2 laser treatment
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Aftercare kit included
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Follow-up support
                </li>
              </ul>
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-primary-50 transition-all duration-300"
              >
                Book Single Session
              </a>
            </div>
          </div>

          {/* Most Popular Package */}
          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">
              MOST POPULAR
            </div>
            <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-t-3xl"></div>
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-b-3xl">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-primary-600 font-medium mb-2">3 Session Package</p>
                    <div className="flex items-baseline space-x-2">
                      <p className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">£600</p>
                      <p className="text-lg text-neutral-500 line-through">£1,050</p>
                    </div>
                    <p className="text-sm text-primary-600 font-medium mt-1">Save £450</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm font-medium">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      3 full treatments
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Extended consultation
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Premium aftercare kits
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
                    Book Package Deal
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Plan Card */}
          <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-t-3xl"></div>
            <div className="p-8 space-y-6">
              <div>
                <p className="text-sm text-neutral-600 mb-2">Pay Monthly</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">£100</p>
                <p className="text-sm text-neutral-600 mt-1">per month</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  6 month plan
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  0% interest rate
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Flexible terms
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No hidden fees
                </li>
              </ul>
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-primary-50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4 text-neutral-800">What's Included in Every Package</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Comprehensive consultation
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Professional aftercare guidance
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Premium skincare products
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Follow-up support calls
            </div>
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            Contact us for personalised treatment plans and custom pricing options.
          </p>
        </div>
      </div>
    </section>
  );
}