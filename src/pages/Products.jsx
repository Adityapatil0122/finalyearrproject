import { ArrowRight } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import SiteCta from '@/components/ui/SiteCta';
import { products } from '@/data/products';

export default function Products() {
  useSEO({
    title: 'Products - Finlec Technologies',
    description:
      'Product capabilities, AI workflows, dashboards, and automation systems from Finlec Technologies.',
  });

  return (
    <>
      <PageHero
        eyebrow="Product lab"
        title="Study hall operations, productized."
        description="The live Finlec catalog includes a coming-soon Study Room Management App, plus the AI, dashboard, and automation systems we can shape around real business workflows."
      />

      <Section id="study-room" className="bg-surface !pt-md">
        <div className="grid lg:grid-cols-2 gap-2xl items-center">
          <Reveal>
            <div>
              <span className="text-label-sm uppercase tracking-widest text-primary font-semibold">
                Product capability
              </span>
              <h2 className="mt-2 text-h1 text-balance">{products.featured.name}</h2>
              <p className="mt-md text-body-lg text-on-surface-variant">
                {products.featured.tagline}
              </p>
              <p className="mt-md text-body-md text-on-surface-variant">
                {products.featured.description}
              </p>
              <ul className="mt-md space-y-2">
                {products.featured.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-1">
                      check_circle
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-lg flex flex-wrap gap-2">
                <Button to="/contact" magnetic iconRight={<ArrowRight size={18} />}>
                  Scope a product build
                </Button>
                <Button variant="outline" to="/contact">
                  Discuss automation
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="interactive-surface media-reveal relative aspect-[4/5] rounded-3xl border border-outline-variant shadow-high">
              <img
                src={products.featured.image}
                alt={products.featured.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed/40 to-transparent" />
              <GlassCard className="absolute bottom-4 left-4 right-4 p-md">
                <p className="text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Focus areas
                </p>
                <p className="text-h3 font-bold">AI, dashboards, APIs</p>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface-container-low">
        <Reveal>
          <h2 className="text-h1 mb-xl text-balance">Useful product systems we can build.</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {products.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group interactive-surface surface-lift h-full rounded-2xl bg-surface-container-lowest border border-outline-variant p-xl">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-md transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                  <span className="material-symbols-outlined">{f.icon}</span>
                </div>
                <h3 className="text-h3 mb-2">{f.title}</h3>
                <p className="text-body-md text-on-surface-variant">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="max-w-2xl mb-xl">
          <Reveal>
            <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Product tracks
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">Possible systems to turn into owned products.</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {products.roadmap.map((r, i) => (
            <Reveal
              key={r.id}
              delay={i * 0.08}
              className={r.large ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <div
                className={[
                  'roadmap-card group interactive-surface relative h-full rounded-3xl overflow-hidden border border-outline-variant bg-surface-container-lowest p-xl shadow-low transition-all duration-300',
                  r.large ? 'min-h-[378px]' : 'min-h-[198px]',
                ].join(' ')}
                id={r.id}
              >
                {r.image ? (
                  <>
                    <img
                      src={r.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/70 to-transparent" />
                  </>
                ) : null}
                <div className="relative">
                  <div className="roadmap-icon grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-md">
                    <span className="material-symbols-outlined">{r.icon}</span>
                  </div>
                  <h3 className="text-h2 mb-2">{r.title}</h3>
                  <p className="text-body-md text-on-surface-variant max-w-sm">
                    {r.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <SiteCta title="Ready to scope the product system your business needs?" />
    </>
  );
}
