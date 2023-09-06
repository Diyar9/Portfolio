import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    // Intersection Observer setup
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0, // Adjust this threshold as needed
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('scroll-in-left')) {
            entry.target.classList.add('in-viewport-left');
          } else if (entry.target.classList.contains('scroll-in-right')) {
            entry.target.classList.add('in-viewport-right');
          }else if (entry.target.classList.contains('scroll-in-down')) {
            entry.target.classList.add('in-viewport-down');
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe elements with the 'scroll-in-left', 'scroll-in-right', and 'scroll-in-down' classes
    const elements = document.querySelectorAll('.scroll-in-left, .scroll-in-right, .scroll-in-down');
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Clean up the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimation;
