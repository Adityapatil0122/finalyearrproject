import { ArrowRight, ExternalLink } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SiteCta from '@/components/ui/SiteCta';
import ColorIcon from '@/components/ui/ColorIcon';
import VisualHero from '@/components/ui/VisualHero';
import { products } from '@/data/products';

const previewStats = [
  ['Seats', '84%'],
  ['Fees', '72k'],
  ['Renewals', '24'],
];

const focusCardVisuals = [
  { icon: 'public', color: 'blue' },
  { icon: 'groups', color: 'rose' },
  { icon: 'integration_instructions', color: 'emerald' },
  { icon: 'verified_user', color: 'amber' },
];

export default function Products() {
  useSEO({
    title: 'Products | Live Digital Products - Finlec Technologies',
    description:
      'Explore live products by Finlec Technologies including ITROOTS LMS, ITROOTS CMS website, WhatsApp Business Suite, Insurance Majha, Quick Print Technology, and Study Room Management App.',
    path: '/products',
    keywords: [
      'Finlec products',
      'ITROOTS LMS',
      'ITROOTS CMS website',
      'WhatsApp Business Suite',
      'Insurance Majha',
      'Quick Print Technology',
      'study room management app',
      'Abhyasika software',
      'study hall management',
      'seat management app',
      'fee management app',
    ],
  });

  return (
    <>
      <VisualHero
        eyebrow="Product platform"
        title={products.featured.name}
        description="A simple dashboard for study halls to manage students, seats, fees, renewals, and reminders in one place."
        mediaSlot={<ProductPreview />}
      >
        <Button
          to="/contact"
          size="lg"
          variant="white"
          magnetic
          iconRight={<ArrowRight size={18} />}
        >
          Plan the app
        </Button>
        <Button
          href="#live-products"
          size="lg"
          variant="ghost"
          className="border border-white/28 text-white hover:bg-white/12"
        >
          View products
        </Button>
      </VisualHero>

      <Section id="live-products" className="bg-surface">
        <div className="mb-xl flex flex-col justify-between gap-lg lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Reveal>
              <p className="section-eyebrow">
                Live products
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-h1 text-balance">
                Product platforms already out in the world.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-md text-body-md text-on-surface-variant lg:text-right">
              Each product card links directly to the live platform or public website.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-lg md:grid-cols-2 xl:grid-cols-3">
          {products.live.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.06}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="product-focus" className="bg-surface">
        <div className="grid gap-xl lg:grid-cols-[0.58fr_minmax(0,1fr)] lg:items-stretch">
          <div className="flex flex-col justify-center border-outline-variant lg:border-r lg:border-dashed lg:pr-2xl">
            <Reveal>
              <p className="section-eyebrow">
                Product mindset
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-md max-w-xl text-h1 text-balance">
                We are a startup, but we build like a product company.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-md max-w-xl text-body-lg leading-relaxed text-on-surface-variant">
                {products.focusOverview}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-lg md:grid-cols-2 lg:pl-lg">
            {products.focusPoints.map((point, index) => {
              const visual = focusCardVisuals[index % focusCardVisuals.length];

              return (
                <Reveal key={point.title} delay={0.16 + index * 0.06}>
                  <article className="interactive-surface surface-lift group flex h-full min-h-[13.25rem] flex-col items-center justify-center rounded-2xl border border-outline-variant bg-surface-container-lowest px-lg py-lg text-center shadow-low">
                    <ColorIcon
                      name={visual.icon}
                      color={visual.color}
                      size={24}
                      boxSize="h-14 w-14"
                      radius="rounded-2xl"
                      strokeWidth={1.75}
                    />
                    <h3 className="mt-md text-h3 text-on-surface">{point.title}</h3>
                    <p className="mt-sm max-w-sm text-body-md leading-relaxed text-on-surface-variant">
                      {point.desc}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <SiteCta
        title="Want this for your study hall?"
        description="Tell us how you manage admissions, seats, and fees today. We will map a simple app flow."
        buttonLabel="Plan my app"
      />
    </>
  );
}

function ProductCard({ product }) {
  return (
    <article
      id={product.id}
      className="interactive-surface surface-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest shadow-low"
    >
      <a
        href={product.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${product.title}`}
        className="block"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
          <img
            src={product.image}
            alt={`${product.title} product preview`}
            className={[
              'h-full w-full transition-transform duration-500 group-hover:scale-105',
              product.imageFit === 'contain' ? 'object-contain p-xl' : 'object-cover',
            ].join(' ')}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-label-sm font-bold text-primary shadow-low backdrop-blur">
            <ColorIcon name={product.icon} color={product.color || 'blue'} size={15} boxSize="h-6 w-6" radius="rounded-lg" />
            {product.category}
          </span>
        </div>
      </a>

      <div className="flex flex-1 flex-col p-lg">
        <div className="flex items-start justify-between gap-md">
          <h3 className="text-h3 text-on-surface">{product.title}</h3>
          <a
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-outline-variant text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
            aria-label={`Visit ${product.title}`}
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <p className="mt-sm text-body-md text-on-surface-variant">{product.desc}</p>

        <div className="mt-md flex flex-wrap gap-2">
          {product.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-outline-variant bg-surface px-3 py-1 text-label-sm font-semibold text-on-surface-variant"
            >
              {highlight}
            </span>
          ))}
        </div>

        <a
          href={product.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-2 pt-lg text-label-md font-bold text-primary transition-colors hover:text-primary-700"
        >
          {product.ctaLabel || 'View live product'}
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}

function ProductPreview() {
  return (
    <div className="product-dashboard-shell interactive-surface relative mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl border border-white/20 bg-white/90 p-1.5 shadow-high backdrop-blur-md sm:p-sm">
      <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-primary/[0.12] blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-outline-variant bg-white">
        <div className="flex items-center justify-between gap-2 border-b border-outline-variant bg-surface-container-low px-sm py-sm sm:px-md">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-tertiary/70" />
            <span className="h-3 w-3 rounded-full bg-primary/40" />
            <span className="h-3 w-3 rounded-full bg-secondary/70" />
          </div>
          <p className="section-eyebrow-sm truncate text-[0.66rem] text-on-surface-variant sm:text-[0.72rem]">
            Study Room OS
          </p>
        </div>

        <div className="p-sm sm:p-md md:p-lg">
          <div className="mb-md flex flex-col justify-between gap-sm sm:flex-row sm:items-center">
            <div>
              <p className="section-eyebrow-sm">
                Today
              </p>
              <h3 className="text-h3 text-on-surface">Clean admin view</h3>
            </div>
            <span className="w-fit rounded-full bg-secondary/10 px-3 py-1 text-label-sm font-semibold text-secondary">
              Live overview
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-sm">
            {previewStats.map(([label, value]) => (
              <div key={label} className="rounded-xl border border-outline-variant bg-surface p-2 sm:rounded-2xl sm:p-sm">
                <p className="section-eyebrow-sm truncate text-[0.58rem] text-on-surface-variant sm:text-[0.72rem]">
                  {label}
                </p>
                <p className="mt-1 text-[1.22rem] font-semibold leading-none text-on-surface sm:text-h3">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-md overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest p-sm sm:p-md">
            <div className="flex items-center justify-between gap-2">
              <p className="text-body-md font-semibold text-on-surface">Daily operations</p>
              <span className="shrink-0 text-label-sm font-semibold text-primary">Organized</span>
            </div>
            <div className="mt-md h-3 overflow-hidden rounded-full bg-primary/10">
              <span className="block h-full w-[84%] rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
