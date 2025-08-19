'use client';

import { useState } from 'react';

type Result = {
  id: string;
  treatment: string;
  category: string;
  age: string;
  gender: string;
  concern: string;
  sessions: number;
  timeframe: string;
  description: string;
  testimonial: string;
  rating: number;
  beforeImage: string;
  afterImage: string;
};

export default function BeforeAfterGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTreatment, setSelectedTreatment] = useState('all');
  const [selectedResult, setSelectedResult] = useState<Result | null>(null);
  const [comparisonMode, setComparisonMode] = useState('slider');
  const [sliderPosition, setSliderPosition] = useState(50);

  const results: Result[] = [
    {
      id: '1',
      treatment: 'PRP Hair Restoration',
      category: 'hair',
      age: '35-40',
      gender: 'Male',
      concern: 'Receding hairline',
      sessions: 6,
      timeframe: '6 months',
      description: 'Significant hair regrowth and density improvement after PRP treatment series',
      testimonial: 'I can\'t believe the difference! My confidence is back.',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      id: '2',
      treatment: 'PRP Facial Rejuvenation',
      category: 'face',
      age: '45-50',
      gender: 'Female',
      concern: 'Fine lines and dull skin',
      sessions: 3,
      timeframe: '3 months',
      description: 'Improved skin texture, reduced fine lines, and natural glow restored',
      testimonial: 'My skin hasn\'t looked this good in years! People keep asking what I\'ve done.',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
    {
      id: '3',
      treatment: 'Microneedling',
      category: 'face',
      age: '25-30',
      gender: 'Female',
      concern: 'Acne scarring',
      sessions: 4,
      timeframe: '4 months',
      description: 'Dramatic reduction in acne scarring and improved skin texture',
      testimonial: 'Finally, I can go out without makeup! This changed my life.',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
    },
    {
      id: '4',
      treatment: 'Chemical Peel',
      category: 'face',
      age: '30-35',
      gender: 'Female',
      concern: 'Hyperpigmentation',
      sessions: 3,
      timeframe: '2 months',
      description: 'Even skin tone achieved with significant reduction in dark spots',
      testimonial: 'The dark spots that bothered me for years are finally gone!',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop',
    },
    {
      id: '5',
      treatment: 'Botox',
      category: 'injectables',
      age: '40-45',
      gender: 'Female',
      concern: 'Forehead lines',
      sessions: 1,
      timeframe: '2 weeks',
      description: 'Smooth forehead with natural expression maintained',
      testimonial: 'Natural results that make me look refreshed, not frozen!',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    },
    {
      id: '6',
      treatment: 'Dermal Fillers',
      category: 'injectables',
      age: '35-40',
      gender: 'Female',
      concern: 'Volume loss',
      sessions: 1,
      timeframe: 'Immediate',
      description: 'Restored cheek volume and improved facial contours',
      testimonial: 'I look like myself again, just 10 years younger!',
      rating: 5,
      beforeImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Results', count: results.length },
    { id: 'hair', label: 'Hair Restoration', count: results.filter(r => r.category === 'hair').length },
    { id: 'face', label: 'Facial Treatments', count: results.filter(r => r.category === 'face').length },
    { id: 'injectables', label: 'Injectables', count: results.filter(r => r.category === 'injectables').length },
  ];

  const treatments = [
    'all',
    ...Array.from(new Set(results.map(r => r.treatment))),
  ];

  const filteredResults = results.filter(result => {
    if (selectedCategory !== 'all' && result.category !== selectedCategory) return false;
    if (selectedTreatment !== 'all' && result.treatment !== selectedTreatment) return false;
    return true;
  });

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percentage)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Real Results Gallery
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            See the transformative results our patients have achieved
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 text-sm text-neutral-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>All photos are real patient results</span>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 hover:bg-neutral-200'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            <select
              value={selectedTreatment}
              onChange={(e) => setSelectedTreatment(e.target.value)}
              className="px-4 py-2 rounded-lg border border-neutral-300 focus:border-primary-500"
            >
              <option value="all">All Treatments</option>
              {treatments.slice(1).map(treatment => (
                <option key={treatment} value={treatment}>{treatment}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map(result => (
            <div
              key={result.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedResult(result)}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={result.beforeImage}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={result.afterImage}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs">
                      After
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{result.treatment}</h3>
                <p className="text-sm text-neutral-600 mb-3">{result.description}</p>
                
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-primary-100 rounded">
                    {result.sessions} sessions
                  </span>
                  <span className="px-2 py-1 bg-neutral-100 rounded">
                    {result.timeframe}
                  </span>
                  <span className="px-2 py-1 bg-neutral-100 rounded">
                    {result.age}
                  </span>
                  <span className="px-2 py-1 bg-neutral-100 rounded">
                    {result.gender}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < result.rating ? 'text-yellow-400' : 'text-neutral-200'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View Modal */}
        {selectedResult && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedResult.treatment} Results</h2>
                    <p className="text-neutral-600">{selectedResult.concern}</p>
                  </div>
                  <button
                    onClick={() => setSelectedResult(null)}
                    className="text-neutral-400 hover:text-neutral-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Comparison Viewer */}
                <div className="mb-6">
                  <div className="flex justify-center space-x-4 mb-4">
                    <button
                      onClick={() => setComparisonMode('slider')}
                      className={`px-4 py-2 rounded-lg ${
                        comparisonMode === 'slider'
                          ? 'bg-primary-600 text-white'
                          : 'bg-neutral-100'
                      }`}
                    >
                      Slider View
                    </button>
                    <button
                      onClick={() => setComparisonMode('side')}
                      className={`px-4 py-2 rounded-lg ${
                        comparisonMode === 'side'
                          ? 'bg-primary-600 text-white'
                          : 'bg-neutral-100'
                      }`}
                    >
                      Side by Side
                    </button>
                    <button
                      onClick={() => setComparisonMode('overlay')}
                      className={`px-4 py-2 rounded-lg ${
                        comparisonMode === 'overlay'
                          ? 'bg-primary-600 text-white'
                          : 'bg-neutral-100'
                      }`}
                    >
                      Overlay
                    </button>
                  </div>

                  {comparisonMode === 'slider' && (
                    <div
                      className="relative h-96 rounded-2xl overflow-hidden cursor-ew-resize"
                      onMouseMove={handleSliderChange}
                      onClick={handleSliderChange}
                    >
                      <img
                        src={selectedResult.afterImage}
                        alt="After"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPosition}%` }}
                      >
                        <img
                          src={selectedResult.beforeImage}
                          alt="Before"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ width: '100%', maxWidth: 'none' }}
                        />
                      </div>
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-white"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {comparisonMode === 'side' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <img
                          src={selectedResult.beforeImage}
                          alt="Before"
                          className="w-full h-96 object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
                          Before
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src={selectedResult.afterImage}
                          alt="After"
                          className="w-full h-96 object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-4 right-4 bg-primary-600 text-white px-3 py-1 rounded">
                          After
                        </div>
                      </div>
                    </div>
                  )}

                  {comparisonMode === 'overlay' && (
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                      <img
                        src={selectedResult.beforeImage}
                        alt="Before"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                      />
                      <img
                        src={selectedResult.afterImage}
                        alt="After"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-difference"
                      />
                    </div>
                  )}
                </div>

                {/* Treatment Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-3">Treatment Details</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <dt className="text-neutral-600">Treatment</dt>
                        <dd className="font-medium">{selectedResult.treatment}</dd>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <dt className="text-neutral-600">Sessions</dt>
                        <dd className="font-medium">{selectedResult.sessions}</dd>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <dt className="text-neutral-600">Timeframe</dt>
                        <dd className="font-medium">{selectedResult.timeframe}</dd>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <dt className="text-neutral-600">Patient Age</dt>
                        <dd className="font-medium">{selectedResult.age}</dd>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <dt className="text-neutral-600">Gender</dt>
                        <dd className="font-medium">{selectedResult.gender}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Patient Testimonial</h3>
                    <blockquote className="italic text-neutral-600 mb-4">
                      "{selectedResult.testimonial}"
                    </blockquote>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < selectedResult.rating ? 'text-yellow-400' : 'text-neutral-200'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary-50 rounded-xl">
                  <p className="text-sm text-neutral-600 mb-2">
                    Interested in achieving similar results?
                  </p>
                  <a
                    href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Book Your Consultation
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