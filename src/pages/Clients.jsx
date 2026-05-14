import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Sparkles,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import SiteCta from '@/components/ui/SiteCta';
import { caseStudies, clientLogos } from '@/data/clients';

const logoTints = [
  'bg-primary/8 border-primary/15',
  'bg-secondary/8 border-secondary/15',
  'bg-emerald-50 border-emerald-100',
  'bg-amber-50 border-amber-100',
  'bg-surface-container-lowest border-outline-variant',
];

export default function Clients() {
  useSEO({
    title: 'Clients - Finlec Technologies',
    description:
      'See the brands and businesses that trust Finlec Technologies for web, app, AI, and digital marketing solutions.',
  });

  const featuredLogos = clientLogos.slice(0, 9);
  const remainingLogos = clientLogos.slice(9);

  return (
    <>
      <section className="relative overflow-hidden border-b border-outline-variant bg-surface-container-low">
        <div className="absolute inset-0 signal-grid opacity-60" aria-hidden />
        <div className="container-page relative py-xl md:py-[96px]">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface-container-lowest px-4 py-1.5 text-label-sm font-semibold text-primary shadow-low">
                <Sparkles size={15} />
                Client network
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mx-auto mt-6 max-w-4xl text-display leading-tight text-balance text-on-surface">
                Brands that trust us to build, launch, and keep moving.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mx-auto mt-md max-w-2xl text-body-lg text-on-surface-variant">
                A growing mix of local businesses, product teams, service brands, and
                operators who needed cleaner websites, sharper journeys, better
                automation, and practical digital systems.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-xl flex flex-wrap justify-center gap-sm">
                {['Websites', 'Apps', 'AI workflows', 'Growth campaigns'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-outline-variant bg-surface-container-lowest px-md py-sm text-label-sm font-semibold text-on-surface shadow-low"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section className="bg-surface">
        <div className="grid gap-xl lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <Reveal>
              <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                Brand wall
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-h1 text-balance text-on-surface">
                A quieter wall for the teams we have worked with.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-md text-body-lg text-on-surface-variant">
                No vanity counters here. Just the businesses that trusted Finlec
                with websites, apps, automation, design, and growth work.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-md sm:grid-cols-3">
              {featuredLogos.map((client, index) => (
                <LogoTile key={client.logo} client={client} index={index} featured />
              ))}
            </div>
          </Reveal>
        </div>

        {remainingLogos.length ? (
          <div className="mt-md grid grid-cols-2 gap-md sm:grid-cols-3 lg:grid-cols-6">
            {remainingLogos.map((client, index) => (
              <Reveal key={client.logo} delay={(index % 6) * 0.04}>
                <LogoTile client={client} index={index + featuredLogos.length} />
              </Reveal>
            ))}
          </div>
        ) : null}
      </Section>

      <Section className="bg-surface">
        <div className="mb-xl flex flex-col justify-between gap-md lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                Work patterns
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 max-w-3xl text-h1 text-balance text-on-surface">
                What clients usually ask us to make better.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-sm rounded-full bg-primary px-lg py-md text-label-sm font-semibold text-white shadow-low transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-high"
            >
              Start a project
              <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-md md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-low transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-med">
                <div className="media-reveal aspect-[4/3] overflow-hidden">
                  <img
                    src={study.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-lg">
                  <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                    {study.tag}
                  </p>
                  <h3 className="mt-sm text-h3 text-on-surface">{study.title}</h3>
                  <p className="mt-2 flex-1 text-body-md text-on-surface-variant">
                    {study.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <SiteCta title="Ready to build something your clients remember?" />
    </>
  );
}

function LogoTile({ client, index, featured = false }) {
  return (
    <div
      className={[
        'group flex items-center justify-center border p-md shadow-low transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-med',
        featured ? 'h-28 rounded-2xl' : 'h-24 rounded-xl',
        logoTints[index % logoTints.length],
      ].join(' ')}
    >
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        loading="lazy"
        className="max-h-14 w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
