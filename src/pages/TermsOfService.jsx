import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

const responsibilityItems = [
  'Share accurate and complete information',
  'Keep account details safe when accounts are used',
  'Use our services in line with applicable laws',
  'Do not disrupt or misuse our services',
];

export default function TermsOfService() {
  useSEO({
    title: 'Terms of Service | Finlec Technologies',
    description: 'Read the basic terms for using Finlec Technologies services and website.',
    path: '/terms-of-service',
    robots: 'index, follow',
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
          <h1 className="text-h1 text-on-surface">Terms of Service</h1>
          <p className="mt-sm text-body-lg text-on-surface-variant">Last Updated: April 25, 2025</p>

          <div className="prose prose-slate mt-xl max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using Finlec Technologies services or website, you agree to these
              Terms of Service. If you do not agree with these terms, please do not use
              our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              Finlec Technologies provides digital services such as website
              development, app development, digital marketing, design, WhatsApp API,
              and AI solutions as described on our website.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>Users of our services agree to:</p>
            <ul>
              {responsibilityItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>4. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@finlectechnologies.com">legal@finlectechnologies.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
