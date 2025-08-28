'use client';

import { useState, useEffect } from 'react';

export default function TreatmentVoting() {
  const [votes, setVotes] = useState({
    co2: 342,
    morpheus8: 218,
    hifu: 156
  });
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [viewingCount, setViewingCount] = useState(12);
  
  useEffect(() => {
    // Check if user has already voted
    const votedData = localStorage.getItem('eskeen_treatment_vote');
    if (votedData) {
      const parsed = JSON.parse(votedData);
      setHasVoted(true);
      setSelectedTreatment(parsed.treatment);
    }
    
    // Simulate real-time viewing
    const interval = setInterval(() => {
      setViewingCount(prev => 8 + Math.floor(Math.random() * 15));
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  const treatments = [
    {
      id: 'co2',
      name: 'CO2 Laser',
      description: 'Advanced skin resurfacing for scars, wrinkles & texture',
      benefits: ['Deep resurfacing', 'Scar reduction', 'Wrinkle treatment', 'Skin renewal'],
      icon: '🔬',
      color: 'from-red-400 to-orange-500',
      bgColor: 'from-red-50 to-orange-50'
    },
    {
      id: 'morpheus8',
      name: 'Morpheus8',
      description: 'RF microneedling for skin tightening & contouring',
      benefits: ['Skin tightening', 'Body contouring', 'Collagen boost', 'Minimal downtime'],
      icon: '⚡',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      id: 'hifu',
      name: 'HIFU',
      description: 'Non-surgical facelift using ultrasound technology',
      benefits: ['Non-invasive lift', 'Jawline definition', 'No downtime', 'Long-lasting'],
      icon: '🎯',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    }
  ];

  const concerns = [
    { id: 'acne-scars', label: 'Acne Scars', emoji: '🎯' },
    { id: 'wrinkles', label: 'Fine Lines & Wrinkles', emoji: '⏰' },
    { id: 'sagging', label: 'Skin Sagging', emoji: '📉' },
    { id: 'texture', label: 'Skin Texture', emoji: '✨' },
    { id: 'pigmentation', label: 'Pigmentation', emoji: '🌟' },
    { id: 'pores', label: 'Large Pores', emoji: '🔍' },
    { id: 'jowls', label: 'Jowls & Neck', emoji: '💫' },
    { id: 'body', label: 'Body Contouring', emoji: '💪' },
  ];

  const handleVote = () => {
    if (!hasVoted && selectedTreatment) {
      const newVotes = { ...votes };
      newVotes[selectedTreatment as keyof typeof votes] += 1;
      setVotes(newVotes);
      setHasVoted(true);
      
      const voteData = {
        treatment: selectedTreatment,
        concerns: selectedConcerns,
        email: email,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('eskeen_treatment_vote', JSON.stringify(voteData));
      
      if (email) {
        console.log('Interest registered:', voteData);
      }
      
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 5000);
    }
  };

  const toggleConcern = (concernId: string) => {
    setSelectedConcerns(prev => 
      prev.includes(concernId) 
        ? prev.filter(id => id !== concernId)
        : [...prev, concernId]
    );
  };

  const totalVotes = votes.co2 + votes.morpheus8 + votes.hifu;
  const getPercentage = (treatment: keyof typeof votes) => {
    return ((votes[treatment] / totalVotes) * 100).toFixed(1);
  };

  const leadingTreatment = Object.entries(votes).reduce((a, b) => 
    votes[a[0] as keyof typeof votes] > votes[b[0] as keyof typeof votes] ? a : b
  )[0];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-primary-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 130, 47, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(212, 130, 47, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">Help Us Decide • Coming 2025</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Vote for Our Next
            <span className="block gradient-text mt-2">Advanced Treatment</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Your voice matters! Help us choose which cutting-edge technology to bring to Eskeen Clinic next
          </p>
        </div>

        {/* Live Stats Bar */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold gradient-text">{totalVotes}</p>
              <p className="text-xs sm:text-sm text-neutral-600">Total Votes</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-green-500">{viewingCount}</p>
              <p className="text-xs sm:text-sm text-neutral-600">Viewing Now</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-primary-600">
                {leadingTreatment === 'co2' ? 'CO2' : 
                 leadingTreatment === 'morpheus8' ? 'Morpheus8' : 'HIFU'}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600">Leading</p>
            </div>
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {treatments.map((treatment) => {
            const votePercentage = getPercentage(treatment.id as keyof typeof votes);
            const isSelected = selectedTreatment === treatment.id;
            
            return (
              <div
                key={treatment.id}
                onClick={() => !hasVoted && setSelectedTreatment(treatment.id)}
                className={`relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 ${
                  !hasVoted ? 'cursor-pointer hover:shadow-2xl hover:scale-105' : 'cursor-default'
                } ${isSelected ? 'ring-4 ring-primary-400 shadow-2xl scale-105' : 'shadow-xl'}`}
              >
                {/* Progress Bar */}
                <div className="h-2 bg-neutral-100">
                  <div 
                    className={`h-full bg-gradient-to-r ${treatment.color} transition-all duration-1000`}
                    style={{ width: `${votePercentage}%` }}
                  />
                </div>

                <div className={`p-6 sm:p-8 bg-gradient-to-br ${treatment.bgColor}`}>
                  {/* Selected Badge */}
                  {isSelected && !hasVoted && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Icon & Stats */}
                    <div className="flex items-start justify-between">
                      <div className="text-4xl sm:text-5xl">{treatment.icon}</div>
                      <div className="text-right">
                        <p className="text-xl sm:text-2xl font-bold text-neutral-800">
                          {votes[treatment.id as keyof typeof votes]}
                        </p>
                        <p className="text-xs sm:text-sm text-primary-600 font-medium">
                          {votePercentage}%
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-2">{treatment.name}</h3>
                      <p className="text-sm text-neutral-600 mb-4">{treatment.description}</p>
                    </div>

                    {/* Benefits */}
                    <ul className="space-y-2">
                      {treatment.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-700">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Voting Section */}
        {!hasVoted ? (
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-6">
              What skin concerns would you like to address?
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {concerns.map(concern => (
                <button
                  key={concern.id}
                  onClick={() => toggleConcern(concern.id)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                    selectedConcerns.includes(concern.id)
                      ? 'border-primary-400 bg-primary-50 shadow-lg scale-105'
                      : 'border-neutral-200 hover:border-primary-200 bg-white'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl mb-1 sm:mb-2 block">{concern.emoji}</span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-700">{concern.label}</span>
                </button>
              ))}
            </div>

            {/* Email & Submit */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6">
              <h4 className="font-semibold text-neutral-800 mb-4">
                Get early-bird pricing when we launch!
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full border border-primary-200 bg-white text-neutral-700 placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-200"
                />
                <button
                  onClick={handleVote}
                  disabled={!selectedTreatment}
                  className={`px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedTreatment
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-xl hover:scale-105'
                      : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  Cast Your Vote
                </button>
              </div>
              <p className="text-xs text-neutral-600 mt-3">
                Be first to know when your chosen treatment launches with exclusive offers
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 mb-12">
            {showThankYou ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-3xl font-bold text-neutral-800 mb-2">Thank You!</h3>
                <p className="text-neutral-600">
                  You voted for <span className="font-bold text-primary-600">
                    {treatments.find(t => t.id === selectedTreatment)?.name}
                  </span>
                </p>
                {email && (
                  <p className="text-sm text-neutral-500 mt-2">
                    We\'ll notify you when it launches with exclusive pricing!
                  </p>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-neutral-800 mb-2">
                  You\'ve voted for <span className="font-bold text-primary-600">
                    {treatments.find(t => t.id === selectedTreatment)?.name}
                  </span>!
                </p>
                <p className="text-neutral-600 mb-6">
                  Share with friends to help your choice win:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="px-6 py-3 bg-primary-50 text-primary-600 rounded-full hover:bg-primary-100 transition-colors font-medium">
                    <span className="mr-2">📱</span> Share Results
                  </button>
                  <button className="px-6 py-3 bg-primary-50 text-primary-600 rounded-full hover:bg-primary-100 transition-colors font-medium">
                    <span className="mr-2">👥</span> Invite Friends
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <p className="text-base sm:text-lg text-neutral-600">
            While we prepare these exciting new treatments, explore what\'s available now:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/#consultation"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Skin Assessment
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/prp"
              className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-primary-50 transition-all duration-300"
            >
              Explore PRP Therapy
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-600">
              © 2024 Eskeen Clinic. Advanced aesthetics coming soon.
            </p>
            <a
              href="/"
              className="text-primary-600 hover:text-primary-700 transition-colors font-medium text-sm"
            >
              Back to Main Site →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}