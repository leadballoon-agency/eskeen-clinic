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
        { value: 'facial-aging', label: 'Facial Aging', emoji: '✨', description: 'Fine lines and loss of glow' },
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
      question: 'Treatment sessions needed for best results?',
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
        price: commitment === 'package6' ? '£1,800 (6 sessions)' : commitment === 'package3' ? '£900 (3 sessions)' : '£320 per session',
        message: 'PRP can effectively stimulate hair follicles and promote natural hair growth. Most clients see results after 3-4 sessions.',
        benefits: ['Stops hair loss progression', 'Stimulates new growth', 'Thickens existing hair', 'No downtime'],
      };
    } else if (concern === 'facial-aging') {
      return {
        treatment: 'Vampire Facial PRP',
        sessions: '3 sessions for best results',
        price: commitment === 'package3' ? '£900 (3 sessions)' : '£320 per session',
        message: 'PRP facial rejuvenation naturally boosts collagen production for younger-looking skin without fillers.',
        benefits: ['Natural collagen boost', 'Improved skin texture', 'Reduced fine lines', 'Healthy glow'],
      };
    } else {
      return {
        treatment: 'Combination PRP Therapy',
        sessions: '6 sessions recommended',
        price: '£1,800 (package deal)',
        message: 'Treat both hair and facial concerns with our comprehensive PRP program for complete rejuvenation.',
        benefits: ['Hair restoration', 'Facial rejuvenation', 'Package savings', 'Comprehensive care'],
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
      <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl">🎯</span>
          </div>
          
          <h3 className="text-3xl font-bold">Your Personalised PRP Plan</h3>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-primary-600 font-bold text-xl mb-2">{recommendation.treatment}</p>
            <p className="text-neutral-600 mb-2">{recommendation.sessions}</p>
            <p className="text-3xl font-bold gradient-text mb-4">{recommendation.price}</p>
            <p className="text-neutral-600 italic mb-6">{recommendation.message}</p>
            
            <div className="grid grid-cols-2 gap-3 text-left">
              {recommendation.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <a
              href="https://www.treatwell.co.uk/place/eskeen-clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Your PRP Consultation
            </a>
            <button
              onClick={reset}
              className="block w-full border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-primary-50 transition-all duration-300"
            >
              Start Over
            </button>
          </div>

          <p className="text-xs text-neutral-500">
            * This is an initial assessment. Nurse Elanda will provide a detailed treatment plan during your consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">PRP Suitability Assessment</h3>
          <span className="text-sm text-primary-600 font-medium">
            Question {step + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-center">
          {questions[step].question}
        </h4>

        <div className="grid md:grid-cols-2 gap-4">
          {questions[step].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="group relative bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="flex items-start space-x-3">
                <div className="text-3xl">{option.emoji}</div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-700 group-hover:text-primary-600">
                    {option.label}
                  </p>
                  {'description' in option && option.description && (
                    <p className="text-sm text-neutral-500 mt-1">{option.description}</p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="text-primary-600 font-medium hover:text-primary-700"
          >
            ← Previous Question
          </button>
        )}
      </div>
    </div>
  );
}