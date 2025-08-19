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
    <section className="py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Your Questions
            <span className="gradient-text"> Answered</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-2xl shadow-lg">
              <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-primary-50 transition-colors rounded-2xl">
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <span className="text-primary-500 group-open:rotate-180 transition-transform flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-neutral-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-6">Still have questions?</p>
          <a
            href="https://www.treatwell.co.uk/place/eskeen-clinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}