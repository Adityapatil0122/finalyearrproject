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
      <div className="bg-surface">
        <div className="hero-blue-card relative overflow-hidden bg-gradient-to-br from-[#0068d6] via-primary to-[#003ea8]">
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
            <svg
              className="hero-blueprint-lines absolute inset-0 h-full w-full opacity-45"
              viewBox="0 0 1440 760"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M120 180H360L470 250H705" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
              <path d="M830 145H1090L1215 235H1330" stroke="white" strokeOpacity="0.16" strokeWidth="1" />
              <path d="M170 565H420L535 490H725" stroke="white" strokeOpacity="0.14" strokeWidth="1" />
              <path d="M810 600H1020L1160 505H1350" stroke="white" strokeOpacity="0.14" strokeWidth="1" />
              <path d="M85 420C245 392 356 406 492 450C636 496 760 496 915 448C1072 400 1210 386 1380 430" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
              <rect x="88" y="150" width="112" height="42" rx="8" stroke="white" strokeOpacity="0.14" />
              <rect x="1172" y="198" width="132" height="48" rx="8" stroke="white" strokeOpacity="0.13" />
              <rect x="246" y="536" width="150" height="50" rx="8" stroke="white" strokeOpacity="0.12" />
              <rect x="1064" y="548" width="118" height="42" rx="8" stroke="white" strokeOpacity="0.12" />
              {[190, 235, 280, 325, 370].map((x) => (
                <path key={`top-${x}`} d={`M${x} 208V232`} stroke="white" strokeOpacity="0.16" strokeWidth="1" />
              ))}
              {[965, 1010, 1055, 1100, 1145].map((x) => (
                <path key={`bottom-${x}`} d={`M${x} 617V645`} stroke="white" strokeOpacity="0.13" strokeWidth="1" />
              ))}
            </svg>
            <div className="hero-scan-band absolute left-[-10%] top-[18%] h-24 w-[120%] -rotate-6 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
            <div className="hero-bg-rail hero-bg-rail-one absolute left-[20%] top-[14%] hidden h-px w-44 bg-white/20 lg:block" />
            <div className="hero-bg-rail hero-bg-rail-two absolute right-[20%] top-[16%] hidden h-px w-52 bg-white/18 lg:block" />
            <div className="hero-bg-stack absolute left-[23%] bottom-[25%] hidden items-end gap-1.5 lg:flex">
              {[18, 28, 15, 36, 24, 42, 20, 32].map((height, index) => (
                <span key={index} className="w-2 rounded-sm bg-white/16" style={{ height }} />
              ))}
            </div>
            <div className="hero-bg-stack absolute right-[24%] bottom-[29%] hidden items-end gap-1.5 lg:flex">
              {[34, 22, 44, 28, 18, 38, 26, 48].map((height, index) => (
                <span key={index} className="w-2 rounded-sm bg-white/14" style={{ height }} />
              ))}
            </div>
          </div>

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

          <div className="hero-sparkle-float absolute left-[10%] top-[35%] hidden h-11 w-11 place-items-center rounded-full bg-white/10 backdrop-blur-sm lg:grid">
            <Plus size={20} className="text-white/60" />
          </div>
          <div className="hero-sparkle-float absolute right-[15%] top-[18%] hidden h-12 w-12 place-items-center rounded-full bg-white/10 backdrop-blur-sm lg:grid">
            <Sparkles size={20} className="text-white/60" />
          </div>

          <div className="hero-float-card-left absolute left-[3%] top-[28%] z-10 hidden w-[210px] -rotate-[10deg] rounded-2xl border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl lg:block xl:left-[5%] xl:top-[24%] xl:w-[230px]">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                <Code2 size={20} className="text-white/80" />
              </span>
              <div>
                <p className="section-eyebrow-sm text-[0.65rem] text-white/45">
                  Lead growth
                </p>
                <p className="text-[0.7rem] text-white">
                  <TrendingUp size={12} className="mb-0.5 mr-1 inline" />
                  Up 40%
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
              <span className="text-white/40">Last month</span>
              <span className="font-bold text-white">This month</span>
            </div>
          </div>

          <div className="hero-float-card-right absolute bottom-[30%] right-[3%] z-10 hidden w-[210px] rotate-[10deg] rounded-2xl border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl lg:block xl:bottom-[26%] xl:right-[5%] xl:w-[230px]">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                <Bot size={20} className="text-white/80" />
              </span>
              <div>
                <p className="section-eyebrow-sm text-[0.65rem] text-white/45">
                  Support chats
                </p>
                <p className="text-[0.7rem] text-white">
                  <TrendingUp size={12} className="mb-0.5 mr-1 inline" />
                  Faster replies
                </p>
              </div>
            </div>
            <p className="text-[2rem] font-extrabold italic leading-none text-white">24/7</p>
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
              <span className="text-white/40">Manual</span>
              <span className="font-bold text-white">Assisted</span>
            </div>
          </div>

          <div className="relative z-20 mx-auto max-w-3xl px-4 pb-12 pt-14 text-center text-white sm:pb-14 sm:pt-16 md:pb-16 md:pt-20 lg:pb-20 lg:pt-28">
            <AnimatedHeading as="h1" className="text-display text-balance leading-[1.06]">
              Build better websites, apps, AI tools, and{' '}
              <span className="hero-highlight-wrap relative inline-block">
                <span className="relative z-10 italic">growth systems</span>
                <span
                  className="absolute -inset-x-3 bottom-[2px] top-[52%] -z-0 rounded-md bg-white/25"
                  aria-hidden
                />
              </span>
            </AnimatedHeading>

            <AnimatedHeading
              as="p"
              delay={0.2}
              className="mx-auto mt-6 max-w-2xl text-body-lg text-white/70"
            >
              We help businesses grow with website and app development, digital
              marketing, AI solutions, WhatsApp Business API, UI/UX design, and
              brand graphics from one team.
            </AnimatedHeading>

            <div className="hero-actions mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <Button
                size="lg"
                magnetic
                to="/contact"
                variant="white"
                iconRight={<ArrowRight size={20} />}
                className="shadow-xl shadow-black/20"
              >
                Start a project
              </Button>
              <Button
                size="lg"
                variant="ghost"
                to="/services"
                className="border border-white/25 text-white hover:bg-white/10"
              >
                View services
              </Button>
            </div>
          </div>

          <div className="relative z-20 border-t border-white/10 px-4 pb-16 pt-6 sm:px-8 md:pb-20 md:pt-8 lg:px-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
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
                  <p className="section-eyebrow-sm text-[0.7rem] text-white/50">
                    Clients
                  </p>
                  <p className="text-xl font-extrabold leading-none">100+</p>
                </div>
              </div>

              <div className="hero-metrics grid w-full max-w-md grid-cols-3 gap-2 text-white md:w-auto md:max-w-none md:flex md:items-center md:gap-10">
                {bottomStats.map((stat) => (
                  <div key={stat.label} className="min-w-0 text-center">
                    <p className="text-2xl font-extrabold leading-none md:text-[1.85rem]">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="section-eyebrow-sm mt-1.5 text-[0.68rem] text-white/45">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 z-30 h-[50px] bg-surface md:h-[65px]"
            aria-hidden
            style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}
          />
        </div>

        <div className="bg-surface pb-7 pt-5 md:pb-10 md:pt-8">
          <Marquee speed={42}>
            {clientLogos.map((c) => (
              <div
                key={c.name}
                className="grid h-[5.4rem] w-[12.6rem] place-items-center px-5 md:h-[6.3rem] md:w-[14.4rem]"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="max-h-[3.6rem] w-full object-contain opacity-95 saturate-[1.06] transition-opacity duration-300 hover:opacity-100 md:max-h-[4.5rem]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
