'use client';

export default function PRPProcess() {
  const steps = [
    {
      number: '01',
      title: 'Blood Draw',
      description: 'A small amount of blood is drawn from your arm, just like a routine blood test',
      icon: '💉',
    },
    {
      number: '02',
      title: 'Centrifuge',
      description: 'Your blood is spun in a centrifuge to separate the platelet-rich plasma',
      icon: '🔬',
    },
    {
      number: '03',
      title: 'Activation',
      description: 'The concentrated platelets are activated to release growth factors',
      icon: '✨',
    },
    {
      number: '04',
      title: 'Treatment',
      description: 'PRP is injected into target areas (scalp or face) for rejuvenation',
      icon: '🎯',
    },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase">The Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Simple, Safe,
            <span className="gradient-text"> Scientific</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            PRP therapy is a quick, minimally invasive procedure that takes less than an hour
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
              <h3 className="text-2xl font-bold mb-4">What Makes PRP Special?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-200 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold">Your Own Blood:</span> No risk of allergic reactions or rejection
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-200 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold">Growth Factors:</span> Contains 5x the normal concentration of platelets
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-200 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold">Natural Healing:</span> Stimulates your body's own regeneration
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">Recovery Timeline:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="font-semibold mr-2">Day 1:</span> Mild redness at injection sites
                </li>
                <li className="flex items-center">
                  <span className="font-semibold mr-2">Day 2-3:</span> Resume normal activities
                </li>
                <li className="flex items-center">
                  <span className="font-semibold mr-2">Week 2-4:</span> Initial improvements visible
                </li>
                <li className="flex items-center">
                  <span className="font-semibold mr-2">Month 2-3:</span> Optimal results appear
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}