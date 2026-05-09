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
    const tween = gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y, filter: 'blur(10px)' },
      {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration,
        ease: 'power3.out',
        delay,
        scrollTrigger: { trigger: ref.current, start, once: true },
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
