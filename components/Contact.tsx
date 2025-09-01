'use client';

import { FacebookEvents } from '@/lib/facebook-events';

export default function Contact() {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      details: ['115 Lower Richmond Road', 'Putney, London SW15 1EX'],
    },
    {
      icon: '📞',
      title: 'Contact',
      details: ['07849 990667', 'Kerry will qualify & book you'],
    },
    {
      icon: '🕐',
      title: 'Hours',
      details: ['Monday - Saturday', 'By appointment only'],
    },
  ];

  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'Start with our quick skin assessment to receive personalised recommendations. After your assessment, Kerry, our booking manager, will call you to qualify your needs and schedule your appointment.',
    },
    {
      question: 'Do you offer consultations?',
      answer: 'Yes! We offer free consultations to discuss your goals and create a personalised treatment plan.',
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'Your first visit includes a thorough consultation where we discuss your medical history, aesthetic goals, and recommend the best treatment options for you.',
    },
    {
      question: 'Are the treatments painful?',
      answer: 'We use advanced techniques and numbing agents to ensure your comfort. Most clients report minimal to no discomfort.',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Start Your
            <span className="gradient-text"> Beauty Journey</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Ready to enhance your natural beauty? Book your consultation with Nurse Elanda today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Visit Our Clinic</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl sm:text-3xl">{info.icon}</div>
                    <div>
                      <p className="font-semibold text-base sm:text-lg mb-1">{info.title}</p>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm sm:text-base text-neutral-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl">
                <p className="font-semibold mb-3">Why Choose Eskeen Clinic?</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-neutral-700">
                    <span className="text-primary-500 mr-2">✓</span>
                    Experienced, qualified practitioner
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <span className="text-primary-500 mr-2">✓</span>
                    Premium quality products only
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <span className="text-primary-500 mr-2">✓</span>
                    Personalised treatment plans
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <span className="text-primary-500 mr-2">✓</span>
                    Comfortable, modern clinic
                  </li>
                </ul>
              </div>

              <a
                href="#consultation"
                onClick={() => FacebookEvents.ClickBookNow('Consultation', 'Contact Section')}
                className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Start Your Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-100">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none p-3 sm:p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                      <span className="font-medium text-sm sm:text-base pr-3 sm:pr-4">{faq.question}</span>
                      <span className="text-primary-500 group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-sm sm:text-base text-neutral-600">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">New Client Welcome Gift</h3>
              <p className="text-sm sm:text-base text-primary-100 mb-4 sm:mb-6">
                Start your journey with our exclusive welcome package
              </p>
              <div className="space-y-3">
                <div className="bg-white/20 backdrop-blur rounded-xl p-2.5 sm:p-3">
                  <p className="font-semibold text-sm sm:text-base">✨ Complimentary skin analysis consultation</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-2.5 sm:p-3">
                  <p className="font-semibold text-sm sm:text-base">💎 Free luxury aftercare kit with first treatment</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-2.5 sm:p-3">
                  <p className="font-semibold text-sm sm:text-base">🎁 Exclusive member benefits programme</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center">
              <img 
                src="https://static.wixstatic.com/media/676ae8_702c36455e8c44acb913421b1a277550~mv2.png/v1/fill/w_185,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eskeen_logo_gold_TRANSPARENT.png"
                alt="Eskeen Clinic"
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            
            <p className="text-xs sm:text-sm text-neutral-600 text-center md:text-left">
              © 2024 Eskeen Clinic. All rights reserved. | Professional Aesthetics by Nurse Elanda
            </p>

            <div className="flex space-x-4">
              <a href="/privacy" className="text-xs sm:text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xs sm:text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}