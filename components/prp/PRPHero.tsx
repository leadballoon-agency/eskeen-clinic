'use client';

export default function PRPHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 130, 47, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(212, 130, 47, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">Natural Hair & Skin Rejuvenation</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            PRP Therapy for
            <span className="block gradient-text mt-2">Hair Loss & Facial Rejuvenation</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Harness your body's natural healing power with Platelet-Rich Plasma therapy. 
            Effective for both men and women seeking hair restoration or facial rejuvenation 
            without surgery or synthetic fillers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <a
              href="#assessment"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="hidden sm:inline">Start Your Assessment - From £175</span>
              <span className="sm:hidden">Start Assessment - £175</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-primary-50 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
            <div className="relative group">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/images/clinic/prp-man.png"
                    alt="Male Hair Restoration PRP"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Male Hair Restoration</h3>
                    <p className="text-sm sm:text-base text-white/90">Stop hair loss • Stimulate growth</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/images/clinic/woman-thinning-hair.png"
                    alt="Female Hair Restoration PRP"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Female Hair Restoration</h3>
                    <p className="text-sm sm:text-base text-white/90">Restore thickness • Natural results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base text-neutral-700 font-medium">100% Natural</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base text-neutral-700 font-medium">For Men & Women</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base text-neutral-700 font-medium">Minimal Downtime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}