'use client';

export default function CO2FAQ() {
  const faqs = [
    {
      question: 'Is CO2 laser treatment painful?',
      answer: 'We apply numbing cream 30-45 minutes before treatment to ensure your comfort. Most clients describe the sensation as a warm tingling feeling. Nurse Elanda\'s gentle technique minimizes any discomfort.',
    },
    {
      question: 'How much downtime should I expect?',
      answer: 'Most clients experience 5-7 days of social downtime. You\'ll have redness and light peeling similar to a sunburn. We provide comprehensive aftercare instructions and products to minimize downtime.',
    },
    {
      question: 'How many treatments will I need?',
      answer: 'This depends on your specific concerns. Many clients see significant improvement after one treatment, but for optimal results, we typically recommend 3 sessions spaced 4-6 weeks apart.',
    },
    {
      question: 'When will I see results?',
      answer: 'You\'ll notice immediate skin tightening, with progressive improvement over 3-6 months as new collagen forms. The full results continue to develop as your skin regenerates.',
    },
    {
      question: 'Is CO2 laser safe for all skin types?',
      answer: 'CO2 laser is most suitable for lighter skin tones. During your consultation, Nurse Elanda will assess your skin type and recommend the best treatment approach for you.',
    },
    {
      question: 'What\'s the difference between CO2 and other lasers?',
      answer: 'CO2 laser is the gold standard for skin resurfacing. It penetrates deeper than other lasers, stimulating more collagen production and delivering more dramatic results for scars, wrinkles, and texture.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-600 font-medium tracking-wider uppercase text-sm animate-pulse">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Your Questions
            <span className="gradient-text"> Answered</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about CO2 laser therapy at Eskeen Clinic
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 sm:p-6 hover:bg-primary-50 transition-colors rounded-2xl">
                <span className="font-medium text-base sm:text-lg pr-3 sm:pr-4">{faq.question}</span>
                <span className="text-primary-500 group-open:rotate-180 transition-transform flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-neutral-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-neutral-600 mb-6">
            Book a free consultation to discuss your specific needs and concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.treatwell.co.uk/place/eskeen-clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book Free Consultation
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="tel:07849990667"
              className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-primary-50 transition-all duration-300"
            >
              Call Now: 07849 990667
            </a>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div className="text-2xl sm:text-3xl mb-3">🎯</div>
            <h4 className="font-semibold text-sm sm:text-base mb-2">Expert Assessment</h4>
            <p className="text-xs sm:text-sm text-neutral-600">Personalized skin analysis and treatment planning</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div className="text-2xl sm:text-3xl mb-3">💎</div>
            <h4 className="font-semibold text-sm sm:text-base mb-2">Premium Care</h4>
            <p className="text-xs sm:text-sm text-neutral-600">Professional grade treatments and aftercare</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div className="text-2xl sm:text-3xl mb-3">✨</div>
            <h4 className="font-semibold text-sm sm:text-base mb-2">Proven Results</h4>
            <p className="text-xs sm:text-sm text-neutral-600">98% client satisfaction with visible improvements</p>
          </div>
        </div>
      </div>
    </section>
  );
}