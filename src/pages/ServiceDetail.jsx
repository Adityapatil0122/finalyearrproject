import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  MessageCircle,
  Palette,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { serviceDetailBySlug } from '@/data/serviceDetails';
import { services } from '@/data/services';
import { useSEO } from '@/hooks/useSEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import ColorIcon from '@/components/ui/ColorIcon';
import SiteCta from '@/components/ui/SiteCta';
import TechPill from '@/components/ui/TechPill';
import NotFound from '@/pages/NotFound';

export default function ServiceDetail() {
  const { slug } = useParams();
  const page = serviceDetailBySlug[slug];

  if (!page) return <NotFound />;

  return <ServiceDetailContent page={page} />;
}

function ServiceDetailContent({ page }) {
  const relatedServices = services.filter((service) => service.id !== page.serviceId).slice(0, 3);

  useSEO({
    title: page.seo.title,
    description: page.seo.description,
    path: page.path,
    keywords: page.seo.keywords,
    image: page.image,
  });

  return (
    <>
      <ServiceHero page={page} />
      <ServiceStatsStrip
        metrics={page.heroVisual?.metrics}
        chips={page.heroVisual?.chips}
        fallbackItems={page.highlights}
      />
      <OfferSection page={page} />
      {page.showcase ? <ShowcaseSection showcase={page.showcase} /> : null}
      <ProcessSection page={page} />
      <FaqSection faqs={page.faqs} title={page.navLabel} />
      <RelatedServices services={relatedServices} />
      <SiteCta
        title={page.cta.title}
        description={page.cta.description}
        buttonLabel={page.cta.buttonLabel}
      />
    </>
  );
}

function ServiceHero({ page }) {
  const visual = page.heroVisual || {};

  return (
    <section
      className={`service-detail-hero service-hero-${visual.type || 'website'} relative overflow-hidden text-white`}
      style={{
        background:
          visual.background ||
          'linear-gradient(135deg, #061426 0%, #005fc6 52%, #061426 100%)',
        '--service-accent': visual.accent || '#79bbff',
        '--service-accent-2': visual.accent2 || '#ffffff',
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,8,23,0.88)_0%,rgba(2,8,23,0.38)_48%,rgba(2,8,23,0.82)_100%)]" aria-hidden />
      <div className="service-hero-mesh absolute inset-0" aria-hidden />
      <div className="container-page relative grid items-center gap-xl py-xl md:py-[96px] lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.78fr)]">
        <div className="min-w-0">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.08] px-4 py-2 text-label-sm font-semibold text-white transition-colors hover:bg-white/[0.14]"
            >
              <ArrowLeft size={16} />
              Web Services
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="section-eyebrow section-eyebrow-on-dark mt-lg">{page.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-md max-w-4xl break-words text-display text-balance [overflow-wrap:anywhere]">
              {page.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-md max-w-2xl break-words text-body-lg text-white/[0.82] [overflow-wrap:anywhere]">
              {page.description}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-lg flex flex-wrap gap-sm">
              <Button to="/contact" variant="white" size="lg" magnetic iconRight={<ArrowRight size={18} />}>
                {page.cta.buttonLabel}
              </Button>
              <Button
                to="/services"
                variant="ghost"
                className="border border-white/[0.28] text-white hover:bg-white/[0.12]"
              >
                View all services
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <ServiceHeroVisual page={page} />
        </Reveal>
      </div>
    </section>
  );
}

