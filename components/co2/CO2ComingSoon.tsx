'use client';

import { useState, useEffect } from 'react';

export default function CO2ComingSoon() {
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
      benefits: ['Deep resurfacing', 'Scar reduction', 'Wrinkle treatment'],
      icon: '🔬',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'morpheus8',
      name: 'Morpheus8',
      description: 'RF microneedling for skin tightening & contouring',
      benefits: ['Skin tightening', 'Body contouring', 'Collagen boost'],
      icon: '⚡',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'hifu',
      name: 'HIFU',
      description: 'Non-surgical facelift using ultrasound technology',
      benefits: ['Non-invasive lift', 'Jawline definition', 'No downtime'],
      icon: '🎯',
      color: 'from-blue-500 to-cyan-600'
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
    <section className="min-h-screen py-24 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 130, 47, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(212, 130, 47, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></span>
            <span className="text-yellow-300 font-bold text-lg">Help Us Decide • Coming 2025</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white">
            Vote for Our Next
            <span className="block bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
              Advanced Treatment
            </span>
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your voice matters! Help us choose which cutting-edge technology to bring to Eskeen Clinic next
          </p>
        </div>

        {/* Live Stats */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 mb-8 border border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-300">{totalVotes}</p>
              <p className="text-sm opacity-80">Total Votes</p>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">{viewingCount}</p>
              <p className="text-sm opacity-80">Viewing Now</p>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">
                {leadingTreatment === 'co2' ? 'CO2 Laser' : 
                 leadingTreatment === 'morpheus8' ? 'Morpheus8' : 'HIFU'}
              </p>
              <p className="text-sm opacity-80">Currently Leading</p>
            </div>
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => !hasVoted && setSelectedTreatment(treatment.id)}
              className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                selectedTreatment === treatment.id 
                  ? 'border-primary-400 scale-105 shadow-2xl shadow-primary-400/30' 
                  : 'border-white/20 hover:border-white/40 hover:scale-102'
              } ${hasVoted ? 'cursor-default' : ''}`}
            >
              {/* Vote Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-white/10 rounded-t-3xl overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${treatment.color} transition-all duration-1000`}
                  style={{ width: `${getPercentage(treatment.id as keyof typeof votes)}%` }}
                />
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-5xl">{treatment.icon}</div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">
                      {votes[treatment.id as keyof typeof votes]}
                    </p>
                    <p className="text-sm text-primary-300">
                      {getPercentage(treatment.id as keyof typeof votes)}%
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{treatment.name}</h3>
                  <p className="text-primary-100 text-sm mb-4">{treatment.description}</p>
                </div>

                <ul className="space-y-2">
                  {treatment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-primary-200">
                      <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {selectedTreatment === treatment.id && !hasVoted && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Voting Section */}
        {!hasVoted ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              What skin concerns would you like to address?
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {concerns.map(concern => (
                <button
                  key={concern.id}
                  onClick={() => toggleConcern(concern.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedConcerns.includes(concern.id)
                      ? 'border-primary-400 bg-primary-500/20 shadow-lg scale-105'
                      : 'border-white/20 hover:border-white/40 bg-white/5'
                  }`}
                >
                  <span className="text-2xl mb-2 block">{concern.emoji}</span>
                  <span className="text-sm font-medium text-white">{concern.label}</span>
                </button>
              ))}
            </div>

            {/* Email & Submit */}
            <div className="bg-primary-500/20 rounded-2xl p-6">
              <h4 className="font-semibold text-white mb-3">Get early-bird pricing when we launch!</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary-400"
                />
                <button
                  onClick={handleVote}
                  disabled={!selectedTreatment}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                    selectedTreatment
                      ? 'bg-gradient-to-r from-primary-400 to-primary-500 text-neutral-900 hover:shadow-2xl hover:scale-105'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  Cast Your Vote
                </button>
              </div>
              <p className="text-xs text-primary-200 mt-2">
                Be first to know when your chosen treatment launches
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            {showThankYou ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-primary-100">
                  You voted for <span className="font-bold text-primary-300">
                    {treatments.find(t => t.id === selectedTreatment)?.name}
                  </span>
                </p>
                {email && (
                  <p className="text-sm text-primary-200 mt-2">
                    We\'ll notify you when it launches with exclusive pricing!
                  </p>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-white mb-2">
                  You\'ve voted for <span className="font-bold text-primary-300">
                    {treatments.find(t => t.id === selectedTreatment)?.name}
                  </span>!
                </p>
                <p className="text-primary-100 mb-6">
                  Share with friends to help your choice win:
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                    <span className="mr-2">📱</span> Share Results
                  </button>
                  <button className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                    <span className="mr-2">👥</span> Invite Friends
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-primary-100 mb-6">
            While we prepare these exciting new treatments, explore what\'s available now:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-500 text-neutral-900 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Skin Assessment
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/prp"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Explore PRP Therapy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}