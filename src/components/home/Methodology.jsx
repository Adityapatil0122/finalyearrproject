import { useLayoutEffect, useRef, useState } from 'react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';
import { methodology } from '@/data/home';

const stepImages = [
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80&auto=format&fit=crop',
];

export default function Methodology() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      methodology.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `#method-step-${i}`,
          start: 'top 60%',
          end: 'bottom 60%',
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="methodology" className="bg-surface">
      <div ref={sectionRef} className="grid lg:grid-cols-2 gap-2xl items-start">
        <div className="space-y-md">
          <Reveal>
            <p className="text-label-sm uppercase tracking-widest text-primary font-semibold">
              How we work
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">A method that respects your time and your runway.</h2>
          </Reveal>

          <div className="mt-xl space-y-md">
            {methodology.map((m, i) => (
              <div
                id={`method-step-${i}`}
                key={m.step}
                className={[
                  'method-step-row rounded-2xl border p-lg transition-all duration-500',
                  active === i
                    ? 'border-primary bg-primary/5 shadow-low'
                    : 'border-outline-variant bg-surface-container-lowest',
                ].join(' ')}
              >
                <div className="flex items-start gap-md">
                  <div
                    className={[
                      'grid h-12 w-12 shrink-0 place-items-center rounded-full font-bold transition-all duration-500',
                      active === i
                        ? 'bg-primary text-white'
                        : 'border-2 border-outline text-on-surface-variant',
                    ].join(' ')}
                  >
                    {m.step}
                  </div>
                  <div>
                    <h3 className="text-h3">{m.title}</h3>
                    <p className="text-body-md text-on-surface-variant mt-1">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-high">
          {stepImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              className={[
                'absolute inset-0 h-full w-full object-cover transition-all duration-700',
                active === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
              ].join(' ')}
            />
          ))}
          <div className="absolute -bottom-6 -right-6 bg-primary text-white px-lg py-md rounded-2xl shadow-high z-10">
            <p className="text-label-sm uppercase tracking-widest opacity-80">Step</p>
            <p className="text-h1 font-bold leading-none">{methodology[active].step}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
