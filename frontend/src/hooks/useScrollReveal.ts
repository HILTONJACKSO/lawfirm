import { useEffect, useRef } from 'react';

export const useScrollReveal = (options?: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, we can unobserve if we want a one-time animation
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      ...options
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [options]);

  return containerRef;
};
