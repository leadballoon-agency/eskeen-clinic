'use client';

import { useState, useEffect } from 'react';

interface AssessmentData {
  concern: string;
  severity: string;
  tried: string;
  timeline: string;
  completed: boolean;
  timestamp: string;
}

export default function CO2WowAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [hasCompletedBefore, setHasCompletedBefore] = useState(false);
  const [previousData, setPreviousData] = useState<AssessmentData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showVisualAnalysis, setShowVisualAnalysis] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('co2_assessment');
    if (stored) {
      const data = JSON.parse(stored);
      setPreviousData(data);
      setHasCompletedBefore(true);
      window.dispatchEvent(new CustomEvent('assessmentCompleted', { detail: data }));
    }
  }, []);

  const questions = [
    {
      id: 'concern',
      question: "What's your main skin concern?",
      visual: true,
      options: [
        { 
          value: 'acne-scars', 
          label: 'Acne Scars',
          emoji: '🎯',
          description: 'Pitted or raised scars from acne',
          improvement: '70-80%',
          sessions: '2-3'
        },
        { 
          value: 'wrinkles', 
          label: 'Fine Lines & Wrinkles',
          emoji: '✨',
          description: 'Signs of aging and expression lines',
          improvement: '60-70%',
          sessions: '1-2'
        },
        { 
          value: 'texture', 
          label: 'Uneven Texture',
          emoji: '💎',
          description: 'Rough, bumpy, or irregular skin',
          improvement: '80-90%',
          sessions: '2-3'
        },
        { 
          value: 'sun-damage', 
          label: 'Sun Damage & Dark Spots',
          emoji: '☀️',
          description: 'Age spots and pigmentation',
          improvement: '75-85%',
          sessions: '2-3'
        }
      ]
    },
    {
      id: 'severity',
      question: "How would you rate the severity?",
      visual: false,
      options: [
        { value: 'mild', label: 'Mild - Just starting to bother me' },
        { value: 'moderate', label: 'Moderate - Noticeable daily' },
        { value: 'severe', label: 'Severe - Significantly impacts me' }
      ]
    },
    {
      id: 'tried',
      question: "Have you tried other treatments?",
      visual: false,
      options: [
        { value: 'nothing', label: 'No, this would be my first treatment' },
        { value: 'topical', label: 'Yes, creams and serums only' },
        { value: 'professional', label: 'Yes, professional treatments' },
        { value: 'everything', label: "I've tried many things" }
      ]
    },
    {
      id: 'timeline',
      question: "When would you like to see results?",
      visual: false,
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
      // Start the "wow" analysis
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowVisualAnalysis(true);
        setTimeout(() => {
          const assessmentData = {
            ...newAnswers,
            completed: true,
            timestamp: new Date().toISOString()
          } as AssessmentData;
          localStorage.setItem('co2_assessment', JSON.stringify(assessmentData));
          window.dispatchEvent(new CustomEvent('assessmentCompleted', { detail: assessmentData }));
          setShowResults(true);
        }, 3000);
      }, 2000);
    }
  };

  const resetAssessment = () => {
    localStorage.removeItem('co2_assessment');
    setHasCompletedBefore(false);
    setPreviousData(null);
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setShowVisualAnalysis(false);
    window.dispatchEvent(new CustomEvent('assessmentReset'));
  };

  // Welcome back screen for returning users
  if (hasCompletedBefore && !showResults && previousData) {
    const concernOption = questions[0].options.find(o => o.value === previousData.concern);
    
    return (
      <section id="assessment" className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold mb-3">Welcome Back!</h2>
              <p className="text-lg text-neutral-600 mb-6">
                We remember your assessment from {new Date(previousData.timestamp).toLocaleDateString()}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 mb-6">
              <h3 className="font-semibold mb-3">Your Personalized Treatment Plan:</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Primary Concern:</span>
                  <span className="font-semibold">{concernOption?.label}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Expected Improvement:</span>
                  <span className="font-semibold text-green-600">{concernOption?.improvement}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Recommended Sessions:</span>
                  <span className="font-semibold">{concernOption?.sessions}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
              <p className="text-sm text-amber-800 font-medium">
                🎉 Special Offer: As a returning visitor, enjoy £100 off your first treatment
              </p>
            </div>
            
            <div className="space-y-3">
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-full font-medium text-center hover:shadow-xl transition-all duration-300"
              >
                Book Your Consultation Now
              </a>
              
              <button
                onClick={resetAssessment}
                className="block w-full text-neutral-500 text-sm"
              >
                Retake assessment with updated concerns
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // The WOW moment - Visual Analysis Screen
  if (isAnalyzing || showVisualAnalysis) {
    const concernData = questions[0].options.find(o => o.value === answers.concern);
    
    return (
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            {isAnalyzing ? (
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 border-4 border-primary-200 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-primary-500 rounded-full animate-spin" style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent' }}></div>
                  <div className="absolute inset-2 border-4 border-primary-400 rounded-full animate-spin" style={{ borderBottomColor: 'transparent', borderRightColor: 'transparent', animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔬</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Analyzing Your Skin Profile...</h2>
                <p className="text-neutral-600">Creating your personalized treatment plan</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Analysis Complete!</h2>
                  <p className="text-neutral-600">Your personalized results are ready</p>
                </div>

                {/* Animated Results Reveal */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-6 transform transition-all duration-500 animate-slideUp">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-neutral-600">Match Score</span>
                      <span className="text-2xl">{concernData?.emoji}</span>
                    </div>
                    <div className="relative h-3 bg-white rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-1000"
                        style={{ width: '92%' }}
                      ></div>
                    </div>
                    <p className="text-sm text-green-600 font-semibold mt-2">92% - Excellent Candidate!</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-2xl p-4 transform transition-all duration-500 animate-slideUp" style={{ animationDelay: '0.1s' }}>
                      <p className="text-xs text-blue-600 mb-1">Expected Improvement</p>
                      <p className="text-2xl font-bold text-blue-700">{concernData?.improvement}</p>
                    </div>
                    <div className="bg-purple-50 rounded-2xl p-4 transform transition-all duration-500 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                      <p className="text-xs text-purple-600 mb-1">Treatment Sessions</p>
                      <p className="text-2xl font-bold text-purple-700">{concernData?.sessions}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 transform transition-all duration-500 animate-slideUp" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">⚡</span>
                      <span className="text-sm font-semibold text-orange-700">AI Insight</span>
                    </div>
                    <p className="text-sm text-orange-600">
                      Based on your profile, you'll likely see initial improvements within 2-3 weeks, 
                      with dramatic results by week 8-10. Your skin type is ideal for CO2 laser treatment.
                    </p>
                  </div>
                </div>

                <div className="text-center text-sm text-neutral-500">
                  Generating your complete report...
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const concernData = questions[0].options.find(o => o.value === answers.concern);
    const isUrgent = answers.timeline === 'asap';
    const isGoodCandidate = answers.severity !== 'mild' || answers.tried === 'everything';
    
    return (
      <section id="assessment" className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold mb-3">
                {isGoodCandidate ? 'Perfect Match!' : 'Good News!'}
              </h2>
              
              <p className="text-lg text-neutral-600 mb-6">
                Your personalized CO2 laser treatment plan is ready
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-2xl p-6 mb-6">
              <h3 className="font-semibold mb-3">Your Custom Treatment Plan:</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-3">
                  <p className="text-sm text-neutral-600 mb-1">For your {concernData?.label}:</p>
                  <p className="font-semibold text-lg text-primary-600">{concernData?.improvement} improvement expected</p>
                </div>
                <div className="bg-white rounded-xl p-3">
                  <p className="text-sm text-neutral-600 mb-1">Treatment plan:</p>
                  <p className="font-semibold">{concernData?.sessions} sessions recommended</p>
                </div>
                <div className="bg-white rounded-xl p-3">
                  <p className="text-sm text-neutral-600 mb-1">Timeline to results:</p>
                  <p className="font-semibold">3-6 months for full transformation</p>
                </div>
              </div>
            </div>
            
            {isUrgent && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
                <p className="text-sm text-red-800 font-medium">
                  ⏰ Priority Booking: We have availability this week for urgent cases
                </p>
              </div>
            )}
            
            <div className="space-y-3">
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-full font-medium text-center hover:shadow-xl transition-all duration-300"
              >
                Reserve Your Consultation
                {isUrgent && <span className="block text-xs mt-1">Priority slots available</span>}
              </a>
              
              <a
                href="tel:07849990667"
                className="block w-full border-2 border-primary-500 text-primary-600 px-6 py-4 rounded-full font-medium text-center"
              >
                Call for Immediate Booking
              </a>
              
              <p className="text-center text-xs text-neutral-500 mt-4">
                Your assessment has been saved. The page is now personalized for you.
              </p>
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
          <h2 className="text-3xl font-bold mb-3">AI Skin Assessment</h2>
          <p className="text-neutral-600">Get your personalized treatment plan in 60 seconds</p>
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
            
            {currentQuestion.visual ? (
              <div className="grid grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="group relative bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-primary-400 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="text-3xl mb-2">{option.emoji}</div>
                    <div className="font-semibold text-sm mb-1">{option.label}</div>
                    <div className="text-xs text-neutral-500">{option.description}</div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H6.5a1 1 0 000 2h4.086l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
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
            )}
            
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

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}