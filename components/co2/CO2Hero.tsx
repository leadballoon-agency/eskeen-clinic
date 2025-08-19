'use client';

export default function CO2Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 130, 47, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(212, 130, 47, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(239, 185, 107, 0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding pt-32 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-yellow-300 font-medium text-sm">NEW: Advanced CO2 Laser Treatment</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your Skin with
              <span className="block bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">
                CO2 Laser Therapy
              </span>
            </h1>

            <p className="text-xl text-primary-100 leading-relaxed">
              Experience the gold standard in skin resurfacing. Nurse Elanda brings 
              professional CO2 laser treatments to Eskeen Clinic - dramatically improve 
              acne scars, fine lines, and skin texture in just one session.
            </p>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Minimal Downtime</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Visible Results</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#consultation"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-400 to-primary-500 text-neutral-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary-400/30 transition-all duration-300 hover:scale-105"
              >
                Check Availability
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <button className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Watch Treatment Video
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="pt-4 border-t border-white/20">
              <p className="text-sm text-primary-200 mb-2">Trusted by hundreds of clients</p>
              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-400">
                  {'★★★★★'}
                </div>
                <span className="text-white font-medium">4.9/5 from 200+ reviews</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl glass-effect backdrop-blur-lg">
              <div className="aspect-[4/5] relative">
                <img
                  src="/images/clinic/hero-image.jpeg"
                  alt="Eskeen Clinic CO2 Laser Treatment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-primary-800/30"></div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-300 font-bold text-lg">Launch Package</p>
                    <p className="text-white text-sm">3 Sessions + Aftercare Kit</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-sm">Complete Package</p>
                    <p className="text-primary-300 font-bold text-xl">£600</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float opacity-30 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-primary-300 to-primary-500 rounded-full animate-float animation-delay-2000 opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}