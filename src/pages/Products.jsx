import { ArrowRight, Sparkles } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SiteCta from '@/components/ui/SiteCta';
import { products } from '@/data/products';

const dashboardSeats = [
  { id: 'A1', state: 'active' },
  { id: 'A2', state: 'active' },
  { id: 'A3', state: 'due' },
  { id: 'A4', state: 'empty' },
  { id: 'B1', state: 'active' },
  { id: 'B2', state: 'empty' },
  { id: 'B3', state: 'active' },
  { id: 'B4', state: 'due' },
];

const seatStateClasses = {
  active: 'bg-primary text-white shadow-primary/20',
  due: 'bg-tertiary/[0.12] text-tertiary ring-1 ring-tertiary/20',
  empty: 'bg-surface-container text-on-surface-variant ring-1 ring-outline-variant',
};

export default function Products() {
  useSEO({
    title: 'Products | Study Room Management App - Finlec Technologies',
    description:
      'Study Room Management App by Finlec Technologies helps Abhyasika and study halls manage students, seats, fees, renewals, and reminders.',
    path: '/products',
    keywords: [
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
        <div className="absolute inset-0 signal-grid opacity-60" aria-hidden />
        <div className="container-page relative grid items-center gap-2xl py-xl md:py-[96px] lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface-container-lowest px-4 py-1.5 text-label-sm font-semibold text-primary shadow-low">
                <Sparkles size={15} />
                Product
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-md max-w-3xl text-display text-balance text-on-surface">
                {products.featured.name}
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-md max-w-xl text-body-lg text-on-surface-variant">
                A simple admin system for students, seats, fees, renewals, and daily
                study hall operations.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-xl flex flex-col gap-sm sm:flex-row sm:flex-wrap">
                <Button to="/contact" size="lg" magnetic iconRight={<ArrowRight size={18} />}>
                  Plan the app
                </Button>
                <Button href="#modules" size="lg" variant="outline">
                  View modules
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ProductPreview />
          </Reveal>
        </div>
      </section>

      <Section id="modules" className="bg-surface">
        <div className="mb-xl max-w-2xl">
          <Reveal>
            <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
              What it handles
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 text-h1 text-balance">
              Core modules for daily study hall work.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {products.features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <article className="product-module-card group interactive-surface surface-lift h-full rounded-3xl border border-outline-variant bg-surface-container-lowest p-xl shadow-low">
                <span className="mb-md grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                  <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
                </span>
                <h3 className="text-h3 text-on-surface">{feature.title}</h3>
                <p className="mt-sm text-body-md text-on-surface-variant">{feature.desc}</p>
              </article>
            </Reveal>
          ))}
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

function ProductPreview() {
  return (
    <div className="product-dashboard-shell interactive-surface relative mx-auto w-full max-w-[620px] overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest p-sm shadow-high">
      <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-primary/[0.12] blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-outline-variant bg-white">
        <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-md py-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-tertiary/70" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-secondary/70" />
          </div>
          <p className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">
            Study Room OS
          </p>
        </div>

        <div className="p-md md:p-lg">
          <div className="mb-md flex flex-col justify-between gap-sm sm:flex-row sm:items-center">
            <div>
              <p className="text-label-sm font-bold uppercase tracking-widest text-primary">
                Today
              </p>
              <h3 className="text-h3 text-on-surface">Admin snapshot</h3>
            </div>
            <span className="w-fit rounded-full bg-secondary/10 px-3 py-1 text-label-sm font-semibold text-secondary">
              24 renewals due
            </span>
          </div>

          <div className="grid grid-cols-3 gap-sm">
            {[
              ['Seats', '84%'],
              ['Fees', '72k'],
              ['Alerts', '18'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-outline-variant bg-surface p-sm">
                <p className="text-[0.72rem] font-bold uppercase tracking-widest text-on-surface-variant">
                  {label}
                </p>
                <p className="mt-1 text-h3 leading-none text-on-surface">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-md rounded-3xl border border-outline-variant bg-surface-container-lowest p-md">
            <div className="mb-sm flex items-center justify-between">
              <p className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">
                Seat map
              </p>
              <span className="text-[0.72rem] font-semibold text-primary">2 due</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {dashboardSeats.map((seat) => (
                <span
                  key={seat.id}
                  className={[
                    'product-seat grid h-10 place-items-center rounded-xl text-[0.72rem] font-bold',
                    seatStateClasses[seat.state],
                  ].join(' ')}
                >
                  {seat.id}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
