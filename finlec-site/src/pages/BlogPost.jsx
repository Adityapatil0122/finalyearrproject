import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
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
    title: post ? `${post.title} — Finlec Blog` : 'Blog — Finlec',
    description: post?.excerpt,
  });

  useEffect(() => {
    if (prefersReducedMotion || !progressRef.current) return;
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
        className="fixed top-[64px] left-0 right-0 h-[3px] bg-primary origin-left scale-x-0 z-40"
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
        <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
          <Calendar size={14} /> {formatDate(post.date)}
          {post.tags?.length ? (
            <>
              <span>·</span>
              <span className="text-primary font-semibold">{post.tags.join(' · ')}</span>
            </>
          ) : null}
        </div>
        <h1 className="mt-md text-display text-balance">{post.title}</h1>
        <p className="mt-md text-body-lg text-on-surface-variant max-w-2xl">{post.excerpt}</p>
      </header>

      {post.cover ? (
        <div className="container-page mt-xl">
          <div className="interactive-surface media-reveal aspect-[16/9] rounded-3xl border border-outline-variant shadow-high">
            <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </div>
      ) : null}

      <div className="container-page my-2xl">
        <div className="prose prose-lg max-w-3xl mx-auto prose-headings:font-semibold prose-headings:text-on-surface prose-a:text-primary prose-strong:text-on-surface">
          <Component />
        </div>
      </div>
    </article>
  );
}
