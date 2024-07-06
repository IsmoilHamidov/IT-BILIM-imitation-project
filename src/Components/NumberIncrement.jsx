// NumberIncrement.js
import React, { useEffect, useState, useRef } from "react";

function NumberIncrement({ end, duration }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    const currentRef = ref.current;

    if (currentRef) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = 0;
            const increment = end / (duration / 1000 * 60); // Approx. 60 frames per second

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                clearInterval(timer);
                setCount(end);
              } else {
                setCount(Math.ceil(start));
              }
            }, 1000 / 60);

            observer.disconnect(); // Stop observing after the animation starts
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);

  return <h3 ref={ref}>{count}+</h3>;
}

export default NumberIncrement;
