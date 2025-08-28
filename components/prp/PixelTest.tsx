'use client';

import { FacebookEvents } from '@/lib/facebook-events';

declare global {
  interface Window {
    fbq: any;
  }
}

export default function PixelTest() {
  const testPixelEvents = () => {
    console.log('🧪 Firing CompleteAssessment events for Facebook to recognize...');
    
    // Fire multiple CompleteAssessment events with different values
    // This helps Facebook recognize it as a conversion event
    FacebookEvents.CompleteAssessment('PRP Hair Loss', 'High Match', 699);
    setTimeout(() => {
      FacebookEvents.CompleteAssessment('PRP Facial', 'Good Match', 450);
    }, 1000);
    setTimeout(() => {
      FacebookEvents.CompleteAssessment('PRP Hair', 'Excellent Match', 175);
    }, 2000);
    setTimeout(() => {
      FacebookEvents.Lead(450);
    }, 3000);
    setTimeout(() => {
      FacebookEvents.StartAssessment('PRP Test');
    }, 4000);
    
    alert('Fired 5 conversion events! Check Facebook Events Manager in 5-10 minutes.');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={testPixelEvents}
        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 text-sm"
      >
        Fire Test Conversions
      </button>
    </div>
  );
}