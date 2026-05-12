import { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

export default function AnimatedHeading({
  as: Tag = 'h1',
  children,
  className = '',
  delay = 0,
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !ref.current) return;
    const el = ref.current;
    const isPhone =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 767px)').matches;
    const text = el.textContent;
    el.innerHTML = '';
    const words = text.split(/(\s+)/);
    words.forEach((w) => {
      if (/^\s+$/.test(w)) {
        el.appendChild(document.createTextNode(w));
        return;
      }
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.style.willChange = 'transform, opacity';
      span.textContent = w;
      el.appendChild(span);
    });
    const targets = el.querySelectorAll('span');
    gsap.fromTo(
      targets,
      { yPercent: 100, autoAlpha: 0 },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: isPhone ? 0.72 : 0.9,
        ease: 'power3.out',
        stagger: isPhone ? 0.035 : 0.06,
        delay,
      }
    );
  }, [children, delay]);

  return (
    <Tag ref={ref} className={['overflow-hidden', className].join(' ')}>
      {children}
    </Tag>
  );
}
