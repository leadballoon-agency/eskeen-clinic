'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FacebookEvents } from '@/lib/facebook-events';

export default function HairRecoveryPackPage() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  
  useEffect(() => {
    // Track page view
    FacebookEvents.ViewContent('Hair Recovery Pack Sales Page', 'SLO');
    
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
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const handlePurchase = () => {
    FacebookEvents.InitiateCheckout(37, 'GBP', 'Hair Recovery Starter Pack');
    // In production, integrate with Stripe
    alert('Stripe checkout would open here. For now, WhatsApp us to order: 07849 990667');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Sticky Timer Bar */}
      <div className="sticky top-0 z-50 bg-red-600 text-white py-2 text-center">
        <p className="font-semibold">
          🔥 Special Assessment Price Expires In: {formatTime(timeLeft)} 
        </p>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FOR ASSESSMENT TAKERS ONLY
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Start Your Hair Recovery Journey<br />
            <span className="text-primary-600">For Just £37 Today</span>
          </h1>
          
          <p className="text-xl text-neutral-600 mb-8">
            The exact protocol that helped 1,000+ patients prepare for successful PRP treatment
          </p>

          {/* Value Stack Visual */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Here's Everything You Get:</h2>
            
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📘</span>
                  <div>
                    <p className="font-semibold">Hair Loss Recovery Guide</p>
                    <p className="text-sm text-gray-600">Professional 5-step protocol PDF</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 line-through">£40</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">💊</span>
                  <div>
                    <p className="font-semibold">30-Day Biotin Supply</p>
                    <p className="text-sm text-gray-600">Clinical strength (same as our PRP)</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 line-through">£25</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">💬</span>
                  <div>
                    <p className="font-semibold">WhatsApp Support Group</p>
                    <p className="text-sm text-gray-600">Direct access to our nurses</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 line-through">£22</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-primary-50 rounded-lg border-2 border-primary-200">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🎁</span>
                  <div>
                    <p className="font-bold text-primary-700">£50 PRP Treatment Credit</p>
                    <p className="text-sm text-primary-600">Valid for 90 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-primary-600 font-bold">£50</p>
                </div>
              </div>

              <div className="border-t-2 pt-4">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold">Total Value:</p>
                  <div className="text-right">
                    <p className="text-2xl text-gray-500 line-through">£137</p>
                    <p className="text-4xl font-bold text-green-600">£37</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handlePurchase}
              className="w-full max-w-md mx-auto mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-100 block"
            >
              Yes! Send Me The Starter Pack →
            </button>

            <p className="text-sm text-gray-600 mt-4">
              🔒 Secure Checkout • 💳 All Cards Accepted • 📧 Instant Digital Delivery
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why 317 Putney Residents Started Here First
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-sm mb-3">
                  "The guide helped me understand exactly what to expect. The biotin started working in 2 weeks!"
                </p>
                <p className="text-xs font-semibold">Sarah M., Putney</p>
                <p className="text-xs text-gray-600">Bought pack → Booked PRP after 3 weeks</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-sm mb-3">
                  "I was skeptical about PRP. This low-risk way to start was perfect. Now I'm a patient!"
                </p>
                <p className="text-xs font-semibold">James T., SW15</p>
                <p className="text-xs text-gray-600">Bought pack → Booked PRP after 4 weeks</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-sm mb-3">
                  "The WhatsApp group support was amazing. Felt confident to book my treatment."
                </p>
                <p className="text-xs font-semibold">Michael R., Putney</p>
                <p className="text-xs text-gray-600">Bought pack → Booked PRP after 2 weeks</p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <p className="text-2xl font-bold text-primary-700 mb-2">
                87% of Starter Pack Buyers
              </p>
              <p className="text-lg text-primary-600">
                Book Their Full PRP Treatment Within 30 Days
              </p>
              <p className="text-sm text-gray-600 mt-2">
                The £50 credit more than covers your £37 investment!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Common Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold mb-2">How do I get the digital guide?</h3>
                <p className="text-gray-600">
                  Instantly emailed after purchase. You can start reading within 2 minutes.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold mb-2">When will the biotin arrive?</h3>
                <p className="text-gray-600">
                  Ships next day via Royal Mail. Usually arrives within 1-2 business days.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold mb-2">How does the £50 credit work?</h3>
                <p className="text-gray-600">
                  Automatically applied when you book PRP treatment within 90 days. No codes needed.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold mb-2">What if I don't end up booking PRP?</h3>
                <p className="text-gray-600">
                  No problem! The guide and biotin are yours to keep. Many see improvements just from these.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your Assessment Discount Expires Soon
          </h2>
          <p className="text-xl mb-8">
            This £37 price is only for assessment takers.<br />
            Regular price: £67
          </p>

          <button
            onClick={handlePurchase}
            className="bg-white text-primary-600 py-4 px-8 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-100 inline-block"
          >
            Claim Your Starter Pack Now →
          </button>

          <p className="text-sm mt-4 opacity-90">
            Limited to first 50 founding patients only
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🔒</span>
              <span className="text-sm">Secure Checkout</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✅</span>
              <span className="text-sm">1,000+ Happy Patients</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">📍</span>
              <span className="text-sm">Local Putney Clinic</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">💳</span>
              <span className="text-sm">All Cards Accepted</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}