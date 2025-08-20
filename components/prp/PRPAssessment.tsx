'use client';

import { useState } from 'react';

export default function PRPAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 'concern',
      question: 'What brings you to PRP therapy?',
      options: [
        { value: 'hair-thinning', label: 'Hair Thinning', emoji: '👨‍🦲', description: 'Noticing more scalp visibility' },
        { value: 'hair-loss', label: 'Hair Loss', emoji: '😟', description: 'Significant hair fall or bald patches' },
        { value: 'facial-ageing', label: 'Facial Ageing', emoji: '✨', description: 'Fine lines and loss of glow' },
        { value: 'both', label: 'Both Concerns', emoji: '🎯', description: 'Hair and facial treatment' },
      ],
    },
    {
      id: 'duration',
      question: 'How long have you noticed these changes?',
      options: [
        { value: 'recent', label: 'Less than 6 months', emoji: '📅' },
        { value: '1year', label: '6-12 months', emoji: '📆' },
        { value: '2years', label: '1-2 years', emoji: '🗓️' },
        { value: 'longer', label: 'More than 2 years', emoji: '⏰' },
      ],
    },
    {
      id: 'tried',
      question: 'What treatments have you tried?',
      options: [
        { value: 'nothing', label: 'First treatment', emoji: '🆕' },
        { value: 'products', label: 'Hair/skin products', emoji: '🧴' },
        { value: 'medications', label: 'Medications', emoji: '💊' },
        { value: 'other-treatments', label: 'Other procedures', emoji: '💉' },
      ],
    },
    {
      id: 'commitment',
      question: 'How many sessions are you considering?',
      options: [
        { value: 'single', label: 'Try one session first', emoji: '1️⃣' },
        { value: 'package3', label: '3 sessions (recommended)', emoji: '3️⃣' },
        { value: 'package6', label: '6 sessions (optimal)', emoji: '6️⃣' },
        { value: 'unsure', label: 'Need guidance', emoji: '❓' },
      ],
    },
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[step].id]: value });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const concern = answers.concern;
    const commitment = answers.commitment;
    
    if (concern === 'hair-loss' || concern === 'hair-thinning') {
      return {
        treatment: 'Hair Restoration PRP',
        sessions: commitment === 'package6' ? '6 sessions optimal' : '3-6 sessions recommended',
        price: commitment === 'package6' ? '£699 (6 sessions + 6 biotin)' : commitment === 'package3' ? '£450 (3 sessions + 3 biotin)' : '£175 per session + free biotin',
        message: 'PRP can effectively stimulate hair follicles and promote natural hair growth. Most clients see results after 3-4 sessions. All packages include biotin injections for enhanced results.',
        benefits: ['Stops hair loss progression', 'Stimulates new growth', 'Thickens existing hair', 'Free biotin injections'],
      };
    } else if (concern === 'facial-ageing') {
      return {
        treatment: 'Vampire Facial PRP',
        sessions: '3 sessions for best results',
        price: commitment === 'package6' ? '£699 (6 sessions)' : commitment === 'package3' ? '£450 (3 sessions)' : '£175 per session (including eyes)',
        message: 'PRP facial rejuvenation naturally boosts collagen production for younger-looking skin without fillers. All facial treatments include the delicate eye area.',
        benefits: ['Natural collagen boost', 'Improved skin texture', 'Reduced fine lines', 'Eye area included'],
      };
    } else {
      return {
        treatment: 'Combination PRP Therapy',
        sessions: commitment === 'single' ? 'Single session' : '3-6 sessions recommended',
        price: commitment === 'single' ? '£350 (face & hair combo)' : '£250 (face, eyes & neck)',
        message: 'Treat multiple areas with our combination packages. Choose face & hair for ultimate rejuvenation or our complete facial treatment including neck.',
        benefits: ['Multiple areas treated', 'Combination savings', 'Comprehensive care', 'Flexible options'],
      };
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const recommendation = getRecommendation();
    return (
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl mx-auto overflow-hidden">
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-6 sm:p-8 text-white text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl sm:text-4xl">🎯</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold">Your Personalised PRP Plan</h3>
        </div>
        
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center">
            <p className="text-primary-600 font-bold text-xl sm:text-2xl mb-2">{recommendation.treatment}</p>
            <p className="text-neutral-600 mb-2">{recommendation.sessions}</p>
            <p className="text-3xl sm:text-4xl font-bold gradient-text mb-4">{recommendation.price}</p>
            <p className="text-neutral-600 text-sm sm:text-base italic px-4">{recommendation.message}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recommendation.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-primary-50 rounded-xl p-3">
                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-neutral-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <a
              href="https://www.treatwell.co.uk/place/eskeen-clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-100 text-center"
            >
              Book Your Consultation
            </a>
            <button
              onClick={reset}
              className="block w-full text-primary-600 text-sm py-2 hover:text-primary-700 transition-all"
            >
              Start Over
            </button>
          </div>

          <p className="text-xs text-neutral-500 text-center px-4">
            * This is an initial assessment. Nurse Elanda will provide a detailed treatment plan during your consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl mx-auto overflow-hidden">
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-4 sm:p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-white font-semibold text-lg sm:text-xl">Quick Assessment</h3>
          <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-medium">
            {step + 1} / {questions.length}
          </span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
          <div
            className="bg-white h-2 rounded-full transition-all duration-500 ease-out shadow-sm"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
      
      <div className="p-6 sm:p-8">

        <div className="space-y-6">
          <h4 className="text-xl sm:text-2xl font-bold text-center text-neutral-800 px-4">
            {questions[step].question}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {questions[step].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="group relative bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-4 sm:p-5 hover:border-primary-400 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-100 text-left"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <span className="text-xl sm:text-2xl">{option.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors">
                      {option.label}
                    </p>
                    {'description' in option && option.description && (
                      <p className="text-xs sm:text-sm text-neutral-500 mt-1">{option.description}</p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {step > 0 && (
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors px-4 py-2"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Question
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}