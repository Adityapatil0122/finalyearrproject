import { ArrowRight, ExternalLink } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SiteCta from '@/components/ui/SiteCta';
import Icon from '@/components/ui/Icon';
import { products } from '@/data/products';

const productHeroImage =
  'https://images.pexels.com/photos/5940705/pexels-photo-5940705.jpeg?auto=compress&cs=tinysrgb&w=1600';

const previewStats = [
  ['Seats', '84%'],
  ['Fees', '72k'],
  ['Renewals', '24'],
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
      <section className="relative overflow-hidden border-b border-outline-variant bg-surface-container-low">
        <img
          src={productHeroImage}
          alt="Students studying with laptops in a modern library"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/82 to-primary/22" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-55" aria-hidden />

        <div className="container-page relative grid min-h-[calc(100svh-82px)] items-center gap-2xl py-2xl lg:grid-cols-[0.82fr_1.18fr]">
          <div className="max-w-3xl text-white">
            <Reveal>
              <p className="section-eyebrow section-eyebrow-on-dark">Product platform</p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-md text-display text-balance">
                {products.featured.name}
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-md max-w-xl text-body-lg text-white/84">
                A simple dashboard for study halls to manage students, seats, fees,
                renewals, and reminders in one place.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-xl flex flex-col gap-sm sm:flex-row sm:flex-wrap">
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
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ProductPreview />
          </Reveal>
        </div>
      </section>

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
        <div className="grid gap-2xl lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="max-w-2xl">
            <Reveal>
              <p className="section-eyebrow">
                Product mindset
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-h1 text-balance">
                We are a startup, but we build like a product company.
              </h2>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <p className="text-body-lg leading-relaxed text-on-surface-variant">
                {products.focusOverview}
              </p>
            </Reveal>

            <div className="mt-xl grid gap-lg sm:grid-cols-2">
              {products.focusPoints.map((point, index) => (
                <Reveal key={point.title} delay={0.16 + index * 0.06}>
                  <div className="flex gap-md">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <div>
                      <h3 className="text-lg font-semibold leading-snug text-on-surface">{point.title}</h3>
                      <p className="mt-xs text-body-md leading-relaxed text-on-surface-variant">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
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
            <Icon name={product.icon} size={18} />
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
    <div className="product-dashboard-shell interactive-surface relative mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl border border-white/20 bg-white/90 p-sm shadow-high backdrop-blur-md">
      <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-primary/[0.12] blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-outline-variant bg-white">
        <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-md py-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-tertiary/70" />
            <span className="h-3 w-3 rounded-full bg-primary/40" />
            <span className="h-3 w-3 rounded-full bg-secondary/70" />
          </div>
          <p className="section-eyebrow-sm text-on-surface-variant">
            Study Room OS
          </p>
        </div>

        <div className="p-md md:p-lg">
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

          <div className="grid grid-cols-3 gap-sm">
            {previewStats.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-outline-variant bg-surface p-sm">
                <p className="section-eyebrow-sm text-[0.72rem] text-on-surface-variant">
                  {label}
                </p>
                <p className="mt-1 text-h3 leading-none text-on-surface">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-md overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest p-md">
            <div className="flex items-center justify-between gap-md">
              <p className="text-body-md font-semibold text-on-surface">Daily operations</p>
              <span className="text-label-sm font-semibold text-primary">Organized</span>
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
