/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, createContext, useContext } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap';

const LenisContext = createContext({ current: null });
const smoothEase = (t) => 1 - Math.pow(1 - t, 4);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const headerOffset = window.matchMedia('(max-width: 767px)').matches ? 70 : 82;

    const lenis = new Lenis({
      duration: 1.38,
      easing: smoothEase,
      wheelMultiplier: 0.84,
      touchMultiplier: 0.92,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchInertiaExponent: 1.65,
      gestureOrientation: 'vertical',
      anchors: {
        offset: headerOffset,
        duration: 1.28,
        easing: smoothEase,
      },
      prevent: (node) =>
        node.closest?.(
          '[data-lenis-prevent], [data-lenis-prevent-wheel], [data-lenis-prevent-touch], input, textarea, select'
        ),
    });
    lenisRef.current = lenis;
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
      if (window.__lenis === lenis) window.__lenis = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

export function scrollToTop({ smooth = true } = {}) {
  // PageTransition / FAB callers don't have direct Lenis access; query via window.
  const lenis = window.__lenis;
  if (lenis && smooth && !prefersReducedMotion) {
    lenis.scrollTo(0, { duration: 1.25, easing: smoothEase });
  } else if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  }
}
