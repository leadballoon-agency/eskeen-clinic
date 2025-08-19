'use client';

import { useState, useEffect } from 'react';

interface ComingSoonVotingProps {
  onClose: () => void;
}

export default function ComingSoonVoting({ onClose }: ComingSoonVotingProps) {
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
  
  useEffect(() => {
    const votedData = localStorage.getItem('eskeen_treatment_vote');
    if (votedData) {
      const parsed = JSON.parse(votedData);
      setHasVoted(true);
      setSelectedTreatment(parsed.treatment);
    }
  }, []);

  const treatments = [
    {
      id: 'co2',
      name: 'CO2 Laser',
      description: 'Deep resurfacing for scars & wrinkles',
      icon: '🔬',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'morpheus8',
      name: 'Morpheus8',
      description: 'RF microneedling for tightening',
      icon: '⚡',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'hifu',
      name: 'HIFU',
      description: 'Non-surgical facelift technology',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const concerns = [
    { id: 'acne-scars', label: 'Acne Scars', emoji: '🎯' },
    { id: 'wrinkles', label: 'Wrinkles', emoji: '⏰' },
    { id: 'sagging', label: 'Sagging', emoji: '📉' },
    { id: 'texture', label: 'Texture', emoji: '✨' },
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
      
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
      }, 3000);
    }
  };

  const totalVotes = votes.co2 + votes.morpheus8 + votes.hifu;
  const getPercentage = (treatment: keyof typeof votes) => {
    return ((votes[treatment] / totalVotes) * 100).toFixed(0);
  };

  const leadingTreatment = Object.entries(votes).reduce((a, b) => 
    votes[a[0] as keyof typeof votes] > votes[b[0] as keyof typeof votes] ? a : b
  )[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Vote for Our Next Treatment</h2>
              <p className="opacity-90">Help us decide which advanced technology to bring next!</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/30 transition-colors flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-8">
          {/* Live Stats */}
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-4 mb-8">
            <div className="flex justify-around items-center text-center">
              <div>
                <p className="text-2xl font-bold text-primary-600">{totalVotes}</p>
                <p className="text-sm text-neutral-600">Total Votes</p>
              </div>
              <div className="h-10 w-px bg-neutral-200"></div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {leadingTreatment === 'co2' ? 'CO2' : 
                   leadingTreatment === 'morpheus8' ? 'Morpheus8' : 'HIFU'}
                </p>
                <p className="text-sm text-neutral-600">Leading</p>
              </div>
            </div>
          </div>

          {/* Treatment Options */}
          <h3 className="text-xl font-bold mb-4">Select your preferred treatment:</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {treatments.map((treatment) => (
              <button
                key={treatment.id}
                onClick={() => !hasVoted && setSelectedTreatment(treatment.id)}
                disabled={hasVoted}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedTreatment === treatment.id 
                    ? 'border-primary-500 bg-primary-50 scale-105 shadow-lg' 
                    : 'border-neutral-200 hover:border-primary-300 bg-white'
                } ${hasVoted ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-100 rounded-t-2xl overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${treatment.color} transition-all duration-1000`}
                    style={{ width: `${getPercentage(treatment.id as keyof typeof votes)}%` }}
                  />
                </div>

                <div className="text-center space-y-3 pt-2">
                  <div className="text-4xl">{treatment.icon}</div>
                  <h4 className="font-bold text-lg">{treatment.name}</h4>
                  <p className="text-sm text-neutral-600">{treatment.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">
                      {votes[treatment.id as keyof typeof votes]}
                    </span>
                    <span className="text-sm text-neutral-500">
                      ({getPercentage(treatment.id as keyof typeof votes)}%)
                    </span>
                  </div>
                </div>

                {selectedTreatment === treatment.id && !hasVoted && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Concerns Selection */}
          {!hasVoted && (
            <>
              <h3 className="text-lg font-semibold mb-3">What concerns interest you? (optional)</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {concerns.map(concern => (
                  <button
                    key={concern.id}
                    onClick={() => setSelectedConcerns(prev => 
                      prev.includes(concern.id) 
                        ? prev.filter(id => id !== concern.id)
                        : [...prev, concern.id]
                    )}
                    className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                      selectedConcerns.includes(concern.id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-200 hover:border-primary-300'
                    }`}
                  >
                    <span className="mr-2">{concern.emoji}</span>
                    <span className="text-sm font-medium">{concern.label}</span>
                  </button>
                ))}
              </div>

              {/* Email & Submit */}
              <div className="bg-primary-50 rounded-2xl p-6">
                <h4 className="font-semibold mb-3">Get exclusive launch pricing!</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-full border border-neutral-200 focus:outline-none focus:border-primary-500"
                  />
                  <button
                    onClick={handleVote}
                    disabled={!selectedTreatment}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedTreatment
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-xl hover:scale-105'
                        : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                    }`}
                  >
                    Cast Your Vote
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Thank You Message */}
          {hasVoted && (
            <div className="text-center py-8">
              {showThankYou ? (
                <div className="animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-neutral-600">Your vote has been counted</p>
                </div>
              ) : (
                <>
                  <p className="text-lg mb-2">
                    You voted for <span className="font-bold text-primary-600">
                      {treatments.find(t => t.id === selectedTreatment)?.name}
                    </span>
                  </p>
                  <p className="text-neutral-600">We'll notify you when it launches!</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}