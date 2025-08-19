'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Isobel',
    treatment: 'Cosmetic Injectables',
    rating: 5,
    comment: 'I recently switched to Eskeen and absolutely love it. Nurse Elanda is phenomenal at what she does, every treatment has been the best I\'ve ever had and always super professional. She understand exactly what I need and tailors treatments to me. I\'d recommend her to everyone!',
    date: '2 months ago',
  },
  {
    id: 2,
    name: 'Maria',
    treatment: 'Dermal Fillers',
    rating: 5,
    comment: 'Got lip fillers for the first time and I\'m so in love with the results! Nurse Elanda was absolutely amazing — so gentle, professional, and she did them perfectly. I couldn\'t be happier! 💋✨',
    date: '2 months ago',
  },
  {
    id: 3,
    name: 'Natasa',
    treatment: 'Dermal Fillers',
    rating: 5,
    comment: 'I recently had lip filler done with Elanda and I couldn\'t be happier! Elanda has such a light hand and made me feel so comfortable throughout. I absolutely love the results — my lips look amazing and beautiful. Highly recommend!',
    date: '1 month ago',
  },
  {
    id: 4,
    name: 'Elizabeth',
    treatment: 'Profhilo',
    rating: 5,
    comment: 'I had Profhilo with Elanda at Eskeen and couldn\'t be happier. She explained everything clearly, made me feel totally comfortable, and the results are amazing—my skin looks fresher and more hydrated. I was glowing on my holiday! Highly recommend her!',
    date: '2 months ago',
  },
  {
    id: 5,
    name: 'Nisha',
    treatment: 'Botox',
    rating: 5,
    comment: 'Both Elanda and Mavra were very professional, and knowledgeable. I had Botox done with Elanda today, and she took the time to listen to my concerns. She provided thorough, detailed advice on the treatments that would best suit my needs, and explained everything clearly and kindly.',
    date: '1 month ago',
  },
  {
    id: 6,
    name: 'Charlotte',
    treatment: 'Dermal Fillers',
    rating: 5,
    comment: 'Elanda was fantastic and so kind, she listened to my concerns really well',
    date: '1 month ago',
  },
];

const beforeAfterResults = [
  {
    id: 1,
    treatment: 'Lip Enhancement',
    description: 'Natural lip enhancement with 1ml dermal filler',
    improvement: '40% volume increase',
  },
  {
    id: 2,
    treatment: 'Skin Rejuvenation',
    description: 'Profhilo treatment for skin quality',
    improvement: '60% hydration boost',
  },
  {
    id: 3,
    treatment: 'Facial Contouring',
    description: 'Jawline and cheek enhancement',
    improvement: 'Defined contours',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Client Success Stories</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Real Results,
            <span className="gradient-text"> Real People</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about their experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Real Client Reviews</h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60"></div>
                  <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="font-semibold text-lg bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-primary-600 font-medium">{testimonial.treatment}</p>
                      </div>
                      <div className="flex text-yellow-400 drop-shadow-sm">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-lg">★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-neutral-700 mb-3 leading-relaxed">{testimonial.comment}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-neutral-500">{testimonial.date}</p>
                      <div className="flex items-center text-xs text-primary-600">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Review
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Treatment Results</h3>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl mb-4">📸</p>
                  <p className="text-primary-700 font-medium">Before & After Gallery</p>
                  <p className="text-sm text-primary-600 mt-2">Available during consultation</p>
                </div>
              </div>

              <div className="space-y-4">
                {beforeAfterResults.map((result, index) => (
                  <div
                    key={result.id}
                    className={`p-4 rounded-xl transition-all cursor-pointer ${
                      activeIndex === index
                        ? 'bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-300'
                        : 'bg-neutral-50 hover:bg-neutral-100'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">{result.treatment}</p>
                        <p className="text-sm text-neutral-600 mt-1">{result.description}</p>
                      </div>
                      <span className="text-xs bg-primary-500 text-white px-3 py-1 rounded-full">
                        {result.improvement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-xl">
                <p className="text-sm text-primary-700">
                  <strong>Privacy Notice:</strong> We respect our clients' privacy. 
                  Full before/after photos are available during your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/30 to-primary-600/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Venue Excellence</h3>
                <div className="text-6xl font-bold gradient-text">5.0</div>
                <div className="flex justify-center text-yellow-400 text-2xl">
                  {'★★★★★'}
                </div>
                <p className="text-neutral-600 font-medium">56 Verified Reviews</p>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🏛️</div>
                    <p className="text-sm font-medium text-neutral-700">Ambience</p>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">✨</div>
                    <p className="text-sm font-medium text-neutral-700">Cleanliness</p>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">👩‍⚕️</div>
                    <p className="text-sm font-medium text-neutral-700">Staff</p>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm text-primary-600 font-medium">
                    "Consistently rated 5 stars across all categories"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Join Our Happy Clients</h3>
            <p className="text-primary-100 mb-6">
              Experience the difference of personalised aesthetic care with Nurse Elanda and team
            </p>
            <div className="space-y-3">
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-primary-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book Your Treatment
              </a>
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                Read All 56 Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}