import { useEffect, useState } from 'react';

export const useScrollShine = () => {
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const headingId = entry.target.getAttribute('data-heading-id');
          if (!headingId) return;

          setVisibleHeadings(prev => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(headingId);
            }
            return newSet;
          });
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-10% 0px -60% 0px'
      }
    );

    // Observe all headings with data-heading-id
    const headings = document.querySelectorAll('[data-heading-id]');
    headings.forEach(heading => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  return visibleHeadings;
};