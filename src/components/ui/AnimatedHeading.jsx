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
    if (prefersReducedMotion || !ref.current) return undefined;
    const el = ref.current;
    const originalHTML = el.innerHTML;
    const isPhone =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 767px)').matches;

    const textNodes = [];
    const walker = document.createTreeWalker(el, window.NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.nodeValue.trim()
          ? window.NodeFilter.FILTER_ACCEPT
          : window.NodeFilter.FILTER_REJECT;
      },
    });

    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      const fragment = document.createDocumentFragment();
      node.nodeValue.split(/(\s+)/).forEach((word) => {
        if (/^\s+$/.test(word)) {
          fragment.appendChild(document.createTextNode(word));
          return;
        }
        const span = document.createElement('span');
        span.dataset.headingWord = 'true';
        span.style.display = 'inline-block';
        span.style.willChange = 'transform, opacity';
        span.textContent = word;
        fragment.appendChild(span);
      });
      node.replaceWith(fragment);
    });

    const targets = el.querySelectorAll('[data-heading-word]');
    const tween = gsap.fromTo(
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

    return () => {
      tween.kill();
      el.innerHTML = originalHTML;
    };
  }, [children, delay]);

  return (
    <Tag ref={ref} className={['overflow-hidden', className].join(' ')}>
      {children}
    </Tag>
  );
}
