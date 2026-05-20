import { Clock3, Mail, MapPin, MessageCircleMore, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, '')}`;
const whatsappDigits = siteConfig.whatsapp.replace(/\D/g, '');
const whatsappHref = `https://wa.me/${whatsappDigits}`;

const channels = [
  {
    label: 'Call us',
    value: siteConfig.phone,
    href: phoneHref,
    note: null,
    Icon: PhoneCall,
    tint: 'bg-white border-primary/15 text-primary',
    iconTint: 'bg-primary/10 text-primary',
  },
  {
    label: 'Email us',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: null,
    Icon: Mail,
    tint: 'bg-white border-secondary/20 text-secondary',
    iconTint: 'bg-secondary/10 text-secondary',
  },
  {
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: whatsappHref,
    note: siteConfig.whatsapp,
    Icon: MessageCircleMore,
    tint: 'bg-white border-primary/15 text-primary',
    iconTint: 'bg-primary/10 text-primary',
  },
  {
    label: 'Visit us',
    value: siteConfig.address,
    to: '/contact',
    note: null,
    Icon: MapPin,
    tint: 'bg-white border-secondary/20 text-secondary',
    iconTint: 'bg-secondary/10 text-secondary',
  },
];

const hours = [
  { day: 'Monday - Saturday', value: '10:00 AM - 6:00 PM' },
  { day: 'Sunday', value: 'Closed' },
];

export default function BusinessSnapshot({ embedded = false, className = '' }) {
  const content = (
    <div className={embedded ? 'flex h-full flex-col' : 'mx-auto max-w-4xl'}>
        <Reveal>
          <div className={embedded ? 'mb-lg' : 'mb-xl'}>
            <h2 className={embedded ? 'text-h2 text-on-surface' : 'text-h2 text-on-surface'}>
              Get in Touch
            </h2>
          </div>
        </Reveal>

        <div className={embedded ? 'grid flex-1 gap-md sm:grid-cols-2' : 'space-y-md'}>
          {channels.map(({ label, value, href, to, note, Icon, tint, iconTint }, index) => (
            <Reveal key={label} delay={index * 0.06}>
              {to ? (
                <Link
                  to={to}
                  className={[
                    'group block border transition-all duration-300 hover:-translate-y-1 hover:shadow-med',
                    embedded ? 'h-full rounded-2xl px-md py-md' : 'rounded-[1.75rem] px-lg py-lg',
                    tint,
                  ].join(' ')}
                >
                  <div className={embedded ? 'flex items-start gap-sm' : 'flex items-start gap-md sm:items-center'}>
                    <span className={[
                      'grid shrink-0 place-items-center transition-transform duration-300 group-hover:scale-110',
                      embedded ? 'h-10 w-10 rounded-xl' : 'h-12 w-12 rounded-2xl',
                      iconTint,
                    ].join(' ')}>
                      <Icon size={embedded ? 19 : 22} />
                    </span>
                    <div className="min-w-0">
                      <p className="section-eyebrow-sm">{label}</p>
                      <p className={[
                        'mt-1 font-semibold leading-snug text-on-surface [overflow-wrap:anywhere]',
                        embedded ? 'text-[1.05rem]' : 'text-h3',
                      ].join(' ')}>
                        {value}
                      </p>
                      {note ? <p className="mt-0.5 text-body-sm text-on-surface-variant">{note}</p> : null}
                    </div>
                  </div>
                </Link>
              ) : (
                <a
                  href={href}
                  className={[
                    'group block border transition-all duration-300 hover:-translate-y-1 hover:shadow-med',
                    embedded ? 'h-full rounded-2xl px-md py-md' : 'rounded-[1.75rem] px-lg py-lg',
                    tint,
                  ].join(' ')}
                >
                  <div className={embedded ? 'flex items-start gap-sm' : 'flex items-start gap-md sm:items-center'}>
                    <span className={[
                      'grid shrink-0 place-items-center transition-transform duration-300 group-hover:scale-110',
                      embedded ? 'h-10 w-10 rounded-xl' : 'h-12 w-12 rounded-2xl',
                      iconTint,
                    ].join(' ')}>
                      <Icon size={embedded ? 19 : 22} />
                    </span>
                    <div className="min-w-0">
                      <p className="section-eyebrow-sm">{label}</p>
                      <p className={[
                        'mt-1 font-semibold leading-snug text-on-surface [overflow-wrap:anywhere]',
                        embedded ? 'text-[1.05rem]' : 'text-h3',
                      ].join(' ')}>
                        {value}
                      </p>
                      {note ? <p className="mt-0.5 text-body-sm text-on-surface-variant">{note}</p> : null}
                    </div>
                  </div>
                </a>
              )}
            </Reveal>
          ))}

          <Reveal delay={0.28} className={embedded ? 'sm:col-span-2' : ''}>
            <div
              className={[
                'border border-primary/15 bg-white',
                embedded ? 'h-full rounded-2xl px-md py-md' : 'rounded-[1.75rem] px-lg py-lg',
              ].join(' ')}
            >
              <div className="flex items-start gap-sm">
                <span className={[
                  'grid shrink-0 place-items-center bg-primary/10 text-primary transition-transform duration-300 hover:scale-110',
                  embedded ? 'h-10 w-10 rounded-xl' : 'h-12 w-12 rounded-2xl',
                ].join(' ')}>
                  <Clock3 size={embedded ? 19 : 22} />
                </span>
                <div>
                  <p className="section-eyebrow-sm">
                    Business hours
                  </p>
                </div>
              </div>

              <div className={embedded ? 'mt-md grid gap-sm border-t border-primary/10 pt-md sm:grid-cols-2' : 'mt-md space-y-3 border-t border-primary/10 pt-md'}>
                {hours.map((entry) => (
                  <div key={entry.day} className={embedded ? 'flex items-center justify-between gap-sm text-body-md' : 'flex items-center justify-between gap-md text-body-lg'}>
                    <span className="text-on-surface">{entry.day}</span>
                    <span className="text-on-surface-variant">{entry.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
  );

  if (embedded) {
    return (
      <aside
        id="business-info"
        className={[
          'h-full rounded-3xl border border-outline-variant bg-surface-container-lowest p-md shadow-high md:p-lg',
          className,
        ].join(' ')}
      >
        {content}
      </aside>
    );
  }

  return (
    <Section id="business-info" className={['bg-surface', className].join(' ')}>
      {content}
    </Section>
  );
}
