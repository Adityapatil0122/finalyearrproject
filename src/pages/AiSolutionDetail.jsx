import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import SiteCta from '@/components/ui/SiteCta';
import NotFound from '@/pages/NotFound';
import { aiSolutionPageList, aiSolutionPages } from '@/data/aiDetailPages';

export default function AiSolutionDetail() {
  const { slug } = useParams();
  const page = aiSolutionPages[slug];

  useSEO({
    title: page
      ? `${page.navLabel} | ${page.title} - Finlec Technologies`
      : 'AI Solution Not Found - Finlec Technologies',
    description: page?.description || 'AI solution page not found.',
    path: page?.path || '/ai-solutions',
    keywords: page
      ? [page.navLabel, page.category, page.title, 'Finlec Technologies AI']
      : ['AI solutions', 'Finlec Technologies'],
  });

  if (!page) {
    return <NotFound />;
  }

  return (
    <>
      <PageHero
        badge={{ icon: page.icon, label: page.category }}
        title={page.title}
        description={page.description}
        media={{
          src: page.image,
          alt: page.imageAlt,
        }}
      >
        <div className="flex flex-col gap-sm sm:flex-row sm:flex-wrap">
          <Button
            to="/contact"
            size="lg"
            variant="white"
            magnetic
            iconRight={<ArrowRight size={18} />}
          >
            Start Your AI Journey
          </Button>
          <Button
            to="/ai-solutions"
            size="lg"
            variant="ghost"
            className="border border-white/28 text-white hover:bg-white/12"
            iconLeft={<ArrowLeft size={18} />}
          >
            All AI Solutions
          </Button>
        </div>
      </PageHero>

      {page.statCards?.length ? (
        <StatsSection stats={page.statCards} currentSlug={page.slug} />
      ) : null}
      {page.capabilitySection ? (
        page.slug === 'custom-solutions' ||
        page.slug === 'integration' ||
        page.slug === 'analytics' ? (
          <CardGrid section={page.capabilitySection} />
        ) : (
          <DetailListSection section={page.capabilitySection} />
        )
      ) : null}
      {page.secondarySection ? (
        page.slug === 'custom-solutions' ? (
          <CardGrid section={page.secondarySection} className="bg-surface-container-low" />
        ) : (
          <DetailListSection section={page.secondarySection} className="bg-surface-container-low" />
        )
      ) : null}
      {page.processSection ? <ProcessSection section={page.processSection} /> : null}
      {page.technicalSection ? (
        page.slug === 'custom-solutions' || page.slug === 'integration' ? (
          <CardGrid section={page.technicalSection} className="bg-surface-container-low" />
        ) : (
          <DetailListSection section={page.technicalSection} className="bg-surface-container-low" />
        )
      ) : null}
      {page.industrySection ? (
        page.slug === 'chatbots' ||
        page.slug === 'custom-solutions' ||
        page.slug === 'analytics' ? (
          <CardGrid section={page.industrySection} />
        ) : (
          <DetailListSection section={page.industrySection} />
        )
      ) : null}
      {page.benefitSection ? <BenefitsSection section={page.benefitSection} /> : null}
      {page.faq?.length ? <FaqSection items={page.faq} /> : null}

      <RelatedSolutions currentSlug={page.slug} />
      <SiteCta
        title={page.ctaTitle}
        description={page.ctaDescription}
        buttonLabel="Start Your AI Journey"
      />
    </>
  );
}

