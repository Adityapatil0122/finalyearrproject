import { ArrowRight } from 'lucide-react';
import { clientLogos } from '@/data/clients';
import Section from './Section';
import Reveal from './Reveal';
import Button from './Button';

export default function SiteCta({
  title = 'Ready to build something worth showing?',
  description = 'Share your goals and the team will map the right website, app, AI, or growth solution.',
  buttonLabel = 'Start a project',
}) {
  return (
    <Section className="bg-surface !pt-0">
      <Reveal>
        <div className="client-cta relative overflow-hidden border border-outline-variant bg-primary p-xl text-center text-white shadow-high md:p-2xl">
          <div className="client-cta-logos" aria-hidden>
            {clientLogos.slice(0, 7).map((logo, index) => (
              <img
                key={logo.logo}
                src={logo.logo}
                alt=""
                className="client-cta-logo"
                style={{ '--cta-delay': `${index * -0.45}s` }}
              />
            ))}
          </div>
          <div className="relative z-10">
            <h2 className="mx-auto max-w-3xl text-h1 text-balance">{title}</h2>
            <p className="mx-auto mt-md max-w-xl text-body-lg text-white/85">
              {description}
            </p>
            <div className="mt-lg flex justify-center">
              <Button
                to="/contact"
                variant="white"
                size="lg"
                magnetic
                iconRight={<ArrowRight size={18} />}
              >
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
