import { useEffect, useState } from 'react';

interface UseScrollShineReturn {
  shouldShine: boolean;
}

export const useScrollShine = (elementRef: React.RefObject<HTMLElement>): UseScrollShineReturn => {
  const [shouldShine, setShouldShine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when element enters the viewport with some buffer
      const isInViewport = rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2;
      
      // Calculate scroll progress through the section (slower pace)
      const progress = Math.max(0, Math.min(1, (windowHeight * 0.8 - rect.top) / (windowHeight * 0.6)));
      
      // Only shine when element is in viewport and has sufficient scroll progress
      setShouldShine(isInViewport && progress > 0.3);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef]);

  return { shouldShine };
};