import { ArrowRight } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SiteCta from '@/components/ui/SiteCta';
import Icon from '@/components/ui/Icon';
import ColorIcon from '@/components/ui/ColorIcon';
import AiHeroAssistant from '@/components/ai/AiHeroAssistant';
import { aiIndustries, aiSolutions } from '@/data/aiSolutions';


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

      <Section className="bg-surface !pt-12 md:!pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
          {aiSolutions.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <div
                id={s.id}
                className="group interactive-surface surface-lift flex h-full flex-col scroll-mt-28 rounded-2xl bg-surface-container-lowest border border-outline-variant p-lg shadow-low transition-all duration-300"
              >
                <ColorIcon name={s.icon} color={s.color || 'blue'} boxSize="h-12 w-12" radius="rounded-2xl" className="mb-sm" />
                <h3 className="text-h3 mb-1">{s.title}</h3>
                <p className="text-body-md text-on-surface-variant">{s.summary}</p>
                <ul className="mt-sm space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Icon name="check_circle" size={18} className="mt-0.5 shrink-0 text-primary" />
                      <span className="text-body-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-md">
                  <Button
                    to={s.link}
                    variant="outline"
                    iconRight={<ArrowRight size={15} />}
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
                  <ColorIcon name={industry.icon} color={industry.color || 'blue'} size={22} boxSize="h-12 w-12" radius="rounded-2xl" />
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
