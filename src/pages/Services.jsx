import { useStickyNav } from '@/hooks/useStickyNav';
import { useSEO } from '@/hooks/useSEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SiteCta from '@/components/ui/SiteCta';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

const serviceHeroImage =
  'https://images.pexels.com/photos/4308091/pexels-photo-4308091.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Services() {
  useSEO({
    title: 'Services - Finlec Technologies',
    description:
      'Web, mobile, AI, marketing, design, and conversational commerce - six disciplines, one accountable team.',
  });
  const active = useStickyNav(services.map((s) => s.id));

  return (
    <>
      <section className="relative overflow-hidden border-b border-outline-variant bg-surface-container-low">
        <div className="absolute inset-0 signal-grid opacity-60" aria-hidden />
        <div className="container-page relative grid items-center gap-xl py-xl md:py-[84px] lg:grid-cols-[1fr_0.78fr]">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                What we do
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-h1 text-balance text-on-surface md:text-[3.35rem] md:leading-[1.04]">
                Build the digital parts your business depends on.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-md text-body-lg text-on-surface-variant">
                Websites, apps, AI workflows, WhatsApp automation, marketing, and
                design support arranged around one clear delivery plan.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-xl flex flex-wrap gap-sm">
                {services.slice(0, 4).map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="rounded-full border border-outline-variant bg-surface-container-lowest px-md py-sm text-label-sm font-semibold text-on-surface shadow-low transition-all hover:border-primary hover:text-primary"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="media-reveal relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest shadow-high lg:ml-auto">
              <img
                src={serviceHeroImage}
                alt="Team collaborating on a digital project around a laptop"
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
              <div className="absolute bottom-md left-md rounded-2xl border border-white/20 bg-white/90 px-md py-sm shadow-high backdrop-blur-md">
                <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                  Strategy to launch
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
                    <span className="material-symbols-outlined text-[40px] text-primary">
                      {s.icon}
                    </span>
                    <h2 className="mb-md mt-2 text-h1 text-balance">{s.title}</h2>
                    <p className="text-body-lg text-on-surface-variant">{s.summary}</p>
                    <ul className="mt-md space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="material-symbols-outlined mt-1 text-[20px] text-primary">
                            check_circle
                          </span>
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
                      <Button to="/contact" magnetic iconRight={<ArrowRight size={18} />}>
                        Brief us on {s.title.toLowerCase()}
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <SiteCta title="Ready to turn a service need into a shipped system?" />
    </>
  );
}
