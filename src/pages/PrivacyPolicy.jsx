import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

const collectionItems = [
  'Fill out forms on our website',
  'Subscribe to our newsletter',
  'Request information about our services',
  'Contact us directly',
];

const usageItems = [
  'Provide, operate, and maintain our website',
  'Improve, personalize, and expand our website',
  'Understand and analyze how you use our website',
  'Develop new products, services, features, and functionality',
  'Communicate with you about our services',
  'Process your transactions',
  'Send you emails',
  'Find and prevent fraud',
];

export default function PrivacyPolicy() {
  useSEO({
    title: 'Privacy Policy - Finlec Technologies',
    description: 'Read the Finlec Technologies privacy policy.',
  });

  return (
    <div className="bg-surface">
      <section className="container-page py-xl md:py-[88px]">
        <div className="mb-lg">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-md py-sm text-label-sm font-semibold text-on-surface transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-outline-variant bg-surface-container-lowest p-lg shadow-low md:p-xl">
          <h1 className="text-h1 text-on-surface">Privacy Policy</h1>
          <p className="mt-sm text-body-lg text-on-surface-variant">Last Updated: April 25, 2025</p>

          <div className="prose prose-slate mt-xl max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Finlec Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website and
              services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              {collectionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              {usageItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>4. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us
              at{' '}
              <a href="mailto:privacy@finlectechnologies.com">privacy@finlectechnologies.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
