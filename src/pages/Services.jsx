import { useStickyNav } from '@/hooks/useStickyNav';
import { useSEO } from '@/hooks/useSEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SiteCta from '@/components/ui/SiteCta';
import Icon from '@/components/ui/Icon';
import VisualHero from '@/components/ui/VisualHero';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

const serviceHeroImage =
  '/services-hero-indian.jpg';

export default function Services() {
  useSEO({
    title: 'Services | Website, App, AI, Marketing and Design - Finlec Technologies',
    description:
      'Explore website development, app development, AI solutions, WhatsApp API, UI/UX design, graphics, and digital marketing services from Finlec Technologies.',
    path: '/services',
    keywords: [
      'website development services',
      'mobile app development',
      'digital marketing services',
      'WhatsApp Business API',
      'UI UX design',
    ],
  });
  const active = useStickyNav(services.map((s) => s.id));

  return (
    <>
      <VisualHero
        eyebrow="What we do"
        title="Build the digital work your business needs."
        description="Websites, apps, AI tools, WhatsApp automation, marketing, and design support planned around one clear goal."
        media={{
          src: serviceHeroImage,
          alt: 'Indian professionals collaborating on a digital project around a laptop',
          eyebrow: 'Strategy to launch',
        }}
      >
        {services.slice(0, 4).map((service) => (
          <a
            key={service.id}
            href={`#${service.id}`}
            className="inline-flex items-center justify-center rounded-full border border-white/24 bg-white/10 px-md py-sm text-label-sm font-semibold text-white shadow-low transition-all hover:bg-white/16"
          >
            {service.title}
          </a>
        ))}
      </VisualHero>

      <Section className="bg-surface !pt-md">
        <div className="grid gap-2xl lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-28 space-y-1">

              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={[
                    'interactive-surface block rounded-xl px-4 py-3 text-body-md transition-all',
                    active === s.id
                      ? 'bg-primary text-white shadow-low'
                      : 'text-on-surface-variant hover:bg-surface-container',
                  ].join(' ')}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-2xl">
            {services.map((s, i) => (
              <article
                id={s.id}
                key={s.id}
                className="grid scroll-mt-28 items-center gap-xl md:grid-cols-2"
              >
                <Reveal className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="interactive-surface media-reveal relative aspect-[4/3] rounded-3xl border border-outline-variant shadow-low">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div>
                    <Icon name={s.icon} size={40} className="text-primary" />
                    <h2 className="mb-md mt-2 text-h1 text-balance">{s.title}</h2>
                    <p className="text-body-lg text-on-surface-variant">{s.summary}</p>
                    <ul className="mt-md space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Icon name="check_circle" size={20} className="mt-1 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-md flex flex-wrap gap-2">
                      {s.tech.map((t) => (
                        <span
                          key={t}
                          className="tech-tag-chip rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1 text-label-sm font-medium text-on-surface-variant transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-lg">
                      <Button to={s.path} magnetic iconRight={<ArrowRight size={18} />}>
                        Talk about {s.title.toLowerCase()}
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <SiteCta title="Ready to plan your next digital project?" />
    </>
  );
}
