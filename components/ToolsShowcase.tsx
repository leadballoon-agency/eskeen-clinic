'use client';

export default function ToolsShowcase() {
  const tools = [
    {
      icon: '🔬',
      title: 'AI Skin Analysis',
      description: 'Get personalised treatment recommendations'
    },
    {
      icon: '💊',
      title: 'Treatment Finder',
      description: 'Compare and explore all options'
    },
    {
      icon: '📸',
      title: 'Transformation Gallery',
      description: 'See real results from our patients'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Discover Our
            <span className="gradient-text"> Advanced Tools</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Use our suite of AI-powered tools to find your perfect treatment path
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="font-bold text-lg mb-2">{tool.title}</h3>
              <p className="text-neutral-600 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="/tools"
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Explore All Tools
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}