'use client';

import { useEffect, useState, useRef } from 'react';
import { FacebookEvents } from '@/lib/facebook-events';

export default function ScrollTracker() {
  const [milestones, setMilestones] = useState({
    25: false,
    50: false,
    75: false,
    90: false
  });
  
  const timeOnPageRef = useRef<number>(Date.now());
  const hasTrackedEngagementRef = useRef(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (window.scrollY / scrollHeight) * 100;
        
        // Track scroll depth milestones with CUSTOM events, not ViewContent!
        if (scrollPercent >= 25 && !milestones[25]) {
          FacebookEvents.ScrollDepth(25);
          setMilestones(prev => ({ ...prev, 25: true }));
        }
        
        if (scrollPercent >= 50 && !milestones[50]) {
          FacebookEvents.ScrollDepth(50);
          setMilestones(prev => ({ ...prev, 50: true }));
        }
        
        if (scrollPercent >= 75 && !milestones[75]) {
          FacebookEvents.ScrollDepth(75);
          setMilestones(prev => ({ ...prev, 75: true }));
        }
        
        if (scrollPercent >= 90 && !milestones[90]) {
          FacebookEvents.ScrollDepth(90);
          setMilestones(prev => ({ ...prev, 90: true }));
          
          // Track high engagement when user scrolls to 90%
          const timeOnPage = Math.round((Date.now() - timeOnPageRef.current) / 1000);
          if (timeOnPage > 30 && !hasTrackedEngagementRef.current) {
            FacebookEvents.HighEngagement();
            hasTrackedEngagementRef.current = true;
          }
        }
      }, 100);
    };
    
    // Track time spent on page
    const engagementTimer = setTimeout(() => {
      const timeOnPage = Math.round((Date.now() - timeOnPageRef.current) / 1000);
      if (timeOnPage >= 60 && !hasTrackedEngagementRef.current) {
        FacebookEvents.EngageWithContent('Time on page', 60);
      }
    }, 60000);
    
    window.addEventListener('scroll', handleScroll);
    
    // Remove visibility tracking - this was causing spam!
    // Every tab switch was firing ViewContent events
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(engagementTimer);
    };
  }, [milestones]);
  
  return null;
}