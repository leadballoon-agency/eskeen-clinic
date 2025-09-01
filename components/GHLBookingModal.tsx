'use client';

import { useState } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';
import Script from 'next/script';

interface GHLBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment?: string;
}

export default function GHLBookingModal({ isOpen, onClose, treatment = 'PRP Hair Consultation' }: GHLBookingModalProps) {
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
          <iframe 
            src="https://link.leadballoon.co.uk/widget/booking/2WlYIajUfZGnWIZR7KXH" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
            scrolling="no" 
            id="2WlYIajUfZGnWIZR7KXH_1756690961157"
          />
          <Script 
            src="https://link.leadballoon.co.uk/js/form_embed.js" 
            strategy="afterInteractive"
          />
        </div>
      </div>
    </div>
  );
}