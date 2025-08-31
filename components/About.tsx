'use client';

export default function About() {
  const stats = [
    { value: '18+', label: 'Years Combined' },
    { value: '1000+', label: 'Happy Clients' },
    { value: '5000+', label: 'Treatments' },
    { value: '5★', label: 'Rating' },
  ];

  const elandaSpecialties = [
    'Russian Lips Specialist',
    'Facial Balancing Expert',
    'Botox Treatments',
    'Non-Surgical Rhinoplasty',
  ];

  const mavraSpecialties = [
    'Facial Balancing',
    'Lips, Chin, Cheek & Jaw Fillers',
    'Skin Boosters & Polynucleotides',
    'NAD+ Therapy',
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase">Meet Your Practitioners</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Expert Care from
            <span className="block gradient-text">Two Leading Practitioners</span>
          </h2>
        </div>

        {/* Nurse Elanda */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] relative">
                <img
                  src="/images/Mavra.jpg"
                  alt="Nurse Elanda - Advanced Aesthetics Practitioner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/10 to-primary-300/10"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🇬🇷</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Greek Excellence</p>
                  <p className="text-neutral-600">International Expertise</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-3xl font-bold">
                Nurse Elanda
                <span className="block text-xl text-primary-600 font-normal mt-2">
                  Advanced Aesthetics Practitioner
                </span>
              </h3>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed">
              With 9 years of experience in the medical industry, I bring expertise from Greece 
              to London's aesthetic scene. Having spent the past 5 years refining my skills in 
              one of the best and most highly rated clinics in London, I specialise in creating 
              natural, beautiful results.
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              My goal is to deliver safe, precise, and tailored treatments to help you achieve 
              the best version of yourself. ✨
            </p>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">Specialisations</h4>
              <ul className="grid grid-cols-2 gap-2">
                {elandaSpecialties.map((specialty, index) => (
                  <li key={index} className="flex items-center text-neutral-700">
                    <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mavra */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <h3 className="font-display text-3xl font-bold">
                Mavra
                <span className="block text-xl text-primary-600 font-normal mt-2">
                  Advanced Aesthetician & Prescriber
                </span>
              </h3>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed">
              I'm an Advanced Aesthetician for the last 9 years, with a highly qualified medical 
              background. I specialise in Botox and Dermal fillers, anti-ageing treatments, and 
              skin rejuvenation using the latest techniques and technologies.
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              At Eskeen, we put our client's needs first, enhancing your natural beauty with 
              confidence, precision, and care. Get in touch for more information or free consultation.
            </p>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">Specialisations</h4>
              <ul className="grid grid-cols-2 gap-2">
                {mavraSpecialties.map((specialty, index) => (
                  <li key={index} className="flex items-center text-neutral-700">
                    <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-primary-700 font-medium">Licensed Prescriber</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] relative">
                <img
                  src="/images/Elanda.jpg"
                  alt="Mavra - Advanced Aesthetician & Prescriber"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/10 to-primary-300/10"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Medical Excellence</p>
                  <p className="text-neutral-600">9 Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-center mb-8">The Eskeen Promise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-neutral-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-600 mt-8 max-w-2xl mx-auto">
            Together, we bring you the perfect combination of medical expertise, artistic vision, 
            and personalised care to help you achieve your aesthetic goals safely and beautifully.
          </p>
        </div>
      </div>
    </section>
  );
}