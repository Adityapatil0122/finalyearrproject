import { useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

const defaultImage = '/logo1.png';

function absoluteUrl(value) {
  const base =
    (siteConfig.siteUrl || (typeof window !== 'undefined' ? window.location.origin : '')).replace(
      /\/$/,
      ''
    );

  if (!value) return base;
  if (/^https?:\/\//i.test(value)) return value;
  return `${base}${value.startsWith('/') ? value : `/${value}`}`;
}

function upsertMeta(selector, attr, key, content) {
  if (!content) return;

  let tag = document.head.querySelector(`${selector}[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function useSEO({
  title,
  description,
  path,
  image = defaultImage,
  type = 'website',
  keywords = [],
  publishedTime,
  modifiedTime,
  author = siteConfig.name,
  robots = 'index, follow',
}) {
  useEffect(() => {
    const pageTitle = title || siteConfig.name;
    const pageDescription = description || siteConfig.description;
    const pagePath = path || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const canonicalUrl = absoluteUrl(pagePath);
    const imageUrl = absoluteUrl(image);

    document.documentElement.setAttribute('lang', 'en');
    document.title = pageTitle;

    upsertMeta('meta', 'name', 'description', pageDescription);
    upsertMeta('meta', 'name', 'robots', robots);
    upsertMeta('meta', 'name', 'keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords);

    upsertMeta('meta', 'property', 'og:site_name', siteConfig.name);
    upsertMeta('meta', 'property', 'og:title', pageTitle);
    upsertMeta('meta', 'property', 'og:description', pageDescription);
    upsertMeta('meta', 'property', 'og:type', type);
    upsertMeta('meta', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta', 'property', 'og:image', imageUrl);
    upsertMeta('meta', 'property', 'og:locale', 'en_IN');

    upsertMeta('meta', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta', 'name', 'twitter:title', pageTitle);
    upsertMeta('meta', 'name', 'twitter:description', pageDescription);
    upsertMeta('meta', 'name', 'twitter:image', imageUrl);

    if (type === 'article') {
      upsertMeta('meta', 'property', 'article:author', author);
      upsertMeta('meta', 'property', 'article:published_time', publishedTime);
      upsertMeta('meta', 'property', 'article:modified_time', modifiedTime || publishedTime);
    } else {
      document.head
        .querySelectorAll(
          'meta[property="article:author"], meta[property="article:published_time"], meta[property="article:modified_time"]'
        )
        .forEach((tag) => tag.remove());
    }

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [author, description, image, keywords, modifiedTime, path, publishedTime, robots, title, type]);
}
