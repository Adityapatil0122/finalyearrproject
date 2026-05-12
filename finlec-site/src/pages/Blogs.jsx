import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Bot,
  Calendar,
  Clock3,
  Gauge,
  MessageCircle,
  SearchCheck,
  ShoppingCart,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SiteCta from '@/components/ui/SiteCta';
import { posts, trendingTags } from '@/data/posts';

const researchSignals = [
  {
    icon: Gauge,
    metric: '2.5s',
    label: 'LCP target',
    text: 'Google recommends strong Core Web Vitals for loading, interactivity, and stability.',
  },
  {
    icon: Bot,
    metric: '88%',
    label: 'AI use',
    text: 'McKinsey reports regular AI use in at least one business function across surveyed organizations.',
  },
  {
    icon: ShoppingCart,
    metric: '65%',
    label: 'Checkout gap',
    text: 'Baymard finds most ecommerce checkouts still perform mediocre or worse.',
  },
  {
    icon: MessageCircle,
    metric: '24h',
    label: 'WhatsApp window',
    text: 'Business replies outside the customer window need approved templates.',
  },
];

const sourceLinks = [
  {
    label: 'Google Core Web Vitals',
    href: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
  },
  {
    label: 'Google AI Search',
    href: 'https://developers.google.com/search/docs/appearance/ai-overviews',
  },
  {
    label: 'GA4 Recommended Events',
    href: 'https://support.google.com/analytics/answer/9267735',
  },
  {
    label: 'W3C WCAG 2.2',
    href: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
  },
  {
    label: 'CISA Small Business Security',
    href: 'https://www.cisa.gov/cyber-guidance-small-businesses',
  },
  {
    label: 'McKinsey State of AI 2025',
    href: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
  {
    label: 'Baymard Checkout UX',
    href: 'https://baymard.com/research/checkout-usability',
  },
  {
    label: 'Twilio WhatsApp concepts',
    href: 'https://www.twilio.com/docs/whatsapp/key-concepts',
  },
];

function formatDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function Blogs() {
  useSEO({
    title: 'Blog - Finlec Technologies',
    description:
      'Research-backed guides on websites, AI, WhatsApp API, UI/UX, SEO, and digital growth from Finlec Technologies.',
  });

  const [featured, second, third, ...rest] = posts;
  const highlighted = [second, third].filter(Boolean);

  return (
    <>
      <section className="blog-hero relative overflow-hidden border-b border-outline-variant bg-surface-container-low">
        <div className="blog-hero-grid absolute inset-0 opacity-80" aria-hidden />
        <div className="container-page relative grid items-center gap-xl py-xl md:min-h-[720px] md:gap-2xl md:py-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                Field notes
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-display leading-tight text-balance text-on-surface">
                Practical digital playbooks, backed by live research.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-md max-w-2xl text-body-lg text-on-surface-variant">
                Clear notes for founders and teams planning websites, AI workflows,
                WhatsApp automation, SEO, ecommerce UX, and product launches.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-xl flex flex-wrap gap-sm">
                {trendingTags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-outline-variant bg-surface-container-lowest px-md py-sm text-label-sm font-semibold text-on-surface shadow-low"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="blog-research-panel relative overflow-hidden border border-outline-variant bg-surface-container-lowest p-md shadow-high">
              <div className="blog-panel-sheen" aria-hidden />
              <div className="relative z-10 flex items-center justify-between gap-md border-b border-outline-variant pb-md">
                <div>
                  <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                    Research radar
                  </p>
                  <p className="mt-1 text-body-md text-on-surface-variant">
                    Numbers we turned into practical blog topics.
                  </p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white">
                  <SearchCheck size={24} />
                </div>
              </div>

              <div className="relative z-10 mt-md grid gap-md sm:grid-cols-2">
                {researchSignals.map(({ icon: Icon, metric, label, text }, index) => (
                  <div
                    key={label}
                    className="blog-signal-card interactive-surface border border-outline-variant bg-surface p-md shadow-low"
                    style={{ '--signal-delay': `${index * -0.8}s` }}
                  >
                    <div className="flex items-center justify-between gap-md">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                        <Icon size={22} />
                      </span>
                      <span className="text-h2 text-primary">{metric}</span>
                    </div>
                    <p className="mt-md text-label-sm font-semibold uppercase tracking-widest text-on-surface">
                      {label}
                    </p>
                    <p className="mt-2 text-body-md text-on-surface-variant">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {featured ? (
        <Section className="bg-surface">
          <div className="grid gap-xl lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal>
              <Link
                to={`/blogs/${featured.slug}`}
                className="blog-feature-card group interactive-surface grid h-full overflow-hidden border border-outline-variant bg-surface-container-lowest shadow-high lg:grid-cols-[1.08fr_0.92fr]"
              >
                <div className="media-reveal min-h-[240px] overflow-hidden sm:min-h-[340px]">
                  <img
                    src={featured.cover}
                    alt={featured.title}
                    loading="eager"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-lg md:p-xl">
                  <div>
                    <div className="flex flex-wrap items-center gap-sm text-label-sm text-on-surface-variant">
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                        Featured
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} /> {formatDate(featured.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 size={14} /> {featured.readTime}
                      </span>
                    </div>
                    <h2 className="mt-md text-h1 leading-tight text-balance text-on-surface">
                      {featured.title}
                    </h2>
                    <p className="mt-md text-body-lg text-on-surface-variant">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="mt-lg flex items-center justify-between gap-md">
                    <span className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-primary">
                      Read article
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            <aside className="grid gap-md">
              {highlighted.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.08}>
                  <CompactPost post={post} />
                </Reveal>
              ))}
              <Reveal delay={0.16}>
                <div className="blog-source-box border border-outline-variant bg-on-surface p-lg text-white shadow-high">
                  <Sparkles size={24} />
                  <h3 className="mt-md text-h3">Not just filler content.</h3>
                  <p className="mt-2 text-body-md text-white/72">
                    The index now surfaces current research notes and turns them
                    into business-readable playbooks.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Section>
      ) : null}

      <Section className="bg-surface-container-low">
        <div className="grid gap-2xl lg:grid-cols-[1fr_320px]">
          <div>
            <Reveal>
              <div className="mb-xl flex flex-col justify-between gap-md sm:flex-row sm:items-end">
                <div>
                  <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                    Latest playbooks
                  </p>
                  <h2 className="mt-2 text-h1 text-balance text-on-surface">
                    Useful reading before you rebuild, automate, or launch.
                  </h2>
                </div>
                <div className="hidden rounded-full border border-outline-variant bg-surface-container-lowest px-md py-sm text-label-sm font-semibold text-on-surface-variant shadow-low sm:block">
                  {posts.length} published notes
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-md md:grid-cols-2">
              {rest.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.06}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="space-y-md lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="blog-side-card border border-outline-variant bg-surface-container-lowest p-lg shadow-low">
                <h3 className="text-h3 text-on-surface">Topic map</h3>
                <div className="mt-md flex flex-wrap gap-2">
                  {trendingTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-label-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="blog-side-card signal-grid border border-outline-variant bg-primary p-lg text-white shadow-high">
                <Zap size={24} />
                <h3 className="mt-md text-h3">Need the short version?</h3>
                <p className="mt-2 text-body-md text-white/82">
                  Bring your website, app, AI, or WhatsApp idea and we will turn
                  the relevant playbook into a project plan.
                </p>
                <Button to="/contact" variant="white" size="md" className="mt-md" iconRight={<ArrowRight size={17} />}>
                  Talk to Finlec
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="blog-side-card border border-outline-variant bg-surface-container-lowest p-lg shadow-low">
                <h3 className="text-h3 text-on-surface">Research sources</h3>
                <div className="mt-md grid gap-sm">
                  {sourceLinks.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-md rounded-xl border border-outline-variant bg-surface px-md py-sm text-body-md font-semibold text-on-surface transition-all hover:border-primary hover:text-primary"
                    >
                      <span>{source.label}</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>
      <SiteCta title="Read enough? Let us turn the idea into a plan." />
    </>
  );
}

function CompactPost({ post }) {
  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="blog-compact-post group interactive-surface block border border-outline-variant bg-surface-container-lowest p-lg shadow-low"
    >
      <div className="flex items-center justify-between gap-md">
        <span className="text-label-sm font-semibold uppercase tracking-widest text-primary">
          {post.category}
        </span>
        <span className="inline-flex items-center gap-1 text-label-sm text-on-surface-variant">
          <Clock3 size={14} /> {post.readTime}
        </span>
      </div>
      <h3 className="mt-md text-h3 text-on-surface">{post.title}</h3>
      <p className="mt-2 text-body-md text-on-surface-variant">{post.excerpt}</p>
      {post.featuredStat ? (
        <div className="mt-md rounded-xl bg-primary/10 px-md py-sm text-label-sm font-semibold text-primary">
          {post.featuredStat}
        </div>
      ) : null}
    </Link>
  );
}

function PostCard({ post }) {
  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="blog-post-card group interactive-surface surface-lift flex h-full flex-col overflow-hidden border border-outline-variant bg-surface-container-lowest shadow-low"
    >
      <div className="media-reveal aspect-[16/10] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-md">
        <div className="flex flex-wrap items-center gap-2 text-label-sm text-on-surface-variant">
          <BookOpen size={14} />
          <span>{post.category}</span>
          <span>-</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-2 text-h3 leading-snug text-on-surface">{post.title}</h3>
        <p className="mt-2 flex-1 text-body-md text-on-surface-variant">{post.excerpt}</p>
        <div className="mt-md flex items-center justify-between gap-md border-t border-outline-variant pt-md">
          <span className="inline-flex items-center gap-1 text-label-sm text-on-surface-variant">
            <Calendar size={14} /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-primary">
            Read
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
