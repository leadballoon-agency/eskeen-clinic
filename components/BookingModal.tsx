'use client';

import { useState } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment?: string;
}

export default function BookingModal({ isOpen, onClose, treatment = 'consultation' }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: 'morning'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track high-value lead
    FacebookEvents.Lead(50);
    FacebookEvents.CompleteRegistration(50);
    
    // Here you would normally send this to your backend
    console.log('Booking request:', formData);
    
    // Show success message
    alert(`Thank you ${formData.name}! Kerry will call you at ${formData.phone} within 24 hours to confirm your ${treatment} consultation.`);
    
    // Reset and close
    setFormData({ name: '', phone: '', email: '', preferredTime: 'morning' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h2 className="text-2xl font-bold mb-2">Request Your Consultation</h2>
          <p className="text-white/90">Kerry will call you within 24 hours</p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="John Smith"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="07XXX XXXXXX"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Best Time to Call
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="morning">Morning (9am-12pm)</option>
              <option value="afternoon">Afternoon (12pm-5pm)</option>
              <option value="evening">Evening (5pm-8pm)</option>
              <option value="anytime">Anytime</option>
            </select>
          </div>
          
          <div className="bg-primary-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary-700 mb-2">What Happens Next?</h3>
            <ul className="text-sm text-primary-600 space-y-1">
              <li>✓ Kerry will call within 24 hours</li>
              <li>✓ She'll answer all your questions</li>
              <li>✓ Book your consultation at a convenient time</li>
              <li>✓ No pressure, just helpful advice</li>
            </ul>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            Submit Request
          </button>
          
          <p className="text-xs text-neutral-500 text-center">
            By submitting, you agree to our privacy policy and to receive a call from Kerry.
          </p>
        </form>
      </div>
    </div>
  );
}