'use client';

import { useState } from 'react';
import InteractiveConsultation from './InteractiveConsultation';
import ComingSoonVoting from './ComingSoonVoting';

const services = [
  {
    id: 'prp',
    title: 'PRP Therapy',
    description: 'Natural hair restoration and facial rejuvenation using your own platelets',
    features: ['Hair restoration', 'Facial rejuvenation', 'Natural collagen', '100% natural'],
    price: 'From £175',
    duration: '45 min',
    icon: '🩸',
    gradient: 'from-primary-400 to-primary-600',
    link: '/prp',
  },
  {
    id: 'fillers',
    title: 'Dermal Fillers',
    description: 'Restore volume and enhance facial contours with premium hyaluronic acid fillers',
    features: ['Lip enhancement', 'Cheek augmentation', 'Jawline contouring', 'Nasolabial folds'],
    price: 'From £250',
    duration: '45-60 min',
    icon: '💉',
    gradient: 'from-primary-300 to-primary-500',
  },
  {
    id: 'boosters',
    title: 'Skin Boosters',
    description: 'Deep hydration treatment for radiant, glowing skin from within',
    features: ['Profhilo', 'Seventy Hyal', 'Skin hydration', 'Collagen stimulation'],
    price: 'From £200',
    duration: '30-45 min',
    icon: '✨',
    gradient: 'from-primary-400 to-primary-600',
  },
];

const comingSoonServices = [
  {
    id: 'co2',
    title: 'CO2 Laser',
    description: 'Advanced skin resurfacing for scars, wrinkles, and texture improvement',
    features: ['Deep resurfacing', 'Scar reduction', 'Wrinkle treatment', 'Skin renewal'],
    price: 'Vote Now',
    duration: 'Coming 2025',
    icon: '🔬',
    gradient: 'from-red-500 to-orange-600',
    comingSoon: true,
  },
  {
    id: 'morpheus8',
    title: 'Morpheus8',
    description: 'RF microneedling for skin tightening and body contouring',
    features: ['Skin tightening', 'Body contouring', 'Collagen boost', 'Minimal downtime'],
    price: 'Vote Now',
    duration: 'Coming 2025',
    icon: '⚡',
    gradient: 'from-purple-500 to-pink-600',
    comingSoon: true,
  },
  {
    id: 'hifu',
    title: 'HIFU',
    description: 'Non-surgical facelift using focused ultrasound technology',
    features: ['Non-invasive lift', 'Jawline definition', 'No downtime', 'Long-lasting results'],
    price: 'Vote Now',
    duration: 'Coming 2025',
    icon: '🎯',
    gradient: 'from-blue-500 to-cyan-600',
    comingSoon: true,
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState('prp');
  const [showAssessment, setShowAssessment] = useState(false);
  const [showVoting, setShowVoting] = useState(false);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Treatments That
            <span className="gradient-text"> Transform</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Each treatment is tailored to your unique needs, ensuring natural-looking results 
            that enhance your confidence
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <span className="mr-2">👨</span> For Men
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
              <span className="mr-2">👩</span> For Women
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              <span className="mr-2">✨</span> All Genders Welcome
            </span>
          </div>
        </div>

        {/* Current Services */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-3xl p-8 transition-all duration-500 cursor-pointer flex flex-col h-full ${
                activeService === service.id ? 'shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl'
              }`}
              onClick={() => setActiveService(service.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-3xl transition-opacity group-hover:opacity-10`}></div>
              
              <div className="relative flex flex-col h-full">
                <div className="mb-6">
                  <div className={`text-5xl p-4 bg-gradient-to-br ${service.gradient} rounded-2xl bg-opacity-10 inline-block`}>
                    {service.icon}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-neutral-700">
                      <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100 mt-auto">
                  <div>
                    <p className="text-2xl font-bold gradient-text">{service.price}</p>
                    <p className="text-sm text-neutral-500">{service.duration}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowAssessment(true);
                      setTimeout(() => {
                        document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r ${service.gradient} text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div id="consultation" className="mt-16 scroll-mt-20">
          {!showAssessment ? (
            <div className="text-center bg-gradient-to-br from-primary-50 to-white rounded-3xl p-12 shadow-xl">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="text-3xl font-bold">
                  Not Sure Which Treatment Is Right For You?
                </h3>
                <p className="text-lg text-neutral-600">
                  Take our AI-powered assessment to receive personalised treatment recommendations 
                  based on your unique skin profile and goals
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => setShowAssessment(true)}
                    className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Start Your Assessment →
                  </button>
                  <span className="text-sm text-neutral-500">Takes only 2 minutes</span>
                </div>
              </div>
            </div>
          ) : (
            <InteractiveConsultation />
          )}
        </div>

        {/* Coming Soon Section - Visual Poll */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-4">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-primary-700 font-medium text-sm">Coming 2025</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Which Treatment Should We Add Next?</h3>
            <p className="text-neutral-600">Click to vote for your preferred advanced treatment</p>
          </div>

          <div className="relative">
            {/* Interactive Visual Voting Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* CO2 Laser */}
              <div 
                onClick={() => setShowVoting(true)}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 p-6 h-48 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">🔬</div>
                    <h4 className="font-bold text-lg mb-1">CO2 Laser</h4>
                    <p className="text-sm text-neutral-600">Deep resurfacing</p>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-6 h-6 bg-gradient-to-br from-red-400 to-orange-500 rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                      <span className="text-xs text-neutral-500">342 votes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Morpheus8 */}
              <div 
                onClick={() => setShowVoting(true)}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 h-48 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">⚡</div>
                    <h4 className="font-bold text-lg mb-1">Morpheus8</h4>
                    <p className="text-sm text-neutral-600">RF microneedling</p>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                      <span className="text-xs text-neutral-500">218 votes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* HIFU */}
              <div 
                onClick={() => setShowVoting(true)}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 h-48 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">🎯</div>
                    <h4 className="font-bold text-lg mb-1">HIFU</h4>
                    <p className="text-sm text-neutral-600">Non-surgical lift</p>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                      <span className="text-xs text-neutral-500">156 votes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle CTA */}
            <div className="text-center mt-6">
              <p className="text-sm text-neutral-500">
                <span className="inline-flex items-center">
                  Click any card to cast your vote
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Voting Modal */}
        {showVoting && (
          <ComingSoonVoting onClose={() => setShowVoting(false)} />
        )}
      </div>
    </section>
  );
}