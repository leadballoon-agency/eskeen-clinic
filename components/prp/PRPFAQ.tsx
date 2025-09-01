'use client';

import { useState } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';
import BookingModal from '@/components/BookingModal';

export default function PRPFAQ() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const faqs = [
    {
      question: 'How does PRP therapy work?',
      answer: 'PRP therapy uses concentrated platelets from your own blood, which contain growth factors that stimulate cell regeneration. When injected into the scalp or face, these growth factors trigger natural healing and rejuvenation processes.',
    },
    {
      question: 'Is PRP suitable for both men and women?',
      answer: 'Yes! PRP is equally effective for both men and women. It\'s particularly popular for male pattern baldness and female hair thinning, as well as facial rejuvenation for all genders.',
    },
    {
      question: 'How many sessions will I need?',
      answer: 'For optimal results, we typically recommend 3-6 sessions spaced 4-6 weeks apart. Hair restoration usually requires 4-6 sessions, while facial rejuvenation often shows great results with 3 sessions.',
    },
    {
      question: 'Is PRP treatment painful?',
      answer: 'Most patients experience minimal discomfort. We use a topical numbing cream before treatment, and the injections use very fine needles. Most describe it as mild pressure or tingling.',
    },
    {
      question: 'When will I see results?',
      answer: 'Initial improvements are often visible within 2-3 weeks. For hair restoration, new growth typically begins at 2-3 months, with full results at 6-12 months. Facial rejuvenation shows progressive improvement over 2-3 months.',
    },
    {
      question: 'Are there any side effects?',
      answer: 'Since PRP uses your own blood, side effects are minimal. You may experience mild swelling, redness, or bruising at injection sites, which typically resolves within 24-48 hours.',
    },
    {
      question: 'How long do PRP results last?',
      answer: 'Results typically last 12-18 months. We recommend maintenance sessions every 6-12 months to sustain optimal results, especially for hair restoration.',
    },
    {
      question: 'Can PRP be combined with other treatments?',
      answer: 'Yes! PRP works excellently with other treatments. It can be combined with microneedling for enhanced facial results or used alongside hair loss medications for better outcomes.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Your Questions
            <span className="gradient-text"> Answered</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-xl sm:rounded-2xl shadow-lg">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 sm:p-6 hover:bg-primary-50 transition-colors rounded-xl sm:rounded-2xl">
                <span className="font-semibold text-base sm:text-lg pr-3 sm:pr-4 text-left">{faq.question}</span>
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

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">Still have questions about PRP therapy?</p>
          <button
            onClick={() => {
              FacebookEvents.ClickBookNow('PRP Consultation', 'PRP FAQ');
              setShowBookingModal(true);
            }}
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        treatment="PRP Consultation"
      />
    </section>
  );
}