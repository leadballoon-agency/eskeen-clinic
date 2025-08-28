'use client';

import { useState } from 'react';

export default function CO2Stories() {
  const [activeStory, setActiveStory] = useState(0);
  
  const stories = [
    {
      name: "Sarah, 32",
      location: "Putney",
      concern: "Severe Acne Scarring",
      quote: "I used to dread video calls and avoid social events. Now I wake up confident, no makeup needed.",
      journey: "15 years of hiding behind heavy foundation",
      result: "80% improvement in deep scarring",
      timeframe: "3 months",
      rating: 5,
      image: "👩‍💼",
      transformation: {
        before: ["Avoided photos", "Heavy makeup daily", "Low confidence"],
        after: ["Love selfies", "Minimal makeup", "Radiating confidence"]
      }
    },
    {
      name: "Michael, 45",
      location: "Chelsea",
      concern: "Deep Wrinkles & Sun Damage",
      quote: "My wife says I look 10 years younger. My skin feels like it did in my thirties.",
      journey: "Years of sun damage from sailing",
      result: "Dramatic skin tightening and renewal",
      timeframe: "4 months",
      rating: 5,
      image: "👨‍💼",
      transformation: {
        before: ["Deep forehead lines", "Crow's feet", "Leather-like texture"],
        after: ["Smooth forehead", "Softened lines", "Supple, healthy skin"]
      }
    },
    {
      name: "Amira, 28",
      location: "Fulham",
      concern: "Ice Pick Scars",
      quote: "For the first time in my adult life, I feel beautiful without filters.",
      journey: "10 years of failed treatments",
      result: "Life-changing transformation",
      timeframe: "6 months",
      rating: 5,
      image: "👩",
      transformation: {
        before: ["Deep pitted scars", "Uneven texture", "Always used filters"],
        after: ["Smooth complexion", "Even skin tone", "Filter-free confidence"]
      }
    },
    {
      name: "James, 38",
      location: "Richmond",
      concern: "Rolling Acne Scars",
      quote: "I finally proposed to my girlfriend - I was waiting to feel confident enough for wedding photos.",
      journey: "20 years of self-consciousness",
      result: "Complete skin resurfacing success",
      timeframe: "5 months",
      rating: 5,
      image: "🤵",
      transformation: {
        before: ["Avoided close-ups", "Shadowy scars", "Dating anxiety"],
        after: ["Photo ready", "Smooth skin", "Engaged and happy"]
      }
    }
  ];

  const currentStory = stories[activeStory];

  return (
    <section id="real-stories" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-green-700 font-medium text-sm">Real Patients • Real Results</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Stories of
            <span className="gradient-text"> Transformation</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            These brave individuals trusted us with their skin. Now they're living their best lives.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Story Content */}
            <div className="p-8 sm:p-12 order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{currentStory.image}</div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800">{currentStory.name}</h3>
                  <p className="text-neutral-600">{currentStory.location} • {currentStory.concern}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex mb-2">
                  {[...Array(currentStory.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl text-neutral-700 font-medium italic mb-4">
                  "{currentStory.quote}"
                </blockquote>
                <p className="text-sm text-neutral-600 mb-6">
                  Journey: {currentStory.journey}
                </p>
              </div>
              
              {/* Transformation Timeline */}
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-4 text-neutral-800">Transformation Timeline</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-red-600 mb-2">Before Treatment</p>
                    <ul className="space-y-2">
                      {currentStory.transformation.before.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-600">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-600 mb-2">After {currentStory.timeframe}</p>
                    <ul className="space-y-2">
                      {currentStory.transformation.after.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-600">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <div className="bg-primary-100 rounded-full px-4 py-2">
                  <p className="text-sm font-medium text-primary-700">
                    Result: {currentStory.result}
                  </p>
                </div>
                <p className="text-sm text-neutral-600">
                  Treatment completed in {currentStory.timeframe}
                </p>
              </div>
            </div>
            
            {/* Visual Representation */}
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 sm:p-12 flex items-center justify-center order-1 lg:order-2">
              <div className="text-center">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <p className="text-6xl sm:text-8xl mb-2">{currentStory.image}</p>
                      <p className="text-2xl sm:text-3xl font-bold gradient-text">
                        {currentStory.result.match(/\d+/)?.[0] || '100'}%
                      </p>
                      <p className="text-sm text-neutral-600">Improvement</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="mt-8 space-y-2">
                  <p className="text-sm text-neutral-700 font-medium">
                    Individual results may vary
                  </p>
                  <p className="text-xs text-neutral-600">
                    All testimonials are from real patients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {stories.map((story, index) => (
            <button
              key={index}
              onClick={() => setActiveStory(index)}
              className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                index === activeStory
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-neutral-700 hover:shadow-md hover:scale-105'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{story.image}</span>
                <div className="text-left">
                  <p className="font-semibold text-sm">{story.name}</p>
                  <p className="text-xs opacity-80">{story.concern}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of patients who've transformed their skin and their lives with CO2 laser therapy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.treatwell.co.uk/place/eskeen-clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Transformation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#your-assessment"
              className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-primary-50 transition-all duration-300"
            >
              Take the Assessment First
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}