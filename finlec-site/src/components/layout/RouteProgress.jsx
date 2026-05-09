import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

export default function RouteProgress() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion) {
      el.style.transform = 'scaleX(0)';
      return;
    }
    gsap.killTweensOf(el);
    gsap.set(el, { scaleX: 0, autoAlpha: 1 });
    const tl = gsap.timeline();
    tl.to(el, { scaleX: 0.7, duration: 0.4, ease: 'power2.out' })
      .to(el, { scaleX: 1, duration: 0.25, ease: 'power2.out' }, '+=0.05')
      .to(el, { autoAlpha: 0, duration: 0.25, ease: 'power1.out' }, '+=0.05');
  }, [location.pathname]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-secondary to-primary"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}
