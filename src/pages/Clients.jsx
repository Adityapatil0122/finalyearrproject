import { Link } from 'react-router-dom';
import {
  ArrowRight,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import VisualHero from '@/components/ui/VisualHero';
import SiteCta from '@/components/ui/SiteCta';
import { caseStudies, clientLogos } from '@/data/clients';

const clientsHeroImage = '/clients-hero-team.jpg';

const logoTints = [
  'bg-primary/8 border-primary/15',
  'bg-secondary/8 border-secondary/15',
  'bg-white border-primary/10',
  'bg-white border-secondary/20',
  'bg-surface-container-lowest border-outline-variant',
];

export default function Clients() {
  useSEO({
    title: 'Clients | Brands Working With Finlec Technologies',
    description:
      'See brands and businesses that work with Finlec Technologies for websites, apps, AI tools, design, and digital marketing.',
    path: '/clients',
    keywords: [
      'Finlec clients',
      'website development clients',
      'app development clients',
      'AI solutions clients',
      'digital marketing clients',
    ],
  });

  const featuredLogos = clientLogos.slice(0, 9);
  const remainingLogos = clientLogos.slice(9);

  return (
    <>
      <VisualHero
        eyebrow="Client network"
        title="Businesses that trust us with digital products."
        description="We work with local businesses, product teams, service brands, and operators that need cleaner websites, easier user flows, better automation, and practical digital systems."
        media={{
          src: clientsHeroImage,
          alt: 'Business team reviewing a digital project together',
          eyebrow: 'Client work',
          title: 'Websites, apps, AI workflows, and growth systems for real teams.',
          objectPosition: 'center',
        }}
      >
        <Link
          to="/contact"
          className="btn-sheen inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[0.95rem] font-semibold text-primary shadow-high transition-all hover:bg-surface-container-low"
        >
          Start a project
          <ArrowRight size={18} />
        </Link>
        <a
          href="#brand-wall"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 px-6 py-3 text-[0.95rem] font-semibold text-white transition-all hover:bg-white/10"
        >
          View clients
        </a>
      </VisualHero>

      <Section id="brand-wall" className="bg-surface">
        <div className="grid gap-xl lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <Reveal>
              <p className="section-eyebrow">
                Brand wall
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-h1 text-balance text-on-surface">
                Teams we have worked with.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-md text-body-lg text-on-surface-variant">
                These businesses trusted Finlec with websites, apps, automation,
                design, and growth work.
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
              <p className="section-eyebrow">
                Work patterns
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 max-w-3xl text-h1 text-balance text-on-surface">
                What clients usually ask us to improve.
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
                  <p className="section-eyebrow-sm">
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

      <SiteCta title="Ready to build something useful for your clients?" />
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
