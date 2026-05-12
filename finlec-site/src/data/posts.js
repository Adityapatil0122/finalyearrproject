// Auto-import all MDX posts via Vite glob; expose metadata + lazy component.
const modules = import.meta.glob('@/content/blog/*.mdx', { eager: true });

export const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop().replace(/\.mdx$/, '');
    const fm = mod.frontmatter || {};
    return {
      slug: fm.slug || slug,
      title: fm.title || slug,
      date: fm.date || '',
      author: fm.author || 'Finlec Team',
      tags: fm.tags || [],
      category: fm.category || fm.tags?.[0] || 'Insight',
      readTime: fm.readTime || '4 min read',
      featuredStat: fm.featuredStat || '',
      source: fm.source || '',
      cover: fm.cover || '',
      excerpt: fm.excerpt || '',
      Component: mod.default,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export const trendingTags = [
  'Website Development',
  'Core Web Vitals',
  'SEO',
  'Conversion UX',
  'App Development',
  'Digital Marketing',
  'UI/UX Design',
  'AI Chatbots',
  'AI Agents',
  'Data Analytics',
  'WhatsApp API',
  'AI Search',
  'GA4',
  'Accessibility',
  'Security',
  'Launch',
];
