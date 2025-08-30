'use client';

import { useEffect, useRef } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f9a8d4' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-primary-700 font-medium text-xs sm:text-sm">Advanced Aesthetics in London</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Enhance Your
              <span className="block gradient-text mt-2">Natural Beauty</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed">
              Experience personalised aesthetic treatments with our expert practitioners. 
              Specialising in treatments for all genders, from masculine enhancements 
              to feminine beauty and everything in between.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#consultation"
                onClick={() => FacebookEvents.ClickBookNow('General Assessment', 'Homepage Hero')}
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Assessment
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-6 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base hover:bg-primary-50 transition-all duration-300"
              >
                View Treatments
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="flex text-yellow-400">
                    {'★★★★★'}
                  </div>
                  <p className="text-sm text-neutral-600">5.0 Treatwell</p>
                </div>
                <div className="text-neutral-300">|</div>
                <div className="text-center">
                  <div className="flex text-yellow-400">
                    {'★★★★★'}
                  </div>
                  <p className="text-sm text-neutral-600">36 Google Reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={videoRef} className="relative">
            <div className="relative h-[600px] flex items-center justify-center p-8">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl"></div>
              
              {/* Polaroid Photos Container - centered vertically */}
              <div className="relative flex items-center justify-center h-full">
                {/* Elanda's Polaroid - tilted left */}
                <div className="absolute left-0 transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:z-20 hover:scale-105">
                  <div className="bg-white p-3 rounded-lg shadow-2xl">
                    <div className="w-56 h-72 overflow-hidden rounded">
                      <img
                        src="/images/Mavra.jpg"
                        alt="Nurse Elanda"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-3 pb-2 text-center">
                      <p className="font-serif text-2xl text-neutral-700 italic">𝓔𝓵𝓪𝓷𝓭𝓪</p>
                      <p className="text-xs text-neutral-500">Nurse Practitioner</p>
                    </div>
                  </div>
                </div>

                {/* Mavra's Polaroid - tilted right, overlapping */}
                <div className="absolute right-0 transform rotate-6 hover:rotate-0 transition-all duration-500 hover:z-20 hover:scale-105">
                  <div className="bg-white p-3 rounded-lg shadow-2xl">
                    <div className="w-56 h-72 overflow-hidden rounded">
                      <img
                        src="/images/Elanda.jpg"
                        alt="Mavra"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-3 pb-2 text-center">
                      <p className="font-serif text-2xl text-neutral-700 italic">𝓜𝓪𝓿𝓻𝓪</p>
                      <p className="text-xs text-neutral-500">Licensed Prescriber</p>
                    </div>
                  </div>
                </div>

                {/* Paper clip decoration - connecting the photos */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="w-10 h-14 border-4 border-primary-400 rounded-full rotate-12 bg-white/50 backdrop-blur-sm"></div>
                </div>
              </div>

              {/* Info Card Below */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">
                      Your Expert Practitioners
                    </h3>
                    <div className="flex justify-center items-center space-x-2 text-primary-600">
                      <span className="font-medium">Russian Lips</span>
                      <span className="text-primary-300">•</span>
                      <span className="font-medium">NAD+ Therapy</span>
                      <span className="text-primary-300">•</span>
                      <span className="font-medium">Facial Balancing</span>
                    </div>
                    <div className="mt-4 inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">18+</span>
                      </div>
                      <span className="text-sm text-neutral-700 font-medium">Years Combined Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-neutral-700">📍 Putney, London</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-primary-300 to-primary-500 rounded-full animate-float animation-delay-2000 opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}