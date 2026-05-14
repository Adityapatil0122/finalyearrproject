import { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Loader2,
  MapPin,
  Send,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Reveal from '@/components/ui/Reveal';
import BusinessSnapshot from '@/components/home/BusinessSnapshot';
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

const officeLatitude = 18.4567815;
const officeLongitude = 73.8496193;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${officeLatitude},${officeLongitude}`;
const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=73.82%2C18.43%2C73.88%2C18.48&layer=mapnik&marker=${officeLatitude}%2C${officeLongitude}`;

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
        <div className="container-page relative py-lg text-center md:py-xl">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <p className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                Let&apos;s Talk
              </p>
              <h1 className="mt-2 text-h1 leading-tight text-balance text-on-surface">
                Let&apos;s create the{' '}
                <span className="italic text-primary">next big thing</span> together.
              </h1>
              <p className="mx-auto mt-sm max-w-2xl text-body-md text-on-surface-variant">
                Share your project goals, timeline, and the kind of digital system you
                want to build. We will reply with a clear next step.
              </p>
            </div>
          </Reveal>
        </div>

      </section>

      <section className="container-page py-lg md:py-xl">
        <div className="mx-auto grid max-w-[1440px] gap-lg lg:grid-cols-[1.05fr_1.1fr] lg:items-stretch">
          <BusinessSnapshot embedded />

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col rounded-3xl border border-outline-variant bg-surface-container-lowest p-md shadow-high md:p-lg"
            >
              <div className="border-b border-outline-variant pb-md">
                <h2 className="text-h2 text-on-surface">Send Us a Message</h2>
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
                    className="h-[50px] w-full appearance-none rounded-xl border border-outline-variant bg-surface px-md py-sm text-body-md outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
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
                    <span>Send Project Inquiry</span>
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
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface/90 px-md py-sm text-label-sm font-semibold text-on-surface shadow-low backdrop-blur-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
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
