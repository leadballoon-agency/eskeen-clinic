'use client';

import { useState, useEffect } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';

interface SLOOfferProps {
  assessmentScore?: number;
  treatment?: string;
}

export default function SLOOffer({ assessmentScore = 75, treatment = 'PRP' }: SLOOfferProps) {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [showOffer, setShowOffer] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSLOClick = () => {
    FacebookEvents.InitiateCheckout(37, 'GBP', 'Hair Recovery Starter Pack');
    // In production, this would go to Stripe checkout
    window.open('https://buy.stripe.com/test_slo_starter_pack', '_blank');
  };

  if (!showOffer) return null;

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border-2 border-amber-200 shadow-xl my-8">
      {/* Urgency Timer */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold text-sm">
          <span className="animate-pulse mr-2">🔥</span>
          ASSESSMENT DISCOUNT EXPIRES IN: {formatTime(timeLeft)}
        </div>
      </div>

      {/* Headline */}
      <div className="text-center mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-2">
          Not Quite Ready for Full Treatment?
        </h3>
        <p className="text-lg text-neutral-600">
          Start Your Hair Recovery Journey Today with Our Starter Pack
        </p>
      </div>

      {/* Offer Box */}
      <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-xl font-bold text-primary-600">
            Hair Recovery Starter Pack
          </h4>
          <div className="text-right">
            <p className="text-sm text-gray-500 line-through">Worth £137</p>
            <p className="text-3xl font-bold text-green-600">£37</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <p className="font-semibold">Professional Hair Loss Recovery Guide</p>
              <p className="text-sm text-gray-600">5-step protocol used by 1,000+ patients (£40 value)</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <p className="font-semibold">30-Day Clinical Strength Biotin Supply</p>
              <p className="text-sm text-gray-600">Same biotin we use in PRP treatments (£25 value)</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <p className="font-semibold">Exclusive WhatsApp Support Group</p>
              <p className="text-sm text-gray-600">Direct access to our nurses (£22 value)</p>
            </div>
          </div>
          
          <div className="flex items-start bg-primary-50 p-3 rounded-lg">
            <span className="text-primary-600 mr-3 mt-1 text-xl">🎁</span>
            <div>
              <p className="font-bold text-primary-700">£50 Credit Toward PRP Treatment</p>
              <p className="text-sm text-primary-600">Use within 90 days - more than covers your investment!</p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold">317 Putney residents</span> started with this pack before their PRP treatment.
            <span className="block mt-1 text-primary-600 font-semibold">87% went on to book full treatment within 30 days.</span>
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleSLOClick}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-100"
        >
          Yes! Send Me The Starter Pack →
        </button>

        {/* Guarantee */}
        <p className="text-xs text-center text-gray-600 mt-4">
          🔒 100% Secure Checkout • 🔄 Full £37 Credits Toward Treatment • ✅ Instant Digital Access
        </p>
      </div>

      {/* Testimonial */}
      <div className="bg-white/50 rounded-lg p-4 mb-4">
        <p className="text-sm italic text-gray-700">
          "I wasn't ready to commit to PRP right away. The starter pack helped me understand the process and the biotin actually started working within 2 weeks. By week 4, I was ready to book my full treatment!"
        </p>
        <p className="text-sm font-semibold text-gray-800 mt-2">
          - Sarah M., Putney (Started with pack, now a PRP patient)
        </p>
      </div>

      {/* Scarcity */}
      <div className="text-center">
        <p className="text-sm text-red-600 font-semibold">
          ⚠️ Only available to assessment takers • Limited to first 50 founding patients
        </p>
      </div>

      {/* Skip Link */}
      <div className="text-center mt-4">
        <button
          onClick={() => setShowOffer(false)}
          className="text-sm text-gray-500 underline hover:text-gray-700"
        >
          No thanks, I'll book full treatment
        </button>
      </div>
    </div>
  );
}