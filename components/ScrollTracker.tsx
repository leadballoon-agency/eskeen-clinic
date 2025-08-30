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
        
        // Track scroll depth milestones
        if (scrollPercent >= 25 && !milestones[25]) {
          FacebookEvents.ViewContent('Scroll Depth 25%', 'Engagement');
          setMilestones(prev => ({ ...prev, 25: true }));
        }
        
        if (scrollPercent >= 50 && !milestones[50]) {
          FacebookEvents.ViewContent('Scroll Depth 50%', 'Engagement');
          setMilestones(prev => ({ ...prev, 50: true }));
        }
        
        if (scrollPercent >= 75 && !milestones[75]) {
          FacebookEvents.ViewContent('Scroll Depth 75%', 'Engagement');
          setMilestones(prev => ({ ...prev, 75: true }));
        }
        
        if (scrollPercent >= 90 && !milestones[90]) {
          FacebookEvents.ViewContent('Scroll Depth 90%', 'Engagement');
          setMilestones(prev => ({ ...prev, 90: true }));
          
          // Track high engagement when user scrolls to 90%
          const timeOnPage = Math.round((Date.now() - timeOnPageRef.current) / 1000);
          if (timeOnPage > 30 && !hasTrackedEngagementRef.current) {
            FacebookEvents.ViewContent('High Engagement User', 'Engagement');
            hasTrackedEngagementRef.current = true;
          }
        }
      }, 100);
    };
    
    // Track time spent on page
    const engagementTimer = setTimeout(() => {
      const timeOnPage = Math.round((Date.now() - timeOnPageRef.current) / 1000);
      if (timeOnPage >= 60 && !hasTrackedEngagementRef.current) {
        FacebookEvents.ViewContent('Engaged User (60s+)', 'Engagement');
      }
    }, 60000);
    
    window.addEventListener('scroll', handleScroll);
    
    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeOnPage = Math.round((Date.now() - timeOnPageRef.current) / 1000);
        if (timeOnPage > 10) {
          FacebookEvents.ViewContent('Page Hidden', 'Engagement');
        }
      } else {
        FacebookEvents.ViewContent('Page Visible', 'Engagement');
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(scrollTimeout);
      clearTimeout(engagementTimer);
    };
  }, [milestones]);
  
  return null;
}