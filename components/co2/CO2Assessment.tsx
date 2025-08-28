'use client';

import { useState } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';

export default function CO2Assessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [candidacyScore, setCandidacyScore] = useState(0);

  const questions = [
    {
      id: 'concern',
      question: "What's your primary skin concern?",
      subtitle: "We understand how this affects your daily life",
      options: [
        { value: 'acne-scars', label: 'Acne Scars', icon: '🎯', description: 'Deep, pitted or rolling scars' },
        { value: 'wrinkles', label: 'Fine Lines & Wrinkles', icon: '⏰', description: 'Signs of aging' },
        { value: 'texture', label: 'Uneven Texture', icon: '✨', description: 'Rough, bumpy skin' },
        { value: 'pigmentation', label: 'Sun Damage', icon: '☀️', description: 'Dark spots, melasma' }
      ]
    },
    {
      id: 'duration',
      question: "How long have you been dealing with this?",
      subtitle: "You deserve a solution that actually works",
      options: [
        { value: '6months', label: 'Less than 6 months', icon: '📅', description: 'Recent concern' },
        { value: '1year', label: '6 months - 2 years', icon: '📆', description: 'Ongoing issue' },
        { value: '2years', label: '2-5 years', icon: '🗓️', description: 'Long-term struggle' },
        { value: '5years', label: 'More than 5 years', icon: '⏳', description: "It's time for change" }
      ]
    },
    {
      id: 'tried',
      question: "What have you already tried?",
      subtitle: "We know you've invested time and money already",
      options: [
        { value: 'creams', label: 'Creams & Serums', icon: '🧴', description: 'Topical treatments' },
        { value: 'facials', label: 'Regular Facials', icon: '💆‍♀️', description: 'Professional treatments' },
        { value: 'peels', label: 'Chemical Peels', icon: '✨', description: 'Mild resurfacing' },
        { value: 'everything', label: 'Everything!', icon: '😔', description: 'Still searching for results' }
      ]
    },
    {
      id: 'impact',
      question: "How does this affect your confidence?",
      subtitle: "Your feelings are valid and important to us",
      options: [
        { value: 'minimal', label: 'Slightly bothered', icon: '😐', description: 'Occasionally think about it' },
        { value: 'moderate', label: 'Affects daily life', icon: '😕', description: 'Impacts social situations' },
        { value: 'significant', label: 'Very self-conscious', icon: '😟', description: 'Avoid certain activities' },
        { value: 'severe', label: 'Deeply impacts me', icon: '😢', description: 'Ready for real change' }
      ]
    },
    {
      id: 'goal',
      question: "What's your ultimate goal?",
      subtitle: "Let's make your vision a reality",
      options: [
        { value: 'natural', label: 'Natural, no-makeup look', icon: '🌟', description: 'Confident bare skin' },
        { value: 'smooth', label: 'Smooth, even texture', icon: '✨', description: 'Touchably soft skin' },
        { value: 'younger', label: 'Turn back the clock', icon: '⏰', description: 'Youthful appearance' },
        { value: 'confidence', label: 'Total confidence boost', icon: '💪', description: 'Feel amazing every day' }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: value };
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (allAnswers: Record<string, string>) => {
    let score = 0;
    
    // Calculate candidacy based on answers
    if (allAnswers.concern === 'acne-scars') score += 25;
    else if (allAnswers.concern === 'wrinkles') score += 20;
    else if (allAnswers.concern === 'texture') score += 22;
    else score += 18;
    
    if (allAnswers.duration === '5years') score += 25;
    else if (allAnswers.duration === '2years') score += 20;
    else if (allAnswers.duration === '1year') score += 15;
    else score += 10;
    
    if (allAnswers.tried === 'everything') score += 25;
    else if (allAnswers.tried === 'peels') score += 20;
    else score += 15;
    
    if (allAnswers.impact === 'severe') score += 25;
    else if (allAnswers.impact === 'significant') score += 22;
    else if (allAnswers.impact === 'moderate') score += 18;
    else score += 10;
    
    setCandidacyScore(score);
    setShowResults(true);
    
    // Track assessment completion with Facebook Pixel
    FacebookEvents.CompleteAssessment('CO2 Laser', 
      score >= 70 ? 'High Candidacy' : 'Moderate Candidacy', 
      score >= 70 ? 1500 : 1000
    );
    
    // Track lead event for high-scoring candidates
    if (score >= 70) {
      FacebookEvents.Lead(1500);
    }
  };

  const getRecommendation = () => {
    if (candidacyScore >= 85) {
      return {
        title: "You're an EXCELLENT Candidate! 🎉",
        message: "Based on your responses, CO2 laser therapy could be life-changing for you. Your specific concerns and goals align perfectly with what this treatment delivers best.",
        color: "from-green-500 to-green-600",
        textColor: "text-green-600"
      };
    } else if (candidacyScore >= 70) {
      return {
        title: "You're a GREAT Candidate! ✨",
        message: "CO2 laser therapy is highly recommended for your skin concerns. You're likely to see dramatic improvements that will boost your confidence.",
        color: "from-primary-500 to-primary-600",
        textColor: "text-primary-600"
      };
    } else if (candidacyScore >= 50) {
      return {
        title: "You're a Good Candidate 👍",
        message: "CO2 laser could definitely help with your concerns. A consultation will determine the best treatment plan for your specific needs.",
        color: "from-blue-500 to-blue-600",
        textColor: "text-blue-600"
      };
    } else {
      return {
        title: "Let's Explore Your Options",
        message: "While CO2 laser might help, we have other treatments that could be perfect for you. Let's discuss the best path forward.",
        color: "from-purple-500 to-purple-600",
        textColor: "text-purple-600"
      };
    }
  };

  if (showResults) {
    const recommendation = getRecommendation();
    
    return (
      <section id="your-assessment" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className={`h-3 bg-gradient-to-r ${recommendation.color}`}></div>
            
            <div className="p-8 sm:p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              
              <h2 className={`text-3xl sm:text-4xl font-bold ${recommendation.textColor}`}>
                {recommendation.title}
              </h2>
              
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                {recommendation.message}
              </p>
              
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Your Personalized Treatment Benefits:</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-neutral-800">Dramatic Improvement</p>
                      <p className="text-sm text-neutral-600">70-80% reduction in your primary concern</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-neutral-800">Long-Lasting Results</p>
                      <p className="text-sm text-neutral-600">Years of improved skin, not months</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-neutral-800">Confidence Restored</p>
                      <p className="text-sm text-neutral-600">Feel amazing in your own skin</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-neutral-800">Expert Care</p>
                      <p className="text-sm text-neutral-600">Personalized treatment plan</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 space-y-4">
                <a
                  href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Book Your Free Consultation Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <p className="text-sm text-neutral-600">
                  Or call us directly: <a href="tel:07849990667" className="font-semibold text-primary-600 hover:text-primary-700">07849 990667</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  return (
    <section id="your-assessment" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">Personalized Assessment</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Understand
            <span className="gradient-text"> Your Unique Needs</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Take 60 seconds to see if CO2 laser is your path to skin transformation
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="h-2 bg-neutral-100">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="p-8 sm:p-12">
            <div className="text-center mb-8">
              <p className="text-sm text-primary-600 font-medium mb-2">
                Question {currentStep + 1} of {questions.length}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-2">
                {currentQuestion.question}
              </h3>
              <p className="text-neutral-600">
                {currentQuestion.subtitle}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-2xl p-6 text-left hover:shadow-lg hover:border-primary-400 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {option.icon}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-800 mb-1">
                        {option.label}
                      </p>
                      <p className="text-sm text-neutral-600">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="mt-6 text-neutral-600 hover:text-neutral-800 text-sm font-medium flex items-center mx-auto"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Question
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}