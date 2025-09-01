'use client';

import PRPAssessment from './PRPAssessment';

export default function PRPAssessmentSection() {
  return (
    <section id="assessment" className="relative py-24 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-primary-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-400 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eye-catching header */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                ✨ PERSONALIZED TREATMENT PLAN
              </div>
            </div>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="block text-neutral-800">Discover Your Perfect</span>
            <span className="block gradient-text mt-2">PRP Treatment Plan</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
            Take our 60-second assessment to get personalised recommendations and pricing
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-neutral-700">No Obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-neutral-700">Instant Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-neutral-700">Expert Guidance</span>
            </div>
          </div>
        </div>

        {/* Assessment Component */}
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 text-6xl opacity-10">💉</div>
          <div className="absolute -bottom-6 -right-6 text-6xl opacity-10">✨</div>
          
          <PRPAssessment />
        </div>

        {/* Bottom CTA for those who skip */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500 mb-4">
            Prefer to speak with our expert directly?
          </p>
          <a 
            href="tel:07846888649"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call 07846 888649
          </a>
        </div>
      </div>
    </section>
  );
}