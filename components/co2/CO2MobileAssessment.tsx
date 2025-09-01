'use client';

import { useState, useEffect } from 'react';

export default function CO2MobileAssessment() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const questions = [
    {
      id: 'name',
      type: 'text',
      question: "First, what's your name?",
      subtitle: "So we can personalize your results",
      placeholder: "Enter your first name",
      emoji: '👋'
    },
    {
      id: 'concern',
      type: 'visual',
      question: "What bothers you most?",
      subtitle: "Tap what you see in the mirror",
      emoji: '🪞',
      options: [
        { value: 'scars', label: 'Acne Scars', visual: '🎯', color: 'from-red-400 to-red-500' },
        { value: 'wrinkles', label: 'Lines & Wrinkles', visual: '📐', color: 'from-blue-400 to-blue-500' },
        { value: 'texture', label: 'Rough Texture', visual: '🏔️', color: 'from-purple-400 to-purple-500' },
        { value: 'spots', label: 'Dark Spots', visual: '🟤', color: 'from-amber-400 to-amber-500' }
      ]
    },
    {
      id: 'severity',
      type: 'slider',
      question: "How severe is it?",
      subtitle: "Be honest - we've seen it all",
      emoji: '📊',
      min: 1,
      max: 10,
      labels: ['Mild', 'Moderate', 'Severe']
    },
    {
      id: 'tried',
      type: 'multi',
      question: "What have you tried?",
      subtitle: "Select all that apply",
      emoji: '💊',
      options: [
        { value: 'creams', label: 'Creams/Serums', icon: '🧴' },
        { value: 'peels', label: 'Chemical Peels', icon: '✨' },
        { value: 'micro', label: 'Microneedling', icon: '📍' },
        { value: 'laser', label: 'Other Lasers', icon: '💫' },
        { value: 'nothing', label: 'Nothing Yet', icon: '🆕' }
      ]
    },
    {
      id: 'impact',
      type: 'emotion',
      question: "How does it make you feel?",
      subtitle: "Your feelings matter to us",
      emoji: '💭',
      options: [
        { value: 'confident', label: 'Still Confident', emoji: '😊', color: 'bg-green-100' },
        { value: 'okay', label: 'It\'s Okay', emoji: '😐', color: 'bg-yellow-100' },
        { value: 'frustrated', label: 'Frustrated', emoji: '😤', color: 'bg-orange-100' },
        { value: 'hiding', label: 'Want to Hide', emoji: '😔', color: 'bg-red-100' }
      ]
    },
    {
      id: 'goal',
      type: 'visual',
      question: "{name}, what's your dream outcome?",
      subtitle: "Imagine your perfect skin",
      emoji: '✨',
      options: [
        { value: 'smooth', label: 'Baby Smooth', visual: '🌟', color: 'from-pink-400 to-pink-500' },
        { value: 'clear', label: 'Crystal Clear', visual: '💎', color: 'from-cyan-400 to-cyan-500' },
        { value: 'young', label: 'Years Younger', visual: '⏰', color: 'from-purple-400 to-purple-500' },
        { value: 'confident', label: 'Total Confidence', visual: '💪', color: 'from-green-400 to-green-500' }
      ]
    }
  ];

  const handleAnswer = (value: any) => {
    setIsAnimating(true);
    const newAnswers = { ...answers, [questions[currentStep].id]: value };
    setAnswers(newAnswers);
    
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      } else {
        calculateResults(newAnswers);
      }
    }, 300);
  };

  const calculateResults = (allAnswers: Record<string, any>) => {
    setShowResults(true);
  };

  if (showResults) {
    const name = answers.name || 'there';
    const concern = questions[1].options?.find(o => o.value === answers.concern)?.label || 'your concern';
    
    return (
      <section id="assessment" className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Success Animation */}
            <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 text-white text-center">
              <div className="text-6xl mb-2">🎉</div>
              <h2 className="text-2xl font-bold">Great News, {name}!</h2>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text mb-2">
                  You're an IDEAL Candidate
                </p>
                <p className="text-neutral-600">
                  for CO2 laser treatment
                </p>
              </div>
              
              {/* Personalized Insights */}
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-4 space-y-3">
                <h3 className="font-bold text-neutral-800">Your Personalized Plan:</h3>
                
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-sm">Primary Focus</p>
                    <p className="text-xs text-neutral-600">{concern} treatment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <p className="font-semibold text-sm">Expected Improvement</p>
                    <p className="text-xs text-neutral-600">70-80% reduction</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="font-semibold text-sm">Timeline</p>
                    <p className="text-xs text-neutral-600">3-6 months to full results</p>
                  </div>
                </div>
              </div>
              
              {/* Urgency */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
                <p className="text-sm font-semibold text-red-600 mb-1">
                  Limited Time Offer
                </p>
                <p className="text-xs text-red-500">
                  Save £150 on your first treatment this week only
                </p>
              </div>
              
              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-full font-semibold text-center shadow-lg"
                >
                  Claim Your Free Consultation
                  <span className="block text-xs font-normal mt-1">
                    (Worth £50 - No Obligation)
                  </span>
                </a>
                
                <a
                  href="tel:07846888649"
                  className="block w-full bg-green-500 text-white px-6 py-4 rounded-full font-semibold text-center"
                >
                  💬 Get Instant WhatsApp Quote
                </a>
                
                <button 
                  onClick={() => window.location.href = '#pricing'}
                  className="block w-full text-primary-600 font-medium text-sm"
                >
                  View pricing options →
                </button>
              </div>
              
              {/* Social Proof */}
              <div className="text-center pt-4 border-t">
                <p className="text-xs text-neutral-500 mb-2">Join 500+ happy patients</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-neutral-600 mt-1">
                  "Life-changing results!" - Sarah, Putney
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!isStarted) {
    return (
      <section id="assessment" className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="text-6xl mb-4">🔬</div>
            
            <h2 className="text-3xl font-bold mb-3">
              Is CO2 Laser
              <span className="block gradient-text">Right For You?</span>
            </h2>
            
            <p className="text-neutral-600 mb-6">
              Get your personalized treatment plan in 60 seconds
            </p>
            
            {/* Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-left bg-green-50 rounded-xl p-3">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <p className="font-semibold text-sm">Instant Results</p>
                  <p className="text-xs text-neutral-600">Know if you're a candidate</p>
                </div>
              </div>
              
              <div className="flex items-center text-left bg-blue-50 rounded-xl p-3">
                <span className="text-2xl mr-3">💰</span>
                <div>
                  <p className="font-semibold text-sm">Exclusive Savings</p>
                  <p className="text-xs text-neutral-600">Unlock special pricing</p>
                </div>
              </div>
              
              <div className="flex items-center text-left bg-purple-50 rounded-xl p-3">
                <span className="text-2xl mr-3">📋</span>
                <div>
                  <p className="font-semibold text-sm">Custom Plan</p>
                  <p className="text-xs text-neutral-600">Tailored to your needs</p>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsStarted(true)}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
            >
              Start My Assessment
            </button>
            
            <p className="text-xs text-neutral-500 mt-4">
              No email required • 100% private
            </p>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];
  const personalizedQuestion = currentQuestion.question.replace('{name}', answers.name || 'there');

  return (
    <section className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-10 px-4">
      <div className="max-w-md mx-auto">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
              className="text-neutral-400"
              disabled={currentStep === 0}
            >
              ←
            </button>
            <span className="text-xs text-neutral-600">
              {currentStep + 1} of {questions.length}
            </span>
            <button className="text-neutral-400 opacity-0">→</button>
          </div>
          <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-400 to-primary-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className={`bg-white rounded-3xl shadow-xl p-6 transition-all duration-300 ${
          isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
        }`}>
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">{currentQuestion.emoji}</div>
            <h3 className="text-2xl font-bold mb-2">{personalizedQuestion}</h3>
            <p className="text-sm text-neutral-600">{currentQuestion.subtitle}</p>
          </div>

          {/* Answer Options */}
          {currentQuestion.type === 'text' && (
            <div>
              <input
                type="text"
                placeholder={currentQuestion.placeholder}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-2xl focus:border-primary-400 focus:outline-none text-center text-lg"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value) {
                    handleAnswer(e.currentTarget.value);
                  }
                }}
              />
              <button
                onClick={() => {
                  const input = document.querySelector('input');
                  if (input?.value) handleAnswer(input.value);
                }}
                className="w-full mt-4 bg-primary-500 text-white py-3 rounded-full font-medium"
              >
                Continue →
              </button>
            </div>
          )}

          {currentQuestion.type === 'visual' && (
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options?.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="relative bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-6 border-2 border-neutral-200 hover:border-primary-400 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-2">{(option as any).visual || (option as any).icon || (option as any).emoji}</div>
                  <p className="text-sm font-medium">{option.label}</p>
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'slider' && (
            <div className="space-y-6">
              <input
                type="range"
                min={currentQuestion.min}
                max={currentQuestion.max}
                defaultValue={5}
                className="w-full accent-primary-500"
                onChange={(e) => handleAnswer(e.target.value)}
              />
              <div className="flex justify-between text-xs text-neutral-600">
                {currentQuestion.labels?.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          )}

          {currentQuestion.type === 'multi' && (
            <div className="space-y-2">
              {currentQuestion.options?.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center p-3 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={option.value}
                    className="mr-3 accent-primary-500"
                  />
                  <span className="text-2xl mr-3">{(option as any).icon || (option as any).emoji}</span>
                  <span className="text-sm font-medium">{option.label}</span>
                </label>
              ))}
              <button
                onClick={() => {
                  const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                    .map((el: any) => el.value);
                  handleAnswer(checked.length ? checked : ['nothing']);
                }}
                className="w-full mt-4 bg-primary-500 text-white py-3 rounded-full font-medium"
              >
                Continue →
              </button>
            </div>
          )}

          {currentQuestion.type === 'emotion' && (
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options?.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`${(option as any).color || 'bg-primary-100'} rounded-2xl p-4 transition-all hover:scale-105`}
                >
                  <div className="text-3xl mb-1">{(option as any).emoji || (option as any).icon}</div>
                  <p className="text-xs font-medium">{option.label}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}