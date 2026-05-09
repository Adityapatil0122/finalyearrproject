import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { clientSignals } from '@/data/clients';

export default function TestimonialsGrid() {
  return (
    <Section id="client-signals" className="bg-surface">
      <div className="max-w-2xl mb-2xl">
        <Reveal>
          <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
            Client outcomes
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-h1 text-balance">What clients rely on us to improve.</h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {clientSignals.map((signal, i) => (
          <Reveal key={signal.title} delay={i * 0.08}>
            <div className="interactive-surface surface-lift h-full rounded-2xl bg-surface-container-lowest border border-outline-variant p-xl shadow-low transition-all duration-300">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-md">
                <span className="material-symbols-outlined">{signal.icon}</span>
              </div>
              <h3 className="text-h3">{signal.title}</h3>
              <p className="mt-2 text-body-md text-on-surface-variant">{signal.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
