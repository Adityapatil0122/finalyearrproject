import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

export function useScrollReveal({
  selector = '.reveal',
  y = 28,
  stagger = 0.08,
  duration = 0.7,
  start = 'top 85%',
  once = true,
} = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const root = ref.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const targets = root.querySelectorAll(selector);
      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: once ? 'play none none none' : 'play none none reverse',
            },
          }
        );
      });
      if (stagger && targets.length > 1) {
        gsap.set(targets, { transitionDelay: 0 });
      }
      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, [selector, y, stagger, duration, start, once]);

  return ref;
}
