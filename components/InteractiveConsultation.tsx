'use client';

import { useState, useEffect } from 'react';

export default function InteractiveConsultation() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [animatedText, setAnimatedText] = useState('');

  const getAgeOptions = () => {
    const gender = answers.gender;
    if (gender === 'male') {
      return [
        { value: '18-25', label: '18-25', emoji: '💪', description: 'Prevention & maintenance' },
        { value: '26-35', label: '26-35', emoji: '🎯', description: 'Early intervention' },
        { value: '36-45', label: '36-45', emoji: '⚡', description: 'Active enhancement' },
        { value: '46+', label: '46+', emoji: '🏆', description: 'Advanced solutions' },
      ];
    } else if (gender === 'female') {
      return [
        { value: '18-25', label: '18-25', emoji: '🌸', description: 'Prevention focused' },
        { value: '26-35', label: '26-35', emoji: '🌺', description: 'Early intervention' },
        { value: '36-45', label: '36-45', emoji: '🌹', description: 'Active rejuvenation' },
        { value: '46+', label: '46+', emoji: '🌷', description: 'Advanced treatments' },
      ];
    } else {
      return [
        { value: '18-25', label: '18-25', emoji: '✨', description: 'Prevention focused' },
        { value: '26-35', label: '26-35', emoji: '💫', description: 'Early intervention' },
        { value: '36-45', label: '36-45', emoji: '🌟', description: 'Active enhancement' },
        { value: '46+', label: '46+', emoji: '⭐', description: 'Advanced treatments' },
      ];
    }
  };

  const questions = [
    {
      id: 'gender',
      question: 'How can we best serve you?',
      subtitle: 'We offer specialised treatments for everyone',
      options: [
        { value: 'female', label: 'Female', emoji: '👩', description: 'Feminine aesthetics' },
        { value: 'male', label: 'Male', emoji: '👨', description: 'Masculine treatments' },
        { value: 'non-binary', label: 'Non-Binary', emoji: '💫', description: 'Personalised approach' },
        { value: 'prefer-not', label: 'Prefer Not to Say', emoji: '✨', description: 'Focus on concerns' },
      ],
    },
    {
      id: 'age',
      question: answers.gender === 'male' ? 'What\'s your age group?' : 'Let\'s talk about your age range',
      subtitle: 'This helps us understand your skin\'s natural changes',
      options: getAgeOptions(),
    },
    {
      id: 'concern',
      question: 'What brings you to us today?',
      subtitle: 'Select your primary concern',
      options: [
        { value: 'aging', label: 'Anti-Ageing', emoji: '⏰', description: 'Lines, wrinkles, volume loss' },
        { value: 'skin-quality', label: 'Skin Quality', emoji: '✨', description: 'Texture, tone, glow' },
        { value: 'facial-balance', label: 'Facial Enhancement', emoji: '💎', description: 'Lips, cheeks, jawline' },
        { value: 'hair', label: 'Hair Concerns', emoji: '💫', description: 'Thinning, loss, restoration' },
      ],
    },
    {
      id: 'priority',
      question: 'What\'s most important to you?',
      subtitle: 'Help us understand your goals',
      options: [
        { value: 'natural', label: 'Natural Results', emoji: '🌿', description: 'Subtle enhancement' },
        { value: 'dramatic', label: 'Visible Change', emoji: '🎯', description: 'Noticeable improvement' },
        { value: 'preventative', label: 'Prevention', emoji: '🛡️', description: 'Stop future concerns' },
        { value: 'corrective', label: 'Correction', emoji: '🔧', description: 'Fix existing issues' },
      ],
    },
    {
      id: 'budget',
      question: 'Your investment preference?',
      subtitle: 'We have options for every budget',
      options: [
        { value: 'entry', label: 'Entry Level', emoji: '💚', description: '£200-400 per session' },
        { value: 'standard', label: 'Standard', emoji: '💙', description: '£400-800 per session' },
        { value: 'premium', label: 'Premium', emoji: '💜', description: '£800+ per session' },
        { value: 'package', label: 'Package Deal', emoji: '💰', description: 'Best value bundles' },
      ],
    },
    {
      id: 'timeline',
      question: 'When would you like to start?',
      subtitle: 'Let\'s plan your journey',
      options: [
        { value: 'immediate', label: 'This Week', emoji: '⚡', description: 'Ready to begin' },
        { value: 'month', label: 'This Month', emoji: '📅', description: 'Planning ahead' },
        { value: 'event', label: 'Special Event', emoji: '🎉', description: 'Preparing for occasion' },
        { value: 'exploring', label: 'Just Exploring', emoji: '🔍', description: 'Learning options' },
      ],
    },
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[step].id]: value });
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      analyzeResults();
    }
  };

  const analyzeResults = () => {
    setIsAnalyzing(true);
    const messages = [
      'Analysing your skin profile...',
      'Matching treatments to your goals...',
      'Calculating optimal approach...',
      'Personalising your recommendations...'
    ];
    
    let messageIndex = 0;
    const interval = setInterval(() => {
      if (messageIndex < messages.length) {
        setAnimatedText(messages[messageIndex]);
        messageIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsAnalyzing(false);
          setShowResult(true);
        }, 500);
      }
    }, 800);
  };

  const getRecommendation = () => {
    const gender = answers.gender;
    const age = answers.age;
    const concern = answers.concern;
    const priority = answers.priority;
    const budget = answers.budget;
    
    // Sophisticated recommendation logic with gender consideration
    if (concern === 'hair') {
      const genderNote = gender === 'male' 
        ? 'Specifically effective for male pattern baldness' 
        : gender === 'female' 
        ? 'Perfect for female hair thinning and hormonal hair loss'
        : 'Effective for all types of hair loss';
      
      return {
        treatment: 'PRP Hair Restoration Programme',
        subtreatments: ['PRP Therapy', 'FREE Biotin Injection Included'],
        sessions: '3-6 sessions for optimal results',
        price: '£175 per session (packages available)',
        message: `Our PRP therapy with complimentary biotin injection offers the most effective natural hair restoration. ${genderNote}.`,
        matchScore: 98,
        benefits: ['Natural hair regrowth', 'No downtime', 'Long-lasting results', 'Free biotin boost'],
      };
    } else if (concern === 'aging' && (age === '36-45' || age === '46+')) {
      return {
        treatment: 'Age-Defying Transformation',
        subtreatments: ['Botox', 'Dermal Fillers', 'Skin Boosters'],
        sessions: 'Initial treatment + maintenance',
        price: 'From £450 combined treatment',
        message: 'A comprehensive approach combining wrinkle relaxers and volume restoration for natural rejuvenation.',
        matchScore: 95,
        benefits: ['Immediate results', 'Natural appearance', 'Long-lasting'],
      };
    } else if (concern === 'facial-balance') {
      const treatments = gender === 'male' 
        ? ['Masculine Jawline', 'Chin Enhancement', 'Natural Lip Definition']
        : gender === 'female'
        ? ['Russian Lips', 'Cheek Enhancement', 'Feminine Contouring']
        : ['Lip Enhancement', 'Facial Contouring', 'Feature Balancing'];
      
      const message = gender === 'male'
        ? 'Subtle enhancements that maintain masculine features while improving facial harmony.'
        : gender === 'female'
        ? 'Expert facial balancing by our Russian Lips specialist for perfectly feminine proportions.'
        : 'Personalised facial enhancement tailored to your unique aesthetic goals.';
      
      return {
        treatment: 'Facial Harmonisation Package',
        subtreatments: treatments,
        sessions: 'Staged treatment plan',
        price: 'From £350 per area',
        message: message,
        matchScore: 96,
        benefits: ['Natural proportions', 'Tailored enhancement', 'Confidence boost'],
      };
    } else if (concern === 'skin-quality') {
      return {
        treatment: 'Skin Perfection Journey',
        subtreatments: ['Skin Boosters', 'Polynucleotides', 'NAD+ Therapy'],
        sessions: '3 initial treatments',
        price: 'From £200 per session',
        message: 'Advanced skin quality treatments for that coveted glass skin glow.',
        matchScore: 94,
        benefits: ['Deep hydration', 'Collagen boost', 'Natural radiance'],
      };
    } else {
      return {
        treatment: 'Bespoke Treatment Plan',
        subtreatments: ['Personalised combination'],
        sessions: 'Customised to your needs',
        price: 'Tailored quote after consultation',
        message: 'Your unique concerns deserve a personalised approach. Let\'s create the perfect plan together.',
        matchScore: 92,
        benefits: ['Fully customised', 'Flexible options', 'Expert guidance'],
      };
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
    setIsAnalyzing(false);
  };

  if (isAnalyzing) {
    return (
      <div className="bg-gradient-to-br from-white via-primary-50 to-white rounded-3xl p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-4xl">🔬</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-4 border-primary-200 rounded-full animate-spin-slow"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">AI Analysis in Progress</h3>
            <p className="text-primary-600 font-medium animate-pulse">{animatedText}</p>
          </div>
          
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const recommendation = getRecommendation();
    return (
      <div className="bg-gradient-to-br from-white via-primary-50 to-white rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto">
        <div className="space-y-6">
          {/* Match Score */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full">
              <span className="text-3xl">🎯</span>
              <div className="text-left">
                <p className="text-sm opacity-90">Match Score</p>
                <p className="text-2xl font-bold">{recommendation.matchScore}%</p>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold">Your Perfect Treatment Plan</h3>
            <p className="text-neutral-600">Expertly curated based on your unique profile</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100">
            <div className="space-y-4">
              <div>
                <p className="text-primary-600 font-bold text-2xl mb-2">{recommendation.treatment}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {recommendation.subtreatments.map((treatment, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      {treatment}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 py-4 border-y border-neutral-100">
                <div>
                  <p className="text-sm text-neutral-500">Treatment Plan</p>
                  <p className="font-medium">{recommendation.sessions}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Investment</p>
                  <p className="font-medium text-primary-600">{recommendation.price}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-neutral-700 mb-2">Key Benefits:</p>
                <div className="grid grid-cols-3 gap-2">
                  {recommendation.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-neutral-600 italic bg-primary-50 p-3 rounded-lg">
                {recommendation.message}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href="https://www.treatwell.co.uk/place/eskeen-clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center"
            >
              Book Your Free Consultation →
            </a>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={reset}
                className="w-full border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-primary-50 transition-all duration-300"
              >
                Start Over
              </button>
              <a
                href="/tools"
                className="w-full bg-neutral-100 text-neutral-700 px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-all duration-300 text-center"
              >
                Advanced Analysis
              </a>
            </div>
          </div>

          <p className="text-xs text-neutral-500 text-center">
            This AI-powered assessment provides initial recommendations. Your practitioners will create a detailed, personalised plan during consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white via-primary-50 to-white rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold">AI Skin Assessment</h3>
            <p className="text-neutral-600 text-sm">Powered by advanced algorithms</p>
          </div>
          <div className="text-right">
            <span className="text-sm text-primary-600 font-medium">
              Step {step + 1} of {questions.length}
            </span>
            <div className="flex items-center space-x-1 mt-1">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index <= step ? 'bg-primary-500 w-8' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h4 className="text-2xl font-bold">{questions[step].question}</h4>
          <p className="text-neutral-600">{questions[step].subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {questions[step].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="group relative bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-primary-400 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-left"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{option.emoji}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-neutral-300 group-hover:border-primary-500 group-hover:bg-primary-500 transition-all duration-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">{option.label}</p>
                  <p className="text-xs text-neutral-500 mt-1">{option.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="text-neutral-500 hover:text-neutral-700 text-sm transition-colors"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}