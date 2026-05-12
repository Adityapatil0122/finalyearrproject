import { useEffect, useRef } from 'react';
import {
  Blocks,
  Globe2,
  Rocket,
  Sparkles,
  SmartphoneNfc,
  Target,
  TrendingUp,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import SiteCta from '@/components/ui/SiteCta';
import Marquee from '@/components/ui/Marquee';
import { clientLogos, clientImpact, clientSignals } from '@/data/clients';

const signalIcons = [Globe2, SmartphoneNfc, Target];

export default function Clients() {
  const clientsRef = useRef(null);

  useSEO({
    title: 'Clients – Finlec Technologies',
    description:
      'See the brands and businesses that trust Finlec Technologies for web, app, AI, and digital marketing solutions.',
  });

  return (
    <div ref={clientsRef}>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden border-b border-outline-variant bg-gradient-to-b from-surface-container-low to-surface">
        {/* subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,88,190,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container-page relative py-2xl text-center md:py-[100px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-label-sm font-semibold text-primary">
              <Sparkles size={15} />
              Our Clients
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-6 max-w-4xl text-display leading-tight text-balance text-on-surface">
              Trusted by businesses building{' '}
              <span className="italic text-primary">real things.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-2xl text-body-lg text-on-surface-variant">
              From startups to established brands — we've helped 100+ businesses across
              India grow their digital presence, launch products, and reach more customers.
            </p>
          </Reveal>

          {/* Stats row */}
          <Reveal delay={0.22}>
            <div className="mx-auto mt-xl grid max-w-2xl grid-cols-3 gap-md">
              {clientImpact.slice(0, 3).map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-outline-variant bg-surface-container-lowest px-md py-lg shadow-low"
                >
                  <p className="text-h2 font-bold text-primary">
                    <AnimatedNumber value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-1 text-label-sm uppercase tracking-widest text-on-surface-variant">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Logo marquee inside hero */}
        <Reveal delay={0.28}>
          <div className="border-t border-outline-variant py-xl">
            <Marquee>
              {clientLogos.map((c) => (
                <div
                  key={c.name}
                  className="grid h-20 w-40 place-items-center rounded-xl border border-outline-variant/60 bg-surface-container-lowest px-md shadow-low transition-all duration-300 hover:border-primary/30 hover:shadow-med"
                >
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    className="max-h-11 w-full object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </section>

      {/* ─── LOGO GRID ─── */}
      <Section className="bg-surface">
        <div className="text-center">
          <Reveal>
            <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
              Brand wall
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-3 max-w-2xl text-h1 text-balance text-on-surface">
              Every logo here is a story of growth.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-4 max-w-xl text-body-lg text-on-surface-variant">
              These are the businesses that chose Finlec to build, grow, and evolve their digital presence.
            </p>
          </Reveal>
        </div>

        <div className="mt-2xl grid grid-cols-3 gap-md sm:grid-cols-4 md:grid-cols-5">
          {clientLogos.map((logo, index) => (
            <Reveal key={logo.logo} delay={(index % 10) * 0.04}>
              <div className="group flex h-28 cursor-default items-center justify-center rounded-2xl border border-outline-variant bg-surface-container-lowest p-md shadow-low transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-med">
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  className="max-h-14 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ─── STATS BAND ─── */}
      <Section
        className="relative overflow-hidden bg-primary text-white"
        container={false}
      >
        {/* subtle light sweep */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.08), transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,200,240,0.10), transparent 40%)',
          }}
        />
        <div className="container-page relative">
          <div className="grid gap-xl lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <p className="text-label-sm font-semibold uppercase tracking-widest text-white/60">
                  By the numbers
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-3 text-h1 text-balance">
                  Results that speak louder than promises.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 max-w-lg text-body-lg text-white/70">
                  Every project we take on is focused on one goal — delivering
                  measurable growth for the businesses that trust us.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-md">
              {clientImpact.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.07}>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={18} className="text-white/50" />
                    </div>
                    <p className="mt-2 text-display font-bold leading-none">
                      <AnimatedNumber value={item.value} suffix={item.suffix} />
                    </p>
                    <p className="mt-2 text-label-sm uppercase tracking-widest text-white/60">
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── HOW WE SUPPORT CLIENTS ─── */}
      <Section className="bg-surface-container-low">
        <div className="text-center">
          <Reveal>
            <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
              How we help
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-3 max-w-2xl text-h1 text-balance text-on-surface">
              Three ways we keep your business moving forward.
            </h2>
          </Reveal>
        </div>

        <div className="mt-2xl grid grid-cols-1 gap-lg md:grid-cols-3">
          {clientSignals.map((signal, index) => {
            const Icon = signalIcons[index] || Rocket;
            return (
              <Reveal key={signal.title} delay={index * 0.1}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-outline-variant bg-surface-container-lowest p-xl shadow-low transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-med">
                  {/* top accent line on hover */}
                  <div className="absolute left-6 right-6 top-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="mb-lg flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-low">
                      <Icon size={26} />
                    </div>
                    <span className="text-[2rem] font-extrabold text-on-surface/8 select-none">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-h3 text-on-surface">{signal.title}</h3>
                  <p className="mt-2 flex-1 text-body-md text-on-surface-variant">
                    {signal.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <SiteCta title="Ready to add your brand to the moving wall?" />
    </div>
  );
}
