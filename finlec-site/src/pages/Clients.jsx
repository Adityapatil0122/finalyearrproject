import { ArrowRight } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import { clientLogos, clientImpact, clientSignals, caseStudies } from '@/data/clients';

export default function Clients() {
  useSEO({
    title: 'Clients - Finlec Technologies',
    description:
      'Clients, growth metrics, and digital services supported by Finlec Technologies.',
  });

  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Trusted by growing teams across sectors."
        description="A public snapshot of the businesses and outcomes represented on the Finlec Technologies reference site."
      />

      <Section className="bg-surface !pt-md">
        <Reveal>
          <p className="text-label-sm uppercase tracking-widest text-on-surface-variant text-center mb-md">
            Trusted clients
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-md">
          {clientLogos.map((c) => (
            <div
              key={c.name}
              className="group interactive-surface surface-lift grid h-28 place-items-center rounded-2xl bg-surface-container-lowest border border-outline-variant p-md grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                className="max-h-16 w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-container-low">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-2xl items-start">
          <div>
            <Reveal>
              <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
                Growth & impact
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-h1 text-balance">Results made visible, not hidden behind vague claims.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-md text-body-lg text-on-surface-variant">
                These public-facing figures mirror the reference site and replace the older placeholder metrics.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-md">
            {clientImpact.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.06}>
                <div className="interactive-surface metric-tile rounded-2xl border border-outline-variant bg-surface-container-lowest p-lg shadow-low">
                  <p className="text-h1 font-bold text-on-surface">
                    <AnimatedNumber value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-1 text-label-sm uppercase tracking-widest text-on-surface-variant">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="max-w-2xl mb-xl">
          <Reveal>
            <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Support areas
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">How Finlec supports client growth.</h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {clientSignals.map((signal, i) => (
            <Reveal key={signal.title} delay={i * 0.08}>
              <div className="interactive-surface surface-lift h-full rounded-2xl bg-surface-container-lowest border border-outline-variant p-xl shadow-low">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-md">
                  <span className="material-symbols-outlined">{signal.icon}</span>
                </div>
                <h3 className="text-h3">{signal.title}</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">{signal.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-container-low">
        <div className="max-w-2xl mb-xl">
          <Reveal>
            <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Service coverage
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">Core delivery tracks published by Finlec.</h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {caseStudies.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <article className="group interactive-surface surface-lift rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-low transition-all">
                <div className="media-reveal aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-lg">
                  <span className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                    {c.tag}
                  </span>
                  <h3 className="mt-2 text-h3">{c.title}</h3>
                  <p className="mt-2 text-body-md text-on-surface-variant">{c.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface !pt-0">
        <Reveal>
          <div className="interactive-surface signal-grid rounded-3xl bg-primary text-white text-center p-xl md:p-2xl">
            <h2 className="text-h1 text-balance">Ready to join the client list?</h2>
            <p className="mt-md text-body-lg text-white/85 max-w-xl mx-auto">
              Share your goals and the team will help you map the right website, app, AI, or growth solution.
            </p>
            <div className="mt-lg flex justify-center">
              <Button to="/contact" variant="white" size="lg" magnetic iconRight={<ArrowRight size={18} />}>
                Start a project
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
