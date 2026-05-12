import { useEffect } from 'react';
import { prefersReducedMotion } from '@/lib/gsap';

export default function MotionLayer() {
  useEffect(() => {
    if (
      prefersReducedMotion ||
      typeof window === 'undefined' ||
      !window.matchMedia('(pointer: fine)').matches
    ) {
      return;
    }

    const handleMove = (event) => {
      const surface = event.target.closest?.('.interactive-surface');
      if (!surface) return;

      const rect = surface.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 5;
      const rotateX = ((y / rect.height) - 0.5) * -5;

      surface.style.setProperty('--mx', `${x}px`);
      surface.style.setProperty('--my', `${y}px`);
      surface.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`);
      surface.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`);
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return null;
}
