import { useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

const SCHEMA_ID = 'finlec-org-schema';

export default function OrgSchema() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      url: typeof window !== 'undefined' ? window.location.origin : '',
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      sameAs: Object.values(siteConfig.social || {}),
      logo:
        typeof window !== 'undefined'
          ? window.location.origin + (siteConfig.logo || '/favicon.svg')
          : siteConfig.logo,
    };
    let script = document.getElementById(SCHEMA_ID);
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = SCHEMA_ID;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }, []);
  return null;
}
