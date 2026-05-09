import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

export default function CtaForm() {
  return (
    <Section className="bg-surface">
      <div className="interactive-surface signal-grid rounded-3xl bg-primary text-white relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-2xl p-xl md:p-2xl relative">
          <div className="space-y-md">
            <Reveal>
              <p className="text-label-sm uppercase tracking-widest text-white/70">
                Build with us
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-h1 text-balance">
                Got a brief? Let&apos;s map the right digital solution.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body-lg text-white/80 max-w-md">
                Tell us where you are and where you want to be. We&apos;ll help you
                choose the right mix of website, app, AI, marketing, or design work.
              </p>
            </Reveal>

            <ul className="mt-xl space-y-md">
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <Mail size={18} />
                </span>
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <Phone size={18} />
                </span>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:underline">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <MapPin size={18} />
                </span>
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          <Reveal delay={0.2} className="">
            <div className="glass-card-dark rounded-2xl p-lg md:p-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <input
                type="text"
                placeholder="Company"
                className="mt-md w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="mt-md w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button
                to="/contact"
                variant="white"
                size="lg"
                className="mt-md w-full"
                iconRight={<ArrowRight size={18} />}
              >
                Open full contact form
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
