'use client';

import InteractiveConsultation from '../InteractiveConsultation';

export default function CO2CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Ready to Transform
            <span className="block bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              Your Skin?
            </span>
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Take our quick assessment to see if CO2 laser is right for you
          </p>
        </div>

        <InteractiveConsultation />

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-primary-200">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligation</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Expert Advice</span>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img 
                src="https://static.wixstatic.com/media/676ae8_702c36455e8c44acb913421b1a277550~mv2.png/v1/fill/w_185,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eskeen_logo_gold_TRANSPARENT.png"
                alt="Eskeen Clinic"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            
            <p className="text-sm text-primary-200">
              © 2024 Eskeen Clinic | 115 Lower Richmond Road, SW15 1EX | 07849 990667
            </p>

            <a
              href="/"
              className="text-primary-200 hover:text-white transition-colors"
            >
              Back to Main Site
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}