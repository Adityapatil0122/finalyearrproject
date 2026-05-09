import { useEffect, useRef } from 'react';
import { Code2, Layers3, Rocket } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { techStack } from '@/data/home';
import { gsap } from '@/lib/gsap';

const logoBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const techLogos = {
  React: `${logoBase}/react/react-original.svg`,
  Angular: `${logoBase}/angularjs/angularjs-original.svg`,
  'Vue.js': `${logoBase}/vuejs/vuejs-original.svg`,
  'Node.js': `${logoBase}/nodejs/nodejs-original.svg`,
  Python: `${logoBase}/python/python-original.svg`,
  PHP: `${logoBase}/php/php-original.svg`,
  Java: `${logoBase}/java/java-original.svg`,
  MySQL: `${logoBase}/mysql/mysql-original.svg`,
  MongoDB: `${logoBase}/mongodb/mongodb-original.svg`,
  AWS: `${logoBase}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  Docker: `${logoBase}/docker/docker-original.svg`,
  Kubernetes: `${logoBase}/kubernetes/kubernetes-plain.svg`,
  Git: `${logoBase}/git/git-original.svg`,
  Jenkins: `${logoBase}/jenkins/jenkins-original.svg`,
  Azure: `${logoBase}/azure/azure-original.svg`,
  Firebase: `${logoBase}/firebase/firebase-plain.svg`,
  GraphQL: `${logoBase}/graphql/graphql-plain.svg`,
  TypeScript: `${logoBase}/typescript/typescript-original.svg`,
};

const tileStyles = [
  { rotate: '-4deg', y: '10px', scale: 1.06 },
  { rotate: '3deg', y: '-6px', scale: 0.96 },
  { rotate: '-2deg', y: '18px', scale: 1 },
  { rotate: '5deg', y: '0px', scale: 1.08 },
  { rotate: '4deg', y: '-10px', scale: 0.98 },
  { rotate: '-5deg', y: '8px', scale: 1.04 },
  { rotate: '2deg', y: '-2px', scale: 0.94 },
  { rotate: '-3deg', y: '14px', scale: 1.02 },
  { rotate: '6deg', y: '-8px', scale: 1 },
  { rotate: '-2deg', y: '6px', scale: 0.96 },
  { rotate: '3deg', y: '16px', scale: 1.08 },
  { rotate: '-5deg', y: '-4px', scale: 1 },
  { rotate: '2deg', y: '10px', scale: 0.96 },
  { rotate: '-4deg', y: '-10px', scale: 1.02 },
  { rotate: '5deg', y: '8px', scale: 0.98 },
  { rotate: '-2deg', y: '-2px', scale: 1.06 },
  { rotate: '4deg', y: '18px', scale: 0.94 },
  { rotate: '-3deg', y: '4px', scale: 1 },
];

const featured = [
  { icon: Code2, label: 'Frontend systems' },
  { icon: Layers3, label: 'Cloud + data' },
  { icon: Rocket, label: 'Launch pipeline' },
];

const orbitRings = [
  {
    className: 'tech-orbit tech-orbit-outer',
    duration: '16s',
    items: [
      { tech: 'React', top: '2%', left: '50%' },
      { tech: 'Angular', top: '14%', left: '82%' },
      { tech: 'Vue.js', top: '50%', left: '98%' },
      { tech: 'Node.js', top: '86%', left: '82%' },
      { tech: 'Python', top: '98%', left: '50%' },
      { tech: 'PHP', top: '86%', left: '18%' },
      { tech: 'Java', top: '50%', left: '2%' },
      { tech: 'MySQL', top: '14%', left: '18%' },
    ],
  },
  {
    className: 'tech-orbit tech-orbit-middle tech-orbit-reverse',
    duration: '12s',
    items: [
      { tech: 'MongoDB', top: '4%', left: '50%' },
      { tech: 'AWS', top: '28%', left: '93%' },
      { tech: 'Docker', top: '78%', left: '76%' },
      { tech: 'Kubernetes', top: '78%', left: '24%' },
      { tech: 'Git', top: '28%', left: '7%' },
    ],
  },
  {
    className: 'tech-orbit tech-orbit-inner',
    duration: '8s',
    items: [
      { tech: 'Jenkins', top: '4%', left: '50%' },
      { tech: 'Azure', top: '50%', left: '96%' },
      { tech: 'Firebase', top: '96%', left: '50%' },
      { tech: 'GraphQL', top: '50%', left: '4%' },
    ],
  },
];

export default function TechStack() {
  const galaxyRef = useRef(null);

  useEffect(() => {
    if (!galaxyRef.current) return undefined;

    const ctx = gsap.context(() => {
      const rings = gsap.utils.toArray('.tech-orbit');

      gsap.set(
        '.tech-orbit, .tech-orbit-node, .tech-orbit-card, .tech-logo-bouncer, .tech-core, .tech-comet',
        { animation: 'none' }
      );

      gsap.set('.tech-orbit-node', {
        xPercent: -50,
        yPercent: -50,
        scale: 1,
      });

      rings.forEach((ring) => {
        const duration = Number.parseFloat(ring.dataset.duration) || 12;
        const reverse = ring.classList.contains('tech-orbit-reverse');
        const cards = ring.querySelectorAll('.tech-orbit-card');

        gsap.set(ring, {
          xPercent: -50,
          yPercent: -50,
          rotation: 0,
          transformOrigin: '50% 50%',
        });

        gsap.to(ring, {
          rotation: reverse ? -360 : 360,
          duration,
          ease: 'none',
          repeat: -1,
        });

        gsap.to(cards, {
          rotation: reverse ? 360 : -360,
          duration,
          ease: 'none',
          repeat: -1,
        });
      });

      gsap.to('.tech-orbit-node', {
        scale: 1.14,
        duration: 1.1,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.08,
      });

      gsap.to('.tech-logo-bouncer', {
        y: -8,
        rotation: 4,
        duration: 0.85,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.07,
      });

      gsap.to('.tech-core', {
        scale: 1.07,
        duration: 1.35,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.fromTo(
        '.tech-comet-one',
        { x: -90, y: -40, opacity: 0 },
        { x: 760, y: 430, opacity: 1, duration: 3.4, ease: 'power1.inOut', repeat: -1 }
      );

      gsap.fromTo(
        '.tech-comet-two',
        { x: 820, y: 70, opacity: 0 },
        { x: -120, y: 360, opacity: 1, duration: 4.2, ease: 'power1.inOut', repeat: -1 }
      );
    }, galaxyRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="tech-stack" className="overflow-hidden bg-surface-container-low">
      <div className="grid gap-2xl lg:grid-cols-[0.72fr_1.6fr] lg:items-center">
        <div>
          <Reveal>
            <p className="mb-2 text-label-sm font-semibold uppercase tracking-widest text-primary">
              Technology
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">A stack that feels alive, not like a checklist.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-md text-body-lg text-on-surface-variant">
              The tools we use across product design, engineering, automation, cloud,
              and launch support.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-xl grid gap-sm">
              {featured.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-sm rounded-2xl border border-outline-variant bg-surface-container-lowest p-md shadow-low"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={21} />
                  </span>
                  <span className="text-body-md font-semibold text-on-surface">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div
            ref={galaxyRef}
            className="tech-galaxy interactive-surface signal-grid relative min-h-[620px] overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest shadow-med"
          >
            <div className="tech-comet tech-comet-one" />
            <div className="tech-comet tech-comet-two" />
            <div className="absolute inset-x-8 top-10 h-24 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="tech-core mx-auto grid h-32 w-32 place-items-center rounded-full border border-primary/20 bg-white shadow-high">
                <Rocket size={42} className="text-primary" />
              </div>
              <p className="mt-md text-label-sm font-semibold uppercase tracking-widest text-on-surface-variant">
                Build engine
              </p>
            </div>

            {orbitRings.map((ring, ringIndex) => (
              <div
                key={ring.className}
                className={ring.className}
                data-duration={Number.parseFloat(ring.duration)}
                style={{ '--orbit-duration': ring.duration }}
              >
                {ring.items.map(({ tech, top, left }, itemIndex) => (
                  <div
                    key={tech}
                    title={tech}
                    aria-label={tech}
                    className="tech-orbit-node"
                    style={{
                      top,
                      left,
                      '--node-delay': `${(ringIndex * 0.35 + itemIndex * 0.16).toFixed(2)}s`,
                    }}
                  >
                    <div className="tech-orbit-card">
                      <span className="tech-logo-bouncer">
                        <img src={techLogos[tech]} alt={`${tech} logo`} loading="lazy" />
                      </span>
                      <span className="sr-only">{tech}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            <div className="pointer-events-none absolute inset-x-8 bottom-8 grid grid-cols-3 gap-sm opacity-85">
              {techStack.slice(0, 9).map((tech, index) => {
                const style = tileStyles[index % tileStyles.length];

                return (
                  <span
                    key={tech}
                    className="h-1.5 rounded-full bg-primary/20"
                    style={{
                      transform: `translateY(${style.y}) rotate(${style.rotate}) scaleX(${style.scale})`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
