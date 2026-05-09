import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { expertise } from '@/data/home';

const accentBg = {
  primary: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white',
  secondary: 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white',
  tertiary: 'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white',
};

export default function BentoExpertise() {
  return (
    <Section id="expertise" className="bg-surface">
      <div className="max-w-2xl mb-2xl">
        <Reveal>
          <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
            Core expertise
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-h1 text-balance">
            Six disciplines, one team — wired to ship the thing you actually need.
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {expertise.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.06}>
            <div className="group interactive-surface surface-lift h-full rounded-2xl bg-surface-container-lowest border border-outline-variant p-xl shadow-low transition-all duration-300">
              <div
                className={[
                  'grid h-12 w-12 place-items-center rounded-xl transition-all duration-300 mb-md group-hover:scale-105',
                  accentBg[e.accent] || accentBg.primary,
                ].join(' ')}
              >
                <span className="material-symbols-outlined">{e.icon}</span>
              </div>
              <h3 className="text-h3 mb-2">{e.title}</h3>
              <p className="text-body-md text-on-surface-variant">{e.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
