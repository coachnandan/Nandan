// AnimatedNumber — Counts up when scrolled into view
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedNumber({ value, number, suffix = '', prefix = '', duration = 1800, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  // Allow either value or number prop
  const targetNumber = value !== undefined ? value : number;

  useEffect(() => {
    if (!isInView || targetNumber === undefined || prefix) return;
    const startTime = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * targetNumber));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, targetNumber, duration, prefix]);

  // If prefix is provided (like "₹40–50L"), skip counting and show raw
  if (prefix) {
    return (
      <span ref={ref} className={className}>
        {prefix}{suffix}
      </span>
    );
  }



  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
