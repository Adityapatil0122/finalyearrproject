import { useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

const SCHEMA_ID = 'finlec-org-schema';

export default function OrgSchema() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      name: siteConfig.name,
      url: siteConfig.siteUrl || (typeof window !== 'undefined' ? window.location.origin : ''),
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address,
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      areaServed: ['Pune', 'Maharashtra', 'India'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone,
          email: siteConfig.email,
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Marathi'],
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '18:00',
        },
      ],
      sameAs: Object.values(siteConfig.social || {}).filter((url) => url && url !== '#'),
      makesOffer: [
        'Website Development',
        'App Development',
        'AI Solutions',
        'Digital Marketing',
        'WhatsApp Business API',
        'UI/UX Design',
        'Graphics Design',
      ].map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
          provider: {
            '@type': 'Organization',
            name: siteConfig.name,
          },
        },
      })),
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
