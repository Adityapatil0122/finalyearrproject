import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Loader2,
  MapPin,
  MessageCircleMore,
  Send,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Reveal from '@/components/ui/Reveal';
import VisualHero from '@/components/ui/VisualHero';
import BusinessSnapshot from '@/components/home/BusinessSnapshot';
import Icon from '@/components/ui/Icon';
import { siteConfig } from '@/data/siteConfig';
import { sendContactForm } from '@/lib/emailjs';

const services = [
  'Website Development',
  'App Development',
  'AI Solutions',
  'Digital Marketing',
  'WhatsApp API',
  'UI / UX Design',
  'Graphics Design',
  'Other',
];

const serviceIcons = {
  'Website Development': 'language',
  'App Development': 'phone_iphone',
  'AI Solutions': 'auto_awesome',
  'Digital Marketing': 'campaign',
  'WhatsApp API': 'chat',
  'UI / UX Design': 'design_services',
  'Graphics Design': 'draw',
  Other: 'more_horiz',
};

const officeLatitude = 18.4567815;
const officeLongitude = 73.8496193;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${officeLatitude},${officeLongitude}`;
const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=73.82%2C18.43%2C73.88%2C18.48&layer=mapnik&marker=${officeLatitude}%2C${officeLongitude}`;
const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`;
const contactHeroImage = '/contact-hero-team.jpg';

export default function Contact() {
  useSEO({
    title: 'Contact | Start a Project With Finlec Technologies',
    description:
      'Contact Finlec Technologies for website development, app development, AI solutions, digital marketing, WhatsApp API, UI/UX, and graphics design.',
    path: '/contact',
    keywords: [
      'contact Finlec Technologies',
      'website development Pune contact',
      'app development Pune contact',
      'AI solutions Pune contact',
    ],
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: services[0],
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setError('');
    try {
      await sendContactForm(form);
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', service: services[0], message: '' });
    } catch (err) {
      setStatus('idle');
      setError(err?.text || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-surface">
      <VisualHero
        eyebrow="Let's talk"
        title="Tell us what you want to build."
        description="Share your goals, timing, and the kind of support you need. We will reply with a clear next step for your website, app, AI, WhatsApp, design, or growth project."
        media={{
          src: contactHeroImage,
          alt: 'Team planning a digital project on laptops',
          eyebrow: 'Project clarity',
          title: 'Start with a short brief. We will shape the next step.',
        }}
      >
        <a
          href="#contact-form"
          className="btn-sheen inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[0.95rem] font-semibold text-primary shadow-high transition-all hover:bg-surface-container-low"
        >
          Send project inquiry
          <ArrowRight size={18} />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 px-6 py-3 text-[0.95rem] font-semibold text-white transition-all hover:bg-white/10"
        >
          <MessageCircleMore size={18} />
          WhatsApp us
        </a>
      </VisualHero>

      <section id="contact-form" className="container-page py-lg md:py-xl">
        <div className="mx-auto grid max-w-[1440px] gap-lg lg:grid-cols-[1.05fr_1.1fr] lg:items-stretch">
          <BusinessSnapshot embedded />

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col rounded-3xl border border-outline-variant bg-surface-container-lowest p-md shadow-high md:p-lg"
            >
              <div className="border-b border-outline-variant pb-md">
                <h2 className="text-h2 text-on-surface">Send us a message</h2>
              </div>

              <div className="mt-md grid grid-cols-1 gap-md md:grid-cols-2">
                <FloatingField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FloatingField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <FloatingField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
                <ServiceDropdown
                  value={form.service}
                  onChange={(service) => setForm((current) => ({ ...current, service }))}
                />
              </div>

              <FloatingField
                as="textarea"
                label="Your Project Brief"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="mt-md"
              />

              {error ? <p className="mt-sm text-label-sm text-tertiary">{error}</p> : null}

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={[
                  'btn-sheen mt-md flex w-full items-center justify-center gap-sm rounded-2xl py-md text-body-lg font-bold shadow-lg transition-all hover:-translate-y-1 active:scale-[0.98]',
                  status === 'sent'
                    ? 'bg-secondary text-white shadow-secondary/20'
                    : 'bg-primary text-white shadow-primary/20 hover:bg-primary-600 hover:shadow-primary/30',
                  status === 'sending' ? 'opacity-90' : '',
                ].join(' ')}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={22} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>
                    <CheckCircle2 size={20} />
                    Sent - we&apos;ll get back to you soon
                  </>
                ) : (
                  <>
                    <span>Send project inquiry</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
      <Reveal delay={0.08}>
        <section className="relative h-[260px] border-y border-outline-variant md:h-[320px]">
          <iframe
            title="Finlec Technologies location map"
            src={mapEmbedUrl}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 rounded-full border border-outline-variant bg-surface/90 px-md py-sm text-center text-label-sm font-semibold text-on-surface shadow-low backdrop-blur-sm transition-all hover:border-primary hover:bg-primary hover:text-white sm:left-auto sm:justify-start sm:text-left"
          >
            <MapPin size={15} />
            {siteConfig.shortAddress} - Open in Maps
            <ExternalLink size={14} />
          </a>
        </section>
      </Reveal>
    </div>
  );
}


function FloatingField({ as = 'input', label, className = '', ...props }) {
  const Tag = as;
  const isTextarea = as === 'textarea';

  return (
    <div className={['relative', className].join(' ')}>
      <Tag
        {...props}
        id={props.name}
        placeholder=" "
        className={[
          'peer w-full rounded-xl border border-outline-variant bg-surface px-md py-md text-body-md outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10',
          isTextarea ? 'min-h-[118px] resize-none' : 'h-[50px]',
        ].join(' ')}
      />
      <label
        htmlFor={props.name}
        className={[
          'pointer-events-none absolute left-4 bg-surface px-1 text-body-md text-on-surface-variant transition-all peer-focus:-top-2 peer-focus:translate-y-0 peer-focus:text-[0.78rem] peer-focus:font-semibold peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.78rem] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-primary',
          isTextarea ? 'top-6' : 'top-1/2 -translate-y-1/2',
        ].join(' ')}
      >
        {label}
      </label>
    </div>
  );
}

function ServiceDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnOutside = (event) => {
      if (!ref.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutside);
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutside);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name="service" value={value} />
      <label
        id="service-label"
        className="absolute -top-2 left-4 z-20 bg-surface-container-lowest px-1 text-[0.78rem] font-semibold text-primary"
      >
        Service interested in
      </label>
      <button
        type="button"
        aria-labelledby="service-label"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={[
          'flex h-[50px] w-full items-center justify-between gap-sm rounded-xl border bg-surface px-md py-sm text-left text-body-md outline-none transition-all',
          open
            ? 'border-primary ring-4 ring-primary/10'
            : 'border-outline-variant hover:border-primary/30',
        ].join(' ')}
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <Icon name={serviceIcons[value]} size={18} />
          </span>
          <span className="truncate text-on-surface">{value}</span>
        </span>
        <ChevronDown
          size={20}
          className={[
            'shrink-0 text-on-surface-variant transition-transform duration-300',
            open ? 'rotate-180 text-primary' : '',
          ].join(' ')}
        />
      </button>

      <div
        role="listbox"
        className={[
          'absolute left-0 right-0 top-[calc(100%+0.45rem)] z-40 overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest p-1.5 shadow-high transition-all duration-200',
          open
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-2 opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <div className="max-h-[250px] overflow-y-auto" data-lenis-prevent>
          {services.map((service) => {
            const selected = service === value;
            return (
              <button
                key={service}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(service);
                  setOpen(false);
                }}
                className={[
                  'flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-body-md transition-colors',
                  selected
                    ? 'bg-primary text-white'
                    : 'text-on-surface hover:bg-primary/5 hover:text-primary',
                ].join(' ')}
              >
                <span
                  className={[
                    'grid h-8 w-8 shrink-0 place-items-center rounded-xl',
                    selected ? 'bg-white/15 text-white' : 'bg-primary/10 text-primary',
                  ].join(' ')}
                >
                  <Icon name={serviceIcons[service]} size={18} />
                </span>
                <span className="font-medium">{service}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
