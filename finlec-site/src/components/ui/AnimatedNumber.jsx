import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

export default function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    if (prefersReducedMotion) {
      ref.current.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: value,
      duration,
      ease: 'power2.out',
      snap: { val: 1 },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
      },
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 90%',
        once: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.refresh();
    };
  }, [value, prefix, suffix, duration]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
