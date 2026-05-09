import { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  Globe2,
  Loader2,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import Reveal from '@/components/ui/Reveal';
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

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address
)}`;

const whatsappUrl = `https://wa.me/${(siteConfig.whatsapp || siteConfig.phone).replace(
  /[^\d]/g,
  ''
)}`;

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 5.5a4.3 4.3 0 1 0 0 8.6 4.3 4.3 0 0 0 0-8.6zm0 7.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm5.4-7.3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
  );
}

const contactMethods = [
  {
    label: 'Email our team',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    tone: 'primary',
  },
  {
    label: 'Give us a call',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
    icon: Phone,
    tone: 'secondary',
  },
  {
    label: 'WhatsApp',
    value: siteConfig.whatsapp,
    href: whatsappUrl,
    icon: MessageCircle,
    tone: 'success',
  },
];

const socialLinks = [
  { label: 'Website', href: '/', icon: Globe2, internal: true },
  { label: 'Instagram', href: siteConfig.social.instagram, icon: InstagramIcon },
].filter((item) => item.href);

const toneClasses = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  success: 'bg-emerald-500/10 text-emerald-600',
};

export default function Contact() {
  useSEO({
    title: 'Contact - Finlec Technologies',
    description:
      'Contact Finlec Technologies for website, app, AI, marketing, WhatsApp API, UI/UX, and graphics design services.',
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
      <section className="relative overflow-hidden border-b border-outline-variant bg-surface-container-low">
        <div className="absolute inset-0 signal-grid opacity-50" aria-hidden />
        <div className="container-page relative grid gap-xl py-xl md:grid-cols-[1fr_auto] md:items-end md:py-2xl">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                Let&apos;s Talk
              </p>
              <h1 className="mt-3 text-display leading-tight text-balance text-on-surface">
                Let&apos;s create the{' '}
                <span className="italic text-primary">next big thing</span> together.
              </h1>
              <p className="mt-md max-w-2xl text-body-lg text-on-surface-variant">
                Share your project goals, timeline, and the kind of digital system you
                want to build. We will reply with a clear next step.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-sm rounded-2xl border border-outline-variant bg-surface-container-lowest p-sm shadow-low">
              <div className="rounded-xl bg-primary/10 px-md py-sm">
                <p className="text-label-sm text-on-surface-variant">Reply time</p>
                <p className="text-h3 text-primary">24 hrs</p>
              </div>
              <div className="rounded-xl bg-secondary/10 px-md py-sm">
                <p className="text-label-sm text-on-surface-variant">Location</p>
                <p className="text-h3 text-secondary">Pune</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-2xl md:py-[92px]">
        <div className="grid grid-cols-1 gap-xl lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <aside className="space-y-lg">
              <div className="rounded-3xl border border-outline-variant bg-surface-container-lowest p-lg shadow-low md:p-xl">
                <h2 className="text-h2 text-on-surface">Reach Out</h2>
                <p className="mt-2 text-body-md text-on-surface-variant">
                  Talk to us directly or send a project brief. We keep conversations
                  practical, quick, and focused on what moves your business forward.
                </p>

                <div className="mt-xl grid gap-md">
                  {contactMethods.map(({ label, value, href, icon: Icon, tone }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === 'WhatsApp' ? '_blank' : undefined}
                      rel={label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                      className="group flex items-start gap-md rounded-2xl border border-outline-variant bg-surface p-md transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5"
                    >
                      <span
                        className={[
                          'grid h-14 w-14 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105',
                          toneClasses[tone],
                        ].join(' ')}
                      >
                        <Icon size={26} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-label-sm font-semibold uppercase tracking-widest text-on-surface-variant">
                          {label}
                        </span>
                        <span className="mt-1 block break-words text-body-lg font-semibold text-on-surface">
                          {value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-lg grid gap-md border-t border-outline-variant pt-lg md:grid-cols-2">
                  <div className="flex items-start gap-sm">
                    <Clock size={20} className="mt-1 shrink-0 text-primary" />
                    <div>
                      <p className="text-label-sm font-semibold uppercase tracking-widest text-on-surface-variant">
                        Business hours
                      </p>
                      {siteConfig.businessHours.map((line) => (
                        <p key={line} className="mt-1 text-body-md text-on-surface">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-label-sm font-semibold uppercase tracking-widest text-on-surface-variant">
                      Connect
                    </p>
                    <div className="mt-sm flex gap-sm">
                      {socialLinks.map(({ label, href, icon: Icon, internal }) =>
                        internal ? (
                          <Link
                            key={label}
                            to={href}
                            aria-label={label}
                            className="grid h-11 w-11 place-items-center rounded-full border border-outline-variant text-on-surface-variant transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                          >
                            <Icon size={19} />
                          </Link>
                        ) : (
                          <a
                            key={label}
                            href={href}
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid h-11 w-11 place-items-center rounded-full border border-outline-variant text-on-surface-variant transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                          >
                            <Icon size={19} />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <MapPanel />
            </aside>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-outline-variant bg-surface-container-lowest p-lg shadow-high md:p-xl"
            >
              <div className="flex flex-col gap-md border-b border-outline-variant pb-lg md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                    Project brief
                  </p>
                  <h2 className="mt-2 text-h2 text-on-surface">Send a Message</h2>
                  <p className="mt-2 max-w-xl text-body-md text-on-surface-variant">
                    The more context you share, the faster we can suggest the right route.
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-container-low px-md py-sm text-label-sm font-semibold text-on-surface-variant">
                  Secure inquiry
                </div>
              </div>

              <div className="mt-lg grid grid-cols-1 gap-lg md:grid-cols-2">
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
                <div className="relative">
                  <label
                    htmlFor="service"
                    className="absolute -top-2 left-4 z-10 bg-surface-container-lowest px-1 text-[0.78rem] font-semibold text-primary"
                  >
                    Service interested in
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="h-[58px] w-full appearance-none rounded-xl border border-outline-variant bg-surface px-md py-md text-body-md outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={20}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
                  />
                </div>
              </div>

              <FloatingField
                as="textarea"
                label="Your Project Brief"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="mt-lg"
              />

              {error ? <p className="mt-md text-label-sm text-tertiary">{error}</p> : null}

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={[
                  'btn-sheen mt-lg flex w-full items-center justify-center gap-md rounded-2xl py-lg text-h3 font-bold shadow-lg transition-all hover:-translate-y-1 active:scale-[0.98]',
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
                    <CheckCircle2 size={22} />
                    Sent - we&apos;ll get back to you soon
                  </>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <Send size={22} />
                  </>
                )}
              </button>

              <div className="mt-lg flex items-center justify-center gap-xs text-on-surface-variant/70">
                <Lock size={15} />
                <p className="text-label-sm">Your data is secure and never shared.</p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function MapPanel() {
  return (
    <div className="overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest shadow-low">
      <div className="flex flex-col gap-sm p-lg md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
            Find us
          </p>
          <h2 className="mt-1 text-h3 text-on-surface">{siteConfig.shortAddress}</h2>
          <p className="mt-1 max-w-md text-body-md text-on-surface-variant">
            {siteConfig.address}
          </p>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-outline-variant px-md py-sm text-label-sm font-semibold text-on-surface transition-all hover:border-primary hover:bg-primary hover:text-white"
        >
          Open map
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="relative h-[320px] border-t border-outline-variant md:h-[380px]">
        <iframe
          title="Finlec Technologies location map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=73.78%2C18.45%2C73.98%2C18.64&amp;layer=mapnik&amp;marker=18.52%2C73.86"
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />
      </div>
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
          isTextarea ? 'min-h-[156px] resize-none' : 'h-[58px]',
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
