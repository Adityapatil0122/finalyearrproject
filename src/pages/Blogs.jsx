import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock3 } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Reveal from '@/components/ui/Reveal';
import VisualHero from '@/components/ui/VisualHero';
import SiteCta from '@/components/ui/SiteCta';
import { posts, trendingTags } from '@/data/posts';

const blogsHeroImage = '/blogs-hero-writing.jpg';

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
    title: 'Blog | Website, AI, SEO and App Guides - Finlec Technologies',
    description:
      'Read simple guides from Finlec Technologies on websites, apps, AI, WhatsApp API, UI/UX, SEO, security, and digital growth.',
    path: '/blogs',
    keywords: [
      'Finlec blog',
      'website development guides',
      'AI guides',
      'SEO guides',
      'app development guides',
    ],
  });

  return (
    <>
      <main className="bg-surface">
        <VisualHero
          eyebrow="Finlec insights"
          title="Simple guides for better digital work."
          description="Notes on websites, AI, SEO, WhatsApp automation, analytics, security, launch planning, and product design from the Finlec team."
          media={{
            src: blogsHeroImage,
            alt: 'Notebook and laptop used for planning digital work',
            eyebrow: 'Practical notes',
            title: 'Clear ideas before you build, launch, or improve.',
            objectPosition: 'center',
          }}
        >
          <a
            href="#latest-guides"
            className="btn-sheen inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[0.95rem] font-semibold text-primary shadow-high transition-all hover:bg-surface-container-low"
          >
            Read latest guides
            <ArrowRight size={18} />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 px-6 py-3 text-[0.95rem] font-semibold text-white transition-all hover:bg-white/10"
          >
            Plan with us
          </Link>
        </VisualHero>

        <section id="latest-guides" className="container-page py-xl">
          <div className="mb-xl flex flex-col justify-between gap-lg lg:flex-row lg:items-end">
            <Reveal>
              <div className="max-w-2xl">
                <p className="section-eyebrow">Latest guides</p>
                <h2 className="mt-3 text-h1 text-balance">
                  Practical playbooks for teams that ship.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex max-w-xl flex-wrap gap-2 lg:justify-end">
                {trendingTags.slice(0, 8).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-sm font-semibold text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-lg md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 6) * 0.04} className="h-full">
                <ArticleCard post={post} featured={index === 0} index={index} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteCta title="Ready to turn an idea into a plan?" />
    </>
  );
}

function ArticleCard({ post, featured = false }) {
  return (
    <Link
      to={`/blogs/${post.slug}`}
      className={[
        'blog-post-card group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface-container-lowest shadow-low',
        featured ? 'border-primary/35 ring-1 ring-primary/10' : 'border-outline-variant',
      ].join(' ')}
    >
      <div className="media-reveal relative aspect-[16/10] overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary-900" />
        <div className="absolute inset-0 signal-grid opacity-35" aria-hidden />
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/24 blur-2xl" aria-hidden />
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <p className="text-xl font-bold leading-tight">{post.category}</p>
          <p className="mt-1 text-label-sm font-semibold text-white/72">
            {post.tags?.slice(0, 3).join(' / ') || 'Finlec guide'}
          </p>
        </div>
        {post.cover ? (
          <img
            src={post.cover}
            alt={post.title}
            loading={featured ? 'eager' : 'lazy'}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/44 via-black/8 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-label-sm font-bold text-primary shadow-low backdrop-blur">
          {featured ? 'Featured' : post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-lg">
        <div className="mb-md flex flex-wrap items-center justify-between gap-sm text-label-sm text-on-surface-variant">
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock3 size={14} />
            {post.readTime}
          </span>
        </div>

        <h2 className="text-h3 text-balance text-on-surface">{post.title}</h2>
        <p className="mt-sm flex-1 text-body-md text-on-surface-variant">{post.excerpt}</p>

        <span className="mt-lg inline-flex items-center gap-2 border-t border-outline-variant pt-md text-label-sm font-bold text-primary">
          Read guide
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
