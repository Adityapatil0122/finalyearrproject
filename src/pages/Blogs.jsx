import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Reveal from '@/components/ui/Reveal';
import SiteCta from '@/components/ui/SiteCta';
import { posts } from '@/data/posts';

const cardColors = [
  'bg-[#f6e500]',
  'bg-[#b9a8f4]',
  'bg-[#54d2d0]',
  'bg-[#ffb08a]',
  'bg-[#a8e8b0]',
  'bg-[#9ecbff]',
  'bg-[#f5a7d8]',
  'bg-[#d5dd75]',
  'bg-[#ffc76b]',
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

  return (
    <>
      <main className="bg-[#f6f6f6]">
        <section className="relative overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 signal-grid opacity-20" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(255,255,255,0.22),transparent_32%),linear-gradient(135deg,rgba(0,104,122,0.34),transparent_58%)]" aria-hidden />
          <div className="container-page relative py-xl text-center md:py-[104px]">
            <Reveal>
              <p className="text-label-sm font-semibold uppercase tracking-widest text-white/72">
                Finlec insights
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mx-auto mt-3 max-w-3xl text-h1 text-balance text-white">
                Our Blog
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-md max-w-2xl text-body-lg text-white/78">
                Practical notes on websites, apps, AI workflows, WhatsApp automation,
                SEO, accessibility, analytics, security, and launch planning.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-page pb-xl pt-xl text-center md:pt-[76px]">
          <Reveal>
            <h1 className="text-h1 uppercase text-[#080912]">
              Latest articles
            </h1>
          </Reveal>
        </section>

        <section className="container-page pb-2xl">
          <div className="grid grid-cols-1 gap-lg md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 6) * 0.04} className="h-full">
                <ArticleCard post={post} color={cardColors[index % cardColors.length]} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteCta title="Read enough? Let us turn the idea into a plan." />
    </>
  );
}

function ArticleCard({ post, color }) {
  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-low ring-1 ring-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-high hover:ring-primary/40"
    >
      <div className="media-reveal aspect-[16/10] overflow-hidden bg-surface-container">
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className={['flex flex-1 flex-col p-md text-[#080912] md:p-lg', color].join(' ')}>
        <div className="flex items-center justify-between gap-md text-label-sm font-bold uppercase text-[#080912]">
          <span>{post.readTime}</span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={15} />
            {formatDate(post.date)}
          </span>
        </div>

        <h2 className="mt-md text-h3 uppercase text-[#080912]">
          {post.title}
        </h2>

        <p className="mt-md flex-1 text-body-md font-medium leading-relaxed text-[#080912]/82">
          {post.excerpt}
        </p>

        <span className="mt-lg inline-flex items-center gap-sm text-label-sm font-bold uppercase text-[#080912]">
          Read more
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
