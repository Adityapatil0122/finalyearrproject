import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { scrollToTop } from '@/lib/lenis';

export default function PageTransition({ children }) {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Always start a new route at the top, before the enter tween.
    scrollToTop({ smooth: false });
    if (prefersReducedMotion || !ref.current) return;
    gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: 10, filter: 'blur(8px)' },
      { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.55, ease: 'power3.out' }
    );
  }, [location.pathname]);

  return (
    <div ref={ref} key={location.pathname}>
      {children}
    </div>
  );
}
