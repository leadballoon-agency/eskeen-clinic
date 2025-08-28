'use client';

export default function CO2Problem() {
  const problems = [
    {
      title: 'Living with Acne Scars',
      description: 'You\'ve tried everything, but those scars are still there every morning',
      impact: 'Avoiding mirrors, photos, and close conversations',
      icon: '😔',
      color: 'from-red-50 to-orange-50',
      stat: '85% feel self-conscious daily'
    },
    {
      title: 'Fighting Visible Aging',
      description: 'Your face doesn\'t match how young you feel inside',
      impact: 'Feeling invisible or less confident at work and social events',
      icon: '⏰',
      color: 'from-blue-50 to-cyan-50',
      stat: '73% avoid video calls'
    },
    {
      title: 'Dealing with Rough Texture',
      description: 'Makeup sits wrong, skincare doesn\'t help anymore',
      impact: 'Constant worry about how your skin looks in different lighting',
      icon: '😣',
      color: 'from-purple-50 to-pink-50',
      stat: '91% have tried 5+ products'
    },
    {
      title: 'Hiding Sun Damage',
      description: 'Dark spots and uneven tone that make you look older',
      impact: 'Heavy concealer every day, avoiding natural light',
      icon: '☀️',
      color: 'from-yellow-50 to-orange-50',
      stat: '67% spend £500+ yearly on cover-ups'
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">Common Skin Concerns</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold px-4">
            We Understand How
            <span className="block gradient-text mt-2">Your Skin Makes You Feel</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto px-4 font-medium">
            You're not alone. Thousands of people struggle with the same concerns every day.
          </p>
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto px-4 mt-2">
            The emotional toll is real, and we're here to help you break free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`h-2 bg-gradient-to-r ${problem.color}`}></div>
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>
                  <div className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
                    {problem.stat}
                  </div>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-neutral-800">{problem.title}</h3>
                <p className="text-neutral-700 text-sm sm:text-base font-medium mb-2">{problem.description}</p>
                <p className="text-neutral-500 text-xs sm:text-sm italic">{problem.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-100 to-primary-200 p-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
                <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800">
                    You Deserve Better Than Temporary Solutions
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-600">
                    CO2 laser therapy goes deep beneath the surface to stimulate your body's natural 
                    collagen production, creating lasting change from within.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4">
                    <div className="flex items-center space-x-1 sm:space-x-2 bg-primary-50 px-3 sm:px-4 py-2 rounded-full">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base font-medium text-neutral-700">FDA Approved</span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 bg-primary-50 px-3 sm:px-4 py-2 rounded-full">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base font-medium text-neutral-700">Clinically Proven</span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 bg-primary-50 px-3 sm:px-4 py-2 rounded-full">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base font-medium text-neutral-700">Long-lasting Results</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <a
                      href="#solution"
                      className="inline-flex items-center justify-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      Discover the Solution
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}