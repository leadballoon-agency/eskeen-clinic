'use client';

import { FacebookEvents } from '@/lib/facebook-events';

declare global {
  interface Window {
    fbq: any;
  }
}

export default function PixelTest() {
  const testPixelEvents = () => {
    console.log('🧪 Testing Facebook Pixel Events...');
    console.log('Window.fbq exists?', typeof window.fbq);
    
    // Test direct fbq call
    if (window.fbq) {
      console.log('📌 Calling fbq directly...');
      window.fbq('track', 'Lead', { value: 100, currency: 'GBP' });
      window.fbq('trackCustom', 'TestEvent', { test: true });
    }
    
    // Test via our wrapper functions
    FacebookEvents.Lead(500);
    FacebookEvents.StartAssessment('Test PRP');
    FacebookEvents.CompleteAssessment('Test PRP', 'Test Result', 175);
    
    alert('Check console for Facebook Pixel events. You should see test events fired.');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={testPixelEvents}
        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 text-sm"
      >
        Test FB Pixel
      </button>
    </div>
  );
}