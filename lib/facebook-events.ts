declare global {
  interface Window {
    fbq: any;
  }
}

// Helper function to safely track events
export const fbEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined') {
    // Try immediately
    if (window.fbq) {
      console.log(`📊 Facebook Pixel Event: ${eventName}`, parameters);
      window.fbq('track', eventName, parameters);
    } else {
      console.warn(`⚠️ Facebook Pixel not loaded yet. Retrying: ${eventName}`);
      // Retry after a delay
      setTimeout(() => {
        if (window.fbq) {
          console.log(`📊 Facebook Pixel Event (delayed): ${eventName}`, parameters);
          window.fbq('track', eventName, parameters);
        } else {
          console.error(`❌ Facebook Pixel still not loaded for: ${eventName}`);
        }
      }, 2000);
    }
  }
};

// Custom event helper
export const fbCustomEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined') {
    // Try immediately
    if (window.fbq) {
      console.log(`📊 Facebook Pixel Custom Event: ${eventName}`, parameters);
      window.fbq('trackCustom', eventName, parameters);
    } else {
      console.warn(`⚠️ Facebook Pixel not loaded yet. Retrying custom: ${eventName}`);
      // Retry after a delay
      setTimeout(() => {
        if (window.fbq) {
          console.log(`📊 Facebook Pixel Custom Event (delayed): ${eventName}`, parameters);
          window.fbq('trackCustom', eventName, parameters);
        } else {
          console.error(`❌ Facebook Pixel still not loaded for custom: ${eventName}`);
        }
      }, 2000);
    }
  }
};

// Standard Facebook events
export const FacebookEvents = {
  // Core conversion events
  Lead: (value?: number) => fbEvent('Lead', { value, currency: 'GBP' }),
  
  CompleteRegistration: (value?: number) => 
    fbEvent('CompleteRegistration', { value, currency: 'GBP' }),
  
  Schedule: () => fbEvent('Schedule'),
  
  Contact: () => fbEvent('Contact'),
  
  ViewContent: (contentName: string, contentCategory?: string) => 
    fbEvent('ViewContent', { 
      content_name: contentName,
      content_category: contentCategory 
    }),
  
  Search: (searchString: string) => 
    fbEvent('Search', { search_string: searchString }),
  
  // Custom events for your clinic
  StartAssessment: (treatmentType: string) => 
    fbCustomEvent('StartAssessment', { 
      treatment_type: treatmentType,
      timestamp: new Date().toISOString()
    }),
  
  CompleteAssessment: (treatmentType: string, result?: string, value?: number) => 
    fbCustomEvent('CompleteAssessment', { 
      treatment_type: treatmentType,
      assessment_result: result,
      potential_value: value,
      currency: 'GBP',
      timestamp: new Date().toISOString()
    }),
  
  ViewPricing: (treatment: string, price?: number) => 
    fbCustomEvent('ViewPricing', { 
      treatment,
      price,
      currency: 'GBP' 
    }),
  
  ClickBookNow: (treatment: string, source: string) => 
    fbCustomEvent('ClickBookNow', { 
      treatment,
      source,
      timestamp: new Date().toISOString()
    }),
  
  InteractWithTool: (toolName: string, interaction: string) => 
    fbCustomEvent('InteractWithTool', { 
      tool_name: toolName,
      interaction_type: interaction,
      timestamp: new Date().toISOString()
    }),
  
  ViewBeforeAfter: (treatment: string) => 
    fbCustomEvent('ViewBeforeAfter', { 
      treatment,
      timestamp: new Date().toISOString()
    }),
    
  EngageWithContent: (contentType: string, duration: number) =>
    fbCustomEvent('EngageWithContent', {
      content_type: contentType,
      engagement_duration: duration,
      timestamp: new Date().toISOString()
    })
};