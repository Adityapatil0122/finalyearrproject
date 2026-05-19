import { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, Clock3, UserRound } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import SiteCta from '@/components/ui/SiteCta';
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
      <div className="container-page pt-xl">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-label-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft size={16} /> All posts
        </Link>
      </div>

      <header className="container-page mt-md">
        <div className="flex flex-wrap items-center gap-sm text-label-sm text-on-surface-variant">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock3 size={14} /> {post.readTime}
          </span>
          <span className="inline-flex items-center gap-1">
            <UserRound size={14} /> {post.author}
          </span>
        </div>
        <h1 className="mt-md max-w-4xl text-display text-balance">{post.title}</h1>
        <p className="mt-md max-w-3xl text-body-lg text-on-surface-variant">{post.excerpt}</p>
        {post.featuredStat ? (
          <div className="mt-lg inline-flex max-w-2xl items-center gap-sm rounded-2xl border border-outline-variant bg-surface-container-lowest px-md py-sm text-body-md font-semibold text-on-surface shadow-low">
            <BookOpen size={18} className="shrink-0 text-primary" />
            {post.featuredStat}
          </div>
        ) : null}
      </header>

      {post.cover ? (
        <div className="container-page mt-xl">
          <div className="interactive-surface media-reveal aspect-[16/9] overflow-hidden rounded-3xl border border-outline-variant shadow-high">
            <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </div>
      ) : null}

      <div className="container-page my-2xl">
        <div className="grid gap-2xl lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="prose prose-lg max-w-3xl prose-headings:font-semibold prose-headings:text-on-surface prose-a:text-primary prose-strong:text-on-surface">
            <Component />
          </div>
          <aside className="space-y-md lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-lg shadow-low">
              <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
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
                <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
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
