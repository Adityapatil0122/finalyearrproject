import { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

export default function Reveal({
  as: Tag = 'div',
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  className = '',
  start = 'top 88%',
  ...rest
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !ref.current) return;
    const isPhone =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 767px)').matches;
    const mobileY = isPhone ? Math.min(y, 18) : y;
    const blur = isPhone ? 'blur(3px)' : 'blur(6px)';
    ref.current.style.willChange = 'opacity, transform, filter';
    const tween = gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: mobileY, filter: blur },
      {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: isPhone ? Math.min(duration, 0.58) : duration,
        ease: 'power3.out',
        delay,
        scrollTrigger: { trigger: ref.current, start, once: true },
        onComplete: () => {
          if (ref.current) ref.current.style.willChange = 'auto';
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y, duration, start]);

  return (
    <Tag ref={ref} className={['reveal-init', className].join(' ')} {...rest}>
      {children}
    </Tag>
  );
}
