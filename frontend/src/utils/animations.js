import { useEffect, useRef, useState } from 'react';

/**
 * Parse a stat string like "100+" → { target: 100, suffix: "+" }
 */
export function parseCountValue(str) {
  const match = String(str).match(/^(\d+)(.*)$/);
  return match
    ? { target: parseInt(match[1], 10), suffix: match[2] }
    : { target: 0, suffix: String(str) };
}

/**
 * Animates a number from 0 → target with cubic easeOut.
 * Returns [displayCount, elementRef].
 * Skips animation if prefers-reduced-motion is set.
 */
export function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // cubic easeOut
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}

/**
 * Returns true once the page has scrolled past `threshold` px.
 */
export function useScrolledNavbar(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll(); // check immediately on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
