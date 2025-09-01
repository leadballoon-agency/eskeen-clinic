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
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track high-value lead
    FacebookEvents.Lead(50);
    FacebookEvents.CompleteRegistration(50);
    
    // Here you would normally send this to your backend
    console.log('Booking request:', formData);
    
    // Show success state
    setShowSuccess(true);
  };

  const handleClose = () => {
    setFormData({ name: '', phone: '', email: '', preferredTime: 'morning' });
    setShowSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h2 className="text-2xl font-bold mb-2">Request Your Consultation</h2>
          <p className="text-white/90">Kerry will call you within 24 hours</p>
        </div>
        
        {/* Success State or Form */}
        {showSuccess ? (
          <div className="p-6 space-y-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Thank You {formData.name}!</h3>
              <p className="text-neutral-600">Kerry will call you at {formData.phone} within 24 hours to confirm your {treatment}.</p>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-4 space-y-3">
              <p className="font-semibold text-primary-700">Want to speak with Kerry now?</p>
              <a
                href="tel:07846888649"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Kerry Now: 07846 888649
              </a>
              <p className="text-xs text-neutral-500">Monday-Saturday, 9am-8pm</p>
            </div>
            
            <button
              onClick={handleClose}
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}