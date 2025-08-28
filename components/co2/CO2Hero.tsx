'use client';

export default function CO2Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-primary-50">
      <div className="w-full px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            {/* Simple Badge */}
            <div className="inline-flex items-center px-3 py-1.5 bg-primary-100 rounded-full text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-primary-700 font-medium">Advanced Skin Resurfacing</span>
            </div>

            {/* Clean Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
              Transform Your Skin
              <span className="block gradient-text">With CO2 Laser</span>
            </h1>

            {/* Brief Subheading */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              The gold standard treatment for acne scars, wrinkles, and skin texture.
              See dramatic results that last for years.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto py-8">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-600">70-80%</p>
                <p className="text-xs text-neutral-600">Scar Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-600">1-3</p>
                <p className="text-xs text-neutral-600">Sessions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-600">95%</p>
                <p className="text-xs text-neutral-600">Satisfaction</p>
              </div>
            </div>

            {/* Two Clear CTAs */}
            <div className="space-y-3 max-w-sm mx-auto">
              <a
                href="https://www.treatwell.co.uk/place/eskeen-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-full font-medium text-base hover:shadow-xl transition-all duration-300"
              >
                Book Free Consultation
              </a>
              
              <a
                href="#assessment"
                className="block w-full border-2 border-primary-500 text-primary-600 px-6 py-4 rounded-full font-medium text-base hover:bg-primary-50 transition-all duration-300"
              >
                Take 60-Second Assessment
              </a>
            </div>

            {/* Simple Trust Bar */}
            <div className="pt-8">
              <div className="flex justify-center items-center space-x-8 text-xs text-neutral-500">
                <span>FDA Approved</span>
                <span>•</span>
                <span>500+ Patients</span>
                <span>•</span>
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}