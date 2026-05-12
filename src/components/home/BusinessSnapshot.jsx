import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

const cards = [
  {
    label: 'Call',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
    Icon: Phone,
  },
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
  {
    label: 'Visit',
    value: siteConfig.shortAddress || siteConfig.address,
    href: '/contact',
    Icon: MapPin,
  },
  {
    label: 'Hours',
    value: siteConfig.businessHours[0],
    href: '/contact',
    Icon: Clock,
  },
];

export default function BusinessSnapshot() {
  return (
    <Section id="business-info" className="bg-surface">
      <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-2xl items-center">
        <div>
          <Reveal>
            <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Pune studio
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">Useful contact details, right where visitors need them.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-md text-body-lg text-on-surface-variant">
              The contact information now matches the public reference site, including business hours and the Pune address.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-lg">
              <Button to="/contact" magnetic>
                Send a project brief
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-md">
          {cards.map(({ label, value, href, Icon }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <a
                href={href}
                className="interactive-surface surface-lift block h-full rounded-2xl border border-outline-variant bg-surface-container-lowest p-lg shadow-low"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} />
                </span>
                <p className="mt-md text-label-sm uppercase tracking-widest text-on-surface-variant">
                  {label}
                </p>
                <p className="mt-1 text-h3 text-on-surface">{value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
