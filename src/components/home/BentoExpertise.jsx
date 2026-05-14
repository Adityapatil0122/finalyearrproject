import { useLayoutEffect, useRef } from 'react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { expertise } from '@/data/home';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

const accentClass = {
  primary: 'expertise-card-primary',
  secondary: 'expertise-card-secondary',
  tertiary: 'expertise-card-tertiary',
};

const cardLayout = [
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-3',
  'lg:col-span-6',
  'lg:col-span-3',
];

export default function BentoExpertise() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.to('.expertise-card', {
        y: -4,
        duration: 5.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="expertise" className="expertise-section overflow-hidden">
      <div ref={sectionRef} className="relative">
        <div className="expertise-grid-bg" aria-hidden />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="mb-2 text-label-sm font-semibold uppercase tracking-widest text-primary">
              Services
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">
              Website, apps, marketing, WhatsApp, design, and branding from one team.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-md max-w-2xl text-body-lg text-on-surface-variant">
              These are the real service areas Finlec publishes: practical digital
              builds for businesses that need better reach, clearer interfaces, and
              systems that can keep improving after launch.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-2xl grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-12">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06} className={cardLayout[i]}>
              <article
                className={[
                  'expertise-card interactive-surface h-full p-xl',
                  accentClass[e.accent] || accentClass.primary,
                ].join(' ')}
                style={{ '--card-delay': `${i * 0.45}s` }}
              >
                <div className="expertise-card-body relative z-10 flex h-full min-h-[210px] flex-col">
                  <div className="flex items-start justify-between gap-md">
                    <div className="expertise-icon">
                      <span className="material-symbols-outlined">{e.icon}</span>
                    </div>
                    <span className="expertise-kicker">{e.kicker}</span>
                  </div>

                  <div className="mt-lg">
                    <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                      {e.metric} layer
                    </p>
                    <h3 className="text-h3 text-on-surface">{e.title}</h3>
                    <p className="mt-sm max-w-[33rem] text-body-md text-on-surface-variant">
                      {e.desc}
                    </p>
                  </div>

                  {e.detail ? (
                    <div className="expertise-detail-box mt-md">
                      <p className="expertise-detail-label">Best for</p>
                      <p className="mt-1 text-body-sm text-on-surface-variant">{e.detail}</p>
                    </div>
                  ) : null}

                  <div className="mt-auto flex flex-wrap gap-2 pt-lg">
                    {e.points?.map((point) => (
                      <span key={point} className="expertise-point-chip">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
