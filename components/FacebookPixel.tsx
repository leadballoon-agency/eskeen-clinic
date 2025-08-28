'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

interface FacebookPixelProps {
  pixelId: string;
}

export default function FacebookPixel({ pixelId }: FacebookPixelProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Load Facebook Pixel script
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
      });
  }, [pixelId]);

  useEffect(() => {
    // Track page views on route change
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname, searchParams]);

  return null;
}

// Helper functions for tracking events
export const trackEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  }
};

export const trackCustomEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, data);
  }
};

// Standard Facebook events for aesthetic clinic
export const FBEvents = {
  // Standard events
  ViewContent: (data?: any) => trackEvent('ViewContent', data),
  Search: (searchString: string) => trackEvent('Search', { search_string: searchString }),
  Lead: (data?: any) => trackEvent('Lead', data),
  CompleteRegistration: (data?: any) => trackEvent('CompleteRegistration', data),
  Contact: () => trackEvent('Contact'),
  Schedule: () => trackEvent('Schedule'),
  
  // Custom events for your clinic
  StartAssessment: (treatmentType: string) => 
    trackCustomEvent('StartAssessment', { treatment_type: treatmentType }),
  
  CompleteAssessment: (treatmentType: string, score?: number) => 
    trackCustomEvent('CompleteAssessment', { 
      treatment_type: treatmentType,
      assessment_score: score 
    }),
  
  ViewPricing: (treatment: string) => 
    trackCustomEvent('ViewPricing', { treatment }),
  
  ClickBookNow: (treatment: string) => 
    trackCustomEvent('ClickBookNow', { treatment }),
  
  InteractWithTool: (toolName: string) => 
    trackCustomEvent('InteractWithTool', { tool_name: toolName }),
  
  ViewBeforeAfter: (treatment: string) => 
    trackCustomEvent('ViewBeforeAfter', { treatment }),
};