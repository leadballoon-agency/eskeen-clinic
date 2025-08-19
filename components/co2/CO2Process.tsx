'use client';

export default function CO2Process() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Nurse Elanda assesses your skin and creates a personalised treatment plan',
      icon: '💬',
    },
    {
      number: '02',
      title: 'Preparation',
      description: 'Numbing cream applied to ensure your complete comfort during treatment',
      icon: '🧴',
    },
    {
      number: '03',
      title: 'Treatment',
      description: '30-45 minute precise laser application targeting your specific concerns',
      icon: '✨',
    },
    {
      number: '04',
      title: 'Aftercare',
      description: 'Comprehensive aftercare kit and follow-up support for optimal results',
      icon: '💝',
    },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase">The Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Your Journey to
            <span className="gradient-text"> Perfect Skin</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Simple, comfortable, and completely tailored to you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent z-0" />
              )}
              
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-primary-200">{step.number}</span>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Recovery Timeline</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold mr-3">Day 1-3:</span>
                  <span className="text-primary-100">Mild redness and warmth (like sunburn)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">Day 4-7:</span>
                  <span className="text-primary-100">Light peeling begins, skin renewal starts</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">Week 2:</span>
                  <span className="text-primary-100">Fresh, glowing skin emerges</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">Month 1-3:</span>
                  <span className="text-primary-100">Continued improvement as collagen builds</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">What's Included:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pre-treatment consultation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Numbing cream application
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full aftercare kit
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Follow-up support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}