function ServiceStatsStrip({ metrics = [], chips = [], fallbackItems = [] }) {
  const items = metrics.length
    ? metrics.map((metric, index) => ({
        value: metric.value,
        label: metric.label,
        description: chips[index] || fallbackItems[index]?.description,
      }))
    : fallbackItems;

  if (!items.length) return null;

  const displayItems = items.slice(0, 4);
  const mobileColumnClass =
    displayItems.length === 4 ? 'grid-cols-4' : displayItems.length === 2 ? 'grid-cols-2' : 'grid-cols-3';
  const desktopColumnClass = displayItems.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3';

  return (
    <section className="service-stats-strip border-y border-outline-variant bg-[#f4f5fb]">
      <div className="container-page">
        <div className={`service-stats-grid grid ${mobileColumnClass} ${desktopColumnClass} divide-x divide-outline-variant`}>
          {displayItems.map((item, index) => {
            const hasValue = Boolean(item.value);

            return (
              <Reveal key={item.title || `${item.value}-${item.label}`} delay={index * 0.035}>
                <div className="service-stat-cell text-center">
                  <p className="service-stat-value">{hasValue ? item.value : item.title}</p>
                  <p className="service-stat-label">{hasValue ? item.label || item.title : item.description}</p>
                  {hasValue && item.description ? (
                    <p className="service-stat-copy">{item.description}</p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceHeroVisual({ page }) {
  const visual = page.heroVisual || {};

  return (
    <div className="relative mx-auto w-full min-w-0 sm:max-w-[560px]">
      <div className={`service-visual-card service-visual-card-${visual.type || 'website'}`}>
        <div className="service-visual-glow" aria-hidden />
        <div className="service-visual-header">
          <HeroStatus type={visual.type} />
        </div>
        <div className="service-visual-scene">{renderVisualScene(visual.type || 'website', visual)}</div>
      </div>
    </div>
  );
}

function HeroStatus({ type }) {
  const status = {
    app: { icon: <ShieldCheck size={18} />, title: 'Store ready', detail: 'iOS + Android' },
    marketing: { icon: <TrendingUp size={18} />, title: 'ROI loop', detail: 'Tracked daily' },
    whatsapp: { icon: <Send size={18} />, title: 'Broadcast ready', detail: 'Opt-in compliant' },
    uiux: { icon: <Sparkles size={18} />, title: 'Prototype live', detail: 'Flows tested' },
    graphics: { icon: <Palette size={18} />, title: 'Assets ready', detail: 'Print + digital' },
    website: { icon: <Code2 size={18} />, title: 'Deploy live', detail: 'itroots.co.in', href: 'https://itroots.co.in/' },
  }[type || 'website'];

  const content = (
    <>
      {status.icon}
      <span>
        <strong>{status.title}</strong>
        {status.detail ? <small>{status.detail}</small> : null}
      </span>
    </>
  );

  if (status.href) {
    return (
      <a className="service-visual-status" href={status.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <div className="service-visual-status">
      {content}
    </div>
  );
}

function renderVisualScene(type, visual) {
  if (type === 'app') return <AppVisual />;
  if (type === 'marketing') return <MarketingVisual visual={visual} />;
  if (type === 'whatsapp') return <WhatsAppVisual visual={visual} />;
  if (type === 'uiux') return <UiUxVisual visual={visual} />;
  if (type === 'graphics') return <GraphicsVisual visual={visual} />;
  return <WebsiteVisual visual={visual} />;
}

function WindowDots({ label }) {
  return (
    <div className="service-window-chrome">
      <span />
      <span />
      <span />
      <p>{label}</p>
    </div>
  );
}

function WebsiteVisual({ visual }) {
  return (
    <>
      <div className="service-scene-window service-code-panel">
        <WindowDots label={visual.sceneTitle || 'site-build.tsx'} />
        <div className="service-code-lines">
          {['const page = build()', '<Hero motion="live" />', 'await deploy({ seo: true })', 'return <Website />'].map((line, index) => (
            <p key={line}>
              <span>{index + 1}</span>
              <code>{line}</code>
            </p>
          ))}
        </div>
      </div>
      <div className="service-scene-window service-preview-panel">
        <WindowDots label="live-preview" />
        <div className="service-live-preview-shell">
          <img
            src="/itroots-preview.png"
            alt="ITRoots website homepage preview"
            className="service-live-preview-image"
            loading="eager"
          />
        </div>
      </div>
    </>
  );
}

function AppVisual() {
  return (
    <div className="service-app-showcase">
      <img
        src="/mobile-app-screens-mockup.jpg"
        alt="Three mobile app screens mockup"
        className="service-app-mockup-image"
        loading="eager"
      />
      <div className="service-mini-note">
        <Smartphone size={17} />
        New app build ready
      </div>
    </div>
  );
}

function MarketingVisual({ visual }) {
  return (
    <div className="service-scene-window service-dashboard-panel">
      <WindowDots label={visual.sceneTitle || 'growth-dashboard'} />
      <div className="service-dashboard-grid">
        <div className="service-funnel-bars">
          {['Reach', 'Engage', 'Lead', 'Sale'].map((item, index) => (
            <span
              key={item}
              style={{
                width: `${100 - index * 14}%`,
                '--funnel-delay': `${index * 420}ms`,
                '--funnel-min': `${0.78 - index * 0.04}`,
              }}
            >
              <b>{item}</b>
            </span>
          ))}
        </div>
        <div className="service-chart-bars">
          {[64, 96, 72, 88, 58, 78, 92].map((height, index) => (
            <span key={`${height}-${index}`} style={{ height: `${height}%`, animationDelay: `${index * 260}ms` }} />
          ))}
        </div>
      </div>
      <div className="service-chart-note">
        <BarChart3 size={18} />
        Campaign lift
      </div>
    </div>
  );
}

function WhatsAppVisual({ visual }) {
  return (
    <div className="service-chat-card">
      <div className="service-chat-title">
        <MessageCircle size={18} />
        <strong>{visual.sceneTitle || 'Business Messages'}</strong>
        <span className="service-template-note">
          <CheckCircle2 size={14} />
          Template live
        </span>
      </div>
      <div className="service-chat-thread">
        {['Hi, can I book a free demo?', 'Sure. Which course interests you?', 'Data Science with AI', 'Done. Demo link sent for 6 PM.'].map((message, index) => (
          <span key={message} className={index % 2 ? 'sent' : ''}>{message}</span>
        ))}
      </div>
    </div>
  );
}

function UiUxVisual({ visual }) {
  return (
    <div className="service-scene-window service-figma-panel">
      <WindowDots label={visual.sceneTitle || 'design-system.fig'} />
      <div className="service-design-canvas">
        <div className="service-design-snapshot" aria-hidden>
          <div className="snapshot-agent">
            <i />
            <span />
            <p />
            <p />
            <p />
          </div>
          <div className="snapshot-strip">
            <strong>Finlec Technologies Digital Agency W...</strong>
            <div className="snapshot-page snapshot-kit">
              <span />
              <span />
              <span />
            </div>
            <div className="snapshot-page snapshot-home">
              <span />
              <span />
              <span />
            </div>
            <div className="snapshot-page snapshot-services">
              <span />
              <span />
              <span />
            </div>
            <div className="snapshot-page snapshot-contact">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraphicsVisual({ visual }) {
  return (
      <div className="service-brand-board">
        <div className="service-brand-tile tile-a">
          <div className="service-graphic-card">
            <span className="graphic-dot dot-a" />
            <span className="graphic-dot dot-b" />
            <span className="graphic-dot dot-c" />
            <span className="graphic-path path-a" />
            <span className="graphic-path path-b" />
            <span className="graphic-handle handle-a" />
            <span className="graphic-handle handle-b" />
            <span className="graphic-handle handle-c" />
            <span className="graphic-image" />
          </div>
        </div>
        <div className="service-brand-tile tile-b" />
      <div className="service-brand-sticker sticker-wow">WOW</div>
      <div className="service-brand-sticker sticker-fresh">Fresh</div>
      <div className="service-brand-poster">
        <span>Poster</span>
        <strong>Launch</strong>
        <i />
      </div>
      <div className="service-brand-story">
        <span>Story</span>
        <i />
        <i />
      </div>
      <div className="service-brand-title">
        <span>Brand</span>
        <strong>Play Kit</strong>
      </div>
      <div className="service-brand-swatches">
        {['#ffd166', '#ef476f', '#06d6a0', '#118ab2'].map((color) => (
          <i key={color} style={{ background: color }} />
        ))}
      </div>
      <div className="service-brand-ribbon">
        <span>Logo</span>
        <span>Social</span>
        <span>Print</span>
      </div>
      <div className="service-brand-note">
        <Sparkles size={17} />
        {visual.sceneTitle || 'Visual system'}
      </div>
    </div>
  );
}

function OfferSection({ page }) {
  return (
    <Section className="bg-surface">
      <SectionIntro {...page.offerSection} />
      <div className="mt-xl grid gap-lg md:grid-cols-2 xl:grid-cols-3">
        {page.offerings.map((item, index) => (
          <Reveal key={item.title} delay={(index % 3) * 0.04}>
            <article className="interactive-surface h-full rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-low transition-all duration-300 hover:-translate-y-1 hover:shadow-med">
              <ColorIcon name={item.icon} color={item.color || 'blue'} size={26} boxSize="h-14 w-14" radius="rounded-2xl" className="mb-sm" />
              <h3 className="text-h3 text-on-surface">{item.title}</h3>
              <p className="mt-sm text-body-md text-on-surface-variant">{item.description}</p>
              <ul className="mt-md space-y-2">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-body-md text-on-surface-variant">
                    <Icon name="check_circle" size={18} className="mt-1 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ShowcaseSection({ showcase }) {
  return (
    <Section className="bg-white">
      <SectionIntro {...showcase} />
      <div className="mt-xl grid gap-md sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showcase.items.map((item, index) => (
          <Reveal key={item.title} delay={(index % 4) * 0.035}>
            <article className="interactive-surface flex h-full flex-col items-start rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-low transition-all duration-300 hover:border-primary/30 hover:shadow-med">
              <TechPill tech={item.title} className="mb-4" />
              <p className="text-body-md text-on-surface-variant">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProcessSection({ page }) {
  return (
    <Section className="bg-surface">
      <SectionIntro {...page.processSection} />
      <div className="mt-xl grid gap-lg">
        {page.process.map((item, index) => (
          <Reveal key={item.title} delay={(index % 3) * 0.04}>
            <article className="grid gap-md rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-low md:grid-cols-[96px_1fr] md:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-h3 text-white shadow-low">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-h3 text-on-surface">{item.title}</h3>
                <p className="mt-sm text-body-md text-on-surface-variant">{item.description}</p>
                <div className="mt-md flex flex-wrap gap-2">
                  {item.steps.map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-outline-variant bg-white px-3 py-1 text-label-sm font-medium text-on-surface-variant"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FaqSection({ faqs, title }) {
  return (
    <Section className="bg-white">
      <SectionIntro
        eyebrow="Common Questions"
        title="Frequently Asked Questions"
        description={`Find answers to questions clients frequently ask about our ${title.toLowerCase()} services.`}
      />
      <div className="mx-auto mt-xl max-w-3xl space-y-3">
        {faqs.map((faq, index) => (
          <Reveal key={faq.question} delay={(index % 4) * 0.035}>
            <details className="group rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 shadow-low">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-h3 text-on-surface">
                <span>{faq.question}</span>
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-md text-body-md text-on-surface-variant">{faq.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function RelatedServices({ services }) {
  if (!services.length) return null;

  return (
    <Section className="bg-surface !py-lg md:!py-xl">
      <div className="flex flex-col gap-lg md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-eyebrow">Explore More</p>
          <h2 className="mt-sm text-h2 text-on-surface">Other services you may need</h2>
        </div>
        <Button to="/services" variant="outline" iconRight={<ArrowRight size={18} />}>
          All services
        </Button>
      </div>
      <div className="mt-lg grid gap-md md:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            to={service.path || `/services#${service.id}`}
            className="interactive-surface rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 shadow-low transition-all hover:-translate-y-1 hover:shadow-med"
          >
            <ColorIcon name={service.icon} color={service.color || 'blue'} size={22} boxSize="h-11 w-11" radius="rounded-xl" className="mb-sm" />
            <h3 className="text-h3 text-on-surface">{service.title}</h3>
            <p className="mt-sm text-body-md text-on-surface-variant">{service.summary}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <p className="section-eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-sm text-h1 text-balance text-on-surface">{title}</h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-md text-body-lg text-on-surface-variant">{description}</p>
      </Reveal>
    </div>
  );
}
