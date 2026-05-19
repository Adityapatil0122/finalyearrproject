import { useState } from 'react';
import { Plus } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

const faqs = [
  {
    q: 'What services can Finlec help with?',
    a: 'We help with website development, app development, digital marketing, WhatsApp Business API, UI/UX design, graphics design, and AI solutions.',
  },
  {
    q: 'What AI work can you help with?',
    a: 'We build AI chatbots, custom AI tools, AI integrations, API services, and analytics dashboards.',
  },
  {
    q: 'Where is the team located?',
    a: `The listed studio address is ${siteConfig.address}.`,
  },
  {
    q: 'What are your business hours?',
    a: siteConfig.businessHours.join(' | '),
  },
  {
    q: 'How can I contact Finlec?',
    a: `Call ${siteConfig.phone}, email ${siteConfig.email}, or use the contact form to send project details.`,
  },
  {
    q: 'Which technologies do you use?',
    a: 'We use tools such as React, Angular, Vue.js, Node.js, Python, PHP, Java, MySQL, MongoDB, AWS, Docker, Kubernetes, Git, Jenkins, Azure, Firebase, GraphQL, and TypeScript.',
  },
];

function Item({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-outline-variant last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="faq-item-btn w-full flex items-center justify-between gap-md text-left py-lg group"
      >
        <span className="text-h3 font-semibold text-on-surface group-hover:text-primary transition-colors">
          {q}
        </span>
        <span
          className={[
            'shrink-0 grid h-10 w-10 place-items-center rounded-full border border-outline-variant transition-all duration-300',
            open
              ? 'bg-primary text-white border-primary rotate-45'
              : 'bg-surface-container-lowest text-on-surface group-hover:border-primary group-hover:text-primary',
          ].join(' ')}
        >
          <Plus size={20} />
        </span>
      </button>
      <div
        className={[
          'grid transition-all duration-400 ease-out',
          open ? 'grid-rows-[1fr] opacity-100 pb-lg' : 'grid-rows-[0fr] opacity-0',
        ].join(' ')}
      >
        <div className="overflow-hidden">
          <p className="text-body-lg text-on-surface-variant max-w-3xl pr-0 sm:pr-12">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="bg-surface">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-2xl items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Questions
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">
              Quick answers before you contact us.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-md text-body-lg text-on-surface-variant max-w-md">
              These are the common questions people ask before starting a project.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="interactive-surface rounded-3xl bg-surface-container-lowest border border-outline-variant px-md shadow-low sm:px-xl">
            {faqs.map((f, i) => (
              <Item
                key={f.q}
                q={f.q}
                a={f.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
