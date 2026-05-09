import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { posts, trendingTags } from '@/data/posts';

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
    title: 'Blog — Finlec Technologies',
    description: 'Field notes from a digital agency — AI, design systems, frontend, growth.',
  });

  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title="What we&rsquo;re thinking, building, and shipping."
        description="Short essays on AI, design, frontend, and growth — written by the people doing the work."
      />

      {featured ? (
        <Section className="bg-surface !pt-0">
          <Reveal>
            <Link
              to={`/blogs/${featured.slug}`}
              className="group interactive-surface surface-lift grid lg:grid-cols-5 gap-xl items-center rounded-3xl bg-surface-container-lowest border border-outline-variant p-md lg:p-lg shadow-low transition-all"
            >
              <div className="media-reveal lg:col-span-3 aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="lg:col-span-2">
                <span className="text-label-sm uppercase tracking-widest text-primary font-semibold">
                  Featured
                </span>
                <h2 className="mt-2 text-h1 leading-tight text-balance">
                  {featured.title}
                </h2>
                <p className="mt-md text-body-lg text-on-surface-variant">
                  {featured.excerpt}
                </p>
                <div className="mt-md inline-flex items-center gap-2 text-on-surface-variant text-label-sm">
                  <Calendar size={16} /> {formatDate(featured.date)}
                </div>
                <div className="mt-md inline-flex items-center gap-1 text-primary font-semibold">
                  Read article
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>
        </Section>
      ) : null}

      <Section className="bg-surface-container-low">
        <div className="grid lg:grid-cols-[1fr_300px] gap-2xl">
          <div>
            <Reveal>
              <h2 className="text-h2 mb-xl">Latest posts</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link
                    to={`/blogs/${p.slug}`}
                    className="group interactive-surface surface-lift block rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-low transition-all"
                  >
                    <div className="media-reveal aspect-[16/10] overflow-hidden">
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-md">
                      <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
                        <Calendar size={14} /> {formatDate(p.date)}
                        {p.tags?.[0] ? (
                          <>
                            <span>·</span>
                            <span className="text-primary font-semibold">{p.tags[0]}</span>
                          </>
                        ) : null}
                      </div>
                      <h3 className="mt-2 text-h3 leading-snug">{p.title}</h3>
                      <p className="mt-2 text-body-md text-on-surface-variant line-clamp-2">
                        {p.excerpt}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
              {rest.length === 0 ? (
                <p className="text-on-surface-variant">More posts coming soon.</p>
              ) : null}
            </div>
          </div>

          <aside className="space-y-xl">
            <Reveal>
              <div className="interactive-surface rounded-2xl bg-surface-container-lowest border border-outline-variant p-lg">
                <h3 className="text-h3 mb-md">Trending tags</h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 text-primary px-3 py-1 text-label-sm font-semibold transition-colors duration-300 hover:bg-primary hover:text-white"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="interactive-surface signal-grid rounded-2xl bg-primary text-white p-lg">
                <h3 className="text-h3">Get our field notes by email</h3>
                <p className="text-body-md mt-2 text-white/80">
                  One short essay a month. No fluff. Unsubscribe in two clicks.
                </p>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-md w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="mt-2 w-full rounded-xl bg-white text-primary font-semibold py-3 hover:bg-surface-container-low transition-colors">
                  Subscribe
                </button>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>
    </>
  );
}
