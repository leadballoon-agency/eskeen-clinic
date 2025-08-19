'use client';

import { useState, useEffect } from 'react';

type Treatment = {
  id: string;
  name: string;
  category: string;
  price: string;
  duration: string;
  downtime: string;
  painLevel: string;
  results: string;
  suitableFor: string[];
  notSuitableFor: string[];
  description: string;
  benefits: string[];
  process: string[];
  aftercare: string[];
  sessions: string;
  frequency: string;
  matchScore?: number;
};

export default function TreatmentRecommendationEngine() {
  const [filters, setFilters] = useState({
    concern: '',
    budget: '',
    downtime: '',
    painTolerance: '',
    area: '',
    urgency: '',
  });
  
  const [recommendations, setRecommendations] = useState<Treatment[]>([]);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [comparing, setComparing] = useState<Treatment[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const treatments: Treatment[] = [
    {
      id: 'prp-hair',
      name: 'PRP Hair Restoration',
      category: 'Regenerative',
      price: '£320',
      duration: '60 mins',
      downtime: 'None',
      painLevel: 'Minimal',
      results: '2-3 months',
      suitableFor: ['Hair loss', 'Thinning hair', 'Receding hairline'],
      notSuitableFor: ['Complete baldness', 'Alopecia areata'],
      description: 'Natural hair restoration using your own platelets to stimulate growth',
      benefits: ['Natural results', 'No surgery', 'Stimulates new growth', 'Strengthens existing hair'],
      process: ['Blood draw', 'Centrifuge processing', 'Scalp injections'],
      aftercare: ['No washing for 24h', 'Avoid heat styling', 'Gentle massage'],
      sessions: '4-6',
      frequency: 'Monthly',
    },
    {
      id: 'prp-face',
      name: 'PRP Facial Rejuvenation',
      category: 'Anti-aging',
      price: '£320',
      duration: '45 mins',
      downtime: '24 hours',
      painLevel: 'Mild',
      results: '2-4 weeks',
      suitableFor: ['Fine lines', 'Dull skin', 'Uneven texture', 'Scarring'],
      notSuitableFor: ['Active acne', 'Blood disorders'],
      description: 'The vampire facial - natural collagen stimulation for glowing skin',
      benefits: ['Natural glow', 'Improved texture', 'Reduced wrinkles', 'Even skin tone'],
      process: ['Blood draw', 'Plasma extraction', 'Microneedling with PRP'],
      aftercare: ['SPF essential', 'Hydrating serums', 'No makeup 24h'],
      sessions: '3',
      frequency: '4-6 weeks',
    },
    {
      id: 'botox',
      name: 'Botox',
      category: 'Injectables',
      price: '£250',
      duration: '20 mins',
      downtime: 'None',
      painLevel: 'Minimal',
      results: '3-5 days',
      suitableFor: ['Forehead lines', 'Crow\'s feet', 'Frown lines', 'Excessive sweating'],
      notSuitableFor: ['Pregnancy', 'Neuromuscular disorders'],
      description: 'Smooth dynamic wrinkles and prevent new ones from forming',
      benefits: ['Quick results', 'No downtime', 'Preventative', 'Natural look'],
      process: ['Consultation', 'Marking injection sites', 'Quick injections'],
      aftercare: ['No lying down 4h', 'No exercise 24h', 'No rubbing'],
      sessions: '1',
      frequency: '3-4 months',
    },
    {
      id: 'fillers',
      name: 'Dermal Fillers',
      category: 'Injectables',
      price: '£350',
      duration: '30 mins',
      downtime: '24-48 hours',
      painLevel: 'Mild',
      results: 'Immediate',
      suitableFor: ['Volume loss', 'Deep wrinkles', 'Lip enhancement', 'Cheek contouring'],
      notSuitableFor: ['Allergies to HA', 'Active infection'],
      description: 'Restore volume and contour with hyaluronic acid fillers',
      benefits: ['Instant results', 'Reversible', 'Natural feel', 'Long-lasting'],
      process: ['Numbing cream', 'Strategic injections', 'Massage and molding'],
      aftercare: ['Ice for swelling', 'Avoid pressure', 'Stay hydrated'],
      sessions: '1',
      frequency: '6-18 months',
    },
    {
      id: 'chemical-peel',
      name: 'Chemical Peel',
      category: 'Resurfacing',
      price: '£150',
      duration: '30 mins',
      downtime: '3-7 days',
      painLevel: 'Mild to Moderate',
      results: '1-2 weeks',
      suitableFor: ['Acne', 'Pigmentation', 'Fine lines', 'Uneven texture'],
      notSuitableFor: ['Active herpes', 'Isotretinoin use'],
      description: 'Professional-grade exfoliation for renewed, glowing skin',
      benefits: ['Smoother texture', 'Even tone', 'Reduced acne', 'Collagen boost'],
      process: ['Cleansing', 'Peel application', 'Neutralisation', 'Soothing mask'],
      aftercare: ['SPF crucial', 'Gentle products', 'No picking'],
      sessions: '3-6',
      frequency: '2-4 weeks',
    },
    {
      id: 'microneedling',
      name: 'Microneedling',
      category: 'Collagen Induction',
      price: '£250',
      duration: '45 mins',
      downtime: '24-48 hours',
      painLevel: 'Moderate',
      results: '4-6 weeks',
      suitableFor: ['Acne scars', 'Large pores', 'Fine lines', 'Stretch marks'],
      notSuitableFor: ['Active acne', 'Keloid scarring'],
      description: 'Controlled micro-injuries to stimulate natural collagen production',
      benefits: ['Natural collagen', 'Improved texture', 'Reduced scarring', 'Tighter skin'],
      process: ['Numbing cream', 'Device passes', 'Serum application'],
      aftercare: ['No makeup 24h', 'Hydrating products', 'Sun protection'],
      sessions: '4-6',
      frequency: 'Monthly',
    },
    {
      id: 'hydrafacial',
      name: 'HydraFacial',
      category: 'Deep Cleansing',
      price: '£180',
      duration: '30 mins',
      downtime: 'None',
      painLevel: 'None',
      results: 'Immediate',
      suitableFor: ['Dull skin', 'Blackheads', 'Dehydration', 'Fine lines'],
      notSuitableFor: ['Active rashes', 'Sunburn'],
      description: 'The ultimate deep cleanse, exfoliation, and hydration treatment',
      benefits: ['Instant glow', 'Deep cleanse', 'Hydration boost', 'No downtime'],
      process: ['Cleanse', 'Peel', 'Extract', 'Hydrate'],
      aftercare: ['Enjoy the glow', 'Stay hydrated', 'Regular SPF'],
      sessions: '1-6',
      frequency: 'Monthly',
    },
    {
      id: 'led-therapy',
      name: 'LED Light Therapy',
      category: 'Light Treatment',
      price: '£80',
      duration: '20 mins',
      downtime: 'None',
      painLevel: 'None',
      results: '4-8 weeks',
      suitableFor: ['Acne', 'Inflammation', 'Anti-aging', 'Healing'],
      notSuitableFor: ['Photosensitivity', 'Epilepsy'],
      description: 'NASA-developed technology for cellular regeneration',
      benefits: ['Painless', 'No downtime', 'Safe for all skin', 'Cumulative results'],
      process: ['Cleanse', 'Eye protection', 'Light exposure', 'Moisturize'],
      aftercare: ['Regular sessions', 'Good skincare', 'Sun protection'],
      sessions: '6-12',
      frequency: 'Twice weekly',
    },
  ];

  const concerns = [
    { id: 'aging', label: 'Anti-aging', icon: '⏰' },
    { id: 'acne', label: 'Acne', icon: '🔴' },
    { id: 'scarring', label: 'Scarring', icon: '🗿' },
    { id: 'pigmentation', label: 'Pigmentation', icon: '🎯' },
    { id: 'hair-loss', label: 'Hair Loss', icon: '💇' },
    { id: 'volume-loss', label: 'Volume Loss', icon: '📉' },
    { id: 'texture', label: 'Texture Issues', icon: '🏔️' },
    { id: 'dullness', label: 'Dull Skin', icon: '😐' },
  ];

  const calculateMatchScore = (treatment: Treatment): number => {
    let score = 50; // Base score

    // Match concern
    if (filters.concern) {
      const concernMatch = treatment.suitableFor.some(suitable => 
        suitable.toLowerCase().includes(filters.concern.toLowerCase())
      );
      if (concernMatch) score += 30;
    }

    // Match budget
    if (filters.budget) {
      const price = parseInt(treatment.price.replace('£', ''));
      const budgetMap: { [key: string]: [number, number] } = {
        low: [0, 200],
        medium: [200, 400],
        high: [400, 1000],
      };
      const [min, max] = budgetMap[filters.budget] || [0, 1000];
      if (price >= min && price <= max) score += 10;
    }

    // Match downtime
    if (filters.downtime) {
      if (filters.downtime === 'none' && treatment.downtime === 'None') score += 10;
      if (filters.downtime === 'minimal' && treatment.downtime.includes('24')) score += 5;
    }

    // Match pain tolerance
    if (filters.painTolerance) {
      const painMap: { [key: string]: string[] } = {
        low: ['None', 'Minimal'],
        medium: ['Minimal', 'Mild', 'Moderate'],
        high: ['Minimal', 'Mild', 'Moderate', 'High'],
      };
      if (painMap[filters.painTolerance]?.includes(treatment.painLevel)) score += 5;
    }

    return Math.min(100, score);
  };

  useEffect(() => {
    const filtered = treatments
      .map(treatment => ({
        ...treatment,
        matchScore: calculateMatchScore(treatment),
      }))
      .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
      .slice(0, 6);
    
    setRecommendations(filtered);
  }, [filters]);

  const addToComparison = (treatment: Treatment) => {
    if (comparing.length < 3 && !comparing.find(t => t.id === treatment.id)) {
      setComparing([...comparing, treatment]);
    }
  };

  const removeFromComparison = (treatmentId: string) => {
    setComparing(comparing.filter(t => t.id !== treatmentId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Treatment Recommendation Engine
          </h1>
          <p className="text-xl text-neutral-600">
            Find the perfect treatment for your specific needs
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Customise Your Search</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Primary Concern</label>
              <select
                value={filters.concern}
                onChange={(e) => setFilters({...filters, concern: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
              >
                <option value="">All concerns</option>
                {concerns.map(concern => (
                  <option key={concern.id} value={concern.id}>
                    {concern.icon} {concern.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Budget Range</label>
              <select
                value={filters.budget}
                onChange={(e) => setFilters({...filters, budget: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
              >
                <option value="">Any budget</option>
                <option value="low">Under £200</option>
                <option value="medium">£200-400</option>
                <option value="high">£400+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Acceptable Downtime</label>
              <select
                value={filters.downtime}
                onChange={(e) => setFilters({...filters, downtime: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
              >
                <option value="">Any downtime</option>
                <option value="none">No downtime</option>
                <option value="minimal">1-2 days</option>
                <option value="moderate">3-7 days</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Pain Tolerance</label>
              <select
                value={filters.painTolerance}
                onChange={(e) => setFilters({...filters, painTolerance: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
              >
                <option value="">Any level</option>
                <option value="low">Low (prefer painless)</option>
                <option value="medium">Medium (mild discomfort OK)</option>
                <option value="high">High (can handle it)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Treatment Area</label>
              <select
                value={filters.area}
                onChange={(e) => setFilters({...filters, area: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
              >
                <option value="">Any area</option>
                <option value="face">Face</option>
                <option value="hair">Hair/Scalp</option>
                <option value="body">Body</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Urgency</label>
              <select
                value={filters.urgency}
                onChange={(e) => setFilters({...filters, urgency: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500"
              >
                <option value="">No rush</option>
                <option value="event">Event coming up</option>
                <option value="asap">ASAP</option>
                <option value="maintenance">Regular maintenance</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => setFilters({
                concern: '',
                budget: '',
                downtime: '',
                painTolerance: '',
                area: '',
                urgency: '',
              })}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear Filters
            </button>
            
            {comparing.length > 0 && (
              <button
                onClick={() => setShowComparison(true)}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Compare ({comparing.length})
              </button>
            )}
          </div>
        </div>

        {/* Recommendations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recommendations.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs text-primary-600 font-medium uppercase tracking-wider">
                      {treatment.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{treatment.name}</h3>
                  </div>
                  {treatment.matchScore && (
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">{treatment.matchScore}%</div>
                      <div className="text-xs text-neutral-500">Match</div>
                    </div>
                  )}
                </div>

                <p className="text-neutral-600 mb-4">{treatment.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-primary-500">💰</span>
                    <span>{treatment.price}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary-500">⏱️</span>
                    <span>{treatment.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary-500">😴</span>
                    <span>{treatment.downtime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary-500">💉</span>
                    <span>{treatment.painLevel}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedTreatment(treatment)}
                    className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => addToComparison(treatment)}
                    disabled={comparing.find(t => t.id === treatment.id) !== undefined}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      comparing.find(t => t.id === treatment.id)
                        ? 'bg-green-100 text-green-700'
                        : 'bg-neutral-100 hover:bg-neutral-200'
                    }`}
                  >
                    {comparing.find(t => t.id === treatment.id) ? '✓' : '+'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Details Modal */}
        {selectedTreatment && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedTreatment.name}</h2>
                    <p className="text-primary-600">{selectedTreatment.category}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTreatment(null)}
                    className="text-neutral-400 hover:text-neutral-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-3">Treatment Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-neutral-600">Price</span>
                        <span className="font-medium">{selectedTreatment.price}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-neutral-600">Duration</span>
                        <span className="font-medium">{selectedTreatment.duration}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-neutral-600">Downtime</span>
                        <span className="font-medium">{selectedTreatment.downtime}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-neutral-600">Pain Level</span>
                        <span className="font-medium">{selectedTreatment.painLevel}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-neutral-600">Results Visible</span>
                        <span className="font-medium">{selectedTreatment.results}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-neutral-600">Sessions Needed</span>
                        <span className="font-medium">{selectedTreatment.sessions}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-neutral-600">Frequency</span>
                        <span className="font-medium">{selectedTreatment.frequency}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedTreatment.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold mb-3">Treatment Process</h3>
                  <div className="flex space-x-2 overflow-x-auto">
                    {selectedTreatment.process.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="px-4 py-2 bg-primary-100 rounded-lg text-sm whitespace-nowrap">
                          {index + 1}. {step}
                        </div>
                        {index < selectedTreatment.process.length - 1 && (
                          <svg className="w-5 h-5 text-primary-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold mb-3">Aftercare</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600">
                    {selectedTreatment.aftercare.map((care, index) => (
                      <li key={index}>{care}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex space-x-4">
                  <a
                    href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Book This Treatment
                  </a>
                  <button
                    onClick={() => setSelectedTreatment(null)}
                    className="px-6 py-3 bg-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Modal */}
        {showComparison && comparing.length > 0 && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold">Treatment Comparison</h2>
                  <button
                    onClick={() => setShowComparison(false)}
                    className="text-neutral-400 hover:text-neutral-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Feature</th>
                        {comparing.map(treatment => (
                          <th key={treatment.id} className="text-center py-3">
                            <div>
                              <p className="font-bold">{treatment.name}</p>
                              <button
                                onClick={() => removeFromComparison(treatment.id)}
                                className="text-xs text-red-500 hover:text-red-700 mt-1"
                              >
                                Remove
                              </button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Price</td>
                        {comparing.map(treatment => (
                          <td key={treatment.id} className="text-center py-3">{treatment.price}</td>
                        ))}
                      </tr>
                      <tr className="border-b bg-neutral-50">
                        <td className="py-3 font-medium">Duration</td>
                        {comparing.map(treatment => (
                          <td key={treatment.id} className="text-center py-3">{treatment.duration}</td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Downtime</td>
                        {comparing.map(treatment => (
                          <td key={treatment.id} className="text-center py-3">{treatment.downtime}</td>
                        ))}
                      </tr>
                      <tr className="border-b bg-neutral-50">
                        <td className="py-3 font-medium">Pain Level</td>
                        {comparing.map(treatment => (
                          <td key={treatment.id} className="text-center py-3">{treatment.painLevel}</td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Results Visible</td>
                        {comparing.map(treatment => (
                          <td key={treatment.id} className="text-center py-3">{treatment.results}</td>
                        ))}
                      </tr>
                      <tr className="border-b bg-neutral-50">
                        <td className="py-3 font-medium">Sessions Needed</td>
                        {comparing.map(treatment => (
                          <td key={treatment.id} className="text-center py-3">{treatment.sessions}</td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Frequency</td>
                        {comparing.map(treatment => (
                          <td key={treatment.id} className="text-center py-3">{treatment.frequency}</td>
                        ))}
                      </tr>
                      <tr className="bg-primary-50">
                        <td className="py-3 font-medium">Match Score</td>
                        {comparing.map(treatment => (
                          <td key={treatment.id} className="text-center py-3">
                            <span className="text-xl font-bold gradient-text">
                              {treatment.matchScore || calculateMatchScore(treatment)}%
                            </span>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 text-center">
                  <a
                    href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Book Consultation to Discuss Options
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}