'use client';

import { FacebookEvents } from '@/lib/facebook-events';

export default function PixelTest() {
  const testPixelEvents = () => {
    console.log('🧪 Testing Facebook Pixel Events...');
    
    // Test standard event
    FacebookEvents.Lead(500);
    
    // Test custom events
    FacebookEvents.StartAssessment('Test PRP');
    FacebookEvents.CompleteAssessment('Test PRP', 'Test Result', 175);
    
    alert('Check console for Facebook Pixel events. You should see 3 events fired.');
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