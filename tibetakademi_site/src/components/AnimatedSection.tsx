
'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationClasses?: string; // Classes to apply when visible
  initialClasses?: string;   // Classes to apply when hidden/initial
  threshold?: number;        // Intersection Observer threshold
  delay?: string;            // Tailwind delay class e.g. delay-300
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationClasses = 'opacity-100 translate-y-0 sm:translate-x-0',
  initialClasses = 'opacity-0 translate-y-10 sm:translate-y-0 sm:translate-x-10',
  threshold = 0.1,
  delay = 'delay-0'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: threshold } // Trigger when specified percentage of the element is visible
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={`${className} transition-all duration-700 ease-out ${delay} ${isVisible ? animationClasses : initialClasses}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

