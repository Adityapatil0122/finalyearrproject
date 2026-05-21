import { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, Clock3, UserRound } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import SiteCta from '@/components/ui/SiteCta';
import VisualHero from '@/components/ui/VisualHero';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { getPost } from '@/data/posts';

function formatDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  const progressRef = useRef(null);

  useSEO({
    title: post ? `${post.title} | Finlec Blog` : 'Blog | Finlec Technologies',
    description: post?.excerpt,
    path: post ? `/blogs/${post.slug}` : '/blogs',
    image: post?.cover,
    type: post ? 'article' : 'website',
    publishedTime: post?.date,
    modifiedTime: post?.date,
    author: post?.author,
    keywords: post?.tags,
  });

  useEffect(() => {
    if (prefersReducedMotion || !progressRef.current) return undefined;
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop || window.scrollY) / total : 0;
      gsap.set(progressRef.current, { scaleX: pct });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!post) return <Navigate to="/blogs" replace />;

  const { Component } = post;

  return (
    <article className="relative">
      <div
        ref={progressRef}
        className="fixed left-0 right-0 top-[70px] z-40 h-[3px] origin-left scale-x-0 bg-primary md:top-[82px]"
      />
      <VisualHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        media={
          post.cover
            ? {
                src: post.cover,
                alt: post.title,
                eyebrow: post.readTime,
                title: post.featuredStat || post.author,
              }
            : undefined
        }
      >
        <Link
          to="/blogs"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 px-6 py-3 text-[0.95rem] font-semibold text-white transition-all hover:bg-white/10"
        >
          <ArrowLeft size={18} /> All posts
        </Link>
        <div className="flex flex-wrap items-center gap-2 text-label-sm text-white/82">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/12 px-3 py-2 font-semibold">
            <Calendar size={14} /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/12 px-3 py-2 font-semibold">
            <Clock3 size={14} /> {post.readTime}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/12 px-3 py-2 font-semibold">
            <UserRound size={14} /> {post.author}
          </span>
          {post.featuredStat ? (
            <span className="inline-flex max-w-2xl items-center gap-2 rounded-full bg-white px-3 py-2 font-semibold text-primary">
              <BookOpen size={16} className="shrink-0" />
              {post.featuredStat}
            </span>
          ) : null}
        </div>
      </VisualHero>

      <div className="container-page my-2xl">
        <div className="grid gap-2xl lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="prose prose-lg max-w-3xl prose-headings:font-semibold prose-headings:text-on-surface prose-a:text-primary prose-strong:text-on-surface">
            <Component />
          </div>
          <aside className="space-y-md lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-lg shadow-low">
              <p className="section-eyebrow-sm">
                Article brief
              </p>
              <div className="mt-md grid gap-sm text-body-md text-on-surface-variant">
                <span>{post.readTime}</span>
                <span>{post.category}</span>
                {post.source ? <span>Source: {post.source}</span> : null}
              </div>
            </div>
            {post.tags?.length ? (
              <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-lg shadow-low">
                <p className="section-eyebrow-sm">
                  Tags
                </p>
                <div className="mt-md flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-label-sm font-semibold text-primary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
      <SiteCta title="Want this playbook applied to your business?" />
    </article>
  );
}
