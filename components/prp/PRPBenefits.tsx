'use client';

import PRPAssessment from './PRPAssessment';

export default function PRPBenefits() {
  const hairBenefits = [
    { title: 'Stimulates Hair Follicles', description: 'Activates dormant follicles to promote new growth' },
    { title: 'Thickens Existing Hair', description: 'Increases hair shaft diameter for fuller appearance' },
    { title: 'Reduces Hair Loss', description: 'Strengthens hair roots to prevent further loss' },
    { title: 'Natural Results', description: 'Uses your own blood for safe, natural treatment' },
  ];

  const faceBenefits = [
    { title: 'Collagen Production', description: 'Naturally boosts collagen for firmer skin' },
    { title: 'Improves Texture', description: 'Smooths fine lines and evens skin tone' },
    { title: 'Natural Glow', description: 'Enhances skin radiance from within' },
    { title: 'Long-lasting Results', description: 'Effects continue improving for months' },
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Why Choose PRP</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Natural Treatment,
            <span className="gradient-text"> Remarkable Results</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">💇‍♂️</span>
              </div>
              <h3 className="text-2xl font-bold">Hair Restoration Benefits</h3>
            </div>
            
            <div className="space-y-4">
              {hairBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-800">{benefit.title}</p>
                    <p className="text-neutral-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary-100 rounded-xl">
              <p className="text-sm text-primary-700">
                <strong>Ideal for:</strong> Men and women experiencing thinning hair, receding hairlines, or pattern baldness
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold">Facial Rejuvenation Benefits</h3>
            </div>
            
            <div className="space-y-4">
              {faceBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-800">{benefit.title}</p>
                    <p className="text-neutral-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary-100 rounded-xl">
              <p className="text-sm text-primary-700">
                <strong>Perfect for:</strong> Anyone seeking natural facial rejuvenation without synthetic fillers
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16" id="assessment">
          <h3 className="text-2xl font-bold text-center mb-8">Find Your Perfect PRP Treatment</h3>
          <PRPAssessment />
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-primary-100">Natural Treatment</p>
              <p className="text-sm text-primary-200 mt-1">Using your own platelets</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3-6</div>
              <p className="text-primary-100">Sessions Recommended</p>
              <p className="text-sm text-primary-200 mt-1">For optimal results</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45min</div>
              <p className="text-primary-100">Treatment Time</p>
              <p className="text-sm text-primary-200 mt-1">Quick and comfortable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}