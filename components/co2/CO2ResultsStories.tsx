'use client';

import { useState } from 'react';

export default function CO2ResultsStories() {
  const [activeView, setActiveView] = useState<'stats' | 'stories'>('stats');
  const [activeStory, setActiveStory] = useState(0);
  
  const stories = [
    {
      name: "Sarah, 32",
      concern: "Severe Acne Scarring",
      quote: "I used to dread video calls. Now I wake up confident, no makeup needed.",
      result: "80% scar reduction",
      timeframe: "3 months",
      icon: "👩"
    },
    {
      name: "Michael, 45",
      concern: "Deep Wrinkles",
      quote: "My wife says I look 10 years younger. I feel it too.",
      result: "Dramatic tightening",
      timeframe: "4 months",
      icon: "👨"
    },
    {
      name: "Amira, 28",
      concern: "Ice Pick Scars",
      quote: "For the first time, I feel beautiful without filters.",
      result: "Life-changing",
      timeframe: "6 months",
      icon: "👩‍💼"
    }
  ];

  return (
    <section id="results" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-green-700 font-medium text-sm">Proven Results</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Real Transformations,
            <span className="gradient-text"> Real People</span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveView('stats')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeView === 'stats'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Clinical Results
            </button>
            <button
              onClick={() => setActiveView('stories')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeView === 'stories'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Patient Stories
            </button>
          </div>
        </div>

        {/* Content */}
        {activeView === 'stats' ? (
          /* Clinical Results View */
          <div className="grid gap-6 max-w-4xl mx-auto">
            {/* Main Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold gradient-text mb-2">70-80%</div>
                <p className="text-sm text-neutral-600">Acne Scar Improvement</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold gradient-text mb-2">60-70%</div>
                <p className="text-sm text-neutral-600">Wrinkle Reduction</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                <p className="text-sm text-neutral-600">Patient Satisfaction</p>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-neutral-800 mb-6">Your Transformation Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary-600">1</span>
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-semibold text-neutral-800">Week 1-2</p>
                    <p className="text-sm text-neutral-600">Initial healing, redness subsides</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary-700">2</span>
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-semibold text-neutral-800">Month 1-2</p>
                    <p className="text-sm text-neutral-600">New skin emerges, texture improves</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">3</span>
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-semibold text-neutral-800">Month 3-6</p>
                    <p className="text-sm text-neutral-600">Full results visible, confidence soars</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Patient Stories View */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{stories[activeStory].icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800">{stories[activeStory].name}</h3>
                    <p className="text-sm text-neutral-600">{stories[activeStory].concern}</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-neutral-700 italic mb-4">
                  "{stories[activeStory].quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="bg-green-100 rounded-full px-4 py-2">
                    <p className="text-sm font-semibold text-green-700">
                      {stories[activeStory].result}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Results in {stories[activeStory].timeframe}
                  </p>
                </div>
              </div>
              
              {/* Story Navigation */}
              <div className="bg-primary-50 p-4">
                <div className="flex justify-center space-x-2">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStory(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeStory
                          ? 'w-8 bg-primary-500'
                          : 'bg-primary-300 hover:bg-primary-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-neutral-600 mt-4">
              All testimonials from real patients. Individual results may vary.
            </p>
          </div>
        )}
        
        {/* Drive to Assessment */}
        <div className="text-center mt-12 bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-3">See Your Potential Results</h3>
          <p className="text-neutral-600 mb-6">Find out what CO2 laser can do for YOUR specific concerns</p>
          <a
            href="#assessment"
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get My Personalized Results
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}