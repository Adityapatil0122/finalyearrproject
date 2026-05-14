import { useStickyNav } from '@/hooks/useStickyNav';
import { useSEO } from '@/hooks/useSEO';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SiteCta from '@/components/ui/SiteCta';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export default function Services() {
  useSEO({
    title: 'Services — Finlec Technologies',
    description:
      'Web, mobile, AI, marketing, design, and conversational commerce — six disciplines, one accountable team.',
  });
  const active = useStickyNav(services.map((s) => s.id));

  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Services that compound — strategy, design, build, and growth."
        description="Every engagement starts with a written hypothesis and ends with measured outcomes. No fluff, no vanity slides."
      />
      <Section className="bg-surface !pt-md">
        <div className="grid lg:grid-cols-[260px_1fr] gap-2xl">
          <aside className="hidden lg:block">
            <nav className="sticky top-28 space-y-1">
              <p className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">
                Disciplines
              </p>
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
                className="scroll-mt-28 grid md:grid-cols-2 gap-xl items-center"
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
                    <span className="material-symbols-outlined text-primary text-[40px]">
                      {s.icon}
                    </span>
                    <h2 className="text-h1 mt-2 mb-md text-balance">{s.title}</h2>
                    <p className="text-body-lg text-on-surface-variant">{s.summary}</p>
                    <ul className="mt-md space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px] mt-1">
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
