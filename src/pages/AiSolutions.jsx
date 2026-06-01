import { ArrowRight } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SiteCta from '@/components/ui/SiteCta';
import Icon from '@/components/ui/Icon';
import AiHeroAssistant from '@/components/ai/AiHeroAssistant';
import { aiIndustries, aiSolutions } from '@/data/aiSolutions';

const industryToneClasses = {
  primary: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white',
  secondary: 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white',
  tertiary: 'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white',
};

export default function AiSolutions() {
  useSEO({
    title: 'AI Solutions | Chatbots, AI Tools and Analytics - Finlec Technologies',
    description:
      'Build useful AI chatbots, custom AI tools, API integrations, and analytics dashboards with Finlec Technologies.',
    path: '/ai-solutions',
    keywords: [
      'AI chatbots',
      'custom AI solutions',
      'AI integration',
      'analytics dashboards',
      'AI solutions Pune',
    ],
  });

  return (
    <>
      <PageHero
        badge={{ icon: 'auto_awesome', label: 'AI that ships' }}
        title="AI tools that solve real business tasks."
        description="We build chatbots, custom AI tools, API integrations, and dashboards that fit your daily work."
        media={{
          node: <AiHeroAssistant />,
        }}
      >
        <Button
          to="/contact"
          size="lg"
          variant="white"
          magnetic
          iconRight={<ArrowRight size={18} />}
        >
          Plan an AI project
        </Button>
      </PageHero>

      <Section className="bg-surface !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {aiSolutions.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <div
                id={s.id}
                className="group interactive-surface surface-lift flex h-full flex-col scroll-mt-28 rounded-3xl bg-surface-container-lowest border border-outline-variant p-xl shadow-low transition-all duration-300"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-md group-hover:scale-105">
                  <Icon name={s.icon} size={28} />
                </div>
                <h3 className="text-h2 mb-2">{s.title}</h3>
                <p className="text-body-lg text-on-surface-variant">{s.summary}</p>
                <ul className="mt-md space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Icon name="check_circle" size={20} className="mt-1 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-lg">
                  <Button
                    to={s.link}
                    variant="outline"
                    iconRight={<ArrowRight size={16} />}
                    aria-label={`Open ${s.title} details`}
                  >
                    More Details
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-container-low">
        <div className="max-w-2xl mb-xl">
          <Reveal>
            <p className="section-eyebrow mb-2">
              Industries
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">AI support for common business needs.</h2>
          </Reveal>
        </div>
        <div className="ai-industry-grid grid grid-cols-2 gap-sm md:grid-cols-5">
          {aiIndustries.map((industry, i) => (
            <Reveal key={industry.label} delay={i * 0.03}>
              <div className="group interactive-surface surface-lift relative overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest p-md shadow-low transition-all duration-300 hover:border-primary/35 hover:shadow-high">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex min-h-[96px] flex-col items-center justify-center gap-3 text-center">
                  <span
                    className={[
                      'ai-industry-icon grid h-12 w-12 place-items-center rounded-2xl transition-all duration-300 group-hover:scale-110',
                      industryToneClasses[industry.tone],
                    ].join(' ')}
                    aria-hidden
                  >
                    <Icon name={industry.icon} size={26} />
                  </span>
                  <span className="text-label-sm font-semibold text-on-surface">
                    {industry.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <SiteCta title="Ready to make AI useful for your team?" />
    </>
  );
}
