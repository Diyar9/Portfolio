import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    // Intersection Observer setup
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0., // Adjust this threshold as needed
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe elements with the 'scroll-in' class
    const elements = document.querySelectorAll('.scroll-in');
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Clean up the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimation;
