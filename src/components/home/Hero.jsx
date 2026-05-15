import { useLayoutEffect, useRef } from 'react';
import {
  ArrowRight,
  Code2,
  Sparkles,
  Bot,
  Plus,
  TrendingUp,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import Marquee from '@/components/ui/Marquee';
import { clientLogos } from '@/data/clients';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

/* ─── bottom stats ─── */
const bottomStats = [
  { value: 150, suffix: '+', label: 'Projects completed' },
  { value: 100, suffix: '+', label: 'Happy clients' },
  { value: 96, suffix: '%', label: 'Client satisfaction' },
];

const clientAvatars = [
  '/avatars/avatar-1.png',
  '/avatars/cimg.jpg',
  '/avatars/cimg2.jpg',
  '/avatars/cimg3.jpg',
];

export default function Hero() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* floating cards */
      gsap.to('.hero-float-card-left', {
        y: -16,
        rotation: -8,
        duration: 4.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
      gsap.to('.hero-float-card-right', {
        y: -14,
        rotation: 8,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.8,
      });

      /* floating plus icons */
      gsap.utils.toArray('.hero-plus-icon').forEach((el, i) => {
        gsap.to(el, {
          y: -10 - i * 3,
          x: (i % 2 === 0 ? 1 : -1) * 6,
          rotation: 60 + i * 30,
          duration: 5.5 + i * 0.7,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.4,
        });
      });

      /* sparkle icons */
      gsap.utils.toArray('.hero-sparkle-float').forEach((el, i) => {
        gsap.to(el, {
          y: -8,
          scale: 1.12,
          duration: 3 + i * 0.5,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.6,
        });
      });

      /* avatars subtle bounce */
      gsap.to('.hero-avatar-stack', {
        y: -3,
        duration: 2.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="home-hero hero-outer-frame relative overflow-hidden">
      {/* ─── DARK OUTER BACKGROUND ─── */}
      <div className="bg-surface px-3 pb-0 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
        {/* ─── BLUE HERO CARD ─── */}
        <div className="hero-blue-card relative overflow-hidden rounded-t-[1.5rem] rounded-b-none bg-gradient-to-br from-[#0068d6] via-primary to-[#003ea8] sm:rounded-t-[2rem] md:rounded-t-[2.5rem]">
          {/* Background patterns */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at 25% 20%, rgba(100,200,255,0.14), transparent 50%), radial-gradient(ellipse at 75% 80%, rgba(0,200,240,0.08), transparent 45%)',
              }}
            />
          </div>

          {/* ─── Floating "+" decorations ─── */}
          <span className="hero-plus-icon absolute left-[7%] top-[22%] hidden text-white/25 lg:block">
            <Plus size={34} strokeWidth={2.5} />
          </span>
          <span className="hero-plus-icon absolute right-[12%] top-[30%] hidden text-white/15 lg:block">
            <Plus size={24} strokeWidth={2.5} />
          </span>
          <span className="hero-plus-icon absolute bottom-[35%] left-[18%] hidden text-white/15 lg:block">
            <Plus size={20} strokeWidth={2.5} />
          </span>
          <span className="hero-plus-icon absolute bottom-[40%] right-[8%] hidden text-white/20 lg:block">
            <Plus size={28} strokeWidth={2.5} />
          </span>

          {/* ─── Sparkle accent circles ─── */}
          <div className="hero-sparkle-float absolute left-[10%] top-[35%] hidden h-11 w-11 place-items-center rounded-full bg-white/10 backdrop-blur-sm lg:grid">
            <Plus size={20} className="text-white/60" />
          </div>
          <div className="hero-sparkle-float absolute right-[15%] top-[18%] hidden h-12 w-12 place-items-center rounded-full bg-white/10 backdrop-blur-sm lg:grid">
            <Sparkles size={20} className="text-white/60" />
          </div>

          {/* ─── Floating card LEFT ─── */}
          <div className="hero-float-card-left absolute left-[3%] top-[28%] z-10 hidden w-[210px] -rotate-[10deg] rounded-2xl border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl lg:block xl:left-[5%] xl:top-[24%] xl:w-[230px]">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                <Code2 size={20} className="text-white/80" />
              </span>
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/45">
                  Monthly Sales
                </p>
                <p className="text-[0.7rem] text-emerald-300">
                  <TrendingUp size={12} className="mb-0.5 mr-1 inline" />
                  Increased 40%
                </p>
              </div>
            </div>
            <p className="text-[2rem] font-extrabold italic leading-none text-white">192</p>
            <div className="mt-2 flex items-end gap-1.5">
              {[65, 45, 78, 55, 82, 50, 70, 60, 85].map((h, i) => (
                <span
                  key={i}
                  className="w-full rounded-sm bg-white/20"
                  style={{ height: `${h * 0.28}px` }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[0.7rem]">
              <span className="text-white/40 line-through">$90000</span>
              <span className="font-bold text-emerald-300">$20000</span>
            </div>
          </div>

          {/* ─── Floating card RIGHT ─── */}
          <div className="hero-float-card-right absolute bottom-[30%] right-[3%] z-10 hidden w-[210px] rotate-[10deg] rounded-2xl border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl lg:block xl:bottom-[26%] xl:right-[5%] xl:w-[230px]">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                <Bot size={20} className="text-white/80" />
              </span>
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/45">
                  Monthly Sales
                </p>
                <p className="text-[0.7rem] text-emerald-300">
                  <TrendingUp size={12} className="mb-0.5 mr-1 inline" />
                  Increased 40%
                </p>
              </div>
            </div>
            <p className="text-[2rem] font-extrabold italic leading-none text-white">192</p>
            <div className="mt-2 flex items-end gap-1.5">
              {[55, 78, 42, 88, 65, 72, 50, 80, 60].map((h, i) => (
                <span
                  key={i}
                  className="w-full rounded-sm bg-white/20"
                  style={{ height: `${h * 0.28}px` }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[0.7rem]">
              <span className="text-white/40 line-through">$90000</span>
              <span className="font-bold text-emerald-300">$20000</span>
            </div>
          </div>

          {/* ─── CENTER CONTENT ─── */}
          <div className="relative z-20 mx-auto max-w-3xl px-4 pb-12 pt-14 text-center text-white sm:pb-14 sm:pt-16 md:pb-16 md:pt-20 lg:pb-20 lg:pt-24">
            {/* Badge pill */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/20 px-5 py-2.5 text-[0.85rem] font-semibold backdrop-blur-md">
              <span>The Future of Digital is Here</span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-white">
                <Sparkles size={13} />
              </span>
            </div>

            {/* Heading */}
            <AnimatedHeading as="h1" className="text-display text-balance leading-[1.06]">
              Experience seamless growth with smart tools made for{' '}
              <span className="hero-highlight-wrap relative inline-block">
                <span className="relative z-10 italic">modern businesses</span>
                <span
                  className="absolute -inset-x-3 bottom-[2px] top-[52%] -z-0 rounded-md bg-white/25"
                  aria-hidden
                />
              </span>
            </AnimatedHeading>

            {/* Subtitle */}
            <AnimatedHeading
              as="p"
              delay={0.2}
              className="mx-auto mt-6 max-w-2xl text-body-lg text-white/70"
            >
              We help businesses grow with website and app development, strategic
              digital marketing, AI solutions, WhatsApp Business API, and creative
              design — all from one powerful team.
            </AnimatedHeading>

            {/* CTA buttons */}
            <div className="hero-actions mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <Button
                size="lg"
                magnetic
                to="/contact"
                variant="white"
                iconRight={<ArrowRight size={20} />}
                className="shadow-xl shadow-black/20"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="ghost"
                to="/services"
                className="border border-white/25 text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* ─── BOTTOM STATS BAR (inside the blue card) ─── */}
          <div className="relative z-20 border-t border-white/10 px-4 pb-16 pt-6 sm:px-8 md:pb-20 md:pt-8 lg:px-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
              {/* Avatar stack + clients */}
              <div className="flex items-center gap-4">
                <div className="hero-avatar-stack flex -space-x-3">
                  {clientAvatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-primary object-cover shadow-md"
                      loading="eager"
                    />
                  ))}
                </div>
                <div className="text-white">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                    Clients
                  </p>
                  <p className="text-xl font-extrabold leading-none">100+</p>
                </div>
              </div>

              {/* Stats numbers */}
              <div className="hero-metrics grid w-full max-w-md grid-cols-3 gap-2 text-white md:w-auto md:max-w-none md:flex md:items-center md:gap-10">
                {bottomStats.map((stat) => (
                  <div key={stat.label} className="min-w-0 text-center">
                    <p className="text-2xl font-extrabold leading-none md:text-[1.85rem]">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/45">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── BOTTOM NOTCH / ARCH CURVE ─── */}
          <div
            className="absolute bottom-0 left-0 right-0 z-30 h-[50px] bg-surface md:h-[65px]"
            aria-hidden
            style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}
          />
        </div>

        {/* ─── CLIENT LOGOS STRIP (in the dark area below the card) ─── */}
        <div className="bg-surface pb-6 pt-4 md:pb-8 md:pt-6">
          <Marquee speed={46}>
            {clientLogos.map((c) => (
              <div
                key={c.name}
                className="grid h-16 w-36 place-items-center px-4"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="max-h-10 w-full object-contain opacity-90 saturate-[1.06] transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
