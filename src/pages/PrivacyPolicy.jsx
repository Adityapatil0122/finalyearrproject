import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import PageHero from '@/components/ui/PageHero';

const collectionItems = [
  'Send a form on our website',
  'Join our newsletter',
  'Ask about our services',
  'Contact us directly',
];

const usageItems = [
  'Run and maintain our website',
  'Improve our website and services',
  'Understand how visitors use our website',
  'Plan new services and features',
  'Communicate with you about our services',
  'Process payments when needed',
  'Send emails you asked for or may need',
  'Help protect the website from fraud',
];

export default function PrivacyPolicy() {
  useSEO({
    title: 'Privacy Policy | Finlec Technologies',
    description: 'Read how Finlec Technologies collects, uses, and protects basic website and contact information.',
    path: '/privacy-policy',
    robots: 'index, follow',
  });

  return (
    <div className="bg-surface">
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        description="Last Updated: April 25, 2025"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/24 px-md py-sm text-label-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </PageHero>

      <section className="container-page py-xl md:py-[88px]">
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-outline-variant bg-surface-container-lowest p-lg shadow-low md:p-xl">
          <div className="prose prose-slate max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Finlec Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your
              privacy. This policy explains what information we collect, how we use it,
              and how we protect it when you use our website or services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information you choose to share when you:</p>
            <ul>
              {collectionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We may use this information to:</p>
            <ul>
              {usageItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>4. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@finlectechnologies.com">privacy@finlectechnologies.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
