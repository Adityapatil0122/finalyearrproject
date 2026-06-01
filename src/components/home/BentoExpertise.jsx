import { useLayoutEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import { expertise } from '@/data/home';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

/* Per-card config: image path + accent colour for text/icon tinting */
const cardConfig = [
  { img: '/services/svc-web-dev.png',   accentColor: '#1e89fe' },
  { img: '/services/svc-app-dev.png',   accentColor: '#38bdf8' },
  { img: '/services/svc-marketing.png', accentColor: '#34d399' },
  { img: '/services/svc-whatsapp.png',  accentColor: '#4ade80' },
  { img: '/services/svc-uiux.png',      accentColor: '#a78bfa' },
  { img: '/services/svc-graphics.png',  accentColor: '#f87171' },
];

/* Bento grid span classes */
const cardLayout = [
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-6',
  'lg:col-span-3',
  'lg:col-span-3',
];

const floatingDots = Array.from({ length: 18 }, (_, index) => {
  const x = 8 + ((index * 37) % 84);
  const y = 5 + ((index * 53) % 90);
  const size = 3 + ((index * 7) % 5);
  const delay = ((index * 11) % 60) / 10;
  const duration = 4 + ((index * 13) % 50) / 10;
  const opacity = 0.12 + ((index * 17) % 20) / 100;

  return {
    x: `${x}%`,
    y: `${y}%`,
    size: `${size}px`,
    delay: `${delay}s`,
    duration: `${duration}s`,
    opacity: opacity.toFixed(2),
  };
});

/* Tilt handler */
function useTilt() {
  const onMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    card.style.setProperty('--rx', `${-y * 5}deg`);
    card.style.setProperty('--ry', `${x * 5}deg`);
  }, []);

  const onLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  }, []);

  return { onMove, onLeave };
}

/* Floating dots decoration */
function FloatingDots() {
  return (
    <div className="expertise-floating-dots" aria-hidden>
      {floatingDots.map((dot, i) => (
        <span
          key={i}
          className="expertise-dot"
          style={{
            '--dot-x': dot.x,
            '--dot-y': dot.y,
            '--dot-size': dot.size,
            '--dot-delay': dot.delay,
            '--dot-dur': dot.duration,
            '--dot-opacity': dot.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* Service card component */
function ServiceCard({ item, index }) {
  const { onMove, onLeave } = useTilt();
  const config = cardConfig[index] || cardConfig[0];

  return (
    <Reveal delay={index * 0.08} className={cardLayout[index]}>
      <Link
        to={item.path}
        className="svc-card group block h-full no-underline"
        onMouseMove={!prefersReducedMotion ? onMove : undefined}
        onMouseLeave={!prefersReducedMotion ? onLeave : undefined}
        style={{
          '--card-accent-color': config.accentColor,
          '--card-delay': `${index * 0.55}s`,
        }}
        aria-label={`Learn more about ${item.title}`}
      >
        {/* card bg image — revealed on hover */}
        <div
          className="svc-card-bg-img"
          style={{ backgroundImage: `url(${config.img})` }}
          aria-hidden
        />

        {/* sheen sweep */}
        <div className="svc-card-sheen" aria-hidden />

        {/* card body */}
        <div className="svc-card-body">
          {/* icon */}
          <div className="svc-icon-wrap">
            <div className="svc-icon-bg" aria-hidden />
            <div className="svc-icon">
              <Icon name={item.icon} size={24} strokeWidth={1.8} />
            </div>
          </div>

          {/* text */}
          <div className="svc-card-text">
            <h3 className="svc-card-title">{item.title}</h3>
            <p className="svc-card-desc">{item.desc}</p>
          </div>

          {/* feature list */}
          <ul className="svc-feature-list">
            {item.points?.map((point, pi) => (
              <li
                key={point}
                className="svc-feature-item"
                style={{ '--feat-delay': `${pi * 60}ms` }}
              >
                <span className="svc-feature-dot" aria-hidden />
                {point}
              </li>
            ))}
          </ul>

          {/* learn more link */}
          <div className="svc-learn-more">
            <span>Learn more</span>
            <Icon name="arrow_forward" size={16} />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* Main section */
export default function BentoExpertise() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      /* staggered floating for cards */
      gsap.to('.svc-card', {
        y: -5,
        duration: 5.6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.22 },
      });

      /* parallax dots */
      gsap.to('.expertise-dot', {
        y: -18,
        duration: 8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.12 },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="expertise" className="svc-section overflow-hidden">
      <div ref={sectionRef} className="relative">
        {/* decorative grid bg */}
        <div className="svc-grid-bg" aria-hidden />

        {/* floating dots */}
        <FloatingDots />

        {/* radial gradient accent */}
        <div className="svc-radial-accent" aria-hidden />

        {/* heading */}
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="svc-eyebrow-wrap">
              <span className="svc-eyebrow">
                <span className="svc-eyebrow-dot" aria-hidden />
                Our Services
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance svc-heading">
              Everything your business needs to
              <span className="svc-heading-accent"> grow digital</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-md max-w-2xl text-body-lg text-on-surface-variant">
              From stunning websites and mobile apps to smart marketing and
              creative design — we craft every piece under one roof.
            </p>
          </Reveal>
        </div>

        {/* bento grid */}
        <div className="relative mt-2xl grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-12">
          {expertise.map((e, i) => (
            <ServiceCard key={e.title} item={e} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
