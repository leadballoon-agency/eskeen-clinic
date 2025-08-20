'use client';

import { useState } from 'react';

type SkinConcern = {
  id: string;
  name: string;
  severity: number;
  description: string;
  recommendedTreatments: string[];
};

type AnalysisResult = {
  skinType: string;
  skinAge: number;
  concerns: SkinConcern[];
  priority: string;
  treatments: {
    name: string;
    match: number;
    price: string;
    sessions: string;
    description: string;
  }[];
  skinScore: number;
};

export default function AISkinAnalysis() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    skinType: '',
    concerns: [] as string[],
    lifestyle: {
      sleep: '',
      water: '',
      stress: '',
      sunExposure: '',
      diet: '',
      exercise: '',
    },
    currentRoutine: {
      cleanser: false,
      moisturizer: false,
      sunscreen: false,
      retinol: false,
      vitamonC: false,
      exfoliant: false,
    },
    goals: [] as string[],
    budget: '',
    timeline: '',
  });
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const skinConcerns = [
    { id: 'acne', label: 'Acne & Breakouts', icon: '🔴' },
    { id: 'aging', label: 'Fine Lines & Wrinkles', icon: '⏰' },
    { id: 'pigmentation', label: 'Dark Spots & Pigmentation', icon: '🎯' },
    { id: 'texture', label: 'Uneven Texture', icon: '🏔️' },
    { id: 'pores', label: 'Large Pores', icon: '⭕' },
    { id: 'dullness', label: 'Dull Skin', icon: '😐' },
    { id: 'redness', label: 'Redness & Rosacea', icon: '🌡️' },
    { id: 'eyebags', label: 'Dark Circles & Eye Bags', icon: '👁️' },
    { id: 'scarring', label: 'Acne Scars', icon: '🗿' },
    { id: 'dehydration', label: 'Dehydration', icon: '💧' },
    { id: 'sensitivity', label: 'Sensitive Skin', icon: '🌸' },
    { id: 'melasma', label: 'Melasma', icon: '🟤' },
  ];

  const treatmentGoals = [
    { id: 'prevention', label: 'Prevent aging', icon: '🛡️' },
    { id: 'correction', label: 'Correct existing issues', icon: '🔧' },
    { id: 'glow', label: 'Achieve glowing skin', icon: '✨' },
    { id: 'confidence', label: 'Boost confidence', icon: '💪' },
    { id: 'event', label: 'Prepare for special event', icon: '🎉' },
    { id: 'maintenance', label: 'Maintain current results', icon: '🔄' },
  ];

  const analyseSkin = () => {
    setLoading(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const concerns: SkinConcern[] = formData.concerns.map(concern => {
        const concernData = skinConcerns.find(c => c.id === concern);
        return {
          id: concern,
          name: concernData?.label || concern,
          severity: Math.floor(Math.random() * 5) + 5,
          description: `Based on your responses, we've identified ${concernData?.label} as a key concern`,
          recommendedTreatments: getRecommendedTreatments(concern),
        };
      });

      const skinAge = calculateSkinAge();
      const treatments = generateTreatmentPlan(concerns);
      
      setResult({
        skinType: determineSkinType(),
        skinAge,
        concerns,
        priority: concerns[0]?.name || 'General skin health',
        treatments,
        skinScore: calculateSkinScore(),
      });
      
      setLoading(false);
      setStep(6);
    }, 3000);
  };

  const calculateSkinAge = () => {
    const baseAge = parseInt(formData.age) || 30;
    let modifier = 0;
    
    if (formData.lifestyle.sunExposure === 'high') modifier += 5;
    if (formData.lifestyle.stress === 'high') modifier += 3;
    if (formData.lifestyle.sleep === 'poor') modifier += 2;
    if (!formData.currentRoutine.sunscreen) modifier += 4;
    
    return baseAge + modifier;
  };

  const calculateSkinScore = () => {
    let score = 100;
    
    score -= formData.concerns.length * 5;
    if (formData.lifestyle.water === 'low') score -= 5;
    if (formData.lifestyle.sleep === 'poor') score -= 10;
    if (formData.lifestyle.stress === 'high') score -= 10;
    
    Object.values(formData.currentRoutine).forEach(using => {
      if (using) score += 2;
    });
    
    return Math.max(30, Math.min(100, score));
  };

  const determineSkinType = () => {
    if (formData.skinType === 'oily') return 'Oily';
    if (formData.skinType === 'dry') return 'Dry';
    if (formData.skinType === 'combination') return 'Combination';
    if (formData.skinType === 'sensitive') return 'Sensitive';
    return 'Normal';
  };

  const getRecommendedTreatments = (concern: string): string[] => {
    const treatments: { [key: string]: string[] } = {
      acne: ['Chemical Peels', 'LED Therapy', 'Hydrafacial'],
      aging: ['Botox', 'Dermal Fillers', 'PRP Therapy', 'CO2 Laser'],
      pigmentation: ['IPL', 'Chemical Peels', 'Vitamin C Infusion'],
      texture: ['Microneedling', 'CO2 Laser', 'Chemical Peels'],
      pores: ['Hydrafacial', 'Chemical Peels', 'Microneedling'],
      scarring: ['CO2 Laser', 'Microneedling', 'PRP Therapy'],
    };
    return treatments[concern] || ['Consultation Required'];
  };

  const generateTreatmentPlan = (concerns: SkinConcern[]) => {
    const allTreatments = new Set<string>();
    concerns.forEach(concern => {
      concern.recommendedTreatments.forEach(t => allTreatments.add(t));
    });

    const treatmentDetails: { [key: string]: any } = {
      'PRP Therapy': { price: 'From £175', sessions: '3-6', match: 95, description: 'Natural regeneration using your own platelets. Includes free biotin for hair treatments.' },
      'Chemical Peels': { price: '£150', sessions: '3-5', match: 88, description: 'Exfoliate and renew skin surface' },
      'Microneedling': { price: '£250', sessions: '4-6', match: 92, description: 'Stimulate collagen production' },
      'Hydrafacial': { price: '£180', sessions: '4-8', match: 85, description: 'Deep cleanse and hydrate' },
      'CO2 Laser': { price: '£500', sessions: '1-3', match: 90, description: 'Advanced resurfacing (Coming Soon)' },
      'Botox': { price: '£250', sessions: '1', match: 87, description: 'Smooth dynamic wrinkles' },
      'Dermal Fillers': { price: '£350', sessions: '1', match: 86, description: 'Restore volume and contour' },
    };

    return Array.from(allTreatments)
      .map(name => ({
        name,
        ...treatmentDetails[name] || { price: 'POA', sessions: 'Varies', match: 80, description: 'Customised treatment' }
      }))
      .sort((a, b) => b.match - a.match)
      .slice(0, 5);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's start with the basics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  placeholder="Enter your age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                >
                  <option value="">Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Prefer not to say</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Skin Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['dry', 'oily', 'combination', 'sensitive'].map(type => (
                  <button
                    key={type}
                    onClick={() => setFormData({...formData, skinType: type})}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.skinType === type
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-200 hover:border-primary-300'
                    }`}
                  >
                    <span className="capitalize">{type}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">What are your skin concerns?</h3>
            <p className="text-neutral-600">Select all that apply</p>
            <div className="grid md:grid-cols-3 gap-3">
              {skinConcerns.map(concern => (
                <button
                  key={concern.id}
                  onClick={() => {
                    const newConcerns = formData.concerns.includes(concern.id)
                      ? formData.concerns.filter(c => c !== concern.id)
                      : [...formData.concerns, concern.id];
                    setFormData({...formData, concerns: newConcerns});
                  }}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.concerns.includes(concern.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{concern.icon}</span>
                    <span className="font-medium">{concern.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Tell us about your lifestyle</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Sleep Quality</label>
                <select
                  value={formData.lifestyle.sleep}
                  onChange={(e) => setFormData({
                    ...formData,
                    lifestyle: {...formData.lifestyle, sleep: e.target.value}
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
                >
                  <option value="">Select sleep quality</option>
                  <option value="excellent">Excellent (8+ hours)</option>
                  <option value="good">Good (6-8 hours)</option>
                  <option value="fair">Fair (5-6 hours)</option>
                  <option value="poor">Poor (less than 5 hours)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Water Intake</label>
                <select
                  value={formData.lifestyle.water}
                  onChange={(e) => setFormData({
                    ...formData,
                    lifestyle: {...formData.lifestyle, water: e.target.value}
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
                >
                  <option value="">Select water intake</option>
                  <option value="high">High (8+ glasses)</option>
                  <option value="moderate">Moderate (4-7 glasses)</option>
                  <option value="low">Low (less than 4 glasses)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Stress Level</label>
                <select
                  value={formData.lifestyle.stress}
                  onChange={(e) => setFormData({
                    ...formData,
                    lifestyle: {...formData.lifestyle, stress: e.target.value}
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
                >
                  <option value="">Select stress level</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Sun Exposure</label>
                <select
                  value={formData.lifestyle.sunExposure}
                  onChange={(e) => setFormData({
                    ...formData,
                    lifestyle: {...formData.lifestyle, sunExposure: e.target.value}
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
                >
                  <option value="">Select sun exposure</option>
                  <option value="minimal">Minimal (mostly indoors)</option>
                  <option value="moderate">Moderate (some outdoor time)</option>
                  <option value="high">High (lots of outdoor time)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Current skincare routine</h3>
            <p className="text-neutral-600">Which products do you currently use?</p>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.entries({
                cleanser: 'Cleanser',
                moisturizer: 'Moisturizer',
                sunscreen: 'Sunscreen (SPF)',
                retinol: 'Retinol/Retinoids',
                vitamonC: 'Vitamin C Serum',
                exfoliant: 'Exfoliant (AHA/BHA)',
              }).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFormData({
                    ...formData,
                    currentRoutine: {
                      ...formData.currentRoutine,
                      [key]: !formData.currentRoutine[key as keyof typeof formData.currentRoutine]
                    }
                  })}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.currentRoutine[key as keyof typeof formData.currentRoutine]
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{label}</span>
                    {formData.currentRoutine[key as keyof typeof formData.currentRoutine] && (
                      <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">What are your goals?</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {treatmentGoals.map(goal => (
                <button
                  key={goal.id}
                  onClick={() => {
                    const newGoals = formData.goals.includes(goal.id)
                      ? formData.goals.filter(g => g !== goal.id)
                      : [...formData.goals, goal.id];
                    setFormData({...formData, goals: newGoals});
                  }}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.goals.includes(goal.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{goal.icon}</span>
                    <span className="font-medium">{goal.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
                >
                  <option value="">Select budget</option>
                  <option value="low">£100-300/month</option>
                  <option value="medium">£300-600/month</option>
                  <option value="high">£600+/month</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="ongoing">Ongoing maintenance</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 6:
        return result && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">Your Personalised Skin Analysis</h3>
              <p className="text-neutral-600">Based on advanced AI analysis</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{result.skinScore}%</div>
                <p className="font-medium">Skin Health Score</p>
                <div className="mt-4 h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-1000"
                    style={{ width: `${result.skinScore}%` }}
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold mb-2">Skin Type</h4>
                <p className="text-2xl font-bold text-primary-600">{result.skinType}</p>
                <p className="text-sm text-neutral-600 mt-1">Requires specific care</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold mb-2">Skin Age</h4>
                <p className="text-2xl font-bold text-primary-600">{result.skinAge} years</p>
                <p className="text-sm text-neutral-600 mt-1">
                  {result.skinAge > parseInt(formData.age) ? 'Above' : 'At'} chronological age
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold mb-4">Key Concerns Identified</h4>
              <div className="space-y-3">
                {result.concerns.map((concern, index) => (
                  <div key={concern.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{concern.name}</p>
                      <p className="text-sm text-neutral-600">{concern.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-neutral-500">Severity:</span>
                      <div className="flex space-x-1">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-8 rounded ${
                              i < concern.severity
                                ? 'bg-gradient-to-t from-primary-500 to-primary-400'
                                : 'bg-neutral-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Your Recommended Treatment Plan</h4>
              <div className="space-y-4">
                {result.treatments.map((treatment, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h5 className="font-bold text-lg">{treatment.name}</h5>
                          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {treatment.match}% Match
                          </span>
                        </div>
                        <p className="text-primary-100 mb-2">{treatment.description}</p>
                        <div className="flex space-x-4 text-sm">
                          <span>💰 {treatment.price}</span>
                          <span>📅 {treatment.sessions} sessions</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-white text-primary-600 rounded-lg font-medium hover:shadow-lg transition-all">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg font-medium">Ready to begin your transformation?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-medium hover:shadow-xl transition-all hover:scale-105"
                >
                  Book Consultation
                </a>
                <button
                  onClick={() => window.print()}
                  className="px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-all"
                >
                  Download Report
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered Skin Analysis
          </h1>
          <p className="text-xl text-neutral-600">
            Get personalised treatment recommendations in 2 minutes
          </p>
        </div>

        {step < 6 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-neutral-600">Step {step} of 5</span>
              <span className="text-sm text-neutral-600">{Math.round((step / 5) * 100)}% Complete</span>
            </div>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-500"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl p-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent mb-4"></div>
              <p className="text-lg font-medium">Analysing your skin profile...</p>
              <p className="text-neutral-600 mt-2">Using advanced AI algorithms</p>
            </div>
          ) : (
            renderStep()
          )}

          {!loading && step < 6 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  step === 1
                    ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                }`}
                disabled={step === 1}
              >
                Previous
              </button>
              
              {step === 5 ? (
                <button
                  onClick={analyseSkin}
                  disabled={!formData.age || !formData.gender || formData.concerns.length === 0}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Get My Analysis
                </button>
              ) : (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && (!formData.age || !formData.gender || !formData.skinType)) ||
                    (step === 2 && formData.concerns.length === 0)
                  }
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}