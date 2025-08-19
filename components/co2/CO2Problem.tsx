'use client';

export default function CO2Problem() {
  const problems = [
    {
      title: 'Acne Scars',
      description: 'Deep pitted scars that won\'t respond to creams or serums',
      icon: '😔',
    },
    {
      title: 'Fine Lines & Wrinkles',
      description: 'Aging signs that make you look older than you feel',
      icon: '👵',
    },
    {
      title: 'Uneven Texture',
      description: 'Rough, bumpy skin that affects your confidence',
      icon: '😣',
    },
    {
      title: 'Sun Damage',
      description: 'Dark spots and pigmentation from years of sun exposure',
      icon: '☀️',
    },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Are These Skin Concerns
            <span className="block gradient-text">Holding You Back?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            You've tried everything - expensive creams, serums, facials - but nothing seems to work. 
            Your skin concerns are deeper than surface level, and they need a more powerful solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="font-bold text-lg mb-2">{problem.title}</h3>
              <p className="text-neutral-600 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              You Deserve Better Than Temporary Solutions
            </h3>
            <p className="text-primary-100 mb-6">
              CO2 laser therapy goes deep beneath the surface to stimulate your body's natural 
              collagen production, creating lasting change from within.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>FDA Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Clinically Proven</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Long-lasting Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}