function SectionIntro({ eyebrow, title, description, className = '', align = 'center' }) {
  return (
    <div
      className={[
        align === 'left' ? 'text-left' : 'mx-auto text-center',
        'max-w-3xl',
        className,
      ].join(' ')}
    >
      {eyebrow ? (
        <Reveal>
          <p className="section-eyebrow mb-2">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2 className="text-h1 text-balance">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.14}>
          <p className="mt-md text-body-lg text-on-surface-variant">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

function StatsSection({ stats, currentSlug }) {
  const centeredStats = currentSlug === 'integration' || currentSlug === 'analytics';
  const gridClass = [
    'grid grid-cols-1 divide-y divide-outline-variant sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4',
    centeredStats ? 'lg:mx-auto lg:max-w-5xl' : 'xl:grid-cols-6',
  ].join(' ');

  return (
    <Section className="border-y border-outline-variant bg-surface-container-low !py-0">
      <div className={gridClass}>
        {stats.map((stat, index) => (
          <Reveal key={`${stat.value}-${stat.label}`} delay={index * 0.04}>
            <div className="h-full px-md py-lg text-center">
              <p className="text-h2 text-primary">{stat.value}</p>
              <h2 className="mt-2 text-label-md font-bold text-on-surface">
                {stat.label}
              </h2>
              <p className="mx-auto mt-1 max-w-[13rem] text-body-sm text-on-surface-variant">
                {stat.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function DetailListSection({ section, className = 'bg-surface' }) {
  return (
    <Section className={className}>
      <div className="grid gap-xl lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionIntro {...section} align="left" />
        </div>
        <div className="border-y border-outline-variant">
          {section.items.map((item, index) => (
            <Reveal
              as="article"
              key={item.title}
              delay={index * 0.05}
              className="group grid gap-md border-b border-outline-variant py-lg last:border-b-0 md:grid-cols-[auto_minmax(0,1fr)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon name={item.icon || 'auto_awesome'} size={24} />
              </div>
              <div>
                <h3 className="text-h3 text-on-surface">{item.title}</h3>
                <p className="mt-sm max-w-3xl text-body-md text-on-surface-variant">
                  {item.description}
                </p>
                {item.points?.length ? (
                  <ul className="mt-md grid gap-2 sm:grid-cols-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-body-sm">
                        <Icon
                          name="check_circle"
                          size={18}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CardGrid({ section, className = 'bg-surface' }) {
  return (
    <Section className={className}>
      <SectionIntro {...section} className="mb-xl" />
      <div className="grid grid-cols-1 gap-md md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <article className="interactive-surface surface-lift flex h-full flex-col rounded-3xl border border-outline-variant bg-surface-container-lowest p-lg shadow-low">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Icon name={item.icon || 'auto_awesome'} size={28} />
              </div>
              <h3 className="mt-md text-h3 text-on-surface">{item.title}</h3>
              <p className="mt-sm text-body-md text-on-surface-variant">{item.description}</p>
              {item.points?.length ? (
                <ul className="mt-md space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-body-sm">
                      <Icon
                        name="check_circle"
                        size={18}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProcessSection({ section }) {
  return (
    <Section className="bg-surface">
      <div className="grid gap-xl lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionIntro {...section} align="left" />
        </div>
        <ol className="border-l border-outline-variant">
          {section.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.05}
              className="relative pb-xl pl-lg last:pb-0"
            >
              <div className="absolute -left-[1.35rem] top-0 grid h-11 w-11 place-items-center rounded-full border border-primary/20 bg-surface text-label-sm font-bold text-primary shadow-low">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-h3 text-on-surface">{step.title}</h3>
              <p className="mt-sm max-w-2xl text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function BenefitsSection({ section }) {
  return (
    <Section className="bg-surface-container-low">
      <div className="grid gap-xl lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionIntro {...section} align="left" />
        </div>
        <div className="grid border-y border-outline-variant md:grid-cols-2 md:divide-x md:divide-outline-variant">
          {section.items.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.04}
              className="flex h-full items-start gap-md border-b border-outline-variant p-md last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <Icon name="check_circle" size={22} className="mt-1 shrink-0 text-primary" />
              <p className="font-semibold text-on-surface">{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FaqSection({ items }) {
  return (
    <Section className="bg-surface-container-low">
      <SectionIntro
        eyebrow="Frequently Asked Questions"
        title="Answers before we begin."
        description="Here are answers to common questions about this AI solution."
        className="mb-xl"
      />
      <div className="mx-auto max-w-4xl border-y border-outline-variant">
        {items.map((item, index) => (
          <Reveal
            as="details"
            key={item.question}
            delay={index * 0.04}
            className="group border-b border-outline-variant py-md last:border-b-0"
          >
              <summary className="cursor-pointer list-none text-lg font-bold text-on-surface">
                <span className="flex items-center justify-between gap-md">
                  {item.question}
                  <Icon
                    name="arrow_forward"
                    size={18}
                    className="shrink-0 text-primary transition-transform group-open:rotate-90"
                  />
                </span>
              </summary>
              <p className="mt-md text-body-md text-on-surface-variant">{item.answer}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function RelatedSolutions({ currentSlug }) {
  const related = aiSolutionPageList.filter((page) => page.slug !== currentSlug);

  return (
    <Section className="bg-surface">
      <div className="mb-lg flex flex-col justify-between gap-md md:flex-row md:items-end">
        <div>
          <p className="section-eyebrow mb-2">More AI pages</p>
          <h2 className="text-h2 text-balance">Explore the rest of the AI stack.</h2>
        </div>
        <Link
          to="/ai-solutions"
          className="inline-flex w-fit items-center gap-2 text-label-md font-bold text-primary"
        >
          AI Solutions overview
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid border-y border-outline-variant md:grid-cols-3 md:divide-x md:divide-outline-variant">
        {related.map((page) => (
          <Link
            key={page.slug}
            to={page.path}
            className="group p-md transition-colors hover:bg-primary/5"
          >
            <div className="flex items-start justify-between gap-md">
              <div>
                <Icon name={page.icon} size={28} className="text-primary" />
                <h3 className="mt-sm text-lg font-bold text-on-surface">{page.navLabel}</h3>
                <p className="mt-1 text-body-sm text-on-surface-variant">{page.title}</p>
              </div>
              <ArrowRight
                size={18}
                className="mt-1 shrink-0 text-primary transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
