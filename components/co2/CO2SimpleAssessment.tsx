'use client';

import { useState } from 'react';

export default function CO2SimpleAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'concern',
      question: "What's your main skin concern?",
      options: [
        { value: 'acne-scars', label: 'Acne Scars' },
        { value: 'wrinkles', label: 'Fine Lines & Wrinkles' },
        { value: 'texture', label: 'Uneven Texture' },
        { value: 'sun-damage', label: 'Sun Damage & Dark Spots' }
      ]
    },
    {
      id: 'severity',
      question: "How would you rate the severity?",
      options: [
        { value: 'mild', label: 'Mild - Just starting to bother me' },
        { value: 'moderate', label: 'Moderate - Noticeable daily' },
        { value: 'severe', label: 'Severe - Significantly impacts me' }
      ]
    },
    {
      id: 'tried',
      question: "Have you tried other treatments?",
      options: [
        { value: 'nothing', label: 'No, this would be my first treatment' },
        { value: 'topical', label: 'Yes, creams and serums only' },
        { value: 'professional', label: 'Yes, professional treatments' },
        { value: 'everything', label: 'I\'ve tried many things' }
      ]
    },
    {
      id: 'timeline',
      question: "When would you like to see results?",
      options: [
        { value: 'asap', label: 'As soon as possible' },
        { value: '3months', label: 'Within 3 months' },
        { value: '6months', label: 'Within 6 months' },
        { value: 'exploring', label: 'Just exploring options' }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: value };
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    const isGoodCandidate = answers.severity !== 'mild' || answers.tried === 'everything';
    
    return (
      <section id="assessment" className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold mb-3">
                {isGoodCandidate ? 'You\'re a Great Candidate!' : 'Good News!'}
              </h2>
              
              <p className="text-lg text-neutral-600 mb-6">
                {isGoodCandidate 
                  ? 'Based on your responses, CO2 laser therapy could provide excellent results for your concerns.'
                  : 'CO2 laser therapy may help with your concerns. A consultation will determine the best approach.'}
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold mb-3">Your Personalized Insights:</h3>
              <ul className="space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Expected 70-80% improvement in your primary concern</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Results typically visible within 3-6 months</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Long-lasting results (years, not months)</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300"
              >
                Book Your Free Consultation
              </a>
              
              <a
                href="tel:07849990667"
                className="block w-full text-primary-600 font-medium"
              >
                Or call us: 07849 990667
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  return (
    <section id="assessment" className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Quick Assessment</h2>
          <p className="text-neutral-600">Find out if CO2 laser is right for you</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-1 bg-neutral-100">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="p-8 sm:p-12">
            <div className="mb-8">
              <p className="text-sm text-primary-600 font-medium mb-2">
                Question {currentStep + 1} of {questions.length}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold">
                {currentQuestion.question}
              </h3>
            </div>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 border-2 border-neutral-200 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-200"
                >
                  {option.label}
                </button>
              ))}
            </div>
            
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="mt-6 text-neutral-500 text-sm"
              >
                ← Previous question
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}