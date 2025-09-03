'use client';

import { useState, useEffect } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';

interface GHLBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment?: string;
}

export default function GHLBookingModal({ isOpen, onClose, treatment = 'PRP Hair Consultation' }: GHLBookingModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset states when modal opens
      setIsLoading(true);
      setShowFallback(false);
      setIframeLoaded(false);
      
      // Track modal open
      FacebookEvents.InteractWithTool('GHL Calendar', 'Modal Opened');
      
      // Only show fallback if iframe hasn't loaded after 15 seconds
      // This is a safety net - the iframe onError should trigger first if there's a real issue
      const timer = setTimeout(() => {
        if (!iframeLoaded && isLoading) {
          console.log('Calendar loading timeout - showing fallback');
          setShowFallback(true);
          setIsLoading(false);
        }
      }, 15000); // 15 seconds should be enough for any network
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]); // Remove iframeLoaded from dependencies to prevent timer reset

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden max-h-[90vh]">
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
          
          <h2 className="text-2xl font-bold mb-2">Book Your {treatment}</h2>
          <p className="text-white/90">Select your preferred appointment time</p>
        </div>
        
        {/* GHL Iframe Container */}
        <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 120px)' }}>
          {showFallback ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Calendar Loading Issue</h3>
              <p className="text-neutral-600 mb-6">
                We're having trouble loading the booking calendar. 
                Please call us directly to book your consultation.
              </p>
              <a
                href="tel:07846888649"
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
                onClick={() => FacebookEvents.Contact()}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Kerry: 07846 888649
              </a>
              <p className="text-sm text-neutral-500 mt-4">
                Or try refreshing the page and clicking Book Consultation again
              </p>
            </div>
          ) : (
            <>
              {/* Loading indicator */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <p className="text-neutral-600">Loading calendar...</p>
                  </div>
                </div>
              )}
              
              <iframe 
                src="https://link.leadballoon.co.uk/widget/booking/2WlYIajUfZGnWIZR7KXH" 
                style={{ 
                  width: '100%', 
                  border: 'none', 
                  overflow: 'hidden', 
                  minHeight: '600px',
                  display: isLoading ? 'none' : 'block'
                }} 
                scrolling="no" 
                id="ghl-calendar-iframe"
                title="Book Your Consultation"
                allow="payment"
                onLoad={() => {
                  console.log('GHL Calendar iframe loaded successfully');
                  setIsLoading(false);
                  setIframeLoaded(true);
                }}
                onError={() => {
                  console.error('Failed to load GHL calendar');
                  setShowFallback(true);
                  setIsLoading(false);
                }}
              />
            </>
          )}
          
          {/* Alternative CTA */}
          {!showFallback && (
            <div className="border-t border-neutral-200 mt-4 pt-4 text-center">
              <p className="text-sm text-neutral-600 mb-2">
                Prefer to book by phone? Call us now:
              </p>
              <a
                href="tel:07846888649"
                className="text-primary-600 font-bold text-lg hover:text-primary-700"
                onClick={() => FacebookEvents.Contact()}
              >
                📞 07846 888649
              </a>
              <p className="text-xs text-neutral-500 mt-1">
                Kerry is available Mon-Sat 9am-6pm
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}