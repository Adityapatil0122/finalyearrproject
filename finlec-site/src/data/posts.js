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
  'App Development',
  'Digital Marketing',
  'UI/UX Design',
  'AI Chatbots',
  'Data Analytics',
  'AI Integration',
  'AI',
  'Technology',
  'Business',
];
