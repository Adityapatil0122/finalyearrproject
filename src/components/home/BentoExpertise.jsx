import { useLayoutEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import { expertise } from '@/data/home';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

/* ── accent palette per card ── */
const cardAccents = [
  { gradient: 'linear-gradient(135deg, #005fc6, #1e89fe)', glow: 'rgba(0, 95, 198, 0.35)', tint: 'rgba(0, 95, 198, 0.08)' },
  { gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)', glow: 'rgba(14, 165, 233, 0.35)', tint: 'rgba(14, 165, 233, 0.08)' },
  { gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)', glow: 'rgba(124, 58, 237, 0.35)', tint: 'rgba(124, 58, 237, 0.08)' },
  { gradient: 'linear-gradient(135deg, #059669, #34d399)', glow: 'rgba(5, 150, 105, 0.35)', tint: 'rgba(5, 150, 105, 0.08)' },
  { gradient: 'linear-gradient(135deg, #ea580c, #fb923c)', glow: 'rgba(234, 88, 12, 0.35)', tint: 'rgba(234, 88, 12, 0.08)' },
  { gradient: 'linear-gradient(135deg, #dc2626, #f87171)', glow: 'rgba(220, 38, 38, 0.35)', tint: 'rgba(220, 38, 38, 0.08)' },
];

/* ── bento grid span classes ── */
const cardLayout = [
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-6',
  'lg:col-span-3',
  'lg:col-span-3',
];

/* ── tilt handler (vanilla, no deps) ── */
function useTilt() {
  const onMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    card.style.setProperty('--rx', `${-y * 5}deg`);
    card.style.setProperty('--ry', `${x * 5}deg`);
    card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  const onLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  }, []);

  return { onMove, onLeave };
}

/* ── floating dots decoration ── */
function FloatingDots() {
  return (
    <div className="expertise-floating-dots" aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="expertise-dot"
          style={{
            '--dot-x': `${8 + Math.random() * 84}%`,
            '--dot-y': `${5 + Math.random() * 90}%`,
            '--dot-size': `${3 + Math.random() * 5}px`,
            '--dot-delay': `${Math.random() * 6}s`,
            '--dot-dur': `${4 + Math.random() * 5}s`,
            '--dot-opacity': `${0.12 + Math.random() * 0.2}`,
          }}
        />
      ))}
    </div>
  );
}

/* ── service card component ── */
function ServiceCard({ item, index }) {
  const { onMove, onLeave } = useTilt();
  const accent = cardAccents[index] || cardAccents[0];

  return (
    <Reveal delay={index * 0.08} className={cardLayout[index]}>
      <Link
        to={item.path}
        className="svc-card group block h-full no-underline"
        onMouseMove={!prefersReducedMotion ? onMove : undefined}
        onMouseLeave={!prefersReducedMotion ? onLeave : undefined}
        style={{
          '--card-accent': accent.gradient,
          '--card-glow': accent.glow,
          '--card-tint': accent.tint,
          '--card-delay': `${index * 0.55}s`,
        }}
        aria-label={`Learn more about ${item.title}`}
      >
        {/* animated border glow */}
        <div className="svc-card-glow" aria-hidden />

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

/* ── main section ── */
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
