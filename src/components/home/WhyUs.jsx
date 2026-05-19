import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { usefulHighlights } from '@/data/home';

export default function WhyUs() {
  return (
    <Section id="why" className="bg-surface">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-2xl items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Useful coverage
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">One team for the work your business needs.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-md text-body-lg text-on-surface-variant max-w-md">
              Finlec helps with websites, apps, digital marketing, WhatsApp Business API,
              UI/UX, graphics, and AI.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          {usefulHighlights.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="group interactive-surface surface-lift h-full rounded-3xl border border-outline-variant bg-surface-container-lowest p-xl shadow-low">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-md transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                  <span className="material-symbols-outlined">{p.icon}</span>
                </div>
                <h3 className="text-h3">{p.title}</h3>
                <p className="mt-2 text-body-md text-on-surface-variant">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
