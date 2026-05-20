import { useLayoutEffect, useRef } from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

const steps = [
  {
    n: 1,
    title: 'Discover',
    desc: 'Workshops to map goals, users, and success metrics.',
    Icon: Search,
  },
  {
    n: 2,
    title: 'Design',
    desc: 'Interfaces and brand systems crafted for clarity.',
    Icon: PenTool,
  },
  {
    n: 3,
    title: 'Develop',
    desc: 'Clean development with modern tools.',
    Icon: Code2,
  },
  {
    n: 4,
    title: 'Launch',
    desc: 'Launch, measure, and improve after release.',
    Icon: Rocket,
  },
];

export default function ProcessTimeline() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !ref.current) return;
    const ctx = gsap.context(() => {
      const line = ref.current.querySelector('[data-line]');
      const circles = ref.current.querySelectorAll('[data-circle]');
      const badges = ref.current.querySelectorAll('[data-badge]');

      gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(circles, { scale: 0, autoAlpha: 0 });
      gsap.set(badges, { scale: 0, autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
      });
      tl.to(line, { scaleX: 1, duration: 1.1, ease: 'power2.inOut' })
        .to(
          circles,
          { scale: 1, autoAlpha: 1, duration: 0.5, ease: 'back.out(1.6)', stagger: 0.18 },
          0.15
        )
        .to(
          badges,
          { scale: 1, autoAlpha: 1, duration: 0.4, ease: 'back.out(2)', stagger: 0.18 },
          0.4
        );
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="process" className="bg-surface-container-low">
      <div className="text-center mb-2xl">
        <Reveal>
          <p className="section-eyebrow mb-2">
            Process
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-h1 font-bold">A clear four-step process</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-2 text-body-lg text-on-surface-variant">
            Simple steps, regular updates, and no guesswork.
          </p>
        </Reveal>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto">
        <div
          data-line
          aria-hidden
          className="hidden md:block absolute left-[10%] right-[10%] top-[40px] h-px bg-gradient-to-r from-transparent via-outline to-transparent"
        />

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-xl md:gap-md">
          {steps.map(({ n, title, desc, Icon }) => (
            <li key={n} className="process-step interactive-surface rounded-3xl px-2 py-md text-center">
              <div className="relative mx-auto w-fit">
                <div
                  data-circle
                  className="grid h-[79px] w-[79px] place-items-center rounded-full bg-primary text-white shadow-low ring-8 ring-surface-container-low"
                >
                  <Icon size={34} strokeWidth={2} />
                </div>
                <div
                  data-badge
                  className="absolute -top-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-white text-primary text-label-sm font-bold shadow-low border border-outline-variant"
                >
                  {n}
                </div>
              </div>
              <h3 className="mt-md text-h3 font-bold text-on-surface">{title}</h3>
              <p className="mt-2 text-body-md text-on-surface-variant max-w-[198px] mx-auto">
                {desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
