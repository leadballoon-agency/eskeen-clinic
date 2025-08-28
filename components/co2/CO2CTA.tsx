'use client';

import InteractiveConsultation from '../InteractiveConsultation';

export default function CO2CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Ready to Transform
            <span className="block gradient-text">Your Skin?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            CO2 Laser Resurfacing • Acne Scars • Wrinkles • Skin Texture • Professional Results
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">🎯 FREE Skin Analysis Included</h3>
            <p className="text-xl text-primary-100 mb-6">
              Every CO2 laser consultation includes a comprehensive skin analysis with advanced imaging - 
              see exactly what your skin needs and the results you can achieve!
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold mb-1">Advanced</p>
                <p className="text-primary-200">Skin Imaging</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">Detailed</p>
                <p className="text-primary-200">Treatment Plan</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">FREE</p>
                <p className="text-primary-200">With Every Consultation</p>
              </div>
            </div>
            <a
              href="https://www.treatwell.co.uk/place/eskeen-clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book CO2 + FREE Analysis Now
            </a>
          </div>
        </div>

        <InteractiveConsultation />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-12">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-sm">Acne Scars</h4>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-2xl mb-2">✨</div>
            <h4 className="font-semibold text-sm">Wrinkles</h4>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-2xl mb-2">💎</div>
            <h4 className="font-semibold text-sm">Skin Texture</h4>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-2xl mb-2">🌟</div>
            <h4 className="font-semibold text-sm">Sun Damage</h4>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => {
              // Scroll to assessment or trigger booking modal
              document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Ready to Start? Take Your Assessment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <p className="mt-6 text-sm text-neutral-600">
            Want to compare options first? 
            <a href="/tools" className="text-primary-600 font-medium hover:text-primary-700 ml-1">
              Explore our treatment comparison tools →
            </a>
          </p>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-neutral-600 mb-8">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligation</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Expert Advice</span>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img 
                src="https://static.wixstatic.com/media/676ae8_702c36455e8c44acb913421b1a277550~mv2.png/v1/fill/w_185,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eskeen_logo_gold_TRANSPARENT.png"
                alt="Eskeen Clinic"
                className="h-10 w-auto"
              />
            </div>
            
            <p className="text-sm text-neutral-600">
              © 2024 Eskeen Clinic | 115 Lower Richmond Road, SW15 1EX | 07849 990667
            </p>

            <a
              href="/"
              className="text-primary-600 hover:text-primary-700 transition-colors font-medium"
            >
              Back to Main Site
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}