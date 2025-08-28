'use client';

import { useState, useEffect } from 'react';

export default function CO2DynamicPricing() {
  const [personalizedData, setPersonalizedData] = useState<any>(null);
  const [showPersonalizedOffer, setShowPersonalizedOffer] = useState(false);

  useEffect(() => {
    // Check for existing assessment data
    const stored = localStorage.getItem('co2_assessment');
    if (stored) {
      const data = JSON.parse(stored);
      setPersonalizedData(data);
      setShowPersonalizedOffer(true);
    }

    // Listen for assessment completion
    const handleAssessmentComplete = (event: any) => {
      setPersonalizedData(event.detail);
      setShowPersonalizedOffer(true);
    };

    const handleAssessmentReset = () => {
      setPersonalizedData(null);
      setShowPersonalizedOffer(false);
    };

    window.addEventListener('assessmentCompleted', handleAssessmentComplete);
    window.addEventListener('assessmentReset', handleAssessmentReset);

    return () => {
      window.removeEventListener('assessmentCompleted', handleAssessmentComplete);
      window.removeEventListener('assessmentReset', handleAssessmentReset);
    };
  }, []);

  const getPricingForConcern = (concern: string) => {
    const pricing: Record<string, any> = {
      'acne-scars': {
        sessions: 3,
        originalPrice: 1800,
        discountPrice: 1500,
        perSession: 500,
        savings: 300
      },
      'wrinkles': {
        sessions: 2,
        originalPrice: 1200,
        discountPrice: 1000,
        perSession: 500,
        savings: 200
      },
      'texture': {
        sessions: 2,
        originalPrice: 1200,
        discountPrice: 950,
        perSession: 475,
        savings: 250
      },
      'sun-damage': {
        sessions: 3,
        originalPrice: 1800,
        discountPrice: 1400,
        perSession: 467,
        savings: 400
      }
    };
    return pricing[concern] || pricing['acne-scars'];
  };

  const personalizedPricing = personalizedData ? getPricingForConcern(personalizedData.concern) : null;

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            {personalizedData ? 'Your Personalized Pricing' : 'Treatment Pricing'}
          </h2>
          <p className="text-neutral-600">
            {personalizedData 
              ? `Based on your assessment for ${personalizedData.concern.replace('-', ' ')}`
              : 'Transparent pricing with flexible payment options'}
          </p>
        </div>

        {/* Personalized Offer Banner */}
        {showPersonalizedOffer && personalizedPricing && (
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-6 mb-8 text-center">
            <h3 className="text-2xl font-bold mb-2">
              🎉 Your Exclusive Assessment Offer
            </h3>
            <p className="text-lg mb-4">
              Save £{personalizedPricing.savings} on your complete treatment package
            </p>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-4 inline-block">
              <p className="text-sm mb-1">Valid for 48 hours</p>
              <p className="text-2xl font-bold">
                £{personalizedPricing.discountPrice} for {personalizedPricing.sessions} sessions
              </p>
              <p className="text-sm mt-1">
                (Usually £{personalizedPricing.originalPrice})
              </p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {/* Personalized Recommended Package */}
          {personalizedData && (
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended for You
                </span>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-primary-500 relative pt-12">
                <h3 className="text-2xl font-bold mb-2">Complete Package</h3>
                <p className="text-neutral-600 mb-4">
                  {personalizedPricing?.sessions} sessions for your {personalizedData.concern.replace('-', ' ')}
                </p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary-600">
                    £{personalizedPricing?.discountPrice}
                  </p>
                  <p className="text-neutral-500 line-through">
                    £{personalizedPricing?.originalPrice}
                  </p>
                  <p className="text-green-600 font-semibold">
                    Save £{personalizedPricing?.savings}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Full consultation included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Aftercare products included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">6-month follow-up support</span>
                  </li>
                </ul>
                
                <a
                  href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-full font-medium text-center hover:shadow-xl transition-all duration-300"
                >
                  Book This Package
                </a>
              </div>
            </div>
          )}
          
          {/* Standard Pricing Options */}
          <div className={personalizedData ? '' : 'md:col-span-1'}>
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-2">Single Session</h3>
              <p className="text-neutral-600 mb-4">Try it first</p>
              
              <div className="mb-6">
                <p className="text-3xl font-bold">£600</p>
                <p className="text-neutral-500">per session</p>
              </div>
              
              <ul className="space-y-2 mb-6 text-sm text-neutral-600">
                <li>• Full consultation</li>
                <li>• Single treatment</li>
                <li>• Basic aftercare</li>
              </ul>
              
              <button className="block w-full border-2 border-neutral-300 text-neutral-700 py-3 rounded-full font-medium text-center hover:border-primary-400 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          <div className={personalizedData ? '' : 'md:col-span-1'}>
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-2">3 Session Package</h3>
              <p className="text-neutral-600 mb-4">Most popular</p>
              
              <div className="mb-6">
                <p className="text-3xl font-bold">£1,500</p>
                <p className="text-neutral-500">£500 per session</p>
                <p className="text-green-600 text-sm">Save £300</p>
              </div>
              
              <ul className="space-y-2 mb-6 text-sm text-neutral-600">
                <li>• Full consultation</li>
                <li>• 3 treatments</li>
                <li>• Complete aftercare kit</li>
              </ul>
              
              <button className="block w-full border-2 border-primary-500 text-primary-600 py-3 rounded-full font-medium text-center hover:bg-primary-50 transition-all duration-300">
                Choose Package
              </button>
            </div>
          </div>
        </div>
        
        {/* Payment Options */}
        <div className="mt-12 bg-white rounded-3xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Flexible Payment Options</h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl mb-2">💳</div>
              <h4 className="font-semibold mb-1">Pay in Full</h4>
              <p className="text-sm text-neutral-600">Save 10% extra</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📅</div>
              <h4 className="font-semibold mb-1">Monthly Plans</h4>
              <p className="text-sm text-neutral-600">0% interest available</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💰</div>
              <h4 className="font-semibold mb-1">Pay Per Session</h4>
              <p className="text-sm text-neutral-600">Spread the cost</p>
            </div>
          </div>
          
          {!personalizedData && (
            <div className="mt-8">
              <p className="text-neutral-600 mb-4">
                Get personalized pricing based on your specific needs
              </p>
              <a
                href="#assessment"
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Take the assessment for your custom quote →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}