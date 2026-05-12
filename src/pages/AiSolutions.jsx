import { ArrowRight } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SiteCta from '@/components/ui/SiteCta';
import { aiIndustries, aiSolutions } from '@/data/aiSolutions';

export default function AiSolutions() {
  useSEO({
    title: 'AI Solutions - Finlec Technologies',
    description:
      'AI-powered chatbots, custom AI solutions, integration APIs, and data analytics from Finlec Technologies.',
  });

  return (
    <>
      <PageHero
        badge={{ icon: 'auto_awesome', label: 'AI that ships' }}
        title="Comprehensive digital and AI solutions to help your business thrive."
        description="AI-powered chatbots, custom AI solutions, integration APIs, and analytics dashboards for real business workflows."
      >
        <Button to="/contact" size="lg" magnetic iconRight={<ArrowRight size={18} />}>
          Start your AI journey
        </Button>
      </PageHero>

      <Section className="bg-surface !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {aiSolutions.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <div
                id={s.id}
                className="group interactive-surface surface-lift h-full scroll-mt-28 rounded-3xl bg-surface-container-lowest border border-outline-variant p-xl shadow-low transition-all duration-300"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-md group-hover:scale-105">
                  <span className="material-symbols-outlined text-[28px]">{s.icon}</span>
                </div>
                <h3 className="text-h2 mb-2">{s.title}</h3>
                <p className="text-body-lg text-on-surface-variant">{s.summary}</p>
                <ul className="mt-md space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-1">
                        check_circle
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-container-low">
        <div className="max-w-2xl mb-xl">
          <Reveal>
            <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Industries
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">AI support across practical business contexts.</h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-sm">
          {aiIndustries.map((industry, i) => (
            <Reveal key={industry} delay={i * 0.03}>
              <div className="interactive-surface rounded-2xl border border-outline-variant bg-surface-container-lowest px-md py-3 text-center text-label-sm font-semibold text-on-surface shadow-low">
                {industry}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <SiteCta title="Ready to make AI useful inside your workflow?" />
    </>
  );
}
