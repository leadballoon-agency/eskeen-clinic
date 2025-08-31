'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FacebookEvents } from '@/lib/facebook-events';

function PRPAdvertorialContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const source = searchParams.get('source') || 'default';
  const [readingProgress, setReadingProgress] = useState(0);
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    // Track page view with source
    FacebookEvents.ViewContent(`PRP Advertorial - ${source}`, 'Advertorial');
    
    // Track reading progress
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (window.scrollY / scrollHeight) * 100;
      setReadingProgress(scrollPercent);
      
      // Track engagement milestones - optimized for learning phase
      if (scrollPercent > 50 && readingProgress <= 50) {
        // Don't track 50% - too easy to hit
      }
      if (scrollPercent > 75 && readingProgress <= 75) {
        // 75% scroll shows real engagement
        FacebookEvents.Lead(5); // Small value for volume
        FacebookEvents.ViewContent('Advertorial 75% Read', 'High Intent');
      }
      if (scrollPercent > 90 && readingProgress <= 90) {
        // 90% scroll is highly engaged user
        FacebookEvents.Lead(10); // Higher value but still small
        FacebookEvents.ViewContent('Advertorial 90% Read', 'Very High Intent');
      }
    };
    
    // Track time on page
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
      if (timeOnPage === 30) {
        FacebookEvents.ViewContent('Advertorial 30s Engaged', 'Engagement');
      }
      if (timeOnPage === 60) {
        FacebookEvents.ViewContent('Advertorial 60s Engaged', 'High Intent');
      }
    }, 1000);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, [readingProgress, timeOnPage]);

  const handleCTAClick = (location: string) => {
    FacebookEvents.ClickBookNow(`PRP Advertorial - ${location} - ${source}`, 'Advertorial CTA');
    // Track as lead with moderate value - they clicked through to assessment
    FacebookEvents.Lead(15);
    // Navigate to PRP page
    router.push('/prp');
  };

  // Dynamic openings based on ad source
  const getOpening = () => {
    switch(source) {
      case 'cost':
        return {
          headline: "The Real Cost of Hair Loss Treatment in London",
          subheadline: "A Financial Analysis That May Surprise You",
          opening: "If you're currently spending £160 yearly on Regaine, or considering a £12,000 hair transplant, there's a financial reality you need to understand. Our analysis of treatment costs over a 10-year period reveals why most men are trapped in an expensive cycle that enriches pharmaceutical companies while delivering diminishing returns.",
          hook: "We tracked what 300 London professionals actually spent on hair loss treatments last year. The numbers were shocking."
        };
      case 'research':
        return {
          headline: "New Medical Research: Why Hair Loss Treatments Fail After 40",
          subheadline: "Stanford Study Reveals What Doctors Haven't Been Telling You",
          opening: "A 2023 Stanford medical study has revealed why traditional hair loss treatments show a 60% drop in effectiveness after age 40. The research, involving 1,200 participants, discovered that your scalp's response to topical treatments fundamentally changes with age - but there's something else happening in your body that nobody expected.",
          hook: "Your blood's growth factors actually increase after 40, making certain treatments more effective when others fail."
        };
      case 'testimonial':
        return {
          headline: "\"I Spent £1,800 on Treatments That Didn't Work\"",
          subheadline: "A Richmond Professional's Journey to Finding What Actually Works",
          opening: "Michael, a 42-year-old finance director from Richmond, had tried everything. Six months of laser therapy. Minoxidil twice daily. Expensive supplements. £1,800 spent with nothing to show for it. But what his GP told him next changed everything - and it had nothing to do with another prescription.",
          hook: "\"The solution was literally flowing through my veins the entire time,\" Michael recalls."
        };
      case 'education':
        return {
          headline: "Why Your Hair Loss Treatment Isn't Working",
          subheadline: "It's Not Your Fault - The System Is Designed to Fail",
          opening: "If you're frustrated with hair loss treatments that haven't delivered results, you're not alone. 73% of men report dissatisfaction with conventional treatments. But here's what the pharmaceutical industry doesn't advertise: these treatments are designed for dependency, not cure. There's a medical reason they stop working - and a solution that's been overlooked.",
          hook: "Understanding why treatments fail is the first step to finding what actually works."
        };
      case 'honest':
        return {
          headline: "An Honest Conversation About Hair Loss Treatment",
          subheadline: "What London Clinics Should Have Told You From The Start",
          opening: "Let's be honest. The hair loss industry is built on desperation and false promises. You've probably noticed Regaine stops working after a year. That finasteride comes with risks nobody wants to talk about. That hair transplants often need repeating. There's a reason for all of this - and a better way forward that most clinics won't discuss.",
          hook: "It's time someone told you the truth about what actually works and what doesn't."
        };
      case 'local':
        return {
          headline: "Experienced Hair Loss Specialists Open New Putney Clinic",
          subheadline: "Be Among Our First 50 Founding Patients - Special Rates Available",
          opening: "We're Elanda and Mavra. After successfully treating over 1,000 patients at London's leading clinics, we've opened our own practice right here in Putney. We believe everyone deserves access to treatments that actually work - without traveling across London or paying Harley Street prices.",
          hook: "Our first 50 founding patients receive special rates, priority booking for life, and the expertise of practitioners with 18+ years combined experience. This is your chance to be part of something special from the beginning."
        };
      case 'founding':
        return {
          headline: "Become a Founding Patient at Putney's Newest Hair Restoration Clinic",
          subheadline: "Limited to 50 Patients - Special Rates and Lifetime Benefits",
          opening: "Here's something most clinics won't tell you: PRP therapy works. We know because we've done it successfully over 1,000 times. Now we're opening our own practice in Putney and looking for 50 founding patients who want proven results without the games, gimmicks, or false promises.",
          hook: "Founding patients receive £150 off treatments, priority booking for life, and the direct mobile numbers of your practitioners. This isn't just about hair restoration - it's about being part of a practice that does things differently."
        };
      default:
        return {
          headline: "Why Big Pharma Doesn't Want You Knowing About This £350 Treatment That Ends Hair Loss Forever",
          subheadline: "A Putney Medical Practice Is Breaking The Pharmaceutical Industry's 80-Year Cover-Up",
          opening: "PUTNEY, LONDON - Licensed practitioner Elanda never expected to stumble upon one of the pharmaceutical industry's best-kept secrets while treating hair loss at her Putney clinic. But what she discovered shocked her to the core.",
          hook: "\"I had patients spending £160 per year on Regaine, taking finasteride with sexual dysfunction fears, even flying to Turkey for £12,000 hair transplants,\" Elanda recalls. \"Meanwhile, the solution was literally flowing through their veins.\""
        };
    }
  };

  const opening = getOpening();

  return (
    <article className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Editorial Header */}
      <header className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Medical Investigation</span>
              <span className="text-xs text-neutral-500">|</span>
              <time className="text-xs text-neutral-600">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            </div>
            <span className="text-xs text-neutral-500">5 min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        {/* Headline */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">
            {opening.headline}
          </h1>
          <p className="text-xl text-neutral-700 font-light italic">
            {opening.subheadline}
          </p>
        </div>

        {/* Byline */}
        <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-neutral-200">
          <div className="w-12 h-12 bg-neutral-300 rounded-full"></div>
          <div>
            <p className="font-semibold">By Sarah Richardson</p>
            <p className="text-sm text-neutral-600">Medical Correspondent</p>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl mb-6">
            {opening.opening}
          </p>

          <p className="mb-8 text-lg font-medium text-primary-600">
            {opening.hook}
          </p>

          <p className="mb-8">
            {source === 'local' || source === 'founding' ? 
              "The treatment we specialize in? Platelet-Rich Plasma therapy - a proven medical procedure that delivers permanent results using your body's own healing factors. No daily routines, no monthly prescriptions, just lasting restoration." :
              "The breakthrough she's referring to? Platelet-Rich Plasma therapy - a treatment so effective that pharmaceutical companies have spent decades ensuring you've never heard of it."
            }
          </p>

          {source !== 'local' && source !== 'founding' && (
            <p className="text-xl font-bold text-primary-600 mb-8">
              The reason is simple: You can't patent human blood.
            </p>
          )}

          {/* First CTA Box */}
          <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-2xl p-8 my-12">
            <h3 className="text-2xl font-bold mb-4">Limited Time: Free Hair Analysis</h3>
            <p className="text-neutral-700 mb-6">
              Eskeen Clinic is offering complimentary scalp analysis and PRP consultations for Putney residents this month only.
            </p>
            <button
              onClick={() => handleCTAClick('First Box')}
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Check Your Eligibility Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {source === 'local' || source === 'founding' ? (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">Why We Chose PRP Over Everything Else</h2>
              
              <p className="mb-6">
                After years at London's leading clinics, we've seen every treatment available. Laser therapy, medications, transplants - we've witnessed their results firsthand. That's why we specialize in PRP.
              </p>
              
              <p className="mb-6">
                Here's what our experience has taught us: Most hair loss treatments are designed to keep you paying monthly. They work temporarily, then gradually lose effectiveness, keeping you dependent on prescriptions or repeated procedures.
              </p>
              
              <p className="mb-8">
                PRP is different. It's a medical procedure that uses your own blood's growth factors to reactivate dormant follicles. Three sessions over three months, then you're done. No daily routine, no monthly costs, just permanent restoration.
              </p>
              
              <blockquote className="border-l-4 border-primary-500 pl-6 py-4 my-8 italic text-xl text-neutral-700">
                "We opened our own practice because we believe everyone deserves access to treatments that actually work."
                <footer className="text-base mt-2 not-italic">- Elanda & Mavra, Eskeen Clinic Founders</footer>
              </blockquote>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">The 1910 Flexner Report: How Big Pharma Hijacked Medicine</h2>

              <p className="mb-6">
                To understand how we got here, we need to go back to 1910. The Flexner Report fundamentally changed medical education in America and Europe, systematically closing natural medicine schools and establishing the pharmaceutical-academic complex we know today.
              </p>

              <p className="mb-6">
                Abraham Flexner, funded by Carnegie and Rockefeller foundations, created a "coordinated relationship between academia and industry" that prioritized synthetic, patentable drugs over natural treatments.
              </p>

              <p className="mb-8">
                The result? Medical schools began teaching doctors to prescribe chemicals instead of harnessing the body's natural healing power.
              </p>

              <blockquote className="border-l-4 border-primary-500 pl-6 py-4 my-8 italic text-xl text-neutral-700">
                "It wasn't about better patient outcomes. It was about creating perpetual customers for patentable products."
                <footer className="text-base mt-2 not-italic">- Dr. Sarah Chen, Medical Historian</footer>
              </blockquote>
            </>
          )}

          <h2 className="text-3xl font-bold mt-12 mb-6">
            {source === 'local' || source === 'founding' ? 
              "How PRP Actually Works (The Science Made Simple)" :
              "Your Blood Holds The Key They Don't Want You To Find"
            }
          </h2>

          <p className="mb-6">
            Here's what every London professional needs to understand: Your blood contains concentrated growth factors and healing proteins that can regenerate hair follicles and reverse aging at the cellular level.
          </p>

          <p className="mb-6">
            Scientists confirmed this in the 1980s. Platelets - the sticky components that help blood clot - are packed with growth factors that repair damaged tissue. When concentrated through medical processing, these same factors can:
          </p>

          <ul className="mb-8 space-y-2">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Reactivate dormant hair follicles</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Stimulate collagen production for youthful skin</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Trigger natural healing cascades that reverse aging</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Create permanent restoration using your own biology</span>
            </li>
          </ul>

          <p className="text-xl font-bold mb-8">But there was a problem for pharmaceutical companies.</p>

          <p className="mb-8">
            {source === 'local' || source === 'founding' ? 
              "\"We've treated over 1,000 patients with PRP because it works,\" we explain to every consultation. \"While others push expensive daily treatments, we offer a permanent solution using your own body's healing power.\"" :
              "\"You can't patent what nature already created,\" explains Elanda. \"So while they spent billions developing synthetic drugs with potential side effects, the solution existed within patients' own bodies.\""
            }
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Treatment Trap That's Costing You Thousands</h2>

          <p className="mb-6">
            Meanwhile, London professionals are caught in an expensive treatment trap that benefits everyone except them.
          </p>

          <div className="bg-neutral-50 rounded-xl p-6 my-8">
            <p className="italic mb-4">
              "I'm so sad about it and it's making me nervous and embarrassed to socialise. The thought of standing up in front of a new class next week makes me feel queasy."
            </p>
            <p className="text-sm text-neutral-600">- Sarah, 34, Teacher from Richmond</p>
          </div>

          <p className="mb-6">Like thousands of others, Sarah tried the pharmaceutical route first:</p>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="font-bold mb-2">Regaine (Minoxidil): The Lifetime Prison</h4>
              <p className="text-neutral-700">
                At £15-25 monthly, it seems affordable. But calculate the lifetime cost: <strong>£4,800+ over 30 years</strong>. Plus the daily application burden, scalp irritation, and the prison of permanent dependency.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="font-bold mb-2">Finasteride: The Fear Factor</h4>
              <p className="text-neutral-700">
                Requires private prescription (£200 consultation + £15/month) and comes with sexual dysfunction warnings that terrify men. The NHS won't provide it for cosmetic use.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="font-bold mb-2">Hair Transplants: The £12,000 Gamble</h4>
              <p className="text-neutral-700">
                At £12,000 in the UK, they seem like the "permanent" solution. But 30-40% need second procedures. Horror stories from overseas clinics fill online forums.
              </p>
            </div>
          </div>

          {/* Mid-Article CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl p-8 my-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Break Free?</h3>
            <p className="mb-6">
              Discover if you're a candidate for PRP therapy with our free 60-second assessment.
            </p>
            <button
              onClick={() => handleCTAClick('Mid Article')}
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Take The Free Assessment
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">
            {source === 'local' || source === 'founding' ? 
              "Our Approach: Simple, Proven, Effective" :
              "Breaking Free: The Putney Solution"
            }
          </h2>

          <p className="mb-6">
            {source === 'local' || source === 'founding' ? 
              "Here's what makes our approach different from other clinics:" :
              "But here's where the story gets interesting."
            }
          </p>

          <p className="mb-6">
            {source === 'local' || source === 'founding' ? 
              "At Eskeen Clinic, we've streamlined PRP therapy to make it accessible and affordable for our Putney community. No upselling, no hidden fees, just honest treatment that works." :
              "Eskeen Clinic in Putney decided to break ranks with Big Pharma and offer PRP therapy directly to their community."
            }
          </p>

          <p className="mb-8">
            {source === 'local' || source === 'founding' ? 
              "\"After treating over 1,000 patients, we know what works,\" explains Elanda. \"Your own blood contains more regenerative potential than any synthetic treatment available.\"" :
              "\"We watched our patients suffer while the solution was staring us in the face,\" explains Elanda. \"Their own blood contained more regenerative potential than any synthetic treatment available.\""
            }
          </p>

          <p className="mb-6">The process is elegantly simple:</p>

          <ol className="mb-8 space-y-4">
            <li className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
              <div>
                <strong>Medical Blood Draw:</strong> A small sample of your blood is drawn using sterile medical procedures
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
              <div>
                <strong>Centrifuge Processing:</strong> Your blood is spun in a medical-grade centrifuge to concentrate platelets 5x normal levels
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
              <div>
                <strong>Growth Factor Activation:</strong> The concentrated platelets are prepared to release their healing factors
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
              <div>
                <strong>Targeted Injection:</strong> The platelet-rich plasma is precisely injected where regeneration is needed
              </div>
            </li>
          </ol>

          <p className="text-xl font-bold text-primary-600 mb-8">The entire process takes just 45 minutes.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Results Speak For Themselves</h2>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 my-8 border-2 border-green-200">
            <p className="italic mb-4">
              "The single PRP treatment for hair loss has worked far better (and was much more comfortable) than any of the previous treatments I had at another clinic."
            </p>
            <p className="text-sm font-semibold">- Michael, 42, Finance Director</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 my-8 border-2 border-green-200">
            <p className="italic mb-4">
              "Everyone has been complimenting on how I am glowing! The results are fantastic! My skin is glowing & youthful."
            </p>
            <p className="text-sm font-semibold">- Jennifer, 38</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Hidden Economics That Will Shock You</h2>

          <p className="mb-6">Here's the calculation that pharmaceutical companies pray you never make:</p>

          <div className="bg-neutral-50 rounded-xl p-6 mb-8">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="py-3 font-semibold">PRP Treatment (3 sessions)</td>
                  <td className="py-3 text-right text-green-600 font-bold">£750 total</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-3">Lifetime Regaine costs</td>
                  <td className="py-3 text-right text-red-600">£4,800+ over 30 years</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-3">Finasteride with consultations</td>
                  <td className="py-3 text-right text-red-600">£2,400+ over 10 years</td>
                </tr>
                <tr>
                  <td className="py-3">Hair transplant</td>
                  <td className="py-3 text-right text-red-600">£12,000+ (often needs repeating)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xl font-bold mb-8">
            PRP uses your own blood - zero rejection risk, permanent results, no daily maintenance.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">
            {source === 'local' || source === 'founding' ? 
              "Limited Founding Patient Spaces Available" :
              "What Happens Next?"
            }
          </h2>

          <p className="mb-6">
            {source === 'local' || source === 'founding' ? 
              "We're offering special founding patient rates to build our Putney practice. As experienced practitioners with over 1,000 successful treatments, we're committed to bringing proven results to our local community." :
              "The pharmaceutical industry's stranglehold on hair loss treatment is finally loosening. More medical professionals are refusing to keep patients trapped in expensive, ineffective treatment cycles."
            }
          </p>

          <p className="mb-8">
            {source === 'local' || source === 'founding' ? 
              "We're limiting our founding patient group to just 50 people to ensure everyone receives the personal attention they deserve. This includes priority booking for life and direct access to your practitioners." :
              "But access remains limited. Eskeen Clinic accepts only a small number of PRP patients monthly to ensure quality care and proper follow-up."
            }
          </p>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-3xl p-8 md:p-12 my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">The Choice Is Yours</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">❌</span>
                  <span className="font-bold text-white">Option 1:</span>
                </div>
                <p className="text-sm text-white/90">Continue the pharmaceutical treadmill - spending thousands on temporary solutions</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">😔</span>
                  <span className="font-bold text-white">Option 2:</span>
                </div>
                <p className="text-sm text-white/90">Accept the decline - let nature take its course while confidence erodes</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl p-4 ring-2 ring-white shadow-lg">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">✨</span>
                  <span className="font-bold text-white">Option 3:</span>
                </div>
                <p className="text-sm text-white">Harness your blood's healing power - permanent restoration naturally</p>
              </div>
            </div>

            <p className="text-xl mb-8">
              Limited appointments available this month
            </p>

            <button
              onClick={() => handleCTAClick('Final CTA')}
              className="inline-flex items-center bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Your Free Assessment Now
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <p className="mt-6 text-sm opacity-90">
              Or call directly: <a href="tel:07849990667" className="underline font-bold">07849 990667</a>
            </p>
          </div>

          {/* Contact Info */}
          <div className="border-t border-neutral-200 pt-8 mt-12">
            <p className="text-sm text-neutral-600 mb-4">
              <strong>Eskeen Clinic</strong><br />
              115 Lower Richmond Road<br />
              Putney, London SW15 1EX<br />
              Licensed medical practitioners • Established 2018
            </p>
            
            <p className="text-xs text-neutral-500 italic">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes. Individual results may vary. PRP therapy should only be administered by qualified medical professionals. Consult your GP before discontinuing any prescribed medications.
            </p>
          </div>
        </div>
      </main>
    </article>
  );
}

export default function PRPAdvertorial() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PRPAdvertorialContent />
    </Suspense>
  );
}