'use client';

import { useState } from 'react';

export default function CO2AssessmentCTA() {
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const questions = [
    {
      id: 'concern',
      question: "What's your main concern?",
      options: [
        { value: 'scars', label: 'Acne Scars', icon: '🎯' },
        { value: 'wrinkles', label: 'Wrinkles', icon: '⏰' },
        { value: 'texture', label: 'Texture', icon: '✨' },
        { value: 'spots', label: 'Dark Spots', icon: '☀️' }
      ]
    },
    {
      id: 'duration',
      question: "How long have you had this?",
      options: [
        { value: '6m', label: '<6 months', icon: '📅' },
        { value: '1y', label: '6m-2 years', icon: '📆' },
        { value: '2y', label: '2-5 years', icon: '🗓️' },
        { value: '5y', label: '5+ years', icon: '⏳' }
      ]
    },
    {
      id: 'ready',
      question: "Are you ready for change?",
      options: [
        { value: 'yes', label: 'Yes, absolutely!', icon: '💪' },
        { value: 'maybe', label: 'Want to learn more', icon: '🤔' },
        { value: 'nervous', label: 'Nervous but ready', icon: '😊' },
        { value: 'exploring', label: 'Just exploring', icon: '👀' }
      ]
    }
  ];
  
  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: value };
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Show results
      setShowAssessment(false);
      setCurrentStep(0);
      // In real app, this would calculate and show personalized recommendation
    }
  };

  if (!showAssessment) {
    return (
      <section id="next-steps" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-1">
              <div className="bg-white rounded-3xl p-8 sm:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
                  Your Journey to Perfect Skin
                  <span className="block text-2xl sm:text-3xl gradient-text mt-2">Starts With One Decision</span>
                </h2>
                
                <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                  You've seen the results. You understand the process. 
                  Now it's time to take action for yourself.
                </p>
                
                <div className="space-y-4 max-w-md mx-auto">
                  <a
                    href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Book Your Consultation Now
                    <span className="block text-sm font-normal mt-1 opacity-90">
                      Limited appointments available
                    </span>
                  </a>
                  
                  <button
                    onClick={() => setShowAssessment(true)}
                    className="block w-full border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-primary-50 transition-all duration-300"
                  >
                    Take 30-Second Assessment First
                  </button>
                  
                  <a
                    href="tel:07849990667"
                    className="block w-full text-neutral-600 hover:text-neutral-800 font-medium transition-colors"
                  >
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call 07849 990667
                    </span>
                  </a>
                </div>
                
                {/* Trust Elements */}
                <div className="mt-10 pt-10 border-t border-neutral-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary-600">500+</p>
                      <p className="text-xs text-neutral-600">Happy Patients</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-600">95%</p>
                      <p className="text-xs text-neutral-600">Satisfaction</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-600">FDA</p>
                      <p className="text-xs text-neutral-600">Approved</p>
                    </div>
                  </div>
                </div>
                
                {/* Location */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-neutral-600">
                    📍 115 Lower Richmond Road, Putney SW15 1EX
                  </p>
                  <p className="text-xs text-neutral-500 mt-2">
                    Easy parking • 5 min from Putney Station
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Assessment View
  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];
  
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-2 bg-neutral-100">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="p-8">
            <div className="text-center mb-8">
              <p className="text-sm text-primary-600 font-medium mb-2">
                Question {currentStep + 1} of {questions.length}
              </p>
              <h3 className="text-2xl font-bold text-neutral-800">
                {currentQuestion.question}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="bg-primary-50 hover:bg-primary-100 border-2 border-transparent hover:border-primary-400 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-2xl block mb-2">{option.icon}</span>
                  <span className="text-sm font-medium text-neutral-700">{option.label}</span>
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowAssessment(false)}
              className="mt-6 text-neutral-500 hover:text-neutral-700 text-sm mx-auto block"
            >
              Skip assